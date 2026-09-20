import { Link } from 'react-router-dom';
import { lessons, references, totalMinutes } from '@/data/curriculum';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, ArrowRight } from 'lucide-react';

export function CurriculumPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-10 space-y-10">
      <header className="space-y-3">
        <h1 className="font-serif text-4xl">完整课程表</h1>
        <p className="text-muted-foreground">
          共 <strong>{lessons.length} 节课</strong> · 累计 <strong>{totalMinutes} 分钟</strong> ·
          配套 <strong>{references.length} 份参考文档</strong>。
        </p>
        <p className="text-sm text-muted-foreground">
          推荐按编号顺序学。每一节都构建在前一节的地基上，跳读会失去 spacing 效果。
        </p>
      </header>

      <section className="space-y-3">
        <h2 className="font-serif text-2xl">课程</h2>
        {lessons.map((l) => (
          <Link key={l.slug} to={`/lesson/${l.slug}`} className="block group">
            <Card className="transition-colors group-hover:border-primary/40">
              <CardHeader className="pb-2 flex flex-row items-center justify-between space-y-0">
                <div className="flex items-center gap-3">
                  <span className="grid h-9 w-9 place-items-center rounded-md bg-primary/10 font-mono text-sm font-semibold text-primary">
                    {String(l.num).padStart(2, '0')}
                  </span>
                  <div>
                    <CardTitle className="text-base leading-tight">{l.fullTitle}</CardTitle>
                    <CardDescription className="text-sm mt-0.5">{l.summary}</CardDescription>
                  </div>
                </div>
                <div className="flex items-center gap-3 shrink-0">
                  <Badge variant="outline" className="gap-1">
                    <Clock className="h-3 w-3" /> {l.minutes}′
                  </Badge>
                  <ArrowRight className="h-4 w-4 opacity-40 group-hover:opacity-100 group-hover:text-primary transition-all" />
                </div>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </section>

      <section className="space-y-3">
        <h2 className="font-serif text-2xl">参考文档</h2>
        <p className="text-sm text-muted-foreground">
          与课程不同，参考文档设计成<em>反复回访</em>。打印友好 · 可直接嵌入团队 wiki。
        </p>
        {references.map((r) => (
          <Link key={r.slug} to={`/reference/${r.slug}`} className="block group">
            <Card className="transition-colors group-hover:border-primary/40">
              <CardHeader className="pb-2">
                <div className="flex items-baseline gap-2">
                  <CardTitle className="text-base">{r.title}</CardTitle>
                  {r.relatedLesson && (
                    <Badge variant="secondary" className="font-mono text-[10px]">
                      配合 L{String(r.relatedLesson).padStart(2, '0')}
                    </Badge>
                  )}
                </div>
                <CardDescription>{r.summary}</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </section>
    </div>
  );
}
