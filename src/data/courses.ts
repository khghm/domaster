export interface Lesson {
  id: string;
  title: string;
  subtitle: string;
  content: string;
  code?: string;
  language?: string;
  tips?: string[];
  warnings?: string[];
  estimatedTime?: number;
  difficulty?: 'مبتدی' | 'متوسط' | 'پیشرفته';
}

export interface Chapter {
  id: string;
  title: string;
  description: string;
  lessons: Lesson[];
}

export interface Course {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  color: string;
  chapters: Chapter[];
  prerequisites?: string[];
  outcomes?: string[];
  totalHours?: number;
}

export const courses: Course[] = [
  {
    id: "html-css",
    title: "HTML و CSS جامع",
    subtitle: "از صفر تا طراحی حرفه‌ای صفحات وب",
    description: "کتاب کامل HTML و CSS شامل ۶ فصل و بیش از ۲۰ درس. از مفاهیم پایه تا تکنیک‌های پیشرفته مانند Flexbox، Grid، انیمیشن‌ها و طراحی ریسپانسیو.",
    color: "from-orange-500 to-red-500",
    totalHours: 40,
    prerequisites: ["آشنایی اولیه با کامپیوتر"],
    outcomes: [
      "تسلط کامل بر HTML5 و عناصر معنایی",
      "طراحی صفحات ریسپانسیو با Flexbox و Grid",
      "ایجاد انیمیشن‌ها و transitions حرفه‌ای",
      "نوشتن کد تمیز و قابل نگهداری",
      "آشنایی با CSS Architecture و BEM"
    ],
    chapters: [
      {
        id: "ch1-intro",
        title: "فصل ۱: مقدمه‌ای بر وب و HTML",
        description: "آشنایی با اینترنت، مرورگرها و ساختار صفحات HTML",
        lessons: [
          {
            id: "l1-1",
            title: "اینترنت و وب چگونه کار می‌کنند؟",
            subtitle: "درک زیرساخت وب از DNS تا مرورگر",
            estimatedTime: 20,
            difficulty: "مبتدی",
            content: `## اینترنت و World Wide Web

بسیاری از افراد اینترنت و وب را یکسان می‌پندارند، اما این دو مفاهیم متفاوتی هستند.

### اینترنت (Internet)
شبکه‌ای جهانی از شبکه‌های کامپیوتری است که با پروتکل TCP/IP به هم متصل شده‌اند. اینترنت زیرساخت فیزیکی و منطقی است که امکان انتقال داده را فراهم می‌کند.

### World Wide Web (WWW)
یکی از سرویس‌هایی است که روی اینترنت اجرا می‌شود. وب مجموعه‌ای از اسناد و منابع است که با URL شناسایی شده و از طریق HTTP قابل دسترسی هستند.

### پروتکل HTTP/HTTPS

HTTP (HyperText Transfer Protocol) پروتکل اصلی انتقال داده در وب است.

**ساختار درخواست HTTP:**
- Method: GET, POST, PUT, DELETE
- URL: آدرس منبع
- Headers: اطلاعات اضافی
- Body: داده‌های ارسالی

**ساختار پاسخ HTTP:**
- Status Code: 200 (موفق), 404 (یافت نشد), 500 (خطای سرور)
- Headers: اطلاعات پاسخ
- Body: محتوای پاسخ

### DNS (Domain Name System)

DNS مانند دفترچه تلفن اینترنت عمل می‌کند و نام دامنه (مثل google.com) را به آدرس IP تبدیل می‌کند.

**مراحل بارگذاری یک صفحه وب:**
1. کاربر URL را وارد می‌کند
2. مرورگر DNS را پرس‌وجو می‌کند
3. IP سرور دریافت می‌شود
4. اتصال TCP برقرار می‌شود
5. درخواست HTTP ارسال می‌شود
6. سرور پاسخ HTML ارسال می‌کند
7. مرورگر HTML را parse و render می‌کند

### مرورگرها و موتورهای رندر

مرورگر برنامه‌ای است که اسناد وب را نمایش می‌دهد. هر مرورگر از موتور رندر خاصی استفاده می‌کند:

- Chrome: Blink
- Firefox: Gecko
- Safari: WebKit
- Edge: Blink

### ساختار یک سند HTML

HTML از عناصر (Elements) تشکیل شده. هر عنصر از تگ باز، محتوا و تگ بسته تشکیل می‌شود.`,
            code: `<!-- ساختار پایه یک سند HTML -->
<!DOCTYPE html>
<html lang="fa" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="توضیحات صفحه">
    <title>عنوان صفحه</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <h1>عنوان اصلی</h1>
        <nav>
            <a href="/">خانه</a>
            <a href="/about">درباره</a>
        </nav>
    </header>
    
    <main>
        <article>
            <h2>عنوان مقاله</h2>
            <p>محتوای مقاله...</p>
        </article>
    </main>
    
    <footer>
        <p>&copy; ۱۴۰۳</p>
    </footer>
    
    <script src="app.js"></script>
</body>
</html>`,
            language: "html",
            tips: [
              "همیشه DOCTYPE را در خط اول قرار دهید",
              "meta viewport برای ریسپانسیو ضروری است",
              "از lang و dir برای زبان و جهت متن استفاده کنید"
            ]
          },
          {
            id: "l1-2",
            title: "عناصر متنی و ساختاری HTML",
            subtitle: "تگ‌های پایه برای نمایش محتوا",
            estimatedTime: 25,
            difficulty: "مبتدی",
            content: `## عناصر متنی HTML

HTML طیف وسیعی از عناصر برای نمایش انواع مختلف متن ارائه می‌دهد.

### عناوین (Headings)

شش سطح عنوان از h1 تا h6 وجود دارد. h1 مهم‌ترین و h6 کم‌اهمیت‌ترین است.

**نکات مهم:**
- فقط یک h1 در هر صفحه داشته باشید
- سلسله‌مراتب را رعایت کنید (از h1 به h3 نپرید)
- عناوین برای SEO بسیار مهم هستند

### پاراگراف‌ها

تگ \`<p>\` برای پاراگراف‌های متن استفاده می‌شود.

### لیست‌ها

سه نوع لیست در HTML وجود دارد:

**1. لیست مرتب (Ordered List):**
\`\`\`html
<ol>
    <li>مورد اول</li>
    <li>مورد دوم</li>
</ol>
\`\`\`

**2. لیست نامرتب (Unordered List):**
\`\`\`html
<ul>
    <li>مورد اول</li>
    <li>مورد دوم</li>
</ul>
\`\`\`

**3. لیست تعریفی (Definition List):**
\`\`\`html
<dl>
    <dt>HTML</dt>
    <dd>زبان نشانه‌گذاری ابرمتن</dd>
</dl>
\`\`\`

### عناصر قالب‌بندی متن

- \`<strong>\` - متن مهم (bold)
- \`<em>\` - تأکید (italic)
- \`<mark>\` - هایلایت
- \`<del>\` - متن حذف شده
- \`<ins>\` - متن اضافه شده
- \`<sub>\` - زیرنویس
- \`<sup>\` - بالانویس
- \`<code>\` - کد
- \`<pre>\` - متن پیش‌قالب‌بندی شده
- \`<blockquote>\` - نقل قول
- \`<abbr>\` - مخفف
- \`<cite>\` - عنوان اثر`,
            code: `<!DOCTYPE html>
<html lang="fa" dir="rtl">
<head>
    <meta charset="UTF-8">
    <title>عناصر متنی HTML</title>
    <style>
        body {
            font-family: 'Vazirmatn', sans-serif;
            line-height: 1.8;
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
        }
        h1 { color: #4f46e5; border-bottom: 2px solid #4f46e5; }
        h2 { color: #06b6d4; }
        code {
            background: #f1f5f9;
            padding: 2px 6px;
            border-radius: 4px;
            font-family: monospace;
        }
        pre {
            background: #1e293b;
            color: #e2e8f0;
            padding: 16px;
            border-radius: 8px;
            overflow-x: auto;
        }
        blockquote {
            border-right: 4px solid #4f46e5;
            padding-right: 16px;
            margin-right: 0;
            color: #64748b;
            font-style: italic;
        }
    </style>
</head>
<body>
    <h1>آموزش عناصر متنی HTML</h1>
    
    <h2>عناوین</h2>
    <p>عناوین از <code>&lt;h1&gt;</code> تا <code>&lt;h6&gt;</code> هستند.</p>
    
    <h2>پاراگراف‌ها</h2>
    <p>این یک پاراگراف نمونه است. HTML فضای خالی اضافی را نادیده می‌گیرد.</p>
    <p>برای خط جدید از <code>&lt;br&gt;</code> استفاده کنید.<br>
    این خط بعد از br است.</p>
    
    <h2>لیست‌ها</h2>
    <h3>لیست مرتب:</h3>
    <ol>
        <li>HTML را یاد بگیرید</li>
        <li>CSS را یاد بگیرید</li>
        <li>JavaScript را یاد بگیرید</li>
    </ol>
    
    <h3>لیست نامرتب:</h3>
    <ul>
        <li>React</li>
        <li>Vue</li>
        <li>Angular</li>
    </ul>
    
    <h3>لیست تودرتو:</h3>
    <ul>
        <li>فرانت‌اند
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
            </ul>
        </li>
        <li>بک‌اند
            <ul>
                <li>Node.js</li>
                <li>Python</li>
            </ul>
        </li>
    </ul>
    
    <h2>عناصر قالب‌بندی</h2>
    <p>متن <strong>مهم</strong> با strong نمایش داده می‌شود.</p>
    <p>متن <em>تأکیدی</em> با em نمایش داده می‌شود.</p>
    <p>متن <mark>هایلایت شده</mark> با mark.</p>
    <p>متن <del>حذف شده</del> و <ins>اضافه شده</del>.</p>
    <p>فرمول آب: H<sub>2</sub>O</p>
    <p>توان: x<sup>2</sup></p>
    
    <h2>کد</h2>
    <p>کد inline: <code>console.log("Hello")</code></p>
    
    <pre><code>function greet(name) {
    return "Hello " + name;
}
console.log(greet("World"));</code></pre>
    
    <h2>نقل قول</h2>
    <blockquote>
        <p>بهترین زمان برای کاشت درخت بیست سال پیش بود. دومین بهترین زمان، اکنون است.</p>
        <cite>ضرب‌المثل چینی</cite>
    </blockquote>
    
    <h2>مخفف‌ها</h2>
    <p><abbr title="HyperText Markup Language">HTML</abbr> زبان نشانه‌گذاری است.</p>
</body>
</html>`,
            language: "html",
            tips: [
              "فقط یک h1 در هر صفحه داشته باشید",
              "سلسله‌مراتب عناوین را رعایت کنید",
              "از strong و em به جای b و i استفاده کنید"
            ]
          },
          {
            id: "l1-3",
            title: "لینک‌ها و ناوبری",
            subtitle: "ایجاد لینک‌های داخلی و خارجی",
            estimatedTime: 20,
            difficulty: "مبتدی",
            content: `## لینک‌ها در HTML

لینک‌ها (Hyperlinks) اساس وب هستند و امکان ناوبری بین صفحات و منابع را فراهم می‌کنند.

### تگ anchor

تگ \`<a>\` برای ایجاد لینک استفاده می‌شود.

### انواع لینک

**1. لینک مطلق (Absolute):**
\`\`\`html
<a href="https://example.com">لینک خارجی</a>
\`\`\`

**2. لینک نسبی (Relative):**
\`\`\`html
<a href="/about.html">درباره ما</a>
<a href="../images/photo.jpg">تصویر</a>
\`\`\`

**3. لینک داخلی (Anchor Link):**
\`\`\`html
<a href="#section1">برو به بخش ۱</a>
<h2 id="section1">بخش ۱</h2>
\`\`\`

**4. لینک ایمیل:**
\`\`\`html
<a href="mailto:info@example.com">ارسال ایمیل</a>
\`\`\`

**5. لینک تلفن:**
\`\`\`html
<a href="tel:+989121234567">تماس</a>
\`\`\`

### Attribute‌های مهم

- \`href\`: آدرس مقصد
- \`target\`: نحوه باز شدن لینک
  - \`_self\`: در همان تب (پیش‌فرض)
  - \`_blank\`: در تب جدید
  - \`_parent\`: در frame والد
  - \`_top\`: در بالاترین frame
- \`rel\`: رابطه با سند مقصد
  - \`noopener\`: امنیت برای target="_blank"
  - \`noreferrer\`: عدم ارسال referrer
  - \`nofollow\`: عدم انتقال PageRank
- \`download\`: دانلود فایل به جای باز کردن
- \`title\`: tooltip هنگام hover

### Best Practices

1. همیشه \`rel="noopener noreferrer"\` را برای \`target="_blank"\` اضافه کنید
2. متن لینک باید معنادار باشد (نه "اینجا کلیک کنید")
3. از لینک‌های نسبی برای صفحات داخلی استفاده کنید
4. لینک‌های خارجی را در تب جدید باز کنید`,
            code: `<!DOCTYPE html>
<html lang="fa" dir="rtl">
<head>
    <meta charset="UTF-8">
    <title>لینک‌ها در HTML</title>
    <style>
        body {
            font-family: 'Vazirmatn', sans-serif;
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
            line-height: 1.8;
        }
        a {
            color: #4f46e5;
            text-decoration: none;
            border-bottom: 1px solid transparent;
            transition: border-color 0.2s;
        }
        a:hover {
            border-bottom-color: #4f46e5;
        }
        section {
            margin: 30px 0;
            padding: 20px;
            background: #f8fafc;
            border-radius: 8px;
        }
        .nav-menu {
            display: flex;
            gap: 20px;
            list-style: none;
            padding: 0;
            background: #1e293b;
            padding: 15px 20px;
            border-radius: 8px;
        }
        .nav-menu a {
            color: #e2e8f0;
        }
    </style>
</head>
<body>
    <h1>آموزش لینک‌ها در HTML</h1>
    
    <!-- منوی ناوبری -->
    <nav>
        <ul class="nav-menu">
            <li><a href="#external">لینک خارجی</a></li>
            <li><a href="#internal">لینک داخلی</a></li>
            <li><a href="#email">ایمیل</a></li>
            <li><a href="#download">دانلود</a></li>
        </ul>
    </nav>
    
    <section id="external">
        <h2>لینک‌های خارجی</h2>
        
        <p>لینک ساده به سایت دیگر:</p>
        <a href="https://developer.mozilla.org" 
           target="_blank" 
           rel="noopener noreferrer">
            MDN Web Docs (در تب جدید)
        </a>
        
        <p>لینک با عنوان:</p>
        <a href="https://google.com" 
           target="_blank" 
           rel="noopener noreferrer"
           title="جستجو در گوگل">
            گوگل
        </a>
    </section>
    
    <section id="internal">
        <h2>لینک‌های داخلی</h2>
        
        <p>لینک نسبی به صفحه دیگر:</p>
        <a href="/about.html">درباره ما</a>
        
        <p>لینک به بخش خاصی از صفحه:</p>
        <a href="#conclusion">برو به نتیجه‌گیری</a>
        
        <h3 id="conclusion">نتیجه‌گیری</h3>
        <p>لینک‌ها اساس وب هستند...</p>
    </section>
    
    <section id="email">
        <h2>لینک‌های ایمیل و تلفن</h2>
        
        <p>ارسال ایمیل:</p>
        <a href="mailto:info@example.com?subject=سلام&body=متن ایمیل">
            ارسال ایمیل به ما
        </a>
        
        <p>تماس تلفنی:</p>
        <a href="tel:+989121234567">
            تماس: ۰۹۱۲۱۲۳۴۵۶۷
        </a>
    </section>
    
    <section id="download">
        <h2>دانلود فایل</h2>
        
        <p>دانلود با نام دلخواه:</p>
        <a href="/files/document.pdf" download="report-2024.pdf">
            دانلود گزارش (PDF)
        </a>
        
        <p>دانلود تصویر:</p>
        <a href="/images/photo.jpg" download>
            دانلود تصویر
        </a>
    </section>
    
    <section>
        <h2>لینک‌های تصویری</h2>
        
        <a href="https://example.com">
            <img src="/images/banner.jpg" 
                 alt="بنر تبلیغاتی" 
                 width="300">
        </a>
    </section>
    
    <section>
        <h2>لینک‌های پیچیده</h2>
        
        <p>لینک با پارامترهای URL:</p>
        <a href="/search?q=html&lang=fa&page=1">
            جستجوی HTML
        </a>
        
        <p>لینک با Fragment:</p>
        <a href="/docs/api.html#authentication">
            مستندات API - بخش احراز هویت
        </a>
    </section>
</body>
</html>`,
            language: "html",
            tips: [
              "برای لینک‌های خارجی از target='_blank' و rel='noopener noreferrer' استفاده کنید",
              "متن لینک باید معنادار باشد",
              "از لینک‌های نسبی برای صفحات داخلی استفاده کنید"
            ]
          }
        ]
      },
      {
        id: "ch2-semantic",
        title: "فصل ۲: عناصر معنایی HTML5",
        description: "ساختاردهی هوشمند محتوا با عناصر معنایی",
        lessons: [
          {
            id: "l2-1",
            title: "عناصر معنایی ساختاری",
            subtitle: "header, nav, main, footer و سایر عناصر",
            estimatedTime: 30,
            difficulty: "مبتدی",
            content: `## عناصر معنایی ساختاری

عناصر معنایی تگ‌هایی هستند که معنای محتوای خود را به طور واضح بیان می‌کنند.

### چرا عناصر معنایی مهم هستند؟

**۱. دسترسی‌پذیری (Accessibility):**
صفحه‌خوان‌ها ساختار صفحه را بهتر درک می‌کنند.

**۲. سئو (SEO):**
موتورهای جستجو محتوا را بهتر می‌فهمند.

**۳. خوانایی کد:**
کد برای توسعه‌دهندگان دیگر قابل فهم‌تر است.

### عناصر اصلی

**header:**
سربرگ صفحه یا بخش. معمولاً شامل لوگو، عنوان و navigation.

**nav:**
بخش ناوبری. لینک‌های اصلی سایت.

**main:**
محتوای اصلی صفحه. فقط یکبار در هر صفحه.

**article:**
محتوای مستقل و کامل مثل یک پست بلاگ.

**section:**
بخش‌بندی موضوعی محتوا.

**aside:**
محتوای جانبی مثل sidebar.

**footer:**
پاورقی صفحه یا بخش.

### تفاوت‌های مهم

**article vs section:**
- article: محتوایی که به تنهایی معنادار است
- section: بخش‌بندی موضوعی با عنوان

**div vs section:**
- div: بدون معنای خاص
- section: بخش معنادار با موضوع مشخص`,
            code: `<!DOCTYPE html>
<html lang="fa" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>وبلاگ تکنولوژی</title>
    <style>
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body {
            font-family: 'Vazirmatn', sans-serif;
            line-height: 1.8;
            color: #334155;
        }
        header {
            background: #1e293b;
            color: white;
            padding: 20px;
        }
        header h1 { font-size: 24px; margin-bottom: 10px; }
        nav ul {
            list-style: none;
            display: flex;
            gap: 20px;
        }
        nav a {
            color: #cbd5e1;
            text-decoration: none;
        }
        nav a:hover { color: white; }
        
        .layout {
            display: grid;
            grid-template-columns: 1fr 300px;
            gap: 30px;
            max-width: 1200px;
            margin: 0 auto;
            padding: 30px 20px;
        }
        
        main article {
            background: white;
            padding: 30px;
            border-radius: 12px;
            box-shadow: 0 2px 8px rgba(0,0,0,0.1);
            margin-bottom: 30px;
        }
        main article h2 {
            color: #4f46e5;
            margin-bottom: 15px;
        }
        main article .meta {
            color: #64748b;
            font-size: 14px;
            margin-bottom: 20px;
        }
        
        aside {
            background: #f8fafc;
            padding: 20px;
            border-radius: 12px;
            height: fit-content;
        }
        aside h3 {
            color: #1e293b;
            margin-bottom: 15px;
        }
        aside ul {
            list-style: none;
        }
        aside li {
            padding: 8px 0;
            border-bottom: 1px solid #e2e8f0;
        }
        
        footer {
            background: #1e293b;
            color: #94a3b8;
            text-align: center;
            padding: 20px;
            margin-top: 40px;
        }
    </style>
</head>
<body>
    <header>
        <h1>وبلاگ تکنولوژی</h1>
        <nav aria-label="ناوبری اصلی">
            <ul>
                <li><a href="/">خانه</a></li>
                <li><a href="/articles">مقالات</a></li>
                <li><a href="/tutorials">آموزش‌ها</a></li>
                <li><a href="/about">درباره ما</a></li>
            </ul>
        </nav>
    </header>
    
    <div class="layout">
        <main>
            <article>
                <header>
                    <h2>معرفی React 19</h2>
                    <div class="meta">
                        <time datetime="2024-03-15">۲۵ اسفند ۱۴۰۲</time>
                        | نوشته <a href="/author/ali">علی محمدی</a>
                    </div>
                </header>
                
                <p>React 19 با قابلیت‌های جدیدی مانند Server Components و Actions منتشر شده است...</p>
                
                <section>
                    <h3>ویژگی‌های جدید</h3>
                    <ul>
                        <li>Server Components</li>
                        <li>Actions</li>
                        <li>بهبود عملکرد</li>
                    </ul>
                </section>
                
                <footer>
                    <p>برچسب‌ها: 
                        <a href="/tag/react">React</a>,
                        <a href="/tag/javascript">JavaScript</a>
                    </p>
                </footer>
            </article>
            
            <article>
                <header>
                    <h2>CSS Container Queries</h2>
                    <div class="meta">
                        <time datetime="2024-03-14">۲۴ اسفند ۱۴۰۲</time>
                    </div>
                </header>
                <p>Container Queries بازی را عوض کردند...</p>
            </article>
        </main>
        
        <aside>
            <section>
                <h3>دسته‌بندی‌ها</h3>
                <nav aria-label="دسته‌بندی مقالات">
                    <ul>
                        <li><a href="/cat/frontend">فرانت‌اند (۲۵)</a></li>
                        <li><a href="/cat/backend">بک‌اند (۱۸)</a></li>
                        <li><a href="/cat/devops">DevOps (۱۲)</a></li>
                    </ul>
                </nav>
            </section>
            
            <section>
                <h3>مقالات محبوب</h3>
                <ul>
                    <li><a href="/popular/1">آموزش Flexbox</a></li>
                    <li><a href="/popular/2">راهنمای Git</a></li>
                </ul>
            </section>
        </aside>
    </div>
    
    <footer>
        <nav aria-label="ناوبری فوتر">
            <ul style="display: flex; justify-content: center; gap: 20px; list-style: none; margin-bottom: 10px;">
                <li><a href="/privacy">حریم خصوصی</a></li>
                <li><a href="/terms">قوانین</a></li>
                <li><a href="/contact">تماس</a></li>
            </ul>
        </nav>
        <p>&copy; ۱۴۰۳ وبلاگ تکنولوژی</p>
    </footer>
</body>
</html>`,
            language: "html",
            tips: [
              "فقط یک <main> در هر صفحه داشته باشید",
              "هر <article> باید به تنهایی معنادار باشد",
              "از aria-label برای توضیح نقش عناصر استفاده کنید"
            ]
          }
        ]
      },
      {
        id: "ch3-forms",
        title: "فصل ۳: فرم‌ها و اعتبارسنجی",
        description: "ساخت فرم‌های حرفه‌ای و قابل دسترس",
        lessons: [
          {
            id: "l3-1",
            title: "مبانی فرم‌ها",
            subtitle: "عناصر input و انواع مختلف آن‌ها",
            estimatedTime: 35,
            difficulty: "متوسط",
            content: `## فرم‌ها در HTML

فرم‌ها اصلی‌ترین روش تعامل کاربر با وب‌سایت هستند.

### تگ form

\`<form>\` ظرف تمام عناصر فرم است.

**Attribute‌های مهم:**
- \`action\`: آدرس ارسال داده
- \`method\`: GET یا POST
- \`enctype\`: نوع encoding برای فایل
- \`novalidate\`: غیرفعال کردن validation مرورگر

### انواع input

HTML5 انواع مختلف input ارائه می‌دهد:

- \`text\`: متن ساده
- \`email\`: ایمیل (با validation)
- \`password\`: رمز عبور
- \`number\`: عدد
- \`tel\`: تلفن
- \`url\`: آدرس وب
- \`date\`: تاریخ
- \`time\`: زمان
- \`range\`: بازه عددی
- \`color\`: انتخاب رنگ
- \`file\`: آپلود فایل
- \`checkbox\`: انتخاب چندتایی
- \`radio\`: انتخاب یکی
- \`hidden\`: مخفی

### label

هر input باید label داشته باشد:

\`\`\`html
<label for="email">ایمیل:</label>
<input type="email" id="email" name="email">
\`\`\`

### fieldset و legend

برای گروه‌بندی عناصر مرتبط:

\`\`\`html
<fieldset>
    <legend>اطلاعات شخصی</legend>
    <label>نام: <input type="text"></label>
    <label>سن: <input type="number"></label>
</fieldset>
\`\`\``,
            code: `<!DOCTYPE html>
<html lang="fa" dir="rtl">
<head>
    <meta charset="UTF-8">
    <title>فرم ثبت‌نام</title>
    <style>
        * { box-sizing: border-box; }
        body {
            font-family: 'Vazirmatn', sans-serif;
            background: linear-gradient(135deg, #667eea, #764ba2);
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 20px;
        }
        .form-container {
            background: white;
            padding: 40px;
            border-radius: 16px;
            box-shadow: 0 20px 60px rgba(0,0,0,0.3);
            max-width: 500px;
            width: 100%;
        }
        h1 { color: #4f46e5; margin-bottom: 8px; }
        .subtitle { color: #64748b; margin-bottom: 30px; }
        .form-group { margin-bottom: 20px; }
        label {
            display: block;
            color: #334155;
            margin-bottom: 6px;
            font-weight: 500;
        }
        .required { color: #ef4444; }
        input, select, textarea {
            width: 100%;
            padding: 12px;
            border: 2px solid #e2e8f0;
            border-radius: 8px;
            font-size: 14px;
            transition: border-color 0.2s;
        }
        input:focus, select:focus, textarea:focus {
            outline: none;
            border-color: #4f46e5;
        }
        fieldset {
            border: 2px solid #e2e8f0;
            border-radius: 8px;
            padding: 16px;
            margin-bottom: 20px;
        }
        legend {
            color: #334155;
            font-weight: 500;
            padding: 0 8px;
        }
        .radio-group {
            display: flex;
            gap: 20px;
            margin-top: 10px;
        }
        .radio-label {
            display: flex;
            align-items: center;
            gap: 6px;
            cursor: pointer;
        }
        button {
            width: 100%;
            padding: 14px;
            background: linear-gradient(135deg, #667eea, #764ba2);
            color: white;
            border: none;
            border-radius: 8px;
            font-size: 16px;
            font-weight: 600;
            cursor: pointer;
            transition: transform 0.2s;
        }
        button:hover {
            transform: translateY(-2px);
        }
    </style>
</head>
<body>
    <div class="form-container">
        <h1>ایجاد حساب کاربری</h1>
        <p class="subtitle">لطفاً اطلاعات خود را وارد کنید</p>
        
        <form action="/register" method="POST">
            <div class="form-group">
                <label for="name">
                    نام و نام خانوادگی <span class="required">*</span>
                </label>
                <input type="text" id="name" name="name" 
                       placeholder="مثال: علی محمدی" required>
            </div>
            
            <div class="form-group">
                <label for="email">
                    ایمیل <span class="required">*</span>
                </label>
                <input type="email" id="email" name="email" 
                       placeholder="example@mail.com" required>
            </div>
            
            <div class="form-group">
                <label for="password">
                    رمز عبور <span class="required">*</span>
                </label>
                <input type="password" id="password" name="password" 
                       placeholder="حداقل ۸ کاراکتر" required minlength="8">
            </div>
            
            <div class="form-group">
                <label for="phone">شماره تلفن</label>
                <input type="tel" id="phone" name="phone" 
                       placeholder="۰۹۱۲۳۴۵۶۷۸۹" pattern="09[0-9]{9}">
            </div>
            
            <fieldset>
                <legend>جنسیت</legend>
                <div class="radio-group">
                    <label class="radio-label">
                        <input type="radio" name="gender" value="male">
                        مرد
                    </label>
                    <label class="radio-label">
                        <input type="radio" name="gender" value="female">
                        زن
                    </label>
                </div>
            </fieldset>
            
            <div class="form-group">
                <label for="bio">بیوگرافی</label>
                <textarea id="bio" name="bio" rows="4" 
                          placeholder="درباره خودتان بنویسید..."></textarea>
            </div>
            
            <button type="submit">ایجاد حساب</button>
        </form>
    </div>
</body>
</html>`,
            language: "html",
            tips: [
              "همیشه label را با for/id به input متصل کنید",
              "از autocomplete برای تجربه کاربری بهتر استفاده کنید",
              "اعتبارسنجی سمت سرور ضروری است"
            ]
          }
        ]
      },
      {
        id: "ch4-css-basics",
        title: "فصل ۴: مبانی CSS",
        description: "انتخابگرها، خاصیت‌ها و مدل جعبه‌ای",
        lessons: [
          {
            id: "l4-1",
            title: "مقدمه‌ای بر CSS",
            subtitle: "CSS چیست و چگونه کار می‌کند؟",
            estimatedTime: 25,
            difficulty: "مبتدی",
            content: `## CSS چیست؟

CSS (Cascading Style Sheets) زبان استایل‌دهی برای اسناد HTML است. CSS ظاهر و چیدمان صفحات وب را کنترل می‌کند.

## روش‌های اعمال CSS

**۱. Inline Style:**
\`\`\`html
<p style="color: blue;">متن آبی</p>
\`\`\`

**۲. Internal Style:**
\`\`\`html
<style>
    p { color: blue; }
</style>
\`\`\`

**۳. External Style (توصیه شده):**
\`\`\`html
<link rel="stylesheet" href="styles.css">
\`\`\`

## انتخابگرها (Selectors)

**۱. انتخابگر نوع:**
\`\`\`css
p { color: blue; }
\`\`\`

**۲. انتخابگر کلاس:**
\`\`\`css
.highlight { background: yellow; }
\`\`\`

**۳. انتخابگر ID:**
\`\`\`css
#header { height: 60px; }
\`\`\`

**۴. انتخابگر Attribute:**
\`\`\`css
input[type="email"] { border: 1px solid blue; }
\`\`\`

## Specificity (اولویت)

وقتی چند قانون به یک عنصر اعمال شوند:
1. Inline style: 1000
2. ID: 100
3. Class/Attribute: 10
4. Type: 1

## مدل جعبه‌ای (Box Model)

هر عنصر HTML یک جعبه است شامل:
- Content: محتوای عنصر
- Padding: فاصله داخلی
- Border: حاشیه
- Margin: فاصله خارجی

\`\`\`css
.box {
    width: 200px;
    padding: 20px;
    border: 2px solid black;
    margin: 10px;
}
\`\`\`

با \`box-sizing: border-box\`، padding و border در width محاسبه می‌شوند.`,
            code: `/* ===== روش‌های اعمال CSS ===== */

/* External CSS (styles.css) */

/* انتخابگرهای پایه */
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    font-family: 'Vazirmatn', sans-serif;
    line-height: 1.6;
    color: #333;
}

/* انتخابگر کلاس */
.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

/* انتخابگر ID */
#main-header {
    background: #1e293b;
    color: white;
    padding: 20px;
}

/* انتخابگر ترکیبی */
.card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0,0,0,0.2);
}

/* انتخابگر فرزند */
.nav > li {
    display: inline-block;
}

/* انتخابگر Descendant */
.article p {
    margin-bottom: 16px;
}

/* ===== Box Model ===== */

/* مدل جعبه‌ای پیش‌فرض (content-box) */
.box-content {
    width: 200px;
    padding: 20px;
    border: 5px solid blue;
    /* عرض کل: 200 + 40 + 10 = 250px */
}

/* مدل جعبه‌ای border-box */
.box-border {
    width: 200px;
    padding: 20px;
    border: 5px solid blue;
    box-sizing: border-box;
    /* عرض کل: 200px (padding و border شامل می‌شوند) */
}

/* ===== Specificity Examples ===== */

/* Specificity: 0,0,0,1 */
p { color: black; }

/* Specificity: 0,0,1,0 - برنده */
.text { color: blue; }

/* Specificity: 0,1,0,0 - برنده نهایی */
#content { color: red; }

/* ===== Units ===== */

.lengths {
    /* Absolute */
    width: 200px;
    
    /* Relative to parent */
    width: 50%;
    
    /* Relative to font-size */
    font-size: 1.5em;
    margin: 2rem;
    
    /* Relative to viewport */
    width: 100vw;
    height: 100vh;
    
    /* Relative to root font-size */
    font-size: 16px; /* 1rem = 16px */
    padding: 1.5rem; /* 24px */
}`,
            language: "css",
            tips: [
              "همیشه از box-sizing: border-box استفاده کنید",
              "External CSS بهترین روش است",
              "از ID selector کمتر استفاده کنید"
            ]
          }
        ]
      },
      {
        id: "ch5-layout",
        title: "فصل ۵: سیستم‌های چیدمان",
        description: "Flexbox و Grid برای طراحی حرفه‌ای",
        lessons: [
          {
            id: "l5-1",
            title: "Flexbox - چیدمان انعطاف‌پذیر",
            subtitle: "تسلط کامل بر Flexbox",
            estimatedTime: 40,
            difficulty: "متوسط",
            content: `## Flexbox چیست؟

Flexbox یک مدل چیدمان یک‌بعدی برای طراحی رابط‌های کاربری انعطاف‌پذیر است.

## مفاهیم اصلی

**Flex Container:** عنصر والد با \`display: flex\`

**Flex Items:** فرزندان مستقیم container

**محورها:**
- Main Axis: محور اصلی (پیش‌فرض: افقی)
- Cross Axis: محور عرضی (عمود بر main)

## خواص Container

### flex-direction
جهت main axis:
- \`row\`: چپ به راست (پیش‌فرض)
- \`row-reverse\`: راست به چپ
- \`column\`: بالا به پایین
- \`column-reverse\`: پایین به بالا

### justify-content
تراز در main axis:
- \`flex-start\`: ابتدا
- \`flex-end\`: انتها
- \`center\`: وسط
- \`space-between\`: فاصله مساوی بین
- \`space-around\`: فاصله مساوی دور
- \`space-evenly\`: فاصله کاملاً مساوی

### align-items
تراز در cross axis:
- \`stretch\`: کشیدن (پیش‌فرض)
- \`flex-start\`: بالا
- \`flex-end\`: پایین
- \`center\`: وسط
- \`baseline\`: تراز baseline

### flex-wrap
شکستن خطوط:
- \`nowrap\`: یک خط (پیش‌فرض)
- \`wrap\`: شکستن
- \`wrap-reverse\`: شکستن برعکس

### gap
فاصله بین آیتم‌ها

## خواص Items

### flex
\`flex: grow shrink basis\`

### align-self
تراز شخصی

### order
ترتیب نمایش`,
            code: `/* ===== Flexbox Basics ===== */

.flex-container {
    display: flex;
    flex-direction: row; /* یا column */
    flex-wrap: wrap;
    gap: 20px;
}

/* ===== Navbar ===== */

.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 24px;
    background: #1e293b;
}

.navbar-logo {
    font-size: 20px;
    font-weight: 700;
    color: white;
}

.navbar-menu {
    display: flex;
    gap: 8px;
    list-style: none;
}

.navbar-menu a {
    padding: 8px 16px;
    border-radius: 8px;
    color: #94a3b8;
    text-decoration: none;
    transition: all 0.2s;
}

.navbar-menu a:hover {
    color: white;
    background: rgba(255,255,255,0.1);
}

/* ===== Centering ===== */

/* Perfect Center */
.center-perfect {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
}

/* ===== Card Grid ===== */

.card-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 24px;
}

.card-grid .card {
    flex: 1 1 300px; /* grow shrink basis */
    max-width: 100%;
}

/* ===== Holy Grail Layout ===== */

.page {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}

.page-header {
    flex: 0 0 auto;
}

.page-body {
    display: flex;
    flex: 1;
}

.page-sidebar {
    flex: 0 0 250px;
}

.page-main {
    flex: 1;
    min-width: 0;
}

.page-footer {
    flex: 0 0 auto;
}

/* ===== Responsive without Media Query ===== */

.auto-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
}

.auto-grid > * {
    flex: 1 1 280px;
}

/* ===== Vertical Stack ===== */

.stack {
    display: flex;
    flex-direction: column;
    gap: 16px;
}

/* ===== Sticky Footer ===== */

body {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}

main {
    flex: 1;
}`,
            language: "css",
            tips: [
              "flex: 1 1 0% بهتر از flex: 1 است",
              "gap در Flexbox پشتیبانی می‌شود",
              "min-width: 0 برای جلوگیری از overflow"
            ]
          }
        ]
      },
      {
        id: "ch6-responsive",
        title: "فصل ۶: طراحی ریسپانسیو",
        description: "ساخت صفحات واکنش‌گرا برای همه دستگاه‌ها",
        lessons: [
          {
            id: "l6-1",
            title: "Media Queries و Breakpoints",
            subtitle: "سازگاری با اندازه‌های مختلف صفحه",
            estimatedTime: 30,
            difficulty: "متوسط",
            content: `## طراحی ریسپانسیو

طراحی ریسپانسیو یعنی ساخت صفحاتی که در اندازه‌های مختلف صفحه نمایش به خوبی کار کنند.

## رویکردها

**Mobile First:**
اول برای موبایل طراحی کنید، سپس با media query برای صفحات بزرگتر.

**Desktop First:**
اول برای دسکتاپ طراحی کنید، سپس برای موبایل调整.

توصیه: Mobile First

## Media Queries

\`\`\`css
/* Mobile First */
.container {
    width: 100%;
    padding: 16px;
}

/* Tablet (768px و بالاتر) */
@media (min-width: 768px) {
    .container {
        max-width: 720px;
        margin: 0 auto;
    }
}

/* Desktop (1024px و بالاتر) */
@media (min-width: 1024px) {
    .container {
        max-width: 960px;
    }
}

/* Large Desktop (1280px و بالاتر) */
@media (min-width: 1280px) {
    .container {
        max-width: 1200px;
    }
}
\`\`\`

## Breakpoints معمول

- 640px: موبایل بزرگ
- 768px: تبلت
- 1024px: لپ‌تاپ
- 1280px: دسکتاپ
- 1536px: دسکتاپ بزرگ

## Units ریسپانسیو

- \`%\`: درصدی از والد
- \`vw/vh\`: درصدی از viewport
- \`rem/em\`: نسبی به font-size
- \`clamp()\`: حداقل، ترجیحی، حداکثر

\`\`\`css
.font-size {
    font-size: clamp(16px, 4vw, 24px);
}
\`\`\``,
            code: `/* ===== Mobile First Approach ===== */

/* Base Styles (Mobile) */
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    font-family: 'Vazirmatn', sans-serif;
    line-height: 1.6;
}

.container {
    width: 100%;
    padding: 0 16px;
    margin: 0 auto;
}

/* Grid System */
.grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 16px;
}

/* Navbar */
.navbar {
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 16px;
}

.navbar-menu {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

/* ===== Tablet (768px+) ===== */

@media (min-width: 768px) {
    .container {
        max-width: 720px;
        padding: 0 24px;
    }
    
    .grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 24px;
    }
    
    .navbar {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
    
    .navbar-menu {
        flex-direction: row;
    }
}

/* ===== Desktop (1024px+) ===== */

@media (min-width: 1024px) {
    .container {
        max-width: 960px;
    }
    
    .grid {
        grid-template-columns: repeat(3, 1fr);
    }
}

/* ===== Large Desktop (1280px+) ===== */

@media (min-width: 1280px) {
    .container {
        max-width: 1200px;
    }
    
    .grid {
        grid-template-columns: repeat(4, 1fr);
    }
}

/* ===== Responsive Typography ===== */

h1 {
    font-size: clamp(24px, 5vw, 48px);
}

h2 {
    font-size: clamp(20px, 4vw, 36px);
}

p {
    font-size: clamp(14px, 2vw, 16px);
}

/* ===== Responsive Images ===== */

img {
    max-width: 100%;
    height: auto;
    display: block;
}

/* ===== Hide/Show Elements ===== */

.mobile-only {
    display: block;
}

.desktop-only {
    display: none;
}

@media (min-width: 768px) {
    .mobile-only {
        display: none;
    }
    
    .desktop-only {
        display: block;
    }
}`,
            language: "css",
            tips: [
              "Mobile First را رعایت کنید",
              "از clamp() برای typography ریسپانسیو استفاده کنید",
              "تصاویر را با max-width: 100% ریسپانسیو کنید"
            ]
          }
        ]
      }
    ]
  },
  {
    id: "javascript",
    title: "جاوااسکریپت کامل",
    subtitle: "از مبتدی تا پیشرفته",
    description: "تسلط کامل بر JavaScript مدرن شامل ES6+، برنامه‌نویسی ناهمگام، DOM و الگوهای طراحی",
    color: "from-yellow-500 to-amber-500",
    totalHours: 60,
    prerequisites: ["HTML و CSS"],
    outcomes: [
      "تسلط بر ES6+ features",
      "درک عمیق async programming",
      "کار حرفه‌ای با DOM",
      "آشنایی با الگوهای طراحی",
      "نوشتن کد تمیز و maintainable"
    ],
    chapters: [
      {
        id: "js-ch1",
        title: "فصل ۱: مبانی JavaScript",
        description: "متغیرها، انواع داده و عملگرها",
        lessons: [
          {
            id: "js-l1-1",
            title: "متغیرها و انواع داده",
            subtitle: "let، const و انواع داده در JavaScript",
            estimatedTime: 30,
            difficulty: "مبتدی",
            content: `## متغیرها در JavaScript

JavaScript سه کلمه کلیدی برای تعریف متغیر دارد:

### var (منسوخ شده)
- function-scoped
- hoisted
- قابل redeclare

### let (مدرن)
- block-scoped
- قابل reassign
- نه redeclare

### const (مدرن)
- block-scoped
- غیرقابل reassign
- باید مقداردهی شود

## انواع داده

### Primitive Types:
- String
- Number
- Boolean
- undefined
- null
- Symbol
- BigInt

### Reference Types:
- Object
- Array
- Function`,
            code: `// ===== let vs const =====

let count = 0;
count = 1; // OK

const PI = 3.14;
// PI = 3; // Error!

// ===== انواع داده =====

// String
const name = "Ali";
const greeting = \`Hello \${name}\`;

// Number
const age = 25;
const price = 99.99;

// Boolean
const isActive = true;

// undefined
let x; // undefined

// null
const empty = null;

// Array
const fruits = ["apple", "banana"];

// Object
const user = {
    name: "Ali",
    age: 25
};

// ===== Type Checking =====

typeof "hello"    // "string"
typeof 42         // "number"
typeof true       // "boolean"
typeof undefined  // "undefined"
typeof null       // "object" (bug!)
typeof {}         // "object"
typeof []         // "object"
typeof function(){} // "function"

// Array check
Array.isArray([1, 2, 3]); // true`,
            language: "javascript",
            tips: [
              "همیشه const را پیش‌فرض استفاده کنید",
              "از === به جای == استفاده کنید",
              "typeof null برابر object است (bug تاریخی)"
            ]
          },
          {
            id: "js-l1-2",
            title: "عملگرها و عبارات شرطی",
            subtitle: "if, switch, ternary و عملگرهای منطقی",
            estimatedTime: 25,
            difficulty: "مبتدی",
            content: `## عملگرها در JavaScript

### عملگرهای مقایسه‌ای:
- \`==\` : برابری (با type coercion)
- \`===\` : برابری سخت‌گیرانه
- \`!=\` : نابرابری
- \`!==\` : نابرابری سخت‌گیرانه
- \`>\`, \`<\`, \`>=\`, \`<=\`

### عملگرهای منطقی:
- \`&&\` : AND
- \`||\` : OR
- \`!\` : NOT
- \`??\` : Nullish Coalescing

### عملگرهای شرطی (Ternary):
\`\`\`js
const result = condition ? valueIfTrue : valueIfFalse;
\`\`\`

## عبارات شرطی

### if/else:
\`\`\`js
if (condition) {
    // code
} else if (otherCondition) {
    // code
} else {
    // code
}
\`\`\`

### switch:
\`\`\`js
switch (expression) {
    case value1:
        // code
        break;
    case value2:
        // code
        break;
    default:
        // code
}
\`\`\``,
            code: `// ===== عملگرهای مقایسه =====

console.log(5 == "5");    // true (coercion)
console.log(5 === "5");   // false (strict)
console.log(5 != "5");    // false
console.log(5 !== "5");   // true

// ===== عملگرهای منطقی =====

const a = true;
const b = false;

console.log(a && b);  // false
console.log(a || b);  // true
console.log(!a);      // false

// Short-circuit evaluation
const user = null;
const name = user && user.name;  // null
const displayName = user || "Guest";  // "Guest"

// Nullish Coalescing (??)
const value1 = 0 ?? "default";     // 0 (not "default")
const value2 = null ?? "default";  // "default"
const value3 = "" ?? "default";    // "" (not "default")

// ===== Ternary Operator =====

const age = 20;
const status = age >= 18 ? "adult" : "minor";
console.log(status);  // "adult"

// Nested ternary (not recommended)
const score = 85;
const grade = score >= 90 ? "A" : score >= 80 ? "B" : "C";
console.log(grade);  // "B"

// ===== if/else =====

const temperature = 25;

if (temperature > 30) {
    console.log("Hot!");
} else if (temperature > 20) {
    console.log("Warm");
} else if (temperature > 10) {
    console.log("Cool");
} else {
    console.log("Cold!");
}

// ===== switch =====

const day = "Monday";

switch (day) {
    case "Saturday":
    case "Friday":
        console.log("Weekend!");
        break;
    case "Monday":
    case "Tuesday":
    case "Wednesday":
    case "Thursday":
        console.log("Weekday");
        break;
    default:
        console.log("Invalid day");
}

// ===== Truthy and Falsy =====

// Falsy values:
// false, 0, "", null, undefined, NaN

if (0) {
    console.log("This won't run");
}

if ("hello") {
    console.log("This will run");
}

// Practical example
const username = "";
if (username) {
    console.log(\`Hello, \${username}\`);
} else {
    console.log("Please enter your name");
}`,
            language: "javascript",
            tips: [
              "همیشه از === استفاده کنید",
              "?? فقط null و undefined را handle می‌کند",
              "از ternary تو در تو پرهیز کنید"
            ]
          }
        ]
      },
      {
        id: "js-ch2",
        title: "فصل ۲: توابع و Scope",
        description: "انواع توابع، closures و scope",
        lessons: [
          {
            id: "js-l2-1",
            title: "توابع در JavaScript",
            subtitle: "Function Declaration، Expression و Arrow Functions",
            estimatedTime: 35,
            difficulty: "متوسط",
            content: `## انواع توابع

### Function Declaration:
\`\`\`js
function greet(name) {
    return \`Hello \${name}\`;
}
\`\`\`
- Hoisted (قبل از تعریف قابل استفاده)

### Function Expression:
\`\`\`js
const greet = function(name) {
    return \`Hello \${name}\`;
};
\`\`\`
- Not hoisted

### Arrow Function:
\`\`\`js
const greet = (name) => \`Hello \${name}\`;
\`\`\`
- Shorter syntax
- Lexical this

## Parameters

### Default Parameters:
\`\`\`js
function greet(name = "Guest") {
    return \`Hello \${name}\`;
}
\`\`\`

### Rest Parameters:
\`\`\`js
function sum(...numbers) {
    return numbers.reduce((a, b) => a + b, 0);
}
\`\`\`

## Scope

### Global Scope:
متغیرهای خارج از هر تابع

### Function Scope:
متغیرهای var در تابع

### Block Scope:
متغیرهای let/const در {}

## Closures

Closure وقتی یک تابع به متغیرهای scope بیرونی دسترسی دارد حتی بعد از اتمام آن scope.`,
            code: `// ===== Function Declaration =====
function add(a, b) {
    return a + b;
}
console.log(add(5, 3));  // 8

// ===== Function Expression =====
const multiply = function(a, b) {
    return a * b;
};

// ===== Arrow Functions =====
// Full syntax
const divide = (a, b) => {
    return a / b;
};

// Concise body
const subtract = (a, b) => a - b;

// Single parameter
const double = x => x * 2;

// No parameters
const getRandom = () => Math.random();

// Returning object
const createUser = (name, age) => ({ name, age });

// ===== Default Parameters =====
function greet(name = "Guest", greeting = "Hello") {
    return \`\${greeting}, \${name}!\`;
}

console.log(greet());              // "Hello, Guest!"
console.log(greet("Ali"));         // "Hello, Ali!"
console.log(greet("Sara", "Hi"));  // "Hi, Sara!"

// ===== Rest Parameters =====
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3, 4, 5));  // 15

function logFirst(first, ...rest) {
    console.log("First:", first);
    console.log("Rest:", rest);
}

logFirst(1, 2, 3, 4);  // First: 1, Rest: [2, 3, 4]

// ===== Closures =====
function createCounter() {
    let count = 0;
    
    return {
        increment: () => ++count,
        decrement: () => --count,
        getCount: () => count
    };
}

const counter = createCounter();
counter.increment();  // 1
counter.increment();  // 2
counter.decrement();  // 1
counter.getCount();   // 1

// Practical closure: private variables
function createBankAccount(initialBalance) {
    let balance = initialBalance;
    
    return {
        deposit(amount) {
            balance += amount;
            return balance;
        },
        withdraw(amount) {
            if (amount > balance) throw new Error("Insufficient funds");
            balance -= amount;
            return balance;
        },
        getBalance: () => balance
    };
}

const account = createBankAccount(1000);
account.deposit(500);    // 1500
account.withdraw(200);   // 1300
account.getBalance();    // 1300

// ===== Higher-Order Functions =====
function createMultiplier(factor) {
    return (number) => number * factor;
}

const triple = createMultiplier(3);
const quadruple = createMultiplier(4);

console.log(triple(5));     // 15
console.log(quadruple(5));  // 20

// ===== IIFE =====
const result = (function() {
    const secret = "hidden";
    return { getSecret: () => secret };
})();

console.log(result.getSecret());  // "hidden"`,
            language: "javascript",
            tips: [
              "Arrow functions برای callback‌ها عالی هستند",
              "از closure برای encapsulation استفاده کنید",
              "Default parameters از || بهترند"
            ]
          }
        ]
      }
    ]
  },
  {
    id: "react",
    title: "React.js حرفه‌ای",
    subtitle: "ساخت وب اپلیکیشن‌های مدرن",
    description: "آموزش جامع React شامل Components، Hooks، State Management و Routing",
    color: "from-cyan-500 to-blue-600",
    totalHours: 45,
    prerequisites: ["JavaScript ES6+"],
    outcomes: [
      "ساخت کامپوننت‌های React",
      "تسلط بر Hooks",
      "State Management",
      "React Router",
      "اتصال به API"
    ],
    chapters: [
      {
        id: "react-ch1",
        title: "فصل ۱: مقدمه‌ای بر React",
        description: "React چیست و چرا مهم است؟",
        lessons: [
          {
            id: "react-l1-1",
            title: "React چیست؟",
            subtitle: "آشنایی با مفاهیم پایه React",
            estimatedTime: 25,
            difficulty: "متوسط",
            content: `## React چیست؟

React یک کتابخانه JavaScript برای ساخت UI است که توسط Meta توسعه داده شده.

### مفاهیم کلیدی:

**۱. Component-Based:**
UI به کامپوننت‌های مستقل تقسیم می‌شود.

**۲. Virtual DOM:**
React یک کپی مجازی از DOM می‌سازد.

**۳. Unidirectional Data Flow:**
داده‌ها فقط از parent به child جریان دارند.

**۴. Declarative:**
شما توصیف می‌کنید UI چه شکلی باشد.

## JSX

JSX اجازه می‌دهد HTML-like code در JavaScript بنویسید.

### قوانین JSX:
- یک عنصر ریشه
- تگ‌های بسته
- className به جای class
- {} برای expressions`,
            code: `// ===== اولین کامپوننت =====
import React from 'react';

function Welcome({ name }) {
    return <h1>Hello, {name}!</h1>;
}

// ===== JSX Rules =====
function Example() {
    const name = "Ali";
    const isLoggedIn = true;
    const items = ['HTML', 'CSS', 'JS'];
    
    return (
        <div className="container">
            {/* Fragment */}
            <>
                <h1>Title</h1>
                <p>Subtitle</p>
            </>
            
            {/* Expressions */}
            <p>Hello, {name.toUpperCase()}!</p>
            <p>2 + 2 = {2 + 2}</p>
            
            {/* Conditional */}
            {isLoggedIn ? (
                <p>Welcome back!</p>
            ) : (
                <p>Please login</p>
            )}
            
            {/* Short-circuit */}
            {isLoggedIn && <p>You are logged in</p>}
            
            {/* List */}
            <ul>
                {items.map((item, i) => (
                    <li key={i}>{item}</li>
                ))}
            </ul>
            
            {/* Inline styles */}
            <div style={{ color: 'blue', fontSize: '18px' }}>
                Styled text
            </div>
        </div>
    );
}

// ===== Props =====
function Button({ children, variant = 'primary', onClick }) {
    const styles = {
        primary: 'bg-blue-500 text-white',
        secondary: 'bg-gray-200 text-gray-800',
    };
    
    return (
        <button 
            className={styles[variant]}
            onClick={onClick}
        >
            {children}
        </button>
    );
}

// استفاده
<Button variant="primary" onClick={() => alert('Clicked!')}>
    Click me
</Button>`,
            language: "jsx",
            tips: [
              "همیشه Function Components استفاده کنید",
              "Props را destructure کنید",
              "key در list‌ها باید unique باشد"
            ]
          }
        ]
      }
    ]
  },
  {
    id: "nodejs",
    title: "Node.js و Backend",
    subtitle: "ساخت سرور و API حرفه‌ای",
    description: "آموزش Node.js، Express، MongoDB و ساخت REST API",
    color: "from-green-500 to-emerald-600",
    totalHours: 40,
    prerequisites: ["JavaScript ES6+"],
    outcomes: [
      "ساخت REST API",
      "کار با Express",
      "MongoDB و Mongoose",
      "Authentication",
      "استقرار روی سرور"
    ],
    chapters: [
      {
        id: "node-ch1",
        title: "فصل ۱: مقدمه‌ای بر Node.js",
        description: "Node.js چیست و چگونه کار می‌کند؟",
        lessons: [
          {
            id: "node-l1-1",
            title: "Node.js چیست؟",
            subtitle: "آشنایی با Node.js و معماری آن",
            estimatedTime: 30,
            difficulty: "متوسط",
            content: `## Node.js چیست؟

Node.js یک runtime برای اجرای JavaScript خارج از مرورگر است.

### ویژگی‌ها:
- مبتنی بر V8 Engine
- Event-driven
- Non-blocking I/O
- Single-threaded

### معماری:
1. V8 Engine
2. libuv (Event Loop)
3. Node Bindings
4. Node API

### Module System:

**CommonJS:**
\`\`\`js
module.exports = { func };
const { func } = require('./module');
\`\`\`

**ES Modules:**
\`\`\`js
export const func = () => {};
import { func } from './module.js';
\`\`\``,
            code: `// ===== اولین سرور Node.js =====
const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World!');
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(\`Server running on port \${PORT}\`);
});

// ===== ES Modules =====
// file: utils.js
export const formatDate = (date) => {
    return new Intl.DateTimeFormat('fa-IR').format(date);
};

export const slugify = (text) => {
    return text.toLowerCase().replace(/\\s+/g, '-');
};

// file: main.js
import { formatDate, slugify } from './utils.js';

console.log(formatDate(new Date()));
console.log(slugify("Hello World"));

// ===== File System =====
import { readFile, writeFile } from 'fs/promises';

// خواندن فایل
async function readConfig() {
    try {
        const data = await readFile('./config.json', 'utf-8');
        return JSON.parse(data);
    } catch (error) {
        console.error('Error:', error.message);
        return {};
    }
}

// نوشتن فایل
async function saveData(filename, data) {
    await writeFile(filename, JSON.stringify(data, null, 2));
}

// ===== Environment Variables =====
import dotenv from 'dotenv';
dotenv.config();

const config = {
    port: process.env.PORT || 3000,
    dbUri: process.env.MONGODB_URI,
    jwtSecret: process.env.JWT_SECRET,
};`,
            language: "javascript",
            tips: [
              "از ES Modules استفاده کنید",
              "Environment variables را در .env نگه دارید",
              "Error handling بسیار مهم است"
            ]
          }
        ]
      }
    ]
  },
  {
    id: "mongodb",
    title: "MongoDB و Mongoose",
    subtitle: "طراحی و مدیریت دیتابیس",
    description: "آموزش MongoDB، Mongoose، Schema Design و بهینه‌سازی",
    color: "from-emerald-500 to-teal-600",
    totalHours: 25,
    prerequisites: ["Node.js و Express"],
    outcomes: [
      "طراحی Schema",
      "کوئری‌های پیچیده",
      "Aggregation Pipeline",
      "بهینه‌سازی Performance",
      "مدیریت Index‌ها"
    ],
    chapters: [
      {
        id: "mongo-ch1",
        title: "فصل ۱: مقدمه‌ای بر MongoDB",
        description: "MongoDB چیست و چگونه کار می‌کند؟",
        lessons: [
          {
            id: "mongo-l1-1",
            title: "MongoDB و Mongoose",
            subtitle: "کار با دیتابیس NoSQL",
            estimatedTime: 35,
            difficulty: "متوسط",
            content: `## MongoDB چیست؟

MongoDB یک دیتابیس NoSQL مبتنی بر سند است.

### مفاهیم:
- **Database**: ظرف اصلی
- **Collection**: گروهی از Documents
- **Document**: یک رکورد JSON-like
- **Field**: یک خاصیت در Document

## Mongoose

Mongoose یک ODM برای MongoDB است:
- Schema-based modeling
- Validation
- Middleware
- Query building

## Schema Types:
- String, Number, Date
- Boolean, Buffer
- ObjectId, Array
- Mixed, Map

## Validation:
- required, min/max
- minlength/maxlength
- enum, match`,
            code: `// ===== اتصال به MongoDB =====
import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI);
        console.log(\`MongoDB Connected: \${conn.connection.host}\`);
    } catch (error) {
        console.error('Error:', error.message);
        process.exit(1);
    }
};

// ===== User Model =====
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'نام الزامی است'],
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
        select: false,
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user',
    },
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

// ===== CRUD Operations =====

// CREATE
const user = await User.create({
    name: 'Ali',
    email: 'ali@example.com',
    password: 'password123',
});

// READ
const users = await User.find({ role: 'user' })
    .select('name email')
    .sort({ createdAt: -1 })
    .limit(10);

// UPDATE
const updated = await User.findByIdAndUpdate(
    id,
    { name: 'New Name' },
    { new: true }
);

// DELETE
await User.findByIdAndDelete(id);`,
            language: "javascript",
            tips: [
              "از lean() برای query‌های فقط خواندنی استفاده کنید",
              "Index‌ها برای فیلدهای پرکاربرد بسازید",
              "Validation سمت سرور ضروری است"
            ]
          }
        ]
      }
    ]
  },
  {
    id: "wordpress",
    title: "وردپرس حرفه‌ای",
    subtitle: "قالب‌نویسی و افزونه‌نویسی",
    description: "آموزش وردپرس، قالب‌نویسی، افزونه‌نویسی و WooCommerce",
    color: "from-indigo-500 to-purple-600",
    totalHours: 35,
    prerequisites: ["HTML, CSS و PHP پایه"],
    outcomes: [
      "نصب و پیکربندی وردپرس",
      "قالب‌نویسی از صفر",
      "افزونه‌نویسی",
      "WooCommerce",
      "بهینه‌سازی"
    ],
    chapters: [
      {
        id: "wp-ch1",
        title: "فصل ۱: مقدمه‌ای بر وردپرس",
        description: "وردپرس چیست و چگونه کار می‌کند؟",
        lessons: [
          {
            id: "wp-l1-1",
            title: "وردپرس چیست؟",
            subtitle: "آشنایی با وردپرس و معماری آن",
            estimatedTime: 25,
            difficulty: "مبتدی",
            content: `## وردپرس چیست؟

وردپرس یک CMS متن‌باز و رایگان است که با PHP و MySQL ساخته شده.

### انواع وردپرس:

**WordPress.org (Self-hosted):**
- نرم‌افزار رایگان
- نصب روی هاست شخصی
- کنترل کامل

**WordPress.com (Hosted):**
- سرویس میزبانی
- محدودیت‌هایی دارد

### ساختار فایل‌ها:
- wp-admin/: پنل مدیریت
- wp-includes/: فایل‌های هسته
- wp-content/: قالب‌ها، افزونه‌ها
- wp-config.php: تنظیمات

### Template Hierarchy:
وردپرس بر اساس نوع درخواست، template مناسب را انتخاب می‌کند.

### The Loop:
\`\`\`php
if (have_posts()) :
    while (have_posts()) : the_post();
        the_title();
        the_content();
    endwhile;
endif;
\`\`\``,
            code: `<?php
/**
 * Template Name: صفحه اصلی
 */

get_header(); ?>

<main class="site-main">
    <?php if (have_posts()) : ?>
        <?php while (have_posts()) : the_post(); ?>
            <article <?php post_class(); ?>>
                <header>
                    <h2>
                        <a href="<?php the_permalink(); ?>">
                            <?php the_title(); ?>
                        </a>
                    </h2>
                    <div class="meta">
                        <time><?php echo get_the_date(); ?></time>
                        <span><?php the_author(); ?></span>
                    </div>
                </header>
                
                <?php if (has_post_thumbnail()) : ?>
                    <div class="thumbnail">
                        <?php the_post_thumbnail('medium'); ?>
                    </div>
                <?php endif; ?>
                
                <div class="excerpt">
                    <?php the_excerpt(); ?>
                </div>
                
                <footer>
                    <a href="<?php the_permalink(); ?>">ادامه مطلب</a>
                </footer>
            </article>
        <?php endwhile; ?>
        
        <?php the_posts_pagination(); ?>
    <?php else : ?>
        <p>مطلبی یافت نشد.</p>
    <?php endif; ?>
</main>

<?php get_footer(); ?>`,
            language: "php",
            tips: [
              "از توابع WordPress استفاده کنید",
              "escaping را فراموش نکنید",
              "از Child Theme برای تغییرات استفاده کنید"
            ]
          }
        ]
      }
    ]
  },
  {
    id: "devops",
    title: "استقرار و DevOps",
    subtitle: "Deploy و مدیریت سرور",
    description: "آموزش Docker، CI/CD، مدیریت سرور و استقرار پروژه‌ها",
    color: "from-violet-500 to-purple-600",
    totalHours: 20,
    prerequisites: ["آشنایی با Linux"],
    outcomes: [
      "کار با Docker",
      "CI/CD Pipeline",
      "مدیریت سرور",
      "Nginx و SSL",
      "مانیتورینگ"
    ],
    chapters: [
      {
        id: "devops-ch1",
        title: "فصل ۱: Docker",
        description: "کانتینرسازی اپلیکیشن",
        lessons: [
          {
            id: "devops-l1-1",
            title: "Docker چیست؟",
            subtitle: "مفاهیم پایه Docker",
            estimatedTime: 30,
            difficulty: "پیشرفته",
            content: `## Docker چیست؟

Docker ابزاری برای ساخت و مدیریت container‌ها است.

### مزایا:
- Consistency
- Isolation
- Portability
- Scalability

### مفاهیم:
- **Image**: Template فقط‌خواندنی
- **Container**: Instance اجرایی
- **Dockerfile**: دستورات ساخت Image
- **Docker Compose**: اپلیکیشن‌های چند-container

### Dockerfile Instructions:
- FROM: Base image
- WORKDIR: Working directory
- COPY: کپی فایل‌ها
- RUN: اجرای دستور
- CMD: دستور پیش‌فرض
- EXPOSE: Port declaration`,
            code: `# ===== Dockerfile =====
FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY . .

EXPOSE 3000

CMD ["npm", "start"]

# ===== docker-compose.yml =====
# version: '3.8'
#
# services:
#   app:
#     build: .
#     ports:
#       - "3000:3000"
#     environment:
#       - NODE_ENV=production
#       - MONGODB_URI=mongodb://mongo:27017/myapp
#     depends_on:
#       - mongo
#
#   mongo:
#     image: mongo:7
#     volumes:
#       - mongo-/data/db
#     ports:
#       - "27017:27017"
#
# volumes:
#   mongo-`,
            language: "dockerfile",
            tips: [
              "از multi-stage builds استفاده کنید",
              "از alpine base images استفاده کنید",
              ".dockerignore برای exclude فایل‌ها"
            ]
          }
        ]
      }
    ]
  },
  {
    id: "career",
    title: "آمادگی بازار کار",
    subtitle: "ورود حرفه‌ای به صنعت وب",
    description: "راهنمای جامع ورود به بازار کار، پورتفولیو، مصاحبه و توسعه حرفه‌ای",
    color: "from-amber-500 to-orange-600",
    totalHours: 10,
    prerequisites: ["تسلط بر حداقل یک مسیر"],
    outcomes: [
      "ساخت پورتفولیو",
      "نوشتن رزومه",
      "آمادگی مصاحبه",
      "آشنایی با نرخ‌ها",
      "توسعه برند شخصی"
    ],
    chapters: [
      {
        id: "career-ch1",
        title: "فصل ۱: مسیرهای شغلی",
        description: "کدام مسیر برای شما مناسب‌تر است؟",
        lessons: [
          {
            id: "career-l1-1",
            title: "مسیرهای شغلی در وب",
            subtitle: "Frontend, Backend, Full Stack و...",
            estimatedTime: 30,
            difficulty: "مبتدی",
            content: `## مسیرهای شغلی

### ۱. Frontend Developer
**تمرکز:** UI/UX

**تکنولوژی‌ها:**
- HTML, CSS, JavaScript
- React/Vue/Angular
- TypeScript

### ۲. Backend Developer
**تمرکز:** سرور، API

**تکنولوژی‌ها:**
- Node.js/Express
- MongoDB/PostgreSQL
- REST/GraphQL

### ۳. Full Stack Developer
**تمرکز:** ترکیب Frontend و Backend

### ۴. WordPress Developer
**تمرکز:** قالب‌نویسی و افزونه‌نویسی

### ۵. DevOps Engineer
**تمرکز:** زیرساخت و اتوماسیون

## مهارت‌های نرم:
- حل مسئله
- یادگیری مداوم
- کار تیمی
- ارتباط مؤثر
- مدیریت زمان`,
            tips: [
              "پورتفولیو قوی‌تر از مدرک است",
              "پروژه‌های واقعی بسازید",
              "GitHub خود را فعال نگه دارید"
            ]
          }
        ]
      }
    ]
  }
];
