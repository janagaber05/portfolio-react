# Create Blog Posts Table - Step by Step
## Follow This Guide to Create Your Next Table

---

## 🎯 Table: `blog_posts`

**Total Columns:** 15 columns

**No Foreign Keys:** This table is standalone (easiest to create!)

---

## 📝 Step 1: Create the Table

1. Go to **Table Editor** in Supabase Dashboard
2. Click **"New table"** button
3. Table name: `blog_posts`
4. Click **"Save"** or **"Create table"**

---

## 📋 Step 2: Add All Columns

Add these columns one by one (click "Add column" for each):

### Column 1: `id` ⭐ FIRST COLUMN
```
Column name: id
Type: uuid
Default value: gen_random_uuid()
Is nullable: ❌ No (unchecked)
Is unique: ✅ Yes (checked)
Is primary key: ✅ Yes (checked)
```

### Column 2: `slug`
```
Column name: slug
Type: text
Default value: (leave empty)
Is nullable: ❌ No (unchecked)
Is unique: ✅ Yes (checked)
```

### Column 3: `title_en`
```
Column name: title_en
Type: text
Default value: (leave empty)
Is nullable: ❌ No (unchecked)
```

### Column 4: `excerpt_en`
```
Column name: excerpt_en
Type: text
Default value: (leave empty)
Is nullable: ✅ Yes (checked)
```

### Column 5: `content_en`
```
Column name: content_en
Type: text
Default value: (leave empty)
Is nullable: ✅ Yes (checked)
```

### Column 6: `featured_image_url`
```
Column name: featured_image_url
Type: text
Default value: (leave empty)
Is nullable: ✅ Yes (checked)
```

### Column 7: `title_ar`
```
Column name: title_ar
Type: text
Default value: (leave empty)
Is nullable: ✅ Yes (checked)
```

### Column 8: `excerpt_ar`
```
Column name: excerpt_ar
Type: text
Default value: (leave empty)
Is nullable: ✅ Yes (checked)
```

### Column 9: `content_ar`
```
Column name: content_ar
Type: text
Default value: (leave empty)
Is nullable: ✅ Yes (checked)
```

### Column 10: `featured_image_url_ar`
```
Column name: featured_image_url_ar
Type: text
Default value: (leave empty)
Is nullable: ✅ Yes (checked)
```

### Column 11: `created_at`
```
Column name: created_at
Type: timestamptz
Default value: now()
Is nullable: ❌ No (unchecked)
```

### Column 12: `updated_at`
```
Column name: updated_at
Type: timestamptz
Default value: now()
Is nullable: ❌ No (unchecked)
```

### Column 13: `published_at`
```
Column name: published_at
Type: timestamptz
Default value: (leave empty)
Is nullable: ✅ Yes (checked)
```

### Column 14: `is_published`
```
Column name: is_published
Type: bool
Default value: false
Is nullable: ❌ No (unchecked)
```

### Column 15: `is_featured`
```
Column name: is_featured
Type: bool
Default value: false
Is nullable: ❌ No (unchecked)
```

---

## 📊 Visual: What Your Table Will Look Like

```
┌─────────────────────────────────────────────────────────────────┐
│                    TABLE: blog_posts                             │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  Columns (15)                                                    │
│  ┌───────────────────────────────────────────────────────────┐ │
│  │ 🔑 id (uuid) [Primary Key] [Unique]                      │ │
│  │ slug (text) [Unique]                                       │ │
│  │ title_en (text)                                            │ │
│  │ excerpt_en (text)                                          │ │
│  │ content_en (text)                                          │ │
│  │ featured_image_url (text)                                  │ │
│  │ title_ar (text)                                            │ │
│  │ excerpt_ar (text)                                          │ │
│  │ content_ar (text)                                          │ │
│  │ featured_image_url_ar (text)                              │ │
│  │ created_at (timestamptz)                                   │ │
│  │ updated_at (timestamptz)                                   │ │
│  │ published_at (timestamptz)                                  │ │
│  │ is_published (bool)                                        │ │
│  │ is_featured (bool)                                         │ │
│  └───────────────────────────────────────────────────────────┘ │
│                                                                  │
│  [+ Add column]                                                  │
└─────────────────────────────────────────────────────────────────┘
```

---

## ✅ Quick Checklist

**Create Table:**
- [ ] Table name: `blog_posts`
- [ ] Save table

**Add Columns (15 total):**
- [ ] `id` - uuid, primary key, unique
- [ ] `slug` - text, unique, NOT nullable
- [ ] `title_en` - text, NOT nullable
- [ ] `excerpt_en` - text, nullable
- [ ] `content_en` - text, nullable
- [ ] `featured_image_url` - text, nullable
- [ ] `title_ar` - text, nullable
- [ ] `excerpt_ar` - text, nullable
- [ ] `content_ar` - text, nullable
- [ ] `featured_image_url_ar` - text, nullable
- [ ] `created_at` - timestamptz, default: now()
- [ ] `updated_at` - timestamptz, default: now()
- [ ] `published_at` - timestamptz, nullable
- [ ] `is_published` - bool, default: false
- [ ] `is_featured` - bool, default: false

**Enable RLS:**
- [ ] Click on `blog_posts` table
- [ ] Click "..." menu → "Enable RLS"

**Add Policies:**
- [ ] Policy: "Public can view published blog posts" (SELECT, public, `is_published = true`)
- [ ] Policy: "Admins can manage blog posts" (ALL, authenticated, admin role check)

---

## 📝 Example: What to Write in Each Column (After Creating)

### Example Blog Post Row:

```
title_en: "Designing with Emotion: How Colors Shape User Experience"
slug: "designing-with-emotion-how-colors-shape-user-experience-ui-designer-in-cairo"
excerpt_en: "Color isn't just decoration — it's an emotional language."
content_en: "(full blog post content here - can be very long)"
featured_image_url: "featured/blog-1-featured.png"
title_ar: "التصميم بالعاطفة: كيف تشكل الألوان تجربة المستخدم"
excerpt_ar: "اللون ليس مجرد زخرفة — إنه لغة عاطفية."
content_ar: "(محتوى المدونة الكامل بالعربية)"
featured_image_url_ar: "featured/blog-1-featured-ar.png"
is_published: true
is_featured: true
published_at: (current date/time)
```

---

## 🎯 Important Notes

1. **`id` column:** Must be first, primary key, unique
2. **`slug` column:** Must be unique (no duplicates)
3. **`title_en`:** Required (NOT nullable)
4. **`is_published`:** Required (NOT nullable), default: false
5. **`is_featured`:** Required (NOT nullable), default: false
6. **All other columns:** Optional (nullable)

---

## 🚀 After Creating This Table

Once you finish `blog_posts`:
1. ✅ You can start adding blog posts
2. ✅ Next table: `contact_submissions` (for contact form)
3. ✅ Then: `gallery_items` (for project galleries)
4. ✅ Finally: `project_details` (for detailed project pages)

---

## 💡 Tips

- **Take your time:** Add columns one by one
- **Check settings:** Make sure `id` is primary key and `slug` is unique
- **Test it:** Add a test blog post to make sure everything works
- **Enable RLS:** Don't forget to enable Row Level Security

**You're doing great! Keep going!** 🎉

