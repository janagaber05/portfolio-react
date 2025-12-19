# Row Data Examples - What to Write in Each Column
## Complete Guide for Filling Your Projects Table

---

## 📊 Row 1: Egy Air Project

### Complete Row Data:

```
┌─────────────────────────────────────────────────────────────────┐
│                    Row 1: Egy Air                               │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  Column Name          │ Value to Write                          │
├───────────────────────┼─────────────────────────────────────────┤
│  id                   │ (Auto - don't fill)                     │
│  created_at           │ (Auto - don't fill)                      │
│  text                 │ Egy Air                                 │
│  category             │ {"c1":"Graphic Design"}                 │
│  date                 │ (leave NULL or empty)                   │
│  cover_img            │ heroes/egy-air-hero.png                  │
│  images               │ {"alt":"Egy Air Gallery","url":"gallery- │
│                       │  images/egy-air/gallery-1.png"}         │
│  slug                 │ egy-air                                 │
│  is_published         │ true                                     │
│  display_order        │ 0                                        │
│  title_en             │ Egy Air                                  │
│  title_ar             │ إيجي إير                                 │
│  description_en       │ Modern Egyptian Airline Branding - A     │
│                       │ complete brand identity design for a new │
│                       │ Egyptian airline, combining cultural     │
│                       │ heritage with modern aesthetics.         │
│  description_ar       │ هوية طيران مصري عصرية - تصميم هوية كاملة │
│                       │ لخطوط جوية مصرية جديدة، تجمع بين التراث │
│                       │ الثقافي والجماليات العصرية.              │
│  excerpt_en           │ A branded bag for an airline, combining  │
│                       │ purple and white for a modern,           │
│                       │ trustworthy look.                        │
│  excerpt_ar           │ حقيبة مخصصة لخطوط جوية تجمع بين البنفسجي │
│                       │ والأبيض لمظهر عصري وجدير بالثقة.         │
│  thumbnail_image_url  │ thumbnails/egy-air-thumb.png             │
│  hero_image_url       │ heroes/egy-air-hero.png                  │
│  featured             │ true                                     │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

---

## 📝 Detailed Column-by-Column Instructions

### Column: `id`
**What to write:** (Leave empty - auto-generated)
**Value:** `(auto)`
**Notes:** Supabase automatically fills this. Don't touch it.

---

### Column: `created_at`
**What to write:** (Leave empty - auto-generated)
**Value:** `(auto)`
**Notes:** Automatically set to current date/time when row is created.

---

### Column: `text`
**What to write:** `Egy Air`
**Value:** `Egy Air`
**Format:** Plain text, project name
**Notes:** This is the main project name/identifier.

---

### Column: `category`
**What to write:** `{"c1":"Graphic Design"}`
**Value:** `{"c1":"Graphic Design"}`
**Format:** JSON object
**How to write:**
1. Start with `{`
2. Add `"c1":"Graphic Design"`
3. End with `}`
4. Use double quotes around keys and values

**Other examples:**
- Single category: `{"c1":"Graphic Design"}`
- Multiple categories: `{"c1":"Graphic Design","c2":"Web Design"}`
- Three categories: `{"c1":"App Design","c2":"Web Design","c3":"Coding"}`

**Valid category names:**
- "Graphic Design"
- "App Design"
- "Web Design"
- "3D Design"
- "Coding"

---

### Column: `date`
**What to write:** (Leave NULL or empty)
**Value:** `NULL` or `(empty)`
**Format:** Date in YYYY-MM-DD format (if you want to fill it)
**Optional examples:**
- `2025-12-15`
- `2024-06-20`
- Or leave NULL

---

### Column: `cover_img`
**What to write:** `heroes/egy-air-hero.png`
**Value:** `heroes/egy-air-hero.png`
**Format:** Path to image in Supabase Storage
**How to get the path:**
1. Upload image to `project-images` bucket → `heroes` folder
2. Copy the path: `heroes/egy-air-hero.png`
3. Or use full URL: `https://xxxxx.supabase.co/storage/v1/object/public/project-images/heroes/egy-air-hero.png`

**Other examples:**
- `covers/egy-air-cover.png`
- `heroes/egy-air-hero.png`
- Full URL also works

---

### Column: `images`
**What to write:** 
```json
{"alt":"Egy Air Gallery","url":"gallery-images/egy-air/gallery-1.png"}
```

**Value:** JSON object
**Format:** JSON with `alt` and `url` keys

**Simple example:**
```json
{"alt":"Egy Air Gallery","url":"gallery-images/egy-air/gallery-1.png"}
```

**Multiple images example:**
```json
{
  "gallery": [
    {"url":"gallery-images/egy-air/gallery-1.png","alt":"Image 1","height":600},
    {"url":"gallery-images/egy-air/gallery-2.png","alt":"Image 2","height":500},
    {"url":"gallery-images/egy-air/gallery-3.png","alt":"Image 3","height":550}
  ]
}
```

