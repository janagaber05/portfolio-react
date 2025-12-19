# Supabase Images & Storage Guide
## Where to Put Your Images and How to Use Them

---

## 📁 Storage Buckets Structure

You need to create 4 storage buckets in Supabase:

### 1. `project-images`
**For:** Project hero images, thumbnails, and cover images
- Hero images (large banner images)
- Thumbnail images (small preview images)
- Cover images for projects

### 2. `blog-images`
**For:** Blog post featured images
- Blog cover images
- Blog featured images

### 3. `gallery-images`
**For:** Project gallery/masonry images
- Multiple images for a project gallery
- Images used in Masonry component

### 4. `general-images`
**For:** Other portfolio images
- Logo images
- Background images
- Miscellaneous images

---

## 🎯 Where Each Image Type Goes

### Project Images

| Image Type | Storage Bucket | Database Column | Example |
|-----------|---------------|-----------------|---------|
| **Hero Image (EN)** | `project-images` | `projects.hero_image_url` | `/heroes/egy-air-hero.png` |
| **Hero Image (AR)** | `project-images` | `projects.hero_image_url_ar` | `/heroes/egy-air-hero-ar.png` |
| **Thumbnail (EN)** | `project-images` | `projects.thumbnail_image_url` | `/thumbnails/egy-air-thumb.png` |
| **Thumbnail (AR)** | `project-images` | `projects.thumbnail_image_url_ar` | `/thumbnails/egy-air-thumb-ar.png` |
| **Cover Image** | `project-images` | `projects.hero_image_url` | `/covers/egy-air-cover.png` |

### Blog Images

| Image Type | Storage Bucket | Database Column | Example |
|-----------|---------------|-----------------|---------|
| **Featured Image (EN)** | `blog-images` | `blog_posts.featured_image_url` | `/featured/blog-1-featured.png` |
| **Featured Image (AR)** | `blog-images` | `blog_posts.featured_image_url_ar` | `/featured/blog-1-featured-ar.png` |
| **Cover Image** | `blog-images` | `blog_posts.featured_image_url` | `/covers/blog-cover.png` |

### Gallery Images

| Image Type | Storage Bucket | Database Column | Example |
|-----------|---------------|-----------------|---------|
| **Gallery Item** | `gallery-images` | `gallery_items.image_url` | `/egy-air/gallery-1.png` |

---

## 📤 How to Upload Images to Supabase Storage

### Step 1: Create Storage Buckets

1. Go to **Storage** in Supabase Dashboard
2. Click **"New bucket"**
3. Create each bucket:
   - Name: `project-images` → Make it **Public** ✅
   - Name: `blog-images` → Make it **Public** ✅
   - Name: `gallery-images` → Make it **Public** ✅
   - Name: `general-images` → Make it **Public** ✅

### Step 2: Upload Your Images

#### Option A: Upload via Supabase Dashboard

1. Go to **Storage** → Click on a bucket (e.g., `project-images`)
2. Click **"Upload file"** or **"Upload folder"**
3. Create folders to organize:
   ```
   project-images/
     ├── heroes/
     ├── thumbnails/
     └── covers/
   
   blog-images/
     ├── featured/
     └── covers/
   
   gallery-images/
     └── {project-slug}/
   ```

4. Upload your images into the appropriate folders

#### Option B: Upload via Code (Later)

