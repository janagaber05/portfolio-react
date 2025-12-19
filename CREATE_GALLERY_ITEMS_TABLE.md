# Create Gallery Items Table - Step by Step
## Next Table After Contact Submissions

---

## 🎯 Table: `gallery_items`

**Total Columns:** 8 columns

**Has Foreign Key:** Needs `projects` table (links to projects)

**Purpose:** Stores gallery images for projects (used in Masonry component)

---

## 📝 Step 1: Create the Table

1. Go to **Table Editor** in Supabase Dashboard
2. Click **"New table"** button
3. Table name: `gallery_items`
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
Is nullable: ✅ Yes (checked)
```

**Important:** After creating this column, add Foreign Key:
1. Click on `project_id` column
2. Scroll to "Foreign key relationship" section
3. Click "Add relationship" or "Add foreign key"
4. Foreign table: `projects`
5. Foreign column: `id`
6. On delete: `Cascade`
7. Save

### Column 3: `image_url`
```
Column name: image_url
Type: text
Default value: (leave empty)
Is nullable: ❌ No (unchecked)
```

### Column 4: `image_alt`
```
Column name: image_alt
Type: text
Default value: (leave empty)
Is nullable: ✅ Yes (checked)
```

### Column 5: `display_order`
```
Column name: display_order
Type: int4
Default value: 0
Is nullable: ✅ Yes (checked)
```

### Column 6: `height`
```
Column name: height
Type: int4
Default value: (leave empty)
Is nullable: ✅ Yes (checked)
```

### Column 7: `created_at`
```
Column name: created_at
Type: timestamptz
Default value: now()
Is nullable: ❌ No (unchecked)
```

### Column 8: `updated_at`
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
│                    TABLE: gallery_items                         │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  ┌──────────────────────┬──────────────┬──────────────┬───────┐ │
│  │ Column Name           │ Type         │ Default      │ Null?│ │
│  ├──────────────────────┼──────────────┼──────────────┼───────┤ │
│  │ id                    │ uuid         │ gen_random_  │ ❌ No│ │
│  │                       │              │ uuid()       │       │ │
│  ├──────────────────────┼──────────────┼──────────────┼───────┤ │
│  │ project_id            │ uuid         │ (empty)      │ ✅ Yes│ │
│  │                       │              │              │       │ │
│  │                       │ 🔗 Foreign Key → projects.id        │ │
│  │                       │    On Delete: CASCADE               │ │
│  ├──────────────────────┼──────────────┼──────────────┼───────┤ │
│  │ image_url             │ text         │ (empty)      │ ❌ No│ │
│  ├──────────────────────┼──────────────┼──────────────┼───────┤ │
│  │ image_alt             │ text         │ (empty)      │ ✅ Yes│ │
│  ├──────────────────────┼──────────────┼──────────────┼───────┤ │
│  │ display_order         │ int4         │ 0            │ ✅ Yes│ │
│  ├──────────────────────┼──────────────┼──────────────┼───────┤ │
│  │ height                │ int4         │ (empty)      │ ✅ Yes│ │
│  ├──────────────────────┼──────────────┼──────────────┼───────┤ │
│  │ created_at            │ timestamptz  │ now()        │ ❌ No│ │
│  ├──────────────────────┼──────────────┼──────────────┼───────┤ │
│  │ updated_at            │ timestamptz  │ now()        │ ❌ No│ │
│  └──────────────────────┴──────────────┴──────────────┴───────┘ │
│                                                                  │
│  🔑 Primary Key: id                                              │
│  ✅ Unique: id                                                   │
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

**Visual:**
```
┌─────────────────────────────────────────────┐
│ Foreign Key Relationship                     │
├─────────────────────────────────────────────┤
│ Foreign table: [projects ▼]                   │
│ Foreign column: [id ▼]                       │
│ On delete: [Cascade ▼]                       │
│                                              │
│ [Save]                                       │
└─────────────────────────────────────────────┘
```

---

## ✅ Step-by-Step Checklist

### Create Table:
- [ ] Go to Table Editor
- [ ] Click "New table"
- [ ] Name: `gallery_items`
- [ ] Save

### Add Columns (8 total):
- [ ] `id` - uuid, primary key, unique
- [ ] `project_id` - uuid, nullable
  - [ ] Add foreign key: `projects.id` (CASCADE)
- [ ] `image_url` - text, NOT nullable
- [ ] `image_alt` - text, nullable
- [ ] `display_order` - int4, default: 0, nullable
- [ ] `height` - int4, nullable
- [ ] `created_at` - timestamptz, default: now()
- [ ] `updated_at` - timestamptz, default: now()

### Enable RLS:
- [ ] Click on `gallery_items` table
- [ ] Click "..." menu
- [ ] Click "Enable RLS"

### Add RLS Policies:
- [ ] Policy 1: "Public can view published gallery items"
  - Operation: SELECT
  - Roles: public
  - USING: `EXISTS (SELECT 1 FROM projects WHERE projects.id = gallery_items.project_id AND projects.is_published = true)`
- [ ] Policy 2: "Admins can manage gallery items"
  - Operation: ALL
  - Roles: authenticated
  - USING: `(auth.jwt() ->> 'user_metadata')::jsonb ->> 'role' = 'admin'`

---

## 📝 Example: Adding Gallery Items

After creating the table, you can add gallery images like this:

### For Egy Air Project:

```
project_id: (select the UUID of your Egy Air project from projects table)
image_url: "gallery-images/egy-air/gallery-1.png"
image_alt: "Egy Air Gallery Image 1"
display_order: 0
height: 600
```

### For Multiple Images:

```
Row 1:
project_id: (Egy Air UUID)
image_url: "gallery-images/egy-air/gallery-1.png"
image_alt: "Egy Air Image 1"
display_order: 0
height: 600

