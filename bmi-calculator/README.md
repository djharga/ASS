# حاسبة مؤشر كتلة الجسم | BMI Calculator

حاسبة مؤشر كتلة الجسم حديثة ومتجاوبة مبنية باستخدام Next.js 15 و TypeScript و Tailwind CSS.

![BMI Calculator](https://img.shields.io/badge/BMI-Calculator-blue.svg)
![Next.js](https://img.shields.io/badge/Next.js-15-black.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue.svg)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38bdf8.svg)

## ✨ المميزات

- 🎨 **تصميم حديث وجميل** - واجهة مستخدم أنيقة ومتجاوبة
- 🌍 **دعم اللغة العربية** - مصمم خصيصاً للمستخدمين العرب
- 📱 **متجاوب تماماً** - يعمل بشكل مثالي على جميع الأجهزة
- ⚡ **سريع وخفيف** - أداء محسّن مع Next.js 15
- 🔢 **دعم وحدتين** - النظام المتري والإمبراطوري
- 🎯 **حسابات دقيقة** - نتائج مؤشر كتلة الجسم الصحيحة
- 📊 **تصنيف الوزن** - عرض تصنيف الوزن مع الألوان المناسبة
- 🔄 **إعادة تعيين سهلة** - إمكانية البدء من جديد بنقرة واحدة

## 🚀 التشغيل السريع

### المتطلبات الأساسية

تأكد من وجود Node.js (الإصدار 18 أو أحدث) على نظامك:

```bash
node --version
npm --version
```

### التثبيت والتشغيل

1. **استنساخ المشروع:**
```bash
git clone <repository-url>
cd bmi-calculator
```

2. **تثبيت التبعيات:**
```bash
npm install
```

3. **تشغيل خادم التطوير:**
```bash
npm run dev
```

4. **افتح المتصفح:**
   افتح [http://localhost:3000](http://localhost:3000) في متصفحك

## 🛠️ أوامر المشروع

| الأمر | الوصف |
|-------|--------|
| `npm run dev` | تشغيل خادم التطوير |
| `npm run build` | بناء المشروع للإنتاج |
| `npm run start` | تشغيل النسخة المبنية |
| `npm run lint` | فحص الكود |

## 📁 هيكل المشروع

```
bmi-calculator/
├── src/
│   ├── app/
│   │   ├── globals.css          # الأنماط العامة
│   │   ├── layout.tsx           # تخطيط الصفحة الرئيسي
│   │   └── page.tsx            # الصفحة الرئيسية
│   └── components/
│       └── BMICalculator.tsx    # مكون حاسبة BMI
├── public/                      # الملفات العامة
├── package.json                 # تبعيات المشروع
└── README.md                   # هذا الملف
```

## 🎨 التخصيص والتعديل

### تغيير الألوان

يمكنك تعديل الألوان في ملف `src/components/BMICalculator.tsx`:

```tsx
// الألوان الحالية
const colors = {
  primary: 'blue-600',
  success: 'green-600',
  warning: 'yellow-600',
  danger: 'red-600'
};
```

### تعديل النصوص

جميع النصوص موجودة في ملف `BMICalculator.tsx`. يمكنك تعديلها حسب احتياجاتك:

```tsx
// العنوان الرئيسي
<h1 className="text-3xl font-bold text-gray-800 mb-2">
  حاسبة مؤشر كتلة الجسم
</h1>

// الوصف
<p className="text-gray-600">
  احسب مؤشر كتلة جسمك بسهولة
</p>
```

### إضافة ميزات جديدة

لإضافة ميزات جديدة، قم بتعديل ملف `BMICalculator.tsx`:

1. **إضافة حقول جديدة:**
```tsx
const [age, setAge] = useState<string>('');
const [gender, setGender] = useState<'male' | 'female'>('male');
```

2. **إضافة حسابات جديدة:**
```tsx
const calculateAdvancedBMI = () => {
  // حسابات متقدمة تأخذ العمر والجنس بعين الاعتبار
};
```

### تعديل التصميم

استخدم Tailwind CSS لتعديل التصميم:

```tsx
// تغيير شكل البطاقة الرئيسية
<div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">

// تعديل الأزرار
<button className="w-full mt-8 bg-gradient-to-r from-blue-600 to-indigo-600">
```

## 📊 كيفية عمل حاسبة BMI

### معادلة BMI

**النظام المتري:**
```
BMI = الوزن (كم) ÷ (الطول (م))²
```

**النظام الإمبراطوري:**
```
BMI = (الوزن (رطل) ÷ (الطول (بوصة))²) × 703
```

### تصنيف BMI

| المدى | التصنيف | اللون |
|-------|----------|-------|
| أقل من 18.5 | نقص في الوزن | أزرق |
| 18.5 - 24.9 | وزن طبيعي | أخضر |
| 25.0 - 29.9 | زيادة في الوزن | أصفر |
| 30.0 فأكثر | سمنة | أحمر |

## 🔧 استكشاف الأخطاء

### مشاكل شائعة وحلولها

**1. خطأ في التثبيت:**
```bash
# امسح node_modules وأعد التثبيت
rm -rf node_modules package-lock.json
npm install
```

**2. خطأ في البناء:**
```bash
# تأكد من صحة الكود
npm run lint
npm run build
```

**3. مشاكل في التصميم:**
```bash
# تأكد من تثبيت Tailwind CSS
npm install -D tailwindcss postcss autoprefixer
```

## 🌐 النشر

### Vercel (موصى به)

1. ادفع الكود إلى GitHub
2. اربط المشروع مع Vercel
3. سيتم النشر تلقائياً

### Netlify

1. قم ببناء المشروع:
```bash
npm run build
```

2. ارفع مجلد `out` إلى Netlify

### خادم خاص

```bash
# بناء المشروع
npm run build

# تشغيل الخادم
npm run start
```

## 🤝 المساهمة

نرحب بمساهماتكم! يرجى اتباع الخطوات التالية:

1. Fork المشروع
2. أنشئ فرع جديد (`git checkout -b feature/AmazingFeature`)
3. Commit التغييرات (`git commit -m 'Add some AmazingFeature'`)
4. Push إلى الفرع (`git push origin feature/AmazingFeature`)
5. افتح Pull Request

## 📝 الترخيص

هذا المشروع مرخص تحت رخصة MIT - انظر ملف [LICENSE](LICENSE) للتفاصيل.

## 👨‍💻 المطور

تم تطوير هذا المشروع بواسطة AI Assistant لإنشاء حاسبة مؤشر كتلة الجسم احترافية ومتجاوبة.

## 📞 الدعم

إذا واجهت أي مشاكل أو لديك اقتراحات، يرجى:

- فتح Issue في GitHub
- التواصل عبر البريد الإلكتروني
- مراجعة الوثائق أعلاه

---

**ملاحظة مهمة:** هذه الحاسبة مخصصة للأغراض التعليمية والإرشادية فقط. يرجى استشارة طبيب مختص للحصول على تقييم طبي دقيق لحالتك الصحية.

---

⭐ إذا أعجبك هذا المشروع، لا تنس إعطاؤه نجمة على GitHub!