You can also upload programmatically using the React hooks (we'll set this up later).

### Step 3: Get the Public URL

After uploading, Supabase gives you a public URL like:
```
https://your-project.supabase.co/storage/v1/object/public/project-images/heroes/egy-air-hero.png
```

**OR** you can use just the path:
```
heroes/egy-air-hero.png
```

---

## 📋 Recommended Folder Structure

### In `project-images` bucket:

```
project-images/
├── heroes/
│   ├── egy-air-hero.png
│   ├── egy-air-hero-ar.png
│   ├── sandy-skin-hero.png
│   └── sonic-game-hero.png
│
├── thumbnails/
│   ├── egy-air-thumb.png
│   ├── egy-air-thumb-ar.png
│   ├── sandy-skin-thumb.png
│   └── sonic-game-thumb.png
│
└── covers/
    ├── egy-air-cover.png
    └── project-cover-2.png
```

### In `blog-images` bucket:

```
blog-images/
├── featured/
│   ├── blog-1-featured.png
│   ├── blog-1-featured-ar.png
│   ├── blog-2-featured.png
│   └── blog-3-featured.png
│
└── covers/
    └── blog-hero-cover.png
```

### In `gallery-images` bucket:

```
gallery-images/
├── egy-air/
│   ├── gallery-1.png
│   ├── gallery-2.png
│   ├── gallery-3.png
│   └── gallery-4.png
│
├── sandy-skin/
│   ├── gallery-1.png
│   └── gallery-2.png
│
└── sonic-game/
    └── gallery-1.png
```

### In `general-images` bucket:

```
general-images/
├── logo/
│   ├── logo-big.png
│   └── logo-small.png
│
├── backgrounds/
│   └── hero-bg.png
│
└── misc/
    └── us-working-together.png
```

---

## 💾 How to Store Image URLs in Database

### For Projects Table:

When you create a project row, fill in the image URL columns:

```
┌─────────────────────────────────────────────────────┐
│  Table: projects                                     │
├─────────────────────────────────────────────────────┤
│  slug: "egy-air"                                     │
│  title_en: "Egy Air"                                 │
│  hero_image_url: "heroes/egy-air-hero.png"         │
│  thumbnail_image_url: "thumbnails/egy-air-thumb.png"│
│  hero_image_url_ar: "heroes/egy-air-hero-ar.png"   │
│  ...                                                 │
└─────────────────────────────────────────────────────┘
```

**OR** use the full URL:
```
hero_image_url: "https://your-project.supabase.co/storage/v1/object/public/project-images/heroes/egy-air-hero.png"
```

### For Blog Posts Table:

```
┌─────────────────────────────────────────────────────┐
│  Table: blog_posts                                   │
├─────────────────────────────────────────────────────┤
│  slug: "designing-with-emotion"                     │
│  title_en: "Designing with Emotion"                  │
│  featured_image_url: "featured/blog-1-featured.png"│
│  featured_image_url_ar: "featured/blog-1-ar.png"  │
│  ...                                                 │
└─────────────────────────────────────────────────────┘
```

### For Gallery Items Table:

```
┌─────────────────────────────────────────────────────┐
│  Table: gallery_items                                │
├─────────────────────────────────────────────────────┤
│  project_id: (uuid of project)                       │
│  image_url: "egy-air/gallery-1.png"                 │
│  image_alt: "Egy Air Gallery Image 1"                │
│  display_order: 0                                    │
│  height: 600                                         │
│  ...                                                 │
└─────────────────────────────────────────────────────┘
```

---

## 🎨 Cover Images vs Hero Images

### Cover Image
- Usually the main banner/header image
- Large, eye-catching image
- Used at the top of pages
- **Store in:** `hero_image_url` column

### Hero Image
- Similar to cover image
- Main image for a project/blog
- **Store in:** `hero_image_url` or `featured_image_url`

### Thumbnail Image
- Small preview image
- Used in lists/grids
- **Store in:** `thumbnail_image_url` column

**Note:** You can use the same image for both cover and hero, or use different images.

---

## 📝 Step-by-Step: Adding Images to a Project

### Example: Adding images for "Egy Air" project

1. **Upload images to Storage:**
   - Go to `project-images` bucket
   - Upload to `heroes/egy-air-hero.png`
   - Upload to `thumbnails/egy-air-thumb.png`
   - Upload to `gallery-images/egy-air/gallery-1.png`

2. **Get the paths:**
   - Hero: `heroes/egy-air-hero.png`
   - Thumbnail: `thumbnails/egy-air-thumb.png`
   - Gallery: `egy-air/gallery-1.png`

3. **Add to database:**

   **In `projects` table:**
   ```
   hero_image_url: "heroes/egy-air-hero.png"
   thumbnail_image_url: "thumbnails/egy-air-thumb.png"
   ```

   **In `gallery_items` table:**
   ```
   project_id: (the UUID of your egy-air project)
   image_url: "egy-air/gallery-1.png"
   display_order: 0
   height: 600
   ```

---

## 🔗 Using Images in Your React App

The hooks will automatically handle image URLs. You can use:

```javascript
import { getPublicImageUrl } from '../lib/supabase'

// Get full public URL
const heroUrl = getPublicImageUrl('project-images', project.hero_image_url)
// Returns: https://your-project.supabase.co/storage/v1/object/public/project-images/heroes/egy-air-hero.png
```

Or if you stored the full URL, use it directly:
```javascript
<img src={project.hero_image_url} alt={project.title} />
```

---

## ✅ Quick Checklist

- [ ] Create 4 storage buckets (all public)
- [ ] Organize images into folders
- [ ] Upload all images to appropriate buckets
- [ ] Copy image paths or full URLs
- [ ] Add image URLs to database columns
- [ ] Test images load correctly

---

## 💡 Tips

1. **Use folders** to organize images by project/category
2. **Use descriptive names** like `egy-air-hero.png` not `img1.png`
3. **Store paths** (not full URLs) for easier management
4. **Keep images optimized** - compress before uploading
5. **Use consistent naming** - `project-slug-image-type.png`

---

## 🎯 Summary

| What | Where to Store | Database Column |
|------|---------------|-----------------|
| Project cover/hero | `project-images/heroes/` | `projects.hero_image_url` |
| Project thumbnail | `project-images/thumbnails/` | `projects.thumbnail_image_url` |
| Blog cover | `blog-images/featured/` | `blog_posts.featured_image_url` |
| Gallery images | `gallery-images/{project}/` | `gallery_items.image_url` |
| Other images | `general-images/` | (various) |

That's it! Upload your images to the buckets and reference them in your database! 🚀

