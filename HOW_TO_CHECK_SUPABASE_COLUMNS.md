# 📋 How to Check Columns in Supabase

Step-by-step guide to find your table columns and create the correct JSON.

---

## 🎯 Method 1: Check in Supabase Dashboard (Easiest)

### Step-by-Step:

1. **Go to Supabase Dashboard**
   - URL: https://supabase.com/dashboard
   - Login if needed

2. **Select Your Project**
   - Click on your project: `kkvepvlkgppzwapbbynh`

3. **Go to Table Editor**
   - **Click "Table Editor"** in the left sidebar
   - (It's usually the second or third option)

4. **Select Your Table**
   - **Click on `projects`** table from the list

5. **See the Columns**
   - At the top, you'll see **column headers** (like `id`, `title`, `created_at`, etc.)
   - These are your column names!

6. **Write Down All Column Names**
   - Look at each column header
   - Write them down or take a screenshot

**Example of what you'll see**:
```
| id | title | title_ar | slug | category | featured | display_order | created_at | updated_at |
```

---

## 🎯 Method 2: Use GET Request in Postman

### Step-by-Step:

1. **Open Postman**

2. **Use "GET All projects" request** (or create new GET request)

3. **Set it up**:
   - **Method**: `GET`
   - **URL**: `https://kkvepvlkgppzwapbbynh.supabase.co/rest/v1/projects?limit=1`
   - **Headers**:
     - `apikey`: `sb_publishable_TXDJdOMzyg5RYq3aEYf7JQ_HlukQAuB`
     - `Authorization`: `Bearer sb_publishable_TXDJdOMzyg5RYq3aEYf7JQ_HlukQAuB`

4. **Click "Send"**

5. **Look at the Response**
   - In the bottom panel, you'll see JSON response
   - The **keys** in the JSON are your column names!

**Example response**:
```json
[
  {
    "id": 1,
    "title": "Some Project",
    "title_ar": "مشروع",
    "slug": "some-project",
    "category": ["App Design"],
    "featured": true,
    "display_order": 1,
    "created_at": "2024-01-01T00:00:00Z",
    "updated_at": "2024-01-01T00:00:00Z"
  }
]
```

**Column names from this**: `id`, `title`, `title_ar`, `slug`, `category`, `featured`, `display_order`, `created_at`, `updated_at`

---

## 📋 What to Look For

### Common Column Types:

1. **Auto-generated** (don't include in POST):
   - `id` (usually auto-generated)
   - `created_at` (auto-generated)
   - `updated_at` (auto-generated)

2. **Required fields** (must include):
   - Fields that are NOT NULL and don't have defaults
   - Usually: `title`, `display_order`

3. **Optional fields** (can include):
   - Fields that are nullable or have defaults
   - Usually: `title_ar`, `slug`, `category`, `featured`

---

## 🎯 After Finding Your Columns

### Step 1: List Your Columns

Write down all columns you see, for example:
- `id` (auto, don't include)
- `title` ✅
- `title_ar` ✅
- `slug` ✅
- `category` ✅
- `featured` ✅
- `display_order` ✅
- `created_at` (auto, don't include)
- `updated_at` (auto, don't include)

### Step 2: Create JSON with Only Those Columns

**Example** (if you have the columns above):
```json
{
  "title": "New Project",
  "title_ar": "مشروع جديد",
  "slug": "new-project",
  "category": ["App Design"],
  "featured": false,
  "display_order": 1
}
```

**Note**: Don't include `id`, `created_at`, or `updated_at` - they're auto-generated!

---

## ✅ Quick Checklist

- [ ] Opened Supabase Dashboard
- [ ] Went to Table Editor
- [ ] Selected `projects` table
- [ ] Wrote down all column names
- [ ] Identified which are auto-generated (don't include)
- [ ] Created JSON with only existing columns
- [ ] Removed any columns that don't exist (like `description`)

---

## 🎯 Common Column Names for Projects Table

### Most Common Structure:

| Column Name | Type | Include in POST? |
|------------|------|------------------|
| `id` | uuid/int | ❌ No (auto-generated) |
| `title` | text | ✅ Yes |
| `title_ar` | text | ✅ Yes (optional) |
| `slug` | text | ✅ Yes (optional) |
| `description` | text | ❓ Check if exists |
| `description_ar` | text | ❓ Check if exists |
| `category` | text[] or jsonb | ✅ Yes (optional) |
| `image_url` | text | ✅ Yes (optional) |
| `featured` | boolean | ✅ Yes (optional) |
| `display_order` | integer | ✅ Yes |
| `created_at` | timestamptz | ❌ No (auto-generated) |
| `updated_at` | timestamptz | ❌ No (auto-generated) |

---

## 🧪 Test JSON Based on Common Columns

### If you have these columns:
- `title`
- `title_ar`
- `category`
- `featured`
- `display_order`

**Use this JSON**:
```json
{
  "title": "New Project",
  "title_ar": "مشروع جديد",
  "category": ["App Design"],
  "featured": false,
  "display_order": 1
}
```

### If you have these columns:
- `title`
- `slug`
- `display_order`

**Use this JSON**:
```json
{
  "title": "New Project",
  "slug": "new-project",
  "display_order": 1
}
```

### If you only have:
- `title`
- `display_order`

**Use this JSON**:
```json
{
  "title": "New Project",
  "display_order": 1
}
```

---

## 🆘 Tell Me Your Columns

After checking your Supabase table, **tell me**:
1. What columns do you see in the `projects` table?
2. List them all (or take a screenshot)

Then I'll give you the **exact JSON** that matches your table structure! 🎯

---

## 💡 Pro Tip

**Always check your table structure first** before creating POST requests!

1. Use GET request to see existing data
2. Or check Supabase Table Editor
3. Use only columns that actually exist
4. Don't include auto-generated columns (`id`, `created_at`, `updated_at`)

This will prevent 400 errors! ✅

