import { Routes, Route, Navigate } from 'react-router-dom';
import { SiteHeader } from '@/components/site-header';
import { CourseSidebar } from '@/components/course-sidebar';
import { HomePage } from '@/pages/home';
import { CurriculumPage } from '@/pages/curriculum';
import { LessonPage } from '@/pages/lesson-page';
import { ReferencePage } from '@/pages/reference-page';
import { AboutPage } from '@/pages/about';
import { useState } from 'react';

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader onMenuClick={() => setSidebarOpen((v) => !v)} />
      <div className="flex flex-1">
        <CourseSidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        <main className="flex-1 min-w-0">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/curriculum" element={<CurriculumPage />} />
            <Route path="/lesson/:slug" element={<LessonPage />} />
            <Route path="/reference/:slug" element={<ReferencePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}
