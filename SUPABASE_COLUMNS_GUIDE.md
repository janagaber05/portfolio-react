# Supabase Columns Setup Guide
## Visual Guide: How Each Column Should Look

This guide shows exactly how to configure each column in the Supabase Table Editor.

---

## Table 1: `projects`

### Column Configuration

| # | Column Name | Type | Default Value | Nullable? | Unique? | Notes |
|---|------------|------|---------------|-----------|---------|-------|
| 1 | `id` | `uuid` | `gen_random_uuid()` | ❌ No | ✅ Yes | **Primary Key** |
| 2 | `slug` | `text` | (empty) | ❌ No | ✅ Yes | URL-friendly name (e.g., "egy-air") |
| 3 | `category` | `text` | (empty) | ❌ No | ❌ No | Must be: graphic-design, app-design, web-design, 3d-design, or coding |
| 4 | `featured` | `bool` | `false` | ❌ No | ❌ No | Checkbox for featured projects |
| 5 | `display_order` | `int4` | `0` | ✅ Yes | ❌ No | Number for sorting (0, 1, 2, 3...) |
| 6 | `title_en` | `text` | (empty) | ❌ No | ❌ No | English title |
| 7 | `description_en` | `text` | (empty) | ✅ Yes | ❌ No | English description (long text) |
| 8 | `excerpt_en` | `text` | (empty) | ✅ Yes | ❌ No | English short excerpt |
| 9 | `hero_image_url` | `text` | (empty) | ✅ Yes | ❌ No | URL to hero image |
| 10 | `thumbnail_image_url` | `text` | (empty) | ✅ Yes | ❌ No | URL to thumbnail image |
| 11 | `title_ar` | `text` | (empty) | ✅ Yes | ❌ No | Arabic title |
| 12 | `description_ar` | `text` | (empty) | ✅ Yes | ❌ No | Arabic description (long text) |
| 13 | `excerpt_ar` | `text` | (empty) | ✅ Yes | ❌ No | Arabic short excerpt |
| 14 | `hero_image_url_ar` | `text` | (empty) | ✅ Yes | ❌ No | URL to Arabic hero image |
| 15 | `thumbnail_image_url_ar` | `text` | (empty) | ✅ Yes | ❌ No | URL to Arabic thumbnail |
| 16 | `created_at` | `timestamptz` | `now()` | ❌ No | ❌ No | Auto-filled timestamp |
| 17 | `updated_at` | `timestamptz` | `now()` | ❌ No | ❌ No | Auto-filled timestamp |
| 18 | `published_at` | `timestamptz` | (empty) | ✅ Yes | ❌ No | When project was published |
| 19 | `is_published` | `bool` | `false` | ❌ No | ❌ No | Checkbox: published or not |

### Visual Example of One Column (title_en):

```
┌─────────────────────────────────────────┐
│ Column Name: title_en                    │
├─────────────────────────────────────────┤
│ Type: text                               │
│ Default value: (leave empty)             │
│ Is nullable: ☐ (unchecked - NOT NULL)    │
│ Is unique: ☐ (unchecked)                 │
│ Is primary key: ☐ (unchecked)            │
└─────────────────────────────────────────┘
```

### Special Settings:

**For `category` column:**
- Add a **Check Constraint**:
  - Name: `category_check`
  - Expression: `category IN ('graphic-design', 'app-design', 'web-design', '3d-design', 'coding')`

---

## Table 2: `project_details`

| # | Column Name | Type | Default Value | Nullable? | Unique? | Notes |
|---|------------|------|---------------|-----------|---------|-------|
| 1 | `id` | `uuid` | `gen_random_uuid()` | ❌ No | ✅ Yes | **Primary Key** |
| 2 | `project_id` | `uuid` | (empty) | ❌ No | ❌ No | **Foreign Key** → projects.id |
| 3 | `section_type` | `text` | (empty) | ❌ No | ❌ No | e.g., "hero", "overview", "gallery" |
| 4 | `section_order` | `int4` | `0` | ✅ Yes | ❌ No | Order of sections (0, 1, 2...) |
| 5 | `content_en` | `jsonb` | (empty) | ✅ Yes | ❌ No | English content (JSON format) |
| 6 | `content_ar` | `jsonb` | (empty) | ✅ Yes | ❌ No | Arabic content (JSON format) |
| 7 | `created_at` | `timestamptz` | `now()` | ❌ No | ❌ No | Auto-filled |
| 8 | `updated_at` | `timestamptz` | `now()` | ❌ No | ❌ No | Auto-filled |

### Foreign Key Setup for `project_id`:

When you click on the `project_id` column, scroll down and add:

