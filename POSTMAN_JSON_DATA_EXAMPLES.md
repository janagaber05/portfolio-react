# Postman JSON Data Examples
## What to Write in Body Tab for POST/PATCH Requests

---

## 📋 Where to Add JSON Data

**Location:** Body tab in Postman

**Steps:**
1. Click **"Body"** tab (below URL field)
2. Select **"raw"** radio button
3. Select **"JSON"** from dropdown (top right of body area)
4. Paste JSON data in the text box

---

## 🎯 JSON Data for Each Table

### Table: `projects`

#### POST - Create New Project

**Body (raw JSON):**
```json
{
  "title_en": "Egy Air",
  "title_ar": "إيجي إير",
  "slug": "egy-air",
  "category": "App Design",
  "cover_img": "project-images/egy-air.png",
  "is_published": true,
  "display_order": 0
}
```

#### PATCH - Update Project

**Body (raw JSON):**
```json
{
  "title_en": "Updated Title",
  "is_published": false,
  "display_order": 5
}
```

**Note:** Only include fields you want to update!

---

### Table: `blog_posts`

#### POST - Create New Blog Post

**Body (raw JSON):**
```json
{
  "slug": "designing-with-emotion-colors-ux",
  "title_en": "Designing with Emotion: How Colors Shape User Experience",
  "title_ar": "التصميم بالعاطفة: كيف تشكل الألوان تجربة المستخدم",
  "excerpt_en": "Discover how color psychology influences user behavior and creates memorable digital experiences.",
  "excerpt_ar": "اكتشفي كيف تؤثر نفسية الألوان على سلوك المستخدم وتخلق تجارب رقمية لا تُنسى.",
  "content_en": "Full blog post content in English...",
  "content_ar": "محتوى المقال الكامل بالعربية...",
  "cover_img": "blog-images/recentblog1.png",
  "is_published": true
}
```

#### PATCH - Update Blog Post

**Body (raw JSON):**
```json
{
  "title_en": "Updated Blog Title",
  "is_published": false
}
```

---

### Table: `contact_submissions`

#### POST - Create Contact Submission

**Body (raw JSON):**
```json
{
  "first_name": "John",
  "last_name": "Doe",
  "email": "john@example.com",
  "phone": "1234567890",
  "message": "Hello, I'm interested in working with you on a project.",
  "status": "new"
}
```

**Note:** This is usually created automatically when someone submits a contact form, but you can test it with POST.

#### PATCH - Update Submission Status

**Body (raw JSON):**
```json
{
  "status": "read",
  "read_at": "2024-01-15T10:30:00Z",
  "admin_notes": "Follow up needed"
}
```

---

### Table: `gallery_items`

#### POST - Create Gallery Item

**Body (raw JSON):**
```json
{
  "project_id": 1,
  "image_url": "gallery-images/egy-air/gallery-1.png",
  "image_alt": "Egy Air Gallery Image 1",
  "display_order": 0,
  "height": 600
}
```

**Important:** Replace `1` with actual project ID from your `projects` table!

---

### Table: `project_details`

#### POST - Create Project Details

**Body (raw JSON):**
```json
{
  "project_id": 1,
  "hero_text_en": "Elegant Air Travel Experience",
  "hero_text_ar": "تجربة سفر جوية أنيقة",
  "description_en": "A modern airline booking platform designed for seamless travel experiences.",
  "description_ar": "منصة حجز طيران حديثة مصممة لتجارب سفر سلسة.",
  "content_en": "{\"sections\": [{\"title\": \"Overview\", \"text\": \"Egy Air is...\"}]}",
  "content_ar": "{\"sections\": [{\"title\": \"نظرة عامة\", \"text\": \"إيجي إير هو...\"}]}"
}
```

**Important:** 
- Replace `1` with actual project ID
- `content_en` and `content_ar` are JSON strings (double quotes escaped)

---

### Table: `home_content`

#### POST - Create Home Content

**Body (raw JSON):**
```json
{
  "section": "home",
  "key": "hero_title",
  "content_en": "Hello Im Jana Ahmed Ahmed<br />Passionate UX/UI Designer",
  "content_ar": "مرحباً أنا جنا أحمد أحمد<br />مصممة UX/UI شغوفة",
  "metadata": null,
  "display_order": 0
}
```

**For cards (with metadata):**
```json
{
  "section": "strengths",
  "key": "strength_1",
  "content_en": null,
  "content_ar": null,
  "metadata": {
    "title": "Ambitious UX/UI designer",
    "description": "I always think big—building my own studio...",
    "background": "linear-gradient(188deg, rgba(193,172,255,0.95), rgba(98,67,199,0.92))"
  },
  "display_order": 0
}
```

