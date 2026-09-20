import { useParams, Link, Navigate } from 'react-router-dom';
import { lessons } from '@/data/curriculum';
import { ContentFrame } from '@/components/content-frame';
import { Badge } from '@/components/ui/badge';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export function LessonPage() {
  const { slug } = useParams<{ slug: string }>();
  const idx = lessons.findIndex((l) => l.slug === slug);
  if (idx === -1) return <Navigate to="/curriculum" replace />;
  const l = lessons[idx];
  const prev = idx > 0 ? lessons[idx - 1] : null;
  const next = idx < lessons.length - 1 ? lessons[idx + 1] : null;

  return (
    <div className="flex h-[calc(100vh-3.5rem)] flex-col">
      <div className="border-b bg-card px-4 md:px-6 py-2 flex items-center justify-between gap-3">
        <div className="min-w-0 flex items-center gap-3">
          <Badge variant="secondary" className="font-mono shrink-0">
            L{String(l.num).padStart(2, '0')}
          </Badge>
          <span className="font-serif truncate">{l.fullTitle}</span>
        </div>
        <div className="flex items-center gap-1 shrink-0">
          {prev && (
            <Link
              to={`/lesson/${prev.slug}`}
              className="inline-flex items-center gap-1 rounded-md px-2 py-1 text-xs hover:bg-secondary"
              title={`上一课：${prev.title}`}
            >
              <ChevronLeft className="h-3.5 w-3.5" />
              <span className="hidden md:inline">上一课</span>
            </Link>
          )}
          {next && (
            <Link
              to={`/lesson/${next.slug}`}
              className="inline-flex items-center gap-1 rounded-md px-2 py-1 text-xs hover:bg-secondary"
              title={`下一课：${next.title}`}
            >
              <span className="hidden md:inline">下一课</span>
              <ChevronRight className="h-3.5 w-3.5" />
            </Link>
          )}
        </div>
      </div>
      <div className="flex-1 min-h-0">
        <ContentFrame src={l.path} title={l.fullTitle} />
      </div>
    </div>
  );
}
