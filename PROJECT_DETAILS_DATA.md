# Project Details Data - What to Write in Each Row
## Complete Guide for All Projects

---

## 📊 How Many Rows Do You Need?

**One row per project** (maximum 9 rows for 9 projects)

**Important:** Each project gets only ONE detail row.

---

## 🔍 How to Find Project ID (UUID)

**The UUID is in your `projects` table:**

1. **Go to Supabase Dashboard**
2. **Click on "Table Editor"** (left sidebar)
3. **Click on `projects` table**
4. **Find your project row** (e.g., "Egy Air")
5. **Look at the `id` column** (first column, usually on the left side)
6. **The `id` is a UUID** - it looks like: `a1b2c3d4-e5f6-7890-abcd-ef1234567890`
7. **Click on the UUID** to select it
8. **Copy it** (Ctrl+C on Windows/Linux, Cmd+C on Mac)
9. **Paste it** in the `project_id` column when adding a row to `project_details` table

**Visual Guide:**
```
┌─────────────────────────────────────────────────────┐
│  projects table                                      │
├──────────┬──────────────┬──────────────┬───────────┤
│ id       │ title_en     │ title_ar     │ category  │
├──────────┼──────────────┼──────────────┼───────────┤
│ a1b2c3d4 │ Egy Air      │ إيجي إير     │ App Design│ ← Copy this UUID
│ e5f6g7h8 │ Sonic Game   │ سونيك        │ App Design│
│ i9j0k1l2 │ Freezy Bite  │ فريزي بايت   │ App Design│
└──────────┴──────────────┴──────────────┴───────────┘
```

**If you don't see the `id` column:**
- Make sure you're in the `projects` table
- The `id` column should be the first column
- If it's hidden, you might need to scroll horizontally or adjust column visibility

---

## 📝 What to Write in Each Row

### For Each Project Details Row:

