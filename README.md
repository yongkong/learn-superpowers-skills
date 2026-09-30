# learn-superpowers-skills

一份关于 [obra/superpowers](https://github.com/obra/superpowers) 的**中文学习课程**：6 节课 + 5 份速查表，可在线阅读、本地打开、打印分发。

> 🌐 **在线阅读（推荐）**：https://learn-superpowers-skills.vercel.app

_A study course for the [Superpowers](https://github.com/obra/superpowers) agent skills framework — in Chinese._

- **6 节课**（每节 12–18 分钟）+ **5 份打印友好 reference**
- 每一段主张都锚回官方 SKILL.md 一手来源
- 面向"用过一部分 skill，但没有系统梳理"的开发者
- 特别为 **2–10 人小团队推行** 场景设计：每节课最后一段都可以直接甩给同事

## 学习方式（三选一）

| 方式 | 适合场景 | 入口 |
| --- | --- | --- |
| 在线阅读 | 大多数人，手机/电脑均可 | [learn-superpowers-skills.vercel.app](https://learn-superpowers-skills.vercel.app) |
| 本地打开 | 断网 / 内网环境 | 双击 `lessons/*.html`，quiz 在 `file://` 协议下也能跑 |
| 打印分发 | 团队培训、工位速查 | `reference/evangelism-1pager.html` 已内嵌 A4 双面打印 CSS |

## 课程目录

| # | 课程 | 分钟 | 核心动作 |
|---|------|------|----------|
| 0001 | [Choose Your Path](https://learn-superpowers-skills.vercel.app/lesson/0001-choose-your-path) | 14 | 拿到需求，先分 Spike / Bounded / Architectural |
| 0002 | [The 7-Step Pipeline](https://learn-superpowers-skills.vercel.app/lesson/0002-seven-step-pipeline) | 15 | 白板讲清 brainstorm → worktree → plan → execute → TDD → review → finish |
| 0003 | [No Placeholders](https://learn-superpowers-skills.vercel.app/lesson/0003-no-placeholders) | 16 | 用 P1–P6 六 pattern 一眼审一份 plan 是否可交付 |
| 0004 | [Subagent vs Native](https://learn-superpowers-skills.vercel.app/lesson/0004-execution-mode) | 14 | 什么时候用 subagent-driven-development，什么时候用 executing-plans |
| 0005 | [Verification Gate](https://learn-superpowers-skills.vercel.app/lesson/0005-verification-gate) | 12 | Iron Law：没跑验证之前不许说"完成" |
| 0006 | [Team Evangelism](https://learn-superpowers-skills.vercel.app/lesson/0006-team-evangelism) | 18 | 30 分钟培训脚本 + 5 种抵触应答 |

速查表（brainstorming-paths / superpowers-pipeline / writing-plans-checklist / execution-modes / evangelism-1pager）同样可在[在线站点](https://learn-superpowers-skills.vercel.app/reference/brainstorming-paths)阅读，或直接使用仓库里的 HTML 文件。

## 目录结构

```
.
├── MISSION.md            # 这份课程为何存在（学习使命）
├── RESOURCES.md          # 一手 / 二手资料清单
├── NOTES.md              # 教学 agent 的备忘（用户偏好、策略）
├── lessons/              # 6 节静态 HTML 课（在线站点的独立源头文件）
├── reference/            # 5 份速查表 / 打印版
├── assets/               # 共享 CSS + quiz.js
├── learning-records/     # 每次使命/内容演进的日志
└── site/                 # React + Vite + Tailwind + shadcn-style 网站外壳
```

## 本地开发网站（可选）

```bash
cd site
npm install
npm run dev     # http://localhost:5173
npm run build   # 生成 site/dist/，纯静态，可扔到任何地方
```

详见 [site/README.md](./site/README.md)。

## 边界与维护

- 不是权威。当任何内容与官方 SKILL.md 冲突，以[官方仓库](https://github.com/obra/superpowers)为准
- 会过时。Superpowers 迭代快，每次官方变更本课程需跟进 → 演进记录见 [learning-records/](./learning-records/)

## License

- 本课程内容（lessons / reference / site）以 [MIT](./LICENSE) 发布：欢迎分发、改编，保留一份署名即可
- [obra/superpowers](https://github.com/obra/superpowers) 本身同为 MIT，版权归 Jesse Vincent（obra）

## Credit

- 课程由 [mattpocock/skills](https://github.com/mattpocock/skills) 的 `/teach` 工作流生成
- 主题内容基于 [obra/superpowers](https://github.com/obra/superpowers) 的 SKILL.md 一手素材