**How to write:**
1. Start with `{`
2. Add `"alt":"Description"`
3. Add comma `,`
4. Add `"url":"path/to/image.png"`
5. End with `}`

---

### Column: `slug` ⭐
**What to write:** `egy-air`
**Value:** `egy-air`
**Format:** Lowercase, hyphens, no spaces
**Rules:**
- ✅ Lowercase only
- ✅ Use hyphens (-) not underscores
- ✅ No spaces
- ✅ No special characters

**How to create:**
1. Take project name: "Egy Air"
2. Make lowercase: "egy air"
3. Replace space with hyphen: "egy-air"
4. Done!

---

### Column: `is_published` ⭐
**What to write:** `true`
**Value:** `true` or `false`
**Format:** Boolean (checkbox in Supabase)
**Options:**
- `true` = Project is visible on website
- `false` = Project is hidden (draft)

**For Row 1:** Write `true` (make it visible)

---

### Column: `display_order` ⭐
**What to write:** `0`
**Value:** `0` (or any number)
**Format:** Integer number
**How it works:**
- Lower numbers appear first
- `0` = appears first
- `1` = appears second
- `2` = appears third

**For Row 1:** Write `0` (make it first)

---

### Column: `title_en`
**What to write:** `Egy Air`
**Value:** `Egy Air`
**Format:** Plain text
**Notes:** Can be same as `text` or more descriptive
**Optional examples:**
- `Egy Air`
- `Egy Air - Modern Airline Branding`
- `Egy Air Brand Identity`

---

### Column: `title_ar`
**What to write:** `إيجي إير`
**Value:** `إيجي إير`
**Format:** Arabic text
**Notes:** Arabic translation of English title
**How to get:**
- Translate "Egy Air" to Arabic
- Or leave empty if you don't need Arabic

---

### Column: `description_en`
**What to write:**
```
Modern Egyptian Airline Branding - A complete brand identity design for a new Egyptian airline, combining cultural heritage with modern aesthetics. The logo is inspired by the Egyptian Horus wing symbol.
```

**Value:** Long text description
**Format:** Multiple sentences, can be paragraphs
**Notes:** Full project description in English

---

### Column: `description_ar`
**What to write:**
```
هوية طيران مصري عصرية - تصميم هوية كاملة لخطوط جوية مصرية جديدة، تجمع بين التراث الثقافي والجماليات العصرية. الشعار مستوحى من رمز جناح حورس المصري.
```

**Value:** Arabic text description
**Format:** Multiple sentences in Arabic
**Notes:** Translation of `description_en`

---

### Column: `excerpt_en`
**What to write:** `A branded bag for an airline, combining purple and white for a modern, trustworthy look.`
**Value:** Short text (1-2 sentences)
**Format:** Brief summary
**Notes:** Used in project cards/lists

---

### Column: `excerpt_ar`
**What to write:** `حقيبة مخصصة لخطوط جوية تجمع بين البنفسجي والأبيض لمظهر عصري وجدير بالثقة.`
**Value:** Short Arabic text
**Format:** 1-2 sentences in Arabic
**Notes:** Translation of `excerpt_en`

---

### Column: `thumbnail_image_url`
**What to write:** `thumbnails/egy-air-thumb.png`
**Value:** Path to thumbnail image
**Format:** Same as `cover_img` but smaller image
**Notes:** Small preview image for lists/grids

---

### Column: `hero_image_url`
**What to write:** `heroes/egy-air-hero.png`
**Value:** Path to hero image
**Format:** Same as `cover_img`
**Notes:** Large banner/hero image

---

### Column: `featured`
**What to write:** `true`
**Value:** `true` or `false`
**Format:** Boolean (checkbox)
**Options:**
- `true` = Featured project (show on homepage)
- `false` = Regular project

**For Row 1:** Write `true` (make it featured)

---

## 📊 All Rows - Quick Reference

### Row 1: Egy Air
```
text: "Egy Air"
category: {"c1":"Graphic Design"}
cover_img: "heroes/egy-air-hero.png"
images: {"alt":"Egy Air Gallery","url":"gallery-images/egy-air/gallery-1.png"}
slug: "egy-air"
is_published: true
display_order: 0
title_en: "Egy Air"
featured: true
```

### Row 2: Sonic Game
```
text: "Sonic Game"
category: {"c1":"App Design"}
cover_img: "heroes/sonic-game-hero.png"
images: {"alt":"Sonic Game Gallery","url":"gallery-images/sonic-game/gallery-1.png"}
slug: "sonic-game"
is_published: true
display_order: 1
title_en: "Sonic Colors Ultimate"
featured: true
```

### Row 3: Freezy Bite
```
text: "Freezy Bite"
category: {"c1":"Web Design","c2":"Coding"}
cover_img: "heroes/freezy-bite-hero.png"
images: {"alt":"Freezy Bite Gallery","url":"gallery-images/freezy-bite/gallery-1.png"}
slug: "freezy-bite"
is_published: true
display_order: 2
title_en: "Freezy Bite"
featured: false
```

