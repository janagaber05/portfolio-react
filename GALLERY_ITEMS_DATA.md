# Gallery Items Data - What to Write in Each Row
## Complete Guide with Examples

---

## 📊 How Many Rows Do You Need?

### One Row = One Gallery Image

**For each project, you can have multiple gallery images:**
- Egy Air project → 5-10 gallery images (5-10 rows)
- Sonic Game project → 3-8 gallery images (3-8 rows)
- Each project → As many images as you want

**Total rows:** Depends on how many gallery images you have per project

**Example:**
- 9 projects × 5 images each = 45 rows total
- Or more/less depending on your images

---

## 📝 What to Write in Each Row

### For Each Gallery Image Row:

```
┌─────────────────────────────────────────────────────────────────┐
│                    ROW: Gallery Image                           │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  Column Name          │ Value to Write                          │
├───────────────────────┼─────────────────────────────────────────┤
│  id                   │ (AUTO - leave empty)                    │
│  project_id           │ (UUID from projects table)               │
│  image_url            │ gallery-images/egy-air/gallery-1.png     │
│  image_alt            │ Egy Air Gallery Image 1                 │
│  display_order        │ 0                                        │
│  height               │ 600                                      │
│  created_at           │ (AUTO - leave empty)                      │
│  updated_at           │ (AUTO - leave empty)                     │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

---

## 🎯 Complete Examples for Each Project

### PROJECT: Egy Air

**How to get project_id:**
1. Go to `projects` table
2. Find "Egy Air" row
3. Copy the `id` value (UUID)
4. Use that UUID for all Egy Air gallery items

**Example Rows (5-8 images):**

#### Row 1: Egy Air Gallery Image 1
```
project_id: (paste UUID from Egy Air project)
image_url: gallery-images/egy-air/gallery-1.png
image_alt: Egy Air Gallery Image 1
display_order: 0
height: 600
```

#### Row 2: Egy Air Gallery Image 2
```
project_id: (same UUID as Row 1)
image_url: gallery-images/egy-air/gallery-2.png
image_alt: Egy Air Gallery Image 2
display_order: 1
height: 500
```

#### Row 3: Egy Air Gallery Image 3
```
project_id: (same UUID as Row 1)
image_url: gallery-images/egy-air/gallery-3.png
image_alt: Egy Air Gallery Image 3
display_order: 2
height: 550
```

#### Row 4: Egy Air Gallery Image 4
```
project_id: (same UUID as Row 1)
image_url: gallery-images/egy-air/gallery-4.png
image_alt: Egy Air Gallery Image 4
display_order: 3
height: 450
```

#### Row 5: Egy Air Gallery Image 5
```
project_id: (same UUID as Row 1)
image_url: gallery-images/egy-air/gallery-5.png
image_alt: Egy Air Gallery Image 5
display_order: 4
height: 600
```

**Total for Egy Air: 5 rows** (or however many images you have)

---

### PROJECT: Sonic Game

**Example Rows (3-5 images):**

#### Row 1: Sonic Game Gallery Image 1
```
project_id: (paste UUID from Sonic Game project)
image_url: gallery-images/sonic-game/gallery-1.png
image_alt: Sonic Game Gallery Image 1
display_order: 0
height: 600
```

#### Row 2: Sonic Game Gallery Image 2
```
project_id: (same UUID as Row 1)
image_url: gallery-images/sonic-game/gallery-2.png
image_alt: Sonic Game Gallery Image 2
display_order: 1
height: 500
```

#### Row 3: Sonic Game Gallery Image 3
```
project_id: (same UUID as Row 1)
image_url: gallery-images/sonic-game/gallery-3.png
image_alt: Sonic Game Gallery Image 3
display_order: 2
height: 550
```

**Total for Sonic Game: 3 rows**

---

### PROJECT: Freezy Bite

**Example Rows (2-4 images):**

#### Row 1: Freezy Bite Gallery Image 1
```
project_id: (paste UUID from Freezy Bite project)
image_url: gallery-images/freezy-bite/gallery-1.png
image_alt: Freezy Bite Gallery Image 1
display_order: 0
height: 600
```

#### Row 2: Freezy Bite Gallery Image 2
```
project_id: (same UUID as Row 1)
image_url: gallery-images/freezy-bite/gallery-2.png
image_alt: Freezy Bite Gallery Image 2
display_order: 1
height: 500
```

**Total for Freezy Bite: 2 rows**

---

## 📋 Column-by-Column: What to Write

### Column: `id`
**What to write:** (Leave empty - auto-generated)
- Supabase fills this automatically
- Don't touch it

---

### Column: `project_id` ⭐ IMPORTANT
**What to write:** UUID from `projects` table

**How to get it:**
1. Go to `projects` table
2. Find your project (e.g., "Egy Air")
3. Look at the `id` column
4. Copy that UUID (looks like: `550e8400-e29b-41d4-a716-446655440000`)
5. Paste it in `project_id` column

**Example:**
```
project_id: 550e8400-e29b-41d4-a716-446655440000
```

**Important:**
- All gallery images for the same project use the SAME `project_id`
- Different projects use DIFFERENT `project_id`

---

### Column: `image_url`
**What to write:** Path to your gallery image

**Examples:**
```
gallery-images/egy-air/gallery-1.png
gallery-images/sonic-game/gallery-1.png
gallery-images/freezy-bite/gallery-1.png
```

**Format:**
- Path to image in Supabase Storage
- Or full URL: `https://xxxxx.supabase.co/storage/v1/object/public/gallery-images/egy-air/gallery-1.png`

---

### Column: `image_alt`
**What to write:** Alt text for the image (for accessibility)

