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
  interactiveType?: 'playground' | 'diagram' | 'quiz' | 'tabs' | 'comparison' | 'timeline' | 'calculator';
  interactiveData?: any;
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

// ============================================
// COURSE 1: HTML & CSS - 7 Chapters
// ============================================
const htmlCssCourse: Course = {
  id: "html-css",
  title: "HTML و CSS جامع",
  subtitle: "از صفر تا طراحی حرفه‌ای صفحات وب",
  description: "کتاب کامل HTML و CSS شامل ۷ فصل و بیش از ۲۵ درس. از مفاهیم پایه تا تکنیک‌های پیشرفته مانند Flexbox، Grid، انیمیشن‌ها و طراحی ریسپانسیو.",
  color: "from-orange-500 to-red-500",
  totalHours: 80,
  prerequisites: ["آشنایی اولیه با کامپیوتر"],
  outcomes: [
    "تسلط کامل بر HTML5 و عناصر معنایی",
    "طراحی صفحات ریسپانسیو با Flexbox و Grid",
    "ایجاد انیمیشن‌ها و transitions حرفه‌ای",
    "نوشتن کد تمیز و قابل نگهداری",
    "آشنایی با CSS Architecture و BEM",
    "بهینه‌سازی Performance صفحات",
    "ساخت فرم‌های حرفه‌ای با validation"
  ],
  chapters: [
    {
      id: "html-ch1",
      title: "فصل ۱: مقدمه‌ای بر وب و HTML",
      description: "آشنایی با اینترنت، مرورگرها و ساختار صفحات HTML",
      lessons: [
        {
          id: "html-l1-1",
          title: "اینترنت و Web چگونه کار می‌کنند؟",
          subtitle: "درک زیرساخت وب از DNS تا مرورگر",
          estimatedTime: 25,
          difficulty: "مبتدی",
          interactiveType: 'diagram',
          interactiveData: { diagramType: 'web-flow' },
          content: `## اینترنت و World Wide Web

بسیاری از افراد اینترنت و وب را یکسان می‌پندارند، اما این دو مفاهیم متفاوتی هستند.

### اینترنت (Internet)
شبکه‌ای جهانی از شبکه‌های کامپیوتری است که با پروتکل TCP/IP به هم متصل شده‌اند. اینترنت زیرساخت فیزیکی و منطقی است که امکان انتقال داده را فراهم می‌کند. اینترنت از میلیاردها دستگاه متصل تشکیل شده است.

### World Wide Web (WWW)
یکی از سرویس‌هایی است که روی اینترنت اجرا می‌شود. وب مجموعه‌ای از اسناد و منابع است که با URL شناسایی شده و از طریق HTTP قابل دسترسی هستند. وب فقط یکی از کاربردهای اینترنت است (مثل ایمیل، FTP و...).

### پروتکل HTTP/HTTPS

HTTP (HyperText Transfer Protocol) پروتکل اصلی انتقال داده در وب است. این پروتکل بر اساس مدل request/response کار می‌کند.

**ساختار درخواست HTTP:**
- **Method**: نوع عملیات (GET, POST, PUT, DELETE, PATCH)
- **URL**: آدرس منبع مورد نظر
- **Headers**: اطلاعات اضافی مثل Content-Type, Authorization
- **Body**: داده‌های ارسالی (در POST و PUT)

**ساختار پاسخ HTTP:**
- **Status Code**: کد وضعیت (200 موفق، 404 یافت نشد، 500 خطای سرور)
- **Headers**: اطلاعات پاسخ مثل Content-Type, Set-Cookie
- **Body**: محتوای پاسخ (HTML, JSON, تصویر و...)

**HTTPS** نسخه امن HTTP است که با SSL/TLS رمزنگاری می‌شود.

### DNS (Domain Name System)

DNS مانند دفترچه تلفن اینترنت عمل می‌کند و نام دامنه (مثل google.com) را به آدرس IP تبدیل می‌کند.

**مراحل بارگذاری یک صفحه وب:**
1. کاربر URL را در مرورگر وارد می‌کند
2. مرورگر DNS cache را بررسی می‌کند
3. در صورت نبود، DNS server پرس‌وجو می‌شود
4. IP سرور دریافت می‌شود
5. اتصال TCP با سرور برقرار می‌شود (Three-way handshake)
6. درخواست HTTP/HTTPS ارسال می‌شود
7. سرور درخواست را پردازش و پاسخ HTML ارسال می‌کند
8. مرورگر HTML را parse کرده و DOM Tree می‌سازد
9. CSS parse و Render Tree ساخته می‌شود
10. صفحه روی صفحه نمایش رسم (Paint) می‌شود

### مرورگرها و موتورهای رندر

مرورگر برنامه‌ای است که اسناد وب را نمایش می‌دهد. هر مرورگر از موتور رندر خاصی استفاده می‌کند:

- **Chrome**: Blink (V8 engine)
- **Firefox**: Gecko (SpiderMonkey engine)
- **Safari**: WebKit (JavaScriptCore)
- **Edge**: Blink (Chromium-based)

### ساختار یک سند HTML

HTML از عناصر (Elements) تشکیل شده. هر عنصر از تگ باز، محتوا و تگ بسته تشکیل می‌شود. برخی تگ‌ها خودبسته (self-closing) هستند مثل \`<img />\` و \`<br />\`.`,
          tips: [
            "همیشه DOCTYPE را در خط اول قرار دهید",
            "meta viewport برای ریسپانسیو ضروری است",
            "از lang و dir برای زبان و جهت متن استفاده کنید",
            "HTTPS امنیت بیشتری نسبت به HTTP دارد"
          ]
        },
        {
          id: "html-l1-2",
          title: "ساختار یک سند HTML",
          subtitle: "DOCTYPE، html، head و body",
          estimatedTime: 30,
          difficulty: "مبتدی",
          interactiveType: 'diagram',
          interactiveData: { diagramType: 'dom-tree' },
          content: `## ساختار پایه یک سند HTML

هر سند HTML از یک ساختار مشخص پیروی می‌کند. این ساختار شامل بخش‌های زیر است:

### DOCTYPE Declaration
\`<!DOCTYPE html>\` به مرورگر می‌گوید که این سند HTML5 است. این declaration باید در اولین خط فایل قرار گیرد.

### عنصر html
\`<html>\` عنصر ریشه است که تمام محتوای صفحه را در بر می‌گیرد. attribute‌های مهم:
- \`lang="fa"\` - زبان صفحه (برای SEO و Accessibility)
- \`dir="rtl"\` - جهت متن (برای فارسی و عربی)

### بخش head
\`<head>\` شامل اطلاعات متا، عنوان صفحه، لینک به فایل‌های CSS و اسکریپت‌ها است. این بخش برای کاربر قابل مشاهده نیست ولی برای مرورگر و موتورهای جستجو بسیار مهم است.

### عناصر مهم در head:

**Meta Tags:**
- \`<meta charset="UTF-8">\` - کدگذاری کاراکترها (همیشه UTF-8)
- \`<meta name="viewport">\` - تنظیمات responsive
- \`<meta name="description">\` - توضیحات صفحه (برای SEO)
- \`<meta name="keywords">\` - کلمات کلیدی
- \`<meta name="author">\` - نویسنده صفحه
- \`<meta property="og:*">\` - Open Graph (برای اشتراک‌گذاری در شبکه‌های اجتماعی)

**Title:**
\`<title>\` عنوان صفحه است که در تب مرورگر و نتایج جستجو نمایش داده می‌شود. برای SEO بسیار مهم است و باید منحصر به فرد و توصیفی باشد.

**Link:**
\`<link>\` برای لینک به فایل‌های خارجی استفاده می‌شود:
- CSS: \`<link rel="stylesheet" href="styles.css">\`
- Favicon: \`<link rel="icon" href="favicon.ico">\`
- Fonts: \`<link href="..." rel="stylesheet">\`

**Style:**
\`<style>\` برای استایل‌های داخلی استفاده می‌شود (توصیه نمی‌شود).

**Script:**
\`<script>\` برای اسکریپت‌های JavaScript استفاده می‌شود. می‌تواند در head یا body قرار گیرد.

### بخش body
\`<body>\` شامل محتوای قابل مشاهده صفحه است. تمام عناصری که کاربر می‌بیند در body قرار می‌گیرند.

### ترتیب بهینه اسکریپت‌ها:
1. CSS در head (برای جلوگیری از FOUC)
2. JavaScript در انتهای body (برای performance)
3. یا از \`defer\` و \`async\` برای script‌ها استفاده کنید`,
          code: `<!DOCTYPE html>
<html lang="fa" dir="rtl">
<head>
    <!-- Meta Tags -->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="توضیحات صفحه برای SEO">
    <meta name="keywords" content="HTML, CSS, Web Development">
    <meta name="author" content="نام شما">
    
    <!-- Open Graph (Social Media) -->
    <meta property="og:title" content="عنوان صفحه">
    <meta property="og:description" content="توضیحات">
    <meta property="og:image" content="image.jpg">
    <meta property="og:url" content="https://example.com">
    
    <!-- Title -->
    <title>عنوان صفحه - نام سایت</title>
    
    <!-- Favicon -->
    <link rel="icon" type="image/png" href="/favicon.png">
    <link rel="apple-touch-icon" href="/apple-touch-icon.png">
    
    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link href="https://fonts.googleapis.com/css2?family=Vazirmatn&display=swap" rel="stylesheet">
    
    <!-- Stylesheets -->
    <link rel="stylesheet" href="css/reset.css">
    <link rel="stylesheet" href="css/main.css">
    
    <!-- Inline Styles (Not Recommended) -->
    <style>
        body { font-family: 'Vazirmatn', sans-serif; }
    </style>
</head>
<body>
    <!-- Header -->
    <header>
        <h1>عنوان اصلی صفحه</h1>
        <nav>
            <ul>
                <li><a href="/">خانه</a></li>
                <li><a href="/about">درباره</a></li>
            </ul>
        </nav>
    </header>
    
    <!-- Main Content -->
    <main>
        <article>
            <h2>عنوان مقاله</h2>
            <p>محتوای مقاله...</p>
        </article>
    </main>
    
    <!-- Footer -->
    <footer>
        <p>&copy; ۱۴۰۳ نام سایت</p>
    </footer>
    
    <!-- JavaScript (at the end for performance) -->
    <script src="js/main.js" defer></script>
</body>
</html>`,
          language: "html",
          tips: [
            "DOCTYPE را همیشه در خط اول قرار دهید",
            "meta viewport برای ریسپانسیو ضروری است",
            "title برای SEO بسیار مهم است",
            "Open Graph tags برای اشتراک‌گذاری در شبکه‌های اجتماعی"
          ]
        },
        {
          id: "html-l1-3",
          title: "عناصر متنی و ساختاری",
          subtitle: "تگ‌های پایه برای نمایش محتوا",
          estimatedTime: 35,
          difficulty: "مبتدی",
          interactiveType: 'quiz',
          interactiveData: {
            question: "کدام تگ برای ایجاد یک پاراگراف استفاده می‌شود؟",
            options: ["<h1>", "<p>", "<div>", "<span>"],
            correctIndex: 1,
            explanation: "تگ <p> برای ایجاد پاراگراف استفاده می‌شود. <h1> برای عنوان، <div> یک container عمومی و <span> برای متن inline است."
          },
          content: `## عناصر متنی HTML

HTML طیف وسیعی از عناصر برای نمایش انواع مختلف متن ارائه می‌دهد. شناخت این عناصر برای ساخت صفحات وب حرفه‌ای ضروری است.

### عناوین (Headings)
شش سطح عنوان از h1 تا h6 وجود دارد. h1 مهم‌ترین و h6 کم‌اهمیت‌ترین است.

**نکات مهم:**
- فقط یک h1 در هر صفحه داشته باشید
- سلسله‌مراتب را رعایت کنید (از h1 به h3 نپرید)
- عناوین برای SEO بسیار مهم هستند
- عناوین ساختار صفحه را برای موتورهای جستجو مشخص می‌کنند

### پاراگراف‌ها
تگ \`<p>\` برای پاراگراف‌های متن استفاده می‌شود. مرورگر به طور خودکار margin قبل و بعد پاراگراف اضافه می‌کند.

### لیست‌ها
سه نوع لیست در HTML وجود دارد:

**۱. لیست مرتب (Ordered List):**
برای مواردی که ترتیب مهم است استفاده می‌شود.
\`\`\`html
<ol>
    <li>مورد اول</li>
    <li>مورد دوم</li>
</ol>
\`\`\`

**۲. لیست نامرتب (Unordered List):**
برای مواردی که ترتیب مهم نیست.
\`\`\`html
<ul>
    <li>مورد اول</li>
    <li>مورد دوم</li>
</ul>
\`\`\`

**۳. لیست تعریفی (Definition List):**
برای جفت‌های اصطلاح-تعریف.
\`\`\`html
<dl>
    <dt>HTML</dt>
    <dd>زبان نشانه‌گذاری ابرمتن</dd>
</dl>
\`\`\`

### عناصر قالب‌بندی متن

- \`<strong>\` - متن مهم (bold) - معنای معنایی دارد
- \`<em>\` - تأکید (italic) - معنای معنایی دارد
- \`<mark>\` - هایلایت
- \`<del>\` - متن حذف شده
- \`<ins>\` - متن اضافه شده
- \`<sub>\` - زیرنویس (مثل H₂O)
- \`<sup>\` - بالانویس (مثل x²)
- \`<code>\` - کد inline
- \`<pre>\` - متن پیش‌قالب‌بندی شده
- \`<blockquote>\` - نقل قول بلند
- \`<q>\` - نقل قول کوتاه
- \`<cite>\` - عنوان اثر
- \`<abbr>\` - مخفف

### تفاوت b/strong و i/em:
- \`<b>\` و \`<i>\` فقط ظاهر را تغییر می‌دهند (بدون معنای خاص)
- \`<strong>\` و \`<em>\` معنای معنایی دارند (برای SEO و Accessibility)

### لینک‌ها و تصاویر:
\`\`\`html
<a href="https://example.com" target="_blank" rel="noopener">لینک</a>
<img src="image.jpg" alt="توضیح تصویر" width="300">
\`\`\``,
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
    <h3>عنوان سطح ۳</h3>
    <h4>عنوان سطح ۴</h4>
    
    <h2>پاراگراف‌ها</h2>
    <p>این یک پاراگراف نمونه است. HTML فضای خالی اضافی را نادیده می‌گیرد.</p>
    <p>این پاراگراف دوم است. برای خط جدید از <code>&lt;br&gt;</code> استفاده کنید.<br>
    این خط بعد از br است.</p>
    <hr>
    
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
    
    <h3>لیست تعریفی:</h3>
    <dl>
        <dt>HTML</dt>
        <dd>زبان نشانه‌گذاری ابرمتن</dd>
        <dt>CSS</dt>
        <dd>زبان شیوه‌نامه آبشاری</dd>
    </dl>
    
    <h2>عناصر قالب‌بندی</h2>
    <p>متن <strong>مهم</strong> با strong نمایش داده می‌شود.</p>
    <p>متن <em>تأکیدی</em> با em نمایش داده می‌شود.</p>
    <p>متن <mark>هایلایت شده</mark> با mark.</p>
    <p>متن <del>حذف شده</del> و <ins>اضافه شده</ins>.</p>
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
    
    <h2>لینک‌ها</h2>
    <p><a href="https://example.com" target="_blank" rel="noopener">لینک خارجی</a></p>
    <p><a href="#section1">لینک داخلی</a></p>
    <p><a href="mailto:test@example.com">ایمیل</a></p>
    
    <h2>تصاویر</h2>
    <figure>
        <img src="https://via.placeholder.com/400x200" alt="تصویر نمونه" width="400">
        <figcaption>توضیح تصویر</figcaption>
    </figure>
</body>
</html>`,
          language: "html",
          tips: [
            "فقط یک h1 در هر صفحه داشته باشید",
            "سلسله‌مراتب عناوین را رعایت کنید",
            "از strong و em به جای b و i استفاده کنید",
            "alt برای تصاویر الزامی است (Accessibility)"
          ]
        },
        {
          id: "html-l1-4",
          title: "لینک‌ها و ناوبری",
          subtitle: "ایجاد لینک‌های داخلی و خارجی",
          estimatedTime: 25,
          difficulty: "مبتدی",
          content: `## لینک‌ها در HTML

لینک‌ها (Hyperlinks) اساس وب هستند و امکان ناوبری بین صفحات و منابع را فراهم می‌کنند.

### تگ anchor

تگ \`<a>\` برای ایجاد لینک استفاده می‌شود.

### انواع لینک

**۱. لینک مطلق (Absolute):**
\`\`\`html
<a href="https://example.com">لینک خارجی</a>
\`\`\`

**۲. لینک نسبی (Relative):**
\`\`\`html
<a href="/about.html">درباره ما</a>
<a href="../images/photo.jpg">تصویر</a>
\`\`\`

**۳. لینک داخلی (Anchor Link):**
\`\`\`html
<a href="#section1">برو به بخش ۱</a>
<h2 id="section1">بخش ۱</h2>
\`\`\`

**۴. لینک ایمیل:**
\`\`\`html
<a href="mailto:info@example.com">ارسال ایمیل</a>
\`\`\`

**۵. لینک تلفن:**
\`\`\`html
<a href="tel:+989121234567">تماس</a>
\`\`\`

### Attribute‌های مهم

- \`href\`: آدرس مقصد
- \`target\`: نحوه باز شدن لینک
  - \`_self\`: در همان تب (پیش‌فرض)
  - \`_blank\`: در تب جدید
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
          tips: [
            "برای لینک‌های خارجی از target='_blank' و rel='noopener noreferrer' استفاده کنید",
            "متن لینک باید معنادار باشد",
            "از لینک‌های نسبی برای صفحات داخلی استفاده کنید"
          ]
        }
      ]
    },
    {
      id: "html-ch2",
      title: "فصل ۲: عناصر معنایی HTML5",
      description: "ساختاردهی هوشمند محتوا با عناصر معنایی",
      lessons: [
        {
          id: "html-l2-1",
          title: "عناصر معنایی ساختاری",
          subtitle: "header, nav, main, footer و سایر عناصر",
          estimatedTime: 35,
          difficulty: "مبتدی",
          interactiveType: 'diagram',
          interactiveData: { diagramType: 'semantic-layout' },
          content: `## عناصر معنایی ساختاری

عناصر معنایی تگ‌هایی هستند که معنای محتوای خود را به طور واضح بیان می‌کنند.

### چرا عناصر معنایی مهم هستند؟

**۱. دسترسی‌پذیری (Accessibility):**
صفحه‌خوان‌ها ساختار صفحه را بهتر درک می‌کنند و کاربران نابینا می‌توانند راحت‌تر ناوبری کنند.

**۲. سئو (SEO):**
موتورهای جستجو محتوا را بهتر می‌فهمند و رتبه بهتری به صفحات معنایی می‌دهند.

**۳. خوانایی کد:**
کد برای توسعه‌دهندگان دیگر قابل فهم‌تر است و نگهداری آسان‌تر می‌شود.

**۴. نگهداری آسان‌تر:**
ساختار مشخص، تغییرات آینده را ساده‌تر می‌کند.

### عناصر اصلی

**header:** سربرگ صفحه یا بخش. معمولاً شامل لوگو، عنوان و navigation

**nav:** بخش ناوبری. لینک‌های اصلی سایت

**main:** محتوای اصلی صفحه. فقط یکبار در هر صفحه

**article:** محتوای مستقل و کامل مثل یک پست بلاگ

**section:** بخش‌بندی موضوعی محتوا

**aside:** محتوای جانبی مثل sidebar

**footer:** پاورقی صفحه یا بخش

**figure:** محتوای تصویری

**figcaption:** توضیح تصویر

**details/summary:** محتوای قابل باز/بسته شدن

**time:** تاریخ و زمان

**address:** اطلاعات تماس

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
    <title>وبلاگ تکنولوژی</title>
</head>
<body>
    <header>
        <h1>وبلاگ تکنولوژی</h1>
        <nav aria-label="ناوبری اصلی">
            <ul>
                <li><a href="/">خانه</a></li>
                <li><a href="/articles">مقالات</a></li>
                <li><a href="/tutorials">آموزش‌ها</a></li>
            </ul>
        </nav>
    </header>
    
    <main>
        <section aria-labelledby="latest-heading">
            <h2 id="latest-heading">آخرین مقالات</h2>
            
            <article>
                <header>
                    <h3>
                        <a href="/articles/react-19">معرفی React 19</a>
                    </h3>
                    <div class="meta">
                        <time datetime="2024-03-15">۲۵ اسفند ۱۴۰۲</time>
                        <address>نوشته <a href="/author/ali">علی</a></address>
                    </div>
                </header>
                
                <p>React 19 با قابلیت‌های جدید منتشر شده...</p>
                
                <section>
                    <h4>ویژگی‌های جدید</h4>
                    <ul>
                        <li>Server Components</li>
                        <li>Actions</li>
                    </ul>
                </section>
                
                <footer>
                    <p>برچسب‌ها: <a href="/tag/react">React</a></p>
                </footer>
            </article>
        </section>
    </main>
    
    <aside aria-label="سایدبار">
        <section>
            <h2>دسته‌بندی‌ها</h2>
            <nav aria-label="دسته‌بندی مقالات">
                <ul>
                    <li><a href="/cat/frontend">فرانت‌اند (۲۵)</a></li>
                    <li><a href="/cat/backend">بک‌اند (۱۸)</a></li>
                </ul>
            </nav>
        </section>
    </aside>
    
    <footer>
        <address>
            <p>تهران، ایران</p>
            <p>ایمیل: <a href="mailto:info@example.com">info@example.com</a></p>
        </address>
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
        },
        {
          id: "html-l2-2",
          title: "فرم‌ها و عناصر تعاملی",
          subtitle: "ساخت فرم‌های حرفه‌ای",
          estimatedTime: 40,
          difficulty: "متوسط",
          interactiveType: 'comparison',
          interactiveData: {
            headers: ["نوع Input", "کاربرد", "ویژگی"],
            rows: [
              ["text", "متن ساده", "maxlength, pattern"],
              ["email", "ایمیل", "validation خودکار"],
              ["password", "رمز عبور", "autocomplete"],
              ["number", "عدد", "min, max, step"],
              ["tel", "تلفن", "pattern"],
              ["date", "تاریخ", "date picker"],
              ["range", "بازه", "slider"],
              ["color", "رنگ", "color picker"],
              ["file", "آپلود", "accept, multiple"]
            ]
          },
          content: `## فرم‌ها در HTML

فرم‌ها اصلی‌ترین روش تعامل کاربر با وب‌سایت هستند.

### تگ form
\`<form>\` ظرف تمام عناصر فرم است.

**Attribute‌های مهم:**
- \`action\`: آدرس ارسال داده
- \`method\`: GET یا POST
- \`enctype\`: نوع encoding برای فایل

### انواع input
HTML5 انواع مختلف input ارائه می‌دهد:
- text, email, password, number
- tel, url, date, time
- range, color, file
- checkbox, radio, hidden

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
    <!-- inputs -->
</fieldset>
\`\`\`

### Validation
- required: فیلد اجباری
- minlength/maxlength: طول متن
- min/max: مقدار عددی
- pattern: الگوی regex
- type: نوع داده`,
          tips: [
            "همیشه label را با for/id به input متصل کنید",
            "از autocomplete برای تجربه کاربری بهتر استفاده کنید",
            "اعتبارسنجی سمت سرور ضروری است"
          ]
        },
        {
          id: "html-l2-3",
          title: "عناصر چندرسانه‌ای",
          subtitle: "تصاویر، ویدیو و صوت",
          estimatedTime: 30,
          difficulty: "متوسط",
          content: `## عناصر چندرسانه‌ای

HTML5 عناصر جدیدی برای نمایش محتواهای چندرسانه‌ای اضافه کرده است.

### تصاویر

**تگ img:**
\`\`\`html
<img src="photo.jpg" alt="توضیح" width="400" height="300">
\`\`\`

**تگ figure و figcaption:**
\`\`\`html
<figure>
    <img src="photo.jpg" alt="توضیح">
    <figcaption>عکس شماره ۱</figcaption>
</figure>
\`\`\`

**Responsive Images:**
\`\`\`html
<picture>
    <source media="(min-width: 800px)" srcset="large.jpg">
    <source media="(min-width: 400px)" srcset="medium.jpg">
    <img src="small.jpg" alt="توضیح">
</picture>
\`\`\`

**Lazy Loading:**
\`\`\`html
<img src="photo.jpg" alt="توضیح" loading="lazy">
\`\`\`

### ویدیو

\`\`\`html
<video controls width="640" poster="thumbnail.jpg">
    <source src="video.mp4" type="video/mp4">
    <source src="video.webm" type="video/webm">
    <track src="subtitles.vtt" kind="subtitles" srclang="fa" label="فارسی">
    مرورگر شما از ویدیو پشتیبانی نمی‌کند.
</video>
\`\`\`

### صوت

\`\`\`html
<audio controls>
    <source src="audio.mp3" type="audio/mpeg">
    <source src="audio.ogg" type="audio/ogg">
    مرورگر شما از صوت پشتیبانی نمی‌کند.
</audio>
\`\`\`

### iframe

\`\`\`html
<iframe src="https://example.com" width="600" height="400" 
        title="محتوای خارجی" loading="lazy"></iframe>
\`\`\``,
          tips: [
            "همیشه alt برای تصاویر قرار دهید",
            "از loading='lazy' برای بهینه‌سازی استفاده کنید",
            "چندین source برای فرمت‌های مختلف قرار دهید"
          ]
        }
      ]
    },
    {
      id: "css-ch3",
      title: "فصل ۳: مبانی CSS",
      description: "انتخابگرها، خاصیت‌ها و مدل جعبه‌ای",
      lessons: [
        {
          id: "css-l3-1",
          title: "مقدمه‌ای بر CSS",
          subtitle: "CSS چیست و چگونه کار می‌کند؟",
          estimatedTime: 30,
          difficulty: "مبتدی",
          content: `## CSS چیست؟

CSS (Cascading Style Sheets) زبان استایل‌دهی برای اسناد HTML است. CSS ظاهر و چیدمان صفحات وب را کنترل می‌کند.

## روش‌های اعمال CSS

**۱. Inline Style:**
\`\`\`html
<p style="color: blue;">متن آبی</p>
\`\`\`
مزایا: سریع | معایب: غیرقابل استفاده مجدد

**۲. Internal Style:**
\`\`\`html
<style>
    p { color: blue; }
</style>
\`\`\`
مزایا: در یک فایل | معایب: غیرقابل استفاده مجدد

**۳. External Style (توصیه شده):**
\`\`\`html
<link rel="stylesheet" href="styles.css">
\`\`\`
مزایا: قابل استفاده مجدد، cache می‌شود

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

**۵. انتخابگر ترکیبی:**
\`\`\`css
.card > h2 { font-size: 1.5rem; }
.nav a:hover { color: red; }
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

با \`box-sizing: border-box\`، padding و border در width محاسبه می‌شوند.`,
          code: `/* ===== روش‌های اعمال CSS ===== */

/* External CSS (styles.css) */

/* Reset */
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

/* Base Styles */
body {
    font-family: 'Vazirmatn', sans-serif;
    line-height: 1.6;
    color: #333;
}

/* انتخابگرهای ترکیبی */
.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

/* Pseudo-classes */
a:hover {
    color: #4f46e5;
}

input:focus {
    border-color: #4f46e5;
    outline: none;
}

/* Pseudo-elements */
p::first-letter {
    font-size: 1.5em;
    font-weight: bold;
}

/* ===== Box Model ===== */

.box {
    /* Content */
    width: 300px;
    height: 200px;
    
    /* Padding */
    padding: 20px;
    
    /* Border */
    border: 2px solid #333;
    
    /* Margin */
    margin: 10px;
    
    /* با box-sizing، عرض کل = 300px */
    box-sizing: border-box;
}

/* ===== Units ===== */

.units {
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
}`,
          language: "css",
          tips: [
            "همیشه از box-sizing: border-box استفاده کنید",
            "External CSS بهترین روش است",
            "از ID selector کمتر استفاده کنید"
          ]
        },
        {
          id: "css-l3-2",
          title: "مدل جعبه‌ای (Box Model)",
          subtitle: "درک Content، Padding، Border و Margin",
          estimatedTime: 35,
          difficulty: "مبتدی",
          interactiveType: 'diagram',
          interactiveData: { diagramType: 'box-model' },
          content: `## CSS Box Model

هر عنصر HTML یک جعبه است شامل:

**Content:** محتوای عنصر (متن، تصویر و...)

**Padding:** فاصله داخلی بین content و border

**Border:** حاشیه دور عنصر

**Margin:** فاصله خارجی بین عنصر و عناصر دیگر

### محاسبه عرض کل

بدون \`box-sizing: border-box\`:
\`عرض کل = width + padding-right + padding-left + border-right + border-left\`

با \`box-sizing: border-box\`:
\`عرض کل = width\` (padding و border شامل می‌شوند)

### Margin Collapse

وقتی دو margin عمودی به هم می‌رسند، بزرگترین آن‌ها استفاده می‌شود (جمع نمی‌شوند).

### نکات مهم:
- همیشه \`box-sizing: border-box\` را تنظیم کنید
- از margin برای فاصله بین عناصر استفاده کنید
- از padding برای فاصله داخلی استفاده کنید
- margin: auto برای وسط‌چین کردن افقی`,
          code: `/* ===== Box Model Examples ===== */

/* Reset با box-sizing */
*, *::before, *::after {
    box-sizing: border-box;
}

/* ===== Margin ===== */

/* Margin تمام جهات */
.box1 { margin: 20px; }

/* Margin عمودی و افقی */
.box2 { margin: 10px 20px; }

/* Margin بالا، افقی، پایین */
.box3 { margin: 10px 20px 30px; }

/* Margin هر طرف جداگانه */
.box4 {
    margin-top: 10px;
    margin-right: 20px;
    margin-bottom: 30px;
    margin-left: 40px;
}

/* Margin auto برای وسط‌چین */
.centered {
    width: 80%;
    margin: 0 auto;
}

/* ===== Padding ===== */

.padding-example {
    padding: 20px; /* همه جهات */
    padding: 10px 20px; /* عمودی افقی */
    padding: 10px 20px 30px 40px; /* بالا راست پایین چپ */
}

/* ===== Border ===== */

.border-example {
    border: 2px solid #333;
    border-radius: 8px;
}

/* ===== Practical Card ===== */

.card {
    width: 300px;
    padding: 24px;
    border: 1px solid #e2e8f0;
    border-radius: 12px;
    margin-bottom: 20px;
    background: white;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}`,
          language: "css",
          tips: [
            "همیشه box-sizing: border-box را در ابتدای CSS تنظیم کنید",
            "Margin auto برای وسط‌چین کردن افقی عالی است",
            "Margin collapse فقط در جهت عمودی اتفاق می‌افتد"
          ]
        },
        {
          id: "css-l3-3",
          title: "رنگ‌ها و پس‌زمینه‌ها",
          subtitle: "کار با رنگ‌ها در CSS",
          estimatedTime: 25,
          difficulty: "مبتدی",
          interactiveType: 'calculator',
          interactiveData: { type: 'color-converter' },
          content: `## رنگ‌ها در CSS

CSS روش‌های مختلفی برای تعریف رنگ ارائه می‌دهد.

### روش‌های تعریف رنگ:

**۱. Named Colors:**
\`\`\`css
color: red;
color: blue;
\`\`\`

**۲. Hexadecimal:**
\`\`\`css
color: #ff0000; /* قرمز */
color: #f00; /* shorthand */
\`\`\`

**۳. RGB:**
\`\`\`css
color: rgb(255, 0, 0);
\`\`\`

**۴. RGBA (با opacity):**
\`\`\`css
color: rgba(255, 0, 0, 0.5);
\`\`\`

**۵. HSL:**
\`\`\`css
color: hsl(0, 100%, 50%);
\`\`\`

**۶. HSLA:**
\`\`\`css
color: hsla(0, 100%, 50%, 0.5);
\`\`\`

### Background

\`\`\`css
.element {
    /* Color */
    background-color: #f0f0f0;
    
    /* Image */
    background-image: url('image.jpg');
    
    /* Position */
    background-position: center;
    
    /* Size */
    background-size: cover;
    
    /* Repeat */
    background-repeat: no-repeat;
    
    /* Shorthand */
    background: #f0f0f0 url('image.jpg') center/cover no-repeat;
}
\`\`\`

### Gradients

\`\`\`css
/* Linear */
background: linear-gradient(135deg, #667eea, #764ba2);

/* Radial */
background: radial-gradient(circle, #667eea, #764ba2);
\`\`\``,
          tips: [
            "از RGBA برای opacity استفاده کنید",
            "HSL برای تنظیم رنگ‌ها راحت‌تر است",
            "Gradients برای پس‌زمینه‌های جذاب عالی هستند"
          ]
        }
      ]
    },
    {
      id: "css-ch4",
      title: "فصل ۴: Flexbox",
      description: "چیدمان انعطاف‌پذیر یک‌بعدی",
      lessons: [
        {
          id: "css-l4-1",
          title: "مبانی Flexbox",
          subtitle: "درک Container و Items",
          estimatedTime: 40,
          difficulty: "متوسط",
          interactiveType: 'diagram',
          interactiveData: { diagramType: 'flexbox' },
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
- row (پیش‌فرض)
- row-reverse
- column
- column-reverse

### justify-content
- flex-start, flex-end, center
- space-between, space-around, space-evenly

### align-items
- stretch (پیش‌فرض)
- flex-start, flex-end, center, baseline

### flex-wrap
- nowrap (پیش‌فرض)
- wrap, wrap-reverse

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

.container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 20px;
}

/* ===== Navbar ===== */

.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 24px;
}

.navbar-logo { font-size: 20px; font-weight: 700; }

.navbar-menu {
    display: flex;
    gap: 8px;
    list-style: none;
}

/* ===== Centering ===== */

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
    flex: 1 1 300px;
    max-width: 100%;
}

/* ===== Holy Grail Layout ===== */

.page {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}

.page-header { flex: 0 0 auto; }

.page-body {
    display: flex;
    flex: 1;
}

.page-sidebar { flex: 0 0 250px; }
.page-main { flex: 1; min-width: 0; }
.page-footer { flex: 0 0 auto; }`,
          language: "css",
          tips: [
            "flex: 1 1 0% بهتر از flex: 1 است",
            "gap در Flexbox پشتیبانی می‌شود",
            "min-width: 0 برای جلوگیری از overflow"
          ]
        },
        {
          id: "css-l4-2",
          title: "الگوهای رایج Flexbox",
          subtitle: "Navbar، Card Grid و Layout‌های کاربردی",
          estimatedTime: 35,
          difficulty: "متوسط",
          content: `## الگوهای رایج Flexbox

در این درس با الگوهای پرکاربرد Flexbox آشنا می‌شویم.

### ۱. Navbar
\`\`\`css
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
\`\`\`

### ۲. Card Grid
\`\`\`css
.grid {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
}
.grid > * {
    flex: 1 1 300px;
}
\`\`\`

### ۳. Sticky Footer
\`\`\`css
body {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}
main { flex: 1; }
\`\`\`

### ۴. Centering
\`\`\`css
.center {
    display: flex;
    justify-content: center;
    align-items: center;
}
\`\`\`

### ۵. Holy Grail Layout
\`\`\`css
.page {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}
.body {
    display: flex;
    flex: 1;
}
.sidebar { flex: 0 0 250px; }
.main { flex: 1; }
\`\`\``,
          tips: [
            "از gap به جای margin استفاده کنید",
            "flex-wrap برای responsive ضروری است",
            "order برای تغییر ترتیب بصری"
          ]
        }
      ]
    },
    {
      id: "css-ch5",
      title: "فصل ۵: CSS Grid",
      description: "چیدمان شبکه‌ای دوبعدی",
      lessons: [
        {
          id: "css-l5-1",
          title: "مبانی CSS Grid",
          subtitle: "ایجاد layout‌های پیچیده",
          estimatedTime: 45,
          difficulty: "متوسط",
          interactiveType: 'diagram',
          interactiveData: { diagramType: 'grid' },
          content: `## CSS Grid چیست؟

CSS Grid قدرتمندترین سیستم چیدمان در CSS است. برخلاف Flexbox که یک‌بعدی است، Grid دوبعدی کار می‌کند.

## مفاهیم پایه

**Grid Container:** عنصری با \`display: grid\`

**Grid Items:** فرزندان مستقیم container

**Grid Lines:** خطوط افقی و عمودی

**Grid Tracks:** فضای بین دو خط

**Grid Cell:** کوچکترین واحد

**Grid Area:** فضای مستطیلی

## تعریف ستون‌ها و ردیف‌ها

\`\`\`css
.container {
    display: grid;
    grid-template-columns: 200px 1fr 300px;
    grid-template-rows: auto 1fr auto;
    gap: 24px;
}
\`\`\`

### واحد fr
\`fr\` بخشی از فضای خالی موجود را اشغال می‌کند.

### minmax()
\`minmax(200px, 1fr)\` = حداقل 200px، حداکثر 1fr

### auto-fit vs auto-fill
- auto-fill: تا حد ممکن ستون ایجاد می‌کند
- auto-fit: ستون‌های خالی را حذف می‌کند

## قرار دادن آیتم‌ها

\`\`\`css
.item {
    grid-column: 1 / 3;
    grid-row: 2 / 4;
}
\`\`\`

## Grid Template Areas

\`\`\`css
.container {
    grid-template-areas:
        "header header header"
        "sidebar main aside"
        "footer footer footer";
}
\`\`\``,
          code: `/* ===== Grid Basics ===== */

.grid-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto 1fr auto;
    gap: 24px;
}

/* ===== Responsive Grid ===== */

.responsive-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 24px;
}

/* ===== Dashboard Layout ===== */

.dashboard {
    display: grid;
    grid-template-columns: 250px 1fr 300px;
    grid-template-rows: 64px 1fr 48px;
    grid-template-areas:
        "header header header"
        "sidebar main aside"
        "footer footer footer";
    min-height: 100vh;
}

.dashboard-header { grid-area: header; }
.dashboard-sidebar { grid-area: sidebar; }
.dashboard-main { grid-area: main; }
.dashboard-aside { grid-area: aside; }
.dashboard-footer { grid-area: footer; }

/* ===== Spanning Items ===== */

.featured-card {
    grid-column: span 2;
    grid-row: span 2;
}

.full-width {
    grid-column: 1 / -1;
}`,
          language: "css",
          tips: [
            "auto-fit + minmax() بهترین روش برای responsive grid است",
            "از grid-template-areas برای layout‌های پیچیده استفاده کنید",
            "gap در Grid پشتیبانی کامل دارد"
          ]
        }
      ]
    },
    {
      id: "css-ch6",
      title: "فصل ۶: انیمیشن‌ها و Transitions",
      description: "ایجاد افکت‌های بصری جذاب",
      lessons: [
        {
          id: "css-l6-1",
          title: "CSS Transitions",
          subtitle: "انتقال‌های نرم بین حالت‌ها",
          estimatedTime: 35,
          difficulty: "متوسط",
          interactiveType: 'comparison',
          interactiveData: {
            headers: ["ویژگی", "Transitions", "Animations"],
            rows: [
              ["پیچیدگی", "ساده", "پیچیده"],
              ["کنترل", "دو حالت", "چندین حالت"],
              ["تکرار", "معمولاً یکبار", "قابل تکرار"],
              ["نیاز به trigger", "بله", "خیر"],
              ["مناسب برای", "تغییرات ساده", "انیمیشن‌های پیچیده"]
            ]
          },
          content: `## CSS Transitions

Transition‌ها تغییرات بین دو حالت یک عنصر را به صورت نرم انجام می‌دهند.

### خواص transition:

**transition-property:** خاصیت مورد نظر

**transition-duration:** مدت زمان

**transition-timing-function:** تابع زمان‌بندی
- ease, linear, ease-in, ease-out
- cubic-bezier()

**transition-delay:** تأخیر قبل از شروع

### مثال:
\`\`\`css
.button {
    transition: all 0.3s ease;
}

.button:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 30px rgba(0,0,0,0.2);
}
\`\`\`

### نکات مهم:
- فقط transform و opacity را انیمیت کنید (GPU accelerated)
- از cubic-bezier برای انیمیشن‌های طبیعی استفاده کنید
- transition را برای performance بهینه کنید`,
          code: `/* ===== Basic Transition ===== */

.button {
    background: #4f46e5;
    color: white;
    padding: 12px 24px;
    border-radius: 8px;
    transition: all 0.3s ease;
}

.button:hover {
    background: #6366f1;
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(79, 70, 229, 0.3);
}

/* ===== Multiple Properties ===== */

.card {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
    transform: translateY(-5px) scale(1.02);
    box-shadow: 0 20px 40px rgba(0,0,0,0.15);
}

/* ===== Timing Functions ===== */

.ease-example {
    transition: transform 0.5s ease;
}

.cubic-example {
    transition: transform 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}`,
          language: "css",
          tips: [
            "فقط transform و opacity را انیمیت کنید",
            "از cubic-bezier برای انیمیشن‌های طبیعی استفاده کنید",
            "transition را برای performance بهینه کنید"
          ]
        }
      ]
    },
    {
      id: "css-ch7",
      title: "فصل ۷: طراحی ریسپانسیو",
      description: "ساخت صفحات واکنش‌گرا",
      lessons: [
        {
          id: "css-l7-1",
          title: "Media Queries",
          subtitle: "سازگاری با اندازه‌های مختلف صفحه",
          estimatedTime: 40,
          difficulty: "متوسط",
          interactiveType: 'comparison',
          interactiveData: {
            headers: ["ویژگی", "Mobile First", "Desktop First"],
            rows: [
              ["Media Query", "min-width", "max-width"],
              ["CSS پایه", "برای موبایل", "برای دسکتاپ"],
              ["Performance", "بهتر", "بدتر"],
              ["UX", "بهتر", "معمولی"],
              ["توصیه", "بله", "خیر"]
            ]
          },
          content: `## طراحی ریسپانسیو

طراحی ریسپانسیو یعنی ساخت صفحاتی که در اندازه‌های مختلف به خوبی کار کنند.

## رویکردها

**Mobile First:** اول برای موبایل، سپس با media query برای صفحات بزرگتر

**Desktop First:** اول برای دسکتاپ، سپس برای موبایل

توصیه: Mobile First

## Media Queries

\`\`\`css
/* Mobile First */
.container { width: 100%; }

@media (min-width: 768px) {
    .container { max-width: 720px; }
}

@media (min-width: 1024px) {
    .container { max-width: 960px; }
}
\`\`\`

## Breakpoints معمول:
- 640px: موبایل بزرگ
- 768px: تبلت
- 1024px: لپ‌تاپ
- 1280px: دسکتاپ

## Units ریسپانسیو:
- %: درصدی از والد
- vw/vh: درصدی از viewport
- rem/em: نسبی به font-size
- clamp(): حداقل، ترجیحی، حداکثر`,
          code: `/* ===== Mobile First ===== */

/* Base (Mobile) */
.container {
    width: 100%;
    padding: 0 16px;
}

.grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 16px;
}

/* Tablet (768px+) */
@media (min-width: 768px) {
    .container {
        max-width: 720px;
        margin: 0 auto;
    }
    
    .grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 24px;
    }
}

/* Desktop (1024px+) */
@media (min-width: 1024px) {
    .container { max-width: 960px; }
    
    .grid {
        grid-template-columns: repeat(3, 1fr);
    }
}

/* ===== Responsive Typography ===== */

h1 {
    font-size: clamp(24px, 5vw, 48px);
}

p {
    font-size: clamp(14px, 2vw, 16px);
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
};

// ============================================
// COURSE 2: JavaScript - 6 Chapters
// ============================================
const javascriptCourse: Course = {
  id: "javascript",
  title: "جاوااسکریپت کامل",
  subtitle: "از مبتدی تا پیشرفته",
  description: "تسلط کامل بر JavaScript مدرن شامل ES6+، برنامه‌نویسی ناهمگام، DOM و الگوهای طراحی",
  color: "from-yellow-500 to-amber-500",
  totalHours: 100,
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
          subtitle: "let، const و انواع داده",
          estimatedTime: 35,
          difficulty: "مبتدی",
          interactiveType: 'playground',
          interactiveData: { expectedOutput: "string\nnumber\nboolean\nobject" },
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
          subtitle: "if, switch, ternary",
          estimatedTime: 30,
          difficulty: "مبتدی",
          interactiveType: 'quiz',
          interactiveData: {
            question: "خروجی کد زیر چیست؟\n\nconsole.log(5 == '5');\nconsole.log(5 === '5');",
            options: ["true, true", "true, false", "false, true", "false, false"],
            correctIndex: 1,
            explanation: "عملگر == (loose equality) نوع‌ها را coerce می‌کند پس '5' به 5 تبدیل شده و برابر می‌شوند (true). ولی === (strict equality) نوع را هم چک می‌کند و چون string و number متفاوت هستند، false برمی‌گرداند."
          },
          content: `## عملگرها در JavaScript

### عملگرهای مقایسه‌ای:
- \`==\` : برابری (با type coercion)
- \`===\` : برابری سخت‌گیرانه
- \`!=\`, \`!==\` : نابرابری
- \`>\`, \`<\`, \`>=\`, \`<=\`

### عملگرهای منطقی:
- \`&&\` : AND
- \`||\` : OR
- \`!\` : NOT
- \`??\` : Nullish Coalescing

### Ternary Operator:
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
    default:
        // code
}
\`\`\``,
          code: `// ===== عملگرهای مقایسه =====

console.log(5 == "5");    // true
console.log(5 === "5");   // false

// ===== عملگرهای منطقی =====

const a = true;
const b = false;

console.log(a && b);  // false
console.log(a || b);  // true
console.log(!a);      // false

// Nullish Coalescing
const value1 = 0 ?? "default";     // 0
const value2 = null ?? "default";  // "default"

// ===== Ternary =====

const age = 20;
const status = age >= 18 ? "adult" : "minor";

// ===== if/else =====

const temperature = 25;

if (temperature > 30) {
    console.log("Hot!");
} else if (temperature > 20) {
    console.log("Warm");
} else {
    console.log("Cool");
}

// ===== switch =====

const day = "Monday";

switch (day) {
    case "Saturday":
    case "Friday":
        console.log("Weekend!");
        break;
    case "Monday":
        console.log("Weekday");
        break;
    default:
        console.log("Other day");
}`,
          language: "javascript",
          tips: [
            "همیشه از === استفاده کنید",
            "?? فقط null و undefined را handle می‌کند",
            "از ternary تو در تو پرهیز کنید"
          ]
        },
        {
          id: "js-l1-3",
          title: "توابع در JavaScript",
          subtitle: "Function Declaration، Expression و Arrow",
          estimatedTime: 40,
          difficulty: "متوسط",
          interactiveType: 'comparison',
          interactiveData: {
            headers: ["ویژگی", "Declaration", "Expression", "Arrow"],
            rows: [
              ["Hoisting", "بله", "خیر", "خیر"],
              ["this binding", "Dynamic", "Dynamic", "Lexical"],
              ["arguments", "دارد", "دارد", "ندارد"],
              ["سینتکس", "function name()", "const fn = function()", "const fn = () =>"],
              ["مناسب برای", "توابع اصلی", "Callbackها", "توابع کوتاه"]
            ]
          },
          content: `## انواع توابع

### Function Declaration:
\`\`\`js
function greet(name) {
    return \`Hello \${name}\`;
}
\`\`\`
- Hoisted

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
\`\`\``,
          code: `// ===== Function Declaration =====
function add(a, b) {
    return a + b;
}

// ===== Arrow Functions =====
const multiply = (a, b) => a * b;
const double = x => x * 2;
const getRandom = () => Math.random();

// ===== Default Parameters =====
function greet(name = "Guest", greeting = "Hello") {
    return \`\${greeting}, \${name}!\`;
}

// ===== Rest Parameters =====
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3, 4, 5));  // 15

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
counter.getCount();   // 2

// ===== Higher-Order Functions =====
function createMultiplier(factor) {
    return (number) => number * factor;
}

const triple = createMultiplier(3);
console.log(triple(5));  // 15`,
          language: "javascript",
          tips: [
            "Arrow functions برای callback‌ها عالی هستند",
            "از closure برای encapsulation استفاده کنید",
            "Default parameters از || بهترند"
          ]
        }
      ]
    },
    {
      id: "js-ch2",
      title: "فصل ۲: آرایه‌ها و اشیاء",
      description: "کار با داده‌های ساختاریافته",
      lessons: [
        {
          id: "js-l2-1",
          title: "آرایه‌ها و متدهای آن‌ها",
          subtitle: "map, filter, reduce و سایر متدها",
          estimatedTime: 45,
          difficulty: "متوسط",
          interactiveType: 'playground',
          interactiveData: { expectedOutput: "[2, 4, 6, 8, 10]" },
          content: `## آرایه‌ها در JavaScript

آرایه‌ها لیست‌های مرتب از مقادیر هستند.

### ایجاد آرایه:
\`\`\`js
const fruits = ["apple", "banana", "cherry"];
const numbers = [1, 2, 3, 4, 5];
\`\`\`

### متدهای مهم:

**map:** تبدیل هر عنصر
\`\`\`js
const doubled = numbers.map(n => n * 2);
\`\`\`

**filter:** فیلتر کردن عناصر
\`\`\`js
const evens = numbers.filter(n => n % 2 === 0);
\`\`\`

**reduce:** کاهش به یک مقدار
\`\`\`js
const sum = numbers.reduce((acc, n) => acc + n, 0);
\`\`\`

**find:** پیدا کردن اولین عنصر مطابق
\`\`\`js
const found = fruits.find(f => f.startsWith("b"));
\`\`\`

**forEach:** اجرای تابع برای هر عنصر
\`\`\`js
fruits.forEach(f => console.log(f));
\`\`\``,
          code: `// ===== آرایه‌ها =====

const fruits = ["apple", "banana", "cherry"];
const numbers = [1, 2, 3, 4, 5];

// ===== map =====
const doubled = numbers.map(n => n * 2);
// [2, 4, 6, 8, 10]

// ===== filter =====
const evens = numbers.filter(n => n % 2 === 0);
// [2, 4]

// ===== reduce =====
const sum = numbers.reduce((acc, n) => acc + n, 0);
// 15

// ===== find =====
const found = fruits.find(f => f.startsWith("b"));
// "banana"

// ===== Chaining =====
const result = numbers
    .filter(n => n > 2)
    .map(n => n * 10)
    .reduce((acc, n) => acc + n, 0);
// 120

// ===== Spread Operator =====
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2];
// [1, 2, 3, 4, 5, 6]

// ===== Destructuring =====
const [first, second, ...rest] = numbers;
// first = 1, second = 2, rest = [3, 4, 5]`,
          language: "javascript",
          tips: [
            "map, filter, reduce را خوب یاد بگیرید",
            "از chaining برای عملیات‌های پیچیده استفاده کنید",
            "Spread operator برای copy و merge عالی است"
          ]
        }
      ]
    },
    {
      id: "js-ch3",
      title: "فصل ۳: برنامه‌نویسی ناهمگام",
      description: "Promises، Async/Await و Fetch API",
      lessons: [
        {
          id: "js-l3-1",
          title: "Promises و Async/Await",
          subtitle: "مدیریت عملیات ناهمگام",
          estimatedTime: 50,
          difficulty: "پیشرفته",
          interactiveType: 'tabs',
          interactiveData: {
            tabs: [
              { label: "Callbacks", content: "روش قدیمی با توابع callback که منجر به Callback Hell می‌شود." },
              { label: "Promises", content: "روش مدرن‌تر با .then() و .catch(). کد تخت‌تر و خواناتر." },
              { label: "Async/Await", content: "روش پیشنهادی. کد ناهمگام را مثل کد همگام می‌نویسد." }
            ]
          },
          content: `## برنامه‌نویسی ناهمگام

JavaScript single-threaded است ولی با Event Loop می‌تواند عملیات ناهمگام را مدیریت کند.

### Callbacks (قدیمی):
\`\`\`js
setTimeout(() => {
    console.log("Done!");
}, 1000);
\`\`\`

### Promises:
\`\`\`js
const promise = new Promise((resolve, reject) => {
    if (success) resolve(result);
    else reject(error);
});

promise
    .then(result => console.log(result))
    .catch(error => console.error(error));
\`\`\`

### Async/Await:
\`\`\`js
async function fetchData() {
    try {
        const result = await someAsyncOperation();
        return result;
    } catch (error) {
        console.error(error);
    }
}
\`\`\`

### Fetch API:
\`\`\`js
async function getData() {
    const response = await fetch('/api/data');
    const data = await response.json();
    return data;
}
\`\`\``,
          code: `// ===== Promises =====

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const success = true;
        if (success) {
            resolve("Data loaded!");
        } else {
            reject("Error occurred!");
        }
    }, 1000);
});

promise
    .then(result => console.log(result))
    .catch(error => console.error(error))
    .finally(() => console.log("Done!"));

// ===== Async/Await =====

async function fetchData() {
    try {
        const result = await someAsyncOperation();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}

// ===== Fetch API =====

async function getUsers() {
    try {
        const response = await fetch('https://api.example.com/users');
        
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        
        const users = await response.json();
        return users;
    } catch (error) {
        console.error('Error:', error);
    }
}

// ===== Promise.all =====

async function getAllData() {
    try {
        const [users, posts, comments] = await Promise.all([
            fetch('/api/users').then(r => r.json()),
            fetch('/api/posts').then(r => r.json()),
            fetch('/api/comments').then(r => r.json())
        ]);
        
        return { users, posts, comments };
    } catch (error) {
        console.error(error);
    }
}`,
          language: "javascript",
          tips: [
            "همیشه از async/await استفاده کنید",
            "try/catch را فراموش نکنید",
            "Promise.all برای درخواست‌های مستقل عالی است"
          ]
        }
      ]
    },
    {
      id: "js-ch4",
      title: "فصل ۴: DOM و رویدادها",
      description: "کار با Document Object Model",
      lessons: [
        {
          id: "js-l4-1",
          title: "مبانی DOM",
          subtitle: "انتخاب و تغییر عناصر",
          estimatedTime: 40,
          difficulty: "متوسط",
          content: `## DOM چیست؟

DOM (Document Object Model) یک رابط برنامه‌نویسی برای اسناد HTML است. DOM ساختار درختی صفحه را نشان می‌دهد و به JavaScript اجازه می‌دهد محتوا، ساختار و استایل صفحه را تغییر دهد.

### انتخاب عناصر:

- document.getElementById()
- document.querySelector()
- document.querySelectorAll()

### تغییر محتوا:

- element.textContent
- element.innerHTML
- element.classList.add/remove/toggle

### ایجاد عناصر:

\`\`\`js
const newElement = document.createElement('div');
newElement.textContent = 'Hello';
document.body.appendChild(newElement);
\`\`\``,
          code: `// ===== انتخاب عناصر =====
const header = document.getElementById('header');
const buttons = document.querySelectorAll('.btn');
const firstCard = document.querySelector('.card');

// ===== تغییر محتوا =====
header.textContent = 'عنوان جدید';
firstCard.innerHTML = '<h2>محتوای جدید</h2>';

// ===== مدیریت کلاس‌ها =====
const element = document.querySelector('.box');
element.classList.add('active', 'visible');
element.classList.remove('hidden');
element.classList.toggle('dark-mode');

// ===== ایجاد عنصر جدید =====
const newCard = document.createElement('div');
newCard.className = 'card';
newCard.innerHTML = '<h3>کارت جدید</h3>';
document.querySelector('.container').appendChild(newCard);

// ===== Event Listeners =====
const button = document.querySelector('#submitBtn');

button.addEventListener('click', (event) => {
    event.preventDefault();
    console.log('کلیک شد!');
});

// ===== Event Delegation =====
document.querySelector('.card-list').addEventListener('click', (e) => {
    const card = e.target.closest('.card');
    if (!card) return;
    
    const cardId = card.dataset.id;
    console.log(\`کارت \${cardId} کلیک شد\`);
});`,
          language: "javascript",
          tips: [
            "querySelector و querySelectorAll انعطاف‌پذیرتر هستند",
            "از Event Delegation برای بهبود performance استفاده کنید",
            "classList.toggle برای تغییر state عالی است"
          ]
        }
      ]
    },
    {
      id: "js-ch5",
      title: "فصل ۵: اشیاء و کلاس‌ها",
      description: "برنامه‌نویسی شیءگرا در JavaScript",
      lessons: [
        {
          id: "js-l5-1",
          title: "اشیاء در JavaScript",
          subtitle: "ایجاد و کار با اشیاء",
          estimatedTime: 40,
          difficulty: "متوسط",
          content: `## اشیاء در JavaScript

اشیاء مجموعه‌ای از جفت‌های کلید-مقدار هستند.

### ایجاد شیء:
\`\`\`js
const user = {
    name: "Ali",
    age: 25,
    greet() {
        return \`Hello, \${this.name}\`;
    }
};
\`\`\`

### دسترسی به خواص:
\`\`\`js
user.name; // dot notation
user["name"]; // bracket notation
\`\`\`

### Destructuring:
\`\`\`js
const { name, age } = user;
\`\`\`

### Spread Operator:
\`\`\`js
const newUser = { ...user, city: "Tehran" };
\`\`\``,
          code: `// ===== ایجاد شیء =====
const user = {
    name: "Ali",
    age: 25,
    email: "ali@example.com",
    greet() {
        return \`Hello, \${this.name}\`;
    }
};

// ===== دسترسی =====
console.log(user.name); // "Ali"
console.log(user["age"]); // 25
console.log(user.greet()); // "Hello, Ali"

// ===== Destructuring =====
const { name, age, email } = user;
console.log(name); // "Ali"

// ===== Spread =====
const updatedUser = { ...user, age: 26 };
console.log(updatedUser.age); // 26

// ===== Object Methods =====
console.log(Object.keys(user)); // ["name", "age", "email", "greet"]
console.log(Object.values(user)); // ["Ali", 25, "ali@example.com", ƒ]
console.log(Object.entries(user)); // [["name", "Ali"], ...]

// ===== Computed Properties =====
const key = "score";
const obj = {
    [key]: 100
};
console.log(obj.score); // 100

// ===== Optional Chaining =====
const data = { user: { profile: { name: "Ali" } } };
console.log(data.user?.profile?.name); // "Ali"
console.log(data.user?.settings?.theme); // undefined (no error!)`,
          language: "javascript",
          tips: [
            "از destructuring برای کد تمیزتر استفاده کنید",
            "Optional chaining از خطاهای undefined جلوگیری می‌کند",
            "Spread operator برای copy و merge عالی است"
          ]
        }
      ]
    },
    {
      id: "js-ch6",
      title: "فصل ۶: الگوهای طراحی",
      description: "Design Patterns در JavaScript",
      lessons: [
        {
          id: "js-l6-1",
          title: "الگوهای رایج",
          subtitle: "Module، Observer، Singleton",
          estimatedTime: 45,
          difficulty: "پیشرفته",
          content: `## الگوهای طراحی

الگوهای طراحی راه‌حل‌های اثبات‌شده برای مشکلات رایج در برنامه‌نویسی هستند.

### Module Pattern:
\`\`\`js
const module = (function() {
    let private = "secret";
    
    return {
        getPrivate: () => private,
        setPrivate: (value) => { private = value; }
    };
})();
\`\`\`

### Observer Pattern:
\`\`\`js
class EventEmitter {
    constructor() {
        this.events = {};
    }
    
    on(event, callback) {
        if (!this.events[event]) this.events[event] = [];
        this.events[event].push(callback);
    }
    
    emit(event, data) {
        if (this.events[event]) {
            this.events[event].forEach(cb => cb(data));
        }
    }
}
\`\`\`

### Singleton Pattern:
\`\`\`js
class Singleton {
    static instance;
    
    static getInstance() {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }
}
\`\`\``,
          tips: [
            "الگوها راه‌حل‌های اثبات‌شده هستند",
            "از الگوها به درستی استفاده کنید",
            "Over-engineering نکنید"
          ]
        }
      ]
    }
  ]
};

