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
  interactiveType?: 'playground' | 'diagram' | 'quiz' | 'tabs' | 'comparison';
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

export const courses: Course[] = [
  {
    id: "html-css",
    title: "HTML و CSS جامع",
    subtitle: "از صفر تا طراحی حرفه‌ای",
    description: "کتاب کامل HTML و CSS شامل ۷ فصل و بیش از ۲۰ درس. از مفاهیم پایه تا تکنیک‌های پیشرفته.",
    color: "from-orange-500 to-red-500",
    totalHours: 80,
    prerequisites: ["آشنایی با کامپیوتر"],
    outcomes: [
      "تسلط بر HTML5 و عناصر معنایی",
      "طراحی ریسپانسیو با Flexbox و Grid",
      "ایجاد انیمیشن‌های حرفه‌ای",
      "نوشتن کد تمیز و قابل نگهداری",
      "آشنایی با CSS Architecture و BEM",
      "بهینه‌سازی Performance صفحات"
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
            estimatedTime: 35,
            difficulty: "مبتدی",
            interactiveType: 'diagram',
            interactiveData: { diagramType: 'web-flow' },
            content: `## اینترنت و World Wide Web

بسیاری از افراد اینترنت و وب را یکسان می‌پندارند، اما این دو مفاهیم کاملاً متفاوتی هستند و درک تفاوت آن‌ها برای هر توسعه‌دهنده وب ضروری است.

### اینترنت (Internet)

اینترنت یک شبکه جهانی عظیم از شبکه‌های کامپیوتری است که با استفاده از پروتکل TCP/IP به یکدیگر متصل شده‌اند. این زیرساخت فیزیکی و منطقی، امکان انتقال داده‌ها بین میلیاردها دستگاه در سراسر جهان را فراهم می‌کند. اینترنت شامل سرورها، روترها، کابل‌های زیردریایی، ماهواره‌ها و تجهیزات شبکه‌ای مختلفی است که همگی با هم کار می‌کنند تا ارتباط بین دستگاه‌ها ممکن شود.

### World Wide Web (WWW)

وب تنها یکی از سرویس‌هایی است که روی اینترنت اجرا می‌شود. وب مجموعه‌ای از اسناد و منابع interconnected است که با URL شناسایی می‌شوند و از طریق پروتکل HTTP/HTTPS قابل دسترسی هستند. این اسناد معمولاً با HTML نوشته می‌شوند و می‌توانند شامل متن، تصاویر، ویدیو، صوت و سایر انواع محتوا باشند.

سرویس‌های دیگری نیز روی اینترنت وجود دارند مانند:
- **Email**: برای ارسال و دریافت ایمیل (SMTP, IMAP, POP3)
- **FTP**: برای انتقال فایل
- **SSH**: برای دسترسی امن به سرورها
- **DNS**: برای ترجمه نام دامنه به IP

### پروتکل HTTP/HTTPS

HTTP (HyperText Transfer Protocol) پروتکل اصلی انتقال داده در وب است. این پروتکل بر اساس مدل request/response کار می‌کند و در لایه application از مدل OSI قرار دارد.

**ساختار درخواست HTTP:**
- **Request Line**: شامل method، URL و نسخه HTTP
- **Headers**: اطلاعات اضافی مانند Content-Type، User-Agent، Authorization
- **Body**: داده‌های ارسالی (در POST و PUT)

**HTTP Methods:**
- **GET**: دریافت منبع (بدون تغییر)
- **POST**: ایجاد منبع جدید
- **PUT**: به‌روزرسانی کامل منبع
- **PATCH**: به‌روزرسانی جزئی منبع
- **DELETE**: حذف منبع
- **HEAD**: مانند GET ولی فقط headers
- **OPTIONS**: اطلاعات درباره گزینه‌های موجود

**ساختار پاسخ HTTP:**
- **Status Line**: نسخه HTTP و status code
- **Headers**: اطلاعات پاسخ
- **Body**: محتوای پاسخ

**Status Codes:**
- **1xx**: اطلاعاتی
- **2xx**: موفق (200 OK, 201 Created, 204 No Content)
- **3xx**: ریدایرکت (301 Moved, 302 Found, 304 Not Modified)
- **4xx**: خطای کلاینت (400 Bad Request, 401 Unauthorized, 403 Forbidden, 404 Not Found)
- **5xx**: خطای سرور (500 Internal Server Error, 502 Bad Gateway, 503 Service Unavailable)

**HTTPS** نسخه امن HTTP است که با SSL/TLS رمزنگاری می‌شود. این رمزنگاری از حملات man-in-the-middle جلوگیری می‌کند و حریم خصوصی کاربران را حفظ می‌کند.

### DNS (Domain Name System)

DNS مانند دفترچه تلفن اینترنت عمل می‌کند و نام دامنه‌های خوانا برای انسان (مثل google.com) را به آدرس‌های IP عددی (مثل 142.250.185.78) تبدیل می‌کند.

**مراحل Resolution:**
1. مرورگر cache محلی را بررسی می‌کند
2. سیستم عامل cache را بررسی می‌کند
3. DNS resolver محلی پرس‌وجو می‌شود
4. Root server پرس‌وجو می‌شود
5. TLD server پرس‌وجو می‌شود
6. Authoritative server پرس‌وجو می‌شود
7. IP دریافت و cache می‌شود

### مراحل بارگذاری یک صفحه وب

وقتی کاربر URL را وارد می‌کند:
1. مرورگر URL را parse می‌کند
2. DNS lookup انجام می‌شود
3. TCP connection برقرار می‌شود (Three-way handshake)
4. TLS handshake (در HTTPS)
5. درخواست HTTP ارسال می‌شود
6. سرور درخواست را پردازش می‌کند
7. پاسخ HTTP ارسال می‌شود
8. مرورگر HTML را parse می‌کند و DOM Tree می‌سازد
9. CSS parse می‌شود و CSSOM Tree ساخته می‌شود
10. DOM و CSSOM ترکیب شده و Render Tree ساخته می‌شود
11. Layout محاسبه می‌شود
12. صفحه Paint می‌شود
13. Compositing انجام می‌شود

### مرورگرها و موتورهای رندر

هر مرورگر از موتورهای مختلفی استفاده می‌کند:

**Chrome/Edge**: Blink (rendering) + V8 (JavaScript)
**Firefox**: Gecko (rendering) + SpiderMonkey (JavaScript)
**Safari**: WebKit (rendering) + JavaScriptCore

این موتورها مسئول parse کردن HTML/CSS، ساخت DOM/CSSOM، محاسبه layout، paint و compositing هستند.`,
            tips: [
              "همیشه از HTTPS استفاده کنید",
              "DNS cache می‌تواند performance را بهبود دهد",
              "Status codes را بشناسید برای debugging بهتر",
              "HTTP/2 و HTTP/3 performance بهتری دارند"
            ],
            warnings: [
              "هرگز اطلاعات حساس را با HTTP ارسال نکنید",
              "Status code‌ها را درست استفاده کنید",
              "CORS را درست پیکربندی کنید"
            ]
          },
          {
            id: "html-l1-2",
            title: "ساختار سند HTML",
            subtitle: "DOCTYPE, html, head, body",
            estimatedTime: 40,
            difficulty: "مبتدی",
            interactiveType: 'diagram',
            interactiveData: { diagramType: 'dom-tree' },
            content: `## ساختار پایه یک سند HTML

هر سند HTML از یک ساختار مشخص و استاندارد پیروی می‌کند. درک این ساختار برای نوشتن کد معتبر و قابل فهم ضروری است.

### DOCTYPE Declaration

خط اول هر سند HTML باید DOCTYPE declaration باشد:

\`<!DOCTYPE html>\`

این declaration به مرورگر می‌گوید که سند از HTML5 استفاده می‌کند. DOCTYPE یک تگ نیست، بلکه یک دستورالعمل برای مرورگر است.

**اهمیت DOCTYPE:**
- حالت Standards Mode را فعال می‌کند
- از Quirks Mode جلوگیری می‌کند
- رندر سازگار بین مرورگرها را تضمین می‌کند

### عنصر html

\`<html>\` عنصر ریشه سند است که تمام محتوای صفحه را در بر می‌گیرد.

**Attribute‌های مهم:**
- \`lang="fa"\` - زبان اصلی صفحه (ISO 639-1)
- \`dir="rtl"\` - جهت متن (rtl برای فارسی/عربی)

**اهمیت lang:**
- صفحه‌خوان‌ها تلفظ درست را انتخاب می‌کنند
- موتورهای جستجو زبان را تشخیص می‌دهند
- مرورگرها ترجمه خودکار را پیشنهاد می‌دهند

### بخش head

\`<head>\` شامل metadata و منابع صفحه است. این بخش برای کاربر قابل مشاهده نیست ولی برای مرورگر و موتورهای جستجو بسیار مهم است.

**عناصر مهم در head:**

**Meta Tags:**
\`\`\`html
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="توضیحات صفحه">
<meta name="keywords" content="کلمات کلیدی">
<meta name="author" content="نام نویسنده">
\`\`\`

**Viewport Meta Tag:**
این تگ برای طراحی ریسپانسیو ضروری است:
- \`width=device-width\`: عرض صفحه را با عرض دستگاه تنظیم می‌کند
- \`initial-scale=1.0\`: zoom اولیه را تنظیم می‌کند
- \`maximum-scale\`: حداکثر zoom
- \`user-scalable\`: امکان zoom توسط کاربر

**Title:**
\`<title>\` عنوان صفحه است که در:
- تب مرورگر
- نتایج جستجو
- بوکمارک‌ها
نمایش داده می‌شود. برای SEO بسیار مهم است و باید:
- منحصر به فرد باشد
- ۵۰-۶۰ کاراکتر باشد
- کلمات کلیدی مهم را شامل شود

**Link Tags:**
\`\`\`html
<link rel="stylesheet" href="styles.css">
<link rel="icon" href="favicon.ico">
<link rel="preconnect" href="https://fonts.googleapis.com">
\`\`\`

**Open Graph Tags:**
برای اشتراک‌گذاری در شبکه‌های اجتماعی:
\`\`\`html
<meta property="og:title" content="عنوان">
<meta property="og:description" content="توضیحات">
<meta property="og:image" content="image.jpg">
<meta property="og:url" content="https://example.com">
\`\`\`

### بخش body

\`<body>\` شامل محتوای قابل مشاهده صفحه است. تمام عناصری که کاربر می‌بیند در body قرار می‌گیرند.

**ساختار معمول body:**
\`\`\`html
<body>
    <header>...</header>
    <nav>...</nav>
    <main>
        <article>...</article>
    </main>
    <aside>...</aside>
    <footer>...</footer>
</body>
\`\`\`

### ترتیب بهینه اسکریپت‌ها

برای performance بهتر:
1. CSS در head (برای جلوگیری از FOUC)
2. JavaScript در انتهای body
3. یا از \`defer\` و \`async\` استفاده کنید:
   - \`defer\`: بعد از parse HTML اجرا می‌شود
   - \`async\`: به محض دانلود اجرا می‌شود

### اعتبارسنجی HTML

برای اطمینان از معتبر بودن HTML:
- از W3C Validator استفاده کنید
- ساختار تگ‌ها را درست ببندید
- Attribute‌ها را درست بنویسید
- از عناصر معنایی استفاده کنید`,
            code: `<!DOCTYPE html>
<html lang="fa" dir="rtl">
<head>
    <!-- Meta Tags -->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="توضیحات صفحه برای SEO">
    <meta name="keywords" content="HTML, CSS, Web Development">
    <meta name="author" content="نام شما">
    <meta name="robots" content="index, follow">
    
    <!-- Open Graph -->
    <meta property="og:title" content="عنوان صفحه">
    <meta property="og:description" content="توضیحات صفحه">
    <meta property="og:image" content="https://example.com/image.jpg">
    <meta property="og:url" content="https://example.com/page">
    <meta property="og:type" content="website">
    
    <!-- Twitter Card -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="عنوان">
    <meta name="twitter:description" content="توضیحات">
    
    <!-- Title -->
    <title>عنوان صفحه - نام سایت</title>
    
    <!-- Favicon -->
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
    <link rel="apple-touch-icon" href="/apple-touch-icon.png">
    
    <!-- Preconnect for Performance -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    
    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Vazirmatn:wght@400;500;700&display=swap" rel="stylesheet">
    
    <!-- Stylesheets -->
    <link rel="stylesheet" href="css/reset.css">
    <link rel="stylesheet" href="css/main.css">
    
    <!-- Canonical URL -->
    <link rel="canonical" href="https://example.com/page">
    
    <!-- Structured Data -->
    <script type="application/ld+json">
    {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "عنوان صفحه",
        "description": "توضیحات"
    }
    </script>
</head>
<body>
    <!-- Skip Link for Accessibility -->
    <a href="#main-content" class="skip-link">پرش به محتوای اصلی</a>
    
    <!-- Header -->
    <header role="banner">
        <div class="container">
            <h1>عنوان سایت</h1>
            <nav role="navigation" aria-label="ناوبری اصلی">
                <ul>
                    <li><a href="/">خانه</a></li>
                    <li><a href="/about">درباره</a></li>
                    <li><a href="/contact">تماس</a></li>
                </ul>
            </nav>
        </div>
    </header>
    
    <!-- Main Content -->
    <main id="main-content" role="main">
        <article>
            <header>
                <h2>عنوان مقاله</h2>
                <time datetime="2024-01-15">۲۶ دی ۱۴۰۲</time>
            </header>
            
            <p>محتوای مقاله...</p>
        </article>
    </main>
    
    <!-- Footer -->
    <footer role="contentinfo">
        <div class="container">
            <p>&copy; ۱۴۰۳ نام سایت. تمامی حقوق محفوظ است.</p>
        </div>
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
              "Open Graph tags برای اشتراک‌گذاری در شبکه‌های اجتماعی",
              "از defer برای script‌ها استفاده کنید"
            ],
            warnings: [
              "هرگز DOCTYPE را فراموش نکنید",
              "charset را در ۱۰۲۴ بایت اول قرار دهید",
              "viewport meta tag را حذف نکنید"
            ]
          }
        ]
      },
      {
        id: "html-ch2",
        title: "فصل ۲: عناصر معنایی",
        description: "ساختاردهی هوشمند محتوا",
        lessons: [
          {
            id: "html-l2-1",
            title: "عناصر معنایی ساختاری",
            subtitle: "header, nav, main, footer",
            estimatedTime: 45,
            difficulty: "مبتدی",
            interactiveType: 'diagram',
            interactiveData: { diagramType: 'semantic-layout' },
            content: `## عناصر معنایی ساختاری

عناصر معنایی تگ‌هایی هستند که معنای محتوای خود را به طور واضح بیان می‌کنند. استفاده از این عناصر به جای \`<div>\` مزایای زیادی دارد.

### چرا عناصر معنایی مهم هستند؟

**۱. دسترسی‌پذیری (Accessibility):**
صفحه‌خوان‌ها و ابزارهای کمکی می‌توانند ساختار صفحه را بهتر درک کنند و برای کاربران نابینا تجربه بهتری فراهم کنند.

**۲. سئو (SEO):**
موتورهای جستجو مانند گوگل، ساختار معنایی صفحه را بهتر درک می‌کنند و رتبه بهتری به صفحات معنایی می‌دهند.

**۳. خوانایی کد:**
کد HTML معنایی برای توسعه‌دهندگان دیگر قابل فهم‌تر است و نگهداری آن آسان‌تر است.

**۴. نگهداری آسان‌تر:**
ساختار مشخص، تغییرات آینده را ساده‌تر می‌کند.

### عناصر اصلی

**header:** سربرگ صفحه یا بخش. معمولاً شامل لوگو، عنوان و navigation است.

**nav:** بخش ناوبری. لینک‌های اصلی سایت را شامل می‌شود.

**main:** محتوای اصلی صفحه. فقط یکبار در هر صفحه استفاده می‌شود.

**article:** محتوای مستقل و کامل مثل یک پست بلاگ، یک کامنت یا یک محصول.

**section:** بخش‌بندی موضوعی محتوا. معمولاً یک عنوان دارد.

**aside:** محتوای جانبی مثل sidebar، تبلیغات یا لینک‌های مرتبط.

**footer:** پاورقی صفحه یا بخش. شامل اطلاعات تماس، کپی‌رایت و لینک‌های مفید است.

**figure:** محتوای تصویری

**figcaption:** توضیح تصویر

**details/summary:** محتوای قابل باز/بسته شدن

**time:** تاریخ و زمان

**address:** اطلاعات تماس

**mark:** متن هایلایت شده

**blockquote:** نقل قول بلند

### تفاوت‌های مهم

**article vs section:**
- **article**: محتوایی که به تنهایی معنادار است و می‌تواند مستقل توزیع شود
- **section**: بخش‌بندی موضوعی محتوا که معمولاً یک عنوان دارد

**div vs section:**
- **div**: بدون معنای خاص، فقط برای grouping و استایل‌دهی
- **section**: بخش معنایی از محتوا با موضوع مشخص

### Best Practices

1. از عناصر معنایی به جای div استفاده کنید
2. فقط یک main در هر صفحه داشته باشید
3. سلسله‌مراتب عناوین را رعایت کنید (h1 تا h6)
4. از aria-label برای توضیح نقش عناصر استفاده کنید
5. هر article باید به تنهایی معنادار باشد`,
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
              "از aria-label برای توضیح نقش عناصر استفاده کنید",
              "سلسله‌مراتب عناوین را رعایت کنید"
            ],
            warnings: [
              "از div به جای عناصر معنایی استفاده نکنید",
              "چندین main در یک صفحه نداشته باشید",
              "عناوین را بدون ترتیب استفاده نکنید"
            ]
          }
        ]
      },
      {
        id: "css-ch3",
        title: "فصل ۳: مبانی CSS",
        description: "انتخابگرها و Box Model",
        lessons: [
          {
            id: "css-l3-1",
            title: "مقدمه‌ای بر CSS",
            subtitle: "CSS چیست؟",
            estimatedTime: 40,
            difficulty: "مبتدی",
            interactiveType: 'diagram',
            interactiveData: { diagramType: 'box-model' },
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
          }
        ]
      },
      {
        id: "css-ch4",
        title: "فصل ۴: Flexbox",
        description: "چیدمان انعطاف‌پذیر",
        lessons: [
          {
            id: "css-l4-1",
            title: "مبانی Flexbox",
            subtitle: "Container و Items",
            estimatedTime: 50,
            difficulty: "متوسط",
            interactiveType: 'diagram',
            interactiveData: { diagramType: 'flexbox' },
            content: `## Flexbox چیست؟

Flexbox یک مدل چیدمان یک‌بعدی برای طراحی رابط‌های کاربری انعطاف‌پذیر است. Flexbox کار توزیع فضا و تراز آیتم‌ها در یک کانتینر را بسیار ساده می‌کند.

## مفاهیم اصلی

### Flex Container و Flex Items:

- **Flex Container**: عنصر والد که \`display: flex\` دارد
- **Flex Items**: فرزندان مستقیم container

### محورهای اصلی:

- **Main Axis**: محور اصلی (پیش‌فرض: افقی - چپ به راست)
- **Cross Axis**: محور عرضی (عمود بر main axis)

جهت main axis با \`flex-direction\` تعیین می‌شود.

## خواص Container

### display: flex
کانتینر را به flex container تبدیل می‌کند.

### flex-direction
جهت main axis را مشخص می‌کند:
- \`row\` (پیش‌فرض): چپ به راست (در RTL راست به چپ)
- \`row-reverse\`: برعکس row
- \`column\`: بالا به پایین
- \`column-reverse\`: پایین به بالا

### justify-content
تراز در main axis:
- \`flex-start\`: ابتدا
- \`flex-end\`: انتها
- \`center\`: وسط
- \`space-between\`: فاصله مساوی بین آیتم‌ها
- \`space-around\`: فاصله مساوی دور آیتم‌ها
- \`space-evenly\`: فاصله کاملاً مساوی

### align-items
تراز در cross axis:
- \`stretch\` (پیش‌فرض): کشیدن به ارتفاع container
- \`flex-start\`: بالا
- \`flex-end\`: پایین
- \`center\`: وسط
- \`baseline\`: تراز بر اساس baseline متن

### align-content
تراز خطوط متعدد (وقتی wrap فعال است):
- مقادیر مشابه justify-content

### flex-wrap
آیا آیتم‌ها به خط بعد بروند:
- \`nowrap\` (پیش‌فرض): همه در یک خط
- \`wrap\`: شکستن به خطوط جدید
- \`wrap-reverse\`: شکستن برعکس

### gap
فاصله بین آیتم‌ها (جایگزین margin):
- \`gap: 20px\` - فاصله یکسان
- \`gap: 20px 30px\` - row-gap و column-gap

## خواص Items

### flex-grow
میزان رشد آیتم نسبت به بقیه (پیش‌فرض: 0)

### flex-shrink
میزان انقباض آیتم (پیش‌فرض: 1)

### flex-basis
اندازه اولیه قبل از توزیع فضای خالی (پیش‌فرض: auto)

### flex (shorthand)
\`flex: grow shrink basis\` - مثال: \`flex: 1 0 200px\`

### align-self
تراز شخصی (override align-items)

### order
ترتیب نمایش (پیش‌فرض: 0)`,
            code: `/* ===== راه‌اندازی Flexbox ===== */
.flex-container {
    display: flex;
    /* direction: row | row-reverse | column | column-reverse */
    flex-direction: row;
    /* wrap: nowrap | wrap | wrap-reverse */
    flex-wrap: wrap;
    /* shorthand */
    /* flex-flow: row wrap; */
}

/* ===== تراز در Main Axis ===== */

/* فاصله مساوی بین آیتم‌ها */
.nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

/* وسط‌چین کامل */
.center-everything {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
}

/* ===== Navbar حرفه‌ای ===== */
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 24px;
    background: rgba(15, 23, 42, 0.95);
    backdrop-filter: blur(10px);
    position: sticky;
    top: 0;
    z-index: 100;
}

.navbar-logo {
    font-size: 20px;
    font-weight: 700;
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
    color: #e2e8f0;
    background: rgba(255,255,255,0.05);
}

/* ===== Card Grid با Flexbox ===== */
.card-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 24px;
    padding: 24px;
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
    flex: 0 0 auto; /* ثابت */
}

.page-body {
    display: flex;
    flex: 1 1 auto; /* رشد کند */
}

.page-sidebar {
    flex: 0 0 250px; /* عرض ثابت */
}

.page-main {
    flex: 1 1 0%; /* فضای باقیمانده */
    min-width: 0; /* جلوگیری از overflow */
}

.page-aside {
    flex: 0 0 300px;
}

.page-footer {
    flex: 0 0 auto;
}

/* ===== Sticky Footer ===== */
body {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}

main {
    flex: 1; /* فوتر را به پایین می‌چسباند */
}

/* ===== Responsive بدون Media Query ===== */
.auto-cards {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
}

.auto-cards > * {
    flex: 1 1 280px; /* حداقل 280px، رشد کند */
    max-width: 100%;
}

/* ===== Order برای تغییر ترتیب ===== */
.featured-item {
    order: -1; /* اول نمایش داده شود */
}

.last-item {
    order: 999; /* آخر نمایش داده شود */
}

/* ===== align-self ===== */
.special-item {
    align-self: flex-end; /* بقیه stretch ولی این پایین */
}

/* ===== Centering Patterns ===== */

/* Perfect Center */
.perfect-center {
    display: flex;
    justify-content: center;
    align-items: center;
}

/* Bottom Center */
.bottom-center {
    display: flex;
    justify-content: center;
    align-items: flex-end;
}

/* Space Between with wrapping */
.tag-list {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    justify-content: flex-start;
}

/* Vertical Stack with spacing */
.stack {
    display: flex;
    flex-direction: column;
    gap: 16px;
}

/* Horizontal scroll */
.horizontal-scroll {
    display: flex;
    overflow-x: auto;
    gap: 16px;
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;
}

.horizontal-scroll > * {
    flex: 0 0 300px;
    scroll-snap-align: start;
}`,
            language: "css",
            tips: [
              "flex: 1 1 0% بهتر از flex: 1 است - از مشکلات sizing جلوگیری می‌کند",
              "gap در Flexbox پشتیبانی می‌شود - نیازی به margin نیست",
              "min-width: 0 روی flex items برای جلوگیری از overflow ضروری است",
              "align-content فقط وقتی کار می‌کند که چند خط وجود داشته باشد"
            ],
            warnings: [
              "Flexbox یک‌بعدی است - برای layout دوبعدی از Grid استفاده کنید",
              "flex-wrap بدون عرض مشخص ممکن است unexpected باشد",
              "order فقط ترتیب بصری را عوض می‌کند - ترتیب DOM تغییر نمی‌کند"
            ]
          }
        ]
      },
      {
        id: "css-ch5",
        title: "فصل ۵: CSS Grid",
        description: "چیدمان شبکه‌ای",
        lessons: [
          {
            id: "css-l5-1",
            title: "مبانی Grid",
            subtitle: "Layout‌های پیچیده",
            estimatedTime: 55,
            difficulty: "متوسط",
            interactiveType: 'diagram',
            interactiveData: { diagramType: 'grid' },
            content: `## CSS Grid چیست؟

CSS Grid Layout قدرتمندترین سیستم چیدمان در CSS است. برخلاف Flexbox که یک‌بعدی است، Grid دوبعدی کار می‌کند - یعنی هم ردیف و هم ستون را همزمان مدیریت می‌کند.

## مفاهیم پایه

### Grid Container:
عنصری با \`display: grid\` یا \`display: inline-grid\`

### Grid Items:
فرزندان مستقیم container

### Grid Lines:
خطوط افقی و عمودی که شبکه را تشکیل می‌دهند

### Grid Tracks:
فضای بین دو خط (ردیف یا ستون)

### Grid Cell:
کوچکترین واحد - تقاطع یک ردیف و یک ستون

### Grid Area:
فضای مستطیلی شامل یک یا چند cell

## تعریف ستون‌ها و ردیف‌ها

### grid-template-columns و grid-template-rows:

\`\`\`css
.container {
    display: grid;
    /* 3 ستون با عرض مشخص */
    grid-template-columns: 200px 1fr 300px;
    
    /* ردیف‌ها */
    grid-template-rows: auto 1fr auto;
    
    /* repeat() برای تکرار */
    grid-template-columns: repeat(3, 1fr);
    
    /* auto-fit/auto-fill برای responsive */
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}
\`\`\`

### واحد fr:
\`fr\` (fraction) بخشی از فضای خالی موجود را اشغال می‌کند. \`1fr 2fr\` یعنی ستون دوم دو برابر اول.

### minmax():
حداقل و حداکثر اندازه مشخص می‌کند:
\`minmax(200px, 1fr)\` = حداقل 200px، حداکثر 1fr

### auto-fit vs auto-fill:
- \`auto-fill\`: تا حد ممکن ستون ایجاد می‌کند (حتی خالی)
- \`auto-fit\`: ستون‌های خالی را حذف و بقیه را گسترش می‌دهد

## قرار دادن آیتم‌ها

### grid-column و grid-row:
\`\`\`css
.item {
    grid-column: 1 / 3; /* از خط 1 تا 3 */
    grid-row: 2 / 4;
    /* shorthand */
    grid-area: 2 / 1 / 4 / 3; /* row-start / col-start / row-end / col-end */
}
\`\`\`

### span:
\`\`\`css
.item {
    grid-column: span 2; /* 2 ستون اشغال کند */
    grid-row: span 3;
}
\`\`\`

### Named Lines:
\`\`\`css
.container {
    grid-template-columns: [start] 1fr [middle] 1fr [end];
}
.item {
    grid-column: start / end;
}
\`\`\`

## Grid Template Areas

نام‌گذاری نواحی برای layout بصری:
\`\`\`css
.container {
    grid-template-areas:
        "header header header"
        "sidebar main aside"
        "footer footer footer";
}
.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main { grid-area: main; }
.aside { grid-area: aside; }
.footer { grid-area: footer; }
\`\`\``,
            code: `/* ===== Grid Basics ===== */
.grid-container {
    display: grid;
    /* 3 ستون مساوی */
    grid-template-columns: 1fr 1fr 1fr;
    /* یا با repeat */
    grid-template-columns: repeat(3, 1fr);
    /* ردیف‌ها */
    grid-template-rows: auto 1fr auto;
    /* فاصله */
    gap: 24px;
    /* shorthand: row-gap column-gap */
    gap: 24px 16px;
}

/* ===== Responsive Grid (بدون media query!) ===== */
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
        "header  header  header"
        "sidebar main    aside"
        "footer  footer  footer";
    min-height: 100vh;
    gap: 0;
}

.dashboard-header  { grid-area: header; }
.dashboard-sidebar { grid-area: sidebar; }
.dashboard-main    { grid-area: main; }
.dashboard-aside   { grid-area: aside; }
.dashboard-footer  { grid-area: footer; }

/* ===== Spanning Items ===== */
.featured-card {
    grid-column: span 2; /* 2 ستون */
    grid-row: span 2;    /* 2 ردیف */
}

.full-width {
    grid-column: 1 / -1; /* از اول تا آخر */
}

/* ===== Overlapping Items ===== */
.image-stack {
    display: grid;
    grid-template: 1fr / 1fr;
}
.image-stack > * {
    grid-area: 1 / 1; /* همه روی هم */
}

/* ===== Named Lines ===== */
.page-layout {
    display: grid;
    grid-template-columns: 
        [full-start] 1fr 
        [content-start] min(800px, 100% - 48px) 
        [content-end] 1fr 
        [full-end];
}

.content {
    grid-column: content-start / content-end;
}

.full-bleed {
    grid-column: full-start / full-end;
}

/* ===== Masonry-like Layout ===== */
.masonry {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    grid-auto-rows: 10px;
    gap: 16px;
}

.masonry-item {
    grid-row-end: span var(--rows, 20);
}

/* ===== Complex Layout ===== */
.magazine-layout {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-auto-rows: minmax(100px, auto);
    gap: 20px;
    padding: 20px;
}

.magazine-hero {
    grid-column: 1 / 8;
    grid-row: 1 / 3;
}

.magazine-side {
    grid-column: 8 / 13;
    grid-row: 1 / 2;
}

.magazine-article-1 {
    grid-column: 1 / 5;
}

.magazine-article-2 {
    grid-column: 5 / 9;
}

.magazine-article-3 {
    grid-column: 9 / 13;
}

/* ===== Subgrid ===== */
.card-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
}

.card {
    display: grid;
    grid-template-rows: subgrid;
    grid-row: span 3; /* title, content, footer */
}

/* ===== Alignment ===== */
.grid-center {
    display: grid;
    place-items: center; /* shorthand */
    /* یا جداگانه: */
    justify-items: center; /* horizontal */
    align-items: center;   /* vertical */
}

/* Content alignment */
.grid-container {
    justify-content: center; /* کل grid */
    align-content: center;
}

/* Self alignment */
.grid-item {
    justify-self: end;
    align-self: start;
}`,
            language: "css",
            tips: [
              "auto-fit + minmax() بهترین روش برای responsive grid بدون media query است",
              "از grid-template-areas برای layout‌های پیچیده استفاده کنید - بصری و خوانا است",
              "gap در Grid پشتیبانی کامل دارد",
              "subgrid برای تراز محتوای داخلی کارت‌ها عالی است"
            ],
            warnings: [
              "Grid برای layout کلی صفحه، Flexbox برای کامپوننت‌های داخلی مناسب‌تر است",
              "grid-area با 4 مقدار: row-start / column-start / row-end / column-end",
              "fr واحد فقط در Grid کار می‌کند نه Flexbox"
            ]
          }
        ]
      },
      {
        id: "css-ch6",
        title: "فصل ۶: انیمیشن‌ها",
        description: "Transitions و Animations",
        lessons: [
          {
            id: "css-l6-1",
            title: "CSS Transitions",
            subtitle: "انتقال‌های نرم",
            estimatedTime: 35,
            difficulty: "متوسط",
            content: `## CSS Transitions

Transition‌ها تغییرات بین دو حالت را نرم می‌کنند.

### خواص transition:

**transition-property:** خاصیت مورد نظر

**transition-duration:** مدت زمان

**transition-timing-function:** تابع زمان‌بندی
- ease, linear, ease-in, ease-out
- cubic-bezier()

**transition-delay:** تأخیر

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
- فقط transform و opacity را انیمیت کنید
- از cubic-bezier برای انیمیشن‌های طبیعی استفاده کنید`,
            code: `/* Basic Transition */
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

/* Multiple Properties */
.card {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
    transform: translateY(-5px) scale(1.02);
    box-shadow: 0 20px 40px rgba(0,0,0,0.15);
}

/* Timing Functions */
.cubic-example {
    transition: transform 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}`,
            language: "css",
            tips: [
              "فقط transform و opacity را انیمیت کنید",
              "از cubic-bezier استفاده کنید",
              "transition را بهینه کنید"
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
            subtitle: "سازگاری با اندازه‌های مختلف",
            estimatedTime: 40,
            difficulty: "متوسط",
            content: `## طراحی ریسپانسیو

ساخت صفحاتی که در اندازه‌های مختلف به خوبی کار کنند.

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
            code: `/* Mobile First */

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

/* Responsive Typography */
h1 {
    font-size: clamp(24px, 5vw, 48px);
}

p {
    font-size: clamp(14px, 2vw, 16px);
}

/* Responsive Images */
img {
    max-width: 100%;
    height: auto;
    display: block;
}`,
            language: "css",
            tips: [
              "Mobile First را رعایت کنید",
              "از clamp() برای typography استفاده کنید",
              "تصاویر را ریسپانسیو کنید"
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
    description: "تسلط بر JavaScript مدرن شامل ES6+، async programming، DOM و الگوهای طراحی",
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
            interactiveData: { 
              expectedOutput: "string\nnumber\nboolean\nobject",
              initialCode: `// انواع داده در JavaScript
console.log(typeof "Hello");
console.log(typeof 42);
console.log(typeof true);
console.log(typeof { name: "Ali" });

// آرایه
const fruits = ["apple", "banana"];
console.log(Array.isArray(fruits));`
            },
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
- Function

### Type Checking
\`typeof\` برای primitive‌ها.
\`Array.isArray()\` برای آرایه‌ها.

**نکته:** \`typeof null\` برابر \`"object"\` است (bug تاریخی).`,
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
\`\`\`

## Closures

وقتی یک تابع به متغیرهای scope بیرونی دسترسی دارد حتی بعد از اتمام آن scope.

## Higher-Order Functions

توابعی که تابع دیگری می‌گیرند یا برمی‌گردانند.`,
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
        id: "js-ch3",
        title: "فصل ۳: آرایه‌ها و اشیاء",
        description: "کار با داده‌های ساختاریافته",
        lessons: [
          {
            id: "js-l3-1",
            title: "آرایه‌ها و متدهای آن‌ها",
            subtitle: "map, filter, reduce و سایر متدها",
            estimatedTime: 45,
            difficulty: "متوسط",
            interactiveType: 'playground',
            interactiveData: { 
              expectedOutput: "[2, 4, 6, 8, 10]",
              initialCode: `// متدهای آرایه
const numbers = [1, 2, 3, 4, 5];

// map: تبدیل هر عنصر
const doubled = numbers.map(n => n * 2);
console.log(JSON.stringify(doubled));

// filter: فیلتر کردن
const evens = numbers.filter(n => n % 2 === 0);
console.log(JSON.stringify(evens));

// reduce: کاهش به یک مقدار
const sum = numbers.reduce((acc, n) => acc + n, 0);
console.log("Sum:", sum);`
            },
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

const fruitNames = fruits.map(f => f.toUpperCase());
// ["APPLE", "BANANA", "CHERRY"]

// ===== filter =====
const evens = numbers.filter(n => n % 2 === 0);
// [2, 4]

const longFruits = fruits.filter(f => f.length > 5);
// ["banana", "cherry"]

// ===== reduce =====
const sum = numbers.reduce((acc, n) => acc + n, 0);
// 15

const product = numbers.reduce((acc, n) => acc * n, 1);
// 120

// ===== find =====
const found = fruits.find(f => f.startsWith("b"));
// "banana"

// ===== forEach =====
fruits.forEach(f => console.log(f));

// ===== Chaining =====
const result = numbers
    .filter(n => n > 2)
    .map(n => n * 10)
    .reduce((acc, n) => acc + n, 0);
// 120 (3*10 + 4*10 + 5*10)

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
        id: "js-ch4",
        title: "فصل ۴: برنامه‌نویسی ناهمگام",
        description: "Promises، Async/Await و Fetch API",
        lessons: [
          {
            id: "js-l4-1",
            title: "Promises و Async/Await",
            subtitle: "مدیریت عملیات ناهمگام",
            estimatedTime: 50,
            difficulty: "پیشرفته",
            interactiveType: 'tabs',
            interactiveData: {
              tabs: [
                {
                  label: "Callbacks",
                  content: "روش قدیمی با توابع callback که منجر به Callback Hell می‌شود. کد تو در تو و سخت خوانا."
                },
                {
                  label: "Promises",
                  content: "روش مدرن‌تر با .then() و .catch(). کد تخت‌تر و خواناتر. سه حالت: pending, fulfilled, rejected."
                },
                {
                  label: "Async/Await",
                  content: "روش پیشنهادی. کد ناهمگام را مثل کد همگام می‌نویسد. خوانایی بالا و مدیریت خطا با try/catch."
                }
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
    // عملیات ناهمگام
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
}

// ===== Promise.allSettled =====

async function fetchAllData() {
    const results = await Promise.allSettled([
        fetch('/api/users'),
        fetch('/api/posts'),
        fetch('/api/comments')
    ]);
    
    const fulfilled = results
        .filter(r => r.status === 'fulfilled')
        .map(r => r.value);
    
    const rejected = results
        .filter(r => r.status === 'rejected')
        .map(r => r.reason);
    
    return { fulfilled, rejected };
}`,
            language: "javascript",
            tips: [
              "همیشه از async/await استفاده کنید",
              "try/catch را فراموش نکنید",
              "Promise.all برای درخواست‌های مستقل عالی است"
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
                ["مناسب برای", "همه پروژه‌ها", "پروژه‌های کوچک-متوسط", "پروژه‌های بزرگ"]
              ]
            },
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
شما توصیف می‌کنید UI چه شکلی باشد.`,
            code: `import React from 'react';

function Welcome({ name }) {
    return <h1>Hello, {name}!</h1>;
}

function App() {
    return (
        <div>
            <Welcome name="Ali" />
            <Welcome name="Sara" />
        </div>
    );
}`,
            language: "jsx",
            tips: [
              "همیشه Function Components استفاده کنید",
              "Props را destructure کنید"
            ]
          },
          {
            id: "react-l1-2",
            title: "JSX و Expressions",
            subtitle: "نوشتن JSX حرفه‌ای",
            estimatedTime: 35,
            difficulty: "متوسط",
            content: `## JSX

JSX اجازه می‌دهد HTML-like code در JavaScript بنویسید.

### قوانین JSX:
- یک عنصر ریشه
- تگ‌های بسته
- className به جای class
- {} برای expressions
- style به صورت object`,
            code: `function Example() {
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
                <p>Welcome!</p>
            ) : (
                <p>Login</p>
            )}
            
            {/* List */}
            <ul>
                {items.map((item, i) => (
                    <li key={i}>{item}</li>
                ))}
            </ul>
        </div>
    );
}`,
            language: "jsx",
            tips: [
              "key در list‌ها باید unique باشد",
              "از Fragment برای بدون wrapper استفاده کنید"
            ]
          }
        ]
      },
      {
        id: "react-ch2",
        title: "فصل ۲: Hooks پیشرفته",
        description: "useContext, useReducer, Custom Hooks",
        lessons: [
          {
            id: "react-l2-1",
            title: "useContext",
            subtitle: "مدیریت state سراسری",
            estimatedTime: 40,
            difficulty: "متوسط",
            interactiveType: 'tabs',
            interactiveData: {
              tabs: [
                {
                  label: "ایجاد Context",
                  content: "const ThemeContext = createContext(); - یک Context جدید ایجاد می‌کند."
                },
                {
                  label: "Provider",
                  content: "<ThemeContext.Provider value={theme}> - مقدار را به تمام فرزندان ارائه می‌دهد."
                },
                {
                  label: "مصرف",
                  content: "const theme = useContext(ThemeContext); - مقدار Context را دریافت می‌کند."
                }
              ]
            },
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

const ThemeContext = createContext();

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
              "Provider را در سطح بالا قرار دهید"
            ]
          },
          {
            id: "react-l2-2",
            title: "Custom Hooks",
            subtitle: "ساخت Hooks قابل استفاده مجدد",
            estimatedTime: 45,
            difficulty: "پیشرفته",
            content: `## Custom Hooks

Custom Hooks توابعی هستند که از Hook‌های دیگر استفاده می‌کنند و منطق قابل استفاده مجدد را استخراج می‌کنند.

### قوانین:
- نام باید با use شروع شود
- فقط در سطح بالای کامپوننت یا Hook دیگر

### مثال‌ها:
- useLocalStorage
- useFetch
- useDebounce
- useMediaQuery`,
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
              "منطق قابل استفاده مجدد را استخراج کنید"
            ]
          }
        ]
      },
      {
        id: "react-ch3",
        title: "فصل ۳: State Management",
        description: "مدیریت state پیچیده",
        lessons: [
          {
            id: "react-l3-1",
            title: "useReducer",
            subtitle: "مدیریت state پیچیده",
            estimatedTime: 45,
            difficulty: "پیشرفته",
            content: `## useReducer

useReducer برای state‌های پیچیده که چندین زیرمقدار دارند یا logic به‌روزرسانی پیچیده است، مناسب‌تر از useState است.

### ساختار:
\`\`\`jsx
const [state, dispatch] = useReducer(reducer, initialState);
\`\`\`

### Reducer:
تابعی که state فعلی و action را می‌گیرد و state جدید را برمی‌گرداند.

### چه زمانی استفاده کنیم:
- state پیچیده با چندین زیرمقدار
- logic به‌روزرسانی پیچیده
- state بعدی به state قبلی وابسته است`,
            code: `import { useReducer } from 'react';

const initialState = { count: 0 };

function reducer(state, action) {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 };
        case 'decrement':
            return { count: state.count - 1 };
        case 'reset':
            return { count: 0 };
        default:
            return state;
    }
}

function Counter() {
    const [state, dispatch] = useReducer(reducer, initialState);
    
    return (
        <div>
            <p>Count: {state.count}</p>
            <button onClick={() => dispatch({ type: 'increment' })}>
                +
            </button>
            <button onClick={() => dispatch({ type: 'decrement' })}>
                -
            </button>
            <button onClick={() => dispatch({ type: 'reset' })}>
                Reset
            </button>
        </div>
    );
}`,
            language: "jsx",
            tips: [
              "useReducer برای state پیچیده",
              "action‌ها را descriptive بنویسید"
            ]
          }
        ]
      },
      {
        id: "react-ch4",
        title: "فصل ۴: Routing",
        description: "React Router و مسیریابی",
        lessons: [
          {
            id: "react-l4-1",
            title: "React Router",
            subtitle: "مسیریابی در SPA",
            estimatedTime: 40,
            difficulty: "متوسط",
            content: `## React Router

React Router کتابخانه رسمی مسیریابی در React است.

### نصب:
\`\`\`bash
npm install react-router-dom
\`\`\`

### Components اصلی:
- BrowserRouter
- Routes
- Route
- Link
- useParams
- useNavigate`,
            code: `import { BrowserRouter, Routes, Route, Link, useParams, useNavigate } from 'react-router-dom';

// Pages
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

// Navigation
function Navbar() {
    const navigate = useNavigate();
    
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <button onClick={() => navigate('/user/1')}>
                Go to User 1
            </button>
        </nav>
    );
}

// App
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
              "از Link به جای <a> استفاده کنید"
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
            interactiveType: 'comparison',
            interactiveData: {
              headers: ["ویژگی", "Node.js", "Python", "PHP"],
              rows: [
                ["زبان", "JavaScript", "Python", "PHP"],
                ["سرعت", "بسیار سریع", "متوسط", "سریع"],
                ["یادگیری", "آسان (اگر JS بدانید)", "آسان", "متوسط"],
                ["مناسب برای", "Real-time, API", "Data Science, AI", "Web سنتی"],
                ["جامعه", "بسیار بزرگ", "بسیار بزرگ", "بزرگ"]
              ]
            },
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
          }
        ]
      },
      {
        id: "node-ch2",
        title: "فصل ۲: Express.js",
        description: "ساخت وب سرور با Express",
        lessons: [
          {
            id: "node-l2-1",
            title: "مبانی Express",
            subtitle: "Routing و Middleware",
            estimatedTime: 40,
            difficulty: "متوسط",
            content: `## Express.js

Express محبوب‌ترین web framework برای Node.js است.

### نصب:
\`\`\`bash
npm install express
\`\`\`

### Routing:
\`\`\`js
app.get('/users', getUsers);
app.post('/users', createUser);
app.put('/users/:id', updateUser);
app.delete('/users/:id', deleteUser);
\`\`\`

### Middleware:
توابعی که به request و response دسترسی دارند.

### انواع Middleware:
- Application-level
- Router-level
- Error-handling
- Built-in (express.json, express.static)
- Third-party (cors, morgan)`,
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
    res.status(201).json({ success: true,  { name, email } });
});

app.get('/api/users/:id', (req, res) => {
    const { id } = req.params;
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
              "Error handling ضروری است"
            ]
          }
        ]
      },
      {
        id: "node-ch3",
        title: "فصل ۳: REST API",
        description: "طراحی و پیاده‌سازی RESTful API",
        lessons: [
          {
            id: "node-l3-1",
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
              "Status codes مناسب برگردانید"
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
    
    const hashedPassword = await bcrypt.hash(password, 12);
    
    const user = await User.create({
        name,
        email,
        password: hashedPassword
    });
    
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
    
    const user = await User.findOne({ email }).select('+password');
    if (!user) {
        return res.status(401).json({ error: 'Invalid credentials' });
    }
    
    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) {
        return res.status(401).json({ error: 'Invalid credentials' });
    }
    
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
              "JWT secret را در environment variable نگه دارید"
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
            interactiveType: 'comparison',
            interactiveData: {
              headers: ["ویژگی", "MongoDB (NoSQL)", "PostgreSQL (SQL)"],
              rows: [
                ["ساختار", "Document-based", "Table-based"],
                ["Schema", "انعطاف‌پذیر", "ثابت"],
                ["Scalability", "افقی", "عمودی"],
                ["مناسب برای", "داده‌های نیمه‌ساختاریافته", "داده‌های ساختاریافته"],
                ["Query Language", "JSON-based", "SQL"]
              ]
            },
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
- Referencing: داده‌های بزرگ یا shared

### Validation:
- required
- min/max
- minlength/maxlength
- enum
- match (regex)
- validate (custom)`,
            code: `const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
        trim: true,
        minlength: [2, 'Name must be at least 2 characters'],
        maxlength: [50, 'Name must be at most 50 characters']
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        match: [/^\\w+@[\\w+]+\\.\\w+$/, 'Please enter a valid email']
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
        select: false
    },
    role: {
        type: String,
        enum: ['user', 'admin', 'moderator'],
        default: 'user'
    },
    profile: {
        bio: String,
        avatar: String,
        socialLinks: {
            twitter: String,
            github: String,
            linkedin: String
        }
    },
    posts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post'
    }],
    settings: {
        notifications: {
            email: { type: Boolean, default: true },
            push: { type: Boolean, default: true }
        },
        theme: {
            type: String,
            enum: ['light', 'dark'],
            default: 'light'
        }
    }
}, {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
});

