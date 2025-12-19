# What to Add Inside Each Column
## Example Data for Your Projects Table

---

## 📋 Example Data for Each Column

Based on your existing projects, here's what to add:

---

## 🎯 Required Columns (Must Fill)

### 1. `slug` Column

**What it is:** URL-friendly identifier for routing

**How to create:**
- Take your project name
- Make it lowercase
- Replace spaces with hyphens
- Remove special characters

**Examples for your projects:**

| Project Name (from `text`) | `slug` Value |
|---------------------------|--------------|
| "Egy Air" | `egy-air` |
| "Sonic Game" | `sonic-game` |
| "Freezy Bite" | `freezy-bite` |
| "Lemmetraver Website" | `lemmetraver-website` |
| "Giza Zoo" | `giza-zoo` |
| "Food App" | `food-app` |
| "Fit Up" | `fit-up` |
| "Home Appliance" | `home-appliance` |
| "Real Estate" | `real-estate` |

**Format:**
- Lowercase only
- Use hyphens (-) not underscores (_)
- No spaces
- No special characters

---

### 2. `is_published` Column

**What it is:** Controls if project is visible on website

**Values:**
- `true` = Project is visible (published)
- `false` = Project is hidden (draft)

**Examples:**

| Project | `is_published` Value |
|---------|---------------------|
| Egy Air | `true` (if you want it visible) |
| Sonic Game | `true` (if you want it visible) |
| Draft project | `false` (if it's not ready) |

**Recommendation:** Set all your existing projects to `true` so they're visible.

---

### 3. `display_order` Column

**What it is:** Controls the order projects appear (sorting)

**Values:**
- Numbers: `0`, `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`...
- Lower numbers appear first

**Examples:**

| Project | `display_order` | What it means |
|---------|----------------|---------------|
| Egy Air | `0` | Appears first |
| Sonic Game | `1` | Appears second |
| Freezy Bite | `2` | Appears third |
| Giza Zoo | `3` | Appears fourth |
| Food App | `4` | Appears fifth |

**Recommendation:** 
- Start with `0` for your most important/favorite project
- Increment by 1 for each project
- You can change these later to reorder

---

## 📝 Optional Columns (Add if Needed)

### 4. `title_en` Column

**What it is:** English title (can be same as `text` or different)

**Examples:**

| `text` Value | `title_en` Value |
|-------------|------------------|
| "Egy Air" | `Egy Air` |
| "Sonic Game" | `Sonic Colors Ultimate` |
| "Freezy Bite" | `Freezy Bite App` |

**Note:** You can copy from `text` column or make it more descriptive.

---

### 5. `title_ar` Column

**What it is:** Arabic title (if you need Arabic version)

**Examples:**

| `title_en` | `title_ar` Value |
|-----------|-----------------|
| "Egy Air" | `إيجي إير` |
| "Sonic Game" | `سونيك كولورز` |
| "Food App" | `تطبيق الطعام` |

**Note:** Only fill if you need Arabic support.

---

### 6. `description_en` Column

**What it is:** Full English description of the project

**Examples:**

```
For "Egy Air":
"Modern Egyptian Airline Branding - A complete brand identity design for a new Egyptian airline, combining cultural heritage with modern aesthetics."

For "Sonic Game":
"A redesigned settings screen for Sonic Colors Ultimate game with vibrant neon elements and improved user experience."
```

**Format:** Long text (can be multiple sentences/paragraphs)

---

### 7. `description_ar` Column

**What it is:** Full Arabic description

**Examples:**

```
For "Egy Air":
"هوية طيران مصري عصرية - تصميم هوية كاملة لخطوط جوية مصرية جديدة، تجمع بين التراث الثقافي والجماليات العصرية."
```

**Note:** Only fill if you need Arabic support.

---

### 8. `excerpt_en` Column

**What it is:** Short preview text (1-2 sentences)

**Examples:**

| Project | `excerpt_en` Value |
|---------|-------------------|
| Egy Air | `A branded bag for an airline, combining purple and white for a modern, trustworthy look.` |
| Sonic Game | `A redesigned settings screen with vibrant neon elements.` |
| Food App | `A modern food delivery app with intuitive user interface.` |

**Format:** Short text (usually 1-2 sentences, under 200 characters)

---

### 9. `excerpt_ar` Column

**What it is:** Short Arabic preview text

**Examples:**

```
For "Egy Air":
"حقيبة مخصصة لخطوط جوية تجمع بين البنفسجي والأبيض لمظهر عصري وجدير بالثقة."
```

---

### 10. `thumbnail_image_url` Column

**What it is:** Small preview image URL

**Examples:**

```
heroes/egy-air-thumb.png
thumbnails/sonic-game-thumb.png
thumbnails/food-app-thumb.png
```

**Format:** 
- Path to image in Supabase Storage
- Or full URL: `https://xxxxx.supabase.co/storage/v1/object/public/project-images/thumbnails/egy-air-thumb.png`

**Note:** This is different from `cover_img` - this is a smaller thumbnail for lists/grids.

---

### 11. `hero_image_url` Column

**What it is:** Large hero/banner image URL

**Examples:**

```
heroes/egy-air-hero.png
heroes/sonic-game-hero.png
heroes/food-app-hero.png
```

**Format:** Same as `cover_img` - you can use either one or both.

**Note:** You already have `cover_img`, so this is optional. You can:
- Use `cover_img` for cover images
- Use `hero_image_url` for hero images
- Or use both for different purposes

---

### 12. `featured` Column

**What it is:** Mark projects as featured (showcase on homepage)

**Values:**
- `true` = Featured project (show on homepage)
- `false` = Regular project

**Examples:**

| Project | `featured` Value | Why |
|---------|-----------------|-----|
| Egy Air | `true` | Your best work |
| Sonic Game | `true` | Important project |
| Food App | `false` | Regular project |

**Recommendation:** Set 2-4 of your best projects to `true`.

---

## 📊 Complete Example: Egy Air Project

Here's how a complete row would look:

```
┌─────────────────────────────────────────────────────────────┐
│                    Row: Egy Air Project                    │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  id: 8                                                       │
│  created_at: 2025-12-09 13:15:31.658522+00                │
│  text: "Egy Air"                                            │
│  category: {"c1":"Graphic Design"}                          │
│  date: null                                                  │
│  cover_img: "https://xxxxx.supabase.co/storage/.../hero.png"│
│  images: {"alt":"Egy Air Gallery","url":"..."}              │
│                                                              │
│  ────────────────────────────────────────────────────────   │
│  slug: "egy-air"                    ⭐ REQUIRED              │
│  is_published: true                 ⭐ REQUIRED            │
│  display_order: 0                    ⭐ REQUIRED             │
│                                                              │
│  ────────────────────────────────────────────────────────   │
│  title_en: "Egy Air"                 (Optional)              │
│  title_ar: "إيجي إير"                (Optional)              │
│  description_en: "Modern Egyptian..." (Optional)             │
│  description_ar: "هوية طيران..."      (Optional)             │
│  excerpt_en: "A branded bag for..."  (Optional)             │
│  excerpt_ar: "حقيبة مخصصة..."         (Optional)             │
│  thumbnail_image_url: "thumbnails/..." (Optional)            │
│  hero_image_url: "heroes/egy-air..."  (Optional)            │
│  featured: true                       (Optional)             │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

---

## 🎯 Quick Fill Guide for Your Existing Projects

### For Each Project Row:

1. **Fill `slug`:**
   - "Egy Air" → `egy-air`
   - "Sonic Game" → `sonic-game`
   - etc.

2. **Fill `is_published`:**
   - Set to `true` for all existing projects (make them visible)

3. **Fill `display_order`:**
   - Start with `0` for your favorite project
   - Then `1`, `2`, `3`, etc. for others

4. **Optional - Fill `title_en`:**
   - Copy from `text` or make it better

5. **Optional - Fill `featured`:**
   - Set `true` for 2-4 best projects

---

## 📝 Step-by-Step: Filling Data in Supabase

### Method 1: Edit Each Row

1. Go to **Table Editor** → `projects` table
2. Click on a row (or click the edit icon)
3. Fill in the new columns:
   ```
   slug: egy-air
   is_published: ☑ true
   display_order: 0
   ```
4. Click **"Save"** or **"Update"**

### Method 2: Bulk Update (if available)

1. Select multiple rows (checkboxes)
2. Use bulk edit if your Supabase version supports it
3. Or update one by one

---

## ✅ Checklist: What to Fill for Each Project

### Minimum Required:

- [ ] `slug` - URL-friendly name
- [ ] `is_published` - true or false
- [ ] `display_order` - number (0, 1, 2, 3...)

### Optional (Fill Later):

- [ ] `title_en` - English title
- [ ] `title_ar` - Arabic title (if needed)
- [ ] `description_en` - Full description
- [ ] `description_ar` - Arabic description (if needed)
- [ ] `excerpt_en` - Short preview
- [ ] `excerpt_ar` - Arabic preview (if needed)
- [ ] `thumbnail_image_url` - Thumbnail image path
- [ ] `hero_image_url` - Hero image path
- [ ] `featured` - true or false

---

## 💡 Tips

1. **Start Simple:**
   - Fill only the 3 required columns first
   - Add optional columns later

2. **Slug Best Practices:**
   - Keep it short and memorable
   - Use lowercase and hyphens
   - Make it match your project name

3. **Display Order:**
   - You can always change it later
   - Start with 0, 1, 2, 3...
   - Gaps are okay (0, 5, 10, 15...)

4. **Published Status:**
   - Set to `true` for projects you want visible
   - Set to `false` for drafts or hidden projects

---

## 🎬 Summary

**Must Fill (3 columns):**
1. `slug` - URL identifier (e.g., "egy-air")
2. `is_published` - true/false
3. `display_order` - number (0, 1, 2...)

**Optional (Fill Later):**
- Titles, descriptions, excerpts (EN/AR)
- Image URLs (thumbnail, hero)
- Featured flag

Start with the 3 required columns, then add optional data as you have time! 🚀