// ============================================
// COURSE 3: React - 5 Chapters
// ============================================
const reactCourse: Course = {
  id: "react",
  title: "React.js حرفه‌ای",
  subtitle: "ساخت وب اپلیکیشن‌های مدرن",
  description: "آموزش جامع React شامل Components، Hooks، State Management و Routing",
  color: "from-cyan-500 to-blue-600",
  totalHours: 60,
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
          subtitle: "آشنایی با مفاهیم پایه",
          estimatedTime: 30,
          difficulty: "متوسط",
          interactiveType: 'comparison',
          interactiveData: {
            headers: ["ویژگی", "React", "Vue", "Angular"],
            rows: [
              ["یادگیری", "متوسط", "آسان", "سخت"],
              ["اندازه", "کوچک", "کوچک", "بزرگ"],
              ["زبان", "JavaScript", "JavaScript", "TypeScript"],
              ["Rendering", "Virtual DOM", "Virtual DOM", "Real DOM"],
              ["مناسب برای", "همه پروژه‌ها", "پروژه‌های کوچک", "پروژه‌های بزرگ"]
            ]
          },
          content: `## React چیست؟

React یک کتابخانه JavaScript برای ساخت UI است که توسط Meta (Facebook) توسعه داده شده.

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
          code: `import React from 'react';

// ===== اولین کامپوننت =====
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
            
            {/* Conditional */}
            {isLoggedIn ? (
                <p>Welcome back!</p>
            ) : (
                <p>Please login</p>
            )}
            
            {/* List */}
            <ul>
                {items.map((item, i) => (
                    <li key={i}>{item}</li>
                ))}
            </ul>
        </div>
    );
}

