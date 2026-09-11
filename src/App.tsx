import { useState, useEffect, useRef } from 'react';
import { courses } from './data/courses';
import type { Course, Lesson } from './data/courses';

// ============================================
// SVG Icons
// ============================================
const Icons = {
  menu: <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 6h16M4 12h16M4 18h16"/></svg>,
  close: <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M6 18L18 6M6 6l12 12"/></svg>,
  arrowLeft: <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7"/></svg>,
  arrowRight: <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7"/></svg>,
  chevronDown: <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M6 9l6 6 6-6"/></svg>,
  code: <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M16 18l6-6-6-6M8 6l-6 6 6 6"/></svg>,
  book: <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 19.5A2.5 2.5 0 016.5 17H20M4 19.5V5.5A2.5 2.5 0 016.5 3H20v14H6.5a2.5 2.5 0 000 5H20"/></svg>,
  clock: <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>,
  check: <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M20 6L9 17l-5-5"/></svg>,
  lightbulb: <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 21h6M12 3a6 6 0 014 10.5V17H8v-3.5A6 6 0 0112 3z"/></svg>,
  warning: <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 9v4M12 17h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/></svg>,
  copy: <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/></svg>,
  checkCircle: <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><path d="M22 4L12 14.01l-3-3"/></svg>,
  eye: <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>,
  lock: <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>,
  play: <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>,
  layers: <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>,
  target: <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>,
  zap: <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>,
};

// ============================================
// Code Editor Component
// ============================================
function CodeBlock({ code, language }: { code: string; language?: string }) {
  const [copied, setCopied] = useState(false);
  const codeRef = useRef<HTMLPreElement>(null);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="code-editor my-6 rounded-xl overflow-hidden">
      <div className="code-header">
        <div className="code-dot bg-red-500"></div>
        <div className="code-dot bg-yellow-500"></div>
        <div className="code-dot bg-green-500"></div>
        <span className="text-xs text-slate-500 mr-3 font-mono">{language || 'code'}</span>
        <button
          onClick={handleCopy}
          className="mr-auto flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors px-2 py-1 rounded hover:bg-white/5"
        >
          {copied ? (
            <>
              <span className="text-green-400">{Icons.checkCircle}</span>
              <span className="text-green-400">Copied!</span>
            </>
          ) : (
            <>
              <span>{Icons.copy}</span>
              <span>Copy</span>
            </>
          )}
        </button>
      </div>
      <pre ref={codeRef} className="p-5 overflow-x-auto text-sm leading-7">
        <code className="text-slate-300">{code}</code>
      </pre>
    </div>
  );
}

// ============================================
// Interactive Demo Component
// ============================================
function InteractiveDemo({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="interactive-demo my-8 relative">
      <div className="relative z-10">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-indigo-400">{Icons.play}</span>
          <h4 className="text-sm font-bold text-indigo-300 uppercase tracking-wider">{title}</h4>
        </div>
        {children}
      </div>
    </div>
  );
}

