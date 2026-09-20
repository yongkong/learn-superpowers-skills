# learn-superpowers-skills · site

superpowers 学习课程的 **React 分享外壳**。

## 架构

- **内容层** = workspace 根目录下的 `lessons/*.html` + `reference/*.html` + `assets/*`（teach skill 原生产物）
- **网站层** = 本目录，React 18 + Vite 5 + TypeScript 5 + Tailwind 3.4 + React Router 6
- **连接方式** = `<iframe sandbox="allow-scripts ...">` 承载静态 HTML，quiz.js 在 iframe 内正常运行；构建前 `scripts/sync-content.mjs` 把 workspace 根内容复制到 `public/content/`

这样分层的收益：
1. 内容仍是纯 HTML，同事下载下来脱离网站也能看
2. 网站是极简外壳 —— 不需要 MDX 编译器、不需要 frontmatter 解析
3. 内容改版与网站改版解耦

## 常用命令

```bash
npm install      # 装依赖
npm run dev      # 起本地 dev server（会自动 predev → sync content）
npm run sync     # 只同步 workspace 根的 lessons/reference/assets 到 public/content/
npm run build    # 类型检查 + vite build → 产出 dist/
npm run preview  # 本地预览 dist/
```

## 部署

`npm run build` 后 `dist/` 是**纯静态目录**，任选：

| 目标 | 步骤 |
|------|------|
| Vercel | 导入本 repo，Framework = Vite，Root Directory = `site` |
| Netlify | Build command `npm run build` · Publish directory `site/dist` |
| GitHub Pages | 把 `dist/` 内容推到 `gh-pages` 分支 |
| 公司内网 nginx | 把 `dist/` scp 到 web root 即可 |

## 二次开发注意

- **加一节新课**：在 workspace 根 `lessons/000X-xxx.html` 写内容 → 编辑 `src/data/curriculum.ts` 加一条元数据 → 完成。侧栏、首页、课程表都从这一份真相源生成
- **改主题色**：编辑 `src/index.css` 里 `:root { --primary / --background / ... }` 的 HSL 变量（shadcn 惯例）
- **不要**把 `public/content/` 提交进 git —— 每次 `npm run dev/build` 都会重新同步；`.gitignore` 已排除

## 已知依赖

- `class-variance-authority` · `clsx` · `tailwind-merge` · `lucide-react` · `react-router-dom`
- shadcn/ui 风格 primitives 手写内联在 `src/components/ui/`（未使用 shadcn CLI，避免 config 冲突）
