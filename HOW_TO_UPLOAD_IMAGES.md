# How to Upload Images to Supabase Storage
## Step-by-Step Guide

---

## 📤 Step 1: Create Storage Buckets

### 1.1 Go to Storage

1. Open your Supabase Dashboard
2. Click **"Storage"** in the left sidebar (folder icon)

### 1.2 Create the Buckets

Click **"New bucket"** and create these 4 buckets:

#### Bucket 1: `project-images`
```
Bucket name: project-images
☑ Public bucket (CHECK THIS BOX - very important!)
File size limit: (leave empty or set to 5MB)
Allowed MIME types: (leave empty or type: image/*)
[Create bucket]
```

#### Bucket 2: `blog-images`
```
Bucket name: blog-images
☑ Public bucket (CHECK THIS BOX)
[Create bucket]
```

#### Bucket 3: `gallery-images`
```
Bucket name: gallery-images
☑ Public bucket (CHECK THIS BOX)
[Create bucket]
```

#### Bucket 4: `general-images`
```
Bucket name: general-images
☑ Public bucket (CHECK THIS BOX)
[Create bucket]
```

**Important:** Make sure **"Public bucket"** is checked for all buckets! ✅

---

## 📁 Step 2: Create Folders (Optional but Recommended)

### 2.1 In `project-images` bucket:

1. Click on **`project-images`** bucket
2. Click **"New folder"** or **"Create folder"**
3. Create these folders:
   - `heroes` (for cover/hero images)
   - `thumbnails` (for thumbnail images)
   - `covers` (for cover images)

### 2.2 In `blog-images` bucket:

1. Click on **`blog-images`** bucket
2. Create folder:
   - `featured` (for blog cover/featured images)

### 2.3 In `gallery-images` bucket:

1. Click on **`gallery-images`** bucket
2. Create folders for each project:
   - `egy-air`
   - `sandy-skin`
   - `sonic-game`
   - (or any project name)

---

## 🖼️ Step 3: Upload Your Cover Images

### 3.1 Upload Project Cover Images