### Row 4: Lemmetraver Website
```
text: "Lemmetraver Website"
category: {"c1":"Web Design"}
cover_img: "heroes/lemmetraver-hero.png"
images: {"alt":"Lemmetraver Gallery","url":"gallery-images/lemmetraver/gallery-1.png"}
slug: "lemmetraver-website"
is_published: true
display_order: 3
title_en: "Lemmetraver Website"
featured: false
```

### Row 5: Giza Zoo
```
text: "Giza Zoo"
category: {"c1":"Graphic Design"}
cover_img: "heroes/giza-zoo-hero.png"
images: {"alt":"Giza Zoo Gallery","url":"gallery-images/giza-zoo/gallery-1.png"}
slug: "giza-zoo"
is_published: true
display_order: 4
title_en: "Giza Zoo"
featured: false
```

### Row 6: Food App
```
text: "Food App"
category: {"c1":"App Design"}
cover_img: "heroes/food-app-hero.png"
images: {"alt":"Food App Gallery","url":"gallery-images/food-app/gallery-1.png"}
slug: "food-app"
is_published: true
display_order: 5
title_en: "Food App"
featured: false
```

### Row 7: Fit Up
```
text: "Fit Up"
category: {"c1":"Graphic Design","c2":"Web Design"}
cover_img: "heroes/fit-up-hero.png"
images: {"alt":"Fit Up Gallery","url":"gallery-images/fit-up/gallery-1.png"}
slug: "fit-up"
is_published: true
display_order: 6
title_en: "Fit Up"
featured: false
```

### Row 8: Home Appliance
```
text: "Home Appliance"
category: {"c1":"Graphic Design"}
cover_img: "heroes/home-appliance-hero.png"
images: {"alt":"Home Appliance Gallery","url":"gallery-images/home-appliance/gallery-1.png"}
slug: "home-appliance"
is_published: true
display_order: 7
title_en: "Home Appliance"
featured: false
```

### Row 9: Real Estate
```
text: "Real Estate"
category: {"c1":"Web Design"}
cover_img: "heroes/real-estate-hero.png"
images: {"alt":"Real Estate Gallery","url":"gallery-images/real-estate/gallery-1.png"}
slug: "real-estate"
is_published: true
display_order: 8
title_en: "Real Estate"
featured: false
```

---

## ✅ Step-by-Step: Filling Row 1 in Supabase

1. **Go to Table Editor** → `projects` table
2. **Click "Insert row"** or edit existing row
3. **Fill each column:**

   - `text`: Type `Egy Air`
   - `category`: Type `{"c1":"Graphic Design"}`
   - `cover_img`: Type `heroes/egy-air-hero.png`
   - `images`: Type `{"alt":"Egy Air Gallery","url":"gallery-images/egy-air/gallery-1.png"}`
   - `slug`: Type `egy-air`
   - `is_published`: Check the box (set to `true`)
   - `display_order`: Type `0`
   - `title_en`: Type `Egy Air`
   - `featured`: Check the box (set to `true`)

4. **Leave empty (auto-filled):**
   - `id` - Don't touch
   - `created_at` - Don't touch

5. **Optional columns (fill later if needed):**
   - `date`, `title_ar`, `description_en`, `description_ar`, etc.

6. **Click "Save"** or "Insert"

---

## 🎯 Quick Copy-Paste Values

### For Row 1 (Egy Air):

**Required columns:**
```
text: Egy Air
category: {"c1":"Graphic Design"}
slug: egy-air
is_published: true
display_order: 0
```

**Image columns:**
```
cover_img: heroes/egy-air-hero.png
images: {"alt":"Egy Air Gallery","url":"gallery-images/egy-air/gallery-1.png"}
```

**Optional columns:**
```
title_en: Egy Air
title_ar: إيجي إير
featured: true
```

---

## 💡 Tips

1. **Start with required columns only:**
   - Fill `slug`, `is_published`, `display_order` first
   - Add optional columns later

2. **Category JSON:**
   - Always use double quotes: `"Graphic Design"` not `'Graphic Design'`
   - Format: `{"c1":"Category Name"}`

3. **Images JSON:**
   - Use double quotes for keys and values
   - Format: `{"alt":"Description","url":"path/to/image.png"}`

4. **Slug creation:**
   - Always lowercase
   - Use hyphens
   - Keep it short

---

## 📋 Checklist for Each Row

- [ ] `text` - Project name
- [ ] `category` - JSON with categories
- [ ] `slug` - URL-friendly name
- [ ] `is_published` - true or false
- [ ] `display_order` - Number (0, 1, 2...)
- [ ] `cover_img` - Image path
- [ ] `images` - JSON with gallery images
- [ ] `title_en` - English title (optional)
- [ ] `featured` - true or false (optional)

That's everything you need to fill in each row! 🚀

