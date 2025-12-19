# 🗄️ Complete Supabase Setup Guide

Step-by-step guide to set up all your Supabase tables before adding data.

---

## 📋 Tables You Need

1. **`home_content`** - For home, category, and about page content
2. **`skills`** - For technical skills
3. **`experience`** - For education/work experience
4. **`projects`** - For project listings (optional, but recommended)
5. **`blog_posts`** - For blog posts (optional, but recommended)

---

## 🎯 Table 1: `home_content`

### Step 1: Create Table
1. Go to Supabase Dashboard
2. Click **"Table Editor"** (left sidebar)
3. Click **"New table"** button
4. Table name: `home_content`
5. Click **"Create table"**

### Step 2: Add Columns

Click **"Add column"** for each column below:

| Column Name | Type | Default | Nullable | Primary Key |
|------------|------|---------|---------|-------------|
| `id` | `uuid` | `gen_random_uuid()` | ❌ No | ✅ Yes |
| `section` | `text` | - | ❌ No | ❌ No |
| `key` | `text` | - | ❌ No | ❌ No |
| `content_en` | `text` | - | ✅ Yes | ❌ No |
| `content_ar` | `text` | - | ✅ Yes | ❌ No |
| `metadata` | `jsonb` | - | ✅ Yes | ❌ No |
| `display_order` | `int4` | - | ❌ No | ❌ No |
| `created_at` | `timestamptz` | `now()` | ❌ No | ❌ No |
| `updated_at` | `timestamptz` | `now()` | ❌ No | ❌ No |

### Step 3: Add Constraints
1. Click on the table name `home_content`
2. Go to **"Constraints"** tab
3. Add unique constraint:
   - Name: `home_content_section_key_unique`
   - Type: `UNIQUE`
   - Columns: `section`, `key`
   - This ensures no duplicate keys per section

### Step 4: Enable RLS (Row Level Security)
1. Go to **"Authentication"** → **"Policies"**
2. Find `home_content` table
3. Click **"Enable RLS"** (if not already enabled)
4. Add policy:
   - **Policy name**: `Allow public read`
   - **Allowed operation**: `SELECT`
   - **Target roles**: `public`
   - **USING expression**: `true`
   - Click **"Save"**

---

## 🎯 Table 2: `skills`

### Step 1: Create Table
1. Click **"New table"**
2. Table name: `skills`
3. Click **"Create table"**

### Step 2: Add Columns

| Column Name | Type | Default | Nullable | Primary Key |
|------------|------|---------|---------|-------------|
| `id` | `uuid` | `gen_random_uuid()` | ❌ No | ✅ Yes |
| `name` | `text` | - | ❌ No | ❌ No |
| `name_ar` | `text` | - | ✅ Yes | ❌ No |
| `icon_type` | `text` | - | ✅ Yes | ❌ No |
| `short_name` | `text` | - | ✅ Yes | ❌ No |
| `category` | `text` | - | ✅ Yes | ❌ No |
| `proficiency` | `int4` | - | ✅ Yes | ❌ No |
| `display_order` | `int4` | - | ❌ No | ❌ No |
| `created_at` | `timestamptz` | `now()` | ❌ No | ❌ No |
| `updated_at` | `timestamptz` | `now()` | ❌ No | ❌ No |

### Step 3: Enable RLS
1. Go to **"Authentication"** → **"Policies"**
2. Find `skills` table
3. Click **"Enable RLS"**
4. Add policy:
   - **Policy name**: `Allow public read`
   - **Allowed operation**: `SELECT`
   - **Target roles**: `public`
   - **USING expression**: `true`
   - Click **"Save"**

---

## 🎯 Table 3: `experience`

### Step 1: Create Table
1. Click **"New table"**
2. Table name: `experience`
3. Click **"Create table"**

### Step 2: Add Columns

| Column Name | Type | Default | Nullable | Primary Key |
|------------|------|---------|---------|-------------|
| `id` | `uuid` | `gen_random_uuid()` | ❌ No | ✅ Yes |
| `type` | `text` | - | ❌ No | ❌ No |
| `start_year` | `text` | - | ❌ No | ❌ No |
| `end_year` | `text` | - | ✅ Yes | ❌ No |
| `institution` | `text` | - | ❌ No | ❌ No |
| `title` | `text` | - | ❌ No | ❌ No |
| `description` | `text` | - | ✅ Yes | ❌ No |
| `display_order` | `int4` | - | ❌ No | ❌ No |
| `created_at` | `timestamptz` | `now()` | ❌ No | ❌ No |
| `updated_at` | `timestamptz` | `now()` | ❌ No | ❌ No |

**Note**: Using `text` for `start_year` and `end_year` to allow values like "2024", "2025", "Present", etc.

### Step 3: Enable RLS
1. Go to **"Authentication"** → **"Policies"**
2. Find `experience` table
3. Click **"Enable RLS"**
4. Add policy:
   - **Policy name**: `Allow public read`
   - **Allowed operation**: `SELECT`
   - **Target roles**: `public`
   - **USING expression**: `true`
   - Click **"Save"**

---

## 🎯 Table 4: `projects` (Optional but Recommended)

### Step 1: Create Table
1. Click **"New table"**
2. Table name: `projects`
3. Click **"Create table"**

### Step 2: Add Columns

