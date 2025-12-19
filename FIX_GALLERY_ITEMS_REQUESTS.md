# 📝 Fix Gallery Items Requests

Step-by-step guide to fix your `gallery_items` requests.

---

## 🎯 What to Fix

You have 4 requests in `gallery_items` folder:
- ✅ "GET All Gallery Items" → Keep as **GET** (correct)
- ✅ "GET Gallery Items by Project" → Keep as **GET** (correct)
- ❌ "GET Create Gallery Item" → Should be **POST**
- ✅ "GET Gallery Item" → Keep as **GET** (correct)

---

## ✅ Step 1: Check Your Table Name

First, check what your table is actually called in Supabase:

1. **Go to Supabase → Table Editor**
2. **Look for your gallery items table**
3. **What is the exact table name?**
   - Is it `gallery_items`?
   - Or `gallery-items`?
   - Or something else?

**Note**: Supabase table names usually use underscores, not hyphens!

---

## ✅ Step 2: Fix "GET Create Gallery Item" → Change to POST

### Setup:

1. **Click on "GET Create Gallery Item"**
2. **Change Method**: Select **POST** from dropdown
3. **Set URL**: 
   ```
   https://kkvepvlkgppzwapbbynh.supabase.co/rest/v1/gallery_items
   ```
   **Note**: Use `gallery_items` (with underscore) or check your actual table name

4. **Add Headers** (all checkboxes checked ✅):
   | Key | Value |
   |-----|-------|
   | `apikey` | `sb_publishable_TXDJdOMzyg5RYq3aEYf7JQ_HlukQAuB` |
   | `Authorization` | `Bearer sb_publishable_TXDJdOMzyg5RYq3aEYf7JQ_HlukQAuB` |
   | `Content-Type` | `application/json` |
   | `Prefer` | `return=representation` |

5. **Add Body** (raw → JSON):
   ```json
   {
     "project_id": 1,
     "image_url": "https://example.com/image.jpg",
     "alt_text": "Gallery image description"
   }
   ```

6. **Rename**: Right-click → Edit → Change to "POST Create Gallery Item"
7. **Save and test**

---

## ✅ Step 3: Check Your Gallery Items Table Columns

Before using the JSON above, check what columns you actually have:

### Option 1: Use GET Request
1. **Use "GET All Gallery Items" request**
2. **URL**: `https://kkvepvlkgppzwapbbynh.supabase.co/rest/v1/gallery_items?limit=1`
3. **Headers**: `apikey`, `Authorization`
4. **Click "Send"**
5. **Look at the response** - the keys are your column names!