// ===== Props =====
function Button({ children, variant = 'primary', onClick }) {
    return (
        <button className={\`btn btn-\${variant}\`} onClick={onClick}>
            {children}
        </button>
    );
}`,
          language: "jsx",
          tips: [
            "همیشه Function Components استفاده کنید",
            "Props را destructure کنید",
            "key در list‌ها باید unique باشد"
          ]
        },
        {
          id: "react-l1-2",
          title: "State و Hooks",
          subtitle: "useState و useEffect",
          estimatedTime: 40,
          difficulty: "متوسط",
          content: `## State در React

State داده‌ای است که داخل کامپوننت مدیریت می‌شود و با تغییر آن، کامپوننت دوباره render می‌شود.

### useState:
\`\`\`jsx
const [count, setCount] = useState(0);
\`\`\`

### useEffect:
\`\`\`jsx
useEffect(() => {
    // side effect
    return () => {
        // cleanup
    };
}, [dependency]);
\`\`\`

### Rules of Hooks:
1. فقط در سطح بالای کامپوننت
2. فقط در React functions`,
          code: `import { useState, useEffect } from 'react';

function Counter() {
    const [count, setCount] = useState(0);
    
    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>
                Increment
            </button>
        </div>
    );
}

function DataFetcher({ url }) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        async function fetchData() {
            const response = await fetch(url);
            const result = await response.json();
            setData(result);
            setLoading(false);
        }
        
        fetchData();
    }, [url]);
    
    if (loading) return <p>Loading...</p>;
    return <div>{JSON.stringify(data)}</div>;
}`,
          language: "jsx",
          tips: [
            "useState برای state محلی",
            "useEffect برای side effects",
            "dependency array را درست تنظیم کنید"
          ]
        }
      ]
    },
    {
      id: "react-ch2",
      title: "فصل ۲: کامپوننت‌ها و Props",
      description: "ساخت کامپوننت‌های قابل استفاده مجدد",
      lessons: [
        {
          id: "react-l2-1",
          title: "کامپوننت‌ها",
          subtitle: "ساختار و best practices",
          estimatedTime: 35,
          difficulty: "متوسط",
          content: `## کامپوننت‌ها در React

کامپوننت‌ها بلوک‌های سازنده UI در React هستند.

### Function Components:
\`\`\`jsx
function Welcome({ name }) {
    return <h1>Hello, {name}</h1>;
}
\`\`\`

### Props:
\`\`\`jsx
<Button variant="primary" size="lg">
    Click me
</Button>
\`\`\`

### Children:
\`\`\`jsx
function Card({ children }) {
    return <div className="card">{children}</div>;
}
\`\`\``,
          code: `// ===== کامپوننت ساده =====
function Welcome({ name, role = "developer" }) {
    return (
        <div>
            <h1>Hello, {name}!</h1>
            <p>Role: {role}</p>
        </div>
    );
}

// ===== کامپوننت با Children =====
function Card({ title, children, footer }) {
    return (
        <div className="card">
            {title && <h2>{title}</h2>}
            <div className="card-body">{children}</div>
            {footer && <div className="card-footer">{footer}</div>}
        </div>
    );
}

// استفاده
<Card title="User Profile" footer={<Button>Save</Button>}>
    <p>Name: Ali</p>
    <p>Email: ali@example.com</p>
</Card>`,
          language: "jsx",
          tips: [
            "کامپوننت‌ها باید کوچک و متمرکز باشند",
            "Props را destructure کنید",
            "default values را در destructuring تعریف کنید"
          ]
        }
      ]
    },
    {
      id: "react-ch3",
      title: "فصل ۳: Hooks پیشرفته",
      description: "useContext, useReducer, Custom Hooks",
      lessons: [
        {
          id: "react-l3-1",
          title: "Custom Hooks",
          subtitle: "ساخت Hooks قابل استفاده مجدد",
          estimatedTime: 40,
          difficulty: "پیشرفته",
          content: `## Custom Hooks

Custom Hooks توابعی هستند که از Hook‌های دیگر استفاده می‌کنند و منطق قابل استفاده مجدد را استخراج می‌کنند.

### مثال:
\`\`\`jsx
function useLocalStorage(key, initialValue) {
    const [value, setValue] = useState(() => {
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) : initialValue;
    });
    
    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);
    
    return [value, setValue];
}
\`\`\``,
          code: `import { useState, useEffect } from 'react';

// ===== useLocalStorage =====
function useLocalStorage(key, initialValue) {
    const [value, setValue] = useState(() => {
        try {
            const item = localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        } catch {
            return initialValue;
        }
    });
    
    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);
    
    return [value, setValue];
}

// ===== useFetch =====
function useFetch(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        async function fetchData() {
            try {
                setLoading(true);
                const response = await fetch(url);
                const result = await response.json();
                setData(result);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }
        
        fetchData();
    }, [url]);
    
    return { data, loading, error };
}

// استفاده
function UserProfile({ userId }) {
    const { data: user, loading, error } = useFetch(\`/api/users/\${userId}\`);
    
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;
    
    return <div>{user.name}</div>;
}`,
          language: "jsx",
          tips: [
            "نام Custom Hook باید با use شروع شود",
            "منطق قابل استفاده مجدد را استخراج کنید",
            "Error handling را فراموش نکنید"
          ]
        }
      ]
    },
    {
      id: "react-ch4",
      title: "فصل ۴: State Management",
      description: "Context API و Redux",
      lessons: [
        {
          id: "react-l4-1",
          title: "Context API",
          subtitle: "مدیریت state سراسری",
          estimatedTime: 35,
          difficulty: "متوسط",
          content: `## Context API

Context API برای مدیریت state سراسری بدون prop drilling استفاده می‌شود.

### ایجاد Context:
\`\`\`jsx
const ThemeContext = createContext();
\`\`\`

### Provider:
\`\`\`jsx
<ThemeContext.Provider value={theme}>
    <App />
</ThemeContext.Provider>
\`\`\`

### مصرف:
\`\`\`jsx
const theme = useContext(ThemeContext);
\`\`\``,
          code: `import { createContext, useContext, useState } from 'react';

// ===== ایجاد Context =====
const ThemeContext = createContext();

// ===== Provider =====
function ThemeProvider({ children }) {
    const [theme, setTheme] = useState('light');
    
    const toggleTheme = () => {
        setTheme(prev => prev === 'light' ? 'dark' : 'light');
    };
    
    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

// ===== مصرف =====
function ThemedButton() {
    const { theme, toggleTheme } = useContext(ThemeContext);
    
    return (
        <button 
            onClick={toggleTheme}
            style={{ 
                background: theme === 'light' ? '#fff' : '#333',
                color: theme === 'light' ? '#333' : '#fff'
            }}
        >
            Toggle Theme
        </button>
    );
}

// ===== App =====
function App() {
    return (
        <ThemeProvider>
            <ThemedButton />
        </ThemeProvider>
    );
}`,
          language: "jsx",
          tips: [
            "Context برای state سراسری",
            "Provider را در سطح بالا قرار دهید",
            "useContext برای مصرف"
          ]
        }
      ]
    },
    {
      id: "react-ch5",
      title: "فصل ۵: Routing و Navigation",
      description: "React Router و مسیریابی",
      lessons: [
        {
          id: "react-l5-1",
          title: "React Router",
          subtitle: "مسیریابی در Single Page Applications",
          estimatedTime: 35,
          difficulty: "متوسط",
          content: `## React Router

React Router کتابخانه رسمی مسیریابی در React است.

### نصب:
\`\`\`bash
npm install react-router-dom
\`\`\`

### استفاده:
\`\`\`jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </BrowserRouter>
    );
}
\`\`\``,
          code: `import { BrowserRouter, Routes, Route, Link, useParams } from 'react-router-dom';

// ===== Pages =====
function Home() {
    return <h1>Home Page</h1>;
}

function About() {
    return <h1>About Page</h1>;
}

function User() {
    const { id } = useParams();
    return <h1>User {id}</h1>;
}

// ===== Navigation =====
function Navbar() {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/user/1">User 1</Link>
        </nav>
    );
}

// ===== App =====
function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/user/:id" element={<User />} />
            </Routes>
        </BrowserRouter>
    );
}`,
          language: "jsx",
          tips: [
            "BrowserRouter را در سطح بالا قرار دهید",
            "از Link به جای <a> استفاده کنید",
            "useParams برای پارامترهای URL"
          ]
        }
      ]
    }
  ]
};