| Column Name | Type | Default | Nullable | Primary Key |
|------------|------|---------|---------|-------------|
| `id` | `int8` or `uuid` | - | ❌ No | ✅ Yes |
| `title` | `text` | - | ❌ No | ❌ No |
| `title_ar` | `text` | - | ✅ Yes | ❌ No |
| `description` | `text` | - | ✅ Yes | ❌ No |
| `description_ar` | `text` | - | ✅ Yes | ❌ No |
| `category` | `jsonb` | - | ✅ Yes | ❌ No |
| `image_url` | `text` | - | ✅ Yes | ❌ No |
| `project_url` | `text` | - | ✅ Yes | ❌ No |
| `slug` | `text` | - | ✅ Yes | ❌ No |
| `featured` | `bool` | `false` | ❌ No | ❌ No |
| `display_order` | `int4` | - | ❌ No | ❌ No |
| `created_at` | `timestamptz` | `now()` | ❌ No | ❌ No |
| `updated_at` | `timestamptz` | `now()` | ❌ No | ❌ No |

**Note**: Use `int8` for `id` if you prefer integer IDs, or `uuid` for UUIDs.

### Step 3: Enable RLS
1. Go to **"Authentication"** → **"Policies"**
2. Find `projects` table
3. Click **"Enable RLS"**
4. Add policy:
   - **Policy name**: `Allow public read`
   - **Allowed operation**: `SELECT`
   - **Target roles**: `public`
   - **USING expression**: `true`
   - Click **"Save"**

---

## 🎯 Table 5: `blog_posts` (Optional but Recommended)

### Step 1: Create Table
1. Click **"New table"**
2. Table name: `blog_posts`
3. Click **"Create table"**

### Step 2: Add Columns

| Column Name | Type | Default | Nullable | Primary Key |
|------------|------|---------|---------|-------------|
| `id` | `uuid` | `gen_random_uuid()` | ❌ No | ✅ Yes |
| `title` | `text` | - | ❌ No | ❌ No |
| `title_ar` | `text` | - | ✅ Yes | ❌ No |
| `slug` | `text` | - | ❌ No | ❌ No |
| `excerpt` | `text` | - | ✅ Yes | ❌ No |
| `excerpt_ar` | `text` | - | ✅ Yes | ❌ No |
| `content` | `text` | - | ✅ Yes | ❌ No |
| `content_ar` | `text` | - | ✅ Yes | ❌ No |
| `image_url` | `text` | - | ✅ Yes | ❌ No |
| `published` | `bool` | `false` | ❌ No | ❌ No |
| `published_at` | `timestamptz` | - | ✅ Yes | ❌ No |
| `display_order` | `int4` | - | ❌ No | ❌ No |
| `created_at` | `timestamptz` | `now()` | ❌ No | ❌ No |
| `updated_at` | `timestamptz` | `now()` | ❌ No | ❌ No |

### Step 3: Add Unique Constraint
1. Go to **"Constraints"** tab
2. Add unique constraint:
   - Name: `blog_posts_slug_unique`
   - Type: `UNIQUE`
   - Columns: `slug`

### Step 4: Enable RLS
1. Go to **"Authentication"** → **"Policies"**
2. Find `blog_posts` table
3. Click **"Enable RLS"**
4. Add policy:
   - **Policy name**: `Allow public read`
   - **Allowed operation**: `SELECT`
   - **Target roles**: `public`
   - **USING expression**: `true`
   - Click **"Save"**

---

## ✅ Setup Checklist

### Required Tables (Minimum):
- [ ] `home_content` table created
- [ ] All columns added to `home_content`
- [ ] Unique constraint added (`section`, `key`)
- [ ] RLS enabled for `home_content`
- [ ] Public read policy added for `home_content`

- [ ] `skills` table created
- [ ] All columns added to `skills`
- [ ] RLS enabled for `skills`
- [ ] Public read policy added for `skills`

- [ ] `experience` table created
- [ ] All columns added to `experience`
- [ ] RLS enabled for `experience`
- [ ] Public read policy added for `experience`

### Optional Tables:
- [ ] `projects` table created (if needed)
- [ ] `blog_posts` table created (if needed)

---

## 🐛 Common Issues & Fixes

### Issue: "Column type not found"
**Fix**: Make sure you're using the correct type names:
- `text` (not `string` or `varchar`)
- `int4` (not `integer` or `int`)
- `uuid` (not `guid`)
- `jsonb` (not `json`)
- `timestamptz` (not `timestamp` or `datetime`)
- `bool` (not `boolean`)

### Issue: "Default value error"
**Fix**: 
- For `uuid`: Use `gen_random_uuid()`
- For `timestamptz`: Use `now()`
- Leave other columns without defaults

### Issue: "RLS policy not working"
**Fix**:
1. Make sure RLS is enabled
2. Check policy USING expression is `true`
3. Verify target role is `public`
4. Test with a GET request in Postman

### Issue: "Cannot insert - violates unique constraint"
**Fix**: This is normal! It means the constraint is working. Make sure you're not trying to insert duplicate `section` + `key` combinations.

---

## 🚀 After Setup

Once all tables are created:

1. **Verify Tables**:
   - Go to Table Editor
   - You should see all your tables listed
   - Click on each table to verify columns

2. **Test RLS**:
   - Try a GET request in Postman
   - Should return empty array `[]` (no data yet)
   - Should NOT return an error

3. **Ready to Add Data**:
   - Now you can use the Postman guides to add rows
   - Start with `home_content` table
   - Then `skills` and `experience`

---

## 📝 Quick Reference: Column Types

- **`uuid`**: Unique identifier (auto-generated)
- **`text`**: Text string (unlimited length)
- **`int4`**: Integer (32-bit)
- **`int8`**: Big integer (64-bit) - use for project IDs if needed
- **`jsonb`**: JSON data (binary format, faster)
- **`bool`**: Boolean (true/false)
- **`timestamptz`**: Timestamp with timezone

---

## 🎯 Next Steps

After completing setup:

1. ✅ All tables created
2. ✅ All columns added
3. ✅ RLS policies set
4. 📝 Ready to add data via Postman
5. 📝 Use `ALL_SECTIONS_POSTMAN_DATA.md` guide

Good luck! 🚀

