import { useParams, Link, Navigate } from 'react-router-dom';
import { references, lessons } from '@/data/curriculum';
import { ContentFrame } from '@/components/content-frame';
import { Badge } from '@/components/ui/badge';

export function ReferencePage() {
  const { slug } = useParams<{ slug: string }>();
  const r = references.find((x) => x.slug === slug);
  if (!r) return <Navigate to="/curriculum" replace />;
  const related = r.relatedLesson ? lessons.find((l) => l.num === r.relatedLesson) : null;

  return (
    <div className="flex h-[calc(100vh-3.5rem)] flex-col">
      <div className="border-b bg-card px-4 md:px-6 py-2 flex items-center justify-between gap-3">
        <div className="min-w-0 flex items-center gap-3">
          <Badge variant="outline" className="shrink-0">Reference</Badge>
          <span className="font-serif truncate">{r.title}</span>
        </div>
        {related && (
          <Link
            to={`/lesson/${related.slug}`}
            className="text-xs text-muted-foreground hover:text-primary shrink-0"
          >
            ← 配合 L{String(related.num).padStart(2, '0')} · {related.title}
          </Link>
        )}
      </div>
      <div className="flex-1 min-h-0">
        <ContentFrame src={r.path} title={r.title} />
      </div>
    </div>
  );
}
