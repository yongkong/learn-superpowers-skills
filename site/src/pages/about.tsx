import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-10 space-y-8">
      <header className="space-y-2">
        <h1 className="font-serif text-4xl">关于本站</h1>
        <p className="text-muted-foreground">
          一份 superpowers 学习 workspace 的分享层。
        </p>
      </header>

      <section className="space-y-3">
        <h2 className="font-serif text-2xl">这份课程从哪来</h2>
        <p className="leading-relaxed">
          起源于一个真实需求：把 <a href="https://github.com/obra/superpowers" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-primary">obra/superpowers</a>{' '}
          引入一个 2–10 人的小团队。为了让"引入"这件事可执行，先用 Claude / Qoder 侧的{' '}
          <code className="px-1.5 py-0.5 bg-muted rounded font-mono text-sm">/teach</code> 工作流跑一遍 ——
          把每一节课作为独立 HTML 沉淀，配上打印友好的 reference 文档。本站就是把这些产物用 React +
          Tailwind + shadcn 风格的组件包了一层，方便分发。
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-serif text-2xl">技术栈</h2>
        <div className="grid md:grid-cols-2 gap-3">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">站点外壳</CardTitle>
              <CardDescription>React 18 · Vite 5 · TypeScript 5 · Tailwind 3.4 · React Router 6</CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              提供侧栏导航、暗色模式、课程路径、iframe 承载内容。shadcn/ui 风格的 Button / Card / Badge 直接内联在 <code className="font-mono">src/components/ui/</code>。
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-base">课程内容</CardTitle>
              <CardDescription>纯静态 HTML + 一份 quiz.js + 一份 course.css</CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              所有 lesson / reference 的 HTML 都独立可打开（在浏览器直接看也行）。构建时通过 <code className="font-mono">scripts/sync-content.mjs</code> 从 workspace 根目录同步到 <code className="font-mono">public/content/</code>。
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="font-serif text-2xl">如何二次分发</h2>
        <ol className="list-decimal pl-5 space-y-1.5 text-sm leading-relaxed">
          <li>在项目里跑 <code className="px-1.5 py-0.5 bg-muted rounded font-mono">npm run build</code> → 生成 <code className="font-mono">dist/</code></li>
          <li><code className="px-1.5 py-0.5 bg-muted rounded font-mono">dist/</code> 是纯静态目录 · 可以扔到 Vercel / Netlify / GitHub Pages / 公司内网 nginx · 不需要服务器</li>
          <li>同事访问 URL 就能浏览。所有 quiz 记录在各自浏览器的 localStorage，不会互相污染</li>
        </ol>
      </section>

      <section className="space-y-3">
        <h2 className="font-serif text-2xl">避坑声明</h2>
        <div className="rounded-md border border-amber-500/40 bg-amber-500/5 p-4 text-sm space-y-2">
          <p><strong>不是权威：</strong>本课程所有内容都是二手转述。任何一处和官方 <code className="font-mono">SKILL.md</code> 冲突，以官方为准。</p>
          <p><strong>会过时：</strong>Superpowers 迭代快（当前 6.x）。当官方 README 或 SKILL.md 更新时，本站需要跟着修订。每次修订我会加一份 learning-record 记录变化点。</p>
          <p><strong>不覆盖全部：</strong>本站只讲 7 步流水线 + 三路分类 + 计划/评审/验证。不安装指南、不覆盖除 Claude Code / Qoder 之外的 harness 差异、不讲如何发明新 skill。</p>
        </div>
      </section>

      <section className="space-y-2">
        <h2 className="font-serif text-2xl">反馈与讨论</h2>
        <p className="text-sm text-muted-foreground leading-relaxed">
          课程本身的问题：找你的老师（也就是当前 Qoder 里正在陪跑你的 agent）。
          Superpowers 本身的问题：{' '}
          <a href="https://github.com/obra/superpowers/issues" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">GitHub Issues</a>{' '}
          或官方 Discord。
        </p>
      </section>

      <footer className="pt-8 text-xs text-muted-foreground text-center border-t">
        <p>© {new Date().getFullYear()} · 本站不是官方作品。Superpowers 由 Jesse Vincent 与 Prime Radiant 团队开发，MIT License。</p>
      </footer>
    </div>
  );
}
