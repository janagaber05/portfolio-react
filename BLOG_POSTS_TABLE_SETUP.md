# Blog Posts Table Setup
## Create This Table Next!

---

## 🎯 Why Create `blog_posts` Next?

- ✅ **Easiest** - No foreign keys needed
- ✅ **Standalone** - Doesn't depend on other tables
- ✅ **Simple** - Straightforward structure
- ✅ **Useful** - You can start adding blog posts right away

---

## 📊 Table: `blog_posts`

### Step 1: Create the Table

1. Go to **Table Editor** in Supabase
2. Click **"New table"**
3. Table name: `blog_posts`
4. Click **"Save"**

---

## 📋 Columns to Add (15 columns total)

### Column 1: `id` (Primary Key)
```
Column name: id
Type: uuid
Default value: gen_random_uuid()
Is nullable: ❌ No
Is unique: ✅ Yes
Is primary key: ✅ Yes
```

### Column 2: `slug` (Unique)
```
Column name: slug
Type: text
Default value: (empty)
Is nullable: ❌ No
Is unique: ✅ Yes
```

### Column 3: `title_en`
```
Column name: title_en
Type: text
Default value: (empty)
Is nullable: ❌ No
```

### Column 4: `excerpt_en`
```
Column name: excerpt_en
Type: text
Default value: (empty)
Is nullable: ✅ Yes
```

### Column 5: `content_en`
```
Column name: content_en
Type: text
Default value: (empty)
Is nullable: ✅ Yes
```

### Column 6: `featured_image_url`
```
Column name: featured_image_url
Type: text
Default value: (empty)
Is nullable: ✅ Yes
```

### Column 7: `title_ar`
```
Column name: title_ar
Type: text
Default value: (empty)
Is nullable: ✅ Yes
```

### Column 8: `excerpt_ar`
```
Column name: excerpt_ar
Type: text
Default value: (empty)
Is nullable: ✅ Yes
```

### Column 9: `content_ar`
```
Column name: content_ar
Type: text
Default value: (empty)
Is nullable: ✅ Yes
```

### Column 10: `featured_image_url_ar`
```
Column name: featured_image_url_ar
Type: text
Default value: (empty)
Is nullable: ✅ Yes
```

### Column 11: `created_at`
```
Column name: created_at
Type: timestamptz
Default value: now()
Is nullable: ❌ No
```

### Column 12: `updated_at`
```
Column name: updated_at
Type: timestamptz
Default value: now()
Is nullable: ❌ No
```

### Column 13: `published_at`
```
Column name: published_at
Type: timestamptz
Default value: (empty)
Is nullable: ✅ Yes
```

### Column 14: `is_published`
```
Column name: is_published
Type: bool
Default value: false
Is nullable: ❌ No
```

### Column 15: `is_featured`
```
Column name: is_featured
Type: bool
Default value: false
Is nullable: ❌ No
```

---

## 📊 Visual: Complete Table Structure

```
┌─────────────────────────────────────────────────────────────────┐
│                    TABLE: blog_posts                             │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  ┌──────────────────────┬──────────────┬──────────────┬───────┐ │
│  │ Column Name           │ Type         │ Default      │ Null?│ │
│  ├──────────────────────┼──────────────┼──────────────┼───────┤ │
│  │ id                    │ uuid         │ gen_random_  │ ❌ No│ │
│  │                       │              │ uuid()       │       │ │
│  ├──────────────────────┼──────────────┼──────────────┼───────┤ │
│  │ slug                  │ text         │ (empty)      │ ❌ No│ │
│  │                       │              │              │       │ │
│  │                       │ [Unique] ✅                  │       │ │
│  ├──────────────────────┼──────────────┼──────────────┼───────┤ │
│  │ title_en              │ text         │ (empty)      │ ❌ No│ │
│  ├──────────────────────┼──────────────┼──────────────┼───────┤ │
│  │ excerpt_en            │ text         │ (empty)      │ ✅ Yes│ │
│  ├──────────────────────┼──────────────┼──────────────┼───────┤ │
│  │ content_en            │ text         │ (empty)      │ ✅ Yes│ │
│  ├──────────────────────┼──────────────┼──────────────┼───────┤ │
│  │ featured_image_url    │ text         │ (empty)      │ ✅ Yes│ │
│  ├──────────────────────┼──────────────┼──────────────┼───────┤ │
│  │ title_ar              │ text         │ (empty)      │ ✅ Yes│ │
│  ├──────────────────────┼──────────────┼──────────────┼───────┤ │
│  │ excerpt_ar            │ text         │ (empty)      │ ✅ Yes│ │
│  ├──────────────────────┼──────────────┼──────────────┼───────┤ │
│  │ content_ar            │ text         │ (empty)      │ ✅ Yes│ │
│  ├──────────────────────┼──────────────┼──────────────┼───────┤ │
│  │ featured_image_url_ar │ text        │ (empty)      │ ✅ Yes│ │
│  ├──────────────────────┼──────────────┼──────────────┼───────┤ │
│  │ created_at            │ timestamptz  │ now()        │ ❌ No│ │
│  ├──────────────────────┼──────────────┼──────────────┼───────┤ │
│  │ updated_at            │ timestamptz  │ now()        │ ❌ No│ │
│  ├──────────────────────┼──────────────┼──────────────┼───────┤ │
│  │ published_at          │ timestamptz  │ (empty)      │ ✅ Yes│ │
│  ├──────────────────────┼──────────────┼──────────────┼───────┤ │
│  │ is_published          │ bool         │ false        │ ❌ No│ │
│  ├──────────────────────┼──────────────┼──────────────┼───────┤ │
│  │ is_featured           │ bool         │ false        │ ❌ No│ │
│  └──────────────────────┴──────────────┴──────────────┴───────┘ │
│                                                                  │
│  🔑 Primary Key: id                                              │
│  ✅ Unique: id, slug                                             │
│  🔗 Foreign Keys: None                                           │
└─────────────────────────────────────────────────────────────────┘
```

