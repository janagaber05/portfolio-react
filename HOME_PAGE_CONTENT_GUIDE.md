# Home Page Content - Where to Upload in Supabase
## Complete Guide for Managing Home Page Content

---

## 📋 What Content Is on Your Home Page?

Your home page has **two main sections**:

### **HomeOne (Hero Section):**
- Hero title: "Hello Im Jana Ahmed Ahmed / Passionate UX/UI Designer"
- Subtitle: "UX/UI Designer | Graphic Designer | Content Creator | Sales"
- Paragraph: Personal introduction text
- Hero image: `/imgs/home page/hero-img.png`

### **HomeTwo (Detailed Section):**
- "Know Me" card text (4 paragraphs)
- Strengths cards (5 cards with titles and descriptions)
- Growing cards (5 cards with questions and answers)
- Values cards (4 cards with titles and descriptions)
- Education section (2 entries)
- Skills section (technical skills list)
- Contact information (email, phone, social media)
- Approach text
- App Design text
- Web Design text

---

## 🎯 Solution: Create `home_content` Table

Create a new table in Supabase to store all home page content.

---

## 📝 Step 1: Create the Table

1. Go to **Table Editor** in Supabase Dashboard
2. Click **"New table"** button
3. Table name: `home_content`
4. Click **"Save"** or **"Create table"**

---

## 📋 Step 2: Add All Columns

Add these columns one by one:

### Column 1: `id` ⭐ FIRST COLUMN
```
Column name: id
Type: uuid
Default value: gen_random_uuid()
Is nullable: ❌ No (unchecked)
Is unique: ✅ Yes (checked)
Is primary key: ✅ Yes (checked)
```

### Column 2: `section`
```
Column name: section
Type: text
Default value: (leave empty)
Is nullable: ❌ No (unchecked)
```

**Purpose:** Identifies which section this content belongs to (e.g., "hero", "know_me", "strengths", etc.)

### Column 3: `key`
```
Column name: key
Type: text
Default value: (leave empty)
Is nullable: ❌ No (unchecked)
```

**Purpose:** Unique identifier for this content item (e.g., "hero_title", "strength_1", "value_1", etc.)

### Column 4: `content_en`
```
Column name: content_en
Type: text
Default value: (leave empty)
Is nullable: ✅ Yes (checked)
```

**Purpose:** English content text

### Column 5: `content_ar`
```
Column name: content_ar
Type: text
Default value: (leave empty)
Is nullable: ✅ Yes (checked)
```

**Purpose:** Arabic content text

### Column 6: `metadata`
```
Column name: metadata
Type: jsonb
Default value: (leave empty)
Is nullable: ✅ Yes (checked)
```

**Purpose:** Additional data (for cards: title, description, background, etc.)

### Column 7: `display_order`
```
Column name: display_order
Type: int4
Default value: 0
Is nullable: ✅ Yes (checked)
```

**Purpose:** Order for displaying items (for cards, education entries, etc.)

### Column 8: `created_at`
```
Column name: created_at
Type: timestamptz
Default value: now()
Is nullable: ❌ No (unchecked)
```

### Column 9: `updated_at`
```
Column name: updated_at
Type: timestamptz
Default value: now()
Is nullable: ❌ No (unchecked)
```

---

## 📊 Visual: Complete Table Structure

```
┌─────────────────────────────────────────────────────────────────┐
│                    TABLE: home_content                          │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  ┌──────────────────────┬──────────────┬──────────────┬───────┐ │
│  │ Column Name           │ Type         │ Default      │ Null?│ │
│  ├──────────────────────┼──────────────┼──────────────┼───────┤ │
│  │ id                    │ uuid         │ gen_random_  │ ❌ No│ │
│  │                       │              │ uuid()       │       │ │
│  ├──────────────────────┼──────────────┼──────────────┼───────┤ │
│  │ section               │ text         │ (empty)      │ ❌ No│ │
│  ├──────────────────────┼──────────────┼──────────────┼───────┤ │
│  │ key                   │ text         │ (empty)      │ ❌ No│ │
│  ├──────────────────────┼──────────────┼──────────────┼───────┤ │
│  │ content_en            │ text         │ (empty)      │ ✅ Yes│ │
│  ├──────────────────────┼──────────────┼──────────────┼───────┤ │
│  │ content_ar            │ text         │ (empty)      │ ✅ Yes│ │
│  ├──────────────────────┼──────────────┼──────────────┼───────┤ │
│  │ metadata               │ jsonb        │ (empty)      │ ✅ Yes│ │
│  ├──────────────────────┼──────────────┼──────────────┼───────┤ │
│  │ display_order         │ int4         │ 0            │ ✅ Yes│ │
│  ├──────────────────────┼──────────────┼──────────────┼───────┤ │
│  │ created_at            │ timestamptz │ now()        │ ❌ No│ │
│  ├──────────────────────┼──────────────┼──────────────┼───────┤ │
│  │ updated_at            │ timestamptz │ now()        │ ❌ No│ │
│  └──────────────────────┴──────────────┴──────────────┴───────┘ │
│                                                                  │
│  🔑 Primary Key: id                                              │
│  ✅ Unique: id                                                   │
└─────────────────────────────────────────────────────────────────┘
```

