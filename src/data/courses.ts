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
  // ============================================
  // COURSE 1: HTML & CSS
  // ============================================
  {
    id: "html-css",
    title: "HTML و CSS جامع",
    subtitle: "از صفر تا طراحی حرفه‌ای صفحات وب",
    description: "کتاب کامل HTML و CSS شامل ۸ فصل و بیش از ۳۰ درس. از مفاهیم پایه تا تکنیک‌های پیشرفته مانند Flexbox، Grid، انیمیشن‌ها و طراحی ریسپانسیو.",
    color: "from-orange-500 to-red-500",
    totalHours: 60,
    prerequisites: ["آشنایی اولیه با کامپیوتر"],
    outcomes: [
      "تسلط کامل بر HTML5 و عناصر معنایی",
      "طراحی صفحات ریسپانسیو با Flexbox و Grid",
      "ایجاد انیمیشن‌ها و transitions حرفه‌ای",
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
7. مرورگر HTML را parse و render می‌کند`,
            tips: [
              "همیشه DOCTYPE را در خط اول قرار دهید",
              "meta viewport برای ریسپانسیو ضروری است",
              "از lang و dir برای زبان و جهت متن استفاده کنید"
            ]
          },
          {
            id: "html-l1-2",
            title: "ساختار یک سند HTML",
            subtitle: "DOCTYPE، html، head و body",
            estimatedTime: 25,
            difficulty: "مبتدی",
            content: `## ساختار پایه یک سند HTML

هر سند HTML از یک ساختار مشخص پیروی می‌کند. این ساختار شامل بخش‌های زیر است:

### DOCTYPE Declaration
\`<!DOCTYPE html>\` به مرورگر می‌گوید که این سند HTML5 است.

### عنصر html
\`<html>\` عنصر ریشه است که تمام محتوای صفحه را در بر می‌گیرد.

### بخش head
\`<head>\` شامل اطلاعات متا، عنوان صفحه، لینک به فایل‌های CSS و اسکریپت‌ها است. این بخش برای کاربر قابل مشاهده نیست.

### بخش body
\`<body>\` شامل محتوای قابل مشاهده صفحه است.

### عناصر مهم در head:
- \`<meta charset="UTF-8">\` - کدگذاری کاراکترها
- \`<meta name="viewport">\` - تنظیمات responsive
- \`<title>\` - عنوان صفحه (برای SEO مهم)
- \`<link>\` - لینک به فایل‌های خارجی
- \`<style>\` - استایل‌های داخلی
- \`<script>\` - اسکریپت‌ها`,
            code: `<!DOCTYPE html>
<html lang="fa" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="توضیحات صفحه برای SEO">
    <meta name="keywords" content="HTML, CSS, Web">
    <meta name="author" content="نام شما">
    
    <title>عنوان صفحه</title>
    
    <link rel="stylesheet" href="styles.css">
    <link rel="icon" href="favicon.ico">
    
    <style>
        /* استایل‌های داخلی */
        body { font-family: sans-serif; }
    </style>
</head>
<body>
    <!-- محتوای صفحه -->
    <header>
        <h1>عنوان اصلی</h1>
    </header>
    
    <main>
        <p>محتوای اصلی صفحه</p>
    </main>
    
    <footer>
        <p>&copy; ۱۴۰۳</p>
    </footer>
    
    <script src="app.js"></script>
</body>
</html>`,
            language: "html",
            tips: [
              "DOCTYPE را همیشه در خط اول قرار دهید",
              "meta viewport برای ریسپانسیو ضروری است",
              "title برای SEO بسیار مهم است"
            ]
          },
          {
            id: "html-l1-3",
            title: "عناصر متنی و ساختاری",
            subtitle: "تگ‌های پایه برای نمایش محتوا",
            estimatedTime: 30,
            difficulty: "مبتدی",
            interactiveType: 'quiz',
            interactiveData: {
              question: "کدام تگ برای ایجاد یک پاراگراف استفاده می‌شود؟",
              options: ["<h1>", "<p>", "<div>", "<span>"],
              correctIndex: 1,
              explanation: "تگ <p> برای ایجاد پاراگراف استفاده می‌شود. <h1> برای عنوان، <div> یک container عمومی و <span> برای متن inline است."
            },
            content: `## عناصر متنی HTML

HTML طیف وسیعی از عناصر برای نمایش انواع مختلف متن ارائه می‌دهد.

### عناوین (Headings)
شش سطح عنوان از h1 تا h6 وجود دارد. h1 مهم‌ترین و h6 کم‌اهمیت‌ترین است.

**نکات مهم:**
- فقط یک h1 در هر صفحه داشته باشید
- سلسله‌مراتب را رعایت کنید
- عناوین برای SEO بسیار مهم هستند

### پاراگراف‌ها
تگ \`<p>\` برای پاراگراف‌های متن استفاده می‌شود.

### لیست‌ها
سه نوع لیست در HTML وجود دارد:

**۱. لیست مرتب (Ordered List):**
\`\`\`html
<ol>
    <li>مورد اول</li>
    <li>مورد دوم</li>
</ol>
\`\`\`

**۲. لیست نامرتب (Unordered List):**
\`\`\`html
<ul>
    <li>مورد اول</li>
    <li>مورد دوم</li>
</ul>
\`\`\`

**۳. لیست تعریفی (Definition List):**
\`\`\`html
<dl>
    <dt>HTML</dt>
    <dd>زبان نشانه‌گذاری ابرمتن</dd>
</dl>
\`\`\``,
            code: `<!DOCTYPE html>
<html lang="fa" dir="rtl">
<head>
    <meta charset="UTF-8">
    <title>عناصر متنی HTML</title>
</head>
<body>
    <h1>عنوان اصلی صفحه</h1>
    <h2>زیرعنوان</h2>
    <h3>زیر-زیرعنوان</h3>
    
    <p>این یک پاراگراف است.</p>
    <p>این پاراگراف دوم است.</p>
    
    <h2>لیست مرتب</h2>
    <ol>
        <li>HTML را یاد بگیرید</li>
        <li>CSS را یاد بگیرید</li>
        <li>JavaScript را یاد بگیرید</li>
    </ol>
    
    <h2>لیست نامرتب</h2>
    <ul>
        <li>React</li>
        <li>Vue</li>
        <li>Angular</li>
    </ul>
    
    <h2>لیست تودرتو</h2>
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
    <p>متن <strong>مهم</strong> با strong.</p>
    <p>متن <em>تأکیدی</em> با em.</p>
    <p>متن <mark>هایلایت شده</mark> با mark.</p>
    <p>فرمول آب: H<sub>2</sub>O</p>
    <p>توان: x<sup>2</sup></p>
    
    <h2>کد</h2>
    <p>کد inline: <code>console.log("Hello")</code></p>
    
    <pre><code>function greet(name) {
    return "Hello " + name;
}</code></pre>
    
    <h2>نقل قول</h2>
    <blockquote>
        <p>بهترین زمان برای کاشت درخت بیست سال پیش بود.</p>
        <cite>ضرب‌المثل چینی</cite>
    </blockquote>
</body>
</html>`,
            language: "html",
            tips: [
              "فقط یک h1 در هر صفحه داشته باشید",
              "سلسله‌مراتب عناوین را رعایت کنید",
              "از strong و em به جای b و i استفاده کنید"
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
            id: "html-l2-0",
            title: "عناصر معنایی در برابر div",
            subtitle: "چرا باید از عناصر معنایی استفاده کنیم؟",
            estimatedTime: 20,
            difficulty: "مبتدی",
            interactiveType: 'comparison',
            interactiveData: {
              headers: ["ویژگی", "عناصر معنایی", "div"],
              rows: [
                ["معنا", "دارد", "ندارد"],
                ["SEO", "بهتر", "معمولی"],
                ["Accessibility", "بهتر", "معمولی"],
                ["خوانایی کد", "بهتر", "بدتر"],
                ["استفاده", "header, nav, main", "همه جا"]
              ]
            },
            content: `## عناصر معنایی در برابر div

استفاده از عناصر معنایی به جای div مزایای زیادی دارد.`,
            tips: [
              "عناصر معنایی SEO را بهبود می‌دهند",
              "Accessibility را بالا می‌برند",
              "کد را خواناتر می‌کنند"
            ]
          },
          {
            id: "html-l2-1",
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

**header:** سربرگ صفحه یا بخش

**nav:** بخش ناوبری

**main:** محتوای اصلی صفحه (فقط یکبار)

**article:** محتوای مستقل و کامل

**section:** بخش‌بندی موضوعی محتوا

**aside:** محتوای جانبی مثل sidebar

**footer:** پاورقی صفحه یا بخش`,
            code: `<!DOCTYPE html>
<html lang="fa" dir="rtl">
<head>
    <meta charset="UTF-8">
    <title>عناصر معنایی</title>
</head>
<body>
    <header>
        <h1>وبلاگ تکنولوژی</h1>
        <nav>
            <ul>
                <li><a href="/">خانه</a></li>
                <li><a href="/articles">مقالات</a></li>
                <li><a href="/about">درباره</a></li>
            </ul>
        </nav>
    </header>
    
    <main>
        <article>
            <header>
                <h2>معرفی React 19</h2>
                <time datetime="2024-03-15">۲۵ اسفند ۱۴۰۲</time>
            </header>
            
            <p>React 19 با قابلیت‌های جدید منتشر شده...</p>
            
            <section>
                <h3>ویژگی‌های جدید</h3>
                <ul>
                    <li>Server Components</li>
                    <li>Actions</li>
                </ul>
            </section>
            
            <footer>
                <p>نوشته شده توسط علی</p>
            </footer>
        </article>
    </main>
    
    <aside>
        <h3>دسته‌بندی‌ها</h3>
        <nav>
            <ul>
                <li><a href="/cat/frontend">فرانت‌اند</a></li>
                <li><a href="/cat/backend">بک‌اند</a></li>
            </ul>
        </nav>
    </aside>
    
    <footer>
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
        id: "html-ch3",
        title: "فصل ۳: فرم‌ها و اعتبارسنجی",
        description: "ساخت فرم‌های حرفه‌ای و قابل دسترس",
        lessons: [
          {
            id: "html-l3-0",
            title: "انواع input در HTML5",
            subtitle: "آشنایی با تمام انواع input",
            estimatedTime: 25,
            difficulty: "مبتدی",
            interactiveType: 'comparison',
            interactiveData: {
              headers: ["نوع", "کاربرد", "ویژگی"],
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
            content: `## انواع input در HTML5

HTML5 انواع مختلف input را برای نیازهای مختلف ارائه می‌دهد.`,
            tips: [
              "از type مناسب برای هر فیلد استفاده کنید",
              "مرورگرها validation خودکار دارند",
              "از pattern برای اعتبارسنجی سفارشی استفاده کنید"
            ]
          },
          {
            id: "html-l3-1",
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
- \`enctype\`: نوع encoding

### انواع input
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
برای گروه‌بندی عناصر مرتبط استفاده می‌شود.`,
            code: `<!DOCTYPE html>
<html lang="fa" dir="rtl">
<head>
    <meta charset="UTF-8">
    <title>فرم ثبت‌نام</title>
    <style>
        body { font-family: sans-serif; padding: 20px; }
        .form-group { margin-bottom: 16px; }
        label { display: block; margin-bottom: 4px; font-weight: 500; }
        input, select, textarea {
            width: 100%; padding: 10px;
            border: 1px solid #ddd; border-radius: 6px;
        }
        button {
            padding: 12px 24px;
            background: #4f46e5; color: white;
            border: none; border-radius: 6px;
            cursor: pointer;
        }
    </style>
</head>
<body>
    <h1>ایجاد حساب کاربری</h1>
    
    <form action="/register" method="POST">
        <div class="form-group">
            <label for="name">نام *</label>
            <input type="text" id="name" name="name" required>
        </div>
        
        <div class="form-group">
            <label for="email">ایمیل *</label>
            <input type="email" id="email" name="email" required>
        </div>
        
        <div class="form-group">
            <label for="password">رمز عبور *</label>
            <input type="password" id="password" name="password" 
                   required minlength="8">
        </div>
        
        <div class="form-group">
            <label for="phone">تلفن</label>
            <input type="tel" id="phone" name="phone" 
                   pattern="09[0-9]{9}">
        </div>
        
        <fieldset>
            <legend>جنسیت</legend>
            <label>
                <input type="radio" name="gender" value="male"> مرد
            </label>
            <label>
                <input type="radio" name="gender" value="female"> زن
            </label>
        </fieldset>
        
        <div class="form-group">
            <label for="bio">بیوگرافی</label>
            <textarea id="bio" name="bio" rows="4"></textarea>
        </div>
        
        <button type="submit">ثبت‌نام</button>
    </form>
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
        id: "css-ch4",
        title: "فصل ۴: مبانی CSS",
        description: "انتخابگرها، خاصیت‌ها و مدل جعبه‌ای",
        lessons: [
          {
            id: "css-l4-1",
            title: "مقدمه‌ای بر CSS",
            subtitle: "CSS چیست و چگونه کار می‌کند؟",
            estimatedTime: 25,
            difficulty: "مبتدی",
            content: `## CSS چیست؟

CSS (Cascading Style Sheets) زبان استایل‌دهی برای اسناد HTML است.

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

## انتخابگرها

**۱. انتخابگر نوع:** \`p { }\`

**۲. انتخابگر کلاس:** \`.highlight { }\`

**۳. انتخابگر ID:** \`#header { }\`

**۴. انتخابگر Attribute:** \`input[type="email"] { }\`

## Specificity (اولویت)
- Inline: 1000
- ID: 100
- Class: 10
- Type: 1`,
            code: `/* ===== انتخابگرهای پایه ===== */

/* Universal */
* { box-sizing: border-box; }

/* Type */
p { line-height: 1.8; }
h1, h2, h3 { font-weight: 700; }

/* Class */
.card { border-radius: 12px; padding: 24px; }
.btn-primary { background: #4f46e5; color: white; }

/* ID */
#main-header { position: sticky; top: 0; }

/* Attribute */
input[type="email"] { border-color: #3b82f6; }
a[target="_blank"]::after { content: " ↗"; }

/* ===== Combinators ===== */

/* Descendant */
nav li { display: inline-block; }

/* Child */
.card > .card-title { font-size: 1.5rem; }

/* Adjacent Sibling */
h1 + h2 { margin-top: 0; }

/* ===== Pseudo-classes ===== */
button:hover { transform: translateY(-2px); }
input:focus { border-color: #4f46e5; }
li:first-child { border-top: none; }
li:last-child { border-bottom: none; }
tr:nth-child(even) { background: rgba(0,0,0,0.02); }

/* ===== Pseudo-elements ===== */
p::first-letter { font-size: 2em; font-weight: bold; }
p::selection { background: #4f46e5; color: white; }
input::placeholder { color: #94a3b8; }`,
            language: "css",
            tips: [
              "همیشه از box-sizing: border-box استفاده کنید",
              "External CSS بهترین روش است",
              "از ID selector کمتر استفاده کنید"
            ]
          },
          {
            id: "css-l4-2",
            title: "مدل جعبه‌ای (Box Model)",
            subtitle: "درک Content، Padding، Border و Margin",
            estimatedTime: 30,
            difficulty: "مبتدی",
            interactiveType: 'diagram',
            interactiveData: {
              diagramType: 'box-model'
            },
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
- از padding برای فاصله داخلی استفاده کنید`,
            code: `/* ===== Box Model Examples ===== */

/* بدون box-sizing */
.box-content {
    width: 200px;
    padding: 20px;
    border: 5px solid blue;
    /* عرض کل: 200 + 40 + 10 = 250px */
}

/* با box-sizing */
.box-border {
    box-sizing: border-box;
    width: 200px;
    padding: 20px;
    border: 5px solid blue;
    /* عرض کل: 200px */
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

/* ===== Practical Example ===== */

.card {
    box-sizing: border-box;
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
          }
        ]
      },
      {
        id: "css-ch5",
        title: "فصل ۵: Flexbox",
        description: "چیدمان انعطاف‌پذیر یک‌بعدی",
        lessons: [
          {
            id: "css-l5-1",
            title: "مبانی Flexbox",
            subtitle: "درک Container و Items",
            estimatedTime: 35,
            difficulty: "متوسط",
            interactiveType: 'diagram',
            interactiveData: {
              diagramType: 'flexbox'
            },
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
فاصله بین آیتم‌ها`,
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
    background: #1e293b;
}

.navbar-logo { font-size: 20px; font-weight: 700; }

.navbar-menu {
    display: flex;
    gap: 8px;
    list-style: none;
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
.page-footer { flex: 0 0 auto; }

/* ===== Sticky Footer ===== */

body {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}

main { flex: 1; }`,
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
        id: "css-ch6",
        title: "فصل ۶: CSS Grid",
        description: "چیدمان شبکه‌ای دوبعدی",
        lessons: [
          {
            id: "css-l6-1",
            title: "مبانی CSS Grid",
            subtitle: "ایجاد layout‌های پیچیده",
            estimatedTime: 40,
            difficulty: "متوسط",
            interactiveType: 'diagram',
            interactiveData: {
              diagramType: 'grid'
            },
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
- auto-fit: ستون‌های خالی را حذف می‌کند`,
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
}

/* ===== Alignment ===== */

.grid-center {
    display: grid;
    place-items: center;
}

/* Content alignment */
.grid-container {
    justify-content: center;
    align-content: center;
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
        id: "css-ch7",
        title: "فصل ۷: انیمیشن‌ها و Transitions",
        description: "ایجاد افکت‌های بصری جذاب",
        lessons: [
          {
            id: "css-l7-0",
            title: "مقایسه Transitions و Animations",
            subtitle: "چه زمانی از کدام استفاده کنیم؟",
            estimatedTime: 20,
            difficulty: "متوسط",
            interactiveType: 'comparison',
            interactiveData: {
              headers: ["ویژگی", "Transitions", "Animations"],
              rows: [
                ["پیچیدگی", "ساده", "پیچیده"],
                ["کنترل", "دو حالت", "چندین حالت"],
                ["تکرار", "معمولاً یکبار", "قابل تکرار"],
                ["نیاز به trigger", "بله (hover, focus)", "خیر (خودکار)"],
                ["مناسب برای", "تغییرات ساده", "انیمیشن‌های پیچیده"]
              ]
            },
            content: `## Transitions در برابر Animations

هر دو برای ایجاد افکت‌های بصری استفاده می‌شوند ولی کاربردهای متفاوتی دارند.`,
            tips: [
              "Transitions برای تغییرات ساده بین دو حالت",
              "Animations برای انیمیشن‌های پیچیده و خودکار",
              "هر دو را می‌توانید با هم استفاده کنید"
            ]
          },
          {
            id: "css-l7-1",
            title: "CSS Transitions",
            subtitle: "انتقال‌های نرم بین حالت‌ها",
            estimatedTime: 30,
            difficulty: "متوسط",
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
-transition را برای performance بهینه کنید`,
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

.linear-example {
    transition: transform 0.5s linear;
}

.cubic-example {
    transition: transform 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

/* ===== Practical Examples ===== */

/* Fade In */
.fade-in {
    opacity: 0;
    transition: opacity 0.5s ease;
}

.fade-in.visible {
    opacity: 1;
}

/* Slide In */
.slide-in {
    transform: translateX(-100%);
    transition: transform 0.5s ease;
}

.slide-in.visible {
    transform: translateX(0);
}

/* Rotate */
.rotate-on-hover {
    transition: transform 0.3s ease;
}

.rotate-on-hover:hover {
    transform: rotate(360deg);
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
        id: "css-ch8",
        title: "فصل ۸: طراحی ریسپانسیو",
        description: "ساخت صفحات واکنش‌گرا",
        lessons: [
          {
            id: "css-l8-0",
            title: "Mobile First در برابر Desktop First",
            subtitle: "کدام رویکرد بهتر است؟",
            estimatedTime: 20,
            difficulty: "متوسط",
            interactiveType: 'comparison',
            interactiveData: {
              headers: ["ویژگی", "Mobile First", "Desktop First"],
              rows: [
                ["Media Query", "min-width", "max-width"],
                ["CSS پایه", "برای موبایل", "برای دسکتاپ"],
                ["Performance", "بهتر (CSS کمتر)", "بدتر (CSS بیشتر)"],
                ["UX", "بهتر (موبایل اول)", "معمولی"],
                ["توصیه", "بله", "خیر"]
              ]
            },
            content: `## رویکردهای طراحی ریسپانسیو

دو رویکرد اصلی برای طراحی ریسپانسیو وجود دارد.`,
            tips: [
              "Mobile First توصیه می‌شود",
              "Mobile First performance بهتری دارد",
              "با min-width media query استفاده کنید"
            ]
          },
          {
            id: "css-l8-1",
            title: "Media Queries",
            subtitle: "سازگاری با اندازه‌های مختلف صفحه",
            estimatedTime: 35,
            difficulty: "متوسط",
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

/* Large Desktop (1280px+) */
@media (min-width: 1280px) {
    .container { max-width: 1200px; }
    
    .grid {
        grid-template-columns: repeat(4, 1fr);
    }
}

/* ===== Responsive Typography ===== */

h1 {
    font-size: clamp(24px, 5vw, 48px);
}

p {
    font-size: clamp(14px, 2vw, 16px);
}

/* ===== Responsive Images ===== */

img {
    max-width: 100%;
    height: auto;
    display: block;
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
  
  // ============================================
  // COURSE 2: JavaScript
  // ============================================
  {
    id: "javascript",
    title: "جاوااسکریپت کامل",
    subtitle: "از مبتدی تا پیشرفته",
    description: "تسلط کامل بر JavaScript مدرن شامل ES6+، برنامه‌نویسی ناهمگام، DOM و الگوهای طراحی",
    color: "from-yellow-500 to-amber-500",
    totalHours: 80,
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
            estimatedTime: 30,
            difficulty: "مبتدی",
            interactiveType: 'playground',
            interactiveData: {
              expectedOutput: "string\nnumber\nboolean\nobject"
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
            estimatedTime: 25,
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
console.log(5 != "5");    // false
console.log(5 !== "5");   // true

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
            id: "js-l2-0",
            title: "مقایسه انواع توابع",
            subtitle: "کدام نوع تابع را کجا استفاده کنیم؟",
            estimatedTime: 20,
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
            content: `## مقایسه انواع توابع

JavaScript سه روش اصلی برای تعریف تابع دارد که هر کدام ویژگی‌های خاص خود را دارند.`,
            tips: [
              "Arrow functions برای callback‌ها عالی هستند",
              "Function Declaration hoisted می‌شود",
              "Arrow functions this لکسیکال دارند"
            ]
          },
          {
            id: "js-l2-1",
            title: "توابع در JavaScript",
            subtitle: "Function Declaration، Expression و Arrow",
            estimatedTime: 35,
            difficulty: "متوسط",
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
        id: "js-ch3",
        title: "فصل ۳: آرایه‌ها و اشیاء",
        description: "کار با داده‌های ساختاریافته",
        lessons: [
          {
            id: "js-l3-0",
            title: "مقایسه آرایه‌ها و اشیاء",
            subtitle: "چه زمانی از کدام استفاده کنیم؟",
            estimatedTime: 20,
            difficulty: "مبتدی",
            interactiveType: 'comparison',
            interactiveData: {
              headers: ["ویژگی", "آرایه", "شیء"],
              rows: [
                ["ساختار", "لیست مرتب", "جفت کلید-مقدار"],
                ["دسترسی", "با index", "با key"],
                ["مناسب برای", "لیست داده‌ها", "توصیف موجودیت"],
                ["مثال", "[1, 2, 3]", "{name: 'Ali', age: 25}"],
                ["تکراری", "بله", "کلید یکتا"]
              ]
            },
            content: `## آرایه‌ها در برابر اشیاء

در JavaScript دو نوع اصلی برای ذخیره مجموعه‌ای از داده‌ها وجود دارد: آرایه‌ها و اشیاء.

### آرایه‌ها:
- لیست مرتب از مقادیر
- دسترسی با index (شماره)
- مناسب برای لیست‌ها

### اشیاء:
- مجموعه‌ای از جفت‌های کلید-مقدار
- دسترسی با key (نام)
- مناسب برای توصیف موجودیت‌ها`,
            tips: [
              "از آرایه برای لیست داده‌های مشابه استفاده کنید",
              "از شیء برای توصیف یک موجودیت با ویژگی‌های مختلف استفاده کنید",
              "می‌توانید آرایه‌ای از اشیاء داشته باشید"
            ]
          },
          {
            id: "js-l3-1",
            title: "آرایه‌ها و متدهای آن‌ها",
            subtitle: "map, filter, reduce و سایر متدها",
            estimatedTime: 40,
            difficulty: "متوسط",
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
            estimatedTime: 45,
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
  
  // ============================================
  // COURSE 3: React
  // ============================================
  {
    id: "react",
    title: "React.js حرفه‌ای",
    subtitle: "ساخت وب اپلیکیشن‌های مدرن",
    description: "آموزش جامع React شامل Components، Hooks، State Management و Routing",
    color: "from-cyan-500 to-blue-600",
    totalHours: 50,
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
            id: "react-l1-0",
            title: "مقایسه React با سایر فریم‌ورک‌ها",
            subtitle: "React در برابر Vue و Angular",
            estimatedTime: 20,
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
            content: `## مقایسه فریم‌ورک‌ها

React یکی از محبوب‌ترین کتابخانه‌های JavaScript برای ساخت UI است. بیایید آن را با سایر فریم‌ورک‌ها مقایسه کنیم.`,
            tips: [
              "React انعطاف‌پذیرترین است",
              "Vue یادگیری آسان‌تری دارد",
              "Angular برای پروژه‌های بزرگ سازمانی مناسب است"
            ]
          },
          {
            id: "react-l1-1",
            title: "React چیست؟",
            subtitle: "آشنایی با مفاهیم پایه",
            estimatedTime: 25,
            difficulty: "متوسط",
            interactiveType: 'quiz',
            interactiveData: {
              question: "React چه نوع کتابخانه‌ای است؟",
              options: ["فریم‌ورک کامل", "کتابخانه UI", "زبان برنامه‌نویسی", "پایگاه داده"],
              correctIndex: 1,
              explanation: "React یک کتابخانه JavaScript برای ساخت رابط کاربری (UI) است، نه یک فریم‌ورک کامل. این یعنی فقط بر بخش UI تمرکز دارد و برای سایر بخش‌ها (مثل routing) باید از کتابخانه‌های دیگر استفاده کنید."
            },
            content: `## React چیست؟

React یک کتابخانه JavaScript برای ساخت UI است.

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
          }
        ]
      }
    ]
  },
  
  // ============================================
  // COURSE 4: Node.js
  // ============================================
  {
    id: "nodejs",
    title: "Node.js و Backend",
    subtitle: "ساخت سرور و API حرفه‌ای",
    description: "آموزش Node.js، Express، MongoDB و ساخت REST API",
    color: "from-green-500 to-emerald-600",
    totalHours: 45,
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
            id: "node-l1-0",
            title: "Node.js در برابر سایر زبان‌ها",
            subtitle: "چرا Node.js برای Backend؟",
            estimatedTime: 25,
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
            content: `## مقایسه Backend Technologies

Node.js یکی از محبوب‌ترین انتخاب‌ها برای Backend است. بیایید آن را با سایر زبان‌ها مقایسه کنیم.`,
            tips: [
              "Node.js برای real-time applications عالی است",
              "اگر JavaScript بلدید، یادگیری Node.js آسان است",
              "npm بزرگترین ecosystem را دارد"
            ]
          },
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
  
  // ============================================
  // COURSE 5: MongoDB
  // ============================================
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
            id: "mongo-l1-0",
            title: "SQL در برابر NoSQL",
            subtitle: "کدام دیتابیس مناسب شماست؟",
            estimatedTime: 25,
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
            content: `## SQL در برابر NoSQL

انتخاب بین SQL و NoSQL یکی از مهم‌ترین تصمیمات در طراحی سیستم است.`,
            tips: [
              "MongoDB برای داده‌های نیمه‌ساختاریافته عالی است",
              "PostgreSQL برای داده‌های ساختاریافته و روابط پیچیده مناسب است",
              "می‌توانید از هر دو در یک پروژه استفاده کنید"
            ]
          },
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

// اتصال
await mongoose.connect(process.env.MONGODB_URI);

// Schema
const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

// CRUD
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
  
  // ============================================
  // COURSE 6: WordPress
  // ============================================
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
            id: "wp-l1-0",
            title: "وردپرس در برابر سایر CMS‌ها",
            subtitle: "چرا وردپرس محبوب‌ترین است؟",
            estimatedTime: 20,
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
            content: `## مقایسه CMS‌ها

وردپرس محبوب‌ترین CMS جهان است. بیایید آن را با سایر CMS‌ها مقایسه کنیم.`,
            tips: [
              "وردپرس بزرگترین جامعه کاربری را دارد",
              "بیشترین افزونه و قالب را دارد",
              "یادگیری آن آسان است"
            ]
          },
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
  
  // ============================================
  // COURSE 7: DevOps
  // ============================================
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
            id: "devops-l1-0",
            title: "Docker در برابر Virtual Machines",
            subtitle: "تفاوت Container و VM",
            estimatedTime: 25,
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
            content: `## Containers در برابر Virtual Machines

Docker از تکنولوژی container استفاده می‌کند که با Virtual Machines متفاوت است.`,
            tips: [
              "Containers سبک‌تر و سریع‌تر از VM‌ها هستند",
              "VM‌ها isolation کامل‌تری دارند",
              "Docker برای microservices عالی است"
            ]
          },
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
  
  // ============================================
  // COURSE 8: Career
  // ============================================
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
            id: "career-l1-0",
            title: "مقایسه مسیرهای شغلی",
            subtitle: "کدام مسیر برای شما مناسب‌تر است؟",
            estimatedTime: 25,
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
            content: `## مقایسه مسیرهای شغلی

هر مسیر شغلی ویژگی‌ها و چالش‌های خاص خود را دارد.`,
            tips: [
              "مسیری را انتخاب کنید که به آن علاقه دارید",
              "Full Stack تقاضای بالایی دارد",
              "WordPress برای فریلنسری عالی است"
            ]
          },
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
