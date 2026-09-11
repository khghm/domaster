export interface Lesson {
  id: string;
  title: string;
  emoji: string;
  content: string;
  code?: string;
  language?: string;
  tips?: string[];
  exercises?: { question: string; answer: string }[];
}

export interface Course {
  id: string;
  title: string;
  emoji: string;
  description: string;
  icon: string;
  color: string;
  lessons: Lesson[];
}

export const courses: Course[] = [
  {
    id: "html-css",
    title: "HTML و CSS پیشرفته",
    emoji: "🎨",
    description: "یادگیری کامل HTML5 و CSS3 از صفر تا سطح حرفه‌ای همراه با پروژه‌های عملی",
    icon: "fa-code",
    color: "from-orange-500 to-red-500",
    lessons: [
      {
        id: "html-basics",
        title: "مبانی HTML5 - ساختار صفحات وب",
        emoji: "📄",
        content: `HTML (HyperText Markup Language) زبان نشانه‌گذاری استاندارد برای ساخت صفحات وب است. هر صفحه وبی که در مرورگر می‌بینید، در واقع یک سند HTML است که توسط مرورگر تفسیر و نمایش داده می‌شود.

🔹 **ساختار پایه یک سند HTML:**

هر سند HTML از یک ساختار مشخص پیروی می‌کند. این ساختار شامل doctype، تگ html، head و body است. تگ head شامل اطلاعات متا، عنوان صفحه و لینک به فایل‌های CSS و JavaScript است. تگ body شامل محتوای قابل نمایش صفحه است.

🔹 **تگ‌های معنایی (Semantic Tags):**

در HTML5 تگ‌های معنایی جدیدی معرفی شدند که به موتورهای جستجو و ابزارهای کمکی کمک می‌کنند ساختار صفحه را بهتر درک کنند:

• \`<header>\` - هدر صفحه یا بخش
• \`<nav>\` - منوی ناوبری
• \`<main>\` - محتوای اصلی صفحه
• \`<article>\` - محتوای مستقل
• \`<section>\` - بخش‌بندی محتوا
• \`<aside>\` - محتوای جانبی
• \`<footer>\` - فوتر صفحه یا بخش

🔹 **فرم‌ها و ورودی‌ها:**

فرم‌ها یکی از مهم‌ترین بخش‌های HTML هستند که برای دریافت اطلاعات از کاربر استفاده می‌شوند. انواع مختلف input شامل text, email, password, number, date, file و... هستند.

🔹 **تگ‌های چندرسانه‌ای:**

HTML5 تگ‌های جدیدی برای نمایش محتواهای چندرسانه‌ای اضافه کرده: \`<video>\`، \`<audio>\`، \`<canvas>\` و \`<svg>\`.`,
        code: `<!DOCTYPE html>
<html lang="fa" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>اولین صفحه وب من</title>
    <style>
        body {
            font-family: 'Vazirmatn', sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0;
        }
        .card {
            background: rgba(255,255,255,0.95);
            padding: 40px;
            border-radius: 20px;
            box-shadow: 0 20px 60px rgba(0,0,0,0.3);
            text-align: center;
            max-width: 500px;
        }
        h1 { color: #4f46e5; margin-bottom: 10px; }
        p { color: #64748b; line-height: 1.8; }
    </style>
</head>
<body>
    <header>
        <div class="card">
            <h1>🚀 سلام دنیا!</h1>
            <p>این اولین صفحه وب من است که با HTML و CSS ساخته شده.</p>
            <nav>
                <a href="#about">درباره من</a> |
                <a href="#contact">تماس</a>
            </nav>
        </div>
    </header>
</body>
</html>`,
        language: "html",
        tips: [
          "همیشه از تگ‌های معنایی استفاده کنید - این کار SEO سایت شما را بهبود می‌دهد",
          "تگ meta viewport برای ریسپانسیو بودن صفحات ضروری است",
          "از atribut lang و dir برای مشخص کردن زبان و جهت متن استفاده کنید",
          "تگ‌های header, nav, main, footer ساختار معنایی بهتری نسبت به div ایجاد می‌کنند"
        ],
        exercises: [
          {
            question: "یک صفحه HTML بسازید که شامل header، nav، main و footer باشد. در main سه article قرار دهید.",
            answer: `<!DOCTYPE html>
<html lang="fa" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ساختار معنایی</title>
</head>
<body>
    <header>
        <h1>وبلاگ من</h1>
        <nav>
            <a href="/">خانه</a>
            <a href="/blog">بلاگ</a>
            <a href="/about">درباره</a>
        </nav>
    </header>
    <main>
        <article>
            <h2>مقاله اول</h2>
            <p>محتوای مقاله اول...</p>
        </article>
        <article>
            <h2>مقاله دوم</h2>
            <p>محتوای مقاله دوم...</p>
        </article>
        <article>
            <h2>مقاله سوم</h2>
            <p>محتوای مقاله سوم...</p>
        </article>
    </main>
    <footer>
        <p>© ۱۴۰۳ - تمامی حقوق محفوظ است</p>
    </footer>
</body>
</html>`
          }
        ]
      },
      {
        id: "css-layout",
        title: "CSS Layout - Flexbox و Grid",
        emoji: "📐",
        content: `🔹 **Flexbox - چیدمان انعطاف‌پذیر:**

Flexbox یک مدل چیدمان یک‌بعدی است که برای چیدمان آیتم‌ها در یک ردیف یا ستون بسیار قدرتمند است. با Flexbox می‌توانید به راحتی آیتم‌ها را تراز کنید، فاصله بین آنها را تنظیم کنید و چیدمان‌های پیچیده بسازید.

**خواص Container (والد):**
• \`display: flex\` - فعال‌سازی Flexbox
• \`flex-direction\` - جهت چیدمان (row, column, row-reverse, column-reverse)
• \`justify-content\` - تراز در جهت اصلی (flex-start, center, flex-end, space-between, space-around, space-evenly)
• \`align-items\` - تراز در جهت عرضی (stretch, center, flex-start, flex-end, baseline)
• \`flex-wrap\` - شکستن خطوط (nowrap, wrap, wrap-reverse)
• \`gap\` - فاصله بین آیتم‌ها

**خواص Items (فرزندان):**
• \`flex-grow\` - میزان رشد آیتم
• \`flex-shrink\` - میزان انقباض آیتم
• \`flex-basis\` - اندازه پایه آیتم
• \`align-self\` - تراز شخصی آیتم
• \`order\` - ترتیب نمایش آیتم

🔹 **CSS Grid - چیدمان شبکه‌ای:**

CSS Grid یک مدل چیدمان دوبعدی است که برای ساخت layout‌های پیچیده صفحه بسیار مناسب است. با Grid می‌توانید هم ردیف و هم ستون تعریف کنید.

**خواص Grid Container:**
• \`display: grid\` - فعال‌سازی Grid
• \`grid-template-columns\` - تعریف ستون‌ها
• \`grid-template-rows\` - تعریف ردیف‌ها
• \`grid-gap\` - فاصله بین سلول‌ها
• \`grid-template-areas\` - نام‌گذاری نواحی

🔹 **Responsive Design:**

برای ساخت صفحات ریسپانسیو از Media Query‌ها استفاده می‌کنیم. رویکرد Mobile First یعنی اول برای موبایل طراحی کنیم و سپس با media query برای صفحات بزرگتر تنظیم کنیم.`,
        code: `/* Flexbox Example */
.flex-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    flex-wrap: wrap;
}

.flex-item {
    flex: 1;
    min-width: 250px;
    padding: 20px;
    background: #6366f1;
    border-radius: 12px;
    color: white;
}

/* Grid Example */
.grid-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-template-rows: auto;
    gap: 24px;
    padding: 24px;
}

/* Responsive Layout */
.page-layout {
    display: grid;
    grid-template-columns: 250px 1fr 300px;
    grid-template-rows: 80px 1fr 60px;
    grid-template-areas:
        "header header header"
        "sidebar main aside"
        "footer footer footer";
    min-height: 100vh;
}

@media (max-width: 768px) {
    .page-layout {
        grid-template-columns: 1fr;
        grid-template-areas:
            "header"
            "main"
            "sidebar"
            "aside"
            "footer";
    }
}

/* Mobile First Approach */
.container {
    width: 100%;
    padding: 16px;
}

@media (min-width: 640px) {
    .container { max-width: 640px; margin: 0 auto; }
}

@media (min-width: 768px) {
    .container { max-width: 768px; }
}

@media (min-width: 1024px) {
    .container { max-width: 1024px; }
}

@media (min-width: 1280px) {
    .container { max-width: 1280px; }
}`,
        language: "css",
        tips: [
          "برای چیدمان‌های یک‌بعدی از Flexbox و برای دوبعدی از Grid استفاده کنید",
          "از grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)) برای ریسپانسیو خودکار استفاده کنید",
          "gap خاصیت بسیار مفیدی است و در هر دو Flexbox و Grid کار می‌کند",
          "همیشه Mobile First طراحی کنید - اول موبایل، بعد دسکتاپ"
        ],
        exercises: [
          {
            question: "یک layout بسازید که در موبایل تک‌ستونه باشد و در دسکتاپ سه‌ستونه (sidebar, main, aside) باشد.",
            answer: `.layout {
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
    padding: 20px;
    min-height: 100vh;
}

.sidebar { background: #1e293b; padding: 20px; border-radius: 12px; }
.main { background: #334155; padding: 20px; border-radius: 12px; }
.aside { background: #1e293b; padding: 20px; border-radius: 12px; }

/* Tablet */
@media (min-width: 768px) {
    .layout {
        grid-template-columns: 200px 1fr;
    }
    .aside {
        grid-column: 1 / -1;
    }
}

/* Desktop */
@media (min-width: 1024px) {
    .layout {
        grid-template-columns: 250px 1fr 300px;
    }
    .aside {
        grid-column: auto;
    }
}`
          }
        ]
      },
      {
        id: "css-animations",
        title: "انیمیشن‌ها و افکت‌های CSS",
        emoji: "✨",
        content: `🔹 **Transitions - انتقال‌ها:**

Transition‌ها تغییرات بین دو حالت یک عنصر را به صورت نرم و انیمیشنی انجام می‌دهند. این ویژگی برای hover effects، تغییر رنگ‌ها و حرکت عناصر بسیار مفید است.

**خواص transition:**
• \`transition-property\` - خاصیت مورد نظر برای انیمیشن
• \`transition-duration\` - مدت زمان انیمیشن
• \`transition-timing-function\` - تابع زمان‌بندی (ease, linear, ease-in, ease-out, cubic-bezier)
• \`transition-delay\` - تأخیر قبل از شروع

🔹 **Animations - انیمیشن‌ها:**

با @keyframes می‌توانید انیمیشن‌های پیچیده چند مرحله‌ای بسازید. برخلاف transition، انیمیشن‌ها نیاز به trigger ندارند و می‌توانند خودکار اجرا شوند.

🔹 **Transform - تبدیل‌ها:**

Transform‌ها برای چرخش، مقیاس‌بندی، جابجایی و skew کردن عناصر استفاده می‌شوند. مهم‌ترین نکته این است که transform‌ها روی GPU اجرا می‌شوند و performance بالایی دارند.

🔹 **Performance Tips:**

برای انیمیشن‌های روان فقط از transform و opacity استفاده کنید. این دو خاصیت توسط GPU hardware acceleration پردازش می‌شوند. از انیمیت کردن width، height، margin و padding خودداری کنید چون باعث reflow می‌شوند.`,
        code: `/* Smooth Transitions */
.button {
    background: linear-gradient(135deg, #6366f1, #8b5cf6);
    color: white;
    padding: 12px 32px;
    border-radius: 8px;
    border: none;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    transform: translateY(0);
}

.button:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 40px rgba(99, 102, 241, 0.4);
}

/* Keyframe Animations */
@keyframes slideInRight {
    from {
        opacity: 0;
        transform: translateX(100px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}

@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes pulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.05); }
}

@keyframes gradientShift {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
}

.animated-card {
    animation: fadeInUp 0.6s ease-out forwards;
}

.animated-card:nth-child(2) { animation-delay: 0.2s; }
.animated-card:nth-child(3) { animation-delay: 0.4s; }

/* Loading Spinner */
.spinner {
    width: 40px;
    height: 40px;
    border: 4px solid rgba(99, 102, 241, 0.2);
    border-top-color: #6366f1;
    border-radius: 50%;
    animation: spin 0.8s linear infinite;
}

@keyframes spin {
    to { transform: rotate(360deg); }
}

/* Gradient Animation */
.animated-gradient {
    background: linear-gradient(270deg, #6366f1, #06b6d4, #f59e0b, #ef4444);
    background-size: 400% 400%;
    animation: gradientShift 8s ease infinite;
}`,
        language: "css",
        tips: [
          "فقط transform و opacity را انیمیت کنید - اینها GPU accelerated هستند",
          "از cubic-bezier برای انیمیشن‌های طبیعی‌تر استفاده کنید",
          "animation-delay را برای ایجاد افکت staggered استفاده کنید",
          "will-change: transform را برای عناصری که زیاد انیمیت می‌شوند اضافه کنید"
        ],
        exercises: [
          {
            question: "یک دکمه بسازید که هنگام hover به آرامی بزرگ‌تر شود، سایه بگیرد و رنگش تغییر کند.",
            answer: `.magic-button {
    background: linear-gradient(135deg, #6366f1, #8b5cf6);
    color: white;
    padding: 14px 36px;
    border: none;
    border-radius: 10px;
    font-size: 16px;
    cursor: pointer;
    transition: transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease;
    position: relative;
    overflow: hidden;
}

.magic-button:hover {
    transform: scale(1.05) translateY(-2px);
    box-shadow: 0 15px 35px rgba(99, 102, 241, 0.4);
    background: linear-gradient(135deg, #8b5cf6, #a78bfa);
}

.magic-button:active {
    transform: scale(0.98);
    box-shadow: 0 5px 15px rgba(99, 102, 241, 0.3);
}`
          }
        ]
      }
    ]
  },
  {
    id: "javascript",
    title: "جاوااسکریپت حرفه‌ای",
    emoji: "⚡",
    description: "تسلط کامل بر JavaScript مدرن (ES6+) از مفاهیم پایه تا پیشرفته",
    icon: "fa-js",
    color: "from-yellow-500 to-orange-500",
    lessons: [
      {
        id: "js-fundamentals",
        title: "مبانی جاوااسکریپت - متغیرها، توابع و اشیاء",
        emoji: "🧱",
        content: `🔹 **متغیرها و انواع داده:**

در JavaScript مدرن از let و const برای تعریف متغیر استفاده می‌کنیم. var دیگر منسوخ شده و نباید استفاده شود. const برای مقادیری که تغییر نمی‌کنند و let برای مقادیری که تغییر می‌کنند.

**انواع داده اولیه (Primitive):**
• String - رشته متنی: "سلام" یا 'سلام' یا \`سلام\`
• Number - عدد: 42, 3.14, NaN, Infinity
• Boolean - منطقی: true, false
• undefined - تعریف نشده
• null - تهی
• Symbol - نماد یکتا
• BigInt - اعداد بزرگ

**انواع داده مرجعی (Reference):**
• Object - شیء
• Array - آرایه
• Function - تابع

🔹 **توابع (Functions):**

توابع بلوک‌های کد قابل استفاده مجدد هستند. در JavaScript مدرن چندین روش برای تعریف تابع وجود دارد:

🔹 **Arrow Functions:**

توابع پیکانی (Arrow Functions) سینتکس کوتاه‌تری دارند و this را از scope بیرونی به ارث می‌برند.

🔹 **Destructuring:**

Destructuring اجازه می‌دهد مقادیر آرایه‌ها یا خواص اشیاء را به متغیرهای مجزا استخراج کنید.

🔹 **Spread/Rest Operator:**

عملگر ... (سه نقطه) برای گسترش آرایه‌ها/اشیاء یا جمع‌آوری آرگومان‌ها استفاده می‌شود.`,
        code: `// متغیرها و انواع داده
const name = "علی";          // String
let age = 25;                // Number
const isDeveloper = true;    // Boolean
const skills = ["HTML", "CSS", "JavaScript"]; // Array
const user = {               // Object
    name: "علی",
    age: 25,
    skills: ["React", "Node.js"]
};

// توابع
// Function Declaration
function greet(name) {
    return \`سلام \${name}! 👋\`;
}

// Arrow Function
const add = (a, b) => a + b;
const multiply = (a, b) => {
    const result = a * b;
    return result;
};

// Destructuring
const [first, second, ...rest] = [1, 2, 3, 4, 5];
// first = 1, second = 2, rest = [3, 4, 5]

const { name: userName, age: userAge } = user;
// userName = "علی", userAge = 25

// Spread Operator
const newArray = [...skills, "TypeScript", "React"];
const newUser = { ...user, city: "تهران" };

// Rest Parameters
const sum = (...numbers) => {
    return numbers.reduce((total, num) => total + num, 0);
};
console.log(sum(1, 2, 3, 4, 5)); // 15

// Template Literals
const message = \`نام: \${user.name}
سن: \${user.age}
مهارت‌ها: \${user.skills.join(", ")}\`;

// Optional Chaining
const city = user?.address?.city; // undefined (بدون خطا)

// Nullish Coalescing
const displayName = user.nickname ?? user.name; // "علی"`,
        language: "javascript",
        tips: [
          "همیشه از const استفاده کنید مگر اینکه مقدار متغیر تغییر کند - در این صورت let",
          "هرگز از var استفاده نکنید - scope مشکلات ایجاد می‌کند",
          "Arrow functions برای توابع کوتاه عالی هستند ولی برای متدهای شیء مناسب نیستند",
          "Optional chaining (?.) از خطاهای undefined جلوگیری می‌کند"
        ],
        exercises: [
          {
            question: "تابعی بنویسید که یک آرایه از اشیاء user بگیرد و نام کاربرانی که سنشان بالای 18 است را برگرداند.",
            answer: `const getAdultNames = (users) => {
    return users
        .filter(user => user.age >= 18)
        .map(user => user.name);
};

// مثال استفاده:
const users = [
    { name: "علی", age: 25 },
    { name: "سارا", age: 17 },
    { name: "محمد", age: 30 },
    { name: "زهرا", age: 15 }
];

console.log(getAdultNames(users));
// خروجی: ["علی", "محمد"]

// نسخه پیشرفته‌تر با destructuring:
const getAdultNamesAdvanced = (users) => 
    users
        .filter(({ age }) => age >= 18)
        .map(({ name }) => name);`
          }
        ]
      },
      {
        id: "js-async",
        title: "برنامه‌نویسی ناهمگام - Promises و Async/Await",
        emoji: "🔄",
        content: `🔹 **مدل اجرایی JavaScript:**

JavaScript یک زبان single-threaded است یعنی فقط یک عملیات در یک زمان اجرا می‌شود. اما با Event Loop و Callback Queue می‌تواند عملیات ناهمگام (asynchronous) را مدیریت کند.

🔹 **Callbacks:**

Callback یک تابع است که به عنوان آرگومان به تابع دیگر پاس داده می‌شود و پس از اتمام عملیات فراخوانی می‌شود. مشکل اصلی callback‌ها Callback Hell یا Pyramid of Doom است.

🔹 **Promises:**

Promise یک شیء است که نشان‌دهنده نتیجه نهایی یک عملیات ناهمگام است. سه حالت دارد:
• Pending - در انتظار
• Fulfilled - موفق (با resolve)
• Rejected - ناموفق (با reject)

🔹 **Async/Await:**

Async/Await سینتکس شکر (syntactic sugar) روی Promises است که کد ناهمگام را شبیه کد همگام (synchronous) می‌نویسد. این خوانایی کد را بسیار بالا می‌برد.

🔹 **مدیریت خطا:**

در async/await از try/catch برای مدیریت خطا استفاده می‌کنیم. در Promise‌ها از .catch() استفاده می‌شود.

🔹 **Promise.all, Promise.race, Promise.allSettled:**

• Promise.all - همه Promises موفق شوند
• Promise.race - اولین Promise (موفق یا ناموفق)
• Promise.allSettled - نتیجه همه Promises (موفق یا ناموفق)`,
        code: `// Callback (روش قدیمی)
function fetchData(callback) {
    setTimeout(() => {
        callback(null, { id: 1, name: "علی" });
    }, 1000);
}

// Promise
function fetchUser(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (id > 0) {
                resolve({ id, name: "علی", email: "ali@example.com" });
            } else {
                reject(new Error("شناسه نامعتبر است ❌"));
            }
        }, 1000);
    });
}

// استفاده از Promise
fetchUser(1)
    .then(user => console.log("✅ کاربر:", user))
    .catch(error => console.error("❌ خطا:", error.message))
    .finally(() => console.log("🏁 عملیات تمام شد"));

// Async/Await (روش مدرن و پیشنهادی)
async function getUserData() {
    try {
        const user = await fetchUser(1);
        console.log("✅ کاربر:", user);
        
        const posts = await fetchPosts(user.id);
        console.log("✅ پست‌ها:", posts);
        
        const comments = await fetchComments(posts[0].id);
        console.log("✅ نظرات:", comments);
        
        return { user, posts, comments };
    } catch (error) {
        console.error("❌ خطا:", error.message);
        throw error;
    }
}

// اجرای همزمان با Promise.all
async function getDashboardData() {
    try {
        const [users, posts, stats] = await Promise.all([
            fetchUsers(),
            fetchPosts(),
            fetchStats()
        ]);
        
        return { users, posts, stats };
    } catch (error) {
        console.error("❌ خطا در دریافت داده‌ها:", error);
    }
}

// Promise.allSettled - حتی اگر یکی fail شود بقیه برمی‌گردند
async function fetchAllData() {
    const results = await Promise.allSettled([
        fetchUsers(),
        fetchPosts(),
        fetchStats()
    ]);
    
    const fulfilled = results
        .filter(r => r.status === 'fulfilled')
        .map(r => r.value);
    
    const rejected = results
        .filter(r => r.status === 'rejected')
        .map(r => r.reason);
    
    return { fulfilled, rejected };
}

// AbortController برای لغو درخواست
async function fetchWithTimeout(url, timeout = 5000) {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), timeout);
    
    try {
        const response = await fetch(url, {
            signal: controller.signal
        });
        clearTimeout(timeoutId);
        return await response.json();
    } catch (error) {
        if (error.name === 'AbortError') {
            throw new Error('⏱️ درخواست timeout شد');
        }
        throw error;
    }
}`,
        language: "javascript",
        tips: [
          "همیشه از async/await استفاده کنید - خواناتر از .then() است",
          "try/catch را فراموش نکنید - مدیریت خطا حیاتی است",
          "Promise.all برای درخواست‌های مستقل عالی است - سرعت را بالا می‌برد",
          "AbortController برای لغو درخواست‌های طولانی استفاده کنید"
        ],
        exercises: [
          {
            question: "تابعی بنویسید که سه API مختلف را همزمان صدا بزند و نتایج را ترکیب کند. اگر هر کدام fail شد، بقیه ادامه دهند.",
            answer: `async function fetchDashboardData() {
    const requests = [
        fetch('/api/users').then(r => r.json()),
        fetch('/api/posts').then(r => r.json()),
        fetch('/api/stats').then(r => r.json())
    ];
    
    const results = await Promise.allSettled(requests);
    
    const data = {
        users: results[0].status === 'fulfilled' ? results[0].value : [],
        posts: results[1].status === 'fulfilled' ? results[1].value : [],
        stats: results[2].status === 'fulfilled' ? results[2].value : null
    };
    
    // لاگ خطاها
    results.forEach((result, index) => {
        if (result.status === 'rejected') {
            console.error(\`❌ درخواست \${index + 1} ناموفق:\`, result.reason);
        }
    });
    
    return data;
}

// استفاده:
const dashboard = await fetchDashboardData();
console.log('📊 داده‌های داشبورد:', dashboard);`
          }
        ]
      },
      {
        id: "js-dom",
        title: "کار با DOM و رویدادها",
        emoji: "🖱️",
        content: `🔹 **DOM (Document Object Model):**

DOM یک رابط برنامه‌نویسی برای اسناد HTML است. DOM ساختار درختی صفحه را نشان می‌دهد و به JavaScript اجازه می‌دهد محتوا، ساختار و استایل صفحه را تغییر دهد.

🔹 **انتخاب عناصر:**

• document.getElementById() - انتخاب با ID
• document.querySelector() - انتخاب اولین عنصر مطابق
• document.querySelectorAll() - انتخاب همه عناصر مطابق
• element.closest() - پیدا کردن نزدیک‌ترین والد مطابق

🔹 **تغییر محتوا و استایل:**

• element.textContent - متن عنصر
• element.innerHTML - HTML درون عنصر
• element.classList.add/remove/toggle - مدیریت کلاس‌ها
• element.style.property - تغییر استایل
• element.setAttribute() - تنظیم attribute

🔹 **رویدادها (Events):**

رویدادها اتفاقاتی هستند که در مرورگر رخ می‌دهند مثل کلیک، تایپ، اسکرول و... با addEventListener می‌توانیم به این رویدادها واکنش نشان دهیم.

🔹 **Event Delegation:**

به جای اضافه کردن event listener به هر عنصر، یک listener به والد مشترک اضافه می‌کنیم. این روش performance بهتری دارد و برای عناصر dynamically added هم کار می‌کند.`,
        code: `// انتخاب عناصر
const header = document.getElementById('header');
const buttons = document.querySelectorAll('.btn');
const firstCard = document.querySelector('.card');

// تغییر محتوا
header.textContent = 'عنوان جدید 🎯';
firstCard.innerHTML = '<h2>محتوای جدید</h2>';

// مدیریت کلاس‌ها
const element = document.querySelector('.box');
element.classList.add('active', 'visible');
element.classList.remove('hidden');
element.classList.toggle('dark-mode');

// تغییر استایل
element.style.backgroundColor = '#6366f1';
element.style.transform = 'translateX(100px)';

// ایجاد عنصر جدید
const newCard = document.createElement('div');
newCard.className = 'card glass-card';
newCard.innerHTML = \`
    <h3>کارت جدید 🆕</h3>
    <p>این کارت با JavaScript ساخته شده</p>
\`;
document.querySelector('.container').appendChild(newCard);

// Event Listeners
const button = document.querySelector('#submitBtn');

button.addEventListener('click', (event) => {
    event.preventDefault();
    console.log('🖱️ کلیک شد!');
});

// Event Delegation - روش بهینه
document.querySelector('.card-list').addEventListener('click', (e) => {
    const card = e.target.closest('.card');
    if (!card) return;
    
    const cardId = card.dataset.id;
    console.log(\`🃏 کارت \${cardId} کلیک شد\`);
});

// رویدادهای فرم
const form = document.querySelector('#myForm');
form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    
    try {
        const response = await fetch('/api/submit', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });
        const result = await response.json();
        console.log('✅ موفق:', result);
    } catch (error) {
        console.error('❌ خطا:', error);
    }
});

// Intersection Observer - برای lazy loading
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.animate-on-scroll').forEach(el => {
    observer.observe(el);
});`,
        language: "javascript",
        tips: [
          "querySelector و querySelectorAll انعطاف‌پذیرتر از getElementById هستند",
          "از Event Delegation برای بهبود performance استفاده کنید",
          "classList.toggle برای تغییر state عالی است",
          "Intersection Observer برای lazy loading و scroll animations استفاده کنید"
        ],
        exercises: [
          {
            question: "یک todo list بسازید که بتوان آیتم اضافه کرد، حذف کرد و وضعیت انجام شده را تغییر داد.",
            answer: `// HTML: <input id="todoInput"> <button id="addBtn"> <ul id="todoList">

const todoInput = document.getElementById('todoInput');
const addBtn = document.getElementById('addBtn');
const todoList = document.getElementById('todoList');

let todos = JSON.parse(localStorage.getItem('todos')) || [];

function renderTodos() {
    todoList.innerHTML = todos.map((todo, index) => \`
        <li class="todo-item \${todo.done ? 'done' : ''}" data-index="\${index}">
            <span class="todo-text">\${todo.text}</span>
            <div class="todo-actions">
                <button class="toggle-btn" data-action="toggle">\${todo.done ? '↩️' : '✅'}</button>
                <button class="delete-btn" data-action="delete">🗑️</button>
            </div>
        </li>
    \`).join('');
}

// Event Delegation
todoList.addEventListener('click', (e) => {
    const item = e.target.closest('.todo-item');
    if (!item) return;
    
    const index = parseInt(item.dataset.index);
    const action = e.target.dataset.action;
    
    if (action === 'toggle') {
        todos[index].done = !todos[index].done;
    } else if (action === 'delete') {
        todos.splice(index, 1);
    }
    
    localStorage.setItem('todos', JSON.stringify(todos));
    renderTodos();
});

addBtn.addEventListener('click', () => {
    const text = todoInput.value.trim();
    if (!text) return;
    
    todos.push({ text, done: false });
    localStorage.setItem('todos', JSON.stringify(todos));
    todoInput.value = '';
    renderTodos();
});

renderTodos();`
          }
        ]
      }
    ]
  },
  {
    id: "react",
    title: "React.js حرفه‌ای",
    emoji: "⚛️",
    description: "ساخت وب اپلیکیشن‌های مدرن با React، Hooks، Context و ابزارهای پیشرفته",
    icon: "fa-react",
    color: "from-cyan-500 to-blue-500",
    lessons: [
      {
        id: "react-basics",
        title: "مبانی React - کامپوننت‌ها و JSX",
        emoji: "🧩",
        content: `🔹 **React چیست؟**

React یک کتابخانه JavaScript برای ساخت رابط‌های کاربری است که توسط Meta (Facebook) توسعه داده شده. React بر اساس مفهوم کامپوننت‌ها کار می‌کند - بلوک‌های مستقل و قابل استفاده مجدد از UI.

🔹 **JSX:**

JSX یک syntax extension برای JavaScript است که اجازه می‌دهد HTML-like code در JavaScript بنویسید. JSX در نهایت به JavaScript تبدیل می‌شود.

🔹 **کامپوننت‌ها:**

دو نوع کامپوننت در React وجود دارد:
1. Function Components (توصیه شده) - توابعی که JSX برمی‌گردانند
2. Class Components (قدیمی) - کلاس‌هایی که از React.Component ارث‌بری می‌کنند

🔹 **Props:**

Props (Properties) داده‌هایی هستند که از کامپوننت والد به فرزند پاس داده می‌شوند. Props فقط خواندنی (read-only) هستند.

🔹 **State:**

State داده‌ای است که داخل کامپوننت مدیریت می‌شود و با تغییر آن، کامپوننت دوباره render می‌شود. با useState hook مدیریت می‌شود.

🔹 **شرطی Rendering:**

می‌توانید با استفاده از عملگر شرطی (ternary)، && و if/else بخش‌هایی از UI را شرطی نمایش دهید.

🔹 **لیست‌ها و Key:**

برای render لیست‌ها از map() استفاده می‌کنیم. هر آیتم لیست باید یک key یکتا داشته باشد.`,
        code: `// کامپوننت ساده با Props
function Welcome({ name, role = "developer" }) {
    return (
        <div className="welcome-card">
            <h2>سلام {name}! 👋</h2>
            <p>نقش شما: {role}</p>
        </div>
    );
}

// کامپوننت با State
function Counter() {
    const [count, setCount] = useState(0);
    
    return (
        <div className="counter">
            <p>شمارنده: {count}</p>
            <button onClick={() => setCount(count + 1)}>
                افزایش ➕
            </button>
            <button onClick={() => setCount(count - 1)}>
                کاهش ➖
            </button>
            <button onClick={() => setCount(0)}>
                ریست 🔄
            </button>
        </div>
    );
}

// Conditional Rendering
function UserStatus({ isLoggedIn, userName }) {
    return (
        <div>
            {isLoggedIn ? (
                <p>خوش آمدید {userName} 🎉</p>
            ) : (
                <p>لطفاً وارد شوید 🔐</p>
            )}
        </div>
    );
}

// List Rendering
function TodoList({ todos }) {
    return (
        <ul className="todo-list">
            {todos.map((todo) => (
                <li key={todo.id} className={todo.done ? 'completed' : ''}>
                    <span>{todo.text}</span>
                    <span>{todo.done ? '✅' : '⬜'}</span>
                </li>
            ))}
        </ul>
    );
}

// کامپوننت کامل - فرم تماس
function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [result, setResult] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });
            
            if (response.ok) {
                setResult({ type: 'success', text: 'پیام شما ارسال شد! ✅' });
                setFormData({ name: '', email: '', message: '' });
            }
        } catch (error) {
            setResult({ type: 'error', text: 'خطا در ارسال پیام ❌' });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="contact-form">
            <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="نام شما"
                required
            />
            <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="ایمیل"
                required
            />
            <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="پیام شما"
                required
            />
            <button type="submit" disabled={isSubmitting}>
                {isSubmitting ? '⏳ در حال ارسال...' : '📤 ارسال پیام'}
            </button>
            {result && <p className={result.type}>{result.text}</p>}
        </form>
    );
}`,
        language: "jsx",
        tips: [
          "همیشه Function Components استفاده کنید - Class Components منسوخ شده‌اند",
          "برای هر آیتم لیست key یکتا بگذارید - index را به عنوان key استفاده نکنید",
          "Props را mutate نکنید - فقط خواندنی هستند",
          "State را مستقیماً تغییر ندهید - همیشه از setter استفاده کنید"
        ],
        exercises: [
          {
            question: "کامپوننتی بسازید که لیستی از محصولات را نمایش دهد و امکان فیلتر بر اساس دسته‌بندی و جستجو بر اساس نام داشته باشد.",
            answer: `function ProductList({ products }) {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');
    
    const categories = ['all', ...new Set(products.map(p => p.category))];
    
    const filteredProducts = products.filter(product => {
        const matchesSearch = product.name
            .toLowerCase()
            .includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === 'all' || 
            product.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    return (
        <div className="product-list">
            {/* جستجو */}
            <input
                type="text"
                placeholder="🔍 جستجوی محصول..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
            />
            
            {/* فیلتر دسته‌بندی */}
            <div className="categories">
                {categories.map(cat => (
                    <button
                        key={cat}
                        className={\`category-btn \${selectedCategory === cat ? 'active' : ''}\`}
                        onClick={() => setSelectedCategory(cat)}
                    >
                        {cat === 'all' ? '🏷️ همه' : cat}
                    </button>
                ))}
            </div>
            
            {/* لیست محصولات */}
            <div className="products-grid">
                {filteredProducts.length > 0 ? (
                    filteredProducts.map(product => (
                        <div key={product.id} className="product-card">
                            <img src={product.image} alt={product.name} />
                            <h3>{product.name}</h3>
                            <p className="price">
                                {product.price.toLocaleString()} تومان 💰
                            </p>
                            <span className="category">{product.category}</span>
                        </div>
                    ))
                ) : (
                    <p className="no-results">محصولی یافت نشد 😕</p>
                )}
            </div>
            
            <p className="result-count">
                📊 {filteredProducts.length} محصول یافت شد
            </p>
        </div>
    );
}`
          }
        ]
      },
      {
        id: "react-hooks",
        title: "React Hooks پیشرفته",
        emoji: "🪝",
        content: `🔹 **Hooks اصلی React:**

• useState - مدیریت state محلی
• useEffect - انجام side effects
• useContext - دسترسی به Context
• useRef - دسترسی مستقیم به DOM یا نگهداری مقادیر
• useMemo - memoize کردن محاسبات
• useCallback - memoize کردن توابع
• useReducer - مدیریت state پیچیده

🔹 **useEffect:**

useEffect برای انجام side effects مثل fetch data، subscription، تغییر DOM و... استفاده می‌شود. dependency array مشخص می‌کند effect چه زمانی اجرا شود.

🔹 **Custom Hooks:**

Custom Hooks توابعی هستند که از Hook‌های دیگر استفاده می‌کنند و منطق قابل استفاده مجدد را استخراج می‌کنند. نام آنها باید با use شروع شود.

🔹 **useReducer:**

برای state‌های پیچیده که چندین زیرمقدار دارند یا logic به‌روزرسانی پیچیده است، useReducer مناسب‌تر از useState است.

🔹 **useMemo و useCallback:**

این دو hook برای بهینه‌سازی performance استفاده می‌شوند. useMemo مقدار محاسبه شده را cache می‌کند و useCallback تابع را cache می‌کند.`,
        code: `import { useState, useEffect, useRef, useMemo, useCallback, useReducer } from 'react';

// useState با آبجکت
function UserProfile() {
    const [user, setUser] = useState({
        name: '',
        email: '',
        avatar: null
    });
    
    // به‌روزرسانی partial
    const updateName = (name) => {
        setUser(prev => ({ ...prev, name }));
    };
    
    return <div>{user.name}</div>;
}

// useEffect - fetch data
function DataFetcher({ url }) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        let cancelled = false;
        
        async function fetchData() {
            try {
                setLoading(true);
                const response = await fetch(url);
                if (!response.ok) throw new Error('Network error');
                const result = await response.json();
                if (!cancelled) {
                    setData(result);
                    setError(null);
                }
            } catch (err) {
                if (!cancelled) setError(err.message);
            } finally {
                if (!cancelled) setLoading(false);
            }
        }
        
        fetchData();
        
        // Cleanup function
        return () => { cancelled = true; };
    }, [url]);
    
    if (loading) return <Spinner />;
    if (error) return <Error message={error} />;
    return <DataView data={data} />;
}

// Custom Hook - useLocalStorage
function useLocalStorage(key, initialValue) {
    const [storedValue, setStoredValue] = useState(() => {
        try {
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            return initialValue;
        }
    });

    const setValue = (value) => {
        try {
            const valueToStore = value instanceof Function 
                ? value(storedValue) 
                : value;
            setStoredValue(valueToStore);
            window.localStorage.setItem(key, JSON.stringify(valueToStore));
        } catch (error) {
            console.error(error);
        }
    };

    return [storedValue, setValue];
}

// Custom Hook - useDebounce
function useDebounce(value, delay = 500) {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        return () => clearTimeout(handler);
    }, [value, delay]);

    return debouncedValue;
}

// useReducer - مدیریت state پیچیده
const initialState = { items: [], loading: false, error: null };

function reducer(state, action) {
    switch (action.type) {
        case 'FETCH_START':
            return { ...state, loading: true, error: null };
        case 'FETCH_SUCCESS':
            return { items: action.payload, loading: false, error: null };
        case 'FETCH_ERROR':
            return { ...state, loading: false, error: action.payload };
        case 'ADD_ITEM':
            return { ...state, items: [...state.items, action.payload] };
        case 'DELETE_ITEM':
            return {
                ...state,
                items: state.items.filter(item => item.id !== action.payload)
            };
        default:
            return state;
    }
}

function TodoApp() {
    const [state, dispatch] = useReducer(reducer, initialState);
    
    const addItem = (item) => dispatch({ type: 'ADD_ITEM', payload: item });
    const deleteItem = (id) => dispatch({ type: 'DELETE_ITEM', payload: id });
    
    return (
        <div>
            {state.loading && <p>⏳ در حال بارگذاری...</p>}
            {state.error && <p>❌ {state.error}</p>}
            {state.items.map(item => (
                <div key={item.id}>
                    {item.text}
                    <button onClick={() => deleteItem(item.id)}>🗑️</button>
                </div>
            ))}
        </div>
    );
}

// useMemo - بهینه‌سازی محاسبات
function ExpensiveList({ items, filter }) {
    const filteredItems = useMemo(() => {
        console.log('🔄 محاسبه فیلتر...');
        return items.filter(item => 
            item.name.toLowerCase().includes(filter.toLowerCase())
        );
    }, [items, filter]);
    
    return <ul>{filteredItems.map(item => <li key={item.id}>{item.name}</li>)}</ul>;
}

// useCallback - memoize کردن handler
function SearchInput({ onSearch }) {
    const [value, setValue] = useState('');
    
    const handleChange = useCallback((e) => {
        setValue(e.target.value);
        onSearch(e.target.value);
    }, [onSearch]);
    
    return <input value={value} onChange={handleChange} />;
}`,
        language: "jsx",
        tips: [
          "useEffect cleanup function را فراموش نکنید - memory leak جلوگیری می‌کند",
          "Custom Hooks منطق قابل استفاده مجدد را استخراج می‌کنند",
          "useMemo و useCallback فقط وقتی نیاز است - over-optimization نکنید",
          "useReducer برای state‌های پیچیده بهتر از useState است"
        ],
        exercises: [
          {
            question: "یک Custom Hook بنویسید که fetch data را مدیریت کند با loading، error و retry.",
            answer: `function useFetch(url, options = {}) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [retryCount, setRetryCount] = useState(0);

    const fetchData = useCallback(async () => {
        try {
            setLoading(true);
            setError(null);
            
            const response = await fetch(url, {
                ...options,
                signal: AbortSignal.timeout(10000) // 10s timeout
            });
            
            if (!response.ok) {
                throw new Error(\`HTTP \${response.status}\`);
            }
            
            const result = await response.json();
            setData(result);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }, [url]);

    useEffect(() => {
        fetchData();
    }, [fetchData, retryCount]);

    const retry = () => setRetryCount(prev => prev + 1);

    return { data, loading, error, retry };
}

// استفاده:
function UserList() {
    const { data: users, loading, error, retry } = useFetch('/api/users');

    if (loading) return <Spinner />;
    if (error) return (
        <div>
            <p>❌ خطا: {error}</p>
            <button onClick={retry}>🔄 تلاش مجدد</button>
        </div>
    );
    
    return (
        <ul>
            {users?.map(user => (
                <li key={user.id}>{user.name}</li>
            ))}
        </ul>
    );
}`
          }
        ]
      }
    ]
  },
  {
    id: "nodejs",
    title: "Node.js و Backend",
    emoji: "🖥️",
    description: "ساخت سرور و API با Node.js، Express، دیتابیس و احراز هویت",
    icon: "fa-server",
    color: "from-green-500 to-emerald-500",
    lessons: [
      {
        id: "node-basics",
        title: "مبانی Node.js و Express",
        emoji: "🚀",
        content: `🔹 **Node.js چیست؟**

Node.js یک runtime environment برای اجرای JavaScript خارج از مرورگر است. Node.js بر پایه V8 engine گوگل کروم ساخته شده و از مدل non-blocking I/O استفاده می‌کند که آن را برای ساخت سرورهای پرسرعت و scalable مناسب می‌سازد.

🔹 **Express.js:**

Express محبوب‌ترین web framework برای Node.js است. Express ساختاری ساده و انعطاف‌پذیر برای ساخت web application و API فراهم می‌کند.

🔹 **Middleware:**

Middleware توابعی هستند که به request و response دسترسی دارند و می‌توانند آنها را تغییر دهند، request را terminate کنند یا به middleware بعدی پاس دهند.

🔹 **Routing:**

Routing مشخص می‌کند هر HTTP request به کدام URL و method با چه کدی پاسخ داده شود.

🔹 **RESTful API:**

REST (Representational State Transfer) یک سبک معماری برای طراحی API است. اصول REST شامل Stateless بودن، استفاده از HTTP methods استاندارد و ساختار URL منظم است.`,
        code: `// server.js - راه‌اندازی Express
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware‌های سراسری
app.use(helmet()); // امنیت HTTP headers
app.use(cors()); // Cross-Origin Resource Sharing
app.use(morgan('dev')); // لاگ درخواست‌ها
app.use(express.json()); // پارس JSON body
app.use(express.urlencoded({ extended: true })); // پارس form data

// Custom Middleware - احراز هویت
const authenticate = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];
    
    if (!token) {
        return res.status(401).json({ 
            error: '❌ توکن احراز هویت ارسال نشده' 
        });
    }
    
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(403).json({ 
            error: '❌ توکن نامعتبر یا منقضی شده' 
        });
    }
};

// Routes - کاربران
app.get('/api/users', async (req, res) => {
    try {
        const { page = 1, limit = 10, search } = req.query;
        const skip = (page - 1) * limit;
        
        let query = {};
        if (search) {
            query.name = { $regex: search, $options: 'i' };
        }
        
        const users = await User.find(query)
            .skip(skip)
            .limit(parseInt(limit))
            .select('-password');
        
        const total = await User.countDocuments(query);
        
        res.json({
            success: true,
            data: users,
            pagination: {
                page: parseInt(page),
                limit: parseInt(limit),
                total,
                pages: Math.ceil(total / limit)
            }
        });
    } catch (error) {
        res.status(500).json({ 
            error: '❌ خطای سرور', 
            details: error.message 
        });
    }
});

// POST - ایجاد کاربر
app.post('/api/users', async (req, res) => {
    try {
        const { name, email, password, role } = req.body;
        
        // Validation
        if (!name || !email || !password) {
            return res.status(400).json({ 
                error: '❌ فیلدهای اجباری را پر کنید' 
            });
        }
        
        // بررسی تکراری نبودن ایمیل
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(409).json({ 
                error: '❌ این ایمیل قبلاً ثبت شده' 
            });
        }
        
        // هش کردن رمز عبور
        const hashedPassword = await bcrypt.hash(password, 12);
        
        const user = await User.create({
            name,
            email,
            password: hashedPassword,
            role: role || 'user'
        });
        
        // ساخت توکن
        const token = jwt.sign(
            { id: user._id, email: user.email },
            process.env.JWT_SECRET,
            { expiresIn: '7d' }
        );
        
        res.status(201).json({
            success: true,
            data: {
                id: user._id,
                name: user.name,
                email: user.email,
                token
            }
        });
    } catch (error) {
        res.status(500).json({ 
            error: '❌ خطا در ایجاد کاربر',
            details: error.message 
        });
    }
});

// PUT - به‌روزرسانی کاربر
app.put('/api/users/:id', authenticate, async (req, res) => {
    try {
        const { id } = req.params;
        const updates = req.body;
        
        // جلوگیری از تغییر رمز از این route
        delete updates.password;
        
        const user = await User.findByIdAndUpdate(
            id,
            { $set: updates },
            { new: true, runValidators: true }
        ).select('-password');
        
        if (!user) {
            return res.status(404).json({ 
                error: '❌ کاربر یافت نشد' 
            });
        }
        
        res.json({ success: true, data: user });
    } catch (error) {
        res.status(500).json({ error: '❌ خطای سرور' });
    }
});

// DELETE - حذف کاربر
app.delete('/api/users/:id', authenticate, async (req, res) => {
    try {
        const { id } = req.params;
        
        const user = await User.findByIdAndDelete(id);
        
        if (!user) {
            return res.status(404).json({ 
                error: '❌ کاربر یافت نشد' 
            });
        }
        
        res.json({ 
            success: true, 
            message: '✅ کاربر با موفقیت حذف شد' 
        });
    } catch (error) {
        res.status(500).json({ error: '❌ خطای سرور' });
    }
});

// Error Handling Middleware
app.use((err, req, res, next) => {
    console.error('🔥 Error:', err);
    
    const statusCode = err.statusCode || 500;
    res.status(statusCode).json({
        error: err.message || '❌ خطای داخلی سرور',
        ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
    });
});

// 404 Handler
app.use('*', (req, res) => {
    res.status(404).json({ 
        error: '❌ مسیر مورد نظر یافت نشد' 
    });
});

app.listen(PORT, () => {
    console.log(\`🚀 سرور روی پورت \${PORT} اجرا شد\`);
});`,
        language: "javascript",
        tips: [
          "همیشه error handling داشته باشید - هیچ خطایی نباید unhandled بماند",
          "از helmet برای امنیت HTTP headers استفاده کنید",
          "Validation را سمت سرور انجام دهید - سمت کلاینت کافی نیست",
          "رمز عبور را هرگز plain text ذخیره نکنید - bcrypt استفاده کنید"
        ],
        exercises: [
          {
            question: "یک API برای مدیریت محصولات فروشگاه بسازید با CRUD کامل، pagination و فیلتر.",
            answer: `// routes/products.js
const express = require('express');
const router = express.Router();
const Product = require('../models/Product');
const { authenticate, authorize } = require('../middleware/auth');

// GET /api/products - لیست محصولات با فیلتر و pagination
router.get('/', async (req, res) => {
    try {
        const { 
            page = 1, 
            limit = 12, 
            category, 
            minPrice, 
            maxPrice, 
            sort = '-createdAt',
            search 
        } = req.query;

        const filter = {};
        
        if (category) filter.category = category;
        if (minPrice || maxPrice) {
            filter.price = {};
            if (minPrice) filter.price.$gte = Number(minPrice);
            if (maxPrice) filter.price.$lte = Number(maxPrice);
        }
        if (search) {
            filter.$or = [
                { name: { $regex: search, $options: 'i' } },
                { description: { $regex: search, $options: 'i' } }
            ];
        }

        const skip = (page - 1) * limit;
        
        const [products, total] = await Promise.all([
            Product.find(filter)
                .sort(sort)
                .skip(skip)
                .limit(parseInt(limit))
                .populate('category', 'name'),
            Product.countDocuments(filter)
        ]);

        res.json({
            success: true,
            data: products,
            pagination: {
                page: parseInt(page),
                limit: parseInt(limit),
                total,
                pages: Math.ceil(total / limit),
                hasNext: skip + parseInt(limit) < total,
                hasPrev: page > 1
            }
        });
    } catch (error) {
        res.status(500).json({ error: '❌ خطا در دریافت محصولات' });
    }
});

// POST /api/products - ایجاد محصول (فقط ادمین)
router.post('/', authenticate, authorize('admin'), async (req, res) => {
    try {
        const product = await Product.create({
            ...req.body,
            createdBy: req.user.id
        });
        
        res.status(201).json({ success: true, data: product });
    } catch (error) {
        if (error.name === 'ValidationError') {
            return res.status(400).json({ 
                error: '❌ داده‌های ورودی نامعتبر',
                details: Object.values(error.errors).map(e => e.message)
            });
        }
        res.status(500).json({ error: '❌ خطا در ایجاد محصول' });
    }
});

// PUT /api/products/:id - به‌روزرسانی محصول
router.put('/:id', authenticate, authorize('admin'), async (req, res) => {
    try {
        const product = await Product.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );

        if (!product) {
            return res.status(404).json({ error: '❌ محصول یافت نشد' });
        }

        res.json({ success: true, data: product });
    } catch (error) {
        res.status(500).json({ error: '❌ خطا در به‌روزرسانی' });
    }
});

// DELETE /api/products/:id - حذف محصول
router.delete('/:id', authenticate, authorize('admin'), async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);
        
        if (!product) {
            return res.status(404).json({ error: '❌ محصول یافت نشد' });
        }

        res.json({ success: true, message: '✅ محصول حذف شد' });
    } catch (error) {
        res.status(500).json({ error: '❌ خطا در حذف محصول' });
    }
});

module.exports = router;`
          }
        ]
      }
    ]
  },
  {
    id: "wordpress",
    title: "وردپرس حرفه‌ای",
    emoji: "📝",
    description: "طراحی و توسعه سایت‌های وردپرسی، قالب‌نویسی و افزونه‌نویسی",
    icon: "fa-wordpress",
    color: "from-blue-600 to-indigo-600",
    lessons: [
      {
        id: "wp-theme-dev",
        title: "قالب‌نویسی وردپرس از صفر",
        emoji: "🎨",
        content: `🔹 **ساختار فایل‌های قالب وردپرس:**

یک قالب وردپرس حداقل به دو فایل نیاز دارد: style.css (با هدر اطلاعات قالب) و index.php. اما یک قالب حرفه‌ای شامل فایل‌های متعددی است.

🔹 **Template Hierarchy:**

وردپرس یک سلسله مراتب برای انتخاب template دارد. مثلاً برای نمایش یک پست تک، ابتدا single-post.php، سپس single.php و در نهایت index.php را بررسی می‌کند.

🔹 **The Loop:**

The Loop مکانیزم اصلی وردپرس برای نمایش محتوا است. با while و have_posts() پست‌ها را یکی یکی نمایش می‌دهیم.

🔹 **Template Tags:**

وردپرس توابع مخصوصی (Template Tags) برای نمایش محتوا دارد مثل the_title()، the_content()، the_permalink() و...

🔹 **Functions.php:**

فایل functions.php قلب قالب است. در این فایل enqueue scripts/styles، ثبت menu‌ها، widget areas و custom post types انجام می‌شود.

🔹 **WordPress REST API:**

وردپرس یک REST API داخلی دارد که اجازه می‌دهد محتوا را به صورت JSON دریافت و ارسال کنید. این برای ساخت headless CMS یا اپلیکیشن‌های جداگانه عالی است.`,
        code: `/* style.css - هدر قالب */
/*
Theme Name: DevMaster Theme
Theme URI: https://devmaster.ir
Author: DevMaster Team
Description: قالب حرفه‌ای چندمنظوره وردپرس
Version: 1.0.0
License: GNU General Public License v2 or later
Text Domain: devmaster
*/

/* functions.php - تنظیمات اصلی قالب */
<?php
// جلوگیری از دسترسی مستقیم
if (!defined('ABSPATH')) exit;

// ============================================
// 🎨 تنظیمات اولیه قالب
// ============================================
function devmaster_setup() {
    // پشتیبانی از عنوان صفحه
    add_theme_support('title-tag');
    
    // پشتیبانی از تصویر شاخص
    add_theme_support('post-thumbnails');
    add_image_size('card-thumb', 400, 250, true);
    add_image_size('hero-image', 1920, 600, true);
    
    // ثبت منوها
    register_nav_menus(array(
        'primary'   => __('منوی اصلی', 'devmaster'),
        'footer'    => __('منوی فوتر', 'devmaster'),
    ));
    
    // پشتیبانی از HTML5
    add_theme_support('html5', array(
        'search-form', 'comment-form', 'comment-list', 'gallery', 'caption'
    ));
    
    // پشتیبانی از WooCommerce
    add_theme_support('woocommerce');
    
    // پشتیبانی از Custom Logo
    add_theme_support('custom-logo', array(
        'height'      => 60,
        'width'       => 200,
        'flex-height' => true,
        'flex-width'  => true,
    ));
}
add_action('after_setup_theme', 'devmaster_setup');

// ============================================
// 📦 Enqueue Scripts & Styles
// ============================================
function devmaster_scripts() {
    // استایل اصلی
    wp_enqueue_style(
        'devmaster-style',
        get_stylesheet_uri(),
        array(),
        wp_get_theme()->get('Version')
    );
    
    // استایل‌های اضافی
    wp_enqueue_style('devmaster-custom', get_template_directory_uri() . '/assets/css/custom.css');
    
    // فونت وزیرمتن
    wp_enqueue_style('vazir-font', 'https://cdn.jsdelivr.net/gh/rastikerdar/vazirmatn@v33.003/Vazirmatn-font-face.css');
    
    // JavaScript
    wp_enqueue_script('devmaster-main', get_template_directory_uri() . '/assets/js/main.js', array('jquery'), '1.0.0', true);
    
    // ارسال داده به JavaScript
    wp_localize_script('devmaster-main', 'devmasterData', array(
        'ajaxUrl' => admin_url('admin-ajax.php'),
        'nonce'   => wp_create_nonce('devmaster_nonce'),
        'themeUrl' => get_template_directory_uri(),
    ));
}
add_action('wp_enqueue_scripts', 'devmaster_scripts');

// ============================================
// 📋 ثبت Sidebar‌ها (Widget Areas)
// ============================================
function devmaster_widgets() {
    register_sidebar(array(
        'name'          => __('سایدبار اصلی', 'devmaster'),
        'id'            => 'sidebar-main',
        'before_widget' => '<div class="widget %2$s">',
        'after_widget'  => '</div>',
        'before_title'  => '<h3 class="widget-title">',
        'after_title'   => '</h3>',
    ));
    
    register_sidebar(array(
        'name'          => __('فوتر', 'devmaster'),
        'id'            => 'footer-widgets',
        'before_widget' => '<div class="footer-widget %2$s">',
        'after_widget'  => '</div>',
        'before_title'  => '<h4 class="footer-widget-title">',
        'after_title'   => '</h4>',
    ));
}
add_action('widgets_init', 'devmaster_widgets');

// ============================================
// 📝 Custom Post Type - نمونه‌کارها
// ============================================
function devmaster_portfolio_post_type() {
    $labels = array(
        'name'               => __('نمونه‌کارها', 'devmaster'),
        'singular_name'      => __('نمونه‌کار', 'devmaster'),
        'add_new'            => __('افزودن نمونه‌کار', 'devmaster'),
        'add_new_item'       => __('افزودن نمونه‌کار جدید', 'devmaster'),
        'edit_item'          => __('ویرایش نمونه‌کار', 'devmaster'),
        'all_items'          => __('همه نمونه‌کارها', 'devmaster'),
        'search_items'       => __('جستجوی نمونه‌کار', 'devmaster'),
        'not_found'          => __('نمونه‌کاری یافت نشد', 'devmaster'),
    );

    register_post_type('portfolio', array(
        'labels'             => $labels,
        'public'             => true,
        'has_archive'        => true,
        'menu_icon'          => 'dashicons-portfolio',
        'supports'           => array('title', 'editor', 'thumbnail', 'excerpt', 'custom-fields'),
        'rewrite'            => array('slug' => 'portfolio'),
        'show_in_rest'       => true, // پشتیبانی از Gutenberg
    ));
    
    // Taxonomy - دسته‌بندی نمونه‌کار
    register_taxonomy('portfolio_category', 'portfolio', array(
        'labels' => array(
            'name' => __('دسته‌بندی نمونه‌کارها', 'devmaster'),
        ),
        'hierarchical' => true,
        'show_in_rest' => true,
        'rewrite'      => array('slug' => 'portfolio-category'),
    ));
}
add_action('init', 'devmaster_portfolio_post_type');

// ============================================
// 🔧 بهینه‌سازی‌ها
// ============================================
// حذف emoji
remove_action('wp_head', 'print_emoji_detection_script', 7);
remove_action('wp_print_styles', 'print_emoji_styles');

// حذف version
remove_action('wp_head', 'wp_generator');

// غیرفعال کردن XML-RPC
add_filter('xmlrpc_enabled', '__return_false');

// محدود کردن تعداد revisions
add_filter('wp_revisions_to_keep', function() { return 5; });`,
        language: "php",
        tips: [
          "همیشه از توابع وردپرس استفاده کنید - SQL مستقیم ناامن است",
          "فایل‌های قالب را به بخش‌های کوچک تقسیم کنید - header.php, footer.php, sidebar.php",
          "از Child Theme برای تغییرات استفاده کنید - آپدیت قالب تغییرات شما را از بین نمی‌برد",
          "security: از nonce، sanitization و escaping همیشه استفاده کنید"
        ],
        exercises: [
          {
            question: "یک صفحه template سفارشی برای نمایش نمونه‌کارها با فیلتر دسته‌بندی بسازید.",
            answer: `<?php
/**
 * Template Name: نمونه‌کارها
 * Template Post Type: page
 */

get_header();

// دریافت دسته‌بندی‌های نمونه‌کار
$categories = get_terms(array(
    'taxonomy'   => 'portfolio_category',
    'hide_empty' => true,
));

// دریافت فیلتر از URL
$current_category = isset($_GET['category']) ? sanitize_text_field($_GET['category']) : '';

// ساخت query
$args = array(
    'post_type'      => 'portfolio',
    'posts_per_page' => 12,
    'paged'          => get_query_var('paged') ?: 1,
);

if ($current_category) {
    $args['tax_query'] = array(array(
        'taxonomy' => 'portfolio_category',
        'field'    => 'slug',
        'terms'    => $current_category,
    ));
}

$portfolio_query = new WP_Query($args);
?>

<section class="portfolio-section">
    <div class="container">
        <h1 class="page-title">🎨 نمونه‌کارهای ما</h1>
        
        <!-- فیلتر دسته‌بندی -->
        <div class="portfolio-filter">
            <a href="<?php echo get_permalink(); ?>" 
               class="filter-btn <?php echo !$current_category ? 'active' : ''; ?>">
                همه
            </a>
            <?php foreach ($categories as $cat): ?>
                <a href="<?php echo add_query_arg('category', $cat->slug); ?>"
                   class="filter-btn <?php echo $current_category === $cat->slug ? 'active' : ''; ?>">
                    <?php echo esc_html($cat->name); ?>
                </a>
            <?php endforeach; ?>
        </div>
        
        <!-- گرید نمونه‌کارها -->
        <div class="portfolio-grid">
            <?php if ($portfolio_query->have_posts()): ?>
                <?php while ($portfolio_query->have_posts()): $portfolio_query->the_post(); ?>
                    <article class="portfolio-item" data-category="<?php 
                        $cats = get_the_terms(get_the_ID(), 'portfolio_category');
                        echo $cats ? esc_attr($cats[0]->slug) : '';
                    ?>">
                        <div class="portfolio-image">
                            <?php if (has_post_thumbnail()): ?>
                                <?php the_post_thumbnail('card-thumb'); ?>
                            <?php endif; ?>
                            <div class="portfolio-overlay">
                                <a href="<?php the_permalink(); ?>" class="view-btn">
                                    مشاهده پروژه 🔗
                                </a>
                            </div>
                        </div>
                        <div class="portfolio-info">
                            <h3><?php the_title(); ?></h3>
                            <p><?php echo wp_trim_words(get_the_excerpt(), 15); ?></p>
                            <div class="portfolio-meta">
                                <?php 
                                $cats = get_the_terms(get_the_ID(), 'portfolio_category');
                                if ($cats):
                                    foreach ($cats as $cat):
                                ?>
                                    <span class="cat-badge"><?php echo esc_html($cat->name); ?></span>
                                <?php endforeach; endif; ?>
                            </div>
                        </div>
                    </article>
                <?php endwhile; ?>
                
                <!-- Pagination -->
                <div class="pagination">
                    <?php
                    echo paginate_links(array(
                        'total'   => $portfolio_query->max_num_pages,
                        'current' => get_query_var('paged') ?: 1,
                        'prev_text' => '← قبلی',
                        'next_text' => 'بعدی →',
                    ));
                    ?>
                </div>
            <?php else: ?>
                <p class="no-results">😕 نمونه‌کاری یافت نشد</p>
            <?php endif; ?>
        </div>
    </div>
</section>

<?php 
wp_reset_postdata();
get_footer(); 
?>`
          }
        ]
      }
    ]
  },
  {
    id: "database",
    title: "دیتابیس و MongoDB",
    emoji: "🗄️",
    description: "طراحی دیتابیس، MongoDB، Mongoose و بهینه‌سازی کوئری‌ها",
    icon: "fa-database",
    color: "from-purple-500 to-pink-500",
    lessons: [
      {
        id: "mongodb-basics",
        title: "MongoDB و Mongoose - طراحی دیتابیس",
        emoji: "🍃",
        content: `🔹 **MongoDB چیست؟**

MongoDB یک دیتابیس NoSQL مبتنی بر سند (document) است. داده‌ها به صورت BSON (Binary JSON) ذخیره می‌شوند و ساختار انعطاف‌پذیری دارند. MongoDB برای اپلیکیشن‌های مدرن که نیاز به scalability بالا دارند عالی است.

🔹 **Mongoose:**

Mongoose یک ODM (Object Document Mapper) برای MongoDB در Node.js است. Mongoose schema-based solution برای مدل‌سازی داده‌ها فراهم می‌کند و validation، type casting و middleware را مدیریت می‌کند.

🔹 **Schema Design:**

طراحی Schema مهم‌ترین بخش کار با MongoDB است. باید تصمیم بگیرید داده‌ها را embed کنید یا reference.

🔹 **Embedding vs Referencing:**

• Embedding: داده مرتبط را درون سند اصلی ذخیره می‌کنیم - مناسب برای داده‌هایی که همیشه با هم خوانده می‌شوند
• Referencing: فقط ID را ذخیره و با populate داده مرتبط را می‌گیریم - مناسب برای داده‌های بزرگ یا shared

🔹 **Indexes:**

Index‌ها سرعت جستجو را به شدت افزایش می‌دهند. برای فیلدهایی که زیاد query می‌شوند index بسازید.`,
        code: `// config/database.js
const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI, {
            // گزینه‌های مهم
            maxPoolSize: 10,
            serverSelectionTimeoutMS: 5000,
            socketTimeoutMS: 45000,
        });
        console.log(\`✅ MongoDB متصل شد: \${conn.connection.host}\`);
    } catch (error) {
        console.error('❌ خطا در اتصال به MongoDB:', error.message);
        process.exit(1);
    }
};

module.exports = connectDB;

// models/User.js
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const validator = require('validator');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, '❌ نام الزامی است'],
        trim: true,
        minlength: [2, '❌ نام حداقل ۲ کاراکتر'],
        maxlength: [50, '❌ نام حداکثر ۵۰ کاراکتر'],
    },
    email: {
        type: String,
        required: [true, '❌ ایمیل الزامی است'],
        unique: true,
        lowercase: true,
        trim: true,
        validate: [validator.isEmail, '❌ ایمیل نامعتبر است'],
    },
    password: {
        type: String,
        required: [true, '❌ رمز عبور الزامی است'],
        minlength: [8, '❌ رمز عبور حداقل ۸ کاراکتر'],
        select: false, // در query‌ها برنگردد
    },
    role: {
        type: String,
        enum: ['user', 'admin', 'editor'],
        default: 'user',
    },
    avatar: {
        type: String,
        default: 'default-avatar.png',
    },
    isActive: {
        type: Boolean,
        default: true,
    },
    profile: {
        bio: { type: String, maxlength: 500 },
        website: String,
        location: String,
        phone: String,
    },
    preferences: {
        language: { type: String, default: 'fa' },
        theme: { type: String, enum: ['light', 'dark'], default: 'dark' },
        notifications: { type: Boolean, default: true },
    },
    resetPasswordToken: String,
    resetPasswordExpire: Date,
    lastLogin: Date,
}, {
    timestamps: true, // createdAt و updatedAt خودکار
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
});

// Index‌ها برای بهبود performance
userSchema.index({ email: 1 });
userSchema.index({ name: 'text', 'profile.bio': 'text' }); // Text search
userSchema.index({ createdAt: -1 });

// Virtual - fullname
userSchema.virtual('fullName').get(function() {
    return this.name;
});

// Middleware - قبل از ذخیره
userSchema.pre('save', async function(next) {
    // هش کردن رمز عبور فقط اگر تغییر کرده
    if (!this.isModified('password')) return next();
    
    const salt = await bcrypt.genSalt(12);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

// Method - بررسی رمز عبور
userSchema.methods.comparePassword = async function(candidatePassword) {
    return await bcrypt.compare(candidatePassword, this.password);
};

// Method - ساخت توکن ریست
userSchema.methods.getResetToken = function() {
    const resetToken = require('crypto').randomBytes(32).toString('hex');
    this.resetPasswordToken = require('crypto')
        .createHash('sha256')
        .update(resetToken)
        .digest('hex');
    this.resetPasswordExpire = Date.now() + 30 * 60 * 1000; // 30 دقیقه
    return resetToken;
};

// Static - جستجوی کاربران
userSchema.statics.searchUsers = function(searchTerm) {
    return this.find({
        $text: { $search: searchTerm }
    }).select('name email avatar');
};

const User = mongoose.model('User', userSchema);
module.exports = User;

// models/Product.js - با Referencing
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    description: String,
    price: {
        type: Number,
        required: true,
        min: [0, '❌ قیمت نمی‌تواند منفی باشد'],
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category', // Reference به مدل Category
        required: true,
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    images: [String],
    tags: [String],
    stock: {
        type: Number,
        default: 0,
        min: 0,
    },
    status: {
        type: String,
        enum: ['draft', 'published', 'archived'],
        default: 'draft',
    },
    reviews: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Review',
    }],
}, { timestamps: true });

// Index مرکب
productSchema.index({ category: 1, price: 1 });
productSchema.index({ name: 'text', description: 'text', tags: 'text' });

// Middleware - بعد از حذف محصول، reviews هم حذف شوند
productSchema.pre('remove', async function(next) {
    await Review.deleteMany({ product: this._id });
    next();
});

const Product = mongoose.model('Product', productSchema);
module.exports = Product;

// controllers/productController.js - کوئری‌های پیشرفته
const Product = require('../models/Product');

// جستجوی پیشرفته با فیلتر، sort و pagination
exports.getProducts = async (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 12;
    const skip = (page - 1) * limit;

    // ساخت فیلتر داینامیک
    const filter = {};
    
    if (req.query.category) filter.category = req.query.category;
    if (req.query.minPrice || req.query.maxPrice) {
        filter.price = {};
        if (req.query.minPrice) filter.price.$gte = Number(req.query.minPrice);
        if (req.query.maxPrice) filter.price.$lte = Number(req.query.maxPrice);
    }
    if (req.query.search) {
        filter.$text = { $search: req.query.search };
    }
    if (req.query.tags) {
        filter.tags = { $in: req.query.tags.split(',') };
    }

    // Sort
    const sort = req.query.sort || '-createdAt';

    try {
        const [products, total] = await Promise.all([
            Product.find(filter)
                .populate('category', 'name slug')
                .populate('createdBy', 'name avatar')
                .sort(sort)
                .skip(skip)
                .limit(limit)
                .lean(), // Performance optimization
            Product.countDocuments(filter)
        ]);

        res.json({
            success: true,
            data: products,
            pagination: {
                page,
                limit,
                total,
                pages: Math.ceil(total / limit),
            }
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Aggregation - آمار محصولات
exports.getProductStats = async (req, res) => {
    try {
        const stats = await Product.aggregate([
            { $match: { status: 'published' } },
            {
                $group: {
                    _id: '$category',
                    count: { $sum: 1 },
                    avgPrice: { $avg: '$price' },
                    minPrice: { $min: '$price' },
                    maxPrice: { $max: '$price' },
                    totalStock: { $sum: '$stock' },
                }
            },
            {
                $lookup: {
                    from: 'categories',
                    localField: '_id',
                    foreignField: '_id',
                    as: 'categoryInfo'
                }
            },
            { $unwind: '$categoryInfo' },
            {
                $project: {
                    categoryName: '$categoryInfo.name',
                    count: 1,
                    avgPrice: { $round: ['$avgPrice', 0] },
                    minPrice: 1,
                    maxPrice: 1,
                    totalStock: 1,
                }
            },
            { $sort: { count: -1 } }
        ]);

        res.json({ success: true, data: stats });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};`,
        language: "javascript",
        tips: [
          "برای فیلدهایی که زیاد query می‌شوند index بسازید",
          "از lean() برای query‌های فقط خواندنی استفاده کنید - performance بالاتر",
          "Embedding برای داده‌های کوچک و همیشه همراه، Referencing برای داده‌های بزرگ",
          "Aggregate Pipeline برای گزارش‌گیری و محاسبات پیچیده عالی است"
        ],
        exercises: [
          {
            question: "یک aggregation pipeline بنویسید که پرفروش‌ترین محصولات هر دسته‌بندی را با تعداد فروش و درآمد کل نشان دهد.",
            answer: `// Aggregation - پرفروش‌ترین محصولات هر دسته‌بندی
const getTopProductsByCategory = async () => {
    const result = await Order.aggregate([
        // مرحله 1: فقط سفارش‌های تکمیل شده
        { $match: { status: 'completed' } },
        
        // مرحله 2: باز کردن آیتم‌های سفارش
        { $unwind: '$items' },
        
        // مرحله 3: دریافت اطلاعات محصول
        {
            $lookup: {
                from: 'products',
                localField: 'items.product',
                foreignField: '_id',
                as: 'productInfo'
            }
        },
        { $unwind: '$productInfo' },
        
        // مرحله 4: گروه‌بندی بر اساس محصول
        {
            $group: {
                _id: '$items.product',
                productName: { $first: '$productInfo.name' },
                category: { $first: '$productInfo.category' },
                totalSold: { $sum: '$items.quantity' },
                totalRevenue: { 
                    $sum: { $multiply: ['$items.price', '$items.quantity'] }
                },
                avgRating: { $avg: '$productInfo.rating' }
            }
        },
        
        // مرحله 5: دریافت اطلاعات دسته‌بندی
        {
            $lookup: {
                from: 'categories',
                localField: 'category',
                foreignField: '_id',
                as: 'categoryInfo'
            }
        },
        { $unwind: '$categoryInfo' },
        
        // مرحله 6: مرتب‌سازی بر اساس تعداد فروش
        { $sort: { totalSold: -1 } },
        
        // مرحله 7: گروه‌بندی بر اساس دسته‌بندی و گرفتن 5 تای برتر
        {
            $group: {
                _id: '$categoryInfo.name',
                topProducts: {
                    $push: {
                        productId: '$_id',
                        name: '$productName',
                        totalSold: 1,
                        totalRevenue: { $round: ['$totalRevenue', 0] },
                        avgRating: { $round: ['$avgRating', 1] }
                    }
                }
            }
        },
        
        // مرحله 8: فقط 5 تای برتر هر دسته
        {
            $project: {
                category: '$_id',
                topProducts: { $slice: ['$topProducts', 5] }
            }
        }
    ]);
    
    return result;
};`
          }
        ]
      }
    ]
  },
  {
    id: "deployment",
    title: "استقرار و DevOps",
    emoji: "🚀",
    description: "Deploy پروژه، Docker، CI/CD و مدیریت سرور",
    icon: "fa-cloud",
    color: "from-teal-500 to-cyan-500",
    lessons: [
      {
        id: "deploy-basics",
        title: "استقرار پروژه روی سرور",
        emoji: "🌐",
        content: `🔹 **روش‌های Deploy:**

برای استقرار پروژه‌های وب چندین روش وجود دارد:
1. VPS (سرور مجازی) - کنترل کامل، مناسب پروژه‌های متوسط تا بزرگ
2. Shared Hosting - ارزان، مناسب سایت‌های وردپرسی
3. PaaS (مثل Heroku, Railway) - ساده، مناسب پروژه‌های کوچک
4. Cloud (AWS, DigitalOcean) - مقیاس‌پذیر، مناسب پروژه‌های بزرگ

🔹 **Docker:**

Docker ابزاری برای ساخت container‌ها است. Container یک محیط ایزوله و قابل حمل برای اجرای اپلیکیشن فراهم می‌کند.

🔹 **Nginx:**

Nginx یک web server و reverse proxy قدرتمند است. برای serve فایل‌های static، load balancing و SSL termination استفاده می‌شود.

🔹 **SSL/HTTPS:**

با Let's Encrypt می‌توانید SSL رایگان بگیرید. Certbot نصب و تمدید خودکار گواهی SSL را انجام می‌دهد.

🔹 **CI/CD:**

CI/CD (Continuous Integration/Continuous Deployment) فرآیند خودکارسازی build، test و deploy است. GitHub Actions، GitLab CI و Jenkins ابزارهای محبوب هستند.`,
        code: `# ============================================
# 🐳 Dockerfile - برای اپلیکیشن Node.js
# ============================================

# Stage 1: Build
FROM node:20-alpine AS builder

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm ci --only=production

# Copy source and build
COPY . .
RUN npm run build

# Stage 2: Production
FROM node:20-alpine AS production

WORKDIR /app

# Create non-root user
RUN addgroup -g 1001 -S nodejs && \\
    adduser -S nextjs -u 1001

# Copy built assets
COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next
COPY --from=builder --chown=nextjs:nodejs /app/node_modules ./node_modules
COPY --from=builder --chown=nextjs:nodejs /app/package.json ./package.json
COPY --from=builder --chown=nextjs:nodejs /app/public ./public

USER nextjs

EXPOSE 3000

ENV NODE_ENV=production

CMD ["npm", "start"]

# ============================================
# 🐳 docker-compose.yml
# ============================================
# version: '3.8'
# services:
#   app:
#     build: .
#     container_name: myapp
#     restart: always
#     ports:
#       - "3000:3000"
#     environment:
#       - NODE_ENV=production
#       - MONGODB_URI=mongodb://mongo:27017/myapp
#       - REDIS_URL=redis://redis:6379
#     depends_on:
#       - mongo
#       - redis
#     networks:
#       - app-network
#
#   mongo:
#     image: mongo:7
#     container_name: mongodb
#     restart: always
#     volumes:
#       - mongo-data:/data/db
#     ports:
#       - "27017:27017"
#     networks:
#       - app-network
#
#   redis:
#     image: redis:7-alpine
#     container_name: redis
#     restart: always
#     volumes:
#       - redis-data:/data
#     networks:
#       - app-network
#
#   nginx:
#     image: nginx:alpine
#     container_name: nginx
#     restart: always
#     ports:
#       - "80:80"
#       - "443:443"
#     volumes:
#       - ./nginx.conf:/etc/nginx/nginx.conf
#       - ./ssl:/etc/nginx/ssl
#     depends_on:
#       - app
#     networks:
#       - app-network
#
# volumes:
#   mongo-data:
#   redis-data:
#
# networks:
#   app-network:
#     driver: bridge

# ============================================
# 🔧 Nginx Configuration
# ============================================
# /etc/nginx/sites-available/myapp

# server {
#     listen 80;
#     server_name example.ir www.example.ir;
#     return 301 https://$server_name$request_uri;
# }
#
# server {
#     listen 443 ssl http2;
#     server_name example.ir www.example.ir;
#
#     ssl_certificate /etc/nginx/ssl/fullchain.pem;
#     ssl_certificate_key /etc/nginx/ssl/privkey.pem;
#     
#     # Security headers
#     add_header X-Frame-Options "SAMEORIGIN" always;
#     add_header X-Content-Type-Options "nosniff" always;
#     add_header X-XSS-Protection "1; mode=block" always;
#     add_header Strict-Transport-Security "max-age=31536000" always;
#
#     # Gzip compression
#     gzip on;
#     gzip_types text/plain text/css application/json application/javascript;
#
#     # Static files
#     location /_next/static/ {
#         proxy_pass http://localhost:3000;
#         expires 365d;
#         add_header Cache-Control "public, immutable";
#     }
#
#     # API and app
#     location / {
#         proxy_pass http://localhost:3000;
#         proxy_http_version 1.1;
#         proxy_set_header Upgrade $http_upgrade;
#         proxy_set_header Connection 'upgrade';
#         proxy_set_header Host $host;
#         proxy_set_header X-Real-IP $remote_addr;
#         proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
#         proxy_set_header X-Forwarded-Proto $scheme;
#         proxy_cache_bypass $http_upgrade;
#     }
# }

# ============================================
# 🔄 GitHub Actions CI/CD
# ============================================
# .github/workflows/deploy.yml

# name: Deploy to Production
#
# on:
#   push:
#     branches: [main]
#
# jobs:
#   deploy:
#     runs-on: ubuntu-latest
#     steps:
#       - uses: actions/checkout@v4
#
#       - name: Setup Node.js
#         uses: actions/setup-node@v4
#         with:
#           node-version: '20'
#           cache: 'npm'
#
#       - name: Install dependencies
#         run: npm ci
#
#       - name: Run tests
#         run: npm test
#
#       - name: Build
#         run: npm run build
#
#       - name: Deploy to server
#         uses: appleboy/ssh-action@master
#         with:
#           host: \${{ secrets.SERVER_HOST }}
#           username: \${{ secrets.SERVER_USER }}
#           key: \${{ secrets.SSH_PRIVATE_KEY }}
#           script: |
#             cd /var/www/myapp
#             git pull origin main
#             docker-compose down
#             docker-compose up -d --build
#             docker system prune -f

# ============================================
# 📋 دستورات سرور (Linux)
# ============================================
# # نصب Docker
# curl -fsSL https://get.docker.com -o get-docker.sh
# sh get-docker.sh
#
# # نصب Docker Compose
# sudo apt install docker-compose
#
# # نصب Certbot (SSL)
# sudo apt install certbot python3-certbot-nginx
# sudo certbot --nginx -d example.ir -d www.example.ir
#
# # راه‌اندازی پروژه
# git clone https://github.com/user/repo.git
# cd repo
# docker-compose up -d --build
#
# # بررسی وضعیت
# docker-compose ps
# docker-compose logs -f app
#
# # تمدید SSL
# sudo certbot renew --dry-run`,
        language: "bash",
        tips: [
          "همیشه از HTTPS استفاده کنید - SSL رایگان با Let's Encrypt",
          "Docker محیط توسعه و production را یکسان می‌کند",
          "CI/CD فرآیند deploy را خودکار و قابل اعتماد می‌کند",
          "فایل .env را هرگز در Git commit نکنید"
        ],
        exercises: [
          {
            question: "یک docker-compose.yml بنویسید که شامل Next.js app، MongoDB و Nginx با SSL باشد.",
            answer: `# docker-compose.yml
version: '3.8'

services:
  app:
    build:
      context: .
      dockerfile: Dockerfile
    container_name: nextjs-app
    restart: always
    environment:
      - NODE_ENV=production
      - MONGODB_URI=mongodb://mongo:27017/myapp
      - NEXT_PUBLIC_API_URL=https://example.ir/api
    networks:
      - app-network
    labels:
      - "traefik.enable=true"

  mongo:
    image: mongo:7-jammy
    container_name: mongodb
    restart: always
    volumes:
      - mongo-data:/data/db
      - ./mongo-init.js:/docker-entrypoint-initdb.d/init.js:ro
    environment:
      - MONGO_INITDB_DATABASE=myapp
    networks:
      - app-network

  nginx:
    image: nginx:alpine
    container_name: nginx-proxy
    restart: always
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - ./nginx/default.conf:/etc/nginx/conf.d/default.conf
      - ./ssl/certs:/etc/nginx/ssl:ro
      - nginx-logs:/var/log/nginx
    depends_on:
      - app
    networks:
      - app-network

volumes:
  mongo-data:
    driver: local
  nginx-logs:
    driver: local

networks:
  app-network:
    driver: bridge`
          }
        ]
      }
    ]
  },
  {
    id: "market-ready",
    title: "آمادگی بازار کار",
    emoji: "💼",
    description: "مهارت‌های ضروری برای ورود موفق به بازار کار ایران در حوزه وب",
    icon: "fa-briefcase",
    color: "from-amber-500 to-orange-500",
    lessons: [
      {
        id: "career-guide",
        title: "راهنمای جامع ورود به بازار کار وب",
        emoji: "🎯",
        content: `🔹 **مسیرهای شغلی در حوزه وب:**

1. **Frontend Developer** - تمرکز بر UI/UX، React/Vue/Angular
2. **Backend Developer** - تمرکز بر سرور، API، دیتابیس
3. **Full Stack Developer** - ترکیب Frontend و Backend
4. **WordPress Developer** - طراحی سایت، قالب‌نویسی، افزونه‌نویسی
5. **DevOps Engineer** - استقرار، CI/CD، مدیریت سرور

🔹 **مهارت‌های ضروری برای بازار کار ایران:**

📌 **مهارت‌های فنی:**
• HTML5, CSS3, JavaScript (ES6+)
• React.js یا Vue.js
• Node.js + Express یا Laravel
• MongoDB یا MySQL/PostgreSQL
• Git و GitHub
• REST API طراحی و پیاده‌سازی
• آشنایی با Docker
• آشنایی با Linux

📌 **مهارت‌های نرم:**
• حل مسئله (Problem Solving)
• کار تیمی
• ارتباط مؤثر
• مدیریت زمان
• یادگیری مداوم
• مستندسازی

🔹 **نرخ‌های بازار کار ایران (۱۴۰۳):**

• جونیور (0-2 سال): ۱۵-۲۵ میلیون تومان
• مید-لول (2-4 سال): ۲۵-۴۵ میلیون تومان
• سنیور (4+ سال): ۴۵-۸۰+ میلیون تومان
• فریلنسر: بسته به پروژه، ۵-۵۰+ میلیون تومان

🔹 **نحوه پیدا کردن کار:**

1. **ساخت پورتفولیو** - ۳-۵ پروژه واقعی و حرفه‌ای
2. **LinkedIn** - پروفایل حرفه‌ای، شبکه‌سازی
3. **سایت‌های کاریابی** - جابینجا، کوئرا، ای-استخدام
4. **GitHub** - contribution به پروژه‌های open source
5. **شبکه‌سازی** - شرکت در رویدادها و meetup‌ها
6. **فریلنسری** - پونیشا، کارلنسر

🔹 **نکات مهم مصاحبه فنی:**

• الگوریتم و ساختمان داده پایه
• سوالات React (hooks, lifecycle, state management)
• طراحی API (RESTful principles)
• SQL و NoSQL
• Git workflow
• System Design (برای سطح سنیور)
• سوالات رفتاری (behavioral)`,
        tips: [
          "پورتفولیوی قوی بسازید - پروژه‌های واقعی بهتر از مدرک هستند",
          "GitHub خود را فعال نگه دارید - commit روزانه",
          "در جامعه برنامه‌نویسان فعال باشید - Discord, Telegram groups",
          "مستمر یاد بگیرید - تکنولوژی هر روز تغییر می‌کند",
          "پروژه‌های open source contribution تجربه عالی ایجاد می‌کند",
          "رزومه خود را کوتاه و مرتبط نگه دارید - حداکثر ۲ صفحه"
        ],
        exercises: [
          {
            question: "چک‌لیستی از مهارت‌هایی که باید برای مصاحبه Frontend Developer آماده کنید بنویسید.",
            answer: `## 📋 چک‌لیست آمادگی مصاحبه Frontend Developer

### HTML & CSS
- [ ] Semantic HTML5 tags
- [ ] Accessibility (ARIA, alt text, keyboard navigation)
- [ ] CSS Box Model
- [ ] Flexbox & Grid mastery
- [ ] Responsive Design & Media Queries
- [ ] CSS Animations & Transitions
- [ ] CSS Methodologies (BEM, SMACSS)
- [ ] CSS Preprocessors (Sass/SCSS)
- [ ] CSS-in-JS (Styled Components, Emotion)

### JavaScript
- [ ] ES6+ features (let/const, arrow functions, destructuring)
- [ ] Async/Await & Promises
- [ ] DOM manipulation
- [ ] Event handling & delegation
- [ ] Closures & scope
- [ ] Prototypes & classes
- [ ] Error handling
- [ ] Array/Object methods (map, filter, reduce)

### React
- [ ] Components & Props
- [ ] State management (useState, useReducer)
- [ ] Side effects (useEffect)
- [ ] Custom Hooks
- [ ] Context API
- [ ] React Router
- [ ] Performance optimization (useMemo, useCallback, React.memo)
- [ ] Testing (Jest, React Testing Library)
- [ ] State management libraries (Redux, Zustand, Jotai)

### Tools & Workflow
- [ ] Git & GitHub (branching, merging, PR)
- [ ] Package managers (npm, yarn, pnpm)
- [ ] Build tools (Vite, Webpack)
- [ ] Code quality (ESLint, Prettier)
- [ ] Browser DevTools
- [ ] Performance tools (Lighthouse, Web Vitals)

### Soft Skills
- [ ] Problem-solving approach
- [ ] Code review skills
- [ ] Communication
- [ ] Time estimation
- [ ] Working with designers (Figma)`
          }
        ]
      }
    ]
  }
];