```
Foreign Key Relationship:
┌─────────────────────────────────────────┐
│ Foreign table: projects                 │
│ Foreign column: id                      │
│ On delete: Cascade                     │
└─────────────────────────────────────────┘
```

### JSONB Content Example:

For `content_en` and `content_ar`, you can store JSON like:
```json
{
  "title": "Hero Section",
  "text": "Welcome to Egy Air",
  "image": "/imgs/hero.png"
}
```

---

## Table 3: `blog_posts`

| # | Column Name | Type | Default Value | Nullable? | Unique? | Notes |
|---|------------|------|---------------|-----------|---------|-------|
| 1 | `id` | `uuid` | `gen_random_uuid()` | ❌ No | ✅ Yes | **Primary Key** |
| 2 | `slug` | `text` | (empty) | ❌ No | ✅ Yes | URL-friendly name |
| 3 | `title_en` | `text` | (empty) | ❌ No | ❌ No | English title |
| 4 | `excerpt_en` | `text` | (empty) | ✅ Yes | ❌ No | English short excerpt |
| 5 | `content_en` | `text` | (empty) | ✅ Yes | ❌ No | Full blog content (can be HTML) |
| 6 | `featured_image_url` | `text` | (empty) | ✅ Yes | ❌ No | URL to featured image |
| 7 | `title_ar` | `text` | (empty) | ✅ Yes | ❌ No | Arabic title |
| 8 | `excerpt_ar` | `text` | (empty) | ✅ Yes | ❌ No | Arabic short excerpt |
| 9 | `content_ar` | `text` | (empty) | ✅ Yes | ❌ No | Full Arabic blog content |
| 10 | `featured_image_url_ar` | `text` | (empty) | ✅ Yes | ❌ No | URL to Arabic featured image |
| 11 | `created_at` | `timestamptz` | `now()` | ❌ No | ❌ No | Auto-filled |
| 12 | `updated_at` | `timestamptz` | `now()` | ❌ No | ❌ No | Auto-filled |
| 13 | `published_at` | `timestamptz` | (empty) | ✅ Yes | ❌ No | Publication date |
| 14 | `is_published` | `bool` | `false` | ❌ No | ❌ No | Published checkbox |
| 15 | `is_featured` | `bool` | `false` | ❌ No | ❌ No | Featured blog checkbox |

---

## Table 4: `contact_submissions`

| # | Column Name | Type | Default Value | Nullable? | Unique? | Notes |
|---|------------|------|---------------|-----------|---------|-------|
| 1 | `id` | `uuid` | `gen_random_uuid()` | ❌ No | ✅ Yes | **Primary Key** |
| 2 | `first_name` | `text` | (empty) | ❌ No | ❌ No | User's first name |
| 3 | `last_name` | `text` | (empty) | ❌ No | ❌ No | User's last name |
| 4 | `email` | `text` | (empty) | ❌ No | ❌ No | User's email |
| 5 | `phone` | `text` | (empty) | ✅ Yes | ❌ No | User's phone (optional) |
| 6 | `message` | `text` | (empty) | ❌ No | ❌ No | Message content (long text) |
| 7 | `status` | `text` | `'new'` | ❌ No | ❌ No | Status: new, read, replied, archived |
| 8 | `admin_notes` | `text` | (empty) | ✅ Yes | ❌ No | Admin's private notes |
| 9 | `created_at` | `timestamptz` | `now()` | ❌ No | ❌ No | Auto-filled |
| 10 | `read_at` | `timestamptz` | (empty) | ✅ Yes | ❌ No | When admin read it |
| 11 | `replied_at` | `timestamptz` | (empty) | ✅ Yes | ❌ No | When admin replied |

### Special Settings:

**For `status` column:**
- Default value: Type `'new'` (with quotes)
- Add a **Check Constraint**:
  - Name: `status_check`
  - Expression: `status IN ('new', 'read', 'replied', 'archived')`

---

## Table 5: `gallery_items`

| # | Column Name | Type | Default Value | Nullable? | Unique? | Notes |
|---|------------|------|---------------|-----------|---------|-------|
| 1 | `id` | `uuid` | `gen_random_uuid()` | ❌ No | ✅ Yes | **Primary Key** |
| 2 | `project_id` | `uuid` | (empty) | ✅ Yes | ❌ No | **Foreign Key** → projects.id |
| 3 | `image_url` | `text` | (empty) | ❌ No | ❌ No | URL to gallery image |
| 4 | `image_alt` | `text` | (empty) | ✅ Yes | ❌ No | Alt text for image |
| 5 | `display_order` | `int4` | `0` | ✅ Yes | ❌ No | Order in gallery (0, 1, 2...) |
| 6 | `height` | `int4` | (empty) | ✅ Yes | ❌ No | Image height for masonry layout |
| 7 | `created_at` | `timestamptz` | `now()` | ❌ No | ❌ No | Auto-filled |
| 8 | `updated_at` | `timestamptz` | `now()` | ❌ No | ❌ No | Auto-filled |

