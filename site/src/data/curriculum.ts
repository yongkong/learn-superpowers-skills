// 课程结构定义 —— 网站侧边栏、首页、课程表页都读这里
// 顺序即学习顺序

export type Lesson = {
  slug: string;      // 文件名去掉 .html，例如 "0001-choose-your-path"
  num: number;       // 显示编号
  title: string;     // 短标题（侧栏用）
  fullTitle: string; // 完整标题
  minutes: number;   // 建议学习时长
  summary: string;   // 一句话摘要
  path: string;      // iframe 加载路径
};

export type Reference = {
  slug: string;
  title: string;
  summary: string;
  path: string;
  relatedLesson?: number;
};

export const lessons: Lesson[] = [
  {
    slug: '0001-choose-your-path',
    num: 1,
    title: '三路分类',
    fullTitle: 'Spike / Bounded / Architectural',
    minutes: 12,
    summary: '拿到需求 · 先判断它属于哪一路。这是 superpowers 的第一道闸门。',
    path: '/content/lessons/0001-choose-your-path.html',
  },
  {
    slug: '0002-seven-step-pipeline',
    num: 2,
    title: '7 步流水线',
    fullTitle: 'Superpowers 完整工作流全景',
    minutes: 14,
    summary: '从 brainstorming 到 finishing-a-development-branch · 认识每一步的存在理由。',
    path: '/content/lessons/0002-seven-step-pipeline.html',
  },
  {
    slug: '0003-no-placeholders',
    num: 3,
    title: 'No Placeholders',
    fullTitle: '让 plan 从"看起来对"到"能交付"',
    minutes: 15,
    summary: '六种 plan 失败模式 · P1–P6 · 让你审 plan 时能一眼定位问题。',
    path: '/content/lessons/0003-no-placeholders.html',
  },
  {
    slug: '0004-execution-mode',
    num: 4,
    title: '执行模式岔路',
    fullTitle: 'Subagent-driven vs Native',
    minutes: 14,
    summary: '"能不能让 agent 无人值守跑 2 小时" 取决于这一步的选择。',
    path: '/content/lessons/0004-execution-mode.html',
  },
  {
    slug: '0005-verification-gate',
    num: 5,
    title: 'Verification Iron Law',
    fullTitle: '证据先于声明',
    minutes: 12,
    summary: 'AI 说"完成"不算完成 · 没跑过的绿灯 = 假绿灯。',
    path: '/content/lessons/0005-verification-gate.html',
  },
  {
    slug: '0006-team-evangelism',
    num: 6,
    title: '团队布道整合',
    fullTitle: '30 分钟把 superpowers 讲给同事',
    minutes: 18,
    summary: '把 0001–0005 打包成 · 培训脚本 + 5 种抵触应答 + 度量方式。',
    path: '/content/lessons/0006-team-evangelism.html',
  },
];

export const references: Reference[] = [
  {
    slug: 'brainstorming-paths',
    title: 'Brainstorming 三路分类速查表',
    summary: 'Spike / Bounded / Architectural · 完整对照表 · 打印友好',
    path: '/content/reference/brainstorming-paths.html',
    relatedLesson: 1,
  },
  {
    slug: 'superpowers-pipeline',
    title: '7 步流水线速查图',
    summary: '每步的退出闸门 · 失败模式 · Subagent vs Native 对比',
    path: '/content/reference/superpowers-pipeline.html',
    relatedLesson: 2,
  },
  {
    slug: 'writing-plans-checklist',
    title: 'writing-plans 检查清单',
    summary: 'Plan 骨架 · P1–P6 六种失败 · Self-review 4 项',
    path: '/content/reference/writing-plans-checklist.html',
    relatedLesson: 3,
  },
  {
    slug: 'execution-modes',
    title: '执行模式决策表',
    summary: 'Subagent vs Native · 决策矩阵 · 4 个 stop 条件 · Ledger 格式',
    path: '/content/reference/execution-modes.html',
    relatedLesson: 4,
  },
  {
    slug: 'evangelism-1pager',
    title: '团队布道 1-pager',
    summary: 'A4 双面打印 · 培训当天贴在会议室 · 团队 wiki 首页',
    path: '/content/reference/evangelism-1pager.html',
    relatedLesson: 6,
  },
];

export const totalMinutes = lessons.reduce((acc, l) => acc + l.minutes, 0);
