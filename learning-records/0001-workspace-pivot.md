# Learning Record 0001 · Workspace Pivot

**日期**：2026-09（首次使命扩展）
**类型**：交付物形态变化

## 发生了什么

原初使命（MISSION.md 里 A + D 双主线）里，"交付物" 只是隐含的**学习产物**：若干节可反复回访的 HTML 课程 + 若干份打印友好的 reference。

在 Lesson 0003 完成、用户对 0004–0006 内容还没逐节学完的时候，用户提出：

> "把说有的课件一次写完，这个过程创建学习的网站 React + sandcn，通过这个网站，同事或更多的人可以使用"

这句话把 workspace 的性质从**个人学习容器**升级为**团队协作 + 对外分发的产品**：

- 6 节课剩余部分（0004/0005/0006）+ 2 份配套 reference 一次性写完
- 加一层 React + Vite + Tailwind + shadcn-style 网站外壳
- 目标：`npm run build` → 扔到 Vercel / Netlify / 内网 nginx → 同事访问 URL 就能学

## 为什么这算使命扩展，不是使命偏移

- 使命 A（真实做一个小产品）：网站本身**就是**第一个真实交付物。它 dogfood 了课程教的 brainstorm → plan → implement → verify 全流程
- 使命 D（带进 2–10 人团队）：分发层从"发 HTML 文件"变成"发 URL"，让"引入"这件事成本降到零
- 唯一新增：使命现在包含**"维护一个可分享静态站点"**这个持续责任

## 已做的决策

1. **内容层与网站层解耦**：所有 lesson/reference 仍是纯 HTML，网站是极简 iframe 外壳。理由：teach skill 的产物本来就是 HTML，改成 MDX 会破坏"任何同事脱离网站也能看"的能力
2. **不引 shadcn CLI**：`src/components/ui/` 里手写 Button / Card / Badge 三份 primitives。理由：shadcn CLI 会生成一整套依赖（`@radix-ui/*` + `next-themes` 等），本站规模用不上，且 vendored 源码方便同事魔改
3. **iframe sandbox = `allow-scripts` 但**不 `allow-same-origin`：quiz.js 需要 script 权限；不给 same-origin 是为了防止 quiz 状态被父页 DOM 污染，也防止未来某节课嵌入恶意脚本时能爬到父域
4. **构建前 sync**：`predev` / `prebuild` 钩子跑 `scripts/sync-content.mjs`，把 workspace 根的 lessons/reference/assets 复制到 `site/public/content/`。这样网站消费的是缓存副本，不直接依赖路径穿越

## 未知的未知（下一次要主动检查）

- 用户团队是否有内网托管偏好（Vercel 是否可达？Netlify 是否被合规禁止？）
- 网站上线后，是否要加**匿名访问统计**（可能触发公司合规）
- Superpowers 官方一旦迭代到 7.x，本站需要一次内容级 audit —— 记在 NOTES.md 的"已知内容风险"里

## 后续行动

- [x] 6 课 + 5 份 reference 完成
- [x] 网站外壳完成，code 层面修掉 3 个会导致 build 失败的问题
- [x] 推到 GitHub `yongkong/learn-superpowers-skills`
- [ ] 用户跑通 `npm install && npm run dev` 确认本地渲染
- [ ] 用户选一个部署平台，第一次上线
- [ ] 团队 demo：拿 30 分钟走 Lesson 0006 里的培训脚本