// ============================================
// COURSE 4: Node.js - 5 Chapters
// ============================================
const nodejsCourse: Course = {
  id: "nodejs",
  title: "Node.js و Backend",
  subtitle: "ساخت سرور و API حرفه‌ای",
  description: "آموزش Node.js، Express، MongoDB و ساخت REST API",
  color: "from-green-500 to-emerald-600",
  totalHours: 50,
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
          subtitle: "آشنایی با Node.js",
          estimatedTime: 30,
          difficulty: "متوسط",
          content: `## Node.js چیست؟

Node.js یک runtime برای اجرای JavaScript خارج از مرورگر است.

### ویژگی‌ها:
- مبتنی بر V8 Engine
- Event-driven
- Non-blocking I/O
- Single-threaded

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
          code: `// ===== اولین سرور =====
const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World!');
});

server.listen(3000, () => {
    console.log('Server running on port 3000');
});

// ===== ES Modules =====
export const formatDate = (date) => {
    return new Intl.DateTimeFormat('fa-IR').format(date);
};

// ===== File System =====
import { readFile, writeFile } from 'fs/promises';

async function readConfig() {
    const data = await readFile('./config.json', 'utf-8');
    return JSON.parse(data);
}`,
          language: "javascript",
          tips: [
            "از ES Modules استفاده کنید",
            "Environment variables را در .env نگه دارید"
          ]
        },
        {
          id: "node-l1-2",
          title: "Express.js",
          subtitle: "ساخت وب سرور با Express",
          estimatedTime: 40,
          difficulty: "متوسط",
          content: `## Express.js

