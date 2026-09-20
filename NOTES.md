# NOTES

给未来的我（agent）看的备忘。记录用户偏好、教学笔记。

## 用户偏好
- **语言**：中文为主，英文 skill 名保留原样
- **起点**：用过一部分 skill，不是零基础。可以直接引用 SKILL.md 原文段落，不用先解释"什么是 skill"
- **禁言清单**：安装、工具链、harness 差异 —— 用户明说"已掌握"
- **风格暗示**：用户选 "A+D" 时用的是简写，说明偏好简洁、不喜欢被长篇问题轰炸。课程 HTML 要密度高，少废话

## 教学策略
- 双主线要一直绑定：mission D（团队布道）意味着每节课的最后一段最好是"**如何给别人讲这件事**"或"**最容易踩的坑**"，这两类内容用户可以直接复制到 team wiki
- 用户已经用过一部分 skill → 最大风险是 "fluency illusion"（当下感觉会，隔天记不住）。所以**每节课都放 recall quiz**，且第一题必须**回指上一节课**（spacing）
- 第一课选 "brainstorming 三路分类" 而不是 "7 步流水线概览"，因为：
  1. 三路分类是**具体决策**，7 步是**地图**；地图适合做参考文档，不适合做第一课
  2. 团队引入的第一阻力通常是"这么小的事也要写 spec？"——三路分类正好回答这个

## 待办 / 未来课程线索
- [x] 0001 三路分类
- [x] 0002 7 步流水线全景（含 reference/superpowers-pipeline.html）
- [x] 0003 writing-plans 的 "No Placeholders"（P1–P6 + 反面/正面示例）
- [x] 0004 subagent-driven vs native 的取舍（含 reference/execution-modes.html）
- [x] 0005 verification-before-completion Iron Law + 4 类假完成
- [x] 0006 团队布道整合课（含 reference/evangelism-1pager.html · A4 打印版）
- [x] **交付物扩展**：把 6 课 + 5 份 reference 包成 React + shadcn 网站（`site/`），推到 GitHub `yongkong/learn-superpowers-skills` —— 见 learning-records/0001

## 需要问用户的事
- 小产品的具体方向（不锁定，但当他开始跑 brainstorming 时会用到）
- 团队里是否已有 agent 编程经验，还是纯从 0
- 网站部署到哪：Vercel / Netlify / GitHub Pages / 内网 nginx —— 用户下一次跑通 `npm run build` 后自然要选

## 已知内容风险（未来回访时优先检查）
- Superpowers 官方迭代快（当前 6.x）：任何一处和官方 SKILL.md 冲突，以官方为准，改本地课 + 加 learning-record
- P1–P6 编号是**教学造词**，官方 SKILL.md 只列了失败模式没有编号；每份文档已明确标注
- Subagent vs Native 的判据里，"Ledger / Rulings / 4 stop conditions / 5-round fix loop" 都是 subagent-driven-development SKILL.md 里的原词，不要随意 paraphrase
