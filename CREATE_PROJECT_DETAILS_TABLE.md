# Create Project Details Table - Step by Step
## Final Table After Gallery Items

---

## 🎯 Table: `project_details`

**Total Columns:** 9 columns

**Has Foreign Key:** Needs `projects` table (links to projects)

**Purpose:** Stores detailed content for project pages (hero text, sections, descriptions, etc.)

---

## 📝 Step 1: Create the Table

1. Go to **Table Editor** in Supabase Dashboard
2. Click **"New table"** button
3. Table name: `project_details`
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

### Column 2: `project_id` ⭐ FOREIGN KEY
```
Column name: project_id
Type: uuid
Default value: (leave empty)
Is nullable: ❌ No (unchecked)
Is unique: ✅ Yes (checked)
```

**Important:** After creating this column, add Foreign Key:
1. Click on `project_id` column
2. Scroll to "Foreign key relationship" section
3. Click "Add relationship" or "Add foreign key"
4. Foreign table: `projects`
5. Foreign column: `id`
6. On delete: `Cascade`
7. Save

**Also Important:** Make `project_id` unique (one detail row per project)

### Column 3: `hero_text_en`
```
Column name: hero_text_en
Type: text
Default value: (leave empty)
Is nullable: ✅ Yes (checked)
```

### Column 4: `hero_text_ar`
```
Column name: hero_text_ar
Type: text
Default value: (leave empty)
Is nullable: ✅ Yes (checked)
```

### Column 5: `description_en`
```
Column name: description_en
Type: text
Default value: (leave empty)
Is nullable: ✅ Yes (checked)
```

### Column 6: `description_ar`
```
Column name: description_ar
Type: text
Default value: (leave empty)
Is nullable: ✅ Yes (checked)
```

### Column 7: `content_en`
```
Column name: content_en
Type: jsonb
Default value: (leave empty)
Is nullable: ✅ Yes (checked)
```

### Column 8: `content_ar`
```
Column name: content_ar
Type: jsonb
Default value: (leave empty)
Is nullable: ✅ Yes (checked)
```

### Column 9: `created_at`
```
Column name: created_at
Type: timestamptz
Default value: now()
Is nullable: ❌ No (unchecked)
```

---

## 📊 Visual: Complete Table Structure

```
┌─────────────────────────────────────────────────────────────────┐
│                  TABLE: project_details                         │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  ┌──────────────────────┬──────────────┬──────────────┬───────┐ │
│  │ Column Name           │ Type         │ Default      │ Null?│ │
│  ├──────────────────────┼──────────────┼──────────────┼───────┤ │
│  │ id                    │ uuid         │ gen_random_  │ ❌ No│ │
│  │                       │              │ uuid()       │       │ │
│  ├──────────────────────┼──────────────┼──────────────┼───────┤ │
│  │ project_id            │ uuid         │ (empty)      │ ❌ No│ │
│  │                       │              │              │       │ │
│  │                       │ 🔗 Foreign Key → projects.id        │ │
│  │                       │    On Delete: CASCADE               │ │
│  │                       │    ✅ UNIQUE (one detail per project)│ │
│  ├──────────────────────┼──────────────┼──────────────┼───────┤ │
│  │ hero_text_en          │ text         │ (empty)      │ ✅ Yes│ │
│  ├──────────────────────┼──────────────┼──────────────┼───────┤ │
│  │ hero_text_ar          │ text         │ (empty)      │ ✅ Yes│ │
│  ├──────────────────────┼──────────────┼──────────────┼───────┤ │
│  │ description_en        │ text         │ (empty)      │ ✅ Yes│ │
│  ├──────────────────────┼──────────────┼──────────────┼───────┤ │
│  │ description_ar        │ text         │ (empty)      │ ✅ Yes│ │
│  ├──────────────────────┼──────────────┼──────────────┼───────┤ │
│  │ content_en            │ jsonb        │ (empty)      │ ✅ Yes│ │
│  ├──────────────────────┼──────────────┼──────────────┼───────┤ │
│  │ content_ar            │ jsonb        │ (empty)      │ ✅ Yes│ │
│  ├──────────────────────┼──────────────┼──────────────┼───────┤ │
│  │ created_at            │ timestamptz  │ now()        │ ❌ No│ │
│  └──────────────────────┴──────────────┴──────────────┴───────┘ │
│                                                                  │
│  🔑 Primary Key: id                                              │
│  ✅ Unique: id, project_id                                       │
│  🔗 Foreign Key: project_id → projects.id (CASCADE)              │
└─────────────────────────────────────────────────────────────────┘
```

---

## 🔗 How to Add Foreign Key

### After Creating `project_id` Column:

1. **Click on the `project_id` column** (in the column list)
2. **Scroll down** to find "Foreign key relationship" or "Relationships" section
3. **Click "Add relationship"** or "Add foreign key"
4. **Fill in:**
   ```
   Foreign table: projects
   Foreign column: id
   On delete: Cascade
   ```
5. **Click "Save"**

### Make `project_id` Unique:

1. **Click on `project_id` column**
2. **Find "Is unique" checkbox**
3. **Check it** ✅
4. **Save**

**Why unique?** Each project should have only ONE detail row.

---

