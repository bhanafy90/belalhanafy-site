/**
 * Guards two deliberate decisions about what this site must never publish:
 * the personal phone number from the source CV, and the CV itself.
 * Run against ./out after a build.
 */
import { readdir, readFile, stat } from "node:fs/promises";
import path from "node:path";

const OUT = "out";

/** Digits only, so formatting differences cannot slip past. */
const PHONE = "7754136872";
const CV_PATTERN = /(^|[^a-z])(cv|curriculum[-_ ]?vitae|resume)([^a-z]|$)/i;

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) files.push(...(await walk(full)));
    else files.push(full);
  }
  return files;
}

try {
  await stat(OUT);
} catch {
  console.error(`No ./${OUT} directory — run \`npm run build\` first.`);
  process.exit(1);
}

const files = await walk(OUT);
const failures = [];

for (const file of files) {
  const base = path.basename(file);
  if (CV_PATTERN.test(base)) {
    failures.push(`CV-like file published: ${file}`);
  }

  if (/\.(html|js|json|xml|txt|css)$/i.test(file)) {
    const text = await readFile(file, "utf8");
    const digits = text.replace(/\D/g, "");
    if (digits.includes(PHONE)) {
      failures.push(`Phone number present in: ${file}`);
    }
  }
}

if (failures.length) {
  console.error("FAIL");
  for (const f of failures) console.error("  " + f);
  process.exit(1);
}

console.log(
  `PASS — ${files.length} files checked; no phone number, no CV in the build.`,
);