---

### Table: `skills`

#### POST - Create Skill

**Body (raw JSON):**
```json
{
  "name": "PS",
  "name_ar": null,
  "type": null,
  "display_order": 0
}
```

**For special types:**
```json
{
  "name": "Figma",
  "name_ar": null,
  "type": "figma",
  "display_order": 4
}
```

---

### Table: `experience`

#### POST - Create Experience

**Body (raw JSON):**
```json
{
  "type": "education",
  "year_start": "2025",
  "year_end": "2026",
  "year_display": "2025–2026",
  "institution_en": "Egypt University of Informatics",
  "institution_ar": "جامعة مصر للمعلوماتية",
  "program_en": "Digital Arts & Design – UX/UI",
  "program_ar": "الفنون الرقمية وتصميم UX/UI",
  "description_en": null,
  "description_ar": null,
  "display_order": 0
}
```

---

## 📝 Step-by-Step: How to Add JSON in Postman

### Visual Guide:

```
┌─────────────────────────────────────────────────────────────┐
│  [Params] [Authorization] [Headers] [Body ▼] [Tests]        │
│                              ↑                               │
│                    CLICK THIS TAB                            │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  Body                                                        │
│  ○ none  ○ form-data  ○ x-www-form-urlencoded              │
│  ● raw   ○ binary     ○ GraphQL                            │
│         ↑                                                    │
│    SELECT THIS                                               │
│                                                              │
│  [JSON ▼]  [Text ▼]                                         │
│   ↑                                                          │
│ SELECT JSON                                                  │
│                                                              │
│  ┌────────────────────────────────────────────────────────┐ │
│  │ {                                                       │ │
│  │   "title_en": "Test Project",                          │ │
│  │   "slug": "test-project",                              │ │
│  │   "category": "App Design"                             │ │
│  │ }                                                       │ │
│  │                                                         │ │
│  │ ← Paste JSON here                                       │ │
│  └────────────────────────────────────────────────────────┘ │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

### Steps:

1. **Click "Body" tab**
2. **Select "raw" radio button**
3. **Select "JSON" from dropdown** (top right, next to "Text")
4. **Paste JSON data** in the text box below
5. **Make sure JSON is valid** (proper formatting)

---

## ✅ JSON Format Rules

### Valid JSON:
```json
{
  "title_en": "Test",
  "slug": "test",
  "is_published": true
}
```

### Invalid JSON (common mistakes):
```json
{
  "title_en": "Test",    ← Missing comma
  "slug": "test"         ← Missing comma
  "is_published": true
}
```

```json
{
  'title_en': 'Test'     ← Wrong quotes (use double quotes)
}
```

```json
{
  "title_en": "Test",    ← Trailing comma (ok in some cases)
  "slug": "test",        ← Trailing comma (ok in some cases)
}
```

---

## 🎯 Quick Reference: JSON for Each Table

### projects:
```json
{
  "title_en": "Project Name",
  "title_ar": "اسم المشروع",
  "slug": "project-slug",
  "category": "App Design",
  "is_published": true,
  "display_order": 0
}
```

### blog_posts:
```json
{
  "slug": "blog-post-slug",
  "title_en": "Blog Title",
  "title_ar": "عنوان المدونة",
  "excerpt_en": "Short preview",
  "excerpt_ar": "معاينة قصيرة",
  "is_published": true
}
```

### contact_submissions:
```json
{
  "first_name": "John",
  "last_name": "Doe",
  "email": "john@example.com",
  "message": "Hello!",
  "status": "new"
}
```

### gallery_items:
```json
{
  "project_id": 1,
  "image_url": "gallery-images/image.png",
  "display_order": 0,
  "height": 600
}
```

---

## 💡 Important Notes

1. **Column Names Must Match:**
   - Use exact column names from Supabase table
   - Case-sensitive: `title_en` not `Title_En`

2. **Required vs Optional:**
   - Include all required columns (NOT NULL)
   - Optional columns can be omitted or set to `null`

3. **Data Types:**
   - Strings: `"text"`
   - Numbers: `123` (no quotes)
   - Booleans: `true` or `false` (no quotes)
   - Null: `null` (no quotes)

4. **JSON Format:**
   - Use double quotes `"` for strings
   - No trailing commas (usually)
   - Proper brackets `{}` for objects

---

## 🚀 Summary

**Where to add JSON:**
- Body tab → raw → JSON → Paste JSON data

**What JSON to use:**
- Match column names from Supabase table
- Include required fields
- Use correct data types

**Examples above show JSON for all tables!** 🎯

