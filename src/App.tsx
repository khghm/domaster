import { useState, useEffect, useMemo } from 'react';
import { courses } from './data/courses';
import type { Course, Chapter, Lesson } from './data/courses';
import { CodePlayground, VisualDiagram, InteractiveQuiz, Tabs, Accordion, ComparisonTable } from './components/Interactive';

// ============================================
// Icons
// ============================================
const Icon = {
  menu: () => <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 6h16M4 12h16M4 18h16"/></svg>,
  close: () => <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M6 18L18 6M6 6l12 12"/></svg>,
  back: () => <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7"/></svg>,
  book: () => <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 19.5A2.5 2.5 0 016.5 17H20M4 19.5V5.5A2.5 2.5 0 016.5 3H20v14H6.5a2.5 2.5 0 000 5H20"/></svg>,
  clock: () => <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>,
  check: () => <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M20 6L9 17l-5-5"/></svg>,
  list: () => <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"/></svg>,
  chevron: () => <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M6 9l6 6 6-6"/></svg>,
  code: () => <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M16 18l6-6-6-6M8 6l-6 6 6 6"/></svg>,
  copy: () => <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/></svg>,
  checkCircle: () => <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><path d="M22 4L12 14.01l-3-3"/></svg>,
  eye: () => <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>,
  target: () => <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>,
  lightbulb: () => <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 21h6M12 3a6 6 0 014 10.5V17H8v-3.5A6 6 0 0112 3z"/></svg>,
  warning: () => <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 9v4M12 17h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/></svg>,
  layers: () => <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>,
  arrowLeft: () => <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>,
  arrowRight: () => <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>,
};

// ============================================
// Code Block
// ============================================
function CodeBlock({ code, language }: { code: string; language?: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="rounded-xl overflow-hidden border border-slate-700/50 bg-[#0d1117] my-5">
      <div className="flex items-center gap-2 px-4 py-2.5 bg-[#161b22] border-b border-slate-700/50">
        <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
        <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
        <span className="text-xs text-slate-500 mr-2 font-mono">{language || 'code'}</span>
        <button onClick={handleCopy}
          className="mr-auto flex items-center gap-1.5 text-xs text-slate-400 hover:text-white px-2 py-1 rounded hover:bg-white/5 transition-colors">
          {copied ? <><Icon.checkCircle /><span className="text-emerald-400">Copied</span></> : <><Icon.copy /><span>Copy</span></>}
        </button>
      </div>
      <pre className="p-4 overflow-x-auto text-sm leading-7" dir="ltr">
        <code className="text-slate-300 font-mono">{code}</code>
      </pre>
    </div>
  );
}