Express محبوب‌ترین web framework برای Node.js است.

### نصب:
\`\`\`bash
npm install express
\`\`\`

### استفاده:
\`\`\`js
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(3000);
\`\`\`

### Routing:
\`\`\`js
app.get('/users', getUsers);
app.post('/users', createUser);
app.put('/users/:id', updateUser);
app.delete('/users/:id', deleteUser);
\`\`\``,
          code: `const express = require('express');
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/api/users', (req, res) => {
    const users = [
        { id: 1, name: 'Ali' },
        { id: 2, name: 'Sara' }
    ];
    res.json({ success: true,  users });
});

app.post('/api/users', (req, res) => {
    const { name, email } = req.body;
    // Create user
    res.status(201).json({ success: true,  { name, email } });
});

app.get('/api/users/:id', (req, res) => {
    const { id } = req.params;
    // Get user by id
    res.json({ success: true,  { id, name: 'Ali' } });
});

// Error handling
app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
});

// 404 handler
app.use((req, res) => {
    res.status(404).json({ error: 'Not Found' });
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});`,
          language: "javascript",
          tips: [
            "Middleware را به ترتیب درست قرار دهید",
            "Error handling ضروری است",
            "از express.json() برای parse body استفاده کنید"
          ]
        }
      ]
    },
    {
      id: "node-ch2",
      title: "فصل ۲: REST API",
      description: "طراحی و پیاده‌سازی RESTful API",
      lessons: [
        {
          id: "node-l2-1",
          title: "مبانی REST",
          subtitle: "اصول و best practices",
          estimatedTime: 35,
          difficulty: "متوسط",
          content: `## REST API

REST (Representational State Transfer) یک سبک معماری برای طراحی API است.

### اصول REST:
1. Stateless
2. Client-Server
3. Cacheable
4. Uniform Interface
5. Layered System

### HTTP Methods:
- GET: دریافت
- POST: ایجاد
- PUT: به‌روزرسانی کامل
- PATCH: به‌روزرسانی جزئی
- DELETE: حذف

### Status Codes:
- 200: موفق
- 201: ایجاد شد
- 400: درخواست نامعتبر
- 401: غیرمجاز
- 404: یافت نشد
- 500: خطای سرور`,
          tips: [
            "از HTTP methods درست استفاده کنید",
            "Status codes مناسب برگردانید",
            "API را versioned کنید"
          ]
        }
      ]
    },
    {
      id: "node-ch3",
      title: "فصل ۳: MongoDB",
      description: "کار با دیتابیس NoSQL",
      lessons: [
        {
          id: "node-l3-1",
          title: "MongoDB و Mongoose",
          subtitle: "اتصال و کار با MongoDB",
          estimatedTime: 40,
          difficulty: "متوسط",
          content: `## MongoDB

MongoDB یک دیتابیس NoSQL مبتنی بر سند است.

### اتصال:
\`\`\`js
import mongoose from 'mongoose';
await mongoose.connect(process.env.MONGODB_URI);
\`\`\`

### Schema:
\`\`\`js
const userSchema = new mongoose.Schema({
    name: String,
    email: { type: String, unique: true },
    password: String
}, { timestamps: true });
\`\`\`

### CRUD:
\`\`\`js
// Create
await User.create({ name: 'Ali' });

// Read
const users = await User.find({});

// Update
await User.findByIdAndUpdate(id, { name: 'New' });

// Delete
await User.findByIdAndDelete(id);
\`\`\``,
          code: `import mongoose from 'mongoose';

// اتصال
await mongoose.connect(process.env.MONGODB_URI);

// Schema
const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, minlength: 8 },
    role: { type: String, enum: ['user', 'admin'], default: 'user' }
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

// CRUD Operations
const user = await User.create({ 
    name: 'Ali', 
    email: 'ali@mail.com',
    password: 'password123'
});

const users = await User.find({}).select('-password');

const updated = await User.findByIdAndUpdate(
    id, 
    { name: 'New Name' },
    { new: true }
);

await User.findByIdAndDelete(id);`,
          language: "javascript",
          tips: [
            "از lean() برای query‌های فقط خواندنی استفاده کنید",
            "Index‌ها برای فیلدهای پرکاربرد بسازید",
            "Validation سمت سرور ضروری است"
          ]
        }
      ]
    },
    {
      id: "node-ch4",
      title: "فصل ۴: Authentication",
      description: "احراز هویت و مجوزدهی",
      lessons: [
        {
          id: "node-l4-1",
          title: "JWT Authentication",
          subtitle: "پیاده‌سازی JWT",
          estimatedTime: 45,
          difficulty: "پیشرفته",
          content: `## JWT Authentication

JWT (JSON Web Token) یک استاندارد برای احراز هویت است.

### نصب:
\`\`\`bash
npm install jsonwebtoken bcryptjs
\`\`\`

### ایجاد Token:
\`\`\`js
const token = jwt.sign(
    { id: user._id },
    process.env.JWT_SECRET,
    { expiresIn: '7d' }
);
\`\`\`

### بررسی Token:
\`\`\`js
const decoded = jwt.verify(token, process.env.JWT_SECRET);
\`\`\``,
          code: `import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

// Register
app.post('/api/register', async (req, res) => {
    const { name, email, password } = req.body;
    
    // Hash password
    const hashedPassword = await bcrypt.hash(password, 12);
    
    // Create user
    const user = await User.create({
        name,
        email,
        password: hashedPassword
    });
    
    // Generate token
    const token = jwt.sign(
        { id: user._id },
        process.env.JWT_SECRET,
        { expiresIn: '7d' }
    );
    
    res.status(201).json({ success: true, token });
});

// Login
app.post('/api/login', async (req, res) => {
    const { email, password } = req.body;
    
    // Find user
    const user = await User.findOne({ email }).select('+password');
    if (!user) {
        return res.status(401).json({ error: 'Invalid credentials' });
    }
    
    // Check password
    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) {
        return res.status(401).json({ error: 'Invalid credentials' });
    }
    
    // Generate token
    const token = jwt.sign(
        { id: user._id },
        process.env.JWT_SECRET,
        { expiresIn: '7d' }
    );
    
    res.json({ success: true, token });
});

// Auth Middleware
const authenticate = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];
    
    if (!token) {
        return res.status(401).json({ error: 'No token provided' });
    }
    
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        res.status(401).json({ error: 'Invalid token' });
    }
};

// Protected Route
app.get('/api/profile', authenticate, (req, res) => {
    res.json({ user: req.user });
});`,
          language: "javascript",
          tips: [
            "رمز عبور را هرگز plain text ذخیره نکنید",
            "JWT secret را در environment variable نگه دارید",
            "Token را در httpOnly cookie ذخیره کنید"
          ]
        }
      ]
    },
    {
      id: "node-ch5",
      title: "فصل ۵: Deployment",
      description: "استقرار روی سرور",
      lessons: [
        {
          id: "node-l5-1",
          title: "استقرار اپلیکیشن",
          subtitle: "Deploy روی سرور",
          estimatedTime: 35,
          difficulty: "پیشرفته",
          content: `## Deployment

برای استقرار اپلیکیشن Node.js:

### روش‌ها:
1. VPS (DigitalOcean, AWS)
2. PaaS (Heroku, Railway)
3. Container (Docker)

### PM2:
\`\`\`bash
npm install -g pm2
pm2 start app.js
pm2 startup
pm2 save
\`\`\`

### Nginx:
\`\`\`nginx
server {
    listen 80;
    server_name example.com;
    
    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
    }
}
\`\`\``,
          tips: [
            "از PM2 برای process management استفاده کنید",
            "Nginx را به عنوان reverse proxy قرار دهید",
            "SSL را فراموش نکنید"
          ]
        }
      ]
    }
  ]
};