1. Go to **Storage** → Click **`project-images`** bucket
2. Click on the **`heroes`** folder (or create it if you haven't)
3. Click **"Upload file"** button
4. Select your cover image file (e.g., `egy-air-hero.png`)
5. Wait for upload to complete
6. You'll see the file listed like: `heroes/egy-air-hero.png`

**Repeat for all your project cover images:**
- `heroes/egy-air-hero.png`
- `heroes/sandy-skin-hero.png`
- `heroes/sonic-game-hero.png`
- etc.

### 3.2 Upload Blog Cover Images

1. Go to **Storage** → Click **`blog-images`** bucket
2. Click on the **`featured`** folder
3. Click **"Upload file"**
4. Select your blog cover image (e.g., `blog-1-cover.png`)
5. Wait for upload
6. You'll see: `featured/blog-1-cover.png`

### 3.3 Upload Gallery Images

1. Go to **Storage** → Click **`gallery-images`** bucket
2. Click on a project folder (e.g., `egy-air`)
3. Click **"Upload file"**
4. Select multiple images (you can select multiple files at once)
5. Wait for all uploads to complete

---

## 🔗 Step 4: Get the Image URL/Path

After uploading, you need to copy the path or URL:

### Option A: Copy the Path (Recommended)

1. Click on the uploaded image file
2. You'll see the file details
3. Copy the **path** (e.g., `heroes/egy-air-hero.png`)

### Option B: Copy the Full URL

1. Click on the uploaded image file
2. Look for **"Public URL"** or **"URL"**
3. Copy the full URL (e.g., `https://xxxxx.supabase.co/storage/v1/object/public/project-images/heroes/egy-air-hero.png`)

---

## 💾 Step 5: Add Image URLs to Database

### 5.1 For Projects Table

1. Go to **Table Editor** → Click **`projects`** table
2. Click **"Insert row"** or edit an existing row
3. Fill in the image URL columns:

```
┌─────────────────────────────────────────────┐
│  Insert Row: projects                        │
├─────────────────────────────────────────────┤
│  slug: egy-air                               │
│  title_en: Egy Air                           │
│  hero_image_url: heroes/egy-air-hero.png    │
│  thumbnail_image_url: thumbnails/egy-air-   │
│                    thumb.png                 │
│  ...                                         │
└─────────────────────────────────────────────┘
```

**Use the path you copied** (e.g., `heroes/egy-air-hero.png`)

### 5.2 For Blog Posts Table

1. Go to **Table Editor** → Click **`blog_posts`** table
2. Click **"Insert row"**
3. Fill in:

```
┌─────────────────────────────────────────────┐
│  Insert Row: blog_posts                      │
├─────────────────────────────────────────────┤
│  slug: designing-with-emotion                │
│  title_en: Designing with Emotion            │
│  featured_image_url: featured/blog-1-cover.  │
│                    png                       │
│  ...                                         │
└─────────────────────────────────────────────┘
```

### 5.3 For Gallery Items Table

1. Go to **Table Editor** → Click **`gallery_items`** table
2. Click **"Insert row"**
3. Fill in:

```
┌─────────────────────────────────────────────┐
│  Insert Row: gallery_items                   │
├─────────────────────────────────────────────┤
│  project_id: (select the project UUID)      │
│  image_url: egy-air/gallery-1.png           │
│  image_alt: Egy Air Gallery Image 1          │
│  display_order: 0                            │
│  height: 600                                 │
│  ...                                         │
└─────────────────────────────────────────────┘
```

---

## 📋 Complete Example: Uploading Egy Air Cover Image

### Step-by-Step:

1. **Go to Storage** → `project-images` bucket
2. **Click on `heroes` folder** (or create it)
3. **Click "Upload file"**
4. **Select:** `egy-air-hero.png` from your computer
5. **Wait for upload** (you'll see a progress bar)
6. **Copy the path:** `heroes/egy-air-hero.png`
7. **Go to Table Editor** → `projects` table
8. **Insert/Edit row:**
   - `slug`: `egy-air`
   - `hero_image_url`: `heroes/egy-air-hero.png`
   - (fill other fields...)
9. **Save**

Done! ✅

---

## 🎯 Quick Upload Checklist

- [ ] Created 4 storage buckets (all public)
- [ ] Created folders (`heroes`, `featured`, etc.)
- [ ] Uploaded project cover images to `project-images/heroes/`
- [ ] Uploaded blog cover images to `blog-images/featured/`
- [ ] Uploaded gallery images to `gallery-images/{project-name}/`
- [ ] Copied image paths
- [ ] Added paths to database columns
- [ ] Tested images load correctly

---

## 💡 Tips for Uploading

### 1. **Upload Multiple Files at Once**
- You can select multiple files when clicking "Upload file"
- Hold `Ctrl` (Windows) or `Cmd` (Mac) to select multiple files

### 2. **Drag and Drop**
- Some Supabase interfaces support drag-and-drop
- Try dragging files directly into the folder

### 3. **Organize by Project**
- Create a folder for each project in `gallery-images`
- Example: `gallery-images/egy-air/`, `gallery-images/sandy-skin/`

### 4. **Use Descriptive Names**
- Good: `egy-air-hero.png`
- Bad: `img1.png`, `cover.jpg`

### 5. **Optimize Images First**
- Compress images before uploading (use tools like TinyPNG)
- This saves storage space and loads faster

---

## 🔍 How to Verify Images Are Public

1. After uploading, click on an image file
2. Look for **"Public URL"** - it should be visible
3. Copy the URL and paste it in a new browser tab
4. The image should load directly (if it's public)

If the image doesn't load:
- Check that the bucket is set to **Public**
- Go to bucket settings and enable **"Public bucket"**

---

## 🎨 Cover Image Best Practices

### For Project Covers:
- **Size:** 1200-2000px width recommended
- **Format:** PNG or JPG
- **Aspect Ratio:** 16:9 or 4:3 works well
- **File Size:** Keep under 500KB if possible

### For Blog Covers:
- **Size:** 1200px width recommended
- **Format:** PNG or JPG
- **Aspect Ratio:** 16:9
- **File Size:** Keep under 300KB if possible

---

## 🚨 Common Issues

### Issue: "Bucket is not public"
**Solution:** Go to bucket settings → Enable "Public bucket"

### Issue: "Image not loading"
**Solution:** 
- Check the path is correct in database
- Verify bucket is public
- Check file name has no special characters

### Issue: "Upload failed"
**Solution:**
- Check file size (may be too large)
- Check file format (should be image file)
- Try uploading one file at a time

---

## 📝 Summary

1. **Create buckets** → Make them public ✅
2. **Create folders** → Organize your images
3. **Upload images** → Drag and drop or click upload
4. **Copy paths** → Get the file path
5. **Add to database** → Paste path in image URL columns

That's it! Your images are now in Supabase and ready to use! 🎉

---

## 🎬 Next Steps

After uploading images:
1. Add image paths to your database rows
2. Test images load in your React app
3. Use the `getPublicImageUrl()` helper function to display them

Your cover images and all other images are now stored in Supabase Storage! 🚀