// ============================================
// Header
// ============================================
function Header({ activeSection, setActiveSection }: { activeSection: string; setActiveSection: (s: string) => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handle = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handle);
    return () => window.removeEventListener('scroll', handle);
  }, []);

  const nav = [
    { id: 'home', label: 'خانه' },
    { id: 'courses', label: 'دوره‌ها' },
    { id: 'tools', label: 'ابزارها' },
    { id: 'roadmap', label: 'نقشه راه' },
    { id: 'resources', label: 'منابع' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#0a0f1a]/95 backdrop-blur-xl shadow-xl shadow-black/20 border-b border-slate-800/50' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <button onClick={() => { setActiveSection('home'); setMobileOpen(false); }} className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-indigo-500 to-cyan-500 flex items-center justify-center text-white font-black text-sm shadow-lg shadow-indigo-500/20">
              D
            </div>
            <span className="text-lg font-bold text-white hidden sm:block">
              دِو<span className="text-indigo-400">مستر</span>
            </span>
          </button>

          <nav className="hidden lg:flex items-center gap-1">
            {nav.map(item => (
              <button key={item.id} onClick={() => setActiveSection(item.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeSection === item.id ? 'text-indigo-300 bg-indigo-500/10' : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}>
                {item.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button onClick={() => setActiveSection('courses')}
              className="hidden sm:flex px-4 py-2 bg-gradient-to-r from-indigo-500 to-cyan-500 text-white rounded-lg font-medium text-sm hover:shadow-lg hover:shadow-indigo-500/25 transition-all">
              شروع یادگیری
            </button>
            <button className="lg:hidden p-2 text-slate-400 hover:text-white" onClick={() => setMobileOpen(!mobileOpen)}>
              {mobileOpen ? <Icon.close /> : <Icon.menu />}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="lg:hidden pb-4">
            <div className="bg-slate-900/95 backdrop-blur-xl rounded-xl p-3 space-y-1 border border-slate-800">
              {nav.map(item => (
                <button key={item.id} onClick={() => { setActiveSection(item.id); setMobileOpen(false); }}
                  className={`w-full text-right px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                    activeSection === item.id ? 'bg-indigo-500/10 text-indigo-300' : 'text-slate-300 hover:bg-white/5'
                  }`}>
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

// ============================================
// Hero Section
// ============================================
function HeroSection({ onStart }: { onStart: () => void }) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/3 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/4 left-1/3 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[100px]"></div>
      </div>
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(rgba(148,163,184,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.5) 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }}></div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-sm mb-8">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          کاملا رایگان - بدون ثبت‌نام
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-6">
          <span className="text-white">تسلط بر توسعه</span><br />
          <span className="gradient-text">فول‌استک وب</span>
        </h1>

        <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto mb-10 leading-8">
          مسیر کامل یادگیری از صفر تا حرفه‌ای. HTML, CSS, JavaScript, React, Node.js, MongoDB, WordPress و تمام ابزارهایی که برای ورود به بازار کار نیاز دارید.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <button onClick={onStart}
            className="group px-8 py-3.5 bg-gradient-to-r from-indigo-500 to-cyan-500 text-white rounded-xl font-bold hover:shadow-2xl hover:shadow-indigo-500/25 transition-all hover:-translate-y-0.5 flex items-center gap-3">
            شروع یادگیری رایگان
            <span className="group-hover:-translate-x-1 transition-transform rotate-180"><Icon.arrowRight /></span>
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
          {[
            { value: '۸', label: 'دوره تخصصی' },
            { value: '۴۰+', label: 'فصل آموزشی' },
            { value: '۱۰۰+', label: 'درس جامع' },
            { value: '۱۰۰%', label: 'رایگان' },
          ].map((stat, i) => (
            <div key={i} className="bg-slate-900/50 backdrop-blur border border-slate-800 rounded-xl p-4 text-center hover:border-indigo-500/30 transition-all">
              <div className="text-2xl font-black text-white mb-1">{stat.value}</div>
              <div className="text-xs text-slate-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================
// Courses Section
// ============================================
function CoursesSection({ onSelectCourse }: { onSelectCourse: (c: Course) => void }) {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">دوره‌های آموزشی</h2>
          <p className="text-slate-400 max-w-xl mx-auto">هر دوره یک کتاب کامل با ده‌ها فصل و درس است</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {courses.map((course, i) => {
            const totalLessons = course.chapters.reduce((acc, ch) => acc + ch.lessons.length, 0);
            return (
              <button key={course.id} onClick={() => onSelectCourse(course)}
                className="group bg-slate-900/50 backdrop-blur border border-slate-800 rounded-2xl p-6 text-right hover:border-indigo-500/30 hover:shadow-xl hover:shadow-indigo-500/5 transition-all hover:-translate-y-1"
                style={{ animationDelay: `${i * 60}ms` }}>
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${course.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                    <span className="text-white"><Icon.layers /></span>
                  </div>
                  <span className="text-xs text-slate-500 bg-slate-800 px-2.5 py-1 rounded-full">
                    {course.chapters.length} فصل
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white mb-1 group-hover:text-indigo-300 transition-colors">{course.title}</h3>
                <p className="text-xs text-slate-500 mb-3">{course.subtitle}</p>
                <p className="text-sm text-slate-400 leading-6 mb-4 line-clamp-2">{course.description}</p>
                <div className="flex items-center justify-between pt-4 border-t border-slate-800">
                  <span className="text-xs text-slate-500">{totalLessons} درس</span>
                  <span className="text-xs text-indigo-400 font-medium flex items-center gap-1 group-hover:-translate-x-1 transition-transform">
                    مشاهده <span className="rotate-180"><Icon.arrowRight /></span>
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ============================================
// Course Detail with TOC
// ============================================
function CourseDetail({ course, onBack, onSelectLesson }: { course: Course; onBack: () => void; onSelectLesson: (l: Lesson, chId: string) => void }) {
  const [activeChapter, setActiveChapter] = useState<string | null>(course.chapters[0]?.id || null);

  const totalLessons = course.chapters.reduce((acc, ch) => acc + ch.lessons.length, 0);

  return (
    <div className="min-h-screen pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-slate-500 mb-6">
          <button onClick={onBack} className="hover:text-indigo-300 transition-colors">دوره‌ها</button>
          <span>/</span>
          <span className="text-slate-300">{course.title}</span>
        </div>

        {/* Course Header */}
        <div className="bg-slate-900/50 backdrop-blur border border-slate-800 rounded-2xl p-6 sm:p-8 mb-8">
          <div className="flex flex-col md:flex-row items-start gap-6">
            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${course.color} flex items-center justify-center shadow-xl flex-shrink-0`}>
              <span className="text-white scale-150"><Icon.layers /></span>
            </div>
            <div className="flex-1">
              <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2">{course.title}</h1>
              <p className="text-indigo-300 text-sm mb-3">{course.subtitle}</p>
              <p className="text-slate-400 leading-7 mb-4">{course.description}</p>
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-xs text-slate-400 bg-slate-800 px-3 py-1.5 rounded-full flex items-center gap-1.5">
                  <Icon.list /> {course.chapters.length} فصل
                </span>
                <span className="text-xs text-slate-400 bg-slate-800 px-3 py-1.5 rounded-full flex items-center gap-1.5">
                  <Icon.book /> {totalLessons} درس
                </span>
                {course.totalHours && (
                  <span className="text-xs text-slate-400 bg-slate-800 px-3 py-1.5 rounded-full flex items-center gap-1.5">
                    <Icon.clock /> {course.totalHours} ساعت
                  </span>
                )}
              </div>
            </div>
          </div>

          {course.outcomes && (
            <div className="mt-6 pt-6 border-t border-slate-800">
              <h3 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
                <span className="text-emerald-400"><Icon.target /></span>
                پس از اتمام این دوره:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {course.outcomes.map((o, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-slate-300">
                    <span className="text-emerald-400"><Icon.check /></span>
                    <span>{o}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* TOC Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8">
          {/* Sidebar TOC */}
          <aside className="lg:sticky lg:top-20 lg:self-start">
            <div className="bg-slate-900/50 backdrop-blur border border-slate-800 rounded-xl p-4">
              <h3 className="text-sm font-bold text-white mb-4 flex items-center gap-2 px-2">
                <Icon.list /> فهرست مطالب
              </h3>
              <nav className="space-y-1 max-h-[calc(100vh-200px)] overflow-y-auto">
                {course.chapters.map((chapter, ci) => (
                  <div key={chapter.id}>
                    <button
                      onClick={() => setActiveChapter(activeChapter === chapter.id ? null : chapter.id)}
                      className={`w-full flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm font-medium text-right transition-all ${
                        activeChapter === chapter.id ? 'bg-indigo-500/10 text-indigo-300' : 'text-slate-300 hover:bg-white/5'
                      }`}>
                      <span className="w-6 h-6 rounded-md bg-slate-800 flex items-center justify-center text-xs text-slate-400 flex-shrink-0">
                        {ci + 1}
                      </span>
                      <span className="flex-1 truncate">{chapter.title.replace(/^فصل \d+:\s*/, '')}</span>
                      <span className={`transition-transform ${activeChapter === chapter.id ? 'rotate-180' : ''}`}>
                        <Icon.chevron />
                      </span>
                    </button>
                    {activeChapter === chapter.id && (
                      <div className="mr-4 mt-1 mb-2 space-y-0.5 border-r border-slate-800 pr-3">
                        {chapter.lessons.map((lesson, li) => (
                          <button key={lesson.id} onClick={() => onSelectLesson(lesson, chapter.id)}
                            className="w-full flex items-center gap-2 px-3 py-2 rounded-lg text-xs text-slate-400 hover:text-indigo-300 hover:bg-indigo-500/5 transition-all text-right">
                            <span className="text-slate-600">{ci + 1}.{li + 1}</span>
                            <span className="flex-1 truncate">{lesson.title}</span>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </nav>
            </div>
          </aside>

          {/* Main Content - Chapters */}
          <main>
            <div className="space-y-6">
              {course.chapters.map((chapter, ci) => (
                <div key={chapter.id} className="bg-slate-900/50 backdrop-blur border border-slate-800 rounded-xl p-5 sm:p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-500/20 to-cyan-500/20 border border-indigo-500/20 flex items-center justify-center text-indigo-300 font-bold text-sm">
                      {ci + 1}
                    </div>
                    <div>
                      <h2 className="text-lg font-bold text-white">{chapter.title}</h2>
                      <p className="text-xs text-slate-500">{chapter.description}</p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    {chapter.lessons.map((lesson, li) => (
                      <button key={lesson.id} onClick={() => onSelectLesson(lesson, chapter.id)}
                        className="group w-full flex items-center gap-4 p-3 rounded-lg hover:bg-white/5 transition-all text-right">
                        <span className="text-xs text-slate-600 font-mono w-10 flex-shrink-0">{ci + 1}.{li + 1}</span>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-sm font-medium text-slate-200 group-hover:text-indigo-300 transition-colors truncate">
                            {lesson.title}
                          </h4>
                          <p className="text-xs text-slate-500 mt-0.5 truncate">{lesson.subtitle}</p>
                        </div>
                        <div className="flex items-center gap-3 flex-shrink-0">
                          {lesson.estimatedTime && (
                            <span className="text-xs text-slate-600 flex items-center gap-1">
                              <Icon.clock /> {lesson.estimatedTime}د
                            </span>
                          )}
                          {lesson.difficulty && (
                            <span className={`text-xs px-2 py-0.5 rounded-full ${
                              lesson.difficulty === 'مبتدی' ? 'bg-emerald-500/10 text-emerald-400' :
                              lesson.difficulty === 'متوسط' ? 'bg-amber-500/10 text-amber-400' :
                              'bg-red-500/10 text-red-400'
                            }`}>{lesson.difficulty}</span>
                          )}
                          <span className="text-slate-700 group-hover:text-indigo-400 group-hover:-translate-x-1 transition-all rotate-180">
                            <Icon.arrowRight />
                          </span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

// ============================================
// Lesson Viewer with TOC
// ============================================
function LessonViewer({ 
  course, 
  chapter, 
  lesson, 
  onBack, 
  onNavigate 
}: { 
  course: Course; 
  chapter: Chapter; 
  lesson: Lesson; 
  onBack: () => void;
  onNavigate: (lesson: Lesson, chapter: Chapter) => void;
}) {
  const [tocOpen, setTocOpen] = useState(false);

  // Flatten all lessons for prev/next navigation
  const allLessons = useMemo(() => {
    const list: { lesson: Lesson; chapter: Chapter }[] = [];
    course.chapters.forEach(ch => {
      ch.lessons.forEach(l => list.push({ lesson: l, chapter: ch }));
    });
    return list;
  }, [course]);

  const currentIndex = allLessons.findIndex(l => l.lesson.id === lesson.id);
  const prevLesson = currentIndex > 0 ? allLessons[currentIndex - 1] : null;
  const nextLesson = currentIndex < allLessons.length - 1 ? allLessons[currentIndex + 1] : null;

  const renderContent = (content: string) => {
    return content.split('\n').map((line, i) => {
      if (line.startsWith('## ')) return <h2 key={i} className="text-xl font-bold text-white mt-8 mb-4 pb-2 border-b border-slate-800">{line.replace('## ', '')}</h2>;
      if (line.startsWith('### ')) return <h3 key={i} className="text-lg font-bold text-indigo-300 mt-6 mb-3">{line.replace('### ', '')}</h3>;
      if (line.startsWith('- ') || line.startsWith('• ')) {
        return <li key={i} className="text-slate-300 mr-4 mb-1.5 list-none flex items-start gap-2">
          <span className="text-indigo-400 mt-2 flex-shrink-0">-</span>
          <span className="leading-7">{line.substring(2)}</span>
        </li>;
      }
      if (line.startsWith('**') && line.includes('**')) {
        return <p key={i} className="text-base font-bold text-cyan-300 mt-4 mb-2">{line.replace(/\*\*/g, '')}</p>;
      }
      if (line.trim() === '') return <div key={i} className="h-3"></div>;
      if (line.startsWith('```')) return null;
      return <p key={i} className="text-slate-300 leading-8 mb-2 text-[15px]">{line}</p>;
    });
  };

  return (
    <div className="min-h-screen pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-slate-500 mb-6 flex-wrap">
          <button onClick={onBack} className="hover:text-indigo-300 transition-colors">{course.title}</button>
          <span>/</span>
          <span className="text-slate-400">{chapter.title}</span>
          <span>/</span>
          <span className="text-slate-300 truncate max-w-[200px]">{lesson.title}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-6">
          {/* Sidebar TOC */}
          <aside className={`${tocOpen ? 'block' : 'hidden'} lg:block`}>
            <div className="lg:sticky lg:top-20 bg-slate-900/50 backdrop-blur border border-slate-800 rounded-xl p-4 max-h-[calc(100vh-120px)] overflow-y-auto">
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3 px-2 flex items-center gap-2">
                <Icon.list /> فهرست این کتاب
              </h3>
              <nav className="space-y-1">
                {course.chapters.map((ch, ci) => (
                  <div key={ch.id}>
                    <div className={`px-3 py-2 rounded-lg text-xs font-bold ${ch.id === chapter.id ? 'text-indigo-300 bg-indigo-500/10' : 'text-slate-400'}`}>
                      {ch.title}
                    </div>
                    <div className="mr-3 space-y-0.5 border-r border-slate-800 pr-2 mb-2">
                      {ch.lessons.map((l, li) => (
                        <button key={l.id} onClick={() => onNavigate(l, ch)}
                          className={`w-full flex items-center gap-2 px-2 py-1.5 rounded text-xs text-right transition-all ${
                            l.id === lesson.id ? 'text-indigo-300 bg-indigo-500/10 font-medium' : 'text-slate-500 hover:text-slate-300'
                          }`}>
                          <span className="font-mono text-[10px]">{ci+1}.{li+1}</span>
                          <span className="flex-1 truncate">{l.title}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </nav>
            </div>
          </aside>

          {/* Main Content */}
          <main>
            {/* Mobile TOC Toggle */}
            <button onClick={() => setTocOpen(!tocOpen)}
              className="lg:hidden mb-4 flex items-center gap-2 px-4 py-2 bg-slate-800 text-slate-300 rounded-lg text-sm">
              <Icon.list /> فهرست مطالب
            </button>

            {/* Lesson Header */}
            <div className="bg-slate-900/50 backdrop-blur border border-slate-800 rounded-xl p-5 sm:p-6 mb-6">
              <div className="flex items-center gap-2 text-xs text-slate-500 mb-3">
                {lesson.estimatedTime && (
                  <span className="flex items-center gap-1"><Icon.clock /> {lesson.estimatedTime} دقیقه</span>
                )}
                {lesson.difficulty && (
                  <span className={`px-2 py-0.5 rounded-full ${
                    lesson.difficulty === 'مبتدی' ? 'bg-emerald-500/10 text-emerald-400' :
                    lesson.difficulty === 'متوسط' ? 'bg-amber-500/10 text-amber-400' :
                    'bg-red-500/10 text-red-400'
                  }`}>{lesson.difficulty}</span>
                )}
              </div>
              <h1 className="text-xl sm:text-2xl font-bold text-white mb-2">{lesson.title}</h1>
              <p className="text-slate-400 text-sm">{lesson.subtitle}</p>
            </div>

            {/* Content */}
            <div className="bg-slate-900/50 backdrop-blur border border-slate-800 rounded-xl p-5 sm:p-8 mb-6">
              <div className="prose prose-invert max-w-none">{renderContent(lesson.content)}</div>
            </div>

            {/* Interactive Content */}
            {lesson.interactiveType === 'playground' && lesson.code && (
              <div className="mb-6">
                <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                  <span className="text-emerald-400"><Icon.code /></span> آزمایشگاه کد
                </h3>
                <CodePlayground 
                  initialCode={lesson.code} 
                  language={lesson.language}
                  expectedOutput={lesson.interactiveData?.expectedOutput}
                />
              </div>
            )}

            {lesson.interactiveType === 'diagram' && lesson.interactiveData?.diagramType && (
              <div className="mb-6">
                <h3 className="text-lg font-bold text-white mb-3">نمایش بصری</h3>
                <VisualDiagram type={lesson.interactiveData.diagramType} />
              </div>
            )}

            {lesson.interactiveType === 'quiz' && lesson.interactiveData && (
              <InteractiveQuiz
                question={lesson.interactiveData.question}
                options={lesson.interactiveData.options}
                correctIndex={lesson.interactiveData.correctIndex}
                explanation={lesson.interactiveData.explanation}
              />
            )}

            {lesson.interactiveType === 'tabs' && lesson.interactiveData?.tabs && (
              <Tabs tabs={lesson.interactiveData.tabs} />
            )}

            {lesson.interactiveType === 'comparison' && lesson.interactiveData && (
              <ComparisonTable 
                headers={lesson.interactiveData.headers}
                rows={lesson.interactiveData.rows}
              />
            )}

            {/* Code */}
            {lesson.code && (!lesson.interactiveType || lesson.interactiveType !== 'playground') && (
              <div className="mb-6">
                <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                  <span className="text-cyan-400"><Icon.code /></span> کد عملی
                </h3>
                <CodeBlock code={lesson.code} language={lesson.language} />
              </div>
            )}

            {/* Tips */}
            {lesson.tips && lesson.tips.length > 0 && (
              <div className="mb-6">
                <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                  <span className="text-amber-400"><Icon.lightbulb /></span> نکات کلیدی
                </h3>
                <div className="space-y-2">
                  {lesson.tips.map((tip, i) => (
                    <div key={i} className="bg-amber-500/5 border border-amber-500/20 rounded-lg p-4 flex items-start gap-3">
                      <span className="text-amber-400 flex-shrink-0 mt-0.5"><Icon.lightbulb /></span>
                      <p className="text-sm text-slate-300 leading-7">{tip}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Warnings */}
            {lesson.warnings && lesson.warnings.length > 0 && (
              <div className="mb-6">
                <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                  <span className="text-red-400"><Icon.warning /></span> هشدارها
                </h3>
                <div className="space-y-2">
                  {lesson.warnings.map((w, i) => (
                    <div key={i} className="bg-red-500/5 border border-red-500/20 rounded-lg p-4 flex items-start gap-3">
                      <span className="text-red-400 flex-shrink-0 mt-0.5"><Icon.warning /></span>
                      <p className="text-sm text-slate-300 leading-7">{w}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Prev/Next Navigation */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              {prevLesson && (
                <button onClick={() => onNavigate(prevLesson.lesson, prevLesson.chapter)}
                  className="group flex items-center gap-3 p-4 bg-slate-900/50 border border-slate-800 rounded-xl hover:border-indigo-500/30 transition-all text-right">
                  <span className="text-slate-500 group-hover:text-indigo-400 transition-colors rotate-180"><Icon.arrowRight /></span>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-slate-500 mb-0.5">درس قبلی</p>
                    <p className="text-sm font-medium text-slate-200 truncate group-hover:text-indigo-300 transition-colors">
                      {prevLesson.lesson.title}
                    </p>
                  </div>
                </button>
              )}
              {nextLesson && (
                <button onClick={() => onNavigate(nextLesson.lesson, nextLesson.chapter)}
                  className="group flex items-center gap-3 p-4 bg-slate-900/50 border border-slate-800 rounded-xl hover:border-indigo-500/30 transition-all text-right mr-0 sm:mr-auto">
                  <div className="flex-1 min-w-0 text-right">
                    <p className="text-xs text-slate-500 mb-0.5">درس بعدی</p>
                    <p className="text-sm font-medium text-slate-200 truncate group-hover:text-indigo-300 transition-colors">
                      {nextLesson.lesson.title}
                    </p>
                  </div>
                  <span className="text-slate-500 group-hover:text-indigo-400 transition-colors rotate-180"><Icon.arrowLeft /></span>
                </button>
              )}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

// ============================================
// Tools Section
// ============================================
function ToolsSection() {
  const [shadow, setShadow] = useState({ x: 0, y: 10, blur: 30, spread: 0, color: '#6366f1', opacity: 0.3 });
  const [gradient, setGradient] = useState({ from: '#4f46e5', to: '#06b6d4', angle: 135 });
  const [copied, setCopied] = useState('');

  const copy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopied(label);
    setTimeout(() => setCopied(''), 2000);
  };

  const hexToRgba = (hex: string, opacity: number) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
  };

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">ابزارهای تعاملی</h2>
          <p className="text-slate-400">ابزارهای عملی برای درک بهتر مفاهیم CSS</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Box Shadow */}
          <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
            <h3 className="text-lg font-bold text-white mb-5">Box Shadow Generator</h3>
            <div className="flex items-center justify-center h-40 rounded-xl bg-slate-800/50 mb-5">
              <div className="w-28 h-28 rounded-2xl bg-white transition-all duration-300"
                style={{ boxShadow: `${shadow.x}px ${shadow.y}px ${shadow.blur}px ${shadow.spread}px ${hexToRgba(shadow.color, shadow.opacity)}` }} />
            </div>
            <div className="grid grid-cols-2 gap-3 mb-4">
              {[
                { label: 'X', key: 'x', min: -50, max: 50 },
                { label: 'Y', key: 'y', min: -50, max: 50 },
                { label: 'Blur', key: 'blur', min: 0, max: 100 },
                { label: 'Spread', key: 'spread', min: -20, max: 50 },
              ].map(item => (
                <label key={item.key} className="text-xs text-slate-400">
                  {item.label}: {(shadow as any)[item.key]}px
                  <input type="range" min={item.min} max={item.max} value={(shadow as any)[item.key]}
                    onChange={e => setShadow({ ...shadow, [item.key]: Number(e.target.value) })}
                    className="w-full mt-1 accent-indigo-500" />
                </label>
              ))}
            </div>
            <div className="bg-[#0d1117] border border-slate-700 rounded-lg p-3 text-xs mb-3" dir="ltr">
              <code className="text-emerald-400">
                box-shadow: {shadow.x}px {shadow.y}px {shadow.blur}px {shadow.spread}px {hexToRgba(shadow.color, shadow.opacity)};
              </code>
            </div>
            <button onClick={() => copy(`box-shadow: ${shadow.x}px ${shadow.y}px ${shadow.blur}px ${shadow.spread}px ${hexToRgba(shadow.color, shadow.opacity)};`, 'shadow')}
              className="px-4 py-2 bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 rounded-lg text-sm hover:bg-indigo-500/20 transition-colors">
              {copied === 'shadow' ? 'Copied!' : 'Copy Code'}
            </button>
          </div>

          {/* Gradient */}
          <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
            <h3 className="text-lg font-bold text-white mb-5">Gradient Generator</h3>
            <div className="h-40 rounded-xl mb-5 transition-all duration-300"
              style={{ background: `linear-gradient(${gradient.angle}deg, ${gradient.from}, ${gradient.to})` }} />
            <label className="text-xs text-slate-400 mb-4 block">
              Angle: {gradient.angle}deg
              <input type="range" min="0" max="360" value={gradient.angle}
                onChange={e => setGradient({ ...gradient, angle: Number(e.target.value) })}
                className="w-full mt-1 accent-indigo-500" />
            </label>
            <div className="grid grid-cols-2 gap-3 mb-4">
              <label className="text-xs text-slate-400">
                From
                <input type="color" value={gradient.from} onChange={e => setGradient({ ...gradient, from: e.target.value })}
                  className="w-full h-10 mt-1 rounded cursor-pointer" />
              </label>
              <label className="text-xs text-slate-400">
                To
                <input type="color" value={gradient.to} onChange={e => setGradient({ ...gradient, to: e.target.value })}
                  className="w-full h-10 mt-1 rounded cursor-pointer" />
              </label>
            </div>
            <div className="bg-[#0d1117] border border-slate-700 rounded-lg p-3 text-xs mb-3" dir="ltr">
              <code className="text-emerald-400">
                background: linear-gradient({gradient.angle}deg, {gradient.from}, {gradient.to});
              </code>
            </div>
            <button onClick={() => copy(`background: linear-gradient(${gradient.angle}deg, ${gradient.from}, ${gradient.to});`, 'gradient')}
              className="px-4 py-2 bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 rounded-lg text-sm hover:bg-indigo-500/20 transition-colors">
              {copied === 'gradient' ? 'Copied!' : 'Copy Code'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================
// Roadmap Section
// ============================================
function RoadmapSection() {
  const steps = [
    { phase: 'فاز ۱', title: 'مبانی وب', duration: '۱-۲ ماه', items: ['HTML5', 'CSS3', 'Responsive', 'Git'], color: 'from-emerald-500 to-green-500' },
    { phase: 'فاز ۲', title: 'جاوااسکریپت', duration: '۲-۳ ماه', items: ['ES6+', 'DOM', 'Async', 'API'], color: 'from-yellow-500 to-amber-500' },
    { phase: 'فاز ۳', title: 'Frontend Framework', duration: '۲-۳ ماه', items: ['React', 'State', 'Router', 'TypeScript'], color: 'from-cyan-500 to-blue-500' },
    { phase: 'فاز ۴', title: 'Backend', duration: '۲-۳ ماه', items: ['Node.js', 'MongoDB', 'REST API', 'Auth'], color: 'from-purple-500 to-pink-500' },
    { phase: 'فاز ۵', title: 'WordPress', duration: '۱-۲ ماه', items: ['قالب', 'افزونه', 'WooCommerce', 'SEO'], color: 'from-indigo-500 to-violet-500' },
    { phase: 'فاز ۶', title: 'DevOps', duration: '۱ ماه', items: ['Docker', 'CI/CD', 'Linux', 'SSL'], color: 'from-teal-500 to-cyan-500' },
    { phase: 'فاز ۷', title: 'بازار کار', duration: 'مستمر', items: ['پورتفولیو', 'رزومه', 'مصاحبه', 'فریلنسری'], color: 'from-amber-500 to-orange-500' },
  ];

  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">نقشه راه یادگیری</h2>
          <p className="text-slate-400">مسیر گام به گام از مبتدی تا حرفه‌ای</p>
        </div>

        <div className="relative">
          <div className="absolute right-5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500 via-purple-500 to-amber-500 hidden md:block opacity-30"></div>
          <div className="space-y-4">
            {steps.map((step, i) => (
              <div key={i} className="relative flex gap-5 md:gap-6">
                <div className="hidden md:flex flex-col items-center">
                  <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center text-white font-bold text-xs shadow-lg z-10`}>
                    {i + 1}
                  </div>
                </div>
                <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-5 flex-1 hover:border-indigo-500/30 transition-all">
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-base font-bold text-white">{step.title}</h3>
                    <span className="mr-auto text-xs text-slate-500 bg-slate-800 px-2.5 py-1 rounded-full">{step.duration}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {step.items.map((item, j) => (
                      <span key={j} className="text-xs text-slate-300 bg-slate-800/50 px-2.5 py-1 rounded-md border border-slate-700/50">{item}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================
// Resources Section
// ============================================
function ResourcesSection() {
  const groups = [
    { title: 'مستندات رسمی', items: ['MDN Web Docs', 'React Docs', 'Node.js Docs', 'MongoDB Docs'] },
    { title: 'ابزارهای توسعه', items: ['VS Code', 'Figma', 'Postman', 'Chrome DevTools'] },
    { title: 'سایت‌های تمرین', items: ['Frontend Mentor', 'Codewars', 'CSS Battle', 'LeetCode'] },
    { title: 'منابع ویدیویی', items: ['Traversy Media', 'Fireship', 'Net Ninja', 'Web Dev Simplified'] },
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">منابع و ابزارها</h2>
          <p className="text-slate-400">بهترین منابع برای یادگیری و تمرین</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {groups.map((group, i) => (
            <div key={i} className="bg-slate-900/50 border border-slate-800 rounded-xl p-5">
              <h3 className="text-base font-bold text-white mb-4">{group.title}</h3>
              <div className="space-y-2">
                {group.items.map((item, j) => (
                  <div key={j} className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-800/30 hover:bg-slate-800/60 transition-colors cursor-pointer">
                    <span className="text-indigo-400"><Icon.check /></span>
                    <span className="text-sm text-slate-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================
// Footer
// ============================================
function Footer() {
  return (
    <footer className="border-t border-slate-800/50 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-cyan-500 flex items-center justify-center text-white font-bold text-xs">D</div>
            <span className="text-base font-bold text-white">دِو<span className="text-indigo-400">مستر</span></span>
          </div>
          <p className="text-xs text-slate-500">ساخته شده با عشق برای جامعه توسعه‌دهندگان ایران | ۱۴۰۳</p>
        </div>
      </div>
    </footer>
  );
}

// ============================================
// Main App
// ============================================
type ViewState = 
  | { type: 'home' | 'courses' | 'tools' | 'roadmap' | 'resources' }
  | { type: 'course'; course: Course }
  | { type: 'lesson'; course: Course; chapter: Chapter; lesson: Lesson };

export default function App() {
  const [view, setView] = useState<ViewState>({ type: 'home' });
  const [activeSection, setActiveSection] = useState('home');

  const handleSetSection = (s: string) => {
    setActiveSection(s);
    setView({ type: s as any });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectCourse = (course: Course) => {
    setView({ type: 'course', course });
    window.scrollTo({ top: 0 });
  };

  const handleSelectLesson = (lesson: Lesson, chapterId: string) => {
    if (view.type === 'course') {
      const chapter = view.course.chapters.find(c => c.id === chapterId);
      if (chapter) {
        setView({ type: 'lesson', course: view.course, chapter, lesson });
        window.scrollTo({ top: 0 });
      }
    }
  };

  const handleNavigateLesson = (lesson: Lesson, chapter: Chapter) => {
    if (view.type === 'lesson') {
      setView({ type: 'lesson', course: view.course, chapter, lesson });
      window.scrollTo({ top: 0 });
    }
  };

  const handleBackToCourse = () => {
    if (view.type === 'course') {
      setView({ type: 'courses' });
      setActiveSection('courses');
    } else if (view.type === 'lesson') {
      setView({ type: 'course', course: view.course });
    }
    window.scrollTo({ top: 0 });
  };

  // Determine active section for header
  const currentSection = view.type === 'home' || view.type === 'courses' || view.type === 'tools' || view.type === 'roadmap' || view.type === 'resources'
    ? view.type
    : 'courses';

  // Render based on view state
  if (view.type === 'lesson') {
    return (
      <div className="min-h-screen bg-[#0a0f1a]">
        <Header activeSection={currentSection} setActiveSection={handleSetSection} />
        <LessonViewer
          course={view.course}
          chapter={view.chapter}
          lesson={view.lesson}
          onBack={handleBackToCourse}
          onNavigate={handleNavigateLesson}
        />
        <Footer />
      </div>
    );
  }

  if (view.type === 'course') {
    return (
      <div className="min-h-screen bg-[#0a0f1a]">
        <Header activeSection={currentSection} setActiveSection={handleSetSection} />
        <CourseDetail
          course={view.course}
          onBack={handleBackToCourse}
          onSelectLesson={handleSelectLesson}
        />
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0f1a]">
      <Header activeSection={currentSection} setActiveSection={handleSetSection} />
      {view.type === 'home' && (
        <>
          <HeroSection onStart={() => handleSetSection('courses')} />
          <CoursesSection onSelectCourse={handleSelectCourse} />
          <RoadmapSection />
        </>
      )}
      {view.type === 'courses' && <div className="pt-20"><CoursesSection onSelectCourse={handleSelectCourse} /></div>}
      {view.type === 'tools' && <div className="pt-20"><ToolsSection /></div>}
      {view.type === 'roadmap' && <div className="pt-20"><RoadmapSection /></div>}
      {view.type === 'resources' && <div className="pt-20"><ResourcesSection /></div>}
      <Footer />
    </div>
  );
}