### Foreign Key Setup for `project_id`:

```
Foreign Key Relationship:
┌─────────────────────────────────────────┐
│ Foreign table: projects                 │
│ Foreign column: id                      │
│ On delete: Cascade                     │
└─────────────────────────────────────────┘
```

---

## Step-by-Step: Adding a Column in Supabase Dashboard

1. **Go to Table Editor** → Click on your table
2. **Click "Add column"** button
3. **Fill in the form:**

```
┌─────────────────────────────────────────┐
│ Column name: [title_en]                 │
│                                         │
│ Type: [text ▼]                         │
│   Options: text, uuid, bool, int4,     │
│            timestamptz, jsonb          │
│                                         │
│ Default value: [leave empty or enter]   │
│                                         │
│ ☐ Is nullable (check if YES)            │
│ ☐ Is unique (check if YES)             │
│ ☐ Is primary key (check if YES)        │
│                                         │
│ [Save] [Cancel]                         │
└─────────────────────────────────────────┘
```

4. **For default values:**
   - `gen_random_uuid()` → Type exactly this (for uuid columns)
   - `now()` → Type exactly this (for timestamptz columns)
   - `'new'` → Type with quotes (for text defaults)
   - `false` → Type without quotes (for bool defaults)
   - `0` → Type number (for int4 defaults)

5. **Click "Save"**

---

## Quick Reference: Column Types

- **`uuid`** = Unique identifier (like a long random string)
- **`text`** = Text/string (for names, descriptions, URLs)
- **`bool`** = Boolean (true/false checkbox)
- **`int4`** = Integer number (for ordering, heights)
- **`timestamptz`** = Date and time with timezone
- **`jsonb`** = JSON data (flexible structured data)

---

## Important Notes

1. **Primary Key**: Only ONE column per table should be primary key (usually `id`)
2. **Unique**: Columns like `slug` should be unique (no duplicates)
3. **Nullable**: 
   - ❌ No = Field is REQUIRED (must have a value)
   - ✅ Yes = Field is OPTIONAL (can be empty)
4. **Foreign Keys**: Must reference an existing table and column
5. **Default Values**: 
   - Use `gen_random_uuid()` for uuid primary keys
   - Use `now()` for timestamp columns
   - Leave empty for most text fields

---

## Example: Complete `projects` Table Setup

When you're done, your `projects` table should look like this in the Supabase dashboard:

```
Table: projects
┌─────────────────────┬──────────┬──────────────┬──────────┬────────┐
│ Column Name         │ Type     │ Default      │ Nullable │ Unique │
├─────────────────────┼──────────┼──────────────┼──────────┼────────┤
│ id                  │ uuid     │ gen_random.. │ No       │ Yes ✓  │
│ slug                │ text     │ (empty)      │ No       │ Yes ✓  │
│ category            │ text     │ (empty)      │ No       │ No     │
│ featured            │ bool     │ false        │ No       │ No     │
│ display_order       │ int4     │ 0            │ Yes      │ No     │
│ title_en            │ text     │ (empty)      │ No       │ No     │
│ description_en      │ text     │ (empty)      │ Yes      │ No     │
│ excerpt_en          │ text     │ (empty)      │ Yes      │ No     │
│ hero_image_url      │ text     │ (empty)      │ Yes      │ No     │
│ thumbnail_image_url │ text     │ (empty)      │ Yes      │ No     │
│ title_ar            │ text     │ (empty)      │ Yes      │ No     │
│ description_ar     │ text     │ (empty)      │ Yes      │ No     │
│ excerpt_ar         │ text     │ (empty)      │ Yes      │ No     │
│ hero_image_url_ar   │ text     │ (empty)      │ Yes      │ No     │
│ thumbnail_image_ar │ text     │ (empty)      │ Yes      │ No     │
│ created_at         │ timest.. │ now()        │ No       │ No     │
│ updated_at         │ timest.. │ now()        │ No       │ No     │
│ published_at       │ timest.. │ (empty)      │ Yes      │ No     │
│ is_published       │ bool     │ false        │ No       │ No     │
└─────────────────────┴──────────┴──────────────┴──────────┴────────┘
```

That's it! Follow this guide column by column for each table. 🎯