// ============================================
// COURSE 5: WordPress - 4 Chapters
// ============================================
const wordpressCourse: Course = {
  id: "wordpress",
  title: "وردپرس حرفه‌ای",
  subtitle: "قالب‌نویسی و افزونه‌نویسی",
  description: "آموزش وردپرس، قالب‌نویسی، افزونه‌نویسی و WooCommerce",
  color: "from-indigo-500 to-purple-600",
  totalHours: 40,
  prerequisites: ["HTML, CSS و PHP پایه"],
  outcomes: [
    "نصب و پیکربندی وردپرس",
    "قالب‌نویسی از صفر",
    "افزونه‌نویسی",
    "WooCommerce"
  ],
  chapters: [
    {
      id: "wp-ch1",
      title: "فصل ۱: مقدمه‌ای بر وردپرس",
      description: "وردپرس چیست؟",
      lessons: [
        {
          id: "wp-l1-1",
          title: "وردپرس چیست؟",
          subtitle: "آشنایی با وردپرس",
          estimatedTime: 25,
          difficulty: "مبتدی",
          content: `## وردپرس چیست؟

وردپرس یک CMS متن‌باز و رایگان است.

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
- wp-config.php: تنظیمات`,
          code: `<?php
/**
 * Template Name: صفحه اصلی
 */
get_header(); ?>

<main>
    <?php if (have_posts()) : ?>
        <?php while (have_posts()) : the_post(); ?>
            <article>
                <h2><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h2>
                <?php the_excerpt(); ?>
            </article>
        <?php endwhile; ?>
    <?php endif; ?>
</main>

<?php get_footer(); ?>`,
          language: "php",
          tips: [
            "از توابع WordPress استفاده کنید",
            "escaping را فراموش نکنید"
          ]
        }
      ]
    },
    {
      id: "wp-ch2",
      title: "فصل ۲: قالب‌نویسی",
      description: "ساخت قالب سفارشی",
      lessons: [
        {
          id: "wp-l2-1",
          title: "ساختار قالب",
          subtitle: "فایل‌های ضروری قالب",
          estimatedTime: 35,
          difficulty: "متوسط",
          content: `## ساختار قالب وردپرس

### فایل‌های ضروری:
- style.css (با هدر قالب)
- index.php

### فایل‌های اختیاری:
- header.php
- footer.php
- sidebar.php
- single.php
- page.php
- archive.php
- functions.php

### Template Hierarchy:
وردپرس بر اساس نوع درخواست، فایل template مناسب را انتخاب می‌کند.`,
          code: `<?php
// functions.php

// ثبت منوها
function mytheme_setup() {
    register_nav_menus(array(
        'primary' => __('منوی اصلی', 'mytheme'),
        'footer' => __('منوی فوتر', 'mytheme'),
    ));
    
    add_theme_support('post-thumbnails');
    add_theme_support('title-tag');
}
add_action('after_setup_theme', 'mytheme_setup');

// Enqueue styles & scripts
function mytheme_scripts() {
    wp_enqueue_style('mytheme-style', get_stylesheet_uri());
    wp_enqueue_script('mytheme-script', get_template_directory_uri() . '/js/main.js', array('jquery'), '1.0', true);
}
add_action('wp_enqueue_scripts', 'mytheme_scripts');

// ثبت Sidebar
function mytheme_widgets() {
    register_sidebar(array(
        'name' => __('سایدبار اصلی', 'mytheme'),
        'id' => 'sidebar-1',
        'before_widget' => '<div class="widget">',
        'after_widget' => '</div>',
        'before_title' => '<h3 class="widget-title">',
        'after_title' => '</h3>',
    ));
}
add_action('widgets_init', 'mytheme_widgets');`,
          language: "php",
          tips: [
            "functions.php قلب قالب است",
            "از Child Theme برای تغییرات استفاده کنید",
            "wp_enqueue برای styles و scripts"
          ]
        }
      ]
    },
    {
      id: "wp-ch3",
      title: "فصل ۳: افزونه‌نویسی",
      description: "ساخت افزونه‌های سفارشی",
      lessons: [
        {
          id: "wp-l3-1",
          title: "ساخت افزونه",
          subtitle: "ایجاد اولین افزونه",
          estimatedTime: 40,
          difficulty: "پیشرفته",
          content: `## افزونه‌نویسی وردپرس

### ساختار افزونه:
\`\`\`
my-plugin/
├── my-plugin.php
├── includes/
├── admin/
├── public/
└── readme.txt
\`\`\`

### هدر افزونه:
\`\`\`php
<?php
/**
 * Plugin Name: My Plugin
 * Description: توضیحات
 * Version: 1.0
 * Author: نام شما
 */
\`\`\``,
          code: `<?php
/**
 * Plugin Name: My Custom Plugin
 * Description: یک افزونه نمونه
 * Version: 1.0
 * Author: Your Name
 */

// جلوگیری از دسترسی مستقیم
if (!defined('ABSPATH')) {
    exit;
}

// Activation Hook
register_activation_hook(__FILE__, 'myplugin_activate');
function myplugin_activate() {
    // کد فعال‌سازی
}

// Deactivation Hook
register_deactivation_hook(__FILE__, 'myplugin_deactivate');
function myplugin_deactivate() {
    // کد غیرفعال‌سازی
}

// Admin Menu
add_action('admin_menu', 'myplugin_admin_menu');
function myplugin_admin_menu() {
    add_menu_page(
        'My Plugin',
        'My Plugin',
        'manage_options',
        'myplugin',
        'myplugin_admin_page',
        'dashicons-admin-generic',
        100
    );
}

function myplugin_admin_page() {
    ?>
    <div class="wrap">
        <h1>My Plugin Settings</h1>
        <form method="post" action="options.php">
            <?php
            settings_fields('myplugin_options');
            do_settings_sections('myplugin');
            submit_button();
            ?>
        </form>
    </div>
    <?php
}

// Shortcode
add_shortcode('myplugin_shortcode', 'myplugin_shortcode_callback');
function myplugin_shortcode_callback($atts) {
    $atts = shortcode_atts(array(
        'id' => 1,
        'title' => 'Default Title'
    ), $atts);
    
    return "<div class='myplugin'>{$atts['title']}</div>";
}

// Custom Post Type
add_action('init', 'myplugin_register_post_type');
function myplugin_register_post_type() {
    register_post_type('myplugin_item', array(
        'labels' => array(
            'name' => __('Items', 'myplugin'),
            'singular_name' => __('Item', 'myplugin')
        ),
        'public' => true,
        'has_archive' => true,
        'supports' => array('title', 'editor', 'thumbnail')
    ));
}`,
          language: "php",
          tips: [
            "از Hook‌ها استفاده کنید",
            "Security را جدی بگیرید",
            "از Nonce برای فرم‌ها استفاده کنید"
          ]
        }
      ]
    },
    {
      id: "wp-ch4",
      title: "فصل ۴: WooCommerce",
      description: "فروشگاه‌ساز وردپرس",
      lessons: [
        {
          id: "wp-l4-1",
          title: "WooCommerce",
          subtitle: "راه‌اندازی فروشگاه",
          estimatedTime: 35,
          difficulty: "متوسط",
          content: `## WooCommerce

WooCommerce افزونه فروشگاه‌ساز وردپرس است.

### نصب:
از مخزن وردپرس نصب کنید.

### پیکربندی:
1. تنظیمات عمومی
2. محصولات
3. دسته‌بندی‌ها
4. روش‌های پرداخت
5. روش‌های ارسال

### Template Overrides:
می‌توانید template‌های WooCommerce را در قالب خود override کنید.`,
          tips: [
            "از Child Theme استفاده کنید",
            "Template overrides را در پوشه قالب قرار دهید",
            "از Hooks برای تغییرات استفاده کنید"
          ]
        }
      ]
    }
  ]
};

