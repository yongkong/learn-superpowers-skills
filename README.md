# learn-superpowers-skills

一份关于 [obra/superpowers](https://github.com/obra/superpowers) 的**中文学习 workspace + 可分发网站**。

- **6 节课**（每节 12–18 分钟）+ **5 份打印友好 reference**
- 每一段主张都锚回官方 SKILL.md 一手来源
- 面向"用过一部分 skill，但没有系统梳理"的开发者
- 特别为 **2–10 人小团队推行** 场景设计：每节课最后一段都可以直接甩给同事

## 目录结构

```
.
├── MISSION.md            # 这份课程为何存在（学习使命）
├── RESOURCES.md          # 一手 / 二手资料清单
├── NOTES.md              # 教学 agent 的备忘（用户偏好、策略）
├── lessons/              # 6 节静态 HTML 课
│   ├── 0001-choose-your-path.html
│   ├── 0002-seven-step-pipeline.html
│   ├── 0003-no-placeholders.html
│   ├── 0004-execution-mode.html
│   ├── 0005-verification-gate.html
│   └── 0006-team-evangelism.html
├── reference/            # 5 份速查表 / 打印版
│   ├── brainstorming-paths.html
│   ├── superpowers-pipeline.html
│   ├── writing-plans-checklist.html
│   ├── execution-modes.html
│   └── evangelism-1pager.html
├── assets/               # 共享 CSS + quiz.js
├── learning-records/     # 每次使命/内容演进的日志
└── site/                 # React + Vite + Tailwind + shadcn-style 网站外壳
```

## 直接使用（不启动网站）

所有 `lessons/*.html` 与 `reference/*.html` 都是**独立可打开**的静态页面：

- 双击在浏览器打开，quiz.js 通过 `file://` 协议也能跑
- 单独打印：`reference/evangelism-1pager.html` 已内嵌 A4 双面打印 CSS
- 嵌入团队 wiki：复制 HTML 片段即可，不依赖本站 React

## 启动网站

```bash
cd site
npm install
npm run dev     # http://localhost:5173
npm run build   # 生成 site/dist/，纯静态，可扔到任何地方
```

详见 [site/README.md](./site/README.md)。

## 内容索引

| # | 课程 | 分钟 | 核心动作 |
|---|------|------|----------|
| 0001 | [Choose Your Path](./lessons/0001-choose-your-path.html) | 14 | 拿到需求，先分 Spike / Bounded / Architectural |
| 0002 | [The 7-Step Pipeline](./lessons/0002-seven-step-pipeline.html) | 15 | 白板讲清 brainstorm → worktree → plan → execute → TDD → review → finish |
| 0003 | [No Placeholders](./lessons/0003-no-placeholders.html) | 16 | 用 P1–P6 六 pattern 一眼审一份 plan 是否可交付 |
| 0004 | [Subagent vs Native](./lessons/0004-execution-mode.html) | 14 | 什么时候用 subagent-driven-development，什么时候用 executing-plans |
| 0005 | [Verification Gate](./lessons/0005-verification-gate.html) | 12 | Iron Law：没跑验证之前不许说"完成" |
| 0006 | [Team Evangelism](./lessons/0006-team-evangelism.html) | 18 | 30 分钟培训脚本 + 5 种抵触应答 |

## 关于本站

- 不是权威。当任何内容与官方 SKILL.md 冲突，以官方为准
- 会过时。Superpowers 迭代快（当前 6.x），每次官方变更本站需跟进 → 见 learning-records/
- MIT License。Superpowers 本身版权归 Jesse Vincent / Prime Radiant

## Credit

- 课程由 [mattpocock/skills](https://github.com/mattpocock/skills) 的 `/teach` 工作流生成
- 主题内容基于 [obra/superpowers](https://github.com/obra/superpowers) 的 SKILL.md 一手素材
