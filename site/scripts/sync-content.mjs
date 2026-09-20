// sync-content.mjs
// 把教学 workspace 里的 lessons / reference / assets 复制到 site/public/content/
// 这样 Vite dev server 与 build 都能直接以 /content/lessons/0001-...html 加载
//
// 用法：`npm run sync`（或 `predev` / `prebuild` 自动跑）
// 增量：先 rm -rf public/content 再重新拷贝，简单可靠

import { promises as fs } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const siteRoot = path.resolve(__dirname, '..');
const wsRoot = path.resolve(siteRoot, '..'); // workspace root (d:\dev\AI\superpower)
const outDir = path.join(siteRoot, 'public', 'content');

async function rmrf(p) {
  await fs.rm(p, { recursive: true, force: true });
}

async function copyDir(src, dest) {
  await fs.mkdir(dest, { recursive: true });
  const entries = await fs.readdir(src, { withFileTypes: true });
  for (const e of entries) {
    const s = path.join(src, e.name);
    const d = path.join(dest, e.name);
    if (e.isDirectory()) await copyDir(s, d);
    else await fs.copyFile(s, d);
  }
}

async function exists(p) {
  try { await fs.access(p); return true; } catch { return false; }
}

const targets = ['lessons', 'reference', 'assets'];

async function main() {
  console.log('[sync-content] workspace:', wsRoot);
  console.log('[sync-content] output   :', outDir);
  await rmrf(outDir);
  await fs.mkdir(outDir, { recursive: true });
  let count = 0;
  for (const t of targets) {
    const src = path.join(wsRoot, t);
    if (!(await exists(src))) {
      console.warn(`  ! missing: ${src} (skipped)`);
      continue;
    }
    await copyDir(src, path.join(outDir, t));
    const files = await fs.readdir(src);
    count += files.length;
    console.log(`  ✓ copied ${t}/ (${files.length} entries)`);
  }
  console.log(`[sync-content] done. ${count} files.`);
}

main().catch((err) => {
  console.error('[sync-content] FAILED:', err);
  process.exit(1);
});
