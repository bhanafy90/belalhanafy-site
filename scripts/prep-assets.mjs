import sharp from 'sharp';
import { mkdir, copyFile, stat } from 'node:fs/promises';
import path from 'node:path';

const SRC = '/Users/bhanafy/Documents/Work/Projects (AI)/Personal website ';
const OUT = '/Users/bhanafy/Documents/belalhanafy-site/public';

const jobs = [
  {
    src: path.join(SRC, 'advanced healthcare Materials front cover.jpg'),
    dir: 'covers',
    name: 'adhm-cover',
    // 240 serves the thumbnail strip, 720 the hero at common desktop widths;
    // without them the browser over-fetches by ~80 KB.
    widths: [240, 480, 720, 960, 1600],
  },
  {
    src: path.join(SRC, 'JCR inside front cover.png'),
    dir: 'covers',
    name: 'jcr-cover',
    widths: [240, 480, 939],
  },
  {
    src: path.join(SRC, 'personal photo.jpg'),
    dir: 'img',
    name: 'belal-hanafy',
    widths: [400, 610],
  },
];

for (const job of jobs) {
  const outDir = path.join(OUT, job.dir);
  await mkdir(outDir, { recursive: true });
  const meta = await sharp(job.src).metadata();
  console.log(`\n${job.name}  source ${meta.width}x${meta.height}`);

  for (const w of job.widths) {
    const base = sharp(job.src).resize({ width: w, withoutEnlargement: true });
    const targets = [
      ['avif', base.clone().avif({ quality: 55, effort: 6 })],
      ['webp', base.clone().webp({ quality: 78 })],
      ['jpg', base.clone().jpeg({ quality: 82, mozjpeg: true })],
    ];
    for (const [ext, pipeline] of targets) {
      const file = path.join(outDir, `${job.name}-${w}.${ext}`);
      await pipeline.toFile(file);
      const { size } = await stat(file);
      console.log(`  ${job.name}-${w}.${ext.padEnd(4)} ${(size / 1024).toFixed(0).padStart(5)} KB`);
    }
  }
}

// PRELIVE interactive tool — copied byte-for-byte, never reformatted.
// Lives under /embeds rather than /tools/prelive/, because the Next route of
// that name emits its own index.html there and the two would collide.
const toolDir = path.join(OUT, 'embeds');
await mkdir(toolDir, { recursive: true });
const toolSrc = path.join(SRC, 'adfm73162-sup-0002-suppmat.html');
const toolDst = path.join(toolDir, 'prelive.html');
await copyFile(toolSrc, toolDst);
const a = await stat(toolSrc);
const b = await stat(toolDst);
console.log(`\nPRELIVE tool: ${(b.size / 1024 / 1024).toFixed(2)} MB  byte-identical: ${a.size === b.size}`);