// ============================================
// COURSE 6: MongoDB - 3 Chapters
// ============================================
const mongodbCourse: Course = {
  id: "mongodb",
  title: "MongoDB و Mongoose",
  subtitle: "طراحی و مدیریت دیتابیس",
  description: "آموزش MongoDB، Mongoose، Schema Design و بهینه‌سازی",
  color: "from-emerald-500 to-teal-600",
  totalHours: 30,
  prerequisites: ["Node.js و Express"],
  outcomes: [
    "طراحی Schema",
    "کوئری‌های پیچیده",
    "Aggregation Pipeline",
    "بهینه‌سازی Performance"
  ],
  chapters: [
    {
      id: "mongo-ch1",
      title: "فصل ۱: مقدمه‌ای بر MongoDB",
      description: "MongoDB چیست؟",
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
- Middleware`,
          code: `import mongoose from 'mongoose';

await mongoose.connect(process.env.MONGODB_URI);

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

const user = await User.create({ name: 'Ali', email: 'ali@mail.com' });
const users = await User.find({});
const updated = await User.findByIdAndUpdate(id, { name: 'New' });
await User.findByIdAndDelete(id);`,
          language: "javascript",
          tips: [
            "از lean() برای query‌های فقط خواندنی استفاده کنید",
            "Index‌ها برای فیلدهای پرکاربرد بسازید"
          ]
        }
      ]
    },
    {
      id: "mongo-ch2",
      title: "فصل ۲: Schema Design",
      description: "طراحی Schema حرفه‌ای",
      lessons: [
        {
          id: "mongo-l2-1",
          title: "طراحی Schema",
          subtitle: "Embedding vs Referencing",
          estimatedTime: 40,
          difficulty: "پیشرفته",
          content: `## Schema Design

### Embedding:
داده مرتبط را درون سند اصلی ذخیره می‌کنیم.

### Referencing:
فقط ID را ذخیره و با populate داده مرتبط را می‌گیریم.

### کی از کدام استفاده کنیم؟
- Embedding: داده‌های کوچک و همیشه همراه
- Referencing: داده‌های بزرگ یا shared`,
          tips: [
            "Embedding برای performance بهتر",
            "Referencing برای داده‌های بزرگ",
            "1:60 rule را در نظر بگیرید"
          ]
        }
      ]
    },
    {
      id: "mongo-ch3",
      title: "فصل ۳: Aggregation",
      description: "Aggregation Pipeline",
      lessons: [
        {
          id: "mongo-l3-1",
          title: "Aggregation Pipeline",
          subtitle: "کوئری‌های پیچیده",
          estimatedTime: 45,
          difficulty: "پیشرفته",
          content: `## Aggregation Pipeline

Aggregation Pipeline برای محاسبات پیچیده استفاده می‌شود.

### Stages:
- $match: فیلتر
- $group: گروه‌بندی
- $sort: مرتب‌سازی
- $limit: محدود کردن
- $lookup: Join
- $project: انتخاب فیلدها`,
          code: `const stats = await Product.aggregate([
    { $match: { status: 'active' } },
    {
        $group: {
            _id: '$category',
            count: { $sum: 1 },
            avgPrice: { $avg: '$price' },
            totalRevenue: { $sum: '$revenue' }
        }
    },
    { $sort: { totalRevenue: -1 } },
    { $limit: 10 }
]);`,
          language: "javascript",
          tips: [
            "$match را اول قرار دهید",
            "از Index‌ها استفاده کنید",
            "allowDiskUse برای داده‌های بزرگ"
          ]
        }
      ]
    }
  ]
};

// ============================================
// COURSE 7: DevOps - 3 Chapters
// ============================================
const devopsCourse: Course = {
  id: "devops",
  title: "استقرار و DevOps",
  subtitle: "Deploy و مدیریت سرور",
  description: "آموزش Docker، CI/CD، مدیریت سرور",
  color: "from-violet-500 to-purple-600",
  totalHours: 25,
  prerequisites: ["آشنایی با Linux"],
  outcomes: [
    "کار با Docker",
    "CI/CD Pipeline",
    "مدیریت سرور",
    "Nginx و SSL"
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
- Scalability`,
          code: `# Dockerfile
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
EXPOSE 3000
CMD ["npm", "start"]`,
          language: "dockerfile",
          tips: [
            "از multi-stage builds استفاده کنید",
            "از alpine base images استفاده کنید"
          ]
        }
      ]
    },
    {
      id: "devops-ch2",
      title: "فصل ۲: CI/CD",
      description: "Continuous Integration/Deployment",
      lessons: [
        {
          id: "devops-l2-1",
          title: "GitHub Actions",
          subtitle: "اتوماسیون فرآیندها",
          estimatedTime: 35,
          difficulty: "پیشرفته",
          content: `## CI/CD

CI/CD فرآیند خودکارسازی build، test و deploy است.

### GitHub Actions:
\`\`\`yaml
name: CI
on: [push]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - run: npm install
      - run: npm test
\`\`\``,
          tips: [
            "Test‌ها را خودکار کنید",
            "Deploy را خودکار کنید",
            "Environment secrets را مدیریت کنید"
          ]
        }
      ]
    },
    {
      id: "devops-ch3",
      title: "فصل ۳: Server Management",
      description: "مدیریت سرور Linux",
      lessons: [
        {
          id: "devops-l3-1",
          title: "Linux Basics",
          subtitle: "دستورات پایه Linux",
          estimatedTime: 30,
          difficulty: "متوسط",
          content: `## Linux

### دستورات پایه:
\`\`\`bash
ls -la
cd /path
pwd
mkdir directory
rm -rf directory
cp source dest
mv source dest
chmod 755 file
chown user:group file
\`\`\`

### Package Management:
\`\`\`bash
sudo apt update
sudo apt install package
\`\`\``,
          tips: [
            "از SSH keys استفاده کنید",
            "Fail2ban نصب کنید",
            "Backup منظم داشته باشید"
          ]
        }
      ]
    }
  ]
};

