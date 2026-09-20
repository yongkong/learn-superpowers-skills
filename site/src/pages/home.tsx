import { Link } from 'react-router-dom';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { lessons, references, totalMinutes } from '@/data/curriculum';
import { ArrowRight, Clock, Users, Sparkles, Github } from 'lucide-react';

export function HomePage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-10 space-y-12">
      {/* Hero */}
      <section className="space-y-5">
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="gap-1.5">
            <Sparkles className="h-3 w-3" />
            6 节课 · 约 {totalMinutes} 分钟
          </Badge>
          <Badge variant="outline" className="gap-1.5">
            <Users className="h-3 w-3" />
            为 2–10 人小团队准备
          </Badge>
        </div>
        <h1 className="font-serif text-4xl md:text-5xl leading-tight tracking-tight">
          Superpowers：让 AI 编程有<em className="text-primary not-italic font-semibold">纪律</em>
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          这套课程不是教你"如何 prompt AI"，是教你怎么把「AI 帮我写代码」变成
          「agent 按流程交付软件」。所有主张可回溯到{' '}
          <a
            href="https://github.com/obra/superpowers"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 text-foreground hover:text-primary"
          >
            obra/superpowers
          </a>{' '}
          的一手 SKILL.md。
        </p>
        <div className="flex flex-wrap gap-3 pt-2">
          <Link to={`/lesson/${lessons[0].slug}`} className={cn(buttonVariants(), 'gap-2')}>
            开始第一课 <ArrowRight className="h-4 w-4" />
          </Link>
          <Link to="/curriculum" className={cn(buttonVariants({ variant: 'outline' }))}>
            看完整课程表
          </Link>
        </div>
      </section>

      {/* What you'll be able to do */}
      <section className="space-y-4">
        <h2 className="font-serif text-2xl">学完你将能够</h2>
        <div className="grid gap-4 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">判断该走哪一路</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              拿到一个需求，先分清它是 Spike · Bounded · Architectural。判据不是任务大小，是"这条流程仓库里能读到吗"。
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-base">审一份 plan 是否可交付</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              用 P1–P6 六个 pattern 一眼扫过去，命中任意一条 = 退回。不再需要读完全部代码。
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-base">向同事讲清 30 分钟</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              一份培训脚本 + 白板 7 步流水线 + 5 种抵触应答 + Live demo。团队推行的最小可行包。
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Lessons grid */}
      <section className="space-y-4">
        <div className="flex items-baseline justify-between">
          <h2 className="font-serif text-2xl">课程</h2>
          <span className="text-sm text-muted-foreground flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" /> 每节课 12–18 分钟
          </span>
        </div>
        <div className="grid gap-3 md:grid-cols-2">
          {lessons.map((l) => (
            <Link
              key={l.slug}
              to={`/lesson/${l.slug}`}
              className="group"
            >
              <Card className="h-full transition-colors group-hover:border-primary/40">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <span className="font-mono">L{l.num.toString().padStart(2, '0')}</span>
                    <span>·</span>
                    <span>{l.minutes} 分钟</span>
                  </div>
                  <CardTitle className="text-lg leading-tight">{l.fullTitle}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm leading-relaxed">{l.summary}</CardDescription>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* References */}
      <section className="space-y-4">
        <h2 className="font-serif text-2xl">参考文档</h2>
        <p className="text-sm text-muted-foreground -mt-2">
          速查表与打印版。这些比课程本身更常回访 —— 团队 wiki 直接嵌入。
        </p>
        <div className="grid gap-2 md:grid-cols-2">
          {references.map((r) => (
            <Link
              key={r.slug}
              to={`/reference/${r.slug}`}
              className="block rounded-lg border bg-card p-4 hover:border-primary/40 transition-colors"
            >
              <div className="flex items-baseline justify-between gap-2">
                <div className="font-medium">{r.title}</div>
                {r.relatedLesson && (
                  <Badge variant="secondary" className="shrink-0 font-mono text-[10px]">
                    L{r.relatedLesson.toString().padStart(2, '0')}
                  </Badge>
                )}
              </div>
              <div className="text-xs text-muted-foreground mt-1">{r.summary}</div>
            </Link>
          ))}
        </div>
      </section>

      {/* Community */}
      <section className="rounded-lg border bg-secondary/40 p-6 space-y-3">
        <div className="flex items-center gap-2">
          <Github className="h-5 w-5" />
          <h2 className="font-serif text-xl">一手来源与社区</h2>
        </div>
        <p className="text-sm text-muted-foreground">
          本课程只是二手转述。真正的权威定义在 obra/superpowers 仓库的 SKILL.md 里。
          遇到"这样用对不对"的问题，优先去 GitHub Issues 或官方 Discord 问。
        </p>
        <div className="flex flex-wrap gap-2 pt-1">
          <a
            href="https://github.com/obra/superpowers"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(buttonVariants({ variant: 'outline', size: 'sm' }))}
          >
            GitHub Repo
          </a>
          <a
            href="https://github.com/obra/superpowers/issues"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(buttonVariants({ variant: 'outline', size: 'sm' }))}
          >
            Issues
          </a>
          <a
            href="https://fsck.com/"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(buttonVariants({ variant: 'outline', size: 'sm' }))}
          >
            作者博客
          </a>
        </div>
      </section>

      <footer className="pt-6 pb-12 text-center text-xs text-muted-foreground border-t">
        <p>本站是 superpowers 学习 workspace 的分享层。内容一手来源都在页脚的 <code className="font-mono">SKILL.md</code> 里。</p>
        <p className="mt-1">Built with React + Tailwind + shadcn-style primitives.</p>
      </footer>
    </div>
  );
}
