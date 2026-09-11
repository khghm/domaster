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
            estimatedTime: 25,
            difficulty: "مبتدی",
            content: `## اینترنت و World Wide Web

اینترنت یک شبکه جهانی از شبکه‌های کامپیوتری است که با پروتکل TCP/IP به هم متصل شده‌اند. وب تنها یکی از سرویس‌های اینترنت است که با HTTP/HTTPS کار می‌کند.

### پروتکل HTTP/HTTPS

HTTP (HyperText Transfer Protocol) پروتکل اصلی وب است. بر اساس مدل request/response کار می‌کند.

**HTTP Methods:**
- GET: دریافت منبع
- POST: ایجاد منبع
- PUT: به‌روزرسانی کامل
- PATCH: به‌روزرسانی جزئی
- DELETE: حذف منبع

**Status Codes:**
- 2xx: موفق (200 OK, 201 Created)
- 3xx: ریدایرکت (301, 302)
- 4xx: خطای کلاینت (400, 401, 404)
- 5xx: خطای سرور (500, 502, 503)

HTTPS نسخه امن HTTP است که با SSL/TLS رمزنگاری می‌شود.

### DNS

DNS نام دامنه را به IP تبدیل می‌کند. مراحل:
1. Cache محلی
2. DNS resolver
3. Root server
4. TLD server
5. Authoritative server

### مراحل بارگذاری صفحه

1. URL parse می‌شود
2. DNS lookup
3. TCP connection
4. TLS handshake (HTTPS)
5. HTTP request
6. Server processing
7. HTTP response
8. HTML parsing
9. DOM Tree construction
10. CSS parsing
11. Render Tree
12. Layout
13. Paint
14. Composite

### مرورگرها و موتورهای رندر

- **Chrome/Edge**: Blink + V8
- **Firefox**: Gecko + SpiderMonkey
- **Safari**: WebKit + JavaScriptCore`,
            tips: [
              "همیشه از HTTPS استفاده کنید",
              "Status codes را بشناسید",
              "HTTP/2 و HTTP/3 سریع‌ترند"
            ]
          },
          {
            id: "html-l1-2",
            title: "ساختار سند HTML",
            subtitle: "DOCTYPE, html, head, body",
            estimatedTime: 30,
            difficulty: "مبتدی",
            content: `## ساختار HTML

هر سند HTML از بخش‌های مشخصی تشکیل شده:

### DOCTYPE
\`<!DOCTYPE html>\` به مرورگر می‌گوید HTML5 است.

### html
عنصر ریشه با attribute‌های lang و dir.

### head
شامل meta، title، link و script.

### body
محتوای قابل مشاهده صفحه.

### Meta Tags مهم

**Viewport:**
\`<meta name="viewport" content="width=device-width, initial-scale=1.0">\`

**SEO:**
\`<meta name="description" content="توضیحات">\`

**Open Graph:**
برای اشتراک‌گذاری در شبکه‌های اجتماعی.

### ترتیب اسکریپت‌ها

1. CSS در head
2. JavaScript در انتهای body
3. یا از defer/async استفاده کنید`,
            code: `<!DOCTYPE html>
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
            <p>محتوا...</p>
        </article>
    </main>
    
    <footer>
        <p>&copy; ۱۴۰۳</p>
    </footer>
    
    <script src="app.js" defer></script>
</body>
</html>`,
            language: "html",
            tips: [
              "DOCTYPE در خط اول",
              "viewport برای ریسپانسیو",
              "title برای SEO"
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
            estimatedTime: 35,
            difficulty: "مبتدی",
            content: `## عناصر معنایی

عناصر معنایی معنای محتوا را بیان می‌کنند.

### اهمیت

**۱. Accessibility:**
صفحه‌خوان‌ها ساختار را بهتر درک می‌کنند.

**۲. SEO:**
موتورهای جستجو محتوا را بهتر می‌فهمند.

**۳. خوانایی:**
کد قابل فهم‌تر است.

### عناصر اصلی

**header:** سربرگ صفحه/بخش

**nav:** ناوبری

**main:** محتوای اصلی (فقط یکبار)

**article:** محتوای مستقل

**section:** بخش‌بندی موضوعی

**aside:** محتوای جانبی

**footer:** پاورقی

### تفاوت‌ها

**article vs section:**
- article: مستقل و معنادار
- section: بخش‌بندی با عنوان

**div vs section:**
- div: بدون معنا
- section: معنادار`,
            code: `<!DOCTYPE html>
<html lang="fa" dir="rtl">
<head>
    <meta charset="UTF-8">
    <title>وبلاگ</title>
</head>
<body>
    <header>
        <h1>وبلاگ تکنولوژی</h1>
        <nav aria-label="ناوبری اصلی">
            <ul>
                <li><a href="/">خانه</a></li>
                <li><a href="/articles">مقالات</a></li>
            </ul>
        </nav>
    </header>
    
    <main>
        <article>
            <header>
                <h2>معرفی React 19</h2>
                <time datetime="2024-03-15">۲۵ اسفند</time>
            </header>
            
            <p>محتوای مقاله...</p>
            
            <section>
                <h3>ویژگی‌های جدید</h3>
                <ul>
                    <li>Server Components</li>
                    <li>Actions</li>
                </ul>
            </section>
        </article>
    </main>
    
    <aside>
        <h2>دسته‌بندی‌ها</h2>
        <nav>
            <ul>
                <li><a href="/frontend">فرانت‌اند</a></li>
                <li><a href="/backend">بک‌اند</a></li>
            </ul>
        </nav>
    </aside>
    
    <footer>
        <p>&copy; ۱۴۰۳</p>
    </footer>
</body>
</html>`,
            language: "html",
            tips: [
              "فقط یک main",
              "article باید مستقل باشد",
              "از aria-label استفاده کنید"
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
            estimatedTime: 30,
            difficulty: "مبتدی",
            content: `## CSS چیست؟

CSS (Cascading Style Sheets) زبان استایل‌دهی برای HTML است.

### روش‌های اعمال

**۱. Inline:**
\`<p style="color: blue;">\`

**۲. Internal:**
\`<style>p { color: blue; }</style>\`

**۳. External (توصیه شده):**
\`<link rel="stylesheet" href="styles.css">\`

### انتخابگرها

**Type:** \`p { }\`

**Class:** \`.highlight { }\`

**ID:** \`#header { }\`

**Attribute:** \`[type="email"] { }\`

### Specificity

- Inline: 1000
- ID: 100
- Class: 10
- Type: 1

### Box Model

هر عنصر شامل:
- Content
- Padding
- Border
- Margin

با \`box-sizing: border-box\`، padding و border در width محاسبه می‌شوند.`,
            code: `/* Reset */
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

/* Base */
body {
    font-family: 'Vazirmatn', sans-serif;
    line-height: 1.6;
}

/* Selectors */
.container {
    max-width: 1200px;
    margin: 0 auto;
}

/* Pseudo-classes */
a:hover {
    color: #4f46e5;
}

/* Box Model */
.card {
    width: 300px;
    padding: 20px;
    border: 1px solid #ddd;
    margin: 10px;
}`,
            language: "css",
            tips: [
              "box-sizing: border-box",
              "External CSS بهترین است",
              "از ID کمتر استفاده کنید"
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
            estimatedTime: 40,
            difficulty: "متوسط",
            content: `## Flexbox

مدل چیدمان یک‌بعدی برای UI انعطاف‌پذیر.

### مفاهیم

**Flex Container:** \`display: flex\`

**Flex Items:** فرزندان

**محورها:**
- Main Axis (افقی پیش‌فرض)
- Cross Axis (عمود)

### خواص Container

**flex-direction:**
- row (پیش‌فرض)
- column
- row-reverse
- column-reverse

**justify-content:**
- flex-start
- flex-end
- center
- space-between
- space-around
- space-evenly

**align-items:**
- stretch (پیش‌فرض)
- flex-start
- flex-end
- center
- baseline

**flex-wrap:**
- nowrap
- wrap

**gap:** فاصله بین items

### خواص Items

**flex:** \`grow shrink basis\`

**align-self:** تراز شخصی

**order:** ترتیب`,
            code: `/* Navbar */
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 24px;
}

/* Center */
.center {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
}

/* Grid */
.grid {
    display: flex;
    flex-wrap: wrap;
    gap: 24px;
}

.grid > * {
    flex: 1 1 300px;
}

/* Layout */
.page {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}

.header { flex: 0 0 auto; }

.body {
    display: flex;
    flex: 1;
}

.sidebar { flex: 0 0 250px; }
.main { flex: 1; min-width: 0; }
.footer { flex: 0 0 auto; }`,
            language: "css",
            tips: [
              "flex: 1 1 0% بهتر از flex: 1",
              "gap استفاده کنید",
              "min-width: 0 برای overflow"
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
            estimatedTime: 45,
            difficulty: "متوسط",
            content: `## CSS Grid

قدرتمندترین سیستم چیدمان. دوبعدی کار می‌کند.

### مفاهیم

**Grid Container:** \`display: grid\`

**Grid Items:** فرزندان

**Grid Lines:** خطوط

**Grid Tracks:** فاصله بین خطوط

**Grid Cell:** کوچکترین واحد

### تعریف ستون‌ها

\`\`\`css
.container {
    display: grid;
    grid-template-columns: 200px 1fr 300px;
    grid-template-rows: auto 1fr auto;
    gap: 24px;
}
\`\`\`

### واحد fr

بخشی از فضای خالی.

### minmax()

\`minmax(200px, 1fr)\`

### auto-fit vs auto-fill

- auto-fill: ستون‌های خالی ایجاد می‌کند
- auto-fit: ستون‌های خالی را حذف می‌کند

### قرار دادن Items

\`\`\`css
.item {
    grid-column: 1 / 3;
    grid-row: 2 / 4;
}
\`\`\`

### Grid Template Areas

\`\`\`css
.container {
    grid-template-areas:
        "header header"
        "sidebar main"
        "footer footer";
}
\`\`\``,
            code: `/* Basic Grid */
.grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
}

/* Responsive */
.responsive {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
}

/* Dashboard */
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

.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main { grid-area: main; }
.aside { grid-area: aside; }
.footer { grid-area: footer; }

/* Spanning */
.featured {
    grid-column: span 2;
    grid-row: span 2;
}

.full-width {
    grid-column: 1 / -1;
}

/* Center */
.center {
    display: grid;
    place-items: center;
}`,
            language: "css",
            tips: [
              "auto-fit + minmax برای responsive",
              "grid-template-areas برای پیچیده",
              "gap استفاده کنید"
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
                ["مناسب برای", "همه پروژه‌ها", "پروژه‌های کوچک", "پروژه‌های بزرگ"]
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
            content: `## وردپرس چیست؟

وردپرس یک CMS متن‌باز و رایگان است.

### انواع وردپرس:

**WordPress.org (Self-hosted):**
- نرم‌افزار رایگان
- نصب روی هاست شخصی
- کنترل کامل

**WordPress.com (Hosted):**
- سرویس میزبانی
- محدودیت‌هایی دارد`,
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
      }
    ]
  }
];