// ============================================
// COURSE 8: Career - 3 Chapters
// ============================================
const careerCourse: Course = {
  id: "career",
  title: "آمادگی بازار کار",
  subtitle: "ورود حرفه‌ای به صنعت وب",
  description: "راهنمای جامع ورود به بازار کار",
  color: "from-amber-500 to-orange-600",
  totalHours: 15,
  prerequisites: ["تسلط بر حداقل یک مسیر"],
  outcomes: [
    "ساخت پورتفولیو",
    "نوشتن رزومه",
    "آمادگی مصاحبه",
    "توسعه برند شخصی"
  ],
  chapters: [
    {
      id: "career-ch1",
      title: "فصل ۱: مسیرهای شغلی",
      description: "کدام مسیر مناسب شماست؟",
      lessons: [
        {
          id: "career-l1-1",
          title: "مسیرهای شغلی در وب",
          subtitle: "Frontend, Backend, Full Stack",
          estimatedTime: 30,
          difficulty: "مبتدی",
          content: `## مسیرهای شغلی

### ۱. Frontend Developer
**تمرکز:** UI/UX

### ۲. Backend Developer
**تمرکز:** سرور، API

### ۳. Full Stack Developer
**تمرکز:** ترکیب Frontend و Backend

### ۴. WordPress Developer
**تمرکز:** قالب‌نویسی و افزونه‌نویسی

### ۵. DevOps Engineer
**تمرکز:** زیرساخت و اتوماسیون`,
          tips: [
            "پورتفولیو قوی‌تر از مدرک است",
            "پروژه‌های واقعی بسازید"
          ]
        }
      ]
    },
    {
      id: "career-ch2",
      title: "فصل ۲: رزومه و پورتفولیو",
      description: "ساخت رزومه و پورتفولیوی حرفه‌ای",
      lessons: [
        {
          id: "career-l2-1",
          title: "ساخت پورتفولیو",
          subtitle: "نمایش پروژه‌ها",
          estimatedTime: 35,
          difficulty: "متوسط",
          content: `## پورتفولیو

### ساختار:
1. Hero Section
2. About
3. Projects (3-5 پروژه برتر)
4. Skills
5. Contact

### نکات:
- پروژه‌های واقعی
- کد تمیز
- Live Demo
- GitHub Repository`,
          tips: [
            "کیفیت مهم‌تر از کمیت",
            "README خوب بنویسید",
            "Live Demo داشته باشید"
          ]
        }
      ]
    },
    {
      id: "career-ch3",
      title: "فصل ۳: مصاحبه فنی",
      description: "آمادگی برای مصاحبه",
      lessons: [
        {
          id: "career-l3-1",
          title: "مصاحبه فنی",
          subtitle: "سوالات رایج و نحوه پاسخ",
          estimatedTime: 40,
          difficulty: "متوسط",
          content: `## مصاحبه فنی

### انواع سوالات:
1. Technical Questions
2. Coding Challenges
3. System Design
4. Behavioral Questions

### آمادگی:
- مرور مفاهیم پایه
- تمرین الگوریتم
- مرور پروژه‌ها
- تمرین صحبت کردن`,
          tips: [
            "صداقت مهم‌تر از همه چیز",
            "اگر نمی‌دانید، بگویید نمی‌دانم",
            "سوالات خوب بپرسید"
          ]
        }
      ]
    }
  ]
};

// ============================================
// Export All Courses
// ============================================
export const courses: Course[] = [
  htmlCssCourse,
  javascriptCourse,
  reactCourse,
  nodejsCourse,
  wordpressCourse,
  mongodbCourse,
  devopsCourse,
  careerCourse
];
