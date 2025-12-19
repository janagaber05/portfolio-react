# 🔧 Fix: "alt_text" Column Not Found in Gallery Items

The `gallery_items` table doesn't have an `alt_text` column. Let's check what columns you actually have and fix the JSON.

---

## ✅ Step 1: Check Your Gallery Items Table Columns

### Option 1: Use GET Request

1. **Use "GET All Gallery Items" request**
2. **URL**: `https://kkvepvlkgppzwapbbynh.supabase.co/rest/v1/gallery_items?limit=1`
3. **Headers**: `apikey`, `Authorization`
4. **Click "Send"**
5. **Look at the response** - the keys are your column names!

**Example response**:
```json
[
  {
    "id": 1,
    "project_id": 1,
    "image_url": "https://example.com/image.jpg"
  }
]
```

**Column names from this**: `id`, `project_id`, `image_url`

### Option 2: Check in Supabase

1. **Go to Supabase → Table Editor**
2. **Click on `gallery_items` table**
3. **See what columns you have**

---

## ✅ Step 2: Remove Invalid Columns from JSON

**Remove from your JSON**:
- ❌ `alt_text` (you don't have this column)
- ❌ Any other columns that don't exist

**Use only columns that exist** in your `gallery_items` table.

---

## ✅ Step 3: Try Minimal JSON First

Start with the most basic JSON:

```json
{
  "project_id": 1,
  "image_url": "https://example.com/image.jpg"
}
```

**If this works**, add more fields one by one.

---

## 🎯 Common Gallery Items Table Columns

Based on typical gallery items tables:

| Column Name | Type | Include in POST? |
|------------|------|------------------|
| `id` | uuid/int | ❌ No (auto-generated) |
| `project_id` | int8/uuid | ✅ Yes |
| `image_url` | text | ✅ Yes |
| `url` | text | ✅ Yes (if you have this instead of `image_url`) |
| `title` | text | ✅ Yes (optional) |
| `title_ar` | text | ✅ Yes (optional) |
| `description` | text | ✅ Yes (optional) |
| `display_order` | int | ✅ Yes (optional) |
| `created_at` | timestamptz | ❌ No (auto-generated) |
| `updated_at` | timestamptz | ❌ No (auto-generated) |

**Note**: Your table might not have `alt_text`!

---

## ✅ Step 4: Correct JSON Examples (Without alt_text)

### Minimal JSON (Most Likely to Work):

```json
{
  "project_id": 1,
  "image_url": "https://example.com/image.jpg"
}
```

### With Title (If You Have This Column):

```json
{
  "project_id": 1,
  "image_url": "https://example.com/image.jpg",
  "title": "Gallery Image Title"
}
```

### With Display Order (If You Have This Column):

```json
{
  "project_id": 1,
  "image_url": "https://example.com/image.jpg",
  "display_order": 1
}
```

### Complete JSON (If You Have All These Columns):

```json
{
  "project_id": 1,
  "image_url": "https://example.com/image.jpg",
  "title": "Gallery Image Title",
  "title_ar": "عنوان صورة المعرض",
  "description": "Image description",
  "display_order": 1
}
```

---

## 🎯 Quick Fix Steps

1. **Check your table columns** (use GET request or Supabase Table Editor)
2. **Remove `alt_text`** from your JSON ❌
3. **Use only columns that exist**
4. **Try minimal JSON first**:
   ```json
   {
     "project_id": 1,
     "image_url": "https://example.com/image.jpg"
   }
   ```
5. **If it works**, add more fields one by one

---

## 🆘 Tell Me Your Columns

**After checking your table, tell me**:
1. What columns do you see in the `gallery_items` table?
2. Or what does the GET request return?

Then I'll give you the **exact JSON** that matches your table! 🎯

---

## 💡 Pro Tip

**Always check table structure first!**

1. Use GET request to see existing data
2. See what fields are returned
3. Use only those fields in your POST request

This prevents "column not found" errors! ✅

---

## ✅ Quick Test

**Try this minimal JSON** (without `alt_text`):

```json
{
  "project_id": 1,
  "image_url": "https://example.com/image.jpg"
}
```

**Remove `alt_text` and any other fields that don't exist!**

---

## 🎉 After Fixing

Once you:
1. ✅ Remove `alt_text` from JSON
2. ✅ Use only columns that exist
3. ✅ Click "Send"

You should get **201 Created** with your new gallery item! 🚀

