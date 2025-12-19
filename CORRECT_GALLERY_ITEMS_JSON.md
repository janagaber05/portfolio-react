# ✅ Correct JSON for Your Gallery Items Table

Based on your actual table columns, here's the exact JSON to use.

---

## 📋 Your Gallery Items Table Columns

From your table, I can see you have:

### Main Columns:
- `id` (int8) - ❌ **Don't include** (auto-generated)
- `created_at` (timestamptz) - ❌ **Don't include** (auto-generated)
- `project_id` (uuid) - ✅ **Include**
- `image_url` (text) - ✅ **Include**
- `image_alt` (text) - ✅ **Include** (not `alt_text`!)
- `display_order` (int4) - ✅ **Include** (optional)
- `height` (int4) - ✅ **Include** (optional)

**Important Note**: 
- ✅ Use `image_alt` (not `alt_text`)
- ✅ `project_id` is `uuid` type (not int8)

---

## ✅ Correct JSON for POST Request

### Minimal JSON (Required Fields):

```json
{
  "project_id": "00000000-0000-0000-0000-000000000001",
  "image_url": "https://example.com/image.jpg"
}
```

**Note**: `project_id` is UUID, so use a UUID string (or the actual project UUID from your projects table)

### Complete JSON (With All Fields):

```json
{
  "project_id": "00000000-0000-0000-0000-000000000001",
  "image_url": "https://example.com/image.jpg",
  "image_alt": "Gallery image description",
  "display_order": 1,
  "height": 500
}
```

### Simple JSON (Recommended):

```json
{
  "project_id": "00000000-0000-0000-0000-000000000001",
  "image_url": "https://example.com/image.jpg",
  "image_alt": "Gallery image description",
  "display_order": 1
}
```

---

## 🎯 Use This in Postman

### In Your POST Request Body:

1. **Click "Body" tab**
2. **Select "raw" → "JSON"**
3. **Paste this JSON**:

```json
{
  "project_id": "00000000-0000-0000-0000-000000000001",
  "image_url": "https://example.com/image.jpg",
  "image_alt": "Gallery image description",
  "display_order": 1
}
```

4. **Click "Send"**

**This should work!** ✅

---

## ⚠️ Important: Get the Correct project_id

Since `project_id` is UUID type, you need to use an actual UUID from your `projects` table:

### Option 1: Get from Projects Table

1. **Use "GET All projects" request**
2. **Click "Send"**
3. **Look at the response** - find the `id` of a project
4. **Use that UUID** in your gallery_items POST request

### Option 2: Use from Supabase

1. **Go to Supabase → Table Editor → projects**
2. **See the `id` column** (it's a UUID)
3. **Copy that UUID**
4. **Use it** in your POST request

---

## 📋 Examples Based on Your Columns

### Example 1: Minimal Gallery Item

```json
{
  "project_id": "550e8400-e29b-41d4-a716-446655440000",
  "image_url": "https://example.com/gallery-image.jpg"
}
```

### Example 2: With Image Alt

```json
{
  "project_id": "550e8400-e29b-41d4-a716-446655440000",
  "image_url": "https://example.com/gallery-image.jpg",
  "image_alt": "Project gallery image"
}
```

### Example 3: Complete Gallery Item

```json
{
  "project_id": "550e8400-e29b-41d4-a716-446655440000",
  "image_url": "https://example.com/gallery-image.jpg",
  "image_alt": "Project gallery image description",
  "display_order": 1,
  "height": 500
}
```

---

## ✅ Quick Reference

### Fields to Include:
- ✅ `project_id` (uuid) - required - Use actual UUID from projects table
- ✅ `image_url` (text) - required
- ✅ `image_alt` (text) - optional (not `alt_text`!)
- ✅ `display_order` (int4) - optional
- ✅ `height` (int4) - optional

### Fields to NOT Include:
- ❌ `id` (auto-generated)
- ❌ `created_at` (auto-generated)
- ❌ `alt_text` (doesn't exist - use `image_alt`!)

---

## 🎯 Key Differences

**Wrong** (what you might have tried):
```json
{
  "project_id": 1,  ❌ Wrong (it's UUID, not int)
  "alt_text": "..."  ❌ Wrong column name
}
```

**Correct** (what you should use):
```json
{
  "project_id": "550e8400-e29b-41d4-a716-446655440000",  ✅ UUID string
  "image_alt": "..."  ✅ Correct column name
}
```

---

## 🎯 Summary

**Your POST request should have**:

1. **Method**: `POST`
2. **URL**: `https://kkvepvlkgppzwapbbynh.supabase.co/rest/v1/gallery_items`
3. **Headers**: 
   - `apikey`: `sb_publishable_TXDJdOMzyg5RYq3aEYf7JQ_HlukQAuB`
   - `Authorization`: `Bearer sb_publishable_TXDJdOMzyg5RYq3aEYf7JQ_HlukQAuB`
   - `Content-Type`: `application/json`
4. **Body** (raw JSON):
```json
{
  "project_id": "550e8400-e29b-41d4-a716-446655440000",
  "image_url": "https://example.com/image.jpg",
  "image_alt": "Gallery image description",
  "display_order": 1
}
```

**Important**: 
- Use `image_alt` (not `alt_text`)
- Use UUID string for `project_id` (get it from projects table)

**This should work now!** 🚀

---

## 💡 Pro Tip

**Get project_id UUID first**:
1. Use GET request on projects table
2. Find a project `id` (it's a UUID)
3. Use that UUID in your gallery_items POST request

**Example**: If a project has `id: "550e8400-e29b-41d4-a716-446655440000"`, use that in your POST!

---

## 🎉 After Fixing

Once you:
1. ✅ Use `image_alt` (not `alt_text`)
2. ✅ Use UUID for `project_id` (get from projects table)
3. ✅ Click "Send"

You should get **201 Created** with your new gallery item! 🚀