## ✅ Step-by-Step Checklist

### Create Table:
- [ ] Go to Table Editor
- [ ] Click "New table"
- [ ] Name: `project_details`
- [ ] Save

### Add Columns (9 total):
- [ ] `id` - uuid, primary key, unique
- [ ] `project_id` - uuid, NOT nullable, unique
  - [ ] Add foreign key: `projects.id` (CASCADE)
  - [ ] Make it unique ✅
- [ ] `hero_text_en` - text, nullable
- [ ] `hero_text_ar` - text, nullable
- [ ] `description_en` - text, nullable
- [ ] `description_ar` - text, nullable
- [ ] `content_en` - jsonb, nullable
- [ ] `content_ar` - jsonb, nullable
- [ ] `created_at` - timestamptz, default: now()

### Enable RLS:
- [ ] Click on `project_details` table
- [ ] Click "..." menu
- [ ] Click "Enable RLS"

### Add RLS Policies:
- [ ] Policy 1: "Public can view published project details"
  - Operation: SELECT
  - Roles: public
  - USING: `EXISTS (SELECT 1 FROM projects WHERE projects.id = project_details.project_id AND projects.is_published = true)`
- [ ] Policy 2: "Admins can manage project details"
  - Operation: ALL
  - Roles: authenticated
  - USING: `(auth.jwt() ->> 'user_metadata')::jsonb ->> 'role' = 'admin'`

---

## 📝 What Each Column Is For

### `project_id`
- Links to a specific project
- **One detail row per project** (unique)
- Example: Links to "Egy Air" project

### `hero_text_en` / `hero_text_ar`
- Hero section text (overlay text on hero image)
- English and Arabic versions
- Example: "Elegant Air Travel Experience"

### `description_en` / `description_ar`
- Short description of the project
- English and Arabic versions
- Example: "A modern airline booking platform..."

### `content_en` / `content_ar`
- Full detailed content (JSON format)
- Can include sections, paragraphs, lists, etc.
- English and Arabic versions
- Example: `{"sections": [{"title": "Overview", "text": "..."}]}`

---

## 📋 Example: Adding Project Details

### For Egy Air Project:

**Step 1: Get Project ID**
1. Go to `projects` table
2. Find "Egy Air" row
3. Copy the `id` (UUID)

**Step 2: Add Detail Row**

```
project_id: (paste UUID from Egy Air project)
hero_text_en: "Elegant Air Travel Experience"
hero_text_ar: "تجربة سفر جوية أنيقة"
description_en: "A modern airline booking platform designed for seamless travel experiences."
description_ar: "منصة حجز طيران حديثة مصممة لتجارب سفر سلسة."
content_en: {"sections": [{"title": "Overview", "text": "Egy Air is..."}]}
content_ar: {"sections": [{"title": "نظرة عامة", "text": "إيجي إير هو..."}]}
```

**Important:** Only ONE row per project!

---

## 🎯 JSONB Content Format (Optional)

### Simple JSONB Example:

```json
{
  "sections": [
    {
      "title": "Overview",
      "text": "This project was designed to..."
    },
    {
      "title": "Features",
      "text": "Key features include..."
    }
  ]
}
```

### For Arabic:

```json
{
  "sections": [
    {
      "title": "نظرة عامة",
      "text": "تم تصميم هذا المشروع ل..."
    },
    {
      "title": "المميزات",
      "text": "تشمل المميزات الرئيسية..."
    }
  ]
}
```

**Note:** JSONB is optional - you can leave it empty if you don't need structured content.

---

## 📊 Quick Summary

**Table Name:** `project_details`

**Total Columns:** 9

**Required Columns:**
- `id` (primary key)
- `project_id` (foreign key, unique - one per project)
- `created_at` (auto)

**Optional Columns:**
- `hero_text_en` / `hero_text_ar` (hero text)
- `description_en` / `description_ar` (descriptions)
- `content_en` / `content_ar` (JSONB content)

**Foreign Key:**
- `project_id` → `projects.id` (CASCADE on delete)
- **Unique:** One detail row per project

**Rows Needed:**
- **One row per project** (maximum 9 rows for 9 projects)
- Or fewer if some projects don't need details

---

## 🚀 After Creating This Table

Once `project_details` is created:
1. ✅ You can add detailed content for each project
2. ✅ Support for bilingual content (English/Arabic)
3. ✅ **All tables are complete!** 🎉

**You've created all 5 tables:**
1. ✅ `projects`
2. ✅ `blog_posts`
3. ✅ `contact_submissions`
4. ✅ `gallery_items`
5. ✅ `project_details` (final table!)

---

## 💡 Important Notes

1. **One Row Per Project:**
   - Each project gets ONE detail row
   - `project_id` is unique (enforced)

2. **JSONB Content:**
   - Optional - can leave empty
   - Use for structured content (sections, lists, etc.)
   - Or just use `description_en`/`description_ar` for simple text

3. **Bilingual Support:**
   - All content columns have English and Arabic versions
   - Fill both if you need bilingual support

4. **Foreign Key Required:**
   - This table needs the `projects` table to exist first
   - Links each detail row to a specific project

**This is the final table!** After this, your Supabase backend structure is complete! 🎯

