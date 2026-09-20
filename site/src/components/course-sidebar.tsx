import type { ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { lessons, references } from '@/data/curriculum';
import { BookOpen, FileText, Info, GraduationCap } from 'lucide-react';

type Props = {
  open: boolean;
  onClose: () => void;
};

export function CourseSidebar({ open, onClose }: Props) {
  const linkCls = (active: boolean) =>
    cn(
      'flex items-center gap-2 rounded-md px-3 py-1.5 text-sm transition-colors',
      active
        ? 'bg-primary/10 text-primary font-medium'
        : 'text-muted-foreground hover:bg-secondary hover:text-foreground',
    );

  return (
    <>
      {/* mobile backdrop */}
      {open && (
        <div
          className="fixed inset-0 z-30 bg-black/40 md:hidden"
          onClick={onClose}
          aria-hidden
        />
      )}
      <aside
        className={cn(
          'fixed md:sticky top-0 md:top-14 z-40 md:z-10 h-screen md:h-[calc(100vh-3.5rem)] w-72 shrink-0 overflow-y-auto border-r bg-card px-4 py-6 transition-transform',
          'md:translate-x-0',
          open ? 'translate-x-0' : '-translate-x-full',
        )}
      >
        <Section title="开始" icon={<GraduationCap className="h-4 w-4" />}>
          <NavItem to="/" linkCls={linkCls} onClick={onClose} icon={<BookOpen className="h-4 w-4" />}>
            首页
          </NavItem>
        </Section>

        <Section title="课程" icon={<GraduationCap className="h-4 w-4" />}>
          {lessons.map((l) => (
            <NavItem
              key={l.slug}
              to={`/lesson/${l.slug}`}
              linkCls={linkCls}
              onClick={onClose}
            >
              <span className="font-mono text-xs opacity-60 w-6">{String(l.num).padStart(2, '0')}</span>
              <span className="truncate">{l.title}</span>
            </NavItem>
          ))}
        </Section>

        <Section title="参考文档" icon={<FileText className="h-4 w-4" />}>
          {references.map((r) => (
            <NavItem
              key={r.slug}
              to={`/reference/${r.slug}`}
              linkCls={linkCls}
              onClick={onClose}
            >
              <span className="truncate">{r.title}</span>
            </NavItem>
          ))}
        </Section>

        <Section title="关于" icon={<Info className="h-4 w-4" />}>
          <NavItem to="/about" linkCls={linkCls} onClick={onClose}>
            关于本站
          </NavItem>
        </Section>
      </aside>
    </>
  );
}

function Section({
  title,
  icon,
  children,
}: {
  title: string;
  icon?: ReactNode;
  children: ReactNode;
}) {
  return (
    <div className="mb-6">
      <div className="mb-2 flex items-center gap-1.5 text-[11px] uppercase tracking-widest text-muted-foreground/80 font-semibold">
        {icon}
        <span>{title}</span>
      </div>
      <div className="space-y-0.5">{children}</div>
    </div>
  );
}

function NavItem({
  to,
  children,
  linkCls,
  onClick,
  icon,
}: {
  to: string;
  children: ReactNode;
  linkCls: (active: boolean) => string;
  onClick?: () => void;
  icon?: ReactNode;
}) {
  const loc = useLocation();
  const active = loc.pathname === to;
  return (
    <Link to={to} className={linkCls(active)} onClick={onClick}>
      {icon}
      {children}
    </Link>
  );
}
