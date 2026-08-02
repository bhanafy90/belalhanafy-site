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
  {
    // DoE / SVEM figure from the PRELIVE paper, illustrating the composition
    // -> model -> in-vivo prediction pipeline.
    src: path.join(SRC, 'research-prelive.jpg'),
    dir: 'research',
    name: 'prelive-figure',
    widths: [480, 768, 1200],
  },
  {
    // SCISSOR release/transmission profile -> SVEM bioavailability figure
    // from the JCR mAbs paper.
    src: path.join(SRC, 'research-biopharm.png'),
    dir: 'research',
    name: 'biopharm-figure',
    widths: [480, 768, 1200],
  },
  {
    // Cell-type Venn diagram from the AHM tropism paper.
    src: path.join(SRC, 'research-tropism.png'),
    dir: 'research',
    name: 'tropism-figure',
    widths: [480, 768, 1200],
  },
];

for (const job of jobs) {
  try {
    const outDir = path.join(OUT, job.dir);
    await mkdir(outDir, { recursive: true });
    const meta = await sharp(job.src).metadata();
    console.log(`\n${job.name}  source ${meta.width}x${meta.height}`);

    for (const w of job.widths) {
      const base = sharp(job.src).resize({ width: w, withoutEnlargement: true });
      const targets = [
        ['avif', base.clone().avif({ quality: 55, effort: 6 })],
        ['webp', base.clone().webp({ quality: 78 })],
        [
          'jpg',
          base
            .clone()
            .flatten({ background: '#ffffff' }) // no-op on already-opaque sources; keeps RGBA figures off a black jpg fallback
            .jpeg({ quality: 82, mozjpeg: true }),
        ],
      ];
      for (const [ext, pipeline] of targets) {
        const file = path.join(outDir, `${job.name}-${w}.${ext}`);
        await pipeline.toFile(file);
        const { size } = await stat(file);
        console.log(`  ${job.name}-${w}.${ext.padEnd(4)} ${(size / 1024).toFixed(0).padStart(5)} KB`);
      }
    }
  } catch (err) {
    // One missing source (e.g. a renamed file) shouldn't block every other job.
    console.error(`\n${job.name}  SKIPPED: ${err.message}`);
  }
}

// PRELIVE interactive tool — copied byte-for-byte, never reformatted.
// Lives under /embeds rather than /tools/prelive/, because the Next route of
// that name emits its own index.html there and the two would collide. Named
// .jmp rather than .html because Vercel's Next.js static-export builder
// resolves any .html-suffixed request against Next's own page manifest and
// 404s anything that isn't a real page, even a literal static file on disk;
// vercel.json sets the Content-Type header back to text/html for this path.
const toolDir = path.join(OUT, 'embeds');
await mkdir(toolDir, { recursive: true });
const toolSrc = path.join(SRC, 'adfm73162-sup-0002-suppmat.html');
const toolDst = path.join(toolDir, 'prelive.jmp');
await copyFile(toolSrc, toolDst);
const a = await stat(toolSrc);
const b = await stat(toolDst);
console.log(`\nPRELIVE tool: ${(b.size / 1024 / 1024).toFixed(2)} MB  byte-identical: ${a.size === b.size}`);