**Examples:**
```
Egy Air Gallery Image 1
Sonic Game Settings Screen
Freezy Bite App Interface
```

**Format:**
- Plain text description
- Optional (can leave empty)
- Helps with accessibility

---

### Column: `display_order`
**What to write:** Number for sorting (0, 1, 2, 3...)

**Examples:**
```
0  (first image)
1  (second image)
2  (third image)
3  (fourth image)
```

**How it works:**
- Lower numbers appear first
- Start with 0 for first image
- Increment by 1 for each next image

**For each project:**
- First image: `0`
- Second image: `1`
- Third image: `2`
- And so on...

---

### Column: `height`
**What to write:** Image height number (for Masonry layout)

**Examples:**
```
400
500
600
550
450
```

**Common values:**
- Small images: `300-400`
- Medium images: `400-500`
- Large images: `500-600`
- Very large: `600-800`

**Purpose:**
- Used by Masonry component for layout
- Helps create the staggered/grid effect
- Can be approximate (doesn't have to be exact)

---

### Column: `created_at`
**What to write:** (Leave empty - auto-generated)
- Supabase fills this automatically
- Don't touch it

---

### Column: `updated_at`
**What to write:** (Leave empty - auto-generated)
- Supabase fills this automatically
- Don't touch it

---

## 📊 Complete Example: Egy Air Project (5 Images)

### Step 1: Get Project ID

1. Go to `projects` table
2. Find "Egy Air" row
3. Copy the `id` (UUID)
4. Example UUID: `550e8400-e29b-41d4-a716-446655440000`

### Step 2: Add Gallery Items

**Row 1:**
```
project_id: 550e8400-e29b-41d4-a716-446655440000
image_url: gallery-images/egy-air/gallery-1.png
image_alt: Egy Air Gallery Image 1
display_order: 0
height: 600
```

**Row 2:**
```
project_id: 550e8400-e29b-41d4-a716-446655440000 (same UUID)
image_url: gallery-images/egy-air/gallery-2.png
image_alt: Egy Air Gallery Image 2
display_order: 1
height: 500
```

**Row 3:**
```
project_id: 550e8400-e29b-41d4-a716-446655440000 (same UUID)
image_url: gallery-images/egy-air/gallery-3.png
image_alt: Egy Air Gallery Image 3
display_order: 2
height: 550
```

**Row 4:**
```
project_id: 550e8400-e29b-41d4-a716-446655440000 (same UUID)
image_url: gallery-images/egy-air/gallery-4.png
image_alt: Egy Air Gallery Image 4
display_order: 3
height: 450
```

**Row 5:**
```
project_id: 550e8400-e29b-41d4-a716-446655440000 (same UUID)
image_url: gallery-images/egy-air/gallery-5.png
image_alt: Egy Air Gallery Image 5
display_order: 4
height: 600
```

**Total: 5 rows for Egy Air project**

---

## 🎯 Quick Reference: All Projects

### Recommended Rows per Project:

| Project | Recommended Images | Rows Needed |
|---------|-------------------|-------------|
| Egy Air | 5-8 images | 5-8 rows |
| Sonic Game | 3-5 images | 3-5 rows |
| Freezy Bite | 2-4 images | 2-4 rows |
| Lemmetraver Website | 2-4 images | 2-4 rows |
| Giza Zoo | 2-4 images | 2-4 rows |
| Food App | 3-5 images | 3-5 rows |
| Fit Up | 2-4 images | 2-4 rows |
| Home Appliance | 2-4 images | 2-4 rows |
| Real Estate | 2-4 images | 2-4 rows |

**Total estimated rows: 25-45 rows** (depending on how many images per project)

---

## 📝 Step-by-Step: Adding Gallery Items

### For Each Project:

1. **Get the Project ID:**
   - Go to `projects` table
   - Find your project
   - Copy the `id` (UUID)

2. **Add Gallery Images:**
   - Go to `gallery_items` table
   - Click "Insert row"
   - Fill in:
     - `project_id`: Paste the UUID
     - `image_url`: Path to image
     - `image_alt`: Description
     - `display_order`: 0, 1, 2, 3...
     - `height`: 400, 500, 600...
   - Click "Save"

3. **Repeat for each image:**
   - Same `project_id` for all images of same project
   - Different `display_order` (0, 1, 2, 3...)
   - Different `image_url` for each image

---

## ✅ Checklist for Each Row

**Must Fill:**
- [ ] `project_id` - UUID from projects table
- [ ] `image_url` - Path to image
- [ ] `display_order` - Number (0, 1, 2...)

**Optional:**
- [ ] `image_alt` - Alt text
- [ ] `height` - Number (400, 500, 600...)

**Auto-Filled:**
- [ ] `id` - Auto
- [ ] `created_at` - Auto
- [ ] `updated_at` - Auto

---

## 💡 Tips

1. **Start Small:**
   - Add 2-3 images per project first
   - You can add more later

2. **Project ID:**
   - Copy it once per project
   - Use the same UUID for all images of that project

3. **Display Order:**
   - Always start with 0
   - Increment by 1 (0, 1, 2, 3...)
   - Don't skip numbers

4. **Height:**
   - Can be approximate
   - Common: 400, 500, 600
   - Vary them for better Masonry layout

---

## 🎬 Summary

**How many rows:**
- 1 row = 1 gallery image
- Each project can have multiple rows (images)
- Total: Depends on how many images you have

**What to write:**
- `project_id`: UUID from projects table
- `image_url`: Path to image
- `display_order`: 0, 1, 2, 3...
- `height`: 400, 500, 600...
- `image_alt`: Description (optional)

**That's it!** Add as many rows as you have gallery images! 🚀