Row 2:
project_id: (Egy Air UUID - same project)
image_url: "gallery-images/egy-air/gallery-2.png"
image_alt: "Egy Air Image 2"
display_order: 1
height: 500

Row 3:
project_id: (Egy Air UUID - same project)
image_url: "gallery-images/egy-air/gallery-3.png"
image_alt: "Egy Air Image 3"
display_order: 2
height: 550
```

---

## 🎯 How to Get Project ID (UUID)

### When Adding Gallery Items:

1. **Go to `projects` table**
2. **Find your project** (e.g., "Egy Air")
3. **Copy the `id` value** (it's a UUID like: `a1b2c3d4-e5f6-7890-abcd-ef1234567890`)
4. **Use that UUID** in the `project_id` column of `gallery_items`

**Example:**
```
In projects table:
Egy Air project has id: "550e8400-e29b-41d4-a716-446655440000"

In gallery_items table:
project_id: "550e8400-e29b-41d4-a716-446655440000"
image_url: "gallery-images/egy-air/gallery-1.png"
```

---

## 📋 Quick Summary

**Table Name:** `gallery_items`

**Total Columns:** 8

**Required Columns:**
- `id` (primary key)
- `image_url` (required)
- `project_id` (links to projects table)
- `created_at` (auto)
- `updated_at` (auto)

**Optional Columns:**
- `image_alt` (alt text)
- `display_order` (sort order)
- `height` (for masonry layout)

**Foreign Key:**
- `project_id` → `projects.id` (CASCADE on delete)

---

## 🚀 After Creating This Table

Once `gallery_items` is created:
1. ✅ You can add gallery images for each project
2. ✅ Link images to projects using `project_id`
3. ✅ Next (and last) table: `project_details` (for detailed project pages)

---

## 💡 Important Notes

1. **Foreign Key Required:** This table needs the `projects` table to exist first
2. **Project ID:** You need to copy the UUID from `projects` table
3. **Multiple Images:** You can add multiple rows for the same project (different `display_order`)
4. **Height:** Used for Masonry layout (e.g., 400, 500, 600)

**This table links gallery images to projects!** 🎯