// ============================================
// Diagram Component
// ============================================
function Diagram({ items }: { items: string[] }) {
  return (
    <div className="my-6 p-6 bg-slate-800/30 rounded-xl border border-slate-700/50">
      <div className="flex flex-wrap items-center justify-center gap-3">
        {items.map((item, i) => (
          <div key={i} className="flex items-center gap-3">
            <div className="diagram-box text-sm text-slate-200">{item}</div>
            {i < items.length - 1 && (
              <span className="diagram-arrow">
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="rotate-180">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

// ============================================
// Note Box Component
// ============================================
function NoteBox({ type, children }: { type: 'info' | 'warning' | 'success' | 'danger'; children: React.ReactNode }) {
  const icons = {
    info: <span className="text-blue-400">{Icons.lightbulb}</span>,
    warning: <span className="text-amber-400">{Icons.warning}</span>,
    success: <span className="text-emerald-400">{Icons.checkCircle}</span>,
    danger: <span className="text-red-400">{Icons.warning}</span>,
  };

  return (
    <div className={`note-box note-${type} my-4`}>
      <div className="flex items-start gap-3">
        {icons[type]}
        <div className="text-sm text-slate-300 leading-7">{children}</div>
      </div>
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
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass shadow-xl shadow-black/20' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-18">
          <button onClick={() => setActiveSection('home')} className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-indigo-500 to-cyan-500 flex items-center justify-center text-white font-black text-sm shadow-lg shadow-indigo-500/20 group-hover:shadow-indigo-500/40 transition-shadow">
              D
            </div>
            <span className="text-lg font-bold text-white hidden sm:block">
              دِو<span className="text-indigo-400">مستر</span>
            </span>
          </button>

          <nav className="hidden lg:flex items-center gap-1">
            {nav.map(item => (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeSection === item.id
                    ? 'text-indigo-300 bg-indigo-500/10'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setActiveSection('courses')}
              className="hidden sm:flex px-5 py-2 bg-gradient-to-r from-indigo-500 to-cyan-500 text-white rounded-lg font-medium text-sm hover:shadow-lg hover:shadow-indigo-500/25 transition-all hover:-translate-y-0.5"
            >
              شروع یادگیری
            </button>
            <button className="lg:hidden p-2 text-slate-400 hover:text-white" onClick={() => setMobileOpen(!mobileOpen)}>
              {mobileOpen ? Icons.close : Icons.menu}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="lg:hidden pb-4 animate-in">
            <div className="glass rounded-xl p-3 space-y-1">
              {nav.map(item => (
                <button
                  key={item.id}
                  onClick={() => { setActiveSection(item.id); setMobileOpen(false); }}
                  className={`w-full text-right px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                    activeSection === item.id ? 'bg-indigo-500/10 text-indigo-300' : 'text-slate-300 hover:bg-white/5'
                  }`}
                >
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
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/3 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/4 left-1/3 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[100px]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[150px]"></div>
      </div>

      {/* Grid */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(rgba(148,163,184,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.5) 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }}></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
        <div className="animate-in">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-sm mb-8">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            کاملا رایگان - بدون ثبت‌نام - بدون محدودیت
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1.2] mb-6">
            <span className="text-white">تسلط بر توسعه</span>
            <br />
            <span className="gradient-text">فول‌استک وب</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto mb-10 leading-8">
            مسیر کامل یادگیری از صفر تا حرفه‌ای. HTML, CSS, JavaScript, React, Node.js, MongoDB, WordPress و تمام ابزارهایی که برای ورود موفق به بازار کار ایران نیاز دارید.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <button
              onClick={onStart}
              className="group px-8 py-3.5 bg-gradient-to-r from-indigo-500 to-cyan-500 text-white rounded-xl font-bold text-base hover:shadow-2xl hover:shadow-indigo-500/25 transition-all duration-300 hover:-translate-y-0.5 flex items-center gap-3"
            >
              شروع یادگیری رایگان
              <span className="group-hover:-translate-x-1 transition-transform rotate-180">{Icons.arrowRight}</span>
            </button>
            <button
              onClick={() => document.getElementById('courses-section')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3.5 border border-slate-700 text-slate-300 rounded-xl font-medium text-base hover:border-indigo-500/50 hover:bg-indigo-500/5 transition-all"
            >
              مشاهده سرفصل‌ها
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {[
              { value: '۸', label: 'دوره تخصصی' },
              { value: '۲۰+', label: 'درس جامع' },
              { value: '۲۰۰+', label: 'ساعت محتوا' },
              { value: '۱۰۰%', label: 'رایگان' },
            ].map((stat, i) => (
              <div key={i} className="glass-light rounded-xl p-4 text-center card-hover">
                <div className="text-2xl font-black text-white mb-1">{stat.value}</div>
                <div className="text-xs text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================
// Course Card
// ============================================
function CourseCard({ course, index, onClick }: { course: Course; index: number; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`group glass-light rounded-2xl p-6 text-right card-hover animate-in`}
      style={{ animationDelay: `${index * 80}ms` }}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${course.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
          <span className="text-white">{Icons.layers}</span>
        </div>
        <span className="text-xs text-slate-500 bg-slate-800/50 px-2.5 py-1 rounded-full">
          {course.lessons.length} درس
        </span>
      </div>

      {/* Title */}
      <h3 className="text-lg font-bold text-white mb-1.5 group-hover:text-indigo-300 transition-colors">
        {course.title}
      </h3>
      <p className="text-xs text-indigo-400/80 mb-3">{course.subtitle}</p>

      {/* Description */}
      <p className="text-sm text-slate-400 leading-6 mb-4 line-clamp-2">
        {course.description}
      </p>

      {/* Meta */}
      <div className="flex items-center justify-between pt-4 border-t border-slate-700/50">
        <div className="flex items-center gap-1.5 text-xs text-slate-500">
          <span>{Icons.clock}</span>
          <span>{course.totalHours} ساعت</span>
        </div>
        <span className="text-xs text-indigo-400 font-medium group-hover:translate-x-[-4px] transition-transform flex items-center gap-1">
          مشاهده دوره
          <span className="rotate-180">{Icons.arrowLeft}</span>
        </span>
      </div>
    </button>
  );
}

// ============================================
// Courses Section
// ============================================
function CoursesSection({ onSelectCourse }: { onSelectCourse: (c: Course) => void }) {
  return (
    <section id="courses-section" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">دوره‌های آموزشی</h2>
          <p className="text-slate-400 text-base max-w-xl mx-auto leading-7">
            مسیر یادگیری کامل از مبتدی تا حرفه‌ای. هر دوره شامل توضیحات جامع، کد عملی و تمرینات با پاسخ است.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {courses.map((course, i) => (
            <CourseCard key={course.id} course={course} index={i} onClick={() => onSelectCourse(course)} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================
// Course Detail View
// ============================================
function CourseDetail({ course, onBack, onSelectLesson }: { course: Course; onBack: () => void; onSelectLesson: (l: Lesson) => void }) {
  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back */}
        <button onClick={onBack} className="flex items-center gap-2 text-slate-400 hover:text-indigo-300 transition-colors mb-6 group">
          <span className="group-hover:translate-x-1 transition-transform">{Icons.arrowRight}</span>
          <span className="text-sm">بازگشت به دوره‌ها</span>
        </button>

        {/* Course Header */}
        <div className="glass-light rounded-2xl p-8 mb-8">
          <div className="flex flex-col md:flex-row items-start gap-6">
            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${course.color} flex items-center justify-center shadow-xl flex-shrink-0`}>
              <span className="text-white scale-150">{Icons.layers}</span>
            </div>
            <div className="flex-1">
              <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2">{course.title}</h1>
              <p className="text-indigo-300 text-sm mb-3">{course.subtitle}</p>
              <p className="text-slate-400 leading-7 mb-4">{course.description}</p>
              
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-xs text-slate-400 bg-slate-800 px-3 py-1.5 rounded-full flex items-center gap-1.5">
                  <span>{Icons.book}</span>
                  {course.lessons.length} درس
                </span>
                <span className="text-xs text-slate-400 bg-slate-800 px-3 py-1.5 rounded-full flex items-center gap-1.5">
                  <span>{Icons.clock}</span>
                  {course.totalHours} ساعت
                </span>
                {course.lessons[0]?.difficulty && (
                  <span className="text-xs text-slate-400 bg-slate-800 px-3 py-1.5 rounded-full">
                    سطح: {course.lessons[0].difficulty}
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Outcomes */}
          {course.outcomes && (
            <div className="mt-6 pt-6 border-t border-slate-700/50">
              <h3 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
                <span className="text-emerald-400">{Icons.target}</span>
                پس از اتمام این دوره:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {course.outcomes.map((outcome, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-slate-300">
                    <span className="text-emerald-400 flex-shrink-0">{Icons.check}</span>
                    <span>{outcome}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Lessons List */}
        <div className="space-y-3">
          <h2 className="text-lg font-bold text-white mb-4">سرفصل‌های دوره</h2>
          {course.lessons.map((lesson, index) => (
            <button
              key={lesson.id}
              onClick={() => onSelectLesson(lesson)}
              className="group w-full glass-light rounded-xl p-5 text-right card-hover flex items-center gap-4"
            >
              <div className="w-10 h-10 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-300 font-bold text-sm flex-shrink-0">
                {index + 1}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-base font-bold text-white group-hover:text-indigo-300 transition-colors truncate">
                  {lesson.title}
                </h3>
                <p className="text-xs text-slate-500 mt-1">{lesson.subtitle}</p>
                <div className="flex items-center gap-3 mt-2">
                  {lesson.estimatedTime && (
                    <span className="text-xs text-slate-500 flex items-center gap-1">
                      <span>{Icons.clock}</span>
                      {lesson.estimatedTime} دقیقه
                    </span>
                  )}
                  {lesson.difficulty && (
                    <span className={`text-xs px-2 py-0.5 rounded-full ${
                      lesson.difficulty === 'مبتدی' ? 'bg-emerald-500/10 text-emerald-400' :
                      lesson.difficulty === 'متوسط' ? 'bg-amber-500/10 text-amber-400' :
                      'bg-red-500/10 text-red-400'
                    }`}>
                      {lesson.difficulty}
                    </span>
                  )}
                  {lesson.code && (
                    <span className="text-xs text-slate-500 flex items-center gap-1">
                      <span>{Icons.code}</span>
                      کد عملی
                    </span>
                  )}
                </div>
              </div>
              <span className="text-slate-600 group-hover:text-indigo-400 group-hover:-translate-x-1 transition-all rotate-180 flex-shrink-0">
                {Icons.arrowLeft}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

// ============================================
// Lesson Viewer
// ============================================
function LessonViewer({ lesson, onBack }: { lesson: Lesson; onBack: () => void }) {
  const [showExercises, setShowExercises] = useState<Set<number>>(new Set());

  const toggleExercise = (i: number) => {
    setShowExercises(prev => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i); else next.add(i);
      return next;
    });
  };

  const renderContent = (content: string) => {
    const lines = content.split('\n');
    return lines.map((line, i) => {
      if (line.startsWith('## ')) {
        return <h2 key={i} className="text-xl font-bold text-white mt-8 mb-4 pb-2 border-b border-slate-700/50">{line.replace('## ', '')}</h2>;
      }
      if (line.startsWith('### ')) {
        return <h3 key={i} className="text-lg font-bold text-indigo-300 mt-6 mb-3">{line.replace('### ', '')}</h3>;
      }
      if (line.startsWith('**') && line.includes('**')) {
        const text = line.replace(/\*\*/g, '');
        return <p key={i} className="text-base font-bold text-cyan-300 mt-4 mb-2">{text}</p>;
      }
      if (line.startsWith('- ') || line.startsWith('• ')) {
        return (
          <li key={i} className="text-slate-300 mr-4 mb-1.5 list-none flex items-start gap-2">
            <span className="text-indigo-400 mt-2 flex-shrink-0">-</span>
            <span className="leading-7">{line.substring(2)}</span>
          </li>
        );
      }
      if (line.match(/^\|.*\|/)) {
        return null; // Skip table rows for simplicity
      }
      if (line.trim() === '') return <div key={i} className="h-3"></div>;
      if (line.startsWith('```')) return null;
      return <p key={i} className="text-slate-300 leading-8 mb-2 text-[15px]">{line}</p>;
    });
  };

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back */}
        <button onClick={onBack} className="flex items-center gap-2 text-slate-400 hover:text-indigo-300 transition-colors mb-6 group">
          <span className="group-hover:translate-x-1 transition-transform">{Icons.arrowRight}</span>
          <span className="text-sm">بازگشت</span>
        </button>

        {/* Lesson Header */}
        <div className="glass-light rounded-2xl p-6 sm:p-8 mb-8">
          <div className="flex items-center gap-2 text-xs text-slate-500 mb-3">
            {lesson.estimatedTime && (
              <span className="flex items-center gap-1"><span>{Icons.clock}</span>{lesson.estimatedTime} دقیقه مطالعه</span>
            )}
            {lesson.difficulty && (
              <span className={`px-2 py-0.5 rounded-full ${
                lesson.difficulty === 'مبتدی' ? 'bg-emerald-500/10 text-emerald-400' :
                lesson.difficulty === 'متوسط' ? 'bg-amber-500/10 text-amber-400' :
                'bg-red-500/10 text-red-400'
              }`}>{lesson.difficulty}</span>
            )}
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2">{lesson.title}</h1>
          <p className="text-slate-400">{lesson.subtitle}</p>
        </div>

        {/* Content */}
        <div className="glass-light rounded-2xl p-6 sm:p-8 mb-8">
          <div className="prose prose-invert max-w-none">
            {renderContent(lesson.content)}
          </div>
        </div>

        {/* Diagrams */}
        {lesson.diagrams && lesson.diagrams.length > 0 && (
          <div className="mb-8">
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-indigo-400">{Icons.layers}</span>
              ساختار و دیاگرام
            </h3>
            {lesson.diagrams.map((diagram, i) => (
              <Diagram key={i} items={diagram.split(' → ')} />
            ))}
          </div>
        )}

        {/* Code */}
        {lesson.code && (
          <div className="mb-8">
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-cyan-400">{Icons.code}</span>
              کد عملی
            </h3>
            {lesson.outputPreview && (
              <NoteBox type="info">
                <strong>خروجی:</strong> {lesson.outputPreview}
              </NoteBox>
            )}
            <CodeBlock code={lesson.code} language={lesson.language} />
          </div>
        )}

        {/* Tips */}
        {lesson.tips && lesson.tips.length > 0 && (
          <div className="mb-8">
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-amber-400">{Icons.lightbulb}</span>
              نکات کلیدی
            </h3>
            <div className="space-y-3">
              {lesson.tips.map((tip, i) => (
                <div key={i} className="note-box note-info">
                  <div className="flex items-start gap-3">
                    <span className="text-amber-400 flex-shrink-0 mt-0.5">{Icons.lightbulb}</span>
                    <p className="text-sm text-slate-300 leading-7">{tip}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Warnings */}
        {lesson.warnings && lesson.warnings.length > 0 && (
          <div className="mb-8">
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-red-400">{Icons.warning}</span>
              هشدارها
            </h3>
            <div className="space-y-3">
              {lesson.warnings.map((warning, i) => (
                <div key={i} className="note-box note-warning">
                  <div className="flex items-start gap-3">
                    <span className="text-amber-400 flex-shrink-0 mt-0.5">{Icons.warning}</span>
                    <p className="text-sm text-slate-300 leading-7">{warning}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Exercises */}
        {lesson.exercises && lesson.exercises.length > 0 && (
          <div className="mb-8">
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-emerald-400">{Icons.target}</span>
              تمرینات عملی
            </h3>
            <div className="space-y-4">
              {lesson.exercises.map((ex, i) => (
                <div key={i} className="glass-light rounded-xl p-5">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="step-indicator step-active flex-shrink-0">{i + 1}</div>
                    <div>
                      <p className="text-white font-medium leading-7">{ex.question}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => toggleExercise(i)}
                    className="flex items-center gap-2 px-4 py-2 bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 rounded-lg text-sm font-medium hover:bg-indigo-500/20 transition-colors"
                  >
                    {showExercises.has(i) ? (
                      <><span>{Icons.lock}</span> مخفی کردن پاسخ</>
                    ) : (
                      <><span>{Icons.eye}</span> نمایش پاسخ</>
                    )}
                  </button>
                  {showExercises.has(i) && (
                    <div className="mt-4 animate-in">
                      <CodeBlock code={ex.answer} language={lesson.language} />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// ============================================
// Tools Section - Interactive
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
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">ابزارهای تعاملی</h2>
          <p className="text-slate-400 text-base max-w-xl mx-auto">
            ابزارهای عملی برای درک بهتر مفاهیم CSS و تولید کد
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Box Shadow */}
          <div className="glass-light rounded-2xl p-6">
            <h3 className="text-lg font-bold text-white mb-5">Box Shadow Generator</h3>
            <div className="flex items-center justify-center h-44 rounded-xl bg-slate-800/50 mb-5">
              <div className="w-28 h-28 rounded-2xl bg-white transition-all duration-300"
                style={{ boxShadow: `${shadow.x}px ${shadow.y}px ${shadow.blur}px ${shadow.spread}px ${hexToRgba(shadow.color, shadow.opacity)}` }}
              />
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
              {[
                { label: 'X', key: 'x', min: -50, max: 50 },
                { label: 'Y', key: 'y', min: -50, max: 50 },
                { label: 'Blur', key: 'blur', min: 0, max: 100 },
                { label: 'Spread', key: 'spread', min: -20, max: 50 },
              ].map(item => (
                <label key={item.key} className="text-xs text-slate-400">
                  {item.label}: {(shadow as any)[item.key]}px
                  <input type="range" min={item.min} max={item.max}
                    value={(shadow as any)[item.key]}
                    onChange={e => setShadow({ ...shadow, [item.key]: Number(e.target.value) })}
                    className="w-full mt-1 accent-indigo-500" />
                </label>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <label className="text-xs text-slate-400">
                Opacity: {shadow.opacity}
                <input type="range" min="0" max="1" step="0.05" value={shadow.opacity}
                  onChange={e => setShadow({ ...shadow, opacity: Number(e.target.value) })}
                  className="w-full mt-1 accent-indigo-500" />
              </label>
              <label className="text-xs text-slate-400">
                Color
                <input type="color" value={shadow.color}
                  onChange={e => setShadow({ ...shadow, color: e.target.value })}
                  className="w-full h-8 mt-1 rounded cursor-pointer" />
              </label>
            </div>
            <div className="code-editor p-3 text-xs mb-3">
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
          <div className="glass-light rounded-2xl p-6">
            <h3 className="text-lg font-bold text-white mb-5">Gradient Generator</h3>
            <div className="h-44 rounded-xl mb-5 transition-all duration-300"
              style={{ background: `linear-gradient(${gradient.angle}deg, ${gradient.from}, ${gradient.to})` }}
            />
            <label className="text-xs text-slate-400 mb-4 block">
              Angle: {gradient.angle}deg
              <input type="range" min="0" max="360" value={gradient.angle}
                onChange={e => setGradient({ ...gradient, angle: Number(e.target.value) })}
                className="w-full mt-1 accent-indigo-500" />
            </label>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <label className="text-xs text-slate-400">
                From
                <input type="color" value={gradient.from}
                  onChange={e => setGradient({ ...gradient, from: e.target.value })}
                  className="w-full h-10 mt-1 rounded cursor-pointer" />
              </label>
              <label className="text-xs text-slate-400">
                To
                <input type="color" value={gradient.to}
                  onChange={e => setGradient({ ...gradient, to: e.target.value })}
                  className="w-full h-10 mt-1 rounded cursor-pointer" />
              </label>
            </div>
            <div className="code-editor p-3 text-xs mb-3">
              <code className="text-emerald-400">
                background: linear-gradient({gradient.angle}deg, {gradient.from}, {gradient.to});
              </code>
            </div>
            <button onClick={() => copy(`background: linear-gradient(${gradient.angle}deg, ${gradient.from}, ${gradient.to});`, 'gradient')}
              className="px-4 py-2 bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 rounded-lg text-sm hover:bg-indigo-500/20 transition-colors">
              {copied === 'gradient' ? 'Copied!' : 'Copy Code'}
            </button>
          </div>

          {/* CSS Spacing Reference */}
          <div className="glass-light rounded-2xl p-6 lg:col-span-2">
            <h3 className="text-lg font-bold text-white mb-5">CSS Spacing & Typography Reference</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-sm font-bold text-slate-300 mb-3">Spacing Scale</h4>
                <div className="space-y-2">
                  {[4, 8, 12, 16, 24, 32, 48, 64].map(size => (
                    <div key={size} className="flex items-center gap-3">
                      <span className="text-xs text-slate-500 w-16 font-mono">{size}px</span>
                      <div className="flex-1 h-5 bg-slate-800/50 rounded overflow-hidden">
                        <div className="h-full bg-gradient-to-l from-indigo-500 to-cyan-500 rounded"
                          style={{ width: `${(size / 64) * 100}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-300 mb-3">Font Size Scale</h4>
                <div className="space-y-3">
                  {[
                    { size: '12px', name: 'xs' },
                    { size: '14px', name: 'sm' },
                    { size: '16px', name: 'base' },
                    { size: '18px', name: 'lg' },
                    { size: '20px', name: 'xl' },
                    { size: '24px', name: '2xl' },
                    { size: '30px', name: '3xl' },
                    { size: '36px', name: '4xl' },
                  ].map(item => (
                    <div key={item.name} className="flex items-center gap-3">
                      <span className="text-xs text-slate-500 w-16 font-mono">{item.name}</span>
                      <span style={{ fontSize: item.size }} className="text-white truncate">
                        Aa
                      </span>
                      <span className="text-xs text-slate-500 mr-auto">{item.size}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
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
    { phase: 'فاز ۱', title: 'مبانی وب', duration: '۱-۲ ماه', items: ['HTML5', 'CSS3', 'Responsive Design', 'Git'], color: 'from-emerald-500 to-green-500' },
    { phase: 'فاز ۲', title: 'جاوااسکریپت', duration: '۲-۳ ماه', items: ['ES6+', 'DOM', 'Async/Await', 'API'], color: 'from-yellow-500 to-amber-500' },
    { phase: 'فاز ۳', title: 'Frontend Framework', duration: '۲-۳ ماه', items: ['React.js', 'State Management', 'Router', 'TypeScript'], color: 'from-cyan-500 to-blue-500' },
    { phase: 'فاز ۴', title: 'Backend', duration: '۲-۳ ماه', items: ['Node.js', 'MongoDB', 'REST API', 'Auth'], color: 'from-purple-500 to-pink-500' },
    { phase: 'فاز ۵', title: 'WordPress', duration: '۱-۲ ماه', items: ['قالب‌نویسی', 'افزونه', 'WooCommerce', 'SEO'], color: 'from-indigo-500 to-violet-500' },
    { phase: 'فاز ۶', title: 'DevOps', duration: '۱ ماه', items: ['Docker', 'CI/CD', 'Linux', 'SSL'], color: 'from-teal-500 to-cyan-500' },
    { phase: 'فاز ۷', title: 'بازار کار', duration: 'مستمر', items: ['پورتفولیو', 'رزومه', 'مصاحبه', 'فریلنسری'], color: 'from-amber-500 to-orange-500' },
  ];

  return (
    <section className="py-20 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">نقشه راه یادگیری</h2>
          <p className="text-slate-400 text-base max-w-xl mx-auto">
            مسیر گام به گام از مبتدی تا حرفه‌ای
          </p>
        </div>

        <div className="relative">
          <div className="absolute right-5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500 via-purple-500 to-amber-500 hidden md:block opacity-30"></div>
          
          <div className="space-y-5">
            {steps.map((step, i) => (
              <div key={i} className="relative flex gap-5 md:gap-6 animate-in" style={{ animationDelay: `${i * 100}ms` }}>
                <div className="hidden md:flex flex-col items-center">
                  <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center text-white font-bold text-xs shadow-lg z-10`}>
                    {i + 1}
                  </div>
                </div>
                <div className="glass-light rounded-xl p-5 flex-1 card-hover">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="md:hidden text-xs text-indigo-400 font-bold">{step.phase}</span>
                    <h3 className="text-base font-bold text-white">{step.title}</h3>
                    <span className="mr-auto text-xs text-slate-500 bg-slate-800 px-2.5 py-1 rounded-full">{step.duration}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {step.items.map((item, j) => (
                      <span key={j} className="text-xs text-slate-300 bg-slate-800/50 px-2.5 py-1 rounded-md border border-slate-700/50">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 glass-light rounded-xl p-6 text-center pulse-glow">
          <h3 className="text-lg font-bold text-white mb-2">زمان تقریبی: ۱۰ تا ۱۴ ماه</h3>
          <p className="text-sm text-slate-400">با روزی ۳-۴ ساعت مطالعه و تمرین عملی</p>
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
    { title: 'مستندات رسمی', items: [
      { name: 'MDN Web Docs', desc: 'مرجع کامل HTML, CSS, JS' },
      { name: 'React Documentation', desc: 'مستندات رسمی React' },
      { name: 'Node.js Docs', desc: 'مستندات Node.js' },
      { name: 'MongoDB Docs', desc: 'مستندات MongoDB' },
    ]},
    { title: 'ابزارهای توسعه', items: [
      { name: 'VS Code', desc: 'بهترین Code Editor' },
      { name: 'Figma', desc: 'طراحی UI/UX' },
      { name: 'Postman', desc: 'تست API' },
      { name: 'Chrome DevTools', desc: 'دیباگ و بررسی' },
    ]},
    { title: 'سایت‌های تمرین', items: [
      { name: 'Frontend Mentor', desc: 'پروژه‌های واقعی' },
      { name: 'Codewars', desc: 'تمرین الگوریتم' },
      { name: 'CSS Battle', desc: 'چالش‌های CSS' },
      { name: 'LeetCode', desc: 'سوالات مصاحبه' },
    ]},
    { title: 'منابع ویدیویی', items: [
      { name: 'Traversy Media', desc: 'آموزش پروژه‌محور' },
      { name: 'Fireship', desc: 'توضیحات سریع' },
      { name: 'Net Ninja', desc: 'سری‌های آموزشی' },
      { name: 'Web Dev Simplified', desc: 'مفاهیم پیچیده ساده' },
    ]},
  ];

  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">منابع و ابزارها</h2>
          <p className="text-slate-400 text-base max-w-xl mx-auto">بهترین منابع برای یادگیری و تمرین</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {groups.map((group, i) => (
            <div key={i} className="glass-light rounded-xl p-6">
              <h3 className="text-lg font-bold text-white mb-4">{group.title}</h3>
              <div className="space-y-2">
                {group.items.map((item, j) => (
                  <div key={j} className="flex items-center gap-3 p-3 rounded-lg bg-slate-800/30 hover:bg-slate-800/60 transition-colors">
                    <div className="w-8 h-8 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400 flex-shrink-0">
                      {Icons.zap}
                    </div>
                    <div>
                      <p className="text-sm text-white font-medium">{item.name}</p>
                      <p className="text-xs text-slate-500">{item.desc}</p>
                    </div>
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-cyan-500 flex items-center justify-center text-white font-bold text-xs">D</div>
              <span className="text-lg font-bold text-white">دِو<span className="text-indigo-400">مستر</span></span>
            </div>
            <p className="text-sm text-slate-400 leading-7">
              آکادمی تخصصی توسعه فول‌استک وب. یادگیری رایگان و حرفه‌ای برای ورود به بازار کار.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-bold text-white mb-3">دسترسی سریع</h4>
            <div className="space-y-1.5">
              {courses.slice(0, 5).map(c => (
                <p key={c.id} className="text-xs text-slate-400 hover:text-indigo-300 cursor-pointer transition-colors">{c.title}</p>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-sm font-bold text-white mb-3">ارتباط</h4>
            <div className="space-y-1.5 text-xs text-slate-400">
              <p>info@devmaster.ir</p>
              <p>github.com/devmaster</p>
              <p>telegram: @DevMasterIR</p>
            </div>
          </div>
        </div>
        <div className="border-t border-slate-800/50 pt-6 text-center">
          <p className="text-xs text-slate-500">ساخته شده با عشق برای جامعه توسعه‌دهندگان ایران | ۱۴۰۳</p>
        </div>
      </div>
    </footer>
  );
}

// ============================================
// Main App
// ============================================
export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [selectedLesson, setSelectedLesson] = useState<Lesson | null>(null);

  const handleSelectCourse = (course: Course) => {
    setSelectedCourse(course);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectLesson = (lesson: Lesson) => {
    setSelectedLesson(lesson);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (selectedLesson) {
    return (
      <div className="min-h-screen bg-[#0a0f1a]">
        <Header activeSection={activeSection} setActiveSection={setActiveSection} />
        <LessonViewer lesson={selectedLesson} onBack={() => { setSelectedLesson(null); window.scrollTo({ top: 0 }); }} />
        <Footer />
      </div>
    );
  }

  if (selectedCourse) {
    return (
      <div className="min-h-screen bg-[#0a0f1a]">
        <Header activeSection={activeSection} setActiveSection={setActiveSection} />
        <CourseDetail course={selectedCourse} onBack={() => { setSelectedCourse(null); window.scrollTo({ top: 0 }); }} onSelectLesson={handleSelectLesson} />
        <Footer />
      </div>
    );
  }

  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return (<>
          <HeroSection onStart={() => setActiveSection('courses')} />
          <CoursesSection onSelectCourse={handleSelectCourse} />
          <RoadmapSection />
        </>);
      case 'courses':
        return <div className="pt-20"><CoursesSection onSelectCourse={handleSelectCourse} /></div>;
      case 'tools':
        return <div className="pt-20"><ToolsSection /></div>;
      case 'roadmap':
        return <div className="pt-20"><RoadmapSection /></div>;
      case 'resources':
        return <div className="pt-20"><ResourcesSection /></div>;
      default: return null;
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0f1a]">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      {renderSection()}
      <Footer />
    </div>
  );
}