// Virtual
userSchema.virtual('fullName').get(function() {
    return \`\${this.name}\`;
});

// Indexes
userSchema.index({ email: 1 });
userSchema.index({ createdAt: -1 });

// Middleware
userSchema.pre('save', async function(next) {
    if (this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 12);
    }
    next();
});

userSchema.methods.comparePassword = async function(candidatePassword) {
    return await bcrypt.compare(candidatePassword, this.password);
};`,
            language: "javascript",
            tips: [
              "Embedding برای performance بهتر",
              "Referencing برای داده‌های بزرگ"
            ]
          }
        ]
      },
      {
        id: "mongo-ch3",
        title: "فصل ۳: Advanced Queries",
        description: "کوئری‌های پیشرفته",
        lessons: [
          {
            id: "mongo-l3-1",
            title: "Query Operators",
            subtitle: "عملگرهای پیشرفته MongoDB",
            estimatedTime: 45,
            difficulty: "پیشرفته",
            content: `## Query Operators

### Comparison:
- $eq, $ne, $gt, $gte, $lt, $lte
- $in, $nin

### Logical:
- $and, $or, $not, $nor

### Element:
- $exists, $type

### Array:
- $all, $elemMatch, $size

### Evaluation:
- $regex, $text, $where`,
            code: `// Comparison
const users = await User.find({
    age: { $gte: 18, $lte: 65 }
});

// $in
const users = await User.find({
    role: { $in: ['admin', 'moderator'] }
});

// Logical
const users = await User.find({
    $or: [
        { age: { $lt: 18 } },
        { role: 'admin' }
    ]
});

// $exists
const users = await User.find({
    avatar: { $exists: true }
});

// $regex
const users = await User.find({
    name: { $regex: /^ali/i }
});

// Array operators
const posts = await Post.find({
    tags: { $all: ['javascript', 'react'] }
});

// $elemMatch
const posts = await Post.find({
    comments: {
        $elemMatch: {
            rating: { $gte: 5 },
            author: 'Ali'
        }
    }
});

// Population
const users = await User.find()
    .populate('posts', 'title createdAt')
    .populate({
        path: 'posts',
        populate: {
            path: 'comments.author',
            select: 'name email'
        }
    });`,
            language: "javascript",
            tips: [
              "از Index‌ها برای کوئری‌های پرکاربرد استفاده کنید",
              "Population را محدود کنید"
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
            interactiveType: 'comparison',
            interactiveData: {
              headers: ["ویژگی", "WordPress", "Joomla", "Drupal"],
              rows: [
                ["یادگیری", "آسان", "متوسط", "سخت"],
                ["انعطاف‌پذیری", "بسیار بالا", "بالا", "بسیار بالا"],
                ["افزونه‌ها", "۵۰,۰۰۰+", "۸,۰۰۰+", "۴۰,۰۰۰+"],
                ["قالب‌ها", "۵,۰۰۰+", "۱,۰۰۰+", "۲,۰۰۰+"],
                ["سهم بازار", "۴۳%", "۳%", "۲%"]
              ]
            },
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
وردپرس بر اساس نوع درخواست، فایل template مناسب را انتخاب می‌کند.

### functions.php:
قلب قالب است. در این فایل:
- ثبت منوها
- Enqueue styles/scripts
- ثبت sidebars
- Custom post types
- Theme supports`,
            code: `<?php
// functions.php

// Theme Setup
function mytheme_setup() {
    // Register Menus
    register_nav_menus(array(
        'primary' => __('منوی اصلی', 'mytheme'),
        'footer' => __('منوی فوتر', 'mytheme'),
    ));
    
    // Theme Supports
    add_theme_support('post-thumbnails');
    add_theme_support('title-tag');
    add_theme_support('custom-logo');
    add_theme_support('html5', array('search-form', 'comment-form'));
    
    // Image Sizes
    add_image_size('card-thumb', 400, 250, true);
    add_image_size('hero-image', 1920, 600, true);
}
add_action('after_setup_theme', 'mytheme_setup');

// Enqueue Styles & Scripts
function mytheme_scripts() {
    // Main stylesheet
    wp_enqueue_style('mytheme-style', get_stylesheet_uri());
    
    // Custom CSS
    wp_enqueue_style('mytheme-custom', get_template_directory_uri() . '/css/custom.css');
    
    // Fonts
    wp_enqueue_style('vazir-font', 'https://cdn.jsdelivr.net/gh/rastikerdar/vazirmatn@v33.003/Vazirmatn-font-face.css');
    
    // Main JS
    wp_enqueue_script('mytheme-script', get_template_directory_uri() . '/js/main.js', array('jquery'), '1.0', true);
    
    // Localize Script
    wp_localize_script('mytheme-script', 'mythemeData', array(
        'ajaxUrl' => admin_url('admin-ajax.php'),
        'nonce' => wp_create_nonce('mytheme_nonce')
    ));
}
add_action('wp_enqueue_scripts', 'mytheme_scripts');

// Register Sidebars
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
add_action('widgets_init', 'mytheme_widgets');

// Custom Post Type
function mytheme_register_post_types() {
    register_post_type('portfolio', array(
        'labels' => array(
            'name' => __('نمونه‌کارها', 'mytheme'),
            'singular_name' => __('نمونه‌کار', 'mytheme')
        ),
        'public' => true,
        'has_archive' => true,
        'menu_icon' => 'dashicons-portfolio',
        'supports' => array('title', 'editor', 'thumbnail', 'excerpt')
    ));
}
add_action('init', 'mytheme_register_post_types');`,
            language: "php",
            tips: [
              "functions.php قلب قالب است",
              "از Child Theme برای تغییرات استفاده کنید"
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
\`\`\`

### Hooks:
- Actions: اجرای کد در نقاط خاص
- Filters: تغییر داده‌ها

### Shortcodes:
\`\`\`php
[my_shortcode param="value"]
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
    flush_rewrite_rules();
}

// Deactivation Hook
register_deactivation_hook(__FILE__, 'myplugin_deactivate');
function myplugin_deactivate() {
    flush_rewrite_rules();
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
}

// AJAX Handler
add_action('wp_ajax_myplugin_action', 'myplugin_ajax_handler');
add_action('wp_ajax_nopriv_myplugin_action', 'myplugin_ajax_handler');
function myplugin_ajax_handler() {
    check_ajax_referer('myplugin_nonce', 'nonce');
    
    $data = $_POST['data'];
    
    wp_send_json_success(array(
        'message' => 'Success',
         => $data
    ));
}`,
            language: "php",
            tips: [
              "از Hook‌ها استفاده کنید",
              "Security را جدی بگیرید"
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
            interactiveType: 'comparison',
            interactiveData: {
              headers: ["ویژگی", "Docker Containers", "Virtual Machines"],
              rows: [
                ["حجم", "مگابایت", "گیگابایت"],
                ["شروع", "ثانیه", "دقیقه"],
                ["Performance", "Near-native", "Overhead"],
                ["Isolation", "Process-level", "Full OS"],
                ["مناسب برای", "Microservices", "Legacy apps"]
              ]
            },
            content: `## Docker چیست؟

Docker ابزاری برای ساخت و مدیریت container‌ها است.

### مزایا:
- Consistency
- Isolation
- Portability
- Scalability

### مفاهیم کلیدی:
- **Image**: Template فقط‌خواندنی
- **Container**: Instance اجرایی
- **Dockerfile**: دستورات ساخت Image
- **Docker Compose**: اپلیکیشن‌های چند-container
- **Registry**: مخزن Images (Docker Hub)
- **Volume**: ذخیره‌سازی persistent
- **Network**: ارتباط بین container‌ها`,
            code: `# Dockerfile
FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

# Production stage
FROM node:20-alpine

WORKDIR /app

COPY --from=builder /app/package*.json ./
RUN npm ci --only=production

COPY --from=builder /app/dist ./dist

EXPOSE 3000

CMD ["node", "dist/index.js"]`,
            language: "dockerfile",
            tips: [
              "از multi-stage builds استفاده کنید",
              "از alpine base images استفاده کنید"
            ]
          },
          {
            id: "devops-l1-2",
            title: "Docker Compose",
            subtitle: "مدیریت چندین Container",
            estimatedTime: 35,
            difficulty: "پیشرفته",
            content: `## Docker Compose

ابزاری برای تعریف و اجرای اپلیکیشن‌های چند-container.

### مزایا:
- تعریف همه services در یک فایل
- مدیریت dependencies
- شبکه‌بندی خودکار
- Volume‌های مشترک

### دستورات اصلی:
\`\`\`bash
docker-compose up -d
docker-compose down
docker-compose logs
docker-compose ps
\`\`\``,
            code: `# docker-compose.yml
version: '3.8'

services:
  app:
    build: .
    container_name: myapp
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
      - MONGODB_URI=mongodb://mongo:27017/myapp
      - REDIS_URL=redis://redis:6379
    depends_on:
      - mongo
      - redis
    networks:
      - app-network

  mongo:
    image: mongo:7
    container_name: mongodb
    ports:
      - "27017:27017"
    volumes:
      - mongo-/data/db
    networks:
      - app-network

  redis:
    image: redis:7-alpine
    container_name: redis
    ports:
      - "6379:6379"
    volumes:
      - redis-/data
    networks:
      - app-network

  nginx:
    image: nginx:alpine
    container_name: nginx
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - ./nginx.conf:/etc/nginx/nginx.conf
      - ./ssl:/etc/nginx/ssl
    depends_on:
      - app
    networks:
      - app-network

volumes:
  mongo-
  redis-

networks:
  app-network:
    driver: bridge`,
            language: "yaml",
            tips: [
              "از networks برای جداسازی services استفاده کنید",
              "Volumes برای داده‌های persistent"
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

### CI (Continuous Integration):
- خودکارسازی build
- اجرای تست‌ها
- بررسی کیفیت کد

### CD (Continuous Deployment):
- استقرار خودکار
- مدیریت environment‌ها
- Rollback

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
            code: `# .github/workflows/deploy.yml
name: Deploy to Production

on:
  push:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    
    steps:
      - uses: actions/checkout@v4
      
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Run tests
        run: npm test
      
      - name: Run linter
        run: npm run lint
  
  deploy:
    needs: test
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'
    
    steps:
      - uses: actions/checkout@v4
      
      - name: Deploy to server
        uses: appleboy/ssh-action@v1
        with:
          host: \${{ secrets.SERVER_HOST }}
          username: \${{ secrets.SERVER_USER }}
          key: \${{ secrets.SSH_PRIVATE_KEY }}
          script: |
            cd /var/www/myapp
            git pull origin main
            docker-compose down
            docker-compose up -d --build
            docker system prune -f`,
            language: "yaml",
            tips: [
              "Test‌ها را خودکار کنید",
              "Deploy را خودکار کنید"
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
\`\`\`

### Process Management:
\`\`\`bash
ps aux
top
htop
kill PID
\`\`\``,
            tips: [
              "از SSH keys استفاده کنید",
              "Fail2ban نصب کنید"
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
            interactiveType: 'comparison',
            interactiveData: {
              headers: ["مسیر", "تمرکز", "تکنولوژی‌ها", "سطح دشواری"],
              rows: [
                ["Frontend", "UI/UX", "React, Vue, CSS", "متوسط"],
                ["Backend", "سرور، API", "Node.js, Python", "متوسط-سخت"],
                ["Full Stack", "هر دو", "MERN, LAMP", "سخت"],
                ["WordPress", "قالب، افزونه", "PHP, MySQL", "آسان-متوسط"],
                ["DevOps", "زیرساخت", "Docker, AWS", "سخت"]
              ]
            },
            content: `## مسیرهای شغلی

### ۱. Frontend Developer
**تمرکز:** UI/UX

**تکنولوژی‌ها:**
- HTML, CSS, JavaScript
- React/Vue/Angular
- TypeScript

**میانگین حقوق (۱۴۰۳):**
- جونیور: ۱۵-۲۵ میلیون
- مید-لول: ۲۵-۴۵ میلیون
- سنیور: ۴۵-۸۰ میلیون

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

## مهارت‌های نرم ضروری:
1. حل مسئله
2. یادگیری مداوم
3. کار تیمی
4. ارتباط مؤثر
5. مدیریت زمان`,
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
4. Projects (3-5 پروژه برتر)
5. Skills
6. Contact

### نکات مهم:
- پروژه‌های واقعی
- کد تمیز
- Live Demo
- GitHub Repository
- README خوب

### پلتفرم‌ها:
- GitHub Pages
- Vercel
- Netlify
- شخصی`,
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
- تمرین صحبت کردن

### نکات مهم:
- صداقت مهم‌تر از همه چیز
- اگر نمی‌دانید، بگویید نمی‌دانم
- سوالات خوب بپرسید
- درباره تیم و شرکت سوال کنید

### سوالات رایج:
- درباره خودتان بگویید
- چرا این شرکت؟
- چالش‌های فنی که حل کردید
- پروژه‌های اخیر
- اهداف شغلی`,
            tips: [
              "صداقت مهم‌تر از همه چیز",
              "اگر نمی‌دانید، بگویید نمی‌دانم",
              "سوالات خوب بپرسید"
            ]
          }
        ]
      }
    ]
  }
];
