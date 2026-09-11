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
    description: "کتاب کامل HTML و CSS شامل ۷ فصل و بیش از ۲۰ درس",
    color: "from-orange-500 to-red-500",
    totalHours: 80,
    prerequisites: ["آشنایی با کامپیوتر"],
    outcomes: [
      "تسلط بر HTML5 و عناصر معنایی",
      "طراحی ریسپانسیو با Flexbox و Grid",
      "ایجاد انیمیشن‌های حرفه‌ای",
      "نوشتن کد تمیز و قابل نگهداری"
    ],
    chapters: [
      {
        id: "html-ch1",
        title: "فصل ۱: مقدمه‌ای بر وب و HTML",
        description: "آشنایی با اینترنت و ساختار HTML",
        lessons: [
          {
            id: "html-l1-1",
            title: "اینترنت و Web چگونه کار می‌کنند؟",
            subtitle: "درک زیرساخت وب از DNS تا مرورگر",
            estimatedTime: 25,
            difficulty: "مبتدی",
            content: `## اینترنت و World Wide Web

اینترنت یک شبکه جهانی عظیم از شبکه‌های کامپیوتری است که با استفاده از پروتکل TCP/IP به یکدیگر متصل شده‌اند. این زیرساخت فیزیکی و منطقی، امکان انتقال داده‌ها بین میلیاردها دستگاه در سراسر جهان را فراهم می‌کند. اینترنت شامل سرورها، روترها، کابل‌های زیردریایی، ماهواره‌ها و تجهیزات شبکه‌ای مختلفی است.

وب (World Wide Web) تنها یکی از سرویس‌هایی است که روی اینترنت اجرا می‌شود. وب مجموعه‌ای از اسناد و منابع interconnected است که با URL شناسایی می‌شوند و از طریق پروتکل HTTP/HTTPS قابل دسترسی هستند. این اسناد معمولاً با HTML نوشته می‌شوند.

## پروتکل HTTP/HTTPS

HTTP (HyperText Transfer Protocol) پروتکل اصلی انتقال داده در وب است. این پروتکل بر اساس مدل request/response کار می‌کند.

### HTTP Methods

- **GET**: دریافت منبع (بدون تغییر)
- **POST**: ایجاد منبع جدید
- **PUT**: به‌روزرسانی کامل منبع
- **PATCH**: به‌روزرسانی جزئی منبع
- **DELETE**: حذف منبع

### Status Codes

- **2xx**: موفق (200 OK, 201 Created, 204 No Content)
- **3xx**: ریدایرکت (301 Moved, 302 Found, 304 Not Modified)
- **4xx**: خطای کلاینت (400 Bad Request, 401 Unauthorized, 403 Forbidden, 404 Not Found)
- **5xx**: خطای سرور (500 Internal Server Error, 502 Bad Gateway, 503 Service Unavailable)

HTTPS نسخه امن HTTP است که با SSL/TLS رمزنگاری می‌شود و از حملات man-in-the-middle جلوگیری می‌کند.

## DNS (Domain Name System)

DNS مانند دفترچه تلفن اینترنت عمل می‌کند و نام دامنه‌های خوانا (مثل google.com) را به آدرس‌های IP عددی (مثل 142.250.185.78) تبدیل می‌کند.

### مراحل Resolution

1. مرورگر cache محلی را بررسی می‌کند
2. سیستم عامل cache را بررسی می‌کند
3. DNS resolver محلی پرس‌وجو می‌شود
4. Root server پرس‌وجو می‌شود
5. TLD server پرس‌وجو می‌شود
6. Authoritative server پرس‌وجو می‌شود
7. IP دریافت و cache می‌شود

## مراحل بارگذاری یک صفحه وب

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

## مرورگرها و موتورهای رندر

هر مرورگر از موتورهای مختلفی استفاده می‌کند:

- **Chrome/Edge**: Blink (rendering) + V8 (JavaScript)
- **Firefox**: Gecko (rendering) + SpiderMonkey (JavaScript)
- **Safari**: WebKit (rendering) + JavaScriptCore

این موتورها مسئول parse کردن HTML/CSS، ساخت DOM/CSSOM، محاسبه layout، paint و compositing هستند.`,
            tips: [
              "همیشه از HTTPS استفاده کنید",
              "Status codes را بشناسید برای debugging بهتر",
              "HTTP/2 و HTTP/3 performance بهتری دارند",
              "DNS cache می‌تواند performance را بهبود دهد"
            ],
            warnings: [
              "هرگز اطلاعات حساس را با HTTP ارسال نکنید",
              "Status code‌ها را درست استفاده کنید",
              "CORS را درست پیکربندی کنید"
            ]
          },
          {
            id: "html-l1-2",
            title: "ساختار یک سند HTML",
            subtitle: "DOCTYPE، html، head و body",
            estimatedTime: 30,
            difficulty: "مبتدی",
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

**Title:**
\`<title>\` عنوان صفحه است که در تب مرورگر، نتایج جستجو و بوکمارک‌ها نمایش داده می‌شود. برای SEO بسیار مهم است.

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
    
    <!-- Open Graph -->
    <meta property="og:title" content="عنوان صفحه">
    <meta property="og:description" content="توضیحات صفحه">
    <meta property="og:image" content="https://example.com/image.jpg">
    
    <!-- Title -->
    <title>عنوان صفحه - نام سایت</title>
    
    <!-- Favicon -->
    <link rel="icon" type="image/png" href="/favicon.png">
    
    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link href="https://fonts.googleapis.com/css2?family=Vazirmatn&display=swap" rel="stylesheet">
    
    <!-- Stylesheets -->
    <link rel="stylesheet" href="css/main.css">
</head>
<body>
    <header>
        <h1>عنوان سایت</h1>
        <nav>
            <ul>
                <li><a href="/">خانه</a></li>
                <li><a href="/about">درباره</a></li>
            </ul>
        </nav>
    </header>
    
    <main>
        <article>
            <h2>عنوان مقاله</h2>
            <p>محتوای مقاله...</p>
        </article>
    </main>
    
    <footer>
        <p>&copy; ۱۴۰۳ نام سایت</p>
    </footer>
    
    <script src="js/main.js" defer></script>
</body>
</html>`,
            language: "html",
            tips: [
              "DOCTYPE را همیشه در خط اول قرار دهید",
              "meta viewport برای ریسپانسیو ضروری است",
              "title برای SEO بسیار مهم است",
              "Open Graph tags برای اشتراک‌گذاری در شبکه‌های اجتماعی"
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
        title: "فصل ۲: عناصر معنایی HTML5",
        description: "ساختاردهی هوشمند محتوا",
        lessons: [
          {
            id: "html-l2-1",
            title: "عناصر معنایی ساختاری",
            subtitle: "header, nav, main, footer",
            estimatedTime: 35,
            difficulty: "مبتدی",
            content: `## عناصر معنایی ساختاری

عناصر معنایی تگ‌هایی هستند که معنای محتوای خود را به طور واضح بیان می‌کنند. استفاده از این عناصر به جای \`<div>\` مزایای زیادی دارد.

### چرا عناصر معنایی مهم هستند؟

**۱. دسترسی‌پذیری (Accessibility):**
صفحه‌خوان‌ها و ابزارهای کمکی می‌توانند ساختار صفحه را بهتر درک کنند و برای کاربران نابینا تجربه بهتری فراهم کنند.

**۲. سئو (SEO):**
موتورهای جستجو مانند گوگل، ساختار معنایی صفحه را بهتر درک می‌کنند و رتبه بهتری به صفحات معنایی می‌دهند.

**۳. خوانایی کد:**
کد HTML معنایی برای توسعه‌دهندگان دیگر قابل فهم‌تر است و نگهداری آن آسان‌تر است.

### عناصر اصلی

**header:** سربرگ صفحه یا بخش. معمولاً شامل لوگو، عنوان و navigation است.

**nav:** بخش ناوبری. لینک‌های اصلی سایت را شامل می‌شود.

**main:** محتوای اصلی صفحه. فقط یکبار در هر صفحه استفاده می‌شود.

**article:** محتوای مستقل و کامل مثل یک پست بلاگ، یک کامنت یا یک محصول.

**section:** بخش‌بندی موضوعی محتوا. معمولاً یک عنوان دارد.

**aside:** محتوای جانبی مثل sidebar، تبلیغات یا لینک‌های مرتبط.

**footer:** پاورقی صفحه یا بخش. شامل اطلاعات تماس، کپی‌رایت و لینک‌های مفید است.

### تفاوت‌های مهم

**article vs section:**
- **article**: محتوایی که به تنهایی معنادار است و می‌تواند مستقل توزیع شود
- **section**: بخش‌بندی موضوعی محتوا که معمولاً یک عنوان دارد

**div vs section:**
- **div**: بدون معنای خاص، فقط برای grouping و استایل‌دهی
- **section**: بخش معنایی از محتوا با موضوع مشخص

### عناصر معنایی دیگر

- **figure**: محتوای تصویری
- **figcaption**: توضیح تصویر
- **details/summary**: محتوای قابل باز/بسته شدن
- **time**: تاریخ و زمان
- **address**: اطلاعات تماس
- **mark**: متن هایلایت شده
- **blockquote**: نقل قول بلند

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
      }
    ]
  },
  {
    id: "javascript",
    title: "جاوااسکریپت کامل",
    subtitle: "از مبتدی تا پیشرفته",
    description: "تسلط بر JavaScript مدرن",
    color: "from-yellow-500 to-amber-500",
    totalHours: 100,
    prerequisites: ["HTML و CSS"],
    outcomes: [
      "تسلط بر ES6+",
      "درک async programming",
      "کار با DOM",
      "الگوهای طراحی"
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
            estimatedTime: 35,
            difficulty: "مبتدی",
            content: `## متغیرها در JavaScript

JavaScript سه کلمه کلیدی برای تعریف متغیر دارد:

### var (منسوخ شده)
- function-scoped (نه block-scoped)
- hoisted (به بالای scope منتقل می‌شود)
- قابل redeclare و reassign

### let (مدرن)
- block-scoped
- hoisted ولی در Temporal Dead Zone
- قابل reassign ولی نه redeclare

### const (مدرن)
- block-scoped
- باید هنگام تعریف مقداردهی شود
- قابل reassign نیست (ولی mutable است!)

## انواع داده (Data Types)

### Primitive Types (غیرقابل تغییر):

**1. String:**
\`\`\`js
const str1 = "Hello";
const str2 = 'World';
const str3 = \`Hello \${name}\`; // template literal
\`\`\`

**2. Number:**
\`\`\`js
const int = 42;
const float = 3.14;
const negative = -10;
const infinity = Infinity;
const notNumber = NaN;
\`\`\`

**3. Boolean:**
\`\`\`js
const isActive = true;
const isDeleted = false;
\`\`\`

**4. undefined:**
متغیر تعریف شده ولی بدون مقدار

**5. null:**
مقدار خالی (عمداً)

**6. Symbol:**
\`\`\`js
const id = Symbol('description');
\`\`\`

### Reference Types (قابل تغییر):

**Object:**
\`\`\`js
const user = { name: "Ali", age: 25 };
\`\`\`

**Array:**
\`\`\`js
const fruits = ["apple", "banana", "cherry"];
\`\`\`

**Function:**
\`\`\`js
const greet = function(name) { return \`Hello \${name}\`; };
\`\`\`

## Type Checking

\`typeof\` برای بررسی نوع primitive‌ها:
- \`typeof "hello"\` → "string"
- \`typeof 42\` → "number"
- \`typeof true\` → "boolean"
- \`typeof undefined\` → "undefined"
- \`typeof null\` → "object" (bug تاریخی!)
- \`typeof {}\` → "object"
- \`typeof []\` → "object"
- \`typeof function(){}\` → "function"

برای بررسی آرایه:
\`Array.isArray([1, 2, 3])\` → true

## Truthy و Falsy Values

**Falsy** (همه اینها false هستند):
- \`false\`
- \`0\`
- \`""\` (empty string)
- \`null\`
- \`undefined\`
- \`NaN\`

**Truthy** (همه مقادیر دیگر true هستند)`,
            code: `// ===== var vs let vs const =====

// var - function scoped
function exampleVar() {
    if (true) {
        var x = 10;
    }
    console.log(x); // 10 - بیرون از if هم قابل دسترسی!
}

// let - block scoped
function exampleLet() {
    if (true) {
        let y = 10;
    }
    console.log(y); // ReferenceError!
}

// const - block scoped + immutable binding
const PI = 3.14159;
// PI = 3; // TypeError!

// ولی objects mutable هستند:
const user = { name: "Ali" };
user.name = "Reza"; // OK! - خود object تغییر می‌کند
// user = {}; // TypeError! - reference نمی‌تواند تغییر کند

// ===== انواع داده =====

// String methods
const str = "Hello, World!";
str.length;           // 13
str.toUpperCase();    // "HELLO, WORLD!"
str.includes("World"); // true
str.slice(0, 5);      // "Hello"
str.split(", ");      // ["Hello", "World!"]

// Template Literals
const name = "Ali";
const age = 25;
const message = \`
    Name: \${name}
    Age: \${age}
    Born: \${2024 - age}
\`;

// Number methods
const num = 42.567;
num.toFixed(2);       // "42.57"
Number.isInteger(42); // true
Number.isNaN(NaN);    // true

// Boolean coercion
Boolean(0);         // false
Boolean("");        // false
Boolean(null);      // false
Boolean("hello");   // true
Boolean(42);        // true
Boolean([]);        // true (even empty array!)

// Nullish Coalescing (??)
const value1 = null ?? "default";    // "default"
const value2 = 0 ?? "default";       // 0 (not "default"!)

// Optional Chaining (?.)
const data = { user: { profile: { name: "Ali" } } };
data.user?.profile?.name;    // "Ali"
data.user?.settings?.theme;  // undefined (no error!)

// typeof operator
typeof "hello"     // "string"
typeof 42          // "number"
typeof true        // "boolean"
typeof undefined   // "undefined"
typeof null        // "object" (bug تاریخی!)
typeof {}          // "object"
typeof []          // "object"

// Array.isArray
Array.isArray([1, 2, 3]);  // true
Array.isArray("hello");    // false`,
            language: "javascript",
            tips: [
              "همیشه از === به جای == استفاده کنید",
              "const را پیش‌فرض قرار دهید",
              "Optional chaining (?.) از خطاهای undefined جلوگیری می‌کند",
              "Nullish coalescing (??) فقط null و undefined را handle می‌کند"
            ],
            warnings: [
              "typeof null برابر 'object' است - این یک bug تاریخی است",
              "const جلوی تغییر object/array را نمی‌گیرد",
              "NaN === NaN همیشه false است!"
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
    description: "آموزش جامع React",
    color: "from-cyan-500 to-blue-600",
    totalHours: 60,
    prerequisites: ["JavaScript ES6+"],
    outcomes: [
      "ساخت کامپوننت‌ها",
      "تسلط بر Hooks",
      "State Management",
      "Routing"
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
            estimatedTime: 30,
            difficulty: "متوسط",
            content: `## React چیست؟

React یک کتابخانه JavaScript برای ساخت رابط‌های کاربری (UI) است که توسط Meta (Facebook) توسعه داده شده و در سال 2013 منتشر شد. React بر اساس چند مفهوم کلیدی ساخته شده:

### ۱. Component-Based Architecture:
UI به کامپوننت‌های مستقل و قابل استفاده مجدد تقسیم می‌شود. هر کامپوننت منطق، استایل و ساختار خود را دارد.

### ۲. Virtual DOM:
React یک کپی مجازی از DOM واقعی می‌سازد. وقتی state تغییر می‌کند، React تغییرات را در Virtual DOM اعمال کرده و سپس حداقل تغییرات لازم را به DOM واقعی اعمال می‌کند.

### ۳. Unidirectional Data Flow:
داده‌ها فقط از بالا به پایین (parent to child) جریان دارند. این پیش‌بینی‌پذیری برنامه را بالا می‌برد.

### ۴. Declarative Programming:
شما توصیف می‌کنید UI باید چه شکلی باشد، React خودش بهترین روش برای رسیدن به آن حالت را پیدا می‌کند.

## JSX

JSX (JavaScript XML) سینتکسی است که اجازه می‌دهد HTML-like code در JavaScript بنویسید. JSX در نهایت به JavaScript تبدیل می‌شود.

### قوانین JSX:
1. باید یک عنصر ریشه داشته باشد (یا Fragment)
2. تگ‌ها باید بسته شوند
3. className به جای class
4. htmlFor به جای for
5. {} برای JavaScript expressions
6. style به صورت object

## Components

### Function Components (توصیه شده):
توابعی که props می‌گیرند و JSX برمی‌گردانند.

### Props:
داده‌هایی که از parent به child پاس داده می‌شوند. Props فقط خواندنی (read-only) هستند.

### State:
داده‌های داخلی کامپوننت که با تغییر آن، کامپوننت re-render می‌شود. با useState hook مدیریت می‌شود.

### Children:
محتوایی که بین تگ‌های باز و بسته کامپوننت قرار می‌گیرد.`,
            code: `// ===== اولین کامپوننت React =====
import React from 'react';

// Function Component ساده
function Welcome({ name }) {
    return <h1>Hello, {name}!</h1>;
}

// استفاده
function App() {
    return (
        <div>
            <Welcome name="Ali" />
            <Welcome name="Sara" />
        </div>
    );
}

// ===== JSX Rules =====
function JsxExamples() {
    const name = "Ali";
    const isLoggedIn = true;
    const items = ['HTML', 'CSS', 'JavaScript'];
    const style = { color: 'blue', fontSize: '18px' };
    
    return (
        <div className="container">
            {/* 1. Fragment برای بدون wrapper */}
            <>
                <h1>Title</h1>
                <p>Subtitle</p>
            </>
            
            {/* 2. JavaScript expressions با {} */}
            <p>Hello, {name.toUpperCase()}!</p>
            <p>2 + 2 = {2 + 2}</p>
            
            {/* 3. Conditional rendering */}
            {isLoggedIn ? (
                <p>Welcome back!</p>
            ) : (
                <p>Please login</p>
            )}
            
            {/* 4. Short-circuit */}
            {isLoggedIn && <p>You are logged in</p>}
            
            {/* 5. List rendering */}
            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            
            {/* 6. Inline styles (object) */}
            <div style={style}>Styled text</div>
            <div style={{ padding: '20px', background: '#f0f0f0' }}>
                Direct style
            </div>
            
            {/* 7. Dynamic className */}
            <div className={\`card \${isLoggedIn ? 'active' : 'inactive'}\`}>
                Card content
            </div>
            
            {/* 8. htmlFor instead of for */}
            <label htmlFor="email">Email:</label>
            <input id="email" type="email" />
            
            {/* 9. Self-closing tags */}
            <img src="photo.jpg" alt="Photo" />
            <input type="text" placeholder="Enter text" />
        </div>
    );
}

// ===== Props =====
function Button({ 
    children, 
    variant = 'primary', 
    size = 'md', 
    disabled = false, 
    onClick 
}) {
    const baseStyles = 'rounded-lg font-medium transition-colors';
    const variants = {
        primary: 'bg-indigo-600 text-white hover:bg-indigo-700',
        secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
        danger: 'bg-red-600 text-white hover:bg-red-700',
    };
    const sizes = {
        sm: 'px-3 py-1.5 text-sm',
        md: 'px-4 py-2 text-base',
        lg: 'px-6 py-3 text-lg',
    };
    
    return (
        <button
            className={\`\${baseStyles} \${variants[variant]} \${sizes[size]}\`}
            disabled={disabled}
            onClick={onClick}
        >
            {children}
        </button>
    );
}

// استفاده:
<Button variant="primary" size="lg" onClick={() => alert('Clicked!')}>
    Submit
</Button>

// ===== Children =====
function Card({ title, children, footer }) {
    return (
        <div className="card">
            {title && <div className="card-header"><h3>{title}</h3></div>}
            <div className="card-body">{children}</div>
            {footer && <div className="card-footer">{footer}</div>}
        </div>
    );
}

// استفاده:
<Card 
    title="User Profile"
    footer={<Button>Save Changes</Button>}
>
    <p>Name: Ali</p>
    <p>Email: ali@example.com</p>
</Card>`,
            language: "jsx",
            tips: [
              "همیشه Function Components استفاده کنید",
              "Props را destructure کنید",
              "children برای محتوای dynamic عالی است",
              "key در list‌ها باید unique باشد"
            ],
            warnings: [
              "هرگز props را مستقیماً تغییر ندهید",
              "key در list‌ها باید unique باشد - از index استفاده نکنید",
              "JSX در نهایت JavaScript است"
            ]
          }
        ]
      }
    ]
  }
];