---

## ✅ Step-by-Step Checklist

### Create Table:
- [ ] Go to Table Editor
- [ ] Click "New table"
- [ ] Name: `blog_posts`
- [ ] Save

### Add Columns (in order):
- [ ] `id` (uuid, primary key, unique)
- [ ] `slug` (text, unique, NOT nullable)
- [ ] `title_en` (text, NOT nullable)
- [ ] `excerpt_en` (text, nullable)
- [ ] `content_en` (text, nullable)
- [ ] `featured_image_url` (text, nullable)
- [ ] `title_ar` (text, nullable)
- [ ] `excerpt_ar` (text, nullable)
- [ ] `content_ar` (text, nullable)
- [ ] `featured_image_url_ar` (text, nullable)
- [ ] `created_at` (timestamptz, default: now())
- [ ] `updated_at` (timestamptz, default: now())
- [ ] `published_at` (timestamptz, nullable)
- [ ] `is_published` (bool, default: false, NOT nullable)
- [ ] `is_featured` (bool, default: false, NOT nullable)

### Enable RLS:
- [ ] Click on `blog_posts` table
- [ ] Click "..." menu
- [ ] Click "Enable RLS"

### Add RLS Policies:
- [ ] Policy 1: "Public can view published blog posts"
  - Operation: SELECT
  - Roles: public
  - USING: `is_published = true`
- [ ] Policy 2: "Admins can manage blog posts"
  - Operation: ALL
  - Roles: authenticated
  - USING: `(auth.jwt() ->> 'user_metadata')::jsonb ->> 'role' = 'admin'`

---

## 📝 Example Blog Post Data

After creating the table, you can add a blog post like this:

```
title_en: "Designing with Emotion: How Colors Shape User Experience"
slug: "designing-with-emotion-how-colors-shape-user-experience-ui-designer-in-cairo"
excerpt_en: "Color isn't just decoration — it's an emotional language. In design, colors influence how users feel, react, and connect with an interface."
content_en: "(full blog post content here)"
featured_image_url: "featured/blog-1-featured.png"
is_published: true
is_featured: true
published_at: (current date/time)
```

---

## 🎯 Quick Summary

**Table Name:** `blog_posts`

**Total Columns:** 15

**Required Columns:**
- `id` (primary key)
- `slug` (unique)
- `title_en` (required)
- `is_published` (required)
- `created_at` (auto)
- `updated_at` (auto)

**Optional Columns:**
- All Arabic columns (`title_ar`, `excerpt_ar`, `content_ar`, `featured_image_url_ar`)
- `excerpt_en`, `content_en`
- `featured_image_url`
- `published_at`
- `is_featured`

**No Foreign Keys:** This table is standalone!

---

## 🚀 After Creating This Table

Once `blog_posts` is created:
1. ✅ You can start adding blog posts
2. ✅ Then create `contact_submissions` table
3. ✅ Then create `gallery_items` table
4. ✅ Finally create `project_details` table

**Start with `blog_posts` - it's the easiest!** 🎯

