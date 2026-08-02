/**
 * Drives headless Chrome over the DevTools protocol to check every route for
 * horizontal overflow at phone, tablet and desktop widths, and to capture
 * true-viewport screenshots. Chrome on macOS enforces a minimum window width,
 * so --window-size alone cannot emulate a 375px phone; device metrics override
 * can.
 *
 *   node scripts/check-responsive.mjs <baseUrl> [screenshotDir]
 */
import { spawn } from "node:child_process";
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const CHROME =
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const BASE = process.argv[2] ?? "http://127.0.0.1:4321";
const SHOT_DIR = process.argv[3] ?? null;
const PORT = 9333;

const ROUTES = [
  "/",
  "/research/",
  "/publications/",
  "/tools/",
  "/tools/prelive/",
  "/about/",
];
const WIDTHS = [375, 768, 1440];

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const chrome = spawn(CHROME, [
  "--headless",
  "--disable-gpu",
  "--no-sandbox",
  "--hide-scrollbars",
  `--remote-debugging-port=${PORT}`,
  "--remote-allow-origins=*",
  "about:blank",
]);

let ws;
let msgId = 0;
const pending = new Map();

const send = (method, params = {}) =>
  new Promise((resolve, reject) => {
    const id = ++msgId;
    pending.set(id, { resolve, reject });
    ws.send(JSON.stringify({ id, method, params }));
  });

async function connect() {
  for (let i = 0; i < 40; i++) {
    try {
      const res = await fetch(`http://127.0.0.1:${PORT}/json/list`);
      const targets = await res.json();
      const page = targets.find((t) => t.type === "page");
      if (page) return page.webSocketDebuggerUrl;
    } catch {
      /* not up yet */
    }
    await sleep(250);
  }
  throw new Error("Chrome DevTools endpoint never became available");
}

const wsUrl = await connect();
ws = new WebSocket(wsUrl);
await new Promise((r) => (ws.onopen = r));
ws.onmessage = (e) => {
  const msg = JSON.parse(e.data);
  if (msg.id && pending.has(msg.id)) {
    const { resolve, reject } = pending.get(msg.id);
    pending.delete(msg.id);
    if (msg.error) reject(new Error(JSON.stringify(msg.error)));
    else resolve(msg.result);
  }
};

await send("Page.enable");
await send("Runtime.enable");

if (SHOT_DIR) await mkdir(SHOT_DIR, { recursive: true });

let failures = 0;

for (const width of WIDTHS) {
  console.log(`\n=== ${width}px ===`);
  for (const route of ROUTES) {
    await send("Emulation.setDeviceMetricsOverride", {
      width,
      height: 900,
      deviceScaleFactor: 1,
      mobile: width < 768,
    });

    await send("Page.navigate", { url: BASE + route });
    await sleep(1400);

    const { result } = await send("Runtime.evaluate", {
      expression: `(() => {
        const d = document.documentElement;
        const over = [...document.querySelectorAll('body *')]
          .filter(el => {
            const r = el.getBoundingClientRect();
            return r.width > 0 && (r.right > d.clientWidth + 1 || r.left < -1);
          })
          .slice(0, 4)
          .map(el => el.tagName.toLowerCase() + '.' + (el.className.toString().split(' ')[0] || '') +
                     ' [' + Math.round(el.getBoundingClientRect().left) + '..' +
                     Math.round(el.getBoundingClientRect().right) + ']');
        return JSON.stringify({
          scrollWidth: d.scrollWidth,
          clientWidth: d.clientWidth,
          overflows: over,
          h1: (document.querySelector('h1')||{}).innerText || null,
        });
      })()`,
      returnByValue: true,
    });

    const r = JSON.parse(result.value);
    const bad = r.scrollWidth > r.clientWidth + 1;
    if (bad) failures++;
    const flag = bad ? "OVERFLOW" : "ok      ";
    console.log(
      `  ${flag} ${route.padEnd(18)} scrollW=${r.scrollWidth} clientW=${r.clientWidth}` +
        (bad ? `\n           culprits: ${r.overflows.join(" | ")}` : ""),
    );

    if (SHOT_DIR) {
      const { data } = await send("Page.captureScreenshot", {
        format: "png",
        captureBeyondViewport: true,
      });
      const name =
        `${width}-${route.replace(/\//g, "_").replace(/^_|_$/g, "") || "home"}.png`;
      await writeFile(path.join(SHOT_DIR, name), Buffer.from(data, "base64"));
    }
  }
}

console.log(
  failures === 0
    ? "\nPASS — no horizontal overflow at any width."
    : `\nFAIL — ${failures} route/width combinations overflow.`,
);

ws.close();
chrome.kill();
process.exit(failures === 0 ? 0 : 1);