---

## 📝 Step 3: Add All Home Page Content

### Example Rows to Add:

#### Row 1: Hero Title (English)
```
section: hero
key: hero_title
content_en: Hello Im Jana Ahmed Ahmed<br />Passionate UX/UI Designer
content_ar: (leave empty for now, add Arabic version)
metadata: (leave empty)
display_order: 0
```

#### Row 2: Hero Title (Arabic)
```
section: hero
key: hero_title_ar
content_en: (leave empty)
content_ar: مرحباً أنا جنا أحمد أحمد<br />مصممة UX/UI شغوفة
metadata: (leave empty)
display_order: 0
```

#### Row 3: Hero Subtitle (English)
```
section: hero
key: hero_subtitle
content_en: UX/UI Designer | Graphic Designer | Content Creator | Sales
content_ar: (leave empty)
metadata: (leave empty)
display_order: 1
```

#### Row 4: Hero Subtitle (Arabic)
```
section: hero
key: hero_subtitle_ar
content_en: (leave empty)
content_ar: مصممة UX/UI | مصممة جرافيك | صانعة محتوى | مبيعات
metadata: (leave empty)
display_order: 1
```

#### Row 5: Hero Paragraph (English)
```
section: hero
key: hero_paragraph
content_en: I'm Jana a hijabi girl with a designer's eye and a car lover's heart. I mix pixels and horsepower like it's an art form. I believe every design (and every car) should have personality, attitude, and a little chaos — just like me.
content_ar: (leave empty)
metadata: (leave empty)
display_order: 2
```

#### Row 6: Hero Paragraph (Arabic)
```
section: hero
key: hero_paragraph_ar
content_en: (leave empty)
content_ar: أنا جنا، فتاة محجبة بعين مصممة وقلب يعشق السيارات. أمزج البكسلات مع الحصان الميكانيكي كأنه فن. أؤمن أن كل تصميم — مثل كل سيارة — يجب أن يمتلك شخصية وروحاً وقليلاً من الفوضى تماماً مثلي.
metadata: (leave empty)
display_order: 2
```

#### Row 7: Know Me - Paragraph 1 (English)
```
section: know_me
key: know_me_1
content_en: I'm a UX/UI Designer that always works on what she loves so she can give 100% results.
content_ar: (leave empty)
metadata: (leave empty)
display_order: 0
```

#### Row 8: Know Me - Paragraph 1 (Arabic)
```
section: know_me
key: know_me_1_ar
content_en: (leave empty)
content_ar: أنا مصممة UX/UI أعمل دائماً فيما أحب لأقدم أفضل نتيجة ممكنة.
metadata: (leave empty)
display_order: 0
```

#### Row 9: Strength Card 1 (English)
```
section: strengths
key: strength_1
content_en: (leave empty)
content_ar: (leave empty)
metadata: {"title": "Ambitious UX/UI designer", "description": "I always think big—building my own studio that brings bold media, digital marketing, content creation and web experiences together under one roof.", "background": "linear-gradient(188deg, rgba(193,172,255,0.95), rgba(98,67,199,0.92))"}
display_order: 0
```

#### Row 10: Strength Card 1 (Arabic)
```
section: strengths
key: strength_1_ar
content_en: (leave empty)
content_ar: (leave empty)
metadata: {"title": "مصممة UX/UI طموحة", "description": "أفكر دائماً بحجم أكبر؛ تأسيس شركة تجمع التسويق الرقمي وصناعة المحتوى وتصميم الويب تحت علامة واحدة جريئة.", "background": "linear-gradient(188deg, rgba(193,172,255,0.95), rgba(98,67,199,0.92))"}
display_order: 0
```

**Continue adding rows for:**
- All 5 strength cards (English + Arabic = 10 rows)
- All 5 growing cards (English + Arabic = 10 rows)
- All 4 values cards (English + Arabic = 8 rows)
- Education entries (2 entries × 2 languages = 4 rows)
- Contact info (email, phone)
- Approach text
- App Design text
- Web Design text

---

## 📋 Complete List of Content to Add

