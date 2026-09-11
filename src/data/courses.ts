export interface Lesson {
  id: string;
  title: string;
  subtitle: string;
  content: string;
  code?: string;
  language?: string;
  outputPreview?: string;
  tips?: string[];
  warnings?: string[];
  diagrams?: string[];
  exercises?: { question: string; answer: string }[];
  estimatedTime?: number;
  difficulty?: 'مبتدی' | 'متوسط' | 'پیشرفته';
}

export interface Course {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  color: string;
  iconBg: string;
  lessons: Lesson[];
  prerequisites?: string[];
  outcomes?: string[];
  totalHours?: number;
}

export const courses: Course[] = [
  {
    id: "html-fundamentals",
    title: "مبانی HTML5",
    subtitle: "ساختار و اسکلت صفحات وب",
    description: "یادگیری کامل HTML5 از صفر شامل تگ‌ها، فرم‌ها، عناصر معنایی، چندرسانه‌ای و استانداردهای مدرن وب",
    color: "from-orange-500 to-red-500",
    iconBg: "bg-orange-500/10",
    totalHours: 20,
    prerequisites: ["آشنایی اولیه با کامپیوتر", "نصب مرورگر مدرن"],
    outcomes: [
      "ساختار کامل یک سند HTML را می‌شناسید",
      "تگ‌های معنایی HTML5 را به درستی استفاده می‌کنید",
      "فرم‌های حرفه‌ای با validation می‌سازید",
      "عناصر چندرسانه‌ای را پیاده‌سازی می‌کنید",
      "SEO-friendly HTML می‌نویسید"
    ],
    lessons: [
      {
        id: "html-intro",
        title: "مقدمه‌ای بر HTML و وب",
        subtitle: "HTML چیست و چگونه کار می‌کند؟",
        estimatedTime: 25,
        difficulty: "مبتدی",
        content: `## HTML چیست؟

HTML مخفف **HyperText Markup Language** است. این زبان، زبان نشانه‌گذاری استاندارد برای ساخت صفحات وب محسوب می‌شود. HTML یک زبان برنامه‌نویسی نیست، بلکه یک زبان توصیفی است که ساختار و محتوای صفحه وب را تعریف می‌کند.

## تاریخچه مختصر HTML

| نسخه | سال انتشار | ویژگی کلیدی |
|------|-----------|-------------|
| HTML 1.0 | 1993 | اولین نسخه رسمی |
| HTML 2.0 | 1995 | فرم‌ها و جداول |
| HTML 4.01 | 1999 | CSS پشتیبانی |
| XHTML | 2000 | ساختار XML-like |
| HTML5 | 2014 | عناصر معنایی، Canvas، Audio/Video |

## چگونه HTML کار می‌کند؟

وقتی شما آدرس یک وب‌سایت را در مرورگر وارد می‌کنید، مراحل زیر طی می‌شود:

**مرحله ۱:** مرورگر درخواست HTTP به سرور ارسال می‌کند
**مرحله ۲:** سرور فایل HTML مربوطه را پیدا و ارسال می‌کند
**مرحله ۳:** مرورگر HTML را parse کرده و DOM Tree می‌سازد
**مرحله ۴:** CSS parse و Render Tree ساخته می‌شود
**مرحله ۵:** صفحه روی صفحه نمایش رسم (Paint) می‌شود

## ساختار پایه یک سند HTML

هر سند HTML از بخش‌های مشخصی تشکیل شده که هر کدام وظیفه خاصی دارند:

- **DOCTYPE**: نوع سند و نسخه HTML را مشخص می‌کند
- **html**: عنصر ریشه که تمام محتوای صفحه را در بر می‌گیرد
- **head**: اطلاعات متا، عنوان، لینک‌ها و اسکریپت‌ها
- **body**: محتوای قابل مشاهده صفحه

## عناصر و تگ‌ها

در HTML ما با **عناصر** (Elements) سروکار داریم. هر عنصر از یک تگ باز و بسته تشکیل شده:

- تگ باز: \`<p>\`
- محتوا: \`سلام دنیا\`
- تگ بسته: \`</p>\`

برخی تگ‌ها خودبسته (self-closing) هستند مثل \`<img />\`، \`<br />\` و \`<input />\`.

## Attribute‌ها

تگ‌ها می‌توانند ویژگی‌ها (attributes) داشته باشند که اطلاعات اضافی درباره عنصر ارائه می‌دهند:

- \`class\`: برای استایل‌دهی و انتخاب با JavaScript
- \`id\`: شناسه یکتا برای عنصر
- \`src\`: آدرس منبع (برای تصاویر)
- \`href\`: آدرس لینک (برای anchor tags)
- \`style\`: استایل inline
- \`data-*\`: attributes سفارشی`,
        code: `<!DOCTYPE html>
<html lang="fa" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="اولین صفحه وب من">
    <meta name="author" content="نام شما">
    <title>اولین صفحه وب من</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <!-- هدر صفحه -->
    <header>
        <h1>به وب‌سایت من خوش آمدید</h1>
        <nav>
            <a href="#home">خانه</a>
            <a href="#about">درباره</a>
            <a href="#contact">تماس</a>
        </nav>
    </header>

    <!-- محتوای اصلی -->
    <main>
        <section id="home">
            <h2>صفحه اصلی</h2>
            <p>این یک پاراگراف نمونه است.</p>
        </section>
    </main>

    <!-- فوتر -->
    <footer>
        <p>&copy; ۱۴۰۳ - تمامی حقوق محفوظ است</p>
    </footer>
</body>
</html>`,
        language: "html",
        outputPreview: "یک صفحه وب ساده با هدر، ناوبری، محتوای اصلی و فوتر",
        tips: [
          "همیشه DOCTYPE را در اولین خط فایل HTML قرار دهید",
          "از lang و dir attributes برای مشخص کردن زبان و جهت متن استفاده کنید",
          "meta viewport برای ریسپانسیو بودن صفحات ضروری است",
          "تگ title برای SEO بسیار مهم است"
        ],
        warnings: [
          "هرگز تگ‌ها را به صورت تودرتوی نادرست نبندید",
          "از تگ‌های منسوخ شده مثل <font>، <center> و <marquee> استفاده نکنید"
        ],
        diagrams: [
          "DOCTYPE → html → head + body",
          "head → meta + title + link + style",
          "body → header + main + footer"
        ],
        exercises: [
          {
            question: "یک سند HTML کامل بسازید که شامل header با عنوان و navigation، main با سه section مختلف و footer باشد.",
            answer: `<!DOCTYPE html>
<html lang="fa" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ساختار کامل HTML</title>
</head>
<body>
    <header>
        <h1>وب‌سایت من</h1>
        <nav>
            <ul>
                <li><a href="#home">خانه</a></li>
                <li><a href="#services">خدمات</a></li>
                <li><a href="#contact">تماس</a></li>
            </ul>
        </nav>
    </header>

    <main>
        <section id="home">
            <h2>خانه</h2>
            <p>محتوای بخش خانه</p>
        </section>

        <section id="services">
            <h2>خدمات</h2>
            <p>محتوای بخش خدمات</p>
        </section>

        <section id="contact">
            <h2>تماس با ما</h2>
            <p>محتوای بخش تماس</p>
        </section>
    </main>

    <footer>
        <p>&copy; ۱۴۰۳ وب‌سایت من</p>
    </footer>
</body>
</html>`
          }
        ]
      },
      {
        id: "html-semantic",
        title: "عناصر معنایی HTML5",
        subtitle: "ساختاردهی هوشمند محتوا",
        estimatedTime: 30,
        difficulty: "مبتدی",
        content: `## چرا عناصر معنایی مهم هستند؟

عناصر معنایی (Semantic Elements) تگ‌هایی هستند که معنای محتوای خود را به طور واضح بیان می‌کنند. استفاده از این عناصر به جای \`<div>\` و \`<span>\` مزایای زیر را دارد:

**۱. دسترسی‌پذیری (Accessibility):**
صفحه‌خوان‌ها و ابزارهای کمکی می‌توانند ساختار صفحه را بهتر درک کنند و برای کاربران نابینا تجربه بهتری فراهم کنند.

**۲. سئو (SEO):**
موتورهای جستجو مانند گوگل، ساختار معنایی صفحه را بهتر درک می‌کنند و رتبه بهتری به صفحات معنایی می‌دهند.

**۳. خوانایی کد:**
کد HTML معنایی برای توسعه‌دهندگان دیگر قابل فهم‌تر است.

**۴. نگهداری آسان‌تر:**
ساختار مشخص، تغییرات آینده را ساده‌تر می‌کند.

## عناصر معنایی اصلی HTML5

### ساختار کلی صفحه:

- \`<header>\` - سربرگ صفحه یا بخش. معمولاً شامل لوگو، عنوان و navigation
- \`<nav>\` - بخش ناوبری. لینک‌های اصلی سایت
- \`<main>\` - محتوای اصلی صفحه. فقط یکبار در هر صفحه
- \`<article>\` - محتوای مستقل و کامل مثل یک پست بلاگ
- \`<section>\` - بخش‌بندی موضوعی محتوا
- \`<aside>\` - محتوای جانبی مثل sidebar
- \`<footer>\` - پاورقی صفحه یا بخش
- \`<figure>\` - محتوای تصویری با caption
- \`<figcaption>\` - توضیح تصویر
- \`<details>\` - محتوای قابل باز/بسته شدن
- \`<summary>\` - عنوان بخش details
- \`<mark>\` - متن هایلایت شده
- \`<time>\` - تاریخ و زمان
- \`<address>\` - اطلاعات تماس

### تفاوت article و section:

- **article**: محتوایی که به تنهایی معنادار است و می‌تواند مستقل توزیع شود (مثل یک پست بلاگ، یک کامنت، یک محصول)
- **section**: بخش‌بندی موضوعی محتوا که معمولاً یک عنوان دارد

### تفاوت div و section:

- **div**: بدون معنای خاص، فقط برای grouping و استایل‌دهی
- **section**: بخش معنادار از محتوا با موضوع مشخص`,
        code: `<!DOCTYPE html>
<html lang="fa" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>وبلاگ تکنولوژی</title>
</head>
<body>
    <header>
        <div class="logo">
            <img src="logo.svg" alt="لوگو وبلاگ">
            <h1>وبلاگ تکنولوژی</h1>
        </div>
        <nav aria-label="ناوبری اصلی">
            <ul>
                <li><a href="/" aria-current="page">خانه</a></li>
                <li><a href="/articles">مقالات</a></li>
                <li><a href="/tutorials">آموزش‌ها</a></li>
                <li><a href="/about">درباره ما</a></li>
            </ul>
        </nav>
    </header>

    <main>
        <!-- بخش معرفی -->
        <section aria-labelledby="intro-heading">
            <h2 id="intro-heading">آخرین مقالات</h2>
            <p>جدیدترین مطالب دنیای تکنولوژی</p>
        </section>

        <!-- لیست مقالات -->
        <section aria-labelledby="articles-heading">
            <h2 id="articles-heading" class="sr-only">مقالات</h2>

            <article>
                <header>
                    <figure>
                        <img src="react-article.jpg" 
                             alt="تصویر مقاله React 19">
                        <figcaption>نسخه جدید React</figcaption>
                    </figure>
                    <h3>
                        <a href="/articles/react-19">
                            معرفی React 19 و قابلیت‌های جدید
                        </a>
                    </h3>
                    <div class="meta">
                        <time datetime="2024-03-15">۲۵ اسفند ۱۴۰۲</time>
                        <address>
                            نوشته <a href="/author/ali">علی محمدی</a>
                        </address>
                    </div>
                </header>

                <div class="excerpt">
                    <p>
                        React 19 با قابلیت‌های جدیدی مانند Server Components،
                        Actions و بهبودهای عملکردی منتشر شده است...
                    </p>
                </div>

                <footer>
                    <ul class="tags">
                        <li><a href="/tag/react">React</a></li>
                        <li><a href="/tag/javascript">JavaScript</a></li>
                    </ul>
                </footer>
            </article>

            <article>
                <header>
                    <h3>
                        <a href="/articles/css-container">
                            CSS Container Queries revolution
                        </a>
                    </h3>
                    <time datetime="2024-03-14">۲۴ اسفند ۱۴۰۲</time>
                </header>
                <p>Container Queries بازی را عوض کردند...</p>
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
                    <li><a href="/cat/devops">DevOps (۱۲)</a></li>
                </ul>
            </nav>
        </section>

        <section>
            <h2>خبرنامه</h2>
            <form>
                <label for="newsletter-email">ایمیل شما:</label>
                <input type="email" id="newsletter-email" 
                       placeholder="example@mail.com" required>
                <button type="submit">عضویت</button>
            </form>
        </section>
    </aside>

    <footer>
        <nav aria-label="ناوبری فوتر">
            <ul>
                <li><a href="/privacy">حریم خصوصی</a></li>
                <li><a href="/terms">قوانین</a></li>
                <li><a href="/sitemap">نقشه سایت</a></li>
            </ul>
        </nav>
        <p>&copy; ۱۴۰۳ وبلاگ تکنولوژی</p>
    </footer>
</body>
</html>`,
        language: "html",
        tips: [
          "فقط یک <main> در هر صفحه داشته باشید",
          "از aria-label برای توضیح نقش عناصر ناوبری استفاده کنید",
          "هر <article> باید به تنهایی معنادار باشد",
          "از <time datetime='...'> برای تاریخ‌ها استفاده کنید"
        ],
        warnings: [
          "از <div> به عنوان جایگزین عناصر معنایی استفاده نکنید",
          "<h1> تا <h6> را سلسله‌مراتبی استفاده کنید - از h1 به h3 نپرید"
        ],
        diagrams: [
          "header > nav + logo",
          "main > section* > article* > header + content + footer",
          "aside > section* > nav/form",
          "footer > nav + copyright"
        ],
        exercises: [
          {
            question: "یک صفحه محصول فروشگاهی با ساختار معنایی کامل بسازید. شامل header با navigation، main با اطلاعات محصول (تصویر، عنوان، توضیحات، قیمت، دکمه خرید)، aside با محصولات مرتبط و footer.",
            answer: `<!DOCTYPE html>
<html lang="fa" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>لپ‌تاپ ایسوس ROG - فروشگاه دیجیتال</title>
</head>
<body>
    <header>
        <a href="/" class="logo">فروشگاه دیجیتال</a>
        <nav aria-label="ناوبری اصلی">
            <ul>
                <li><a href="/laptops">لپ‌تاپ</a></li>
                <li><a href="/phones">موبایل</a></li>
                <li><a href="/accessories">لوازم جانبی</a></li>
            </ul>
        </nav>
    </header>

    <main>
        <nav aria-label="مسیر navigation" class="breadcrumb">
            <ol>
                <li><a href="/">خانه</a></li>
                <li><a href="/laptops">لپ‌تاپ</a></li>
                <li aria-current="page">ایسوس ROG</li>
            </ol>
        </nav>

        <article class="product">
            <header>
                <h1>لپ‌تاپ گیمینگ ایسوس ROG Strix G16</h1>
                <p class="sku">کد محصول: ASUS-ROG-2024</p>
            </header>

            <figure class="product-gallery">
                <img src="asus-rog-main.jpg" 
                     alt="لپ‌تاپ ایسوس ROG Strix G16 - نمای جلو">
                <figcaption>نمای اصلی محصول</figcaption>
            </figure>

            <section class="product-info" aria-label="اطلاعات محصول">
                <h2>مشخصات</h2>
                <dl>
                    <dt>پردازنده</dt>
                    <dd>Intel Core i9-13980HX</dd>
                    <dt>رم</dt>
                    <dd>32GB DDR5</dd>
                    <dt>حافظه</dt>
                    <dd>1TB NVMe SSD</dd>
                    <dt>گرافیک</dt>
                    <dd>NVIDIA RTX 4070 8GB</dd>
                </dl>

                <section class="description">
                    <h2>توضیحات</h2>
                    <p>لپ‌تاپ گیمینگ ایسوس ROG Strix G16 با پردازنده نسل ۱۳ اینتل...</p>
                </section>

                <section class="pricing">
                    <p class="price">۸۵,۰۰۰,۰۰۰ تومان</p>
                    <p class="original-price"><s>۹۲,۰۰۰,۰۰۰</s></p>
                    <form>
                        <label for="quantity">تعداد:</label>
                        <input type="number" id="quantity" 
                               value="1" min="1" max="5">
                        <button type="submit">افزودن به سبد خرید</button>
                    </form>
                </section>
            </section>

            <section class="reviews" aria-label="نظرات کاربران">
                <h2>نظرات کاربران</h2>
                <article class="review">
                    <header>
                        <h3>عالی برای گیمینگ</h3>
                        <time datetime="2024-03-10">۲۰ اسفند ۱۴۰۲</time>
                    </header>
                    <p>کیفیت ساخت و عملکرد فوق‌العاده...</p>
                    <footer>
                        <address>توسط محمد رضایی</address>
                    </footer>
                </article>
            </section>
        </article>
    </main>

    <aside aria-label="محصولات مرتبط">
        <section>
            <h2>محصولات مشابه</h2>
            <ul>
                <li>
                    <article>
                        <a href="/product/msi-raider">
                            <img src="msi.jpg" alt="MSI Raider">
                            <h3>MSI Raider GE78</h3>
                            <p>۹۲,۰۰۰,۰۰۰ تومان</p>
                        </a>
                    </article>
                </li>
            </ul>
        </section>
    </aside>

    <footer>
        <address>
            <p>تهران، خیابان ولیعصر</p>
            <p>تلفن: <a href="tel:02112345678">۰۲۱-۱۲۳۴۵۶۷۸</a></p>
            <p>ایمیل: <a href="mailto:info@digishop.ir">info@digishop.ir</a></p>
        </address>
        <p>&copy; ۱۴۰۳ فروشگاه دیجیتال</p>
    </footer>
</body>
</html>`
          }
        ]
      },
      {
        id: "html-forms",
        title: "فرم‌ها و اعتبارسنجی",
        subtitle: "ساخت فرم‌های حرفه‌ای و قابل دسترس",
        estimatedTime: 35,
        difficulty: "متوسط",
        content: `## اهمیت فرم‌ها در وب

فرم‌ها اصلی‌ترین روش تعامل کاربر با وب‌سایت هستند. از فرم ورود و ثبت‌نام گرفته تا جستجو، پرداخت و ارسال نظر، همه از فرم‌ها استفاده می‌کنند.

## عناصر اصلی فرم

### تگ form:

تگ \`<form>\` ظرف تمام عناصر فرم است. دو attribute مهم دارد:
- **action**: آدرسی که داده‌ها به آن ارسال می‌شوند
- **method**: روش ارسال (GET یا POST)

### انواع input:

HTML5 انواع مختلف input ارائه می‌دهد:

| نوع | کاربرد | ویژگی |
|-----|--------|-------|
| text | متن ساده | maxlength, pattern |
| email | ایمیل | validation خودکار |
| password | رمز عبور | autocomplete |
| number | عدد | min, max, step |
| tel | تلفن | pattern |
| url | آدرس وب | validation URL |
| date | تاریخ | date picker |
| time | زمان | time picker |
| range | بازه عددی | slider |
| color | انتخاب رنگ | color picker |
| file | آپلود فایل | accept, multiple |
| checkbox | انتخاب چندتایی | checked |
| radio | انتخاب یکی | name مشترک |

### label و ارتباط با input:

هر input باید یک label مرتبط داشته باشد. این کار به دو روش انجام می‌شود:
1. **for/id**: مقدار for در label با id در input یکسان باشد
2. **wrapping**: input داخل label قرار گیرد

### fieldset و legend:

برای گروه‌بندی عناصر مرتبط از fieldset و legend استفاده می‌شود. این کار دسترسی‌پذیری را بهبود می‌دهد.

## اعتبارسنجی (Validation)

### اعتبارسنجی HTML5:

- **required**: فیلد اجباری
- **minlength/maxlength**: حداقل/حداکثر طول
- **min/max**: حداقل/حداکثر مقدار عددی
- **pattern**: الگوی regex
- **type**: نوع داده (email, url, number)
- **step**: گام‌های مجاز

### اعتبارسنجی سفارشی:

با attribute‌های زیر می‌توانید پیام خطای سفارشی نمایش دهید:
- \`pattern\`: الگوی معتبر
- \`title\`: توضیح الگو
- \`oninvalid\`: رویداد نامعتبر بودن`,
        code: `<!DOCTYPE html>
<html lang="fa" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>فرم ثبت‌نام</title>
    <style>
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body {
            font-family: 'Vazirmatn', sans-serif;
            background: linear-gradient(135deg, #0f172a, #1e293b);
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 20px;
        }
        .form-container {
            background: rgba(30, 41, 59, 0.8);
            backdrop-filter: blur(20px);
            border: 1px solid rgba(148, 163, 184, 0.1);
            border-radius: 20px;
            padding: 40px;
            max-width: 500px;
            width: 100%;
        }
        h1 { color: #e2e8f0; margin-bottom: 8px; font-size: 24px; }
        .subtitle { color: #94a3b8; margin-bottom: 32px; }
        .form-group { margin-bottom: 20px; }
        label {
            display: block;
            color: #cbd5e1;
            margin-bottom: 6px;
            font-size: 14px;
            font-weight: 500;
        }
        .required { color: #ef4444; }
        input, select, textarea {
            width: 100%;
            padding: 12px 16px;
            background: rgba(15, 23, 42, 0.6);
            border: 1px solid #334155;
            border-radius: 10px;
            color: #e2e8f0;
            font-size: 14px;
            transition: border-color 0.2s;
        }
        input:focus, select:focus, textarea:focus {
            outline: none;
            border-color: #6366f1;
            box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
        }
        input:invalid:not(:placeholder-shown) {
            border-color: #ef4444;
        }
        input:valid:not(:placeholder-shown) {
            border-color: #10b981;
        }
        .hint { font-size: 12px; color: #64748b; margin-top: 4px; }
        .error { font-size: 12px; color: #ef4444; margin-top: 4px; }
        fieldset {
            border: 1px solid #334155;
            border-radius: 10px;
            padding: 16px;
            margin-bottom: 20px;
        }
        legend {
            color: #cbd5e1;
            font-weight: 500;
            padding: 0 8px;
        }
        .radio-group, .checkbox-group {
            display: flex;
            gap: 16px;
            flex-wrap: wrap;
            margin-top: 8px;
        }
        .radio-label, .checkbox-label {
            display: flex;
            align-items: center;
            gap: 8px;
            color: #94a3b8;
            cursor: pointer;
        }
        button[type="submit"] {
            width: 100%;
            padding: 14px;
            background: linear-gradient(135deg, #6366f1, #8b5cf6);
            color: white;
            border: none;
            border-radius: 10px;
            font-size: 16px;
            font-weight: 600;
            cursor: pointer;
            transition: transform 0.2s, box-shadow 0.2s;
        }
        button[type="submit"]:hover {
            transform: translateY(-2px);
            box-shadow: 0 10px 30px rgba(99, 102, 241, 0.3);
        }
    </style>
</head>
<body>
    <div class="form-container">
        <h1>ایجاد حساب کاربری</h1>
        <p class="subtitle">لطفاً اطلاعات خود را وارد کنید</p>

        <form action="/api/register" method="POST" novalidate>
            <!-- نام و نام خانوادگی -->
            <div class="form-group">
                <label for="fullname">
                    نام و نام خانوادگی <span class="required">*</span>
                </label>
                <input 
                    type="text" 
                    id="fullname" 
                    name="fullname"
                    placeholder="مثال: علی محمدی"
                    required
                    minlength="3"
                    maxlength="50"
                    pattern="[\\p{L}\\s]{3,50}"
                    title="حداقل ۳ کاراکتر، فقط حروف"
                    autocomplete="name"
                >
                <p class="hint">حداقل ۳ کاراکتر</p>
            </div>

            <!-- ایمیل -->
            <div class="form-group">
                <label for="email">
                    ایمیل <span class="required">*</span>
                </label>
                <input 
                    type="email" 
                    id="email" 
                    name="email"
                    placeholder="example@mail.com"
                    required
                    autocomplete="email"
                >
            </div>

            <!-- رمز عبور -->
            <div class="form-group">
                <label for="password">
                    رمز عبور <span class="required">*</span>
                </label>
                <input 
                    type="password" 
                    id="password" 
                    name="password"
                    placeholder="حداقل ۸ کاراکتر"
                    required
                    minlength="8"
                    pattern="(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                    title="حداقل یک عدد، یک حرف بزرگ و یک حرف کوچک"
                    autocomplete="new-password"
                >
                <p class="hint">حداقل ۸ کاراکتر شامل عدد و حرف بزرگ و کوچک</p>
            </div>

            <!-- شماره تلفن -->
            <div class="form-group">
                <label for="phone">شماره تلفن</label>
                <input 
                    type="tel" 
                    id="phone" 
                    name="phone"
                    placeholder="۰۹۱۲۳۴۵۶۷۸۹"
                    pattern="09[0-9]{9}"
                    title="شماره موبایل ۱۱ رقمی"
                    autocomplete="tel"
                >
            </div>

            <!-- جنسیت -->
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
                    <label class="radio-label">
                        <input type="radio" name="gender" value="other">
                        ترجیح نمی‌دهم بگویم
                    </label>
                </div>
            </fieldset>

            <!-- سطح برنامه‌نویسی -->
            <div class="form-group">
                <label for="level">سطح برنامه‌نویسی</label>
                <select id="level" name="level">
                    <option value="">انتخاب کنید...</option>
                    <option value="beginner">مبتدی</option>
                    <option value="intermediate">متوسط</option>
                    <option value="advanced">پیشرفته</option>
                    <option value="expert">حرفه‌ای</option>
                </select>
            </div>

            <!-- علاقه‌مندی‌ها -->
            <fieldset>
                <legend>زمینه‌های مورد علاقه</legend>
                <div class="checkbox-group">
                    <label class="checkbox-label">
                        <input type="checkbox" name="interests" value="frontend">
                        فرانت‌اند
                    </label>
                    <label class="checkbox-label">
                        <input type="checkbox" name="interests" value="backend">
                        بک‌اند
                    </label>
                    <label class="checkbox-label">
                        <input type="checkbox" name="interests" value="mobile">
                        موبایل
                    </label>
                    <label class="checkbox-label">
                        <input type="checkbox" name="interests" value="devops">
                        DevOps
                    </label>
                </div>
            </fieldset>

            <!-- بیوگرافی -->
            <div class="form-group">
                <label for="bio">بیوگرافی</label>
                <textarea 
                    id="bio" 
                    name="bio"
                    rows="4"
                    maxlength="500"
                    placeholder="درباره خودتان بنویسید..."
                ></textarea>
                <p class="hint">حداکثر ۵۰۰ کاراکتر</p>
            </div>

            <!-- قوانین -->
            <div class="form-group">
                <label class="checkbox-label">
                    <input type="checkbox" name="terms" required>
                    <span>قوانین و مقررات را می‌پذیرم <span class="required">*</span></span>
                </label>
            </div>

            <button type="submit">ایجاد حساب کاربری</button>
        </form>
    </div>
</body>
</html>`,
        language: "html",
        tips: [
          "همیشه label را با for/id به input متصل کنید",
          "از autocomplete attributes برای تجربه کاربری بهتر استفاده کنید",
          "اعتبارسنجی سمت سرور ضروری است - سمت کلاینت کافی نیست",
          "از fieldset و legend برای گروه‌بندی عناصر مرتبط استفاده کنید"
        ],
        warnings: [
          "هرگز رمز عبور را با GET ارسال نکنید",
          "فیلدهای حساس را با autocomplete='off' محافظت کنید",
          "pattern regex را تست کنید - ممکن است در مرورگرهای مختلف متفاوت عمل کند"
        ],
        exercises: [
          {
            question: "یک فرم سفارش غذا بسازید با فیلدهای: نام مشتری، آدرس، شماره تلفن، انتخاب غذا (radio buttons)، تعداد (number input)، توضیحات اضافی (textarea)، و دکمه ارسال. همه فیلدهای ضروری را validate کنید.",
            answer: `<form action="/order" method="POST">
    <fieldset>
        <legend>اطلاعات مشتری</legend>
        
        <div class="form-group">
            <label for="customer-name">نام <span class="required">*</span></label>
            <input type="text" id="customer-name" name="name" 
                   required minlength="2" autocomplete="name">
        </div>

        <div class="form-group">
            <label for="phone">تلفن <span class="required">*</span></label>
            <input type="tel" id="phone" name="phone" 
                   required pattern="09[0-9]{9}" 
                   title="شماره ۱۱ رقمی موبایل"
                   autocomplete="tel">
        </div>

        <div class="form-group">
            <label for="address">آدرس <span class="required">*</span></label>
            <textarea id="address" name="address" rows="3" 
                      required minlength="10"></textarea>
        </div>
    </fieldset>

    <fieldset>
        <legend>انتخاب غذا</legend>
        
        <div class="radio-group">
            <label><input type="radio" name="food" value="pizza" required> پیتزا</label>
            <label><input type="radio" name="food" value="burger"> برگر</label>
            <label><input type="radio" name="food" value="salad"> سالاد</label>
            <label><input type="radio" name="food" value="pasta"> پاستا</label>
        </div>

        <div class="form-group">
            <label for="quantity">تعداد</label>
            <input type="number" id="quantity" name="quantity" 
                   min="1" max="10" value="1">
        </div>
    </fieldset>

    <div class="form-group">
        <label for="notes">توضیحات اضافی</label>
        <textarea id="notes" name="notes" rows="2" 
                  maxlength="200" 
                  placeholder="مثلاً: بدون پیاز"></textarea>
    </div>

    <button type="submit">ثبت سفارش</button>
</form>`
          }
        ]
      }
    ]
  },
  {
    id: "css-mastery",
    title: "CSS پیشرفته و مدرن",
    subtitle: "استایل‌دهی حرفه‌ای صفحات وب",
    description: "تسلط کامل بر CSS3 شامل Flexbox، Grid، انیمیشن‌ها، متغیرها، و تکنیک‌های پیشرفته طراحی واکنش‌گرا",
    color: "from-blue-500 to-cyan-500",
    iconBg: "bg-blue-500/10",
    totalHours: 30,
    prerequisites: ["تسلط بر HTML5"],
    outcomes: [
      "تسلط کامل بر Flexbox و Grid",
      "ساخت صفحات کاملاً ریسپانسیو",
      "ایجاد انیمیشن‌ها و transitions حرفه‌ای",
      "استفاده از CSS Variables و Custom Properties",
      "آشنایی با CSS Architecture (BEM, ITCSS)"
    ],
    lessons: [
      {
        id: "css-selectors",
        title: "انتخابگرها و خاصیت‌ها",
        subtitle: "CSS Selectors از مبتدی تا پیشرفته",
        estimatedTime: 30,
        difficulty: "مبتدی",
        content: `## انتخابگرها (Selectors) در CSS

انتخابگرها مشخص می‌کنند کدام عناصر HTML تحت تأثیر استایل‌ها قرار بگیرند. شناخت کامل انتخابگرها برای نوشتن CSS کارآمد ضروری است.

## دسته‌بندی انتخابگرها

### ۱. انتخابگرهای پایه:

- **Universal Selector** (\`*\`): همه عناصر
- **Type Selector** (\`p\`, \`h1\`): عناصر بر اساس نوع تگ
- **Class Selector** (\`.classname\`): عناصر با کلاس مشخص
- **ID Selector** (\`#idname\`): عنصر با ID مشخص
- **Attribute Selector** (\`[attr]\`): عناصر با attribute مشخص

### ۲. Combinator‌ها:

- **Descendant** (\`A B\`): B داخل A (هر عمقی)
- **Child** (\`A > B\`): B فرزند مستقیم A
- **Adjacent Sibling** (\`A + B\`): B بلافاصله بعد از A
- **General Sibling** (\`A ~ B\`): B بعد از A (هم‌سطح)

### ۳. Pseudo-classes:

- \`:hover\` - وقتی موس روی عنصر است
- \`:focus\` - وقتی عنصر فوکوس دارد
- \`:active\` - وقتی عنصر فعال است (کلیک شده)
- \`:first-child\` - اولین فرزند
- \`:last-child\` - آخرین فرزند
- \`:nth-child(n)\` - فرزند nام
- \`:not(selector)\` - همه به جز selector
- \`:is()\` - هر کدام از selector‌ها
- \`:where()\` - مثل :is ولی specificity صفر
- \`:has()\` - والدی که فرزند مشخص دارد

### ۴. Pseudo-elements:

- \`::before\` - محتوای قبل از عنصر
- \`::after\` - محتوای بعد از عنصر
- \`::first-line\` - اولین خط متن
- \`::first-letter\` - اولین حرف
- \`::selection\` - متن انتخاب شده
- \`::placeholder\` - placeholder input

## Specificity (اولویت)

وقتی چند قانون CSS به یک عنصر اعمال شوند، بر اساس specificity تصمیم‌گیری می‌شود:

| نوع | Specificity | مثال |
|-----|-------------|------|
| Inline style | 1,0,0,0 | style="..." |
| ID | 0,1,0,0 | #header |
| Class/Attribute/Pseudo-class | 0,0,1,0 | .nav, :hover |
| Type/Pseudo-element | 0,0,0,1 | div, ::before |
| Universal | 0,0,0,0 | * |

## Specificity Calculation

\`div.container > ul li.active a:hover\`

- div: 0,0,0,1
- .container: 0,0,1,0
- ul: 0,0,0,1
- li: 0,0,0,1
- .active: 0,0,1,0
- a: 0,0,0,1
- :hover: 0,0,1,0

مجموع: 0,1,3,3

## Inheritance (وراثت)

برخی خاصیت‌ها از والد به فرزند ارث‌بری می‌شوند:
- **ارث‌بری می‌شوند**: color, font-*, text-*, line-height, visibility
- **ارثبری نمی‌شوند**: margin, padding, border, background, display

می‌توانید با \`inherit\`, \`initial\`, \`unset\` و \`revert\` وراثت را کنترل کنید.`,
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
[data-theme="dark"] { background: #0f172a; }

/* ===== Combinators ===== */

/* Descendant - همه li داخل nav */
nav li { display: inline-block; }

/* Child - فقط فرزند مستقیم */
.card > .card-title { font-size: 1.5rem; }

/* Adjacent Sibling - h2 بلافاصله بعد از h1 */
h1 + h2 { margin-top: 0; }

/* General Sibling - همه p بعد از h2 */
h2 ~ p { color: #64748b; }

/* ===== Pseudo-classes ===== */

/* State */
button:hover { transform: translateY(-2px); }
input:focus { border-color: #4f46e5; outline: none; }
a:active { transform: scale(0.98); }
li:first-child { border-top: none; }
li:last-child { border-bottom: none; }
tr:nth-child(even) { background: rgba(0,0,0,0.02); }
li:nth-child(3n) { color: #4f46e5; }

/* Modern Selectors */
/* :is() - هر کدام match شود */
:is(h1, h2, h3) + p { margin-top: 0; }

/* :where() - مثل :is ولی بدون specificity */
:where(.card, .panel, .box) > h2 { font-size: 1.25rem; }

/* :has() - والد دارای فرزند */
.card:has(img) { padding: 0; }
form:has(:invalid) .submit-btn { opacity: 0.5; }
li:has(> a:active) { background: #f0f0f0; }

/* :not() */
p:not(.lead) { font-size: 1rem; }
input:not([type="checkbox"]) { width: 100%; }

/* ===== Pseudo-elements ===== */

p::first-letter {
    font-size: 2em;
    font-weight: bold;
    color: #4f46e5;
}

p::selection {
    background: #4f46e5;
    color: white;
}

input::placeholder {
    color: #94a3b8;
    font-style: italic;
}

.card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #4f46e5, #06b6d4);
}

/* ===== Specificity Examples ===== */

/* Specificity: 0,0,0,1 */
p { color: black; }

/* Specificity: 0,0,1,0 - برنده */
.text { color: blue; }

/* Specificity: 0,1,0,0 - برنده نهایی */
#content { color: red; }

/* ===== Inheritance Control ===== */
.child-element {
    color: inherit;      /* ارث از والد */
    margin: initial;     /* مقدار اولیه */
    padding: unset;      /* اگر ارث‌بری می‌شود: inherit، وگرنه: initial */
    border: revert;      /* برگشت به user-agent stylesheet */
}`,
        language: "css",
        tips: [
          "از :is() و :where() برای ساده‌تر کردن selector‌ها استفاده کنید",
          ":has() یک parent selector واقعی است - از آن بهره ببرید",
          "از ID selector کمتر استفاده کنید - specificity خیلی بالایی دارد",
          "BEM naming convention به مدیریت specificity کمک می‌کند"
        ],
        warnings: [
          "!important را تا حد امکان استفاده نکنید - نشانه کد ضعیف است",
          "از selector‌های خیلی طولانی پرهیز کنید - نگهداری سخت می‌شود",
          "Specificity بالاتر همیشه برنده نیست - source order هم مهم است"
        ],
        exercises: [
          {
            question: "CSS بنویسید که: ۱) تمام لینک‌های خارجی (target='_blank') آیکون فلش کنارشان داشته باشد ۲) سطرهای زوج جدول رنگ پس‌زمینه متفاوت داشته باشند ۳) اولین حرف هر پاراگراف بزرگ و رنگی باشد ۴) کارت‌هایی که تصویر دارند padding متفاوتی داشته باشند.",
            answer: `/* ۱. لینک‌های خارجی با آیکون */
a[target="_blank"]::after {
    content: " ↗";
    font-size: 0.8em;
    color: #6366f1;
    vertical-align: super;
}

/* ۲. سطرهای زوج جدول */
table tbody tr:nth-child(even) {
    background-color: rgba(99, 102, 241, 0.05);
}

table tbody tr:nth-child(odd) {
    background-color: transparent;
}

table tbody tr:hover {
    background-color: rgba(99, 102, 241, 0.1);
    transition: background-color 0.2s ease;
}

/* ۳. اولین حرف هر پاراگراف */
.article-content p::first-letter {
    font-size: 3em;
    font-weight: 700;
    color: #4f46e5;
    float: right;
    line-height: 0.8;
    margin-left: 8px;
    margin-top: 4px;
}

/* ۴. کارت‌های دارای تصویر */
.card:has(img) {
    padding: 0;
    overflow: hidden;
}

.card:has(img) .card-body {
    padding: 20px;
}

.card:has(img) img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    display: block;
}

/* کارت‌های بدون تصویر */
.card:not(:has(img)) {
    padding: 24px;
}`
          }
        ]
      },
      {
        id: "css-flexbox",
        title: "Flexbox - چیدمان انعطاف‌پذیر",
        subtitle: "تسلط کامل بر Flexbox",
        estimatedTime: 40,
        difficulty: "متوسط",
        content: `## Flexbox چیست؟

Flexbox (Flexible Box Layout) یک مدل چیدمان یک‌بعدی در CSS3 است که برای طراحی رابط‌های کاربری انعطاف‌پذیر و واکنش‌گرا طراحی شده است. Flexbox کار توزیع فضا و تراز آیتم‌ها در یک کانتینر را بسیار ساده می‌کند.

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

### flex-wrap
آیا آیتم‌ها به خط بعد بروند:
- \`nowrap\` (پیش‌فرض): همه در یک خط
- \`wrap\`: شکستن به خطوط جدید
- \`wrap-reverse\`: شکستن برعکس

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
        ],
        exercises: [
          {
            question: "یک layout بسازید با navbar بالا، sidebar راست، محتوای اصلی وسط، و فوتر پایین. در موبایل همه زیر هم باشند.",
            answer: `/* Desktop Layout */
.layout {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}

.header {
    flex: 0 0 64px;
    background: #1e293b;
    display: flex;
    align-items: center;
    padding: 0 24px;
}

.body {
    display: flex;
    flex: 1;
}

.sidebar {
    flex: 0 0 260px;
    background: #0f172a;
    padding: 24px;
    border-left: 1px solid #334155;
}

.main-content {
    flex: 1 1 0%;
    padding: 32px;
    min-width: 0;
}

.footer {
    flex: 0 0 auto;
    background: #1e293b;
    padding: 24px;
    text-align: center;
    border-top: 1px solid #334155;
}

/* Tablet - بدون sidebar */
@media (max-width: 1024px) {
    .sidebar {
        flex: 0 0 200px;
    }
}

/* Mobile - همه زیر هم */
@media (max-width: 768px) {
    .body {
        flex-direction: column;
    }
    
    .sidebar {
        flex: 0 0 auto;
        border-left: none;
        border-bottom: 1px solid #334155;
    }
    
    .main-content {
        padding: 16px;
    }
}`
          }
        ]
      },
      {
        id: "css-grid",
        title: "CSS Grid - چیدمان شبکه‌ای",
        subtitle: "قدرتمندترین سیستم layout CSS",
        estimatedTime: 45,
        difficulty: "متوسط",
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
        ],
        exercises: [
          {
            question: "یک grid بسازید که ۴ کارت در ردیف اول (هر کدام 1 ستون)، ۱ کارت بزرگ در ردیف دوم (2 ستون) و ۲ کارت معمولی داشته باشد. در موبایل همه تک‌ستونه باشند.",
            answer: `.portfolio-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 24px;
    padding: 24px;
}

/* ردیف اول: 4 کارت معمولی */
.portfolio-grid .card:nth-child(1),
.portfolio-grid .card:nth-child(2),
.portfolio-grid .card:nth-child(3),
.portfolio-grid .card:nth-child(4) {
    grid-column: span 1;
}

/* ردیف دوم: 1 کارت بزرگ */
.portfolio-grid .card:nth-child(5) {
    grid-column: span 2;
}

/* ردیف دوم: 2 کارت معمولی */
.portfolio-grid .card:nth-child(6),
.portfolio-grid .card:nth-child(7) {
    grid-column: span 1;
}

/* Tablet: 2 ستون */
@media (max-width: 1024px) {
    .portfolio-grid {
        grid-template-columns: repeat(2, 1fr);
    }
    .portfolio-grid .card:nth-child(5) {
        grid-column: span 2;
    }
}

/* Mobile: 1 ستون */
@media (max-width: 640px) {
    .portfolio-grid {
        grid-template-columns: 1fr;
    }
    .portfolio-grid .card:nth-child(5) {
        grid-column: span 1;
    }
}`
          }
        ]
      }
    ]
  },
  {
    id: "javascript-complete",
    title: "جاوااسکریپت کامل",
    subtitle: "از مقدماتی تا پیشرفته",
    description: "تسلط کامل بر JavaScript مدرن شامل ES6+، برنامه‌نویسی ناهمگام، DOM، و الگوهای طراحی",
    color: "from-yellow-500 to-amber-500",
    iconBg: "bg-yellow-500/10",
    totalHours: 50,
    prerequisites: ["HTML و CSS پایه"],
    outcomes: [
      "تسلط بر ES6+ features",
      "درک عمیق از async programming",
      "کار حرفه‌ای با DOM",
      "آشنایی با الگوهای طراحی",
      "نوشتن کد تمیز و maintainable"
    ],
    lessons: [
      {
        id: "js-variables-types",
        title: "متغیرها و انواع داده",
        subtitle: "پایه‌های جاوااسکریپت",
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
const str1 = "Hello";     // double quotes
const str2 = 'World';     // single quotes
const str3 = \`Hello \${name}\`; // template literal
\`\`\`

**2. Number:**
\`\`\`js
const int = 42;
const float = 3.14;
const negative = -10;
const infinity = Infinity;
const notNumber = NaN; // Not a Number
\`\`\`

**3. BigInt:**
\`\`\`js
const big = 9007199254740991n;
\`\`\`

**4. Boolean:**
\`\`\`js
const isActive = true;
const isDeleted = false;
\`\`\`

**5. undefined:**
متغیر تعریف شده ولی بدون مقدار

**6. null:**
مقدار خالی (عمداً)

**7. Symbol:**
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

## Type Coercion

JavaScript به طور خودکار نوع‌ها را تبدیل می‌کند:
- \`"5" + 3\` → \`"53"\` (string concatenation)
- \`"5" - 3\` → \`2\` (numeric subtraction)
- \`"5" == 5\` → \`true\` (loose equality)
- \`"5" === 5\` → \`false\` (strict equality)

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

// var - function scoped (مشکل‌دار)
function exampleVar() {
    if (true) {
        var x = 10;
    }
    console.log(x); // 10 - بیرون از if هم قابل دسترسی!
}

// let - block scoped (بهتر)
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
str.toLowerCase();    // "hello, world!"
str.includes("World"); // true
str.startsWith("Hello"); // true
str.endsWith("!");    // true
str.slice(0, 5);      // "Hello"
str.split(", ");      // ["Hello", "World!"]
str.trim();           // حذف whitespace
str.replace("World", "JS"); // "Hello, JS!"
str.repeat(3);        // "Hello, World!Hello, World!Hello, World!"
str.padStart(20, "."); // ".......Hello, World!"
str.padEnd(20, ".");

// Template Literals
const name = "Ali";
const age = 25;
const message = \`
    Name: \${name}
    Age: \${age}
    Born: \${2024 - age}
    Adult: \${age >= 18 ? "Yes" : "No"}
\`;

// Number methods
const num = 42.567;
num.toFixed(2);       // "42.57"
num.toPrecision(4);   // "42.57"
Number.isInteger(42); // true
Number.isNaN(NaN);    // true
Number.isFinite(42);  // true
parseInt("42px");     // 42
parseFloat("3.14em"); // 3.14

// Boolean coercion
Boolean(0);         // false
Boolean("");        // false
Boolean(null);      // false
Boolean(undefined); // false
Boolean(NaN);       // false
Boolean("hello");   // true
Boolean(42);        // true
Boolean([]);        // true (even empty array!)
Boolean({});        // true (even empty object!)

// Nullish Coalescing (??)
const value1 = null ?? "default";    // "default"
const value2 = undefined ?? "default"; // "default"
const value3 = 0 ?? "default";       // 0 (not "default"!)
const value4 = "" ?? "default";      // "" (not "default"!)

// Optional Chaining (?.)
const data = { user: { profile: { name: "Ali" } } };
data.user?.profile?.name;    // "Ali"
data.user?.settings?.theme;  // undefined (no error!)
data.users?.[0]?.name;       // undefined (safe array access)

// typeof operator
typeof "hello"     // "string"
typeof 42          // "number"
typeof true        // "boolean"
typeof undefined   // "undefined"
typeof null        // "object" (bug تاریخی!)
typeof {}          // "object"
typeof []          // "object"
typeof function(){} // "function"
typeof Symbol()    // "symbol"

// Array.isArray (بررسی دقیق آرایه)
Array.isArray([1, 2, 3]);  // true
Array.isArray("hello");    // false`,
        language: "javascript",
        tips: [
          "همیشه از === به جای == استفاده کنید",
          "const را پیش‌فرض قرار دهید، فقط وقتی نیاز به تغییر دارید let بزنید",
          "Optional chaining (?.) از خطاهای undefined جلوگیری می‌کند",
          "Nullish coalescing (??) فقط null و undefined را handle می‌کند"
        ],
        warnings: [
          "typeof null برابر 'object' است - این یک bug تاریخی در JS است",
          "const جلوی تغییر object/array را نمی‌گیرد - فقط reference ثابت است",
          "NaN === NaN همیشه false است! از Number.isNaN() استفاده کنید"
        ],
        exercises: [
          {
            question: "تابعی بنویسید که یک مقدار بگیرد و نوع دقیق آن را برگرداند (string, number, boolean, null, undefined, array, object, function).",
            answer: `function getType(value) {
    if (value === null) return 'null';
    if (value === undefined) return 'undefined';
    if (Array.isArray(value)) return 'array';
    
    const type = typeof value;
    return type; // string, number, boolean, object, function, symbol
}

// تست:
console.log(getType("hello"));     // "string"
console.log(getType(42));          // "number"
console.log(getType(true));        // "boolean"
console.log(getType(null));        // "null"
console.log(getType(undefined));   // "undefined"
console.log(getType([1, 2, 3]));   // "array"
console.log(getType({ a: 1 }));    // "object"
console.log(getType(() => {}));    // "function"
console.log(getType(Symbol()));    // "symbol"

// نسخه پیشرفته‌تر با جزئیات بیشتر:
function getDetailedType(value) {
    if (value === null) return 'null';
    if (value === undefined) return 'undefined';
    if (Array.isArray(value)) return 'array';
    if (value instanceof Date) return 'date';
    if (value instanceof RegExp) return 'regexp';
    if (value instanceof Error) return 'error';
    if (value instanceof Map) return 'map';
    if (value instanceof Set) return 'set';
    
    return typeof value;
}`
          }
        ]
      },
      {
        id: "js-functions",
        title: "توابع و Scope",
        subtitle: "درک عمیق توابع در JavaScript",
        estimatedTime: 40,
        difficulty: "متوسط",
        content: `## توابع در JavaScript

توابع بلوک‌های کد قابل استفاده مجدد هستند. در JavaScript توابع first-class citizen هستند - یعنی می‌توان آنها را به متغیر اختصاص داد، به عنوان آرگومان پاس داد و برگرداند.

## انواع تعریف تابع

### Function Declaration:
\`\`\`js
function greet(name) {
    return \`Hello \${name}\`;
}
\`\`\`
- Hoisted (قبل از تعریف قابل استفاده است)
- نام‌دار

### Function Expression:
\`\`\`js
const greet = function(name) {
    return \`Hello \${name}\`;
};
\`\`\`
- Hoisted نیست
- می‌تواند anonymous یا named باشد

### Arrow Function:
\`\`\`js
const greet = (name) => \`Hello \${name}\`;
\`\`\`
- سینتکس کوتاه‌تر
- this لکسیکال (از scope بیرونی)
- arguments object ندارد
- نمی‌تواند constructor باشد

## Parameters و Arguments

### Default Parameters:
\`\`\`js
function greet(name = "Guest", greeting = "Hello") {
    return \`\${greeting}, \${name}!\`;
}
\`\`\`

### Rest Parameters:
\`\`\`js
function sum(...numbers) {
    return numbers.reduce((total, n) => total + n, 0);
}
\`\`\`

### Destructuring Parameters:
\`\`\`js
function displayUser({ name, age, city = "Unknown" }) {
    console.log(\`\${name}, \${age}, \${city}\`);
}
\`\`\`

## Scope

### Global Scope:
متغیرهای خارج از هر تابع یا block

### Function Scope:
متغیرهای تعریف شده با var در تابع

### Block Scope:
متغیرهای تعریف شده با let/const در {}

### Lexical Scope:
توابع داخلی به متغیرهای scope بیرونی دسترسی دارند

## Closures

Closure وقتی یک تابع به متغیرهای scope بیرونی خود دسترسی دارد حتی بعد از اینکه آن scope تمام شده.

## Higher-Order Functions

توابعی که تابع دیگری می‌گیرند یا برمی‌گردانند:
- map, filter, reduce
- setTimeout, setInterval
- Event handlers`,
        code: `// ===== Function Declaration =====
function calculateArea(width, height) {
    return width * height;
}
console.log(calculateArea(5, 3)); // 15

// ===== Function Expression =====
const calculatePerimeter = function(width, height) {
    return 2 * (width + height);
};

// ===== Arrow Functions =====
// Full syntax
const multiply = (a, b) => {
    return a * b;
};

// Concise body (implicit return)
const add = (a, b) => a + b;

// Single parameter (no parens needed)
const double = x => x * 2;

// No parameters
const getRandom = () => Math.random();

// Returning object (needs parens)
const createUser = (name, age) => ({ name, age });

// ===== Default Parameters =====
function createProfile(name, role = "developer", active = true) {
    return { name, role, active };
}
createProfile("Ali");                    // { name: "Ali", role: "developer", active: true }
createProfile("Sara", "designer");       // { name: "Sara", role: "designer", active: true }
createProfile("Reza", "manager", false); // { name: "Reza", role: "manager", active: false }

// ===== Rest Parameters =====
function logAll(...items) {
    items.forEach((item, i) => console.log(\`\${i + 1}. \${item}\`));
}
logAll("HTML", "CSS", "JavaScript");

// Combine with regular params
function logFirst(first, ...rest) {
    console.log("First:", first);
    console.log("Rest:", rest);
}
logFirst(1, 2, 3, 4, 5); // First: 1, Rest: [2, 3, 4, 5]

// ===== Destructuring Parameters =====
function renderCard({ title, content, tags = [], author = "Unknown" }) {
    return \`
        <article>
            <h2>\${title}</h2>
            <p>\${content}</p>
            <span>By: \${author}</span>
            <div>\${tags.map(t => \`#\${t}\`).join(" ")}</div>
        </article>
    \`;
}

renderCard({
    title: "Learning JS",
    content: "JavaScript is awesome",
    tags: ["js", "web"],
    author: "Ali"
});

// ===== Closures =====
function createCounter(initialValue = 0) {
    let count = initialValue;
    
    return {
        increment: () => ++count,
        decrement: () => --count,
        getCount: () => count,
        reset: () => { count = initialValue; return count; }
    };
}

const counter = createCounter(10);
counter.increment(); // 11
counter.increment(); // 12
counter.decrement(); // 11
counter.getCount();  // 11
counter.reset();     // 10

// Practical closure: private variables
function createBankAccount(initialBalance) {
    let balance = initialBalance;
    const transactions = [];
    
    return {
        deposit(amount) {
            if (amount <= 0) throw new Error("Amount must be positive");
            balance += amount;
            transactions.push({ type: "deposit", amount, balance });
            return balance;
        },
        withdraw(amount) {
            if (amount > balance) throw new Error("Insufficient funds");
            balance -= amount;
            transactions.push({ type: "withdraw", amount, balance });
            return balance;
        },
        getBalance: () => balance,
        getHistory: () => [...transactions]
    };
}

const account = createBankAccount(1000);
account.deposit(500);   // 1500
account.withdraw(200);  // 1300
account.getBalance();   // 1300

// ===== Higher-Order Functions =====
// Function that returns a function
function createMultiplier(factor) {
    return (number) => number * factor;
}

const triple = createMultiplier(3);
const quadruple = createMultiplier(4);

triple(5);    // 15
quadruple(5); // 20

// Function that takes a function
function repeat(n, action) {
    for (let i = 0; i < n; i++) {
        action(i);
    }
}

repeat(3, console.log); // 0, 1, 2

// Practical HOF: retry mechanism
function withRetry(fn, maxRetries = 3) {
    return async (...args) => {
        for (let i = 0; i < maxRetries; i++) {
            try {
                return await fn(...args);
            } catch (error) {
                if (i === maxRetries - 1) throw error;
                console.log(\`Retry \${i + 1}/\${maxRetries}\`);
                await new Promise(r => setTimeout(r, 1000 * (i + 1)));
            }
        }
    };
}

// Usage
const fetchData = withRetry(async (url) => {
    const res = await fetch(url);
    if (!res.ok) throw new Error("Network error");
    return res.json();
}, 3);

// ===== IIFE (Immediately Invoked Function Expression) =====
const result = (function() {
    const private = "secret";
    return { getPrivate: () => private };
})();

// ===== Memoization with Closure =====
function memoize(fn) {
    const cache = new Map();
    
    return function(...args) {
        const key = JSON.stringify(args);
        
        if (cache.has(key)) {
            return cache.get(key);
        }
        
        const result = fn(...args);
        cache.set(key, result);
        return result;
    };
}

const expensiveCalc = memoize((n) => {
    console.log("Computing...");
    return n * n;
});

expensiveCalc(5); // Computing... 25
expensiveCalc(5); // 25 (from cache, no "Computing!")`,
        language: "javascript",
        tips: [
          "Arrow functions برای callback‌ها و توابع کوتاه عالی هستند",
          "از closure برای encapsulation و private state استفاده کنید",
          "Default parameters از || بهترند - فقط undefined را handle می‌کنند",
          "Memoization برای توابع expensive بسیار مفید است"
        ],
        exercises: [
          {
            question: "یک تابع pipe بسازید که چندین تابع را بگیرد و آنها را از چپ به راست روی یک مقدار اعمال کند.",
            answer: `// Pipe: اعمال توابع از چپ به راست
const pipe = (...fns) => (initialValue) => 
    fns.reduce((acc, fn) => fn(acc), initialValue);

// Compose: اعمال توابع از راست به چپ
const compose = (...fns) => (initialValue) => 
    fns.reduceRight((acc, fn) => fn(acc), initialValue);

// توابع کمکی
const add10 = x => x + 10;
const multiply2 = x => x * 2;
const subtract3 = x => x - 3;
const toString = x => \`Result: \${x}\`;

// استفاده از pipe
const transform = pipe(add10, multiply2, subtract3, toString);
transform(5); // "Result: 27"
// مراحل: 5 → 15 → 30 → 27 → "Result: 27"

// مثال عملی: پردازش داده کاربر
const processUser = pipe(
    user => ({ ...user, name: user.name.trim() }),
    user => ({ ...user, email: user.email.toLowerCase() }),
    user => ({ ...user, createdAt: new Date().toISOString() }),
    user => ({ ...user, id: crypto.randomUUID() })
);

const rawUser = { name: "  Ali  ", email: "ALI@MAIL.COM" };
const processedUser = processUser(rawUser);
// { name: "Ali", email: "ali@mail.com", createdAt: "...", id: "..." }

// Pipe async
const pipeAsync = (...fns) => (initialValue) =>
    fns.reduce((acc, fn) => acc.then(fn), Promise.resolve(initialValue));

// استفاده:
const fetchAndProcess = pipeAsync(
    url => fetch(url),
    res => res.json(),
    data => data.filter(item => item.active),
    items => items.map(item => item.name)
);

fetchAndProcess('/api/users').then(console.log);`
          }
        ]
      }
    ]
  },
  {
    id: "react-complete",
    title: "React.js حرفه‌ای",
    subtitle: "ساخت وب اپلیکیشن‌های مدرن",
    description: "آموزش جامع React از صفر تا پیشرفته شامل Hooks، State Management، Routing و بهترین شیوه‌ها",
    color: "from-cyan-500 to-blue-600",
    iconBg: "bg-cyan-500/10",
    totalHours: 45,
    prerequisites: ["JavaScript ES6+", "HTML و CSS"],
    outcomes: [
      "ساخت کامپوننت‌های React حرفه‌ای",
      "تسلط بر Hooks و State Management",
      "کار با React Router",
      "اتصال به API و Backend",
      "بهینه‌سازی Performance"
    ],
    lessons: [
      {
        id: "react-intro",
        title: "مقدمه‌ای بر React",
        subtitle: "React چیست و چرا مهم است؟",
        estimatedTime: 30,
        difficulty: "مبتدی",
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
داده‌هایی که از parent به child پاس داده می‌شوند. فقط خواندنی هستند.

### State:
داده‌های داخلی کامپوننت که با تغییر آن، کامپوننت re-render می‌شود.

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
            <p>Random: {Math.random()}</p>
            
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
            <br />
            <hr />
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
</Card>

// ===== Props Destructuring & Defaults =====
function Avatar({ 
    src, 
    alt = "User avatar", 
    size = 40, 
    rounded = true 
}) {
    return (
        <img
            src={src}
            alt={alt}
            width={size}
            height={size}
            style={{ borderRadius: rounded ? '50%' : '8px' }}
        />
    );
}

// ===== Prop Types (با TypeScript بهتر است) =====
import PropTypes from 'prop-types';

ProductCard.propTypes = {
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string,
    onAddToCart: PropTypes.func,
    tags: PropTypes.arrayOf(PropTypes.string),
};

ProductCard.defaultProps = {
    image: '/placeholder.jpg',
    tags: [],
};`,
        language: "jsx",
        tips: [
          "همیشه Function Components استفاده کنید",
          "Props را destructure کنید - خوانایی بالاتر",
          "default values را در destructuring تعریف کنید",
          "children برای محتوای dynamic عالی است"
        ],
        warnings: [
          "هرگز props را مستقیماً تغییر ندهید",
          "key در list‌ها باید unique باشد - از index استفاده نکنید مگر چاره‌ای نباشد",
          "JSX در نهایت JavaScript است - هر expression معتبری داخل {} مجاز است"
        ],
        exercises: [
          {
            question: "یک کامپوننت ProductCard بسازید که نام، قیمت، تصویر، و دکمه خرید داشته باشد. اگر موجودی صفر باشد، دکمه غیرفعال شود و متن 'ناموجود' نشان دهد.",
            answer: `function ProductCard({ name, price, image, stock, onAddToCart }) {
    const isAvailable = stock > 0;
    const discount = stock < 5; // تخفیف برای تعداد کم
    
    return (
        <div className="product-card">
            <div className="product-image">
                <img src={image} alt={name} />
                {!isAvailable && (
                    <span className="badge sold-out">ناموجود</span>
                )}
                {discount && isAvailable && (
                    <span className="badge discount">تخفیف ویژه</span>
                )}
            </div>
            
            <div className="product-info">
                <h3 className="product-name">{name}</h3>
                
                <div className="product-price">
                    <span className="current-price">
                        {price.toLocaleString()} تومان
                    </span>
                    {discount && (
                        <span className="original-price">
                            {(price * 1.2).toLocaleString()} تومان
                        </span>
                    )}
                </div>
                
                <p className="stock-info">
                    {isAvailable 
                        ? \`\${stock} عدد در انبار\` 
                        : 'ناموجود'}
                </p>
                
                <button
                    className={\`add-to-cart-btn \${!isAvailable ? 'disabled' : ''}\`}
                    disabled={!isAvailable}
                    onClick={() => onAddToCart({ name, price })}
                >
                    {isAvailable ? 'افزودن به سبد خرید' : 'ناموجود'}
                </button>
            </div>
        </div>
    );
}

// استفاده:
<ProductCard
    name="لپ‌تاپ ایسوس"
    price={45000000}
    image="/laptop.jpg"
    stock={3}
    onAddToCart={(product) => console.log('Added:', product)}
/>`
          }
        ]
      }
    ]
  },
  {
    id: "backend-nodejs",
    title: "Backend با Node.js",
    subtitle: "ساخت سرور و API حرفه‌ای",
    description: "آموزش کامل Node.js، Express، MongoDB، احراز هویت و ساخت REST API",
    color: "from-green-500 to-emerald-600",
    iconBg: "bg-green-500/10",
    totalHours: 40,
    prerequisites: ["JavaScript ES6+", "آشنایی با HTTP"],
    outcomes: [
      "ساخت REST API حرفه‌ای",
      "کار با Express.js",
      "طراحی دیتابیس MongoDB",
      "پیاده‌سازی Authentication",
      "استقرار روی سرور"
    ],
    lessons: [
      {
        id: "node-intro",
        title: "مقدمه‌ای بر Node.js",
        subtitle: "Node.js چیست و چگونه کار می‌کند؟",
        estimatedTime: 30,
        difficulty: "مبتدی",
        content: `## Node.js چیست؟

Node.js یک runtime environment متن‌باز برای اجرای JavaScript خارج از مرورگر است. Node.js بر پایه V8 engine گوگل کروم ساخته شده و از مدل event-driven و non-blocking I/O استفاده می‌کند.

## معماری Node.js

### V8 Engine:
موتور JavaScript گوگل که کد JS را به machine code تبدیل می‌کند.

### libuv:
کتابخانه C که event loop و non-blocking I/O را مدیریت می‌کند.

### Node.js Bindings:
لایه‌ای که V8 و libuv را به هم متصل می‌کند و API‌های Node را فراهم می‌آورد.

### Node.js API:
ماژول‌های built-in مثل fs, http, path, os و...

## Event Loop

Node.js single-threaded است ولی با Event Loop می‌تواند عملیات ناهمگام را مدیریت کند:

**مراحل Event Loop:**
1. **Timers**: setTimeout, setInterval
2. **Pending callbacks**: callbacks عملیات I/O
3. **Idle/Prepare**: داخلی
4. **Poll**: عملیات I/O جدید
5. **Check**: setImmediate
6. **Close callbacks**: رویدادهای close

## Node.js vs Browser JavaScript

| ویژگی | Browser | Node.js |
|--------|---------|---------|
| Global Object | window | global |
| DOM | دارد | ندارد |
| File System | ندارد | دارد (fs) |
| Module System | ES Modules | CommonJS/ESM |

## Module System

### CommonJS (سنتی):
\`\`\`js
// export
module.exports = { func };
// import
const { func } = require('./module');
\`\`\`

### ES Modules (مدرن):
\`\`\`js
// export
export const func = () => {};
// import
import { func } from './module.js';
\`\`\`

## npm (Node Package Manager)

npm بزرگترین registry پکیج‌های JavaScript است.

### دستورات اصلی:
- \`npm init\` - ایجاد package.json
- \`npm install package\` - نصب dependency
- \`npm install -D package\` - نصب devDependency
- \`npm run script\` - اجرای script
- \`npx command\` - اجرای package بدون نصب`,
        code: `// ===== اولین سرور Node.js =====
const http = require('http');

const server = http.createServer((req, res) => {
    // تنظیم header
    res.writeHead(200, { 
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    });
    
    // مسیریابی ساده
    if (req.url === '/api/users' && req.method === 'GET') {
        const users = [
            { id: 1, name: 'Ali', email: 'ali@mail.com' },
            { id: 2, name: 'Sara', email: 'sara@mail.com' },
        ];
        res.end(JSON.stringify({ success: true, data: users }));
    } 
    else if (req.url === '/api/health') {
        res.end(JSON.stringify({ 
            status: 'OK', 
            uptime: process.uptime(),
            timestamp: new Date().toISOString()
        }));
    }
    else {
        res.writeHead(404);
        res.end(JSON.stringify({ error: 'Not Found' }));
    }
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(\`Server running on port \${PORT}\`);
});

// ===== ES Modules =====
// file: utils.js
export const formatDate = (date) => {
    return new Intl.DateTimeFormat('fa-IR').format(date);
};

export const slugify = (text) => {
    return text
        .toLowerCase()
        .replace(/[^\\w\\s-]/g, '')
        .replace(/\\s+/g, '-')
        .trim();
};

export default { formatDate, slugify };

// file: main.js
import { formatDate, slugify } from './utils.js';
import utils from './utils.js';

console.log(formatDate(new Date()));
console.log(slugify("Hello World!"));

// ===== File System =====
import { readFile, writeFile, mkdir } from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';

// خواندن فایل
async function readConfig() {
    try {
        const data = await readFile('./config.json', 'utf-8');
        return JSON.parse(data);
    } catch (error) {
        console.error('Error reading config:', error.message);
        return {};
    }
}

// نوشتن فایل
async function saveData(filename, data) {
    const dir = path.dirname(filename);
    if (!existsSync(dir)) {
        await mkdir(dir, { recursive: true });
    }
    await writeFile(filename, JSON.stringify(data, null, 2));
}

// ===== Environment Variables =====
import dotenv from 'dotenv';
dotenv.config();

const config = {
    port: process.env.PORT || 3000,
    nodeEnv: process.env.NODE_ENV || 'development',
    dbUri: process.env.MONGODB_URI,
    jwtSecret: process.env.JWT_SECRET,
};

// ===== Process Info =====
console.log('Node version:', process.version);
console.log('Platform:', process.platform);
console.log('PID:', process.pid);
console.log('Memory:', process.memoryUsage());
console.log('CPU:', process.cpuUsage());
console.log('Uptime:', process.uptime());

// ===== package.json Scripts =====
// {
//   "name": "my-api",
//   "version": "1.0.0",
//   "type": "module",
//   "scripts": {
//     "dev": "nodemon src/index.js",
//     "start": "node src/index.js",
//     "test": "jest",
//     "lint": "eslint src/",
//     "build": "tsc"
//   },
//   "dependencies": {
//     "express": "^4.18.2",
//     "mongoose": "^8.0.0"
//   },
//   "devDependencies": {
//     "nodemon": "^3.0.0",
//     "jest": "^29.7.0"
//   }
// }`,
        language: "javascript",
        tips: [
          "از ES Modules استفاده کنید - آینده JavaScript است",
          "Environment variables را در .env نگه دارید",
          "npm scripts برای اتوماسیون عالی هستند",
          "process.env برای تنظیمات environment-specific استفاده کنید"
        ],
        warnings: [
          "هرگز secrets را در کد hardcode نکنید",
          "فایل .env را در .gitignore قرار دهید",
          "Error handling در Node.js بسیار مهم است"
        ],
        exercises: [
          {
            question: "یک HTTP server ساده بسازید که مسیرهای /api/products (GET)، /api/products/:id (GET) و /api/health (GET) را handle کند.",
            answer: `import http from 'http';
import url from 'url';

// داده‌های نمونه
const products = [
    { id: 1, name: 'لپ‌تاپ', price: 45000000, category: 'electronics' },
    { id: 2, name: 'هدفون', price: 2500000, category: 'accessories' },
    { id: 3, name: 'کیبورد', price: 1800000, category: 'accessories' },
    { id: 4, name: 'مانیتور', price: 15000000, category: 'electronics' },
];

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const pathname = parsedUrl.pathname;
    
    // CORS headers
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', '*');
    
    // Health check
    if (pathname === '/api/health' && req.method === 'GET') {
        res.writeHead(200);
        res.end(JSON.stringify({
            status: 'healthy',
            uptime: process.uptime(),
            timestamp: new Date().toISOString(),
            products_count: products.length
        }));
        return;
    }
    
    // GET /api/products - لیست همه محصولات
    if (pathname === '/api/products' && req.method === 'GET') {
        const { category, search, sort } = parsedUrl.query;
        
        let filtered = [...products];
        
        // فیلتر دسته‌بندی
        if (category) {
            filtered = filtered.filter(p => p.category === category);
        }
        
        // جستجو
        if (search) {
            filtered = filtered.filter(p => 
                p.name.includes(search)
            );
        }
        
        // مرتب‌سازی
        if (sort === 'price_asc') {
            filtered.sort((a, b) => a.price - b.price);
        } else if (sort === 'price_desc') {
            filtered.sort((a, b) => b.price - a.price);
        }
        
        res.writeHead(200);
        res.end(JSON.stringify({
            success: true,
            count: filtered.length,
            data: filtered
        }));
        return;
    }
    
    // GET /api/products/:id - یک محصول
    const productMatch = pathname.match(/^\\/api\\/products\\/(\\d+)$/);
    if (productMatch && req.method === 'GET') {
        const id = parseInt(productMatch[1]);
        const product = products.find(p => p.id === id);
        
        if (product) {
            res.writeHead(200);
            res.end(JSON.stringify({ success: true, data: product }));
        } else {
            res.writeHead(404);
            res.end(JSON.stringify({ 
                success: false, 
                error: 'Product not found' 
            }));
        }
        return;
    }
    
    // 404
    res.writeHead(404);
    res.end(JSON.stringify({ 
        success: false, 
        error: 'Route not found' 
    }));
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(\`API Server running at http://localhost:\${PORT}\`);
    console.log(\`Health: http://localhost:\${PORT}/api/health\`);
    console.log(\`Products: http://localhost:\${PORT}/api/products\`);
});`
          }
        ]
      }
    ]
  },
  {
    id: "wordpress-pro",
    title: "وردپرس حرفه‌ای",
    subtitle: "قالب‌نویسی و افزونه‌نویسی",
    description: "آموزش جامع وردپرس از نصب تا قالب‌نویسی حرفه‌ای، افزونه‌نویسی و بهینه‌سازی",
    color: "from-indigo-500 to-purple-600",
    iconBg: "bg-indigo-500/10",
    totalHours: 35,
    prerequisites: ["HTML, CSS و PHP پایه"],
    outcomes: [
      "نصب و پیکربندی وردپرس",
      "قالب‌نویسی از صفر",
      "افزونه‌نویسی حرفه‌ای",
      "WooCommerce و فروشگاه",
      "بهینه‌سازی سرعت و امنیت"
    ],
    lessons: [
      {
        id: "wp-intro",
        title: "مقدمه‌ای بر وردپرس",
        subtitle: "وردپرس چیست و چرا محبوب‌ترین CMS است؟",
        estimatedTime: 25,
        difficulty: "مبتدی",
        content: `## وردپرس چیست؟

وردپرس یک سیستم مدیریت محتوا (CMS) متن‌باز و رایگان است که با PHP و MySQL ساخته شده. وردپرس بیش از ۴۳٪ از وب‌سایت‌های جهان را قدرت می‌دهد و محبوب‌ترین CMS دنیاست.

## انواع وردپرس

### WordPress.org (Self-hosted):
- نرم‌افزار رایگان و متن‌باز
- نصب روی هاست شخصی
- کنترل کامل
- قابلیت نصب قالب و افزونه دلخواه

### WordPress.com (Hosted):
- سرویس میزبانی توسط Automattic
- محدودیت‌هایی در پلن رایگان
- آسان‌تر ولی کمتر انعطاف‌پذیر

## معماری وردپرس

### ساختار فایل‌ها:
- \`wp-admin/\` - پنل مدیریت
- \`wp-includes/\` - فایل‌های هسته
- \`wp-content/\` - قالب‌ها، افزونه‌ها، آپلودها
- \`wp-config.php\` - تنظیمات اصلی
- \`.htaccess\` - تنظیمات Apache

### دیتابیس:
- \`wp_posts\` - پست‌ها و صفحات
- \`wp_users\` - کاربران
- \`wp_options\` - تنظیمات
- \`wp_postmeta\` - متادیتای پست‌ها
- \`wp_terms\` - دسته‌بندی‌ها و برچسب‌ها

### Template Hierarchy:
وردپرس بر اساس نوع درخواست، فایل template مناسب را انتخاب می‌کند:
- صفحه اصلی: front-page.php → home.php → index.php
- پست تک: single-{post-type}.php → single.php → index.php
- صفحه: page-{slug}.php → page.php → index.php
- آرشیو: archive-{post-type}.php → archive.php → index.php
- دسته‌بندی: category-{slug}.php → category.php → archive.php

### The Loop:
مکانیزم اصلی وردپرس برای نمایش محتوا:
\`\`\`php
if (have_posts()) :
    while (have_posts()) : the_post();
        the_title();
        the_content();
    endwhile;
endif;
\`\`\`

## Hooks: System

### Actions:
نقاطی که می‌توانید کد اضافه کنید:
\`\`\`php
add_action('init', 'my_function');
add_action('wp_enqueue_scripts', 'my_styles');
\`\`\`

### Filters:
نقاطی که می‌توانید داده را تغییر دهید:
\`\`\`php
add_filter('the_title', 'my_title_filter');
add_filter('the_content', 'my_content_filter');
\`\`\``,
        code: `<?php
/**
 * Template Name: صفحه اصلی سفارشی
 * 
 * ساختار یک فایل قالب وردپرس
 */

// جلوگیری از دسترسی مستقیم
if (!defined('ABSPATH')) {
    exit;
}

// هدر
get_header(); ?>

<main id="primary" class="site-main">
    
    <?php // Hero Section ?>
    <section class="hero-section">
        <div class="container">
            <h1 class="hero-title">
                <?php echo esc_html(get_bloginfo('name')); ?>
            </h1>
            <p class="hero-description">
                <?php echo esc_html(get_bloginfo('description')); ?>
            </p>
            
            <?php if (has_custom_logo()) : ?>
                <div class="hero-logo">
                    <?php the_custom_logo(); ?>
                </div>
            <?php endif; ?>
        </div>
    </section>

    <?php // آخرین مقالات ?>
    <section class="latest-posts">
        <div class="container">
            <h2 class="section-title">آخرین مطالب</h2>
            
            <?php
            $latest_posts = new WP_Query(array(
                'posts_per_page' => 6,
                'post_status'    => 'publish',
                'orderby'        => 'date',
                'order'          => 'DESC',
            ));
            
            if ($latest_posts->have_posts()) : ?>
                <div class="posts-grid">
                    <?php while ($latest_posts->have_posts()) : 
                        $latest_posts->the_post(); ?>
                        
                        <article id="post-<?php the_ID(); ?>" 
                                 <?php post_class('post-card'); ?>>
                            
                            <?php if (has_post_thumbnail()) : ?>
                                <div class="post-thumbnail">
                                    <a href="<?php the_permalink(); ?>">
                                        <?php the_post_thumbnail('medium_large'); ?>
                                    </a>
                                </div>
                            <?php endif; ?>
                            
                            <div class="post-content">
                                <header class="post-header">
                                    <h3 class="post-title">
                                        <a href="<?php the_permalink(); ?>">
                                            <?php the_title(); ?>
                                        </a>
                                    </h3>
                                    
                                    <div class="post-meta">
                                        <time datetime="<?php echo get_the_date('c'); ?>">
                                            <?php echo get_the_date(); ?>
                                        </time>
                                        <span class="author">
                                            <?php the_author(); ?>
                                        </span>
                                    </div>
                                </header>
                                
                                <div class="post-excerpt">
                                    <?php echo wp_trim_words(get_the_excerpt(), 20); ?>
                                </div>
                                
                                <footer class="post-footer">
                                    <a href="<?php the_permalink(); ?>" 
                                       class="read-more">
                                        ادامه مطلب
                                    </a>
                                </footer>
                            </div>
                        </article>
                        
                    <?php endwhile; ?>
                </div>
                
                <?php // Pagination ?>
                <div class="pagination">
                    <?php
                    echo paginate_links(array(
                        'total'        => $latest_posts->max_num_pages,
                        'current'      => max(1, get_query_var('paged')),
                        'prev_text'    => '&laquo; قبلی',
                        'next_text'    => 'بعدی &raquo;',
                        'type'         => 'list',
                    ));
                    ?>
                </div>
                
            <?php else : ?>
                <p class="no-posts">مطلبی یافت نشد.</p>
            <?php endif;
            
            wp_reset_postdata(); ?>
        </div>
    </section>

    <?php // بخش دسته‌بندی‌ها ?>
    <section class="categories-section">
        <div class="container">
            <h2 class="section-title">دسته‌بندی‌ها</h2>
            
            <?php
            $categories = get_categories(array(
                'orderby'    => 'count',
                'order'      => 'DESC',
                'number'     => 8,
                'hide_empty' => true,
            ));
            
            if (!empty($categories)) : ?>
                <div class="categories-grid">
                    <?php foreach ($categories as $category) : ?>
                        <a href="<?php echo esc_url(get_category_link($category)); ?>" 
                           class="category-card">
                            <h3><?php echo esc_html($category->name); ?></h3>
                            <span class="count">
                                <?php echo $category->count; ?> مطلب
                            </span>
                        </a>
                    <?php endforeach; ?>
                </div>
            <?php endif; ?>
        </div>
    </section>

</main>

<?php 
// فوتر
get_footer();

// ============================================
// functions.php - ثبت و تنظیمات قالب
// ============================================

// تنظیمات اولیه قالب
function mytheme_setup() {
    // عنوان صفحه
    add_theme_support('title-tag');
    
    // تصویر شاخص
    add_theme_support('post-thumbnails');
    add_image_size('card-thumb', 400, 250, true);
    add_image_size('hero-bg', 1920, 600, true);
    
    // منوها
    register_nav_menus(array(
        'primary' => __('منوی اصلی', 'mytheme'),
        'footer'  => __('منوی فوتر', 'mytheme'),
    ));
    
    // HTML5
    add_theme_support('html5', array(
        'search-form', 'comment-form', 'comment-list', 'gallery', 'caption', 'style', 'script'
    ));
    
    // Custom Logo
    add_theme_support('custom-logo', array(
        'height'      => 60,
        'width'       => 200,
        'flex-height' => true,
        'flex-width'  => true,
    ));
    
    // WooCommerce
    add_theme_support('woocommerce');
    
    // Editor Styles
    add_theme_support('editor-styles');
    add_editor_style('assets/css/editor-style.css');
    
    // Block Editor Support
    add_theme_support('wp-block-styles');
    add_theme_support('align-wide');
    add_theme_support('responsive-embeds');
}
add_action('after_setup_theme', 'mytheme_setup');

// Enqueue Styles & Scripts
function mytheme_scripts() {
    $version = wp_get_theme()->get('Version');
    
    // Main stylesheet
    wp_enqueue_style(
        'mytheme-style',
        get_stylesheet_uri(),
        array(),
        $version
    );
    
    // Custom CSS
    wp_enqueue_style(
        'mytheme-custom',
        get_template_directory_uri() . '/assets/css/custom.css',
        array('mytheme-style'),
        $version
    );
    
    // Fonts
    wp_enqueue_style(
        'vazir-font',
        'https://cdn.jsdelivr.net/gh/rastikerdar/vazirmatn@v33.003/Vazirmatn-font-face.css',
        array(),
        '33.003'
    );
    
    // Main JS
    wp_enqueue_script(
        'mytheme-main',
        get_template_directory_uri() . '/assets/js/main.js',
        array('jquery'),
        $version,
        true // in footer
    );
    
    // Localize script (pass PHP data to JS)
    wp_localize_script('mytheme-main', 'mythemeData', array(
        'ajaxUrl'  => admin_url('admin-ajax.php'),
        'nonce'    => wp_create_nonce('mytheme_nonce'),
        'themeUrl' => get_template_directory_uri(),
        'homeUrl'  => home_url('/'),
    ));
    
    // Comment reply script
    if (is_singular() && comments_open() && get_option('thread_comments')) {
        wp_enqueue_script('comment-reply');
    }
}
add_action('wp_enqueue_scripts', 'mytheme_scripts');`,
        language: "php",
        tips: [
          "همیشه از توابع WordPress استفاده کنید - SQL مستقیم ناامن است",
          "escaping را فراموش نکنید: esc_html, esc_attr, esc_url",
          "از Child Theme برای تغییرات استفاده کنید",
          "wp_reset_postdata() بعد از WP_Query سفارشی ضروری است"
        ],
        warnings: [
          "هرگز فایل‌های هسته وردپرس را ویرایش نکنید",
          "از eval() و توابع خطرناک استفاده نکنید",
          "همیشه nonce‌ها را برای فرم‌ها و AJAX بررسی کنید",
          "فایل wp-config.php را محافظت کنید"
        ],
        exercises: [
          {
            question: "یک Custom Post Type برای 'نمونه‌کار' بسازید با taxonomy دسته‌بندی و صفحه archive.",
            answer: `<?php
// functions.php

// ثبت Custom Post Type: نمونه‌کار
function register_portfolio_post_type() {
    $labels = array(
        'name'                  => __('نمونه‌کارها', 'mytheme'),
        'singular_name'         => __('نمونه‌کار', 'mytheme'),
        'menu_name'             => __('نمونه‌کارها', 'mytheme'),
        'add_new'               => __('افزودن نمونه‌کار', 'mytheme'),
        'add_new_item'          => __('افزودن نمونه‌کار جدید', 'mytheme'),
        'edit_item'             => __('ویرایش نمونه‌کار', 'mytheme'),
        'new_item'              => __('نمونه‌کار جدید', 'mytheme'),
        'view_item'             => __('مشاهده نمونه‌کار', 'mytheme'),
        'search_items'          => __('جستجوی نمونه‌کار', 'mytheme'),
        'not_found'             => __('نمونه‌کاری یافت نشد', 'mytheme'),
        'not_found_in_trash'    => __('نمونه‌کاری در زباله‌دان یافت نشد', 'mytheme'),
        'all_items'             => __('همه نمونه‌کارها', 'mytheme'),
    );

    $args = array(
        'labels'             => $labels,
        'public'             => true,
        'publicly_queryable' => true,
        'show_ui'            => true,
        'show_in_menu'       => true,
        'show_in_rest'       => true, // Gutenberg support
        'query_var'          => true,
        'rewrite'            => array('slug' => 'portfolio'),
        'capability_type'    => 'post',
        'has_archive'        => true,
        'hierarchical'       => false,
        'menu_position'      => 5,
        'menu_icon'          => 'dashicons-portfolio',
        'supports'           => array(
            'title',
            'editor',
            'thumbnail',
            'excerpt',
            'custom-fields',
            'revisions',
        ),
    );

    register_post_type('portfolio', $args);
}
add_action('init', 'register_portfolio_post_type');

// ثبت Taxonomy: دسته‌بندی نمونه‌کار
function register_portfolio_taxonomy() {
    $labels = array(
        'name'              => __('دسته‌بندی نمونه‌کارها', 'mytheme'),
        'singular_name'     => __('دسته‌بندی', 'mytheme'),
        'search_items'      => __('جستجوی دسته‌بندی', 'mytheme'),
        'all_items'         => __('همه دسته‌بندی‌ها', 'mytheme'),
        'parent_item'       => __('دسته‌بندی والد', 'mytheme'),
        'edit_item'         => __('ویرایش دسته‌بندی', 'mytheme'),
        'update_item'       => __('به‌روزرسانی دسته‌بندی', 'mytheme'),
        'add_new_item'      => __('افزودن دسته‌بندی جدید', 'mytheme'),
        'new_item_name'     => __('نام دسته‌بندی جدید', 'mytheme'),
        'menu_name'         => __('دسته‌بندی‌ها', 'mytheme'),
    );

    register_taxonomy('portfolio_category', 'portfolio', array(
        'labels'            => $labels,
        'hierarchical'      => true,
        'show_ui'           => true,
        'show_in_rest'      => true,
        'show_admin_column' => true,
        'query_var'         => true,
        'rewrite'           => array('slug' => 'portfolio-category'),
    ));
}
add_action('init', 'register_portfolio_taxonomy');

// Meta Boxes برای اطلاعات پروژه
function add_portfolio_meta_boxes() {
    add_meta_box(
        'portfolio_details',
        __('اطلاعات پروژه', 'mytheme'),
        'render_portfolio_meta_box',
        'portfolio',
        'normal',
        'high'
    );
}
add_action('add_meta_boxes', 'add_portfolio_meta_boxes');

function render_portfolio_meta_box($post) {
    wp_nonce_field('portfolio_meta_box', 'portfolio_meta_nonce');
    
    $client_name = get_post_meta($post->ID, '_portfolio_client', true);
    $project_url = get_post_meta($post->ID, '_portfolio_url', true);
    $technologies = get_post_meta($post->ID, '_portfolio_technologies', true);
    $completion_date = get_post_meta($post->ID, '_portfolio_date', true);
    ?>
    
    <p>
        <label for="portfolio_client"><strong>نام مشتری:</strong></label><br>
        <input type="text" id="portfolio_client" name="portfolio_client" 
               value="<?php echo esc_attr($client_name); ?>" class="widefat">
    </p>
    
    <p>
        <label for="portfolio_url"><strong>آدرس پروژه:</strong></label><br>
        <input type="url" id="portfolio_url" name="portfolio_url" 
               value="<?php echo esc_url($project_url); ?>" class="widefat">
    </p>
    
    <p>
        <label for="portfolio_technologies"><strong>تکنولوژی‌ها (با کاما جدا کنید):</strong></label><br>
        <input type="text" id="portfolio_technologies" name="portfolio_technologies" 
               value="<?php echo esc_attr($technologies); ?>" class="widefat"
               placeholder="React, Node.js, MongoDB">
    </p>
    
    <p>
        <label for="portfolio_date"><strong>تاریخ اتمام:</strong></label><br>
        <input type="date" id="portfolio_date" name="portfolio_date" 
               value="<?php echo esc_attr($completion_date); ?>">
    </p>
    
    <?php
}

function save_portfolio_meta_box($post_id) {
    if (!isset($_POST['portfolio_meta_nonce']) || 
        !wp_verify_nonce($_POST['portfolio_meta_nonce'], 'portfolio_meta_box')) {
        return;
    }
    
    if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE) return;
    if (!current_user_can('edit_post', $post_id)) return;
    
    $fields = array(
        'portfolio_client'       => '_portfolio_client',
        'portfolio_url'          => '_portfolio_url',
        'portfolio_technologies' => '_portfolio_technologies',
        'portfolio_date'         => '_portfolio_date',
    );
    
    foreach ($fields as $field => $meta_key) {
        if (isset($_POST[$field])) {
            $value = sanitize_text_field($_POST[$field]);
            update_post_meta($post_id, $meta_key, $value);
        }
    }
}
add_action('save_post_portfolio', 'save_portfolio_meta_box');

// archive-portfolio.php
/*
<?php get_header(); ?>

<main class="portfolio-archive">
    <div class="container">
        <h1 class="page-title">نمونه‌کارها</h1>
        
        <?php // فیلتر دسته‌بندی ?>
        <?php
        $categories = get_terms(array(
            'taxonomy'   => 'portfolio_category',
            'hide_empty' => true,
        ));
        ?>
        
        <div class="portfolio-filter">
            <a href="<?php echo get_post_type_archive_link('portfolio'); ?>" 
               class="filter-btn <?php echo !get_query_var('portfolio_category') ? 'active' : ''; ?>">
                همه
            </a>
            <?php foreach ($categories as $cat) : ?>
                <a href="<?php echo get_term_link($cat); ?>" 
                   class="filter-btn">
                    <?php echo esc_html($cat->name); ?>
                </a>
            <?php endforeach; ?>
        </div>
        
        <?php // گرید نمونه‌کارها ?>
        <div class="portfolio-grid">
            <?php if (have_posts()) : ?>
                <?php while (have_posts()) : the_post(); ?>
                    <article class="portfolio-item">
                        <?php if (has_post_thumbnail()) : ?>
                            <div class="portfolio-image">
                                <?php the_post_thumbnail('card-thumb'); ?>
                            </div>
                        <?php endif; ?>
                        
                        <div class="portfolio-info">
                            <h3>
                                <a href="<?php the_permalink(); ?>">
                                    <?php the_title(); ?>
                                </a>
                            </h3>
                            
                            <p><?php echo wp_trim_words(get_the_excerpt(), 15); ?></p>
                            
                            <?php
                            $tech = get_post_meta(get_the_ID(), '_portfolio_technologies', true);
                            if ($tech) :
                                $techs = explode(',', $tech);
                            ?>
                                <div class="tech-tags">
                                    <?php foreach ($techs as $t) : ?>
                                        <span class="tech-tag">
                                            <?php echo esc_html(trim($t)); ?>
                                        </span>
                                    <?php endforeach; ?>
                                </div>
                            <?php endif; ?>
                        </div>
                    </article>
                <?php endwhile; ?>
                
                <?php the_posts_pagination(); ?>
            <?php else : ?>
                <p>نمونه‌کاری یافت نشد.</p>
            <?php endif; ?>
        </div>
    </div>
</main>

<?php get_footer(); ?>
*/`
          }
        ]
      }
    ]
  },
  {
    id: "database-mastery",
    title: "دیتابیس و MongoDB",
    subtitle: "طراحی و مدیریت دیتابیس",
    description: "آموزش کامل MongoDB، Mongoose، طراحی Schema و بهینه‌سازی کوئری‌ها",
    color: "from-emerald-500 to-teal-600",
    iconBg: "bg-emerald-500/10",
    totalHours: 25,
    prerequisites: ["Node.js و Express"],
    outcomes: [
      "طراحی Schema حرفه‌ای",
      "نوشتن کوئری‌های پیچیده",
      "Aggregation Pipeline",
      "بهینه‌سازی Performance",
      "مدیریت Index‌ها"
    ],
    lessons: [
      {
        id: "mongo-basics",
        title: "MongoDB و Mongoose",
        subtitle: "کار با دیتابیس NoSQL",
        estimatedTime: 40,
        difficulty: "متوسط",
        content: `## MongoDB چیست؟

MongoDB یک دیتابیس NoSQL مبتنی بر سند (Document) است. داده‌ها به صورت BSON (Binary JSON) ذخیره می‌شوند و ساختار انعطاف‌پذیری دارند.

## مفاهیم کلیدی

### Database:
ظرف اصلی که Collection‌ها را نگه می‌دارد.

### Collection:
گروهی از Documents - معادل Table در SQL.

### Document:
یک رکورد JSON-like - معادل Row در SQL.

### Field:
یک خاصیت در Document - معادل Column در SQL.

## Mongoose

Mongoose یک ODM (Object Document Mapper) برای MongoDB در Node.js است که:
- Schema-based modeling
- Validation
- Type casting
- Middleware (hooks)
- Query building
- Population

## Schema Types

- String
- Number
- Date
- Buffer
- Boolean
- Mixed
- ObjectId
- Array
- Decimal128
- Map

## Validation

Mongoose validation‌های built-in دارد:
- required
- min/max (Number)
- minlength/maxlength (String)
- enum
- match (RegExp)
- validate (custom)

## Middleware (Hooks)

### Pre hooks:
قبل از عملیات اجرا می‌شوند.

### Post hooks:
بعد از عملیات اجرا می‌شوند.

## Population

جایگزینی ObjectId با document واقعی از collection دیگر.`,
        code: `// ===== اتصال به MongoDB =====
import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI, {
            maxPoolSize: 10,
            serverSelectionTimeoutMS: 5000,
            socketTimeoutMS: 45000,
        });
        console.log(\`MongoDB Connected: \${conn.connection.host}\`);
    } catch (error) {
        console.error('MongoDB Connection Error:', error.message);
        process.exit(1);
    }
};

export default connectDB;

// ===== User Model =====
import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import validator from 'validator';

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'نام الزامی است'],
        trim: true,
        minlength: [2, 'نام حداقل ۲ کاراکتر'],
        maxlength: [50, 'نام حداکثر ۵۰ کاراکتر'],
    },
    email: {
        type: String,
        required: [true, 'ایمیل الزامی است'],
        unique: true,
        lowercase: true,
        trim: true,
        validate: {
            validator: validator.isEmail,
            message: 'ایمیل نامعتبر است',
        },
    },
    password: {
        type: String,
        required: [true, 'رمز عبور الزامی است'],
        minlength: [8, 'رمز عبور حداقل ۸ کاراکتر'],
        select: false, // در query‌ها برنگردد
    },
    role: {
        type: String,
        enum: {
            values: ['user', 'admin', 'editor'],
            message: 'نقش نامعتبر است',
        },
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
        website: { 
            type: String,
            validate: {
                validator: (url) => url === '' || validator.isURL(url),
                message: 'آدرس وب نامعتبر است',
            }
        },
        location: String,
        socialLinks: {
            github: String,
            linkedin: String,
            twitter: String,
        },
    },
    preferences: {
        language: { type: String, default: 'fa' },
        theme: { type: String, enum: ['light', 'dark'], default: 'dark' },
        notifications: {
            email: { type: Boolean, default: true },
            push: { type: Boolean, default: true },
        },
    },
    resetPasswordToken: String,
    resetPasswordExpire: Date,
    lastLogin: Date,
    loginAttempts: {
        type: Number,
        default: 0,
    },
    lockUntil: Date,
}, {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
});

// Index‌ها
userSchema.index({ email: 1 });
userSchema.index({ name: 'text', 'profile.bio': 'text' });
userSchema.index({ createdAt: -1 });
userSchema.index({ role: 1, isActive: 1 });

// Virtual
userSchema.virtual('isLocked').get(function() {
    return !!(this.lockUntil && this.lockUntil > Date.now());
});

// Pre-save middleware
userSchema.pre('save', async function(next) {
    // هش رمز عبور
    if (!this.isModified('password')) return next();
    
    if (this.password) {
        const salt = await bcrypt.genSalt(12);
        this.password = await bcrypt.hash(this.password, salt);
    }
    
    next();
});

// Pre-find middleware - فقط کاربران فعال
userSchema.pre('find', function() {
    // this.where({ isActive: true }); // اختیاری
});

// Methods
userSchema.methods.comparePassword = async function(candidatePassword) {
    return await bcrypt.compare(candidatePassword, this.password);
};

userSchema.methods.incrementLoginAttempts = async function() {
    if (this.lockUntil && this.lockUntil < Date.now()) {
        return await this.updateOne({
            $set: { loginAttempts: 1 },
            $unset: { lockUntil: 1 },
        });
    }
    
    const updates = { $inc: { loginAttempts: 1 } };
    
    if (this.loginAttempts + 1 >= 5 && !this.isLocked) {
        updates.$set = { lockUntil: Date.now() + 2 * 60 * 60 * 1000 }; // 2 hours
    }
    
    return await this.updateOne(updates);
};

// Static methods
userSchema.statics.findActiveUsers = function() {
    return this.find({ isActive: true }).select('name email avatar');
};

userSchema.statics.findByEmail = function(email) {
    return this.findOne({ email: email.toLowerCase() });
};

const User = mongoose.model('User', userSchema);
export default User;

// ===== Product Model =====
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        index: true,
    },
    slug: {
        type: String,
        unique: true,
        lowercase: true,
    },
    description: {
        type: String,
        required: true,
        maxlength: 5000,
    },
    price: {
        type: Number,
        required: true,
        min: [0, 'قیمت نمی‌تواند منفی باشد'],
        index: true,
    },
    comparePrice: {
        type: Number,
        min: 0,
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: true,
        index: true,
    },
    tags: [{
        type: String,
        trim: true,
    }],
    images: [{
        url: { type: String, required: true },
        alt: String,
        isPrimary: { type: Boolean, default: false },
    }],
    inventory: {
        quantity: { type: Number, default: 0, min: 0 },
        trackInventory: { type: Boolean, default: true },
        lowStockThreshold: { type: Number, default: 5 },
    },
    variants: [{
        name: String, // "Size", "Color"
        options: [String], // ["S", "M", "L"]
        priceModifier: { type: Number, default: 0 },
    }],
    specifications: [{
        key: String,
        value: String,
    }],
    status: {
        type: String,
        enum: ['draft', 'active', 'archived'],
        default: 'draft',
        index: true,
    },
    featured: {
        type: Boolean,
        default: false,
        index: true,
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    ratings: {
        average: { type: Number, default: 0, min: 0, max: 5 },
        count: { type: Number, default: 0 },
    },
}, {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
});

// Index‌های مرکب
productSchema.index({ category: 1, price: 1 });
productSchema.index({ status: 1, featured: -1, createdAt: -1 });
productSchema.index({ name: 'text', description: 'text', tags: 'text' });

// Virtual - discount percentage
productSchema.virtual('discountPercentage').get(function() {
    if (!this.comparePrice || this.comparePrice <= this.price) return 0;
    return Math.round(((this.comparePrice - this.price) / this.comparePrice) * 100);
});

// Virtual - inStock
productSchema.virtual('inStock').get(function() {
    return this.inventory.quantity > 0;
});

// Pre-save: generate slug
productSchema.pre('save', function(next) {
    if (this.isModified('name') && !this.slug) {
        this.slug = this.name
            .toLowerCase()
            .replace(/[^\\w\\s-]/g, '')
            .replace(/\\s+/g, '-')
            .substring(0, 80);
    }
    next();
});

const Product = mongoose.model('Product', productSchema);
export default Product;

// ===== CRUD Operations =====

// CREATE
const newUser = await User.create({
    name: 'Ali',
    email: 'ali@example.com',
    password: 'securePass123',
});

// READ - Find
const users = await User.find({ role: 'user' })
    .select('name email')
    .sort({ createdAt: -1 })
    .limit(10)
    .skip(0)
    .lean(); // Performance: plain JS objects

// READ - FindOne
const user = await User.findOne({ email: 'ali@example.com' });

// READ - FindById
const userById = await User.findById(id).populate('posts');

// UPDATE
const updated = await User.findByIdAndUpdate(
    id,
    { $set: { name: 'New Name' } },
    { new: true, runValidators: true }
);

// DELETE
await User.findByIdAndDelete(id);

// Complex Query
const results = await Product.find({
    $and: [
        { price: { $gte: 100000, $lte: 5000000 } },
        { 'inventory.quantity': { $gt: 0 } },
        { status: 'active' },
        { tags: { $in: ['electronics', 'gadgets'] } },
    ],
    $or: [
        { name: { $regex: /laptop/i } },
        { description: { $regex: /laptop/i } },
    ],
})
    .populate('category', 'name slug')
    .sort({ 'ratings.average': -1, createdAt: -1 })
    .limit(20);

// Aggregation Pipeline
const stats = await Product.aggregate([
    { $match: { status: 'active' } },
    {
        $group: {
            _id: '$category',
            count: { $sum: 1 },
            avgPrice: { $avg: '$price' },
            minPrice: { $min: '$price' },
            maxPrice: { $max: '$price' },
            totalRevenue: { $sum: { $multiply: ['$price', '$sold'] } },
        },
    },
    {
        $lookup: {
            from: 'categories',
            localField: '_id',
            foreignField: '_id',
            as: 'categoryInfo',
        },
    },
    { $unwind: '$categoryInfo' },
    {
        $project: {
            categoryName: '$categoryInfo.name',
            count: 1,
            avgPrice: { $round: ['$avgPrice', 0] },
            minPrice: 1,
            maxPrice: 1,
            totalRevenue: 1,
        },
    },
    { $sort: { totalRevenue: -1 } },
]);`,
        language: "javascript",
        tips: [
          "از lean() برای query‌های فقط خواندنی استفاده کنید",
          "Index‌ها برای فیلدهای پرکاربرد بسازید",
          "Validation سمت سرور ضروری است",
          "Population را محدود کنید - همه فیلدها را نگیرید"
        ],
        warnings: [
          "هرگز رمز عبور را plain text ذخیره نکنید",
          "از NoSQL Injection آگاه باشید",
          "Index‌ها write performance را کاهش می‌دهند",
          "Aggregation Pipeline می‌تواند resource-intensive باشد"
        ],
        exercises: [
          {
            question: "یک aggregation pipeline بنویسید که پرفروش‌ترین محصولات هر دسته‌بندی را با تعداد فروش و درآمد نشان دهد.",
            answer: `const getTopProductsByCategory = async () => {
    const result = await Order.aggregate([
        // 1. فقط سفارش‌های تکمیل شده
        { $match: { status: 'completed' } },
        
        // 2. باز کردن آیتم‌ها
        { $unwind: '$items' },
        
        // 3. Lookup محصول
        {
            $lookup: {
                from: 'products',
                localField: 'items.product',
                foreignField: '_id',
                as: 'product'
            }
        },
        { $unwind: '$product' },
        
        // 4. گروه‌بندی بر اساس محصول
        {
            $group: {
                _id: '$items.product',
                productName: { $first: '$product.name' },
                category: { $first: '$product.category' },
                totalSold: { $sum: '$items.quantity' },
                totalRevenue: { 
                    $sum: { $multiply: ['$items.price', '$items.quantity'] }
                },
                orders: { $addToSet: '$_id' },
                avgRating: { $avg: '$product.ratings.average' }
            }
        },
        
        // 5. Lookup دسته‌بندی
        {
            $lookup: {
                from: 'categories',
                localField: 'category',
                foreignField: '_id',
                as: 'categoryInfo'
            }
        },
        { $unwind: '$categoryInfo' },
        
        // 6. مرتب‌سازی
        { $sort: { totalSold: -1 } },
        
        // 7. گروه‌بندی نهایی بر اساس دسته
        {
            $group: {
                _id: '$categoryInfo.name',
                categoryId: { $first: '$category' },
                products: {
                    $push: {
                        id: '$_id',
                        name: '$productName',
                        totalSold: 1,
                        totalRevenue: { $round: ['$totalRevenue', 0] },
                        orderCount: { $size: '$orders' },
                        avgRating: { $round: ['$avgRating', 1] }
                    }
                }
            }
        },
        
        // 8. فقط 5 تای برتر
        {
            $project: {
                category: '$_id',
                topProducts: { $slice: ['$products', 5] },
                totalProducts: { $size: '$products' }
            }
        },
        
        // 9. مرتب‌سازی نهایی
        { $sort: { totalProducts: -1 } }
    ]);
    
    return result;
};

// استفاده:
const topProducts = await getTopProductsByCategory();
console.log(topProducts);
// [
//   {
//     category: 'الکترونیک',
//     topProducts: [
//       { id: '...', name: 'لپ‌تاپ', totalSold: 150, totalRevenue: 6750000000, ... },
//       ...
//     ],
//     totalProducts: 25
//   },
//   ...
// ]`
          }
        ]
      }
    ]
  },
  {
    id: "deployment-devops",
    title: "استقرار و DevOps",
    subtitle: "Deploy و مدیریت سرور",
    description: "آموزش Docker، CI/CD، مدیریت سرور و استقرار حرفه‌ای پروژه‌ها",
    color: "from-violet-500 to-purple-600",
    iconBg: "bg-violet-500/10",
    totalHours: 20,
    prerequisites: ["آشنایی با Linux"],
    outcomes: [
      "کار با Docker و Docker Compose",
      "راه‌اندازی CI/CD Pipeline",
      "مدیریت سرور Linux",
      "تنظیم Nginx و SSL",
      "مانیتورینگ و Logging"
    ],
    lessons: [
      {
        id: "docker-basics",
        title: "Docker - کانتینرسازی اپلیکیشن",
        subtitle: "ساخت و مدیریت Container‌ها",
        estimatedTime: 45,
        difficulty: "پیشرفته",
        content: `## Docker چیست؟

Docker ابزاری برای ساخت، اجرا و مدیریت container‌ها است. Container یک واحد استاندارد نرم‌افزاری است که کد و تمام dependency‌هایش را بسته‌بندی می‌کند.

## مزایای Docker:

1. **Consistency**: محیط توسعه و production یکسان
2. **Isolation**: هر اپلیکیشن در container جداگانه
3. **Portability**: اجرا روی هر سیستمی
4. **Scalability**: به راحتی قابل scale
5. **Resource Efficiency**: سبک‌تر از VM

## مفاهیم کلیدی:

### Image:
Template فقط‌خواندنی برای ساخت container.

### Container:
Instance اجرایی یک Image.

### Dockerfile:
فایل متنی که دستورات ساخت Image را مشخص می‌کند.

### Docker Compose:
ابزاری برای تعریف و اجرای اپلیکیشن‌های چند-container.

### Registry:
مخزن Images (مثل Docker Hub).

### Volume:
ذخیره‌سازی persistent data.

### Network:
ارتباط بین container‌ها.

## Dockerfile Instructions:

- \`FROM\`: Base image
- \`WORKDIR\`: Working directory
- \`COPY\`: کپی فایل‌ها
- \`RUN\`: اجرای دستور در build time
- \`CMD\`: دستور پیش‌فرض در runtime
- \`ENTRYPOINT\`: نقطه ورود
- \`ENV\`: Environment variables
- \`EXPOSE\`: Port declaration
- \`ARG\`: Build-time variables

## Multi-stage Build:
برای کاهش حجم نهایی Image.`,
        code: `# ============================================
# Dockerfile - Multi-stage Build
# ============================================

# Stage 1: Dependencies
FROM node:20-alpine AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production && \\
    cp -R node_modules /prod_modules && \\
    npm ci

# Stage 2: Build
FROM node:20-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# Stage 3: Production
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production

# Create non-root user
RUN addgroup --system --gid 1001 nodejs && \\
    adduser --system --uid 1001 nextjs

# Copy built assets
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

CMD ["node", "server.js"]

# ============================================
# docker-compose.yml - Full Stack App
# ============================================

# version: '3.8'
#
# services:
#   # Frontend/Backend App
#   app:
#     build:
#       context: .
#       dockerfile: Dockerfile
#     container_name: myapp
#     restart: unless-stopped
#     ports:
#       - "3000:3000"
#     environment:
#       - NODE_ENV=production
#       - MONGODB_URI=mongodb://mongo:27017/myapp
#       - REDIS_URL=redis://redis:6379
#       - JWT_SECRET=\${JWT_SECRET}
#     depends_on:
#       mongo:
#         condition: service_healthy
#       redis:
#         condition: service_healthy
#     networks:
#       - app-network
#     healthcheck:
#       test: ["CMD", "curl", "-f", "http://localhost:3000/api/health"]
#       interval: 30s
#       timeout: 10s
#       retries: 3
#       start_period: 40s
#
#   # MongoDB
#   mongo:
#     image: mongo:7
#     container_name: mongodb
#     restart: unless-stopped
#     ports:
#       - "27017:27017"
#     volumes:
#       - mongo-data:/data/db
#       - mongo-config:/data/configdb
#       - ./mongo-init.js:/docker-entrypoint-initdb.d/init.js:ro
#     environment:
#       - MONGO_INITDB_DATABASE=myapp
#     networks:
#       - app-network
#     healthcheck:
#       test: echo 'db.runCommand("ping").ok' | mongosh localhost:27017/test --quiet
#       interval: 10s
#       timeout: 10s
#       retries: 5
#       start_period: 40s
#
#   # Redis
#   redis:
#     image: redis:7-alpine
#     container_name: redis
#     restart: unless-stopped
#     ports:
#       - "6379:6379"
#     volumes:
#       - redis-data:/data
#     command: redis-server --appendonly yes --maxmemory 256mb --maxmemory-policy allkeys-lru
#     networks:
#       - app-network
#     healthcheck:
#       test: ["CMD", "redis-cli", "ping"]
#       interval: 10s
#       timeout: 5s
#       retries: 5
#
#   # Nginx Reverse Proxy
#   nginx:
#     image: nginx:alpine
#     container_name: nginx
#     restart: unless-stopped
#     ports:
#       - "80:80"
#       - "443:443"
#     volumes:
#       - ./nginx/nginx.conf:/etc/nginx/nginx.conf:ro
#       - ./nginx/conf.d:/etc/nginx/conf.d:ro
#       - ./ssl:/etc/nginx/ssl:ro
#       - nginx-logs:/var/log/nginx
#     depends_on:
#       - app
#     networks:
#       - app-network
#
#   # MongoDB Express (Admin UI - dev only)
#   mongo-express:
#     image: mongo-express
#     container_name: mongo-admin
#     restart: unless-stopped
#     ports:
#       - "8081:8081"
#     environment:
#       - ME_CONFIG_MONGODB_URL=mongodb://mongo:27017/
#       - ME_CONFIG_BASICAUTH_USERNAME=admin
#       - ME_CONFIG_BASICAUTH_PASSWORD=\${MONGO_EXPRESS_PASSWORD}
#     depends_on:
#       - mongo
#     networks:
#       - app-network
#     profiles:
#       - tools  # Only starts with --profile tools
#
# volumes:
#   mongo-data:
#     driver: local
#   mongo-config:
#     driver: local
#   redis-data:
#     driver: local
#   nginx-logs:
#     driver: local
#
# networks:
#   app-network:
#     driver: bridge

# ============================================
# Nginx Configuration
# ============================================
# nginx/conf.d/default.conf

# # Redirect HTTP to HTTPS
# server {
#     listen 80;
#     server_name example.ir www.example.ir;
#     
#     # Let's Encrypt challenge
#     location /.well-known/acme-challenge/ {
#         root /var/www/certbot;
#     }
#     
#     location / {
#         return 301 https://$server_name$request_uri;
#     }
# }
#
# # HTTPS Server
# server {
#     listen 443 ssl http2;
#     server_name example.ir www.example.ir;
#
#     # SSL
#     ssl_certificate /etc/nginx/ssl/fullchain.pem;
#     ssl_certificate_key /etc/nginx/ssl/privkey.pem;
#     ssl_protocols TLSv1.2 TLSv1.3;
#     ssl_ciphers ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256;
#     ssl_prefer_server_ciphers off;
#     ssl_session_cache shared:SSL:10m;
#     ssl_session_timeout 1d;
#
#     # Security Headers
#     add_header X-Frame-Options "SAMEORIGIN" always;
#     add_header X-Content-Type-Options "nosniff" always;
#     add_header X-XSS-Protection "1; mode=block" always;
#     add_header Strict-Transport-Security "max-age=63072000" always;
#     add_header Referrer-Policy "strict-origin-when-cross-origin" always;
#
#     # Gzip
#     gzip on;
#     gzip_vary on;
#     gzip_min_length 1024;
#     gzip_types text/plain text/css application/json application/javascript text/xml application/xml text/javascript image/svg+xml;
#
#     # Static files - long cache
#     location /_next/static/ {
#         proxy_pass http://app:3000;
#         proxy_cache_valid 200 365d;
#         add_header Cache-Control "public, max-age=31536000, immutable";
#         access_log off;
#     }
#
#     # Images
#     location /images/ {
#         proxy_pass http://app:3000;
#         proxy_cache_valid 200 30d;
#         add_header Cache-Control "public, max-age=2592000";
#     }
#
#     # App
#     location / {
#         proxy_pass http://app:3000;
#         proxy_http_version 1.1;
#         proxy_set_header Upgrade $http_upgrade;
#         proxy_set_header Connection 'upgrade';
#         proxy_set_header Host $host;
#         proxy_set_header X-Real-IP $remote_addr;
#         proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
#         proxy_set_header X-Forwarded-Proto $scheme;
#         proxy_cache_bypass $http_upgrade;
#         
#         # Timeouts
#         proxy_connect_timeout 60s;
#         proxy_send_timeout 60s;
#         proxy_read_timeout 60s;
#     }
#
#     # Rate limiting
#     location /api/ {
#         limit_req zone=api burst=20 nodelay;
#         proxy_pass http://app:3000;
#         proxy_set_header Host $host;
#         proxy_set_header X-Real-IP $remote_addr;
#     }
# }

# ============================================
# GitHub Actions CI/CD
# ============================================
# .github/workflows/deploy.yml

# name: CI/CD Pipeline
#
# on:
#   push:
#     branches: [main]
#   pull_request:
#     branches: [main]
#
# jobs:
#   test:
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
#       - name: Run linter
#         run: npm run lint
#       
#       - name: Run tests
#         run: npm test
#       
#       - name: Build
#         run: npm run build
#
#   deploy:
#     needs: test
#     runs-on: ubuntu-latest
#     if: github.ref == 'refs/heads/main'
#     
#     steps:
#       - uses: actions/checkout@v4
#       
#       - name: Deploy to server
#         uses: appleboy/ssh-action@v1
#         with:
#           host: \${{ secrets.SERVER_HOST }}
#           username: \${{ secrets.SERVER_USER }}
#           key: \${{ secrets.SSH_PRIVATE_KEY }}
#           script: |
#             cd /var/www/myapp
#             git pull origin main
#             docker compose down
#             docker compose up -d --build
#             docker system prune -f
#             echo "Deployment completed at $(date)"`,
        language: "dockerfile",
        tips: [
          "از multi-stage builds برای کاهش حجم image استفاده کنید",
          "از alpine base images استفاده کنید - سبک‌تر هستند",
          ".dockerignore برای exclude فایل‌های غیرضروری",
          "Healthcheck برای monitoring container‌ها"
        ],
        warnings: [
          "هرگز secrets را در Dockerfile hardcode نکنید",
          "از root user در container استفاده نکنید",
          "Image‌ها را مرتب prune کنید",
          "Volume‌ها را backup بگیرید"
        ],
        exercises: [
          {
            question: "یک docker-compose.yml بنویسید که شامل Next.js app، MongoDB، Redis و Nginx باشد. همه services باید healthcheck داشته باشند.",
            answer: `version: '3.8'

services:
  app:
    build:
      context: .
      dockerfile: Dockerfile
      args:
        - NODE_ENV=production
    container_name: nextjs-app
    restart: unless-stopped
    environment:
      - NODE_ENV=production
      - MONGODB_URI=mongodb://mongo:27017/myapp
      - REDIS_URL=redis://redis:6379
    depends_on:
      mongo:
        condition: service_healthy
      redis:
        condition: service_healthy
    networks:
      - backend
    healthcheck:
      test: ["CMD", "wget", "--no-verbose", "--tries=1", "--spider", "http://localhost:3000/api/health"]
      interval: 30s
      timeout: 10s
      retries: 3
      start_period: 40s
    deploy:
      resources:
        limits:
          cpus: '1.0'
          memory: 512M

  mongo:
    image: mongo:7-jammy
    container_name: mongodb
    restart: unless-stopped
    volumes:
      - mongo-data:/data/db
    environment:
      MONGO_INITDB_DATABASE: myapp
    networks:
      - backend
    healthcheck:
      test: ["CMD", "mongosh", "--eval", "db.adminCommand('ping')"]
      interval: 10s
      timeout: 5s
      retries: 5
      start_period: 30s

  redis:
    image: redis:7-alpine
    container_name: redis-cache
    restart: unless-stopped
    command: redis-server --appendonly yes --maxmemory 128mb --maxmemory-policy allkeys-lru
    volumes:
      - redis-data:/data
    networks:
      - backend
    healthcheck:
      test: ["CMD", "redis-cli", "ping"]
      interval: 10s
      timeout: 5s
      retries: 5

  nginx:
    image: nginx:alpine
    container_name: nginx-proxy
    restart: unless-stopped
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - ./nginx/conf.d:/etc/nginx/conf.d:ro
      - ./ssl:/etc/nginx/ssl:ro
    depends_on:
      app:
        condition: service_healthy
    networks:
      - backend

volumes:
  mongo-data:
  redis-data:

networks:
  backend:
    driver: bridge`
          }
        ]
      }
    ]
  },
  {
    id: "career-prep",
    title: "آمادگی بازار کار",
    subtitle: "ورود حرفه‌ای به صنعت وب",
    description: "راهنمای جامع ورود به بازار کار، ساخت پورتفولیو، مصاحبه فنی و توسعه حرفه‌ای",
    color: "from-amber-500 to-orange-600",
    iconBg: "bg-amber-500/10",
    totalHours: 10,
    prerequisites: ["تسلط بر حداقل یک مسیر توسعه"],
    outcomes: [
      "ساخت پورتفولیوی حرفه‌ای",
      "نوشتن رزومه مؤثر",
      "آمادگی برای مصاحبه فنی",
      "آشنایی با نرخ‌ها و قراردادها",
      "توسعه برند شخصی"
    ],
    lessons: [
      {
        id: "career-roadmap",
        title: "مسیرهای شغلی در توسعه وب",
        subtitle: "کدام مسیر برای شما مناسب‌تر است؟",
        estimatedTime: 30,
        difficulty: "مبتدی",
        content: `## مسیرهای شغلی در توسعه وب

صنعت وب فرصت‌های شغلی متنوعی ارائه می‌دهد. انتخاب مسیر مناسب به علاقه، استعداد و اهداف شما بستگی دارد.

## ۱. Frontend Developer

**تمرکز:** رابط کاربری و تجربه کاربری

**تکنولوژی‌ها:**
- HTML, CSS, JavaScript
- React/Vue/Angular
- TypeScript
- CSS Frameworks (Tailwind)
- State Management (Redux, Zustand)
- Testing (Jest, Cypress)

**مناسب شماست اگر:**
- به طراحی بصری علاقه دارید
- از حل مسائل UI لذت می‌برید
- به جزئیات بصری توجه دارید
- ارتباط خوبی با طراحان دارید

**میانگین حقوق (۱۴۰۳):**
- جونیور: ۱۵-۲۵ میلیون
- مید-لول: ۲۵-۴۵ میلیون
- سنیور: ۴۵-۸۰ میلیون

## ۲. Backend Developer

**تمرکز:** سرور، دیتابیس، API

**تکنولوژی‌ها:**
- Node.js/Express یا Python/Django یا PHP/Laravel
- MongoDB/PostgreSQL/MySQL
- REST/GraphQL API
- Authentication/Authorization
- Caching (Redis)
- Message Queues

**مناسب شماست اگر:**
- به منطق و الگوریتم علاقه دارید
- از کار با داده‌ها لذت می‌برید
- به امنیت اهمیت می‌دهید
- تفکر سیستمی دارید

## ۳. Full Stack Developer

**تمرکز:** ترکیب Frontend و Backend

**تکنولوژی‌ها:**
- MERN Stack (MongoDB, Express, React, Node)
- Next.js / Nuxt.js
- TypeScript
- DevOps basics
- Database design

**مناسب شماست اگر:**
- دید کلی می‌خواهید
- از تنوع کار لذت می‌برید
- توانایی یادگیری مداوم دارید
- می‌خواهید مستقل کار کنید

## ۴. WordPress Developer

**تمرکز:** طراحی و توسعه سایت‌های وردپرسی

**تکنولوژی‌ها:**
- PHP
- WordPress Core
- Theme Development
- Plugin Development
- WooCommerce
- Page Builders

**مناسب شماست اگر:**
- می‌خواهید سریع وارد بازار شوید
- به فریلنسری علاقه دارید
- مشتریان ایرانی هدف شما هستند
- از تنوع پروژه‌ها لذت می‌برید

## ۵. DevOps Engineer

**تمرکز:** زیرساخت، استقرار، اتوماسیون

**تکنولوژی‌ها:**
- Linux
- Docker & Kubernetes
- CI/CD (GitHub Actions, Jenkins)
- Cloud (AWS, DigitalOcean)
- Monitoring (Prometheus, Grafana)
- IaC (Terraform)

## ۶. Freelancer

**تمرکز:** کار مستقل و پروژه‌ای

**مهارت‌های لازم:**
- حداقل یک stack کامل
- مدیریت پروژه
- ارتباط با مشتری
- قیمت‌گذاری
- بازاریابی شخصی

**پلتفرم‌ها:**
- پونیشا، کارلنسر (ایران)
- Upwork, Fiverr (بین‌المللی)

## مهارت‌های نرم ضروری

1. **حل مسئله**: توانایی تحلیل و حل مسائل پیچیده
2. **یادگیری مداوم**: تکنولوژی دائماً تغییر می‌کند
3. **کار تیمی**: اکثر پروژه‌ها تیمی هستند
4. **ارتباط**: توانایی توضیح مفاهیم فنی
5. **مدیریت زمان**: تحویل به موقع پروژه
6. **توجه به جزئیات**: کیفیت کد مهم است
7. **صبر و پشتکار**: مشکلات فنی زمان‌بر هستند`,
        code: `// ============================================
// چک‌لیست مهارت‌ها برای هر مسیر
// ============================================

// Frontend Developer Checklist
const frontendSkills = {
    essential: [
        "HTML5 & Semantic Markup",
        "CSS3 & Modern Layout (Flexbox, Grid)",
        "JavaScript ES6+ & DOM",
        "Responsive Design & Mobile First",
        "Git & GitHub",
        "React.js (or Vue/Angular)",
        "REST API Integration",
        "Browser DevTools",
    ],
    important: [
        "TypeScript",
        "State Management (Redux/Zustand)",
        "Testing (Jest, RTL, Cypress)",
        "Performance Optimization",
        "Accessibility (WCAG)",
        "SEO Fundamentals",
        "CSS Architecture (BEM, ITCSS)",
        "Build Tools (Vite, Webpack)",
    ],
    nice_to_have: [
        "Next.js / Nuxt.js",
        "GraphQL",
        "Web Animations",
        "PWA",
        "Web Components",
        "Micro Frontends",
    ]
};

// Backend Developer Checklist
const backendSkills = {
    essential: [
        "Node.js & Express",
        "RESTful API Design",
        "Database (MongoDB/PostgreSQL)",
        "Authentication (JWT, OAuth)",
        "Security Best Practices",
        "Git & Version Control",
        "Linux Basics",
        "API Testing (Postman)",
    ],
    important: [
        "TypeScript",
        "Caching (Redis)",
        "Message Queues (RabbitMQ)",
        "Docker Basics",
        "Unit & Integration Testing",
        "CI/CD Basics",
        "Performance Tuning",
        "Logging & Monitoring",
    ],
    nice_to_have: [
        "GraphQL",
        "Microservices",
        "Kubernetes",
        "Cloud Services (AWS)",
        "WebSocket",
        "System Design",
    ]
};

// WordPress Developer Checklist
const wordpressSkills = {
    essential: [
        "PHP & MySQL",
        "WordPress Theme Development",
        "Template Hierarchy",
        "Custom Post Types & Taxonomies",
        "WordPress Hooks (Actions & Filters)",
        "ACF (Advanced Custom Fields)",
        "Responsive Design",
        "SEO Basics",
    ],
    important: [
        "Plugin Development",
        "WooCommerce",
        "Elementor/Gutenberg",
        "Speed Optimization",
        "Security Hardening",
        "Migration & Backup",
        "Child Themes",
        "REST API",
    ],
    nice_to_have: [
        "Headless WordPress",
        "React + WordPress",
        "Multisite",
        "Custom Blocks",
        "WP-CLI",
        "Server Management",
    ]
};

// ============================================
// ساختار پورتفولیو
// ============================================

const portfolioStructure = {
    // 1. Hero Section
    hero: {
        name: "نام شما",
        title: "Full Stack Developer",
        tagline: "ساخت وب‌اپلیکیشن‌های مدرن و مقیاس‌پذیر",
        cta: "مشاهده پروژه‌ها",
    },
    
    // 2. About Section
    about: {
        description: "توضیح مختصر درباره خودتان",
        skills: ["React", "Node.js", "MongoDB", "TypeScript"],
        experience: "۲+ سال تجربه",
        education: "مهندسی کامپیوتر",
    },
    
    // 3. Projects (3-5 پروژه برتر)
    projects: [
        {
            title: "عنوان پروژه",
            description: "توضیح کوتاه",
            technologies: ["React", "Node.js", "MongoDB"],
            liveUrl: "https://project.com",
            githubUrl: "https://github.com/user/project",
            image: "/project-screenshot.jpg",
            highlights: [
                "ویژگی کلیدی ۱",
                "ویژگی کلیدی ۲",
                "چالش فنی و نحوه حل آن",
            ],
        },
    ],
    
    // 4. Experience
    experience: [
        {
            company: "نام شرکت",
            position: "Frontend Developer",
            period: "۱۴۰۱ - اکنون",
            achievements: [
                "بازنویسی UI و بهبود ۴۰٪ performance",
                "پیاده‌سازی design system",
                "Mentoring ۲ جونیور developer",
            ],
        },
    ],
    
    // 5. Contact
    contact: {
        email: "your@email.com",
        linkedin: "linkedin.com/in/yourprofile",
        github: "github.com/yourusername",
        telegram: "@yourhandle",
    },
};

// ============================================
// قالب رزومه
// ============================================

const resumeTemplate = {
    header: {
        name: "نام کامل",
        title: "Full Stack Web Developer",
        contact: {
            email: "email@example.com",
            phone: "۰۹۱۲XXXXXXX",
            location: "تهران، ایران",
            linkedin: "linkedin.com/in/yourprofile",
            github: "github.com/yourusername",
            website: "yourwebsite.com",
        },
    },
    
    summary: "توسعه‌دهنده فول‌استک با X سال تجربه در ساخت وب‌اپلیکیشن‌های مقیاس‌پذیر. مسلط به React، Node.js و MongoDB با تجربه کار در تیم‌های Agile. علاقه‌مند به یادگیری مداوم و حل مسائل پیچیده.",
    
    skills: {
        frontend: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Redux"],
        backend: ["Node.js", "Express", "MongoDB", "PostgreSQL", "Redis"],
        tools: ["Git", "Docker", "AWS", "CI/CD", "Jest"],
        soft: ["Problem Solving", "Team Leadership", "Communication"],
    },
    
    experience: [
        {
            company: "نام شرکت",
            position: "Senior Frontend Developer",
            period: "فروردین ۱۴۰۲ - اکنون",
            location: "تهران",
            achievements: [
                "رهبری تیم ۵ نفره فرانت‌اند و تحویل ۳ پروژه بزرگ",
                "بهبود ۶۰٪ سرعت لود با بهینه‌سازی performance",
                "پیاده‌سازی design system با Storybook",
                "کاهش ۴۰٪ باگ‌ها با راه‌اندازی CI/CD و testing",
            ],
        },
    ],
    
    projects: [
        {
            name: "نام پروژه",
            role: "Full Stack Developer",
            description: "پلتفرم فروشگاهی با ۱۰K+ کاربر فعال",
            tech: "Next.js, Node.js, MongoDB, Redis",
            link: "github.com/yourusername/project",
        },
    ],
    
    education: [
        {
            degree: "کارشناسی مهندسی کامپیوتر",
            university: "دانشگاه تهران",
            period: "۱۳۹۶ - ۱۴۰۰",
        },
    ],
    
    certifications: [
        "Meta Frontend Developer Certificate",
        "AWS Cloud Practitioner",
    ],
    
    languages: [
        { name: "فارسی", level: "زبان مادری" },
        { name: "انگلیسی", level: "پیشرفته (IELTS 7.5)" },
    ],
};`,
        language: "javascript",
        tips: [
          "پورتفولیو قوی‌تر از مدرک دانشگاهی است",
          "پروژه‌های واقعی بسازید - نه tutorial",
          "GitHub خود را فعال نگه دارید",
          "در جامعه برنامه‌نویسان فعال باشید"
        ],
        warnings: [
          "از دروغ گفتن در رزومه خودداری کنید",
          "توقع حقوق غیرواقعی نداشته باشید",
          "قرارداد را قبل از شروع کار امضا کنید",
          "مهارت‌های نرم به اندازه فنی مهم هستند"
        ],
        exercises: [
          {
            question: "یک ساختار برای پورتفولیوی شخصی طراحی کنید که شامل ۳ پروژه نمونه با توضیحات فنی باشد.",
            answer: `// portfolio-data.js

export const portfolioData = {
    personal: {
        name: "علی محمدی",
        title: "Full Stack Developer",
        tagline: "ساخت وب‌اپلیکیشن‌های مدرن با تمرکز بر تجربه کاربری",
        bio: "توسعه‌دهنده فول‌استک با ۳ سال تجربه در ساخت اپلیکیشن‌های وب مقیاس‌پذیر. علاقه‌مند به React، Node.js و معماری نرم‌افزار.",
        avatar: "/avatar.jpg",
        location: "تهران، ایران",
        available: true,
    },
    
    projects: [
        {
            id: 1,
            title: "پلتفرم آموزش آنلاین",
            subtitle: "سامانه LMS با قابلیت ویدیو استریمینگ",
            description: "پلتفرمی برای برگزاری دوره‌های آنلاین با قابلیت پخش ویدیو، آزمون، صدور مدرک و پنل مدیریت پیشرفته. این پروژه با بیش از ۵۰۰۰ کاربر فعال، یکی از بزرگترین پروژه‌های من بوده.",
            image: "/projects/lms.jpg",
            liveUrl: "https://lms-example.com",
            githubUrl: "https://github.com/username/lms-platform",
            technologies: ["Next.js", "TypeScript", "Node.js", "MongoDB", "Redis", "AWS S3"],
            category: "fullstack",
            highlights: [
                "پیاده‌سازی video streaming با adaptive bitrate",
                "سیستم آزمون‌سازی پیشرفته با timer و auto-save",
                "بهینه‌سازی performance و رسیدن به Lighthouse score ۹۵+",
                "پیاده‌سازی real-time notifications با WebSocket",
            ],
            challenges: [
                {
                    problem: "مدیریت پخش ویدیو برای هزاران کاربر همزمان",
                    solution: "استفاده از AWS CloudFront CDN و adaptive streaming با HLS"
                },
                {
                    problem: "جلوگیری از تقلب در آزمون‌ها",
                    solution: "پیاده‌سازی سیستم proctoring با detection تب جدید و copy/paste"
                }
            ],
            metrics: {
                users: "۵,۰۰۰+",
                courses: "۱۲۰+",
                uptime: "۹۹.۹%",
                performance: "Lighthouse ۹۵",
            }
        },
        {
            id: 2,
            title: "فروشگاه چندفروشنده",
            subtitle: "مارکت‌پلیس با پنل فروشنده",
            description: "مارکت‌پلیس مشابه دیجی‌کالا با قابلیت ثبت‌نام فروشنده، مدیریت محصولات، سفارش‌ها و پرداخت. سیستم commission خودکار و گزارش‌گیری پیشرفته.",
            image: "/projects/marketplace.jpg",
            liveUrl: "https://marketplace-example.com",
            githubUrl: "https://github.com/username/multi-vendor",
            technologies: ["React", "Express", "MongoDB", "Stripe", "Docker"],
            category: "fullstack",
            highlights: [
                "سیستم چند فروشنده با commission خودکار",
                "یکپارچه‌سازی درگاه پرداخت",
                "پنل مدیریت پیشرفته با گزارش‌گیری",
                "سیستم جستجوی پیشرفته با Elasticsearch",
            ],
            challenges: [
                {
                    problem: "محاسبه commission پیچیده برای هر فروشنده",
                    solution: "طراحی سیستم rule-based با قابلیت تنظیم درصد و حداقل"
                }
            ],
            metrics: {
                vendors: "۲۰۰+",
                products: "۱۰,۰۰۰+",
                transactions: "۵۰,۰۰۰+",
            }
        },
        {
            id: 3,
            title: "اپلیکیشن مدیریت پروژه",
            subtitle: "مشابه Trello با قابلیت‌های پیشرفته",
            description: "ابزار مدیریت پروژه با Kanban board، time tracking، team collaboration و reporting. قابلیت real-time sync بین کاربران.",
            image: "/projects/pm-tool.jpg",
            liveUrl: "https://pm-tool-example.com",
            githubUrl: "https://github.com/username/pm-tool",
            technologies: ["React", "TypeScript", "Socket.io", "PostgreSQL", "Redis"],
            category: "frontend",
            highlights: [
                "Drag & drop پیشرفته با DnD Kit",
                "Real-time collaboration با Socket.io",
                "Time tracking با timer و گزارش",
                "Export به PDF و Excel",
            ],
            challenges: [
                {
                    problem: "Sync کردن تغییرات real-time بین چندین کاربر",
                    solution: "استفاده از Socket.io با conflict resolution strategy"
                }
            ],
            metrics: {
                teams: "۱۰۰+",
                projects: "۵۰۰+",
                tasks: "۲۵,۰۰۰+",
            }
        },
    ],
    
    skills: {
        frontend: {
            name: "Frontend",
            items: [
                { name: "React", level: 95 },
                { name: "TypeScript", level: 90 },
                { name: "Next.js", level: 85 },
                { name: "Tailwind CSS", level: 90 },
                { name: "Redux/Zustand", level: 85 },
            ]
        },
        backend: {
            name: "Backend",
            items: [
                { name: "Node.js", level: 90 },
                { name: "Express", level: 90 },
                { name: "MongoDB", level: 85 },
                { name: "PostgreSQL", level: 75 },
                { name: "Redis", level: 70 },
            ]
        },
        tools: {
            name: "Tools & DevOps",
            items: [
                { name: "Git", level: 90 },
                { name: "Docker", level: 80 },
                { name: "CI/CD", level: 75 },
                { name: "AWS", level: 70 },
                { name: "Linux", level: 75 },
            ]
        }
    },
    
    experience: [
        {
            company: "شرکت فناوری اطلاعات پارس",
            position: "Senior Full Stack Developer",
            period: "فروردین ۱۴۰۲ - اکنون",
            description: "رهبری تیم فنی و توسعه پلتفرم‌های وب",
            achievements: [
                "رهبری تیم ۵ نفره و تحویل ۳ پروژه بزرگ",
                "بهبود ۶۰٪ performance اپلیکیشن اصلی",
                "پیاده‌سازی CI/CD و کاهش ۴۰٪ باگ‌ها",
            ]
        },
        {
            company: "استارتاپ نوآوری دیجیتال",
            position: "Frontend Developer",
            period: "مهر ۱۴۰۰ - اسفند ۱۴۰۱",
            description: "توسعه رابط کاربری اپلیکیشن‌های وب",
            achievements: [
                "بازنویسی UI با React و TypeScript",
                "افزایش ۴۰٪ سرعت لود صفحات",
                "آموزش ۲ developer جونیور",
            ]
        },
    ],
    
    contact: {
        email: "ali@example.com",
        phone: "۰۹۱۲۳۴۵۶۷۸۹",
        linkedin: "linkedin.com/in/ali-mohammadi",
        github: "github.com/ali-mohammadi",
        telegram: "@ali_dev",
        website: "ali-mohammadi.dev",
    }
};`
          }
        ]
      }
    ]
  }
];
