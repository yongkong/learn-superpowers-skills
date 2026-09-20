import { useEffect, useRef, useState } from 'react';
import { Loader2, ExternalLink } from 'lucide-react';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';

type Props = {
  src: string;
  title: string;
  /** iframe 高度策略: 'fill' = 撑满剩余视口, 'auto' = 固定 800px */
  fill?: boolean;
};

/**
 * 用 iframe 加载已写好的静态 HTML lesson / reference。
 * 通过 `allow-scripts` 允许 quiz.js 运行；不 allow-same-origin，避免访问父页 DOM。
 */
export function ContentFrame({ src, title, fill = true }: Props) {
  const [loading, setLoading] = useState(true);
  const ref = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    setLoading(true);
  }, [src]);

  const height = fill ? 'calc(100vh - 3.5rem)' : '800px';

  return (
    <div className="relative w-full" style={{ height }}>
      {loading && (
        <div className="absolute inset-0 grid place-items-center text-muted-foreground">
          <Loader2 className="h-5 w-5 animate-spin mr-2" /> 加载中…
        </div>
      )}
      <iframe
        ref={ref}
        title={title}
        src={src}
        onLoad={() => setLoading(false)}
        className="h-full w-full border-0 bg-white"
        // sandbox 允许脚本执行（quiz 需要），但不允许 same-origin，防止污染父页
        sandbox="allow-scripts allow-popups allow-popups-to-escape-sandbox"
      />
      <div className="absolute top-3 right-3">
        <a
          href={src}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(buttonVariants({ variant: 'outline', size: 'sm' }), 'gap-1.5 shadow-sm')}
        >
          <ExternalLink className="h-3.5 w-3.5" /> 新窗口打开
        </a>
      </div>
    </div>
  );
}