```
┌─────────────────────────────────────────────────────────────────┐
│                    ROW: Project Details                        │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  Column Name          │ Value to Write                          │
├───────────────────────┼─────────────────────────────────────────┤
│  id                   │ (AUTO - leave empty)                    │
│  project_id           │ (ID number from projects table)           │
│  hero_text_en         │ Hero text in English                    │
│  hero_text_ar         │ Hero text in Arabic                     │
│  description_en       │ Short description in English            │
│  description_ar       │ Short description in Arabic             │
│  content_en           │ Full content JSON (optional)            │
│  content_ar           │ Full content JSON (optional)            │
│  created_at           │ (AUTO - leave empty)                     │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

---

## 🎯 Complete Examples for Each Project

### PROJECT: Egy Air

**Step 1: Get Project ID**
1. Go to **Supabase Dashboard** → **Table Editor**
2. Click on **`projects`** table
3. Find the row for "Egy Air" project
4. Look at the **`id`** column (first column, usually on the left)
5. **If your `id` is `int8`:** The `id` is a number like: `1`, `2`, `3`, etc.
6. **If your `id` is `uuid`:** The `id` is a long string like: `a1b2c3d4-e5f6-7890-abcd-ef1234567890`
7. **Click on the ID** (number or UUID) to select it, then **copy it** (Ctrl+C or Cmd+C)
8. **Paste it** in the `project_id` column of `project_details` table

**Note:** 
- Every row in `projects` table has an `id` column
- If your `id` is `int8`, it's just a number (1, 2, 3...)
- If your `id` is `uuid`, it's a long string
- Make sure `project_details.project_id` column type matches `projects.id` type

**Step 2: Add Detail Row**

**Important:** Make sure your `project_details.project_id` column type matches your `projects.id` type:
- If `projects.id` is `int8` → `project_details.project_id` should be `int8` (number)
- If `projects.id` is `uuid` → `project_details.project_id` should be `uuid` (string)

**Example (if your `projects.id` is `int8` - number):**
```
project_id: 1
hero_text_en: Elegant Air Travel Experience
hero_text_ar: تجربة سفر جوية أنيقة
description_en: A modern airline booking platform designed for seamless travel experiences. Combining intuitive UX with beautiful design to make air travel accessible and enjoyable.
description_ar: منصة حجز طيران حديثة مصممة لتجارب سفر سلسة. تجمع بين تجربة مستخدم بديهية وتصميم جميل لجعل السفر الجوي في متناول الجميع وممتعاً.
content_en: {"sections": [{"title": "Overview", "text": "Egy Air is a comprehensive airline booking platform that simplifies the travel booking process. The design focuses on clarity, ease of use, and visual appeal."}, {"title": "Features", "text": "Key features include flight search, booking management, seat selection, and travel information."}]}
content_ar: {"sections": [{"title": "نظرة عامة", "text": "إيجي إير هي منصة حجز طيران شاملة تبسط عملية حجز السفر. يركز التصميم على الوضوح وسهولة الاستخدام والجاذبية البصرية."}, {"title": "المميزات", "text": "تشمل المميزات الرئيسية البحث عن الرحلات وإدارة الحجوزات واختيار المقاعد ومعلومات السفر."}]}
```

**Note:** Replace `1` with the actual number from your `projects` table for Egy Air project.

---

### PROJECT: Sonic Game

**Step 1: Get Project ID**
1. Go to `projects` table
2. Find "Sonic Game" row
3. Copy the `id` (UUID)

**Step 2: Add Detail Row**

```
project_id: (paste UUID from Sonic Game project)
hero_text_en: Fast-Paced Gaming Experience
hero_text_ar: تجربة ألعاب سريعة الإيقاع
description_en: An exciting mobile game interface design that brings the classic Sonic experience to modern mobile devices. Focused on intuitive controls and engaging visuals.
description_ar: تصميم واجهة لعبة محمولة مثيرة تجلب تجربة سونيك الكلاسيكية إلى الأجهزة المحمولة الحديثة. يركز على عناصر التحكم البديهية والمرئيات الجذابة.
content_en: {"sections": [{"title": "Overview", "text": "Sonic Game redesign brings classic gameplay to modern mobile platforms with updated graphics and smooth animations."}]}
content_ar: {"sections": [{"title": "نظرة عامة", "text": "إعادة تصميم لعبة سونيك تجلب اللعب الكلاسيكي إلى منصات الهواتف المحمولة الحديثة مع رسومات محدثة ورسوم متحركة سلسة."}]}
```

---

### PROJECT: Freezy Bite

**Step 1: Get Project ID**
1. Go to `projects` table
2. Find "Freezy Bite" row
3. Copy the `id` (UUID)

**Step 2: Add Detail Row**

```
project_id: (paste UUID from Freezy Bite project)
hero_text_en: Cool Refreshment App
hero_text_ar: تطبيق منعش بارد
description_en: A refreshing ice cream and frozen treats app design. Clean, modern interface that makes ordering frozen desserts simple and delightful.
description_ar: تصميم تطبيق للآيس كريم والحلويات المجمدة. واجهة نظيفة وحديثة تجعل طلب الحلويات المجمدة بسيطاً وممتعاً.
content_en: {"sections": [{"title": "Overview", "text": "Freezy Bite app provides an easy way to browse, order, and enjoy frozen treats with a user-friendly interface."}]}
content_ar: {"sections": [{"title": "نظرة عامة", "text": "يوفر تطبيق فريزي بايت طريقة سهلة لتصفح وطلب والاستمتاع بالحلويات المجمدة مع واجهة سهلة الاستخدام."}]}
```

---

### PROJECT: Lemmetraver Website

**Step 1: Get Project ID**
1. Go to `projects` table
2. Find "Lemmetraver Website" row
3. Copy the `id` (UUID)

**Step 2: Add Detail Row**

```
project_id: (paste UUID from Lemmetraver Website project)
hero_text_en: Travel Planning Made Easy
hero_text_ar: تخطيط السفر أصبح سهلاً
description_en: A comprehensive travel website design that helps users plan and book their perfect trip. Modern design with intuitive navigation.
description_ar: تصميم موقع سفر شامل يساعد المستخدمين على تخطيط وحجز رحلتهم المثالية. تصميم حديث مع تنقل بديهي.
content_en: {"sections": [{"title": "Overview", "text": "Lemmetraver website offers a complete travel planning experience with destination guides, booking options, and travel tips."}]}
content_ar: {"sections": [{"title": "نظرة عامة", "text": "يقدم موقع ليمترافر تجربة تخطيط سفر كاملة مع أدلة الوجهات وخيارات الحجز ونصائح السفر."}]}
```

---

### PROJECT: Giza Zoo

**Step 1: Get Project ID**
1. Go to `projects` table
2. Find "Giza Zoo" row
3. Copy the `id` (UUID)

**Step 2: Add Detail Row**

```
project_id: (paste UUID from Giza Zoo project)
hero_text_en: Wildlife Experience App
hero_text_ar: تطبيق تجربة الحياة البرية
description_en: An educational app design for Giza Zoo that brings visitors closer to wildlife. Interactive features and informative content about animals.
description_ar: تصميم تطبيق تعليمي لحديقة الحيوان بالجيزة يقرب الزوار من الحياة البرية. ميزات تفاعلية ومحتوى إعلامي عن الحيوانات.
content_en: {"sections": [{"title": "Overview", "text": "Giza Zoo app enhances the visitor experience with animal information, interactive maps, and educational content."}]}
content_ar: {"sections": [{"title": "نظرة عامة", "text": "يعزز تطبيق حديقة الحيوان بالجيزة تجربة الزوار بمعلومات عن الحيوانات وخرائط تفاعلية ومحتوى تعليمي."}]}
```

---

### PROJECT: Food App

**Step 1: Get Project ID**
1. Go to `projects` table
2. Find "Food App" row
3. Copy the `id` (UUID)

**Step 2: Add Detail Row**

```
project_id: (paste UUID from Food App project)
hero_text_en: Delicious Food Ordering
hero_text_ar: طلب طعام لذيذ
description_en: A modern food delivery app design that makes ordering food simple and enjoyable. Clean interface with easy navigation and quick ordering.
description_ar: تصميم تطبيق توصيل طعام حديث يجعل طلب الطعام بسيطاً وممتعاً. واجهة نظيفة مع تنقل سهل وطلب سريع.
content_en: {"sections": [{"title": "Overview", "text": "Food App provides a seamless food ordering experience with restaurant listings, menu browsing, and quick checkout."}]}
content_ar: {"sections": [{"title": "نظرة عامة", "text": "يوفر تطبيق الطعام تجربة طلب طعام سلسة مع قوائم المطاعم وتصفح القوائم والدفع السريع."}]}
```

---

### PROJECT: Fit Up

**Step 1: Get Project ID**
1. Go to `projects` table
2. Find "Fit Up" row
3. Copy the `id` (UUID)

**Step 2: Add Detail Row**

```
project_id: (paste UUID from Fit Up project)
hero_text_en: Your Fitness Journey
hero_text_ar: رحلتك في اللياقة البدنية
description_en: A comprehensive fitness app design that helps users track workouts, set goals, and stay motivated. Modern UI with engaging visuals.
description_ar: تصميم تطبيق لياقة بدنية شامل يساعد المستخدمين على تتبع التمارين وتحديد الأهداف والبقاء متحفزين. واجهة مستخدم حديثة مع مرئيات جذابة.
content_en: {"sections": [{"title": "Overview", "text": "Fit Up app offers workout tracking, exercise plans, and progress monitoring to help users achieve their fitness goals."}]}
content_ar: {"sections": [{"title": "نظرة عامة", "text": "يقدم تطبيق فيت أب تتبع التمارين وخطط التمرين ومراقبة التقدم لمساعدة المستخدمين على تحقيق أهدافهم في اللياقة البدنية."}]}
```

---

### PROJECT: Home Appliance

**Step 1: Get Project ID**
1. Go to `projects` table
2. Find "Home Appliance" row
3. Copy the `id` (UUID)

**Step 2: Add Detail Row**

```
project_id: (paste UUID from Home Appliance project)
hero_text_en: Smart Home Solutions
hero_text_ar: حلول المنزل الذكي
description_en: An e-commerce app design for home appliances. Clean, organized interface that makes shopping for appliances easy and convenient.
description_ar: تصميم تطبيق تجارة إلكترونية للأجهزة المنزلية. واجهة نظيفة ومنظمة تجعل التسوق للأجهزة سهلاً ومريحاً.
content_en: {"sections": [{"title": "Overview", "text": "Home Appliance app provides an easy way to browse and purchase home appliances with detailed product information and reviews."}]}
content_ar: {"sections": [{"title": "نظرة عامة", "text": "يوفر تطبيق الأجهزة المنزلية طريقة سهلة لتصفح وشراء الأجهزة المنزلية مع معلومات المنتج التفصيلية والمراجعات."}]}
```

---

### PROJECT: Real Estate

**Step 1: Get Project ID**
1. Go to `projects` table
2. Find "Real Estate" row
3. Copy the `id` (UUID)

**Step 2: Add Detail Row**

```
project_id: (paste UUID from Real Estate project)
hero_text_en: Find Your Dream Home
hero_text_ar: ابحث عن منزل أحلامك
description_en: A comprehensive real estate platform design that helps users find, view, and purchase properties. Modern interface with advanced search and filtering.
description_ar: تصميم منصة عقارات شاملة تساعد المستخدمين على العثور على العقارات وعرضها وشرائها. واجهة حديثة مع بحث وفلترة متقدمة.
content_en: {"sections": [{"title": "Overview", "text": "Real Estate platform offers property listings, virtual tours, and detailed information to help users make informed decisions."}]}
content_ar: {"sections": [{"title": "نظرة عامة", "text": "تقدم منصة العقارات قوائم العقارات والجولات الافتراضية والمعلومات التفصيلية لمساعدة المستخدمين على اتخاذ قرارات مستنيرة."}]}
```

---

## 📋 Column-by-Column: What to Write

### Column: `id`
**What to write:** (Leave empty - auto-generated)
- Supabase fills this automatically
- Don't touch it

---

### Column: `project_id` ⭐ IMPORTANT
**What to write:** ID from `projects` table (number if int8, or UUID if uuid)

**How to get it (Step by Step):**
1. **Open Supabase Dashboard** in your browser
2. **Click "Table Editor"** in the left sidebar
3. **Click on `projects` table** (in the list of tables)
4. **You'll see all your projects** in rows
5. **Find the project** you want (e.g., "Egy Air")
6. **Look at the first column** - it's called `id`
7. **If `id` is `int8`:** The `id` is a **number** like: `1`, `2`, `3`, `4`, etc.
8. **If `id` is `uuid`:** The `id` is a **long string** like: `a1b2c3d4-e5f6-7890-abcd-ef1234567890`
9. **Click on that ID** (number or UUID) to select it
10. **Copy it** (right-click → Copy, or Ctrl+C / Cmd+C)
11. **Go to `project_details` table**
12. **Click "Insert row"** or add a new row
13. **Paste the ID** in the `project_id` column

**Important:**
- Each project has a UNIQUE `project_id`
- One detail row per project
- Use the exact ID from the `projects` table
- The ID is automatically generated when you create a project row
- Every row in `projects` table has an `id` - that's what you need!
- **Your `project_details.project_id` column type must match your `projects.id` type:**
  - If `projects.id` is `int8` → `project_details.project_id` should be `int8`
  - If `projects.id` is `uuid` → `project_details.project_id` should be `uuid`

**Troubleshooting:**
- **Can't find the `id` column?** → Make sure you're looking at the `projects` table, not another table
- **Don't see any IDs?** → The `id` column should be visible. Try scrolling horizontally or check column visibility settings
- **The ID is a number?** → That's correct if your `projects.id` is `int8` type! Just copy the number (1, 2, 3, etc.)
- **Column type mismatch?** → Make sure `project_details.project_id` has the same type as `projects.id` (both int8 or both uuid)

---

### Column: `hero_text_en`
**What to write:** Hero section text in English (overlay text on hero image)

**Examples:**
```
Elegant Air Travel Experience
Fast-Paced Gaming Experience
Cool Refreshment App
Travel Planning Made Easy
```

**Format:**
- Short, catchy phrase
- Usually 2-5 words
- Appears on hero image

---

### Column: `hero_text_ar`
**What to write:** Hero section text in Arabic

**Examples:**
```
تجربة سفر جوية أنيقة
تجربة ألعاب سريعة الإيقاع
تطبيق منعش بارد
تخطيط السفر أصبح سهلاً
```

**Format:**
- Arabic translation of hero_text_en
- Short, catchy phrase

---

### Column: `description_en`
**What to write:** Short description of the project in English

**Examples:**
```
A modern airline booking platform designed for seamless travel experiences. Combining intuitive UX with beautiful design to make air travel accessible and enjoyable.
```

**Format:**
- 1-3 sentences
- Describes what the project is
- Highlights key features or benefits

---

### Column: `description_ar`
**What to write:** Short description of the project in Arabic

**Examples:**
```
منصة حجز طيران حديثة مصممة لتجارب سفر سلسة. تجمع بين تجربة مستخدم بديهية وتصميم جميل لجعل السفر الجوي في متناول الجميع وممتعاً.
```

**Format:**
- Arabic translation of description_en
- 1-3 sentences

---

### Column: `content_en` (Optional)
**What to write:** Full detailed content in JSON format (optional)

**Example:**
```json
{
  "sections": [
    {
      "title": "Overview",
      "text": "Egy Air is a comprehensive airline booking platform..."
    },
    {
      "title": "Features",
      "text": "Key features include flight search, booking management..."
    }
  ]
}
```

**Format:**
- JSONB format
- Can include sections, paragraphs, lists, etc.
- Optional - can leave empty if you don't need structured content

---

### Column: `content_ar` (Optional)
**What to write:** Full detailed content in Arabic (JSON format)

**Example:**
```json
{
  "sections": [
    {
      "title": "نظرة عامة",
      "text": "إيجي إير هي منصة حجز طيران شاملة..."
    },
    {
      "title": "المميزات",
      "text": "تشمل المميزات الرئيسية البحث عن الرحلات..."
    }
  ]
}
```

**Format:**
- JSONB format
- Arabic translation of content_en
- Optional - can leave empty

---

### Column: `created_at`
**What to write:** (Leave empty - auto-generated)
- Supabase fills this automatically
- Don't touch it

---

## ✅ Checklist for Each Row

**Must Fill:**
- [ ] `project_id` - UUID from projects table
- [ ] `hero_text_en` - Hero text in English
- [ ] `hero_text_ar` - Hero text in Arabic
- [ ] `description_en` - Description in English
- [ ] `description_ar` - Description in Arabic

**Optional:**
- [ ] `content_en` - Full content JSON (optional)
- [ ] `content_ar` - Full content JSON (optional)

**Auto-Filled:**
- [ ] `id` - Auto
- [ ] `created_at` - Auto

---

## 💡 Tips

1. **Start Simple:**
   - Add hero_text and description first
   - You can add content_en/content_ar later if needed

2. **Project ID:**
   - Copy it once per project
   - Make sure it matches the exact UUID from projects table

3. **Hero Text:**
   - Keep it short and catchy
   - 2-5 words usually works best

4. **Description:**
   - 1-3 sentences
   - Describe what the project is
   - Highlight key features

5. **Content (Optional):**
   - Only add if you need detailed sections
   - Use JSON format for structured content
   - Can leave empty if not needed

---

## 🎬 Summary

**How many rows:**
- 1 row = 1 project
- Maximum 9 rows (one per project)

**What to write:**
- `project_id`: UUID from projects table
- `hero_text_en` / `hero_text_ar`: Hero text
- `description_en` / `description_ar`: Short description
- `content_en` / `content_ar`: Full content JSON (optional)

**That's it!** Add one row per project with the details above! 🚀

