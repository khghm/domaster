import { useState, useEffect } from 'react';
import { courses } from './data/courses';
import type { Course, Lesson } from './data/courses';

// ============================================
// 🎨 Header Component
// ============================================
function Header({ activeSection, setActiveSection }: { activeSection: string; setActiveSection: (s: string) => void }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'خانه', emoji: '🏠' },
    { id: 'courses', label: 'دوره‌ها', emoji: '📚' },
    { id: 'tools', label: 'ابزارها', emoji: '🛠️' },
    { id: 'roadmap', label: 'نقشه راه', emoji: '🗺️' },
    { id: 'resources', label: 'منابع', emoji: '📦' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-900/95 backdrop-blur-xl shadow-2xl shadow-indigo-500/10' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => setActiveSection('home')}>
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-cyan-500 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-indigo-500/30">
              D
            </div>
            <span className="text-xl font-bold gradient-text hidden sm:block">دِو‌مستر</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeSection === item.id
                    ? 'bg-indigo-500/20 text-indigo-300 shadow-inner'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                <span className="ml-1">{item.emoji}</span>
                {item.label}
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={() => setActiveSection('courses')}
              className="px-5 py-2.5 bg-gradient-to-r from-indigo-500 to-cyan-500 text-white rounded-xl font-medium text-sm hover:shadow-lg hover:shadow-indigo-500/30 transition-all duration-300 hover:-translate-y-0.5"
            >
              🚀 شروع یادگیری
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg text-slate-300 hover:bg-white/10"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden pb-4 animate-fade-in">
            <div className="glass-card rounded-2xl p-4 space-y-2">
              {navItems.map(item => (
                <button
                  key={item.id}
                  onClick={() => { setActiveSection(item.id); setMobileMenuOpen(false); }}
                  className={`w-full text-right px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                    activeSection === item.id
                      ? 'bg-indigo-500/20 text-indigo-300'
                      : 'text-slate-300 hover:bg-white/5'
                  }`}
                >
                  <span className="ml-2">{item.emoji}</span>
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
// 🌟 Hero Section
// ============================================
function HeroSection({ onStart }: { onStart: () => void }) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'linear-gradient(rgba(99, 102, 241, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(99, 102, 241, 0.3) 1px, transparent 1px)',
        backgroundSize: '50px 50px'
      }}></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-slide-up">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-sm mb-8">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
            ۱۰۰٪ رایگان • بدون ثبت‌نام • بدون محدودیت
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-6">
            <span className="text-white">مسیر حرفه‌ای شدن در</span>
            <br />
            <span className="gradient-text">توسعه فول‌استک وب</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-slate-400 max-w-3xl mx-auto mb-10 leading-relaxed">
            🎓 از صفر تا حرفه‌ای، همه چیز برای ورود موفق به بازار کار ایران.
            <br className="hidden sm:block" />
            HTML, CSS, JavaScript, React, Node.js, MongoDB, WordPress و موارد بیشتر...
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <button
              onClick={onStart}
              className="group px-8 py-4 bg-gradient-to-r from-indigo-500 to-cyan-500 text-white rounded-2xl font-bold text-lg hover:shadow-2xl hover:shadow-indigo-500/30 transition-all duration-300 hover:-translate-y-1 flex items-center gap-3"
            >
              <span>🚀 شروع یادگیری رایگان</span>
              <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
            <button className="px-8 py-4 border border-slate-600 text-slate-300 rounded-2xl font-medium text-lg hover:border-indigo-500/50 hover:bg-indigo-500/5 transition-all duration-300">
              📖 مشاهده سرفصل‌ها
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              { value: '۷+', label: 'دوره تخصصی', emoji: '📚' },
              { value: '۵۰+', label: 'درس جامع', emoji: '📝' },
              { value: '۱۰۰+', label: 'ساعت محتوا', emoji: '⏱️' },
              { value: '۱۰۰٪', label: 'رایگان', emoji: '🎁' },
            ].map((stat, i) => (
              <div key={i} className="glass-card rounded-2xl p-4 hover:border-indigo-500/40 transition-all duration-300">
                <div className="text-2xl mb-1">{stat.emoji}</div>
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-sm text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-slate-500 flex items-start justify-center p-1.5">
          <div className="w-1.5 h-3 rounded-full bg-indigo-400 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}

// ============================================
// 📚 Courses Section
// ============================================
function CoursesSection({ onSelectCourse }: { onSelectCourse: (course: Course) => void }) {
  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-4xl mb-4 block">📚</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">دوره‌های آموزشی</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            مسیر یادگیری کامل از مبتدی تا حرفه‌ای. هر دوره شامل توضیحات جامع، کد عملی و تمرینات با پاسخ کامل است.
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, index) => (
            <div
              key={course.id}
              onClick={() => onSelectCourse(course)}
              className="group glass-card rounded-2xl p-6 cursor-pointer hover:border-indigo-500/40 hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300 hover:-translate-y-2 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Course Icon */}
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${course.color} flex items-center justify-center text-white text-2xl mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                {course.emoji}
              </div>

              {/* Course Info */}
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors">
                {course.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                {course.description}
              </p>

              {/* Lesson Count */}
              <div className="flex items-center justify-between">
                <span className="text-xs text-slate-500 bg-slate-800 px-3 py-1 rounded-full">
                  📝 {course.lessons.length} درس
                </span>
                <span className="text-indigo-400 text-sm font-medium group-hover:translate-x-[-4px] transition-transform">
                  مشاهده دوره ←
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================
// 📖 Lesson Viewer
// ============================================
function LessonViewer({ lesson, onBack }: { lesson: Lesson; onBack: () => void }) {
  const [showCode, setShowCode] = useState(true);
  const [showTips, setShowTips] = useState(true);
  const [showExercises, setShowExercises] = useState(false);
  const [revealedExercises, setRevealedExercises] = useState<number[]>([]);

  const toggleExercise = (index: number) => {
    setRevealedExercises(prev =>
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    );
  };

  const renderContent = (content: string) => {
    return content.split('\n').map((line, i) => {
      if (line.startsWith('🔹')) {
        return <h3 key={i} className="text-lg font-bold text-indigo-300 mt-6 mb-3">{line}</h3>;
      }
      if (line.startsWith('•')) {
        return <li key={i} className="text-slate-300 mr-4 mb-1 list-none">{line}</li>;
      }
      if (line.startsWith('**') && line.endsWith('**')) {
        return <h4 key={i} className="text-base font-bold text-cyan-300 mt-4 mb-2">{line.replace(/\*\*/g, '')}</h4>;
      }
      if (line.trim() === '') return <br key={i} />;
      return <p key={i} className="text-slate-300 leading-8 mb-2">{line}</p>;
    });
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-slate-400 hover:text-indigo-300 transition-colors mb-8 group"
        >
          <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          <span>بازگشت به دوره‌ها</span>
        </button>

        {/* Lesson Header */}
        <div className="glass-card rounded-2xl p-8 mb-8">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-4xl">{lesson.emoji}</span>
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-white">{lesson.title}</h1>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="glass-card rounded-2xl p-6 sm:p-8 mb-8">
          <div className="prose prose-invert max-w-none">
            {renderContent(lesson.content)}
          </div>
        </div>

        {/* Code Block */}
        {lesson.code && (
          <div className="mb-8">
            <button
              onClick={() => setShowCode(!showCode)}
              className="flex items-center gap-2 text-white font-bold mb-4 hover:text-indigo-300 transition-colors"
            >
              <span className="text-xl">💻</span>
              <span>کد عملی</span>
              <svg className={`w-4 h-4 transition-transform ${showCode ? 'rotate-90' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            {showCode && (
              <div className="code-block p-6 animate-fade-in">
                <div className="flex items-center gap-2 mb-4 pb-3 border-b border-slate-700">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="text-xs text-slate-500 mr-4">{lesson.language || 'code'}</span>
                </div>
                <pre className="overflow-x-auto text-sm leading-7">
                  <code className="text-slate-300">{lesson.code}</code>
                </pre>
              </div>
            )}
          </div>
        )}

        {/* Tips */}
        {lesson.tips && lesson.tips.length > 0 && (
          <div className="mb-8">
            <button
              onClick={() => setShowTips(!showTips)}
              className="flex items-center gap-2 text-white font-bold mb-4 hover:text-indigo-300 transition-colors"
            >
              <span className="text-xl">💡</span>
              <span>نکات کلیدی</span>
              <svg className={`w-4 h-4 transition-transform ${showTips ? 'rotate-90' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            {showTips && (
              <div className="glass-card rounded-2xl p-6 animate-fade-in border-amber-500/20">
                <div className="space-y-3">
                  {lesson.tips.map((tip, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <span className="text-amber-400 mt-0.5">💡</span>
                      <p className="text-slate-300 leading-7">{tip}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Exercises */}
        {lesson.exercises && lesson.exercises.length > 0 && (
          <div className="mb-8">
            <button
              onClick={() => setShowExercises(!showExercises)}
              className="flex items-center gap-2 text-white font-bold mb-4 hover:text-indigo-300 transition-colors"
            >
              <span className="text-xl">🏋️</span>
              <span>تمرینات عملی (با پاسخ کامل)</span>
              <svg className={`w-4 h-4 transition-transform ${showExercises ? 'rotate-90' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            {showExercises && (
              <div className="space-y-6 animate-fade-in">
                {lesson.exercises.map((exercise, i) => (
                  <div key={i} className="glass-card rounded-2xl p-6">
                    <div className="flex items-start gap-3 mb-4">
                      <span className="text-2xl">📋</span>
                      <div>
                        <h4 className="text-white font-bold mb-2">تمرین {i + 1}:</h4>
                        <p className="text-slate-300 leading-7">{exercise.question}</p>
                      </div>
                    </div>

                    <button
                      onClick={() => toggleExercise(i)}
                      className="flex items-center gap-2 px-4 py-2 bg-indigo-500/20 text-indigo-300 rounded-xl text-sm font-medium hover:bg-indigo-500/30 transition-colors"
                    >
                      {revealedExercises.includes(i) ? '🔽 مخفی کردن پاسخ' : '🔓 نمایش پاسخ'}
                    </button>

                    {revealedExercises.includes(i) && (
                      <div className="mt-4 code-block p-5 animate-fade-in">
                        <div className="flex items-center gap-2 mb-3 pb-2 border-b border-slate-700">
                          <span className="text-green-400 text-xs">✅ پاسخ:</span>
                        </div>
                        <pre className="overflow-x-auto text-sm leading-7">
                          <code className="text-slate-300">{exercise.answer}</code>
                        </pre>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

// ============================================
// 📖 Course Detail View
// ============================================
function CourseDetail({ course, onBack, onSelectLesson }: { course: Course; onBack: () => void; onSelectLesson: (lesson: Lesson) => void }) {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-slate-400 hover:text-indigo-300 transition-colors mb-8 group"
        >
          <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          <span>بازگشت به دوره‌ها</span>
        </button>

        {/* Course Header */}
        <div className="glass-card rounded-2xl p-8 mb-8">
          <div className="flex items-center gap-4 mb-4">
            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${course.color} flex items-center justify-center text-3xl shadow-lg`}>
              {course.emoji}
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-white">{course.title}</h1>
              <p className="text-slate-400 mt-1">{course.description}</p>
            </div>
          </div>
          <div className="flex items-center gap-4 mt-6">
            <span className="text-sm text-slate-400 bg-slate-800 px-3 py-1 rounded-full">
              📝 {course.lessons.length} درس
            </span>
            <span className="text-sm text-slate-400 bg-slate-800 px-3 py-1 rounded-full">
              ⏱️ حدود {course.lessons.length * 45} دقیقه مطالعه
            </span>
          </div>
        </div>

        {/* Lessons List */}
        <div className="space-y-4">
          {course.lessons.map((lesson, index) => (
            <div
              key={lesson.id}
              onClick={() => onSelectLesson(lesson)}
              className="group glass-card rounded-2xl p-6 cursor-pointer hover:border-indigo-500/40 hover:shadow-lg hover:shadow-indigo-500/10 transition-all duration-300"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/20 flex items-center justify-center text-indigo-300 font-bold text-sm">
                  {index + 1}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-white group-hover:text-indigo-300 transition-colors">
                    <span className="ml-2">{lesson.emoji}</span>
                    {lesson.title}
                  </h3>
                  <p className="text-sm text-slate-500 mt-1">
                    {lesson.tips?.length || 0} نکته • {lesson.exercises?.length || 0} تمرین
                    {lesson.code ? ' • 💻 کد عملی' : ''}
                  </p>
                </div>
                <svg className="w-5 h-5 text-slate-500 group-hover:text-indigo-400 group-hover:-translate-x-1 transition-all rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ============================================
// 🛠️ Tools Section
// ============================================
function ToolsSection() {
  const [colorPicker, setColorPicker] = useState('#6366f1');
  const [boxShadow, setBoxShadow] = useState({ x: 0, y: 10, blur: 30, spread: 0, color: '#6366f1', opacity: 0.3 });
  const [gradientFrom, setGradientFrom] = useState('#6366f1');
  const [gradientTo, setGradientTo] = useState('#06b6d4');
  const [gradientAngle, setGradientAngle] = useState(135);
  const [copiedText, setCopiedText] = useState('');

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(label);
    setTimeout(() => setCopiedText(''), 2000);
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
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-4xl mb-4 block">🛠️</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">ابزارهای کمک‌آموزشی</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            ابزارهای تعاملی برای درک بهتر مفاهیم CSS و طراحی بصری
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Box Shadow Generator */}
          <div className="glass-card rounded-2xl p-6">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <span>🌫️</span> Box Shadow Generator
            </h3>
            
            <div className="flex items-center justify-center mb-6 h-48 rounded-xl bg-slate-800/50">
              <div
                className="w-32 h-32 rounded-2xl bg-white transition-all duration-300"
                style={{
                  boxShadow: `${boxShadow.x}px ${boxShadow.y}px ${boxShadow.blur}px ${boxShadow.spread}px ${hexToRgba(boxShadow.color, boxShadow.opacity)}`
                }}
              ></div>
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <label className="text-sm text-slate-400">
                  X: {boxShadow.x}px
                  <input type="range" min="-50" max="50" value={boxShadow.x}
                    onChange={e => setBoxShadow({...boxShadow, x: Number(e.target.value)})}
                    className="w-full mt-1" />
                </label>
                <label className="text-sm text-slate-400">
                  Y: {boxShadow.y}px
                  <input type="range" min="-50" max="50" value={boxShadow.y}
                    onChange={e => setBoxShadow({...boxShadow, y: Number(e.target.value)})}
                    className="w-full mt-1" />
                </label>
                <label className="text-sm text-slate-400">
                  Blur: {boxShadow.blur}px
                  <input type="range" min="0" max="100" value={boxShadow.blur}
                    onChange={e => setBoxShadow({...boxShadow, blur: Number(e.target.value)})}
                    className="w-full mt-1" />
                </label>
                <label className="text-sm text-slate-400">
                  Spread: {boxShadow.spread}px
                  <input type="range" min="-20" max="50" value={boxShadow.spread}
                    onChange={e => setBoxShadow({...boxShadow, spread: Number(e.target.value)})}
                    className="w-full mt-1" />
                </label>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <label className="text-sm text-slate-400">
                  Opacity: {boxShadow.opacity}
                  <input type="range" min="0" max="1" step="0.05" value={boxShadow.opacity}
                    onChange={e => setBoxShadow({...boxShadow, opacity: Number(e.target.value)})}
                    className="w-full mt-1" />
                </label>
                <label className="text-sm text-slate-400">
                  Color
                  <input type="color" value={boxShadow.color}
                    onChange={e => setBoxShadow({...boxShadow, color: e.target.value})}
                    className="w-full h-8 mt-1 rounded cursor-pointer" />
                </label>
              </div>
            </div>

            <div className="mt-4 code-block p-3 text-xs">
              <code className="text-green-400">
                box-shadow: {boxShadow.x}px {boxShadow.y}px {boxShadow.blur}px {boxShadow.spread}px {hexToRgba(boxShadow.color, boxShadow.opacity)};
              </code>
            </div>
            <button
              onClick={() => copyToClipboard(`box-shadow: ${boxShadow.x}px ${boxShadow.y}px ${boxShadow.blur}px ${boxShadow.spread}px ${hexToRgba(boxShadow.color, boxShadow.opacity)};`, 'Shadow')}
              className="mt-3 px-4 py-2 bg-indigo-500/20 text-indigo-300 rounded-lg text-sm hover:bg-indigo-500/30 transition-colors"
            >
              {copiedText === 'Shadow' ? '✅ کپی شد!' : '📋 کپی کد'}
            </button>
          </div>

          {/* Gradient Generator */}
          <div className="glass-card rounded-2xl p-6">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <span>🌈</span> Gradient Generator
            </h3>
            
            <div
              className="h-48 rounded-xl mb-6 transition-all duration-300"
              style={{
                background: `linear-gradient(${gradientAngle}deg, ${gradientFrom}, ${gradientTo})`
              }}
            ></div>

            <div className="space-y-4">
              <label className="text-sm text-slate-400">
                زاویه: {gradientAngle}°
                <input type="range" min="0" max="360" value={gradientAngle}
                  onChange={e => setGradientAngle(Number(e.target.value))}
                  className="w-full mt-1" />
              </label>
              <div className="grid grid-cols-2 gap-4">
                <label className="text-sm text-slate-400">
                  رنگ اول
                  <input type="color" value={gradientFrom}
                    onChange={e => setGradientFrom(e.target.value)}
                    className="w-full h-10 mt-1 rounded cursor-pointer" />
                </label>
                <label className="text-sm text-slate-400">
                  رنگ دوم
                  <input type="color" value={gradientTo}
                    onChange={e => setGradientTo(e.target.value)}
                    className="w-full h-10 mt-1 rounded cursor-pointer" />
                </label>
              </div>
            </div>

            <div className="mt-4 code-block p-3 text-xs">
              <code className="text-green-400">
                background: linear-gradient({gradientAngle}deg, {gradientFrom}, {gradientTo});
              </code>
            </div>
            <button
              onClick={() => copyToClipboard(`background: linear-gradient(${gradientAngle}deg, ${gradientFrom}, ${gradientTo});`, 'Gradient')}
              className="mt-3 px-4 py-2 bg-indigo-500/20 text-indigo-300 rounded-lg text-sm hover:bg-indigo-500/30 transition-colors"
            >
              {copiedText === 'Gradient' ? '✅ کپی شد!' : '📋 کپی کد'}
            </button>
          </div>

          {/* Color Picker */}
          <div className="glass-card rounded-2xl p-6">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <span>🎨</span> Color Palette Generator
            </h3>
            
            <div className="flex items-center gap-4 mb-6">
              <input
                type="color"
                value={colorPicker}
                onChange={e => setColorPicker(e.target.value)}
                className="w-16 h-16 rounded-xl cursor-pointer border-0"
              />
              <div>
                <p className="text-white font-mono text-lg">{colorPicker.toUpperCase()}</p>
                <p className="text-slate-400 text-sm mt-1">
                  RGB: {parseInt(colorPicker.slice(1,3),16)}, {parseInt(colorPicker.slice(3,5),16)}, {parseInt(colorPicker.slice(5,7),16)}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-5 gap-2">
              {[0.1, 0.25, 0.5, 0.75, 1].map(opacity => (
                <div
                  key={opacity}
                  className="h-16 rounded-lg cursor-pointer hover:scale-105 transition-transform relative group"
                  style={{ backgroundColor: hexToRgba(colorPicker, opacity) }}
                  onClick={() => copyToClipboard(hexToRgba(colorPicker, opacity), `Color-${opacity}`)}
                >
                  <span className="absolute bottom-1 left-1 right-1 text-center text-[10px] text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    {opacity}
                  </span>
                </div>
              ))}
            </div>
            <p className="text-xs text-slate-500 mt-3">💡 روی هر رنگ کلیک کنید تا کد آن کپی شود</p>
          </div>

          {/* Spacing Visualizer */}
          <div className="glass-card rounded-2xl p-6">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <span>📏</span> CSS Spacing Reference
            </h3>
            
            <div className="space-y-3">
              {[
                { name: '4px (0.25rem)', size: 4, label: 'xs' },
                { name: '8px (0.5rem)', size: 8, label: 'sm' },
                { name: '12px (0.75rem)', size: 12, label: 'md' },
                { name: '16px (1rem)', size: 16, label: 'base' },
                { name: '24px (1.5rem)', size: 24, label: 'lg' },
                { name: '32px (2rem)', size: 32, label: 'xl' },
                { name: '48px (3rem)', size: 48, label: '2xl' },
                { name: '64px (4rem)', size: 64, label: '3xl' },
              ].map(space => (
                <div key={space.label} className="flex items-center gap-3">
                  <span className="text-xs text-slate-400 w-28 font-mono">{space.name}</span>
                  <div className="flex-1 h-6 bg-slate-800 rounded overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-l from-indigo-500 to-cyan-500 rounded transition-all duration-300"
                      style={{ width: `${(space.size / 64) * 100}%` }}
                    ></div>
                  </div>
                  <span className="text-xs text-slate-500 w-8">{space.size}px</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================
// 🗺️ Roadmap Section
// ============================================
function RoadmapSection() {
  const roadmapSteps = [
    {
      phase: 'فاز ۱',
      title: 'مبانی وب',
      emoji: '🌱',
      duration: '۱-۲ ماه',
      items: ['HTML5 کامل', 'CSS3 و Layout', 'Responsive Design', 'Git و GitHub'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      phase: 'فاز ۲',
      title: 'جاوااسکریپت',
      emoji: '⚡',
      duration: '۲-۳ ماه',
      items: ['JS مدرن (ES6+)', 'DOM و Events', 'Async/Await', 'API کار با سرور'],
      color: 'from-yellow-500 to-orange-500'
    },
    {
      phase: 'فاز ۳',
      title: 'Frontend Framework',
      emoji: '⚛️',
      duration: '۲-۳ ماه',
      items: ['React.js', 'State Management', 'React Router', 'TypeScript'],
      color: 'from-cyan-500 to-blue-500'
    },
    {
      phase: 'فاز ۴',
      title: 'Backend Development',
      emoji: '🖥️',
      duration: '۲-۳ ماه',
      items: ['Node.js و Express', 'MongoDB / SQL', 'REST API', 'Authentication'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      phase: 'فاز ۵',
      title: 'WordPress',
      emoji: '📝',
      duration: '۱-۲ ماه',
      items: ['قالب‌نویسی', 'افزونه‌نویسی', 'WooCommerce', 'بهینه‌سازی'],
      color: 'from-blue-600 to-indigo-600'
    },
    {
      phase: 'فاز ۶',
      title: 'Deploy و DevOps',
      emoji: '🚀',
      duration: '۱ ماه',
      items: ['Docker', 'CI/CD', 'Linux و سرور', 'SSL و امنیت'],
      color: 'from-teal-500 to-cyan-500'
    },
    {
      phase: 'فاز ۷',
      title: 'ورود به بازار کار',
      emoji: '💼',
      duration: 'مستمر',
      items: ['پورتفولیو', 'رزومه و LinkedIn', 'مصاحبه فنی', 'فریلنسری / استخدام'],
      color: 'from-amber-500 to-orange-500'
    },
  ];

  return (
    <section className="py-20 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-4xl mb-4 block">🗺️</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">نقشه راه یادگیری</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            مسیر گام به گام از مبتدی تا حرفه‌ای. هر فاز را به ترتیب طی کنید.
          </p>
        </div>

        {/* Roadmap Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute right-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500 via-purple-500 to-amber-500 hidden md:block"></div>

          <div className="space-y-8">
            {roadmapSteps.map((step, index) => (
              <div key={index} className="relative flex gap-6 md:gap-8">
                {/* Timeline Dot */}
                <div className="hidden md:flex flex-col items-center">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center text-xl shadow-lg z-10`}>
                    {step.emoji}
                  </div>
                </div>

                {/* Content Card */}
                <div className="glass-card rounded-2xl p-6 flex-1 hover:border-indigo-500/30 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="md:hidden text-2xl">{step.emoji}</span>
                    <div>
                      <span className="text-xs text-indigo-400 font-medium">{step.phase}</span>
                      <h3 className="text-lg font-bold text-white">{step.title}</h3>
                    </div>
                    <span className="mr-auto text-xs text-slate-500 bg-slate-800 px-3 py-1 rounded-full">
                      ⏱️ {step.duration}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {step.items.map((item, i) => (
                      <span key={i} className="text-xs text-slate-300 bg-slate-800/50 px-3 py-1.5 rounded-lg border border-slate-700/50">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Total Time */}
        <div className="mt-12 glass-card rounded-2xl p-8 text-center glow-border">
          <span className="text-3xl mb-3 block">⏰</span>
          <h3 className="text-xl font-bold text-white mb-2">زمان تقریبی کل: ۱۰ تا ۱۴ ماه</h3>
          <p className="text-slate-400">
            با روزی ۳-۴ ساعت مطالعه و تمرین عملی، می‌توانید در کمتر از یک سال به یک توسعه‌دهنده فول‌استک حرفه‌ای تبدیل شوید.
          </p>
        </div>
      </div>
    </section>
  );
}

// ============================================
// 📦 Resources Section
// ============================================
function ResourcesSection() {
  const resources = [
    {
      category: '📚 مستندات رسمی',
      items: [
        { name: 'MDN Web Docs', url: 'https://developer.mozilla.org', desc: 'مرجع کامل HTML, CSS, JS' },
        { name: 'React Docs', url: 'https://react.dev', desc: 'مستندات رسمی React' },
        { name: 'Node.js Docs', url: 'https://nodejs.org/docs', desc: 'مستندات رسمی Node.js' },
        { name: 'MongoDB Docs', url: 'https://docs.mongodb.com', desc: 'مستندات MongoDB' },
      ]
    },
    {
      category: '🎥 منابع ویدیویی',
      items: [
        { name: 'YouTube - Traversy Media', url: '#', desc: 'آموزش‌های پروژه‌محور' },
        { name: 'YouTube - Fireship', url: '#', desc: 'توضیحات سریع و کاربردی' },
        { name: 'YouTube - Net Ninja', url: '#', desc: 'سری‌های آموزشی کامل' },
        { name: 'Frontend Masters', url: '#', desc: 'دوره‌های حرفه‌ای Frontend' },
      ]
    },
    {
      category: '🛠️ ابزارهای توسعه',
      items: [
        { name: 'VS Code', url: '#', desc: 'بهترین Code Editor' },
        { name: 'Figma', url: '#', desc: 'طراحی UI/UX' },
        { name: 'Postman', url: '#', desc: 'تست API' },
        { name: 'Chrome DevTools', url: '#', desc: 'دیباگ و بررسی صفحه' },
      ]
    },
    {
      category: '🌐 سایت‌های تمرین',
      items: [
        { name: 'Frontend Mentor', url: '#', desc: 'پروژه‌های Frontend واقعی' },
        { name: 'Codewars', url: '#', desc: 'تمرین الگوریتم' },
        { name: 'CSS Battle', url: '#', desc: 'چالش‌های CSS' },
        { name: 'LeetCode', url: '#', desc: 'سوالات مصاحبه' },
      ]
    },
  ];

  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-4xl mb-4 block">📦</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">منابع و ابزارها</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            مجموعه‌ای از بهترین منابع برای یادگیری و تمرین
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {resources.map((group, index) => (
            <div key={index} className="glass-card rounded-2xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">{group.category}</h3>
              <div className="space-y-3">
                {group.items.map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-slate-800/30 hover:bg-slate-800/60 transition-colors">
                    <div className="w-8 h-8 rounded-lg bg-indigo-500/20 flex items-center justify-center text-sm">
                      🔗
                    </div>
                    <div className="flex-1">
                      <p className="text-white text-sm font-medium">{item.name}</p>
                      <p className="text-slate-500 text-xs">{item.desc}</p>
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
// 🦶 Footer
// ============================================
function Footer() {
  return (
    <footer className="border-t border-slate-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-cyan-500 flex items-center justify-center text-white font-bold">
                D
              </div>
              <span className="text-xl font-bold gradient-text">دِو‌مستر</span>
            </div>
            <p className="text-slate-400 text-sm leading-7">
              آکادمی تخصصی توسعه فول‌استک وب. یادگیری رایگان، حرفه‌ای و پروژه‌محور برای ورود موفق به بازار کار ایران.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-4">دسترسی سریع</h4>
            <div className="space-y-2">
              {['دوره HTML و CSS', 'دوره JavaScript', 'دوره React', 'دوره Node.js', 'دوره WordPress'].map((item, i) => (
                <p key={i} className="text-slate-400 text-sm hover:text-indigo-300 cursor-pointer transition-colors">
                  ← {item}
                </p>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-4">ارتباط با ما</h4>
            <div className="space-y-2 text-slate-400 text-sm">
              <p>📧 info@devmaster.ir</p>
              <p>💬 تلگرام: @DevMasterIR</p>
              <p>📱 اینستاگرام: @DevMaster.ir</p>
              <p>🐙 GitHub: DevMasterIR</p>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center">
          <p className="text-slate-500 text-sm">
            ❤️ ساخته شده با عشق برای جامعه توسعه‌دهندگان ایران | ۱۴۰۳ © دِو‌مستر
          </p>
        </div>
      </div>
    </footer>
  );
}

// ============================================
// 🏠 Main App
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

  const handleBackFromLesson = () => {
    setSelectedLesson(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackFromCourse = () => {
    setSelectedCourse(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // If viewing a lesson
  if (selectedLesson) {
    return (
      <div className="min-h-screen bg-slate-900">
        <Header activeSection={activeSection} setActiveSection={setActiveSection} />
        <LessonViewer lesson={selectedLesson} onBack={handleBackFromLesson} />
        <Footer />
      </div>
    );
  }

  // If viewing a course
  if (selectedCourse) {
    return (
      <div className="min-h-screen bg-slate-900">
        <Header activeSection={activeSection} setActiveSection={setActiveSection} />
        <CourseDetail course={selectedCourse} onBack={handleBackFromCourse} onSelectLesson={handleSelectLesson} />
        <Footer />
      </div>
    );
  }

  // Main pages
  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return (
          <>
            <HeroSection onStart={() => setActiveSection('courses')} />
            <CoursesSection onSelectCourse={handleSelectCourse} />
            <RoadmapSection />
          </>
        );
      case 'courses':
        return (
          <div className="pt-24">
            <CoursesSection onSelectCourse={handleSelectCourse} />
          </div>
        );
      case 'tools':
        return (
          <div className="pt-24">
            <ToolsSection />
          </div>
        );
      case 'roadmap':
        return (
          <div className="pt-24">
            <RoadmapSection />
          </div>
        );
      case 'resources':
        return (
          <div className="pt-24">
            <ResourcesSection />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-slate-900">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      {renderSection()}
      <Footer />
    </div>
  );
}