### Hero Section (6 rows):
1. `hero_title` (EN)
2. `hero_title_ar` (AR)
3. `hero_subtitle` (EN)
4. `hero_subtitle_ar` (AR)
5. `hero_paragraph` (EN)
6. `hero_paragraph_ar` (AR)

### Know Me Section (8 rows):
7. `know_me_1` (EN)
8. `know_me_1_ar` (AR)
9. `know_me_2` (EN)
10. `know_me_2_ar` (AR)
11. `know_me_3` (EN)
12. `know_me_3_ar` (AR)
13. `know_me_4` (EN)
14. `know_me_4_ar` (AR)

### Strengths Section (10 rows):
15-24. 5 strength cards × 2 languages

### Growing Cards Section (10 rows):
25-34. 5 growing cards × 2 languages

### Values Section (8 rows):
35-42. 4 values cards × 2 languages

### Education Section (4 rows):
43-46. 2 education entries × 2 languages

### Contact Section (2 rows):
47. `contact_email`
48. `contact_phone`

### Other Sections:
49. `approach_title` (EN)
50. `approach_title_ar` (AR)
51. `approach_text` (EN)
52. `approach_text_ar` (AR)
53. `app_design_title` (EN)
54. `app_design_title_ar` (AR)
55. `app_design_text` (EN)
56. `app_design_text_ar` (AR)

**Total: ~56 rows** (or more if you add more content)

---

## 🎯 How to Use This Table

### In Your React App:

1. **Fetch home content:**
   ```javascript
   const { data } = await supabase
     .from('home_content')
     .select('*')
     .eq('section', 'hero')
     .order('display_order');
   ```

2. **Get specific content:**
   ```javascript
   const { data } = await supabase
     .from('home_content')
     .select('*')
     .eq('key', 'hero_title')
     .eq('section', 'hero')
     .single();
   ```

3. **Get all strengths:**
   ```javascript
   const { data } = await supabase
     .from('home_content')
     .select('*')
     .eq('section', 'strengths')
     .order('display_order');
   ```

---

## ✅ Step-by-Step Checklist

### Create Table:
- [ ] Go to Table Editor
- [ ] Click "New table"
- [ ] Name: `home_content`
- [ ] Save

### Add Columns (9 total):
- [ ] `id` - uuid, primary key, unique
- [ ] `section` - text, NOT nullable
- [ ] `key` - text, NOT nullable
- [ ] `content_en` - text, nullable
- [ ] `content_ar` - text, nullable
- [ ] `metadata` - jsonb, nullable
- [ ] `display_order` - int4, default: 0, nullable
- [ ] `created_at` - timestamptz, default: now()
- [ ] `updated_at` - timestamptz, default: now()

### Add Content:
- [ ] Add hero section content (6 rows)
- [ ] Add know me section content (8 rows)
- [ ] Add strengths cards (10 rows)
- [ ] Add growing cards (10 rows)
- [ ] Add values cards (8 rows)
- [ ] Add education entries (4 rows)
- [ ] Add contact info (2 rows)
- [ ] Add other sections (approach, app design, etc.)

### Enable RLS:
- [ ] Click on `home_content` table
- [ ] Click "..." menu
- [ ] Click "Enable RLS"

### Add RLS Policies:
- [ ] Policy 1: "Public can view home content"
  - Operation: SELECT
  - Roles: public
  - USING: `true`
- [ ] Policy 2: "Admins can manage home content"
  - Operation: ALL
  - Roles: authenticated
  - USING: `(auth.jwt() ->> 'user_metadata')::jsonb ->> 'role' = 'admin'`

---

## 💡 Important Notes

1. **Section Names:**
   - Use consistent section names: `hero`, `know_me`, `strengths`, `growing`, `values`, `education`, `contact`, etc.

2. **Key Names:**
   - Use descriptive keys: `hero_title`, `strength_1`, `value_1`, etc.
   - Make them unique within each section

3. **Metadata for Cards:**
   - Store card data in JSONB format:
   ```json
   {
     "title": "Card Title",
     "description": "Card description",
     "background": "linear-gradient(...)"
   }
   ```

4. **Display Order:**
   - Use `display_order` to control the sequence
   - Start with 0, increment by 1

5. **Images:**
   - Hero image and other images should be uploaded to Supabase Storage
   - Store image paths in a separate column or in metadata

---

## 🚀 Summary

**Table Name:** `home_content`

**Purpose:** Store all home page text content (hero, know me, strengths, values, education, contact, etc.)

**Total Columns:** 9

**Total Rows:** ~56 rows (all home page content)

**How to Use:**
1. Create the table
2. Add all columns
3. Add all content rows
4. Fetch content in React app by `section` and `key`
5. Display content dynamically

**This table stores all your home page content so you can edit it from Supabase Dashboard!** 🎯

