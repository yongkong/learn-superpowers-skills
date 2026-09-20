# Mission: Superpowers

## Why
双主线：
1. **A — 真正做一个自己的小产品**：用 superpowers 完整跑通 brainstorm → spec → plan → 实现 → 交付，把一个自己会真实使用的小产品从 0 送上线。不是 demo、不是练手，是可交付。
2. **D — 带进 2–10 人小团队**：把这套方法作为团队默认的 agent 协作纪律推行。需要能向同事讲清"每一步为什么在这"，而不只是"按 README 装一下"。

## Success looks like
- 自己的小产品：用 superpowers 完整走过一次 7 步流程并 ship 出去（有真实用户或自己日活使用）
- 能在白板上用 5 分钟给同事讲清 7 步流水线，并回答"为什么不能跳过 brainstorming"这类质疑
- 拿到一个模糊需求时，**自己先**能判断它是 Spike / Bounded / Architectural 中的哪一路，并据此选择是否要求写 spec
- 团队其他人第一次用 superpowers 时，我能陪跑一个真实任务，指出他们在哪一步偷懒或越级
- 能改写 skill 的措辞以适配团队语境（不追求发明新 skill，只求把已有 skill 讲明白、用对）

## Constraints
- **安装 / 工具链已掌握**，不讲 —— 直接从方法论与实战切入
- 已经用过一部分 skill，不是零基础：课程要假设我能读懂 SKILL.md 里的英文原文
- 学习节奏：短小高频，每节课 ≤ 15 分钟可完成，给一个能立即在真实项目里用的动作
- 主 harness 是 Qoder（当前环境）+ Claude Code 系兼容工具；skill 名与工具名以此为准
- **本课程网站本身 = 使命 A 的第一个 dogfood 交付物**：`site/` 用 React + Vite + Tailwind + shadcn-style primitives 手写，走的就是 superpowers 自己推荐的 brainstorm→plan→implement→verify 流程；这个仓库上线之后，才谈得上把方法推到团队其他项目

## Out of scope
- 如何写一个 *全新的* 领域 skill（writing-skills 的深水区）—— 除非 mission 后续转向"二开"
- 除 Claude Code 系之外的其他 harness（Gemini CLI / Codex / Cursor）的配置差异
- Vibe coding、prompt engineering 通用技巧 —— 这不是 superpowers 关心的层
- 具体业务项目的技术选型（前端框架、数据库…）