### Option 2: Check in Supabase
1. **Go to Supabase → Table Editor**
2. **Click on `gallery_items` table** (or whatever it's called)
3. **See what columns you have**

---

## ✅ Step 4: Common Gallery Items Table Columns

Based on typical gallery items tables:

| Column Name | Type | Include in POST? |
|------------|------|------------------|
| `id` | uuid/int | ❌ No (auto-generated) |
| `project_id` | int8/uuid | ✅ Yes |
| `image_url` | text | ✅ Yes |
| `alt_text` | text | ✅ Yes (optional) |
| `title` | text | ✅ Yes (optional) |
| `title_ar` | text | ✅ Yes (optional) |
| `description` | text | ✅ Yes (optional) |
| `display_order` | int | ✅ Yes (optional) |
| `created_at` | timestamptz | ❌ No (auto-generated) |
| `updated_at` | timestamptz | ❌ No (auto-generated) |

**Note**: Your table might have different columns!

---

## ✅ Step 5: Try Minimal JSON First

Start with minimal JSON:

```json
{
  "project_id": 1,
  "image_url": "https://example.com/image.jpg"
}
```

**If this works**, add more fields one by one.

---

## ✅ Step 6: Complete JSON Examples

### Example 1: Minimal Gallery Item

```json
{
  "project_id": 1,
  "image_url": "https://example.com/gallery-image.jpg"
}
```

### Example 2: With Alt Text

```json
{
  "project_id": 1,
  "image_url": "https://example.com/gallery-image.jpg",
  "alt_text": "Gallery image description"
}
```

### Example 3: With Title and Description

```json
{
  "project_id": 1,
  "image_url": "https://example.com/gallery-image.jpg",
  "alt_text": "Gallery image description",
  "title": "Gallery Image Title",
  "title_ar": "عنوان صورة المعرض",
  "description": "Image description",
  "display_order": 1
}
```

---

## ✅ Step 7: Add RLS Policies for Gallery Items Table

For POST to work, add INSERT policy:

1. **Go to Supabase Dashboard**
2. **Authentication → Policies**
3. **Select `gallery_items` table** (or your actual table name)
4. **Click "Create policy"**
5. **Fill in**:
   - Name: `Enable insert for public`
   - Operation: `INSERT`
   - Applied to: `public`
   - Definition: `true`
6. **Save**

---

## ✅ Step 8: Verify GET Requests Work

### Test "GET All Gallery Items":

1. **Click on "GET All Gallery Items"**
2. **URL**: `https://kkvepvlkgppzwapbbynh.supabase.co/rest/v1/gallery_items`
3. **Headers**: `apikey`, `Authorization` (both checked ✅)
4. **Click "Send"**

**If it works**: Great! SELECT policy exists.

**If it gives 403/401**: Add SELECT policy:
- Name: `Enable select for public`
- Operation: `SELECT`
- Applied to: `public`
- Definition: `true`

### Test "GET Gallery Items by Project":

1. **Click on "GET Gallery Items by Project"**
2. **URL**: `https://kkvepvlkgppzwapbbynh.supabase.co/rest/v1/gallery_items?project_id=eq.1`
3. **Headers**: `apikey`, `Authorization` (both checked ✅)
4. **Click "Send"**

---

## 📋 Complete Setup Checklist

### Postman Requests:
- [ ] GET All Gallery Items → Test (should work)
- [ ] GET Gallery Items by Project → Test (should work)
- [ ] GET Gallery Item → Test (should work)
- [ ] POST Create Gallery Item → Fixed and tested
- [ ] Renamed to "POST Create Gallery Item" (optional)

### Supabase Policies:
- [ ] SELECT policy for `gallery_items` → For GET requests
- [ ] INSERT policy for `gallery_items` → For POST requests

---

## 🎯 Quick Reference

### Gallery Items Table - All Requests:

| Request | Method | URL | Headers | Body |
|---------|--------|-----|---------|------|
| GET All | GET | `/rest/v1/gallery_items` | apikey, Authorization | None |
| GET by Project | GET | `/rest/v1/gallery_items?project_id=eq.1` | apikey, Authorization | None |
| GET by ID | GET | `/rest/v1/gallery_items?id=eq.1` | apikey, Authorization | None |
| POST Create | POST | `/rest/v1/gallery_items` | apikey, Authorization, Content-Type | JSON |

**Table name is usually `gallery_items` (with underscore)!**

---

## 🎯 Summary

**What to do**:
1. Check your actual table name in Supabase
2. Fix "GET Create Gallery Item" → Change to POST
3. Set URL: `https://kkvepvlkgppzwapbbynh.supabase.co/rest/v1/gallery_items`
4. Add headers and body
5. Add INSERT policy in Supabase
6. Test everything

**You've got this!** 🚀

---

## 💡 Pro Tip

**Check your table structure first**:
1. Use GET request to see existing data
2. See what fields are returned
3. Use only those fields in your POST request

This prevents "column not found" errors! ✅

---

## 🆘 Need Help?

If you get errors:
- **400 Bad Request**: Check JSON syntax and column names
- **401 Unauthorized**: Check headers are checked ✅
- **403/RLS Error**: Add INSERT policy
- **404 Not Found**: Check table name (might be `gallery_items` not `gallery-items`)

**After checking your table columns, tell me what you see and I'll give you the exact JSON!** 🎯

