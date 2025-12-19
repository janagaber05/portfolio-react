# 🖼️ Add Image Column to Project Details Table

Simple guide to add an `image_url` column to your `project_details` table (just like `projects` table).

---

## 🎯 Why Add Image Column?

**Benefits:**
- ✅ Simple - just one column for the main image
- ✅ Consistent with `projects` table structure
- ✅ Easy to update via Dashboard or Postman
- ✅ No need for complex JSON structures

---

## 📋 Step 1: Add Column to Table

### Via Supabase Dashboard:

1. **Go to Table Editor**:
   - Open Supabase Dashboard
   - Click **"Table Editor"** (left sidebar)
   - Select **`project_details`** table

2. **Add New Column**:
   - Click **"Add column"** button
   - **Column name**: `image_url`
   - **Type**: Select `text` from dropdown
   - **Is Nullable**: ✅ Leave checked (allow null)
   - Click **"Save"**

3. **Done!** Your table now has an `image_url` column.

---

## 🎯 Step 2: Add Images to Rows

### Option 1: Via Supabase Dashboard

1. **Upload Image to Storage**:
   - Go to **Storage** → Create/select bucket (e.g., `project-images`)
   - Upload your image
   - Copy the **Public URL**

2. **Add URL to Row**:
   - Go to **Table Editor** → `project_details` table
   - Click on the row you want to update
   - Find `image_url` column
   - Paste the Public URL
   - Click **"Save"**

### Option 2: Via Postman

1. **Upload Image to Storage** (same as above)
2. **Update Row via Postman**:
   - **Method**: `PATCH`
   - **URL**: `https://kkvepvlkgppzwapbbynh.supabase.co/rest/v1/project_details?id=eq.1`
   - **Headers**:
     ```
     apikey: YOUR_SUPABASE_ANON_KEY
     Authorization: Bearer YOUR_SUPABASE_ANON_KEY
     Content-Type: application/json
     ```
   - **Body**:
     ```json
     {
       "image_url": "https://kkvepvlkgppzwapbbynh.supabase.co/storage/v1/object/public/project-images/your-image.jpg"
     }
     ```

---

## 📝 Example: Complete Row Structure

### Your `project_details` table should have:

| Column | Type | Example Value |
|--------|------|---------------|
| `id` | uuid/int8 | (auto-generated) |
| `project_id` | uuid/int8 | `1` or `a1b2c3d4...` |
| `hero_text_en` | text | "EgyAir Mobile App" |
| `hero_text_ar` | text | "تطبيق إيجي إير" |
| `description_en` | text | "Modern airline booking app..." |
| `description_ar` | text | "تطبيق حجز طيران حديث..." |
| `image_url` | text | `https://.../project-images/egyair.jpg` |
| `content_en` | jsonb/text | (optional) |
| `content_ar` | jsonb/text | (optional) |
| `display_order` | int4 | `0` |
| `created_at` | timestamptz | (auto-generated) |
| `updated_at` | timestamptz | (auto-generated) |

---

## 🎯 Quick Workflow

### For Each Project:

1. **Upload Image**:
   - Go to Storage → `project-images` bucket
   - Upload: `egyair-main.jpg`
   - Copy URL: `https://.../project-images/egyair-main.jpg`

2. **Add to Project Details**:
   - Go to Table Editor → `project_details`
   - Find row for EgyAir project
   - Paste URL in `image_url` column
   - Save

3. **Repeat** for all projects!

---

## ✅ Benefits of This Approach

### ✅ Simple Structure:
```
project_details table:
├── project_id
├── hero_text_en
├── hero_text_ar
├── description_en
├── description_ar
├── image_url ← Just one column!
└── content_en (optional)
```

### ✅ Easy to Use:
- One URL per project
- Easy to update
- Works with any image hosting (Supabase Storage, Cloudinary, etc.)

### ✅ Consistent:
- Same structure as `projects` table
- Easy to understand
- Simple queries

---

## 🎯 If You Need Multiple Images

If you need **multiple images** (gallery), you can:

### Option 1: Add Another Column
- Add `gallery_images` column (type: `jsonb`)
- Store array of URLs: `["url1", "url2", "url3"]`

### Option 2: Use JSON in Existing Column
- Keep `image_url` for main image
- Add `images` column (type: `jsonb`) for gallery

---

## 📝 Example: Adding Image to Project Details Row

### Via Dashboard:
1. Go to `project_details` table
2. Click on row (e.g., EgyAir project)
3. Find `image_url` column
4. Paste: `https://kkvepvlkgppzwapbbynh.supabase.co/storage/v1/object/public/project-images/egyair-main.jpg`
5. Click **"Save"**

### Via Postman:
```json
{
  "project_id": 1,
  "image_url": "https://kkvepvlkgppzwapbbynh.supabase.co/storage/v1/object/public/project-images/egyair-main.jpg"
}
```

---

## 🚀 Next Steps

1. ✅ Add `image_url` column to `project_details` table
2. ✅ Upload images to Supabase Storage
3. ✅ Add URLs to each project details row
4. ✅ Test images appear in your app

---

## 💡 Pro Tips

- **Naming**: Use consistent naming (e.g., `project-name-main.jpg`)
- **Organization**: Create folders in Storage (e.g., `projects/egyair/`, `projects/sonic/`)
- **Optimization**: Compress images before uploading
- **Testing**: Always test URLs in browser before adding to database

---

This is much simpler than complex JSON structures! 🎉

