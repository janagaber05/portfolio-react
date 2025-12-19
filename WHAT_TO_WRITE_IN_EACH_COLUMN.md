# What to Write Under Each Column
## Simple Guide - Copy and Paste Values

---

## 📋 Column-by-Column: What to Type

### Column: `id`
**What to write:** (NOTHING - leave empty)
- ✅ Don't type anything
- ✅ Supabase fills this automatically
- ✅ Just skip this column

---

### Column: `created_at`
**What to write:** (NOTHING - leave empty)
- ✅ Don't type anything
- ✅ Supabase fills this automatically
- ✅ Just skip this column

---

### Column: `text`
**What to write:** The project name

**Examples:**
```
Egy Air
Sonic Game
Freezy Bite
Lemmetraver Website
Giza Zoo
Food App
Fit Up
Home Appliance
Real Estate
```

**How to write:**
- Just type the project name
- No quotes needed
- Plain text

---

### Column: `category`
**What to write:** JSON format with categories

**Single category:**
```
{"c1":"Graphic Design"}
```

**Multiple categories:**
```
{"c1":"Graphic Design","c2":"Web Design"}
```

**Three categories:**
```
{"c1":"Graphic Design","c2":"Web Design","c3":"Coding"}
```

**How to write:**
1. Start with `{`
2. Type `"c1":"Category Name"`
3. If more categories, add comma and `"c2":"Category Name"`
4. End with `}`

**Valid category names:**
- `"Graphic Design"`
- `"App Design"`
- `"Web Design"`
- `"3D Design"`
- `"Coding"`

**Important:**
- Use double quotes `"` not single quotes `'`
- Use `c1`, `c2`, `c3` as keys

---

### Column: `date`
**What to write:** (Leave empty or NULL)

**OR** if you want to add a date:
```
2025-12-15
```

**Format:** `YYYY-MM-DD`
- Year-Month-Day
- Use hyphens `-`
- Example: `2024-06-20`

**Most of the time:** Just leave it empty (NULL)

---

### Column: `cover_img`
**What to write:** Path to your cover image

**Examples:**
```
heroes/egy-air-hero.png
covers/egy-air-cover.png
```

**OR full URL:**
```
https://xxxxx.supabase.co/storage/v1/object/public/project-images/heroes/egy-air-hero.png
```

**How to get the path:**
1. Upload image to Supabase Storage
2. Copy the path (e.g., `heroes/egy-air-hero.png`)
3. Paste it here

**Format:**
- Just the path: `heroes/image-name.png`
- Or full URL (both work)

---

### Column: `images`
**What to write:** JSON with image data

**Simple example:**
```
{"alt":"Egy Air Gallery","url":"gallery-images/egy-air/gallery-1.png"}
```

**Multiple images example:**
```
{"gallery":[{"url":"gallery-images/egy-air/gallery-1.png","alt":"Image 1"},{"url":"gallery-images/egy-air/gallery-2.png","alt":"Image 2"}]}
```

**How to write:**
1. Start with `{`
2. Type `"alt":"Description"`
3. Add comma `,`
4. Type `"url":"path/to/image.png"`
5. End with `}`

**Important:**
- Use double quotes `"` for all text
- Separate with commas `,`

---

### Column: `slug` ⭐ REQUIRED
**What to write:** URL-friendly name

**Examples:**
```
egy-air
sonic-game
freezy-bite
lemmetraver-website
giza-zoo
food-app
fit-up
home-appliance
real-estate
```

**Rules:**
- ✅ Lowercase only
- ✅ Use hyphens `-` not spaces
- ✅ No special characters
- ✅ Keep it short

**How to create:**
- "Egy Air" → `egy-air`
- "Sonic Game" → `sonic-game`
- "Food App" → `food-app`

---

### Column: `is_published` ⭐ REQUIRED
**What to write:** `true` or `false`

**Options:**
- `true` = Project is visible (check the box)
- `false` = Project is hidden (uncheck the box)

**Most projects:** Write `true` (check the box)

**Draft projects:** Write `false` (uncheck the box)

---

### Column: `display_order` ⭐ REQUIRED
**What to write:** A number

**Examples:**
```
0
1
2
3
4
5
```

**How it works:**
- `0` = appears first
- `1` = appears second
- `2` = appears third
- Lower number = appears first

**For your projects:**
- First project: `0`
- Second project: `1`
- Third project: `2`
- And so on...

---

### Column: `title_en` (Optional)
**What to write:** English title

**Examples:**
```
Egy Air
Sonic Colors Ultimate
Freezy Bite App
```

**Can be:**
- Same as `text` column
- Or more descriptive

**Most of the time:** Just copy from `text` column

---

### Column: `title_ar` (Optional)
**What to write:** Arabic title

**Examples:**
```
إيجي إير
سونيك كولورز
تطبيق فريزي بايت
```

**OR:** Leave empty if you don't need Arabic

---

### Column: `description_en` (Optional)
**What to write:** Full English description

**Example:**
```
Modern Egyptian Airline Branding - A complete brand identity design for a new Egyptian airline, combining cultural heritage with modern aesthetics.
```

**Format:**
- Can be long text
- Multiple sentences
- Multiple paragraphs

**OR:** Leave empty if you don't have description yet

---

### Column: `description_ar` (Optional)
**What to write:** Full Arabic description

**Example:**
```
هوية طيران مصري عصرية - تصميم هوية كاملة لخطوط جوية مصرية جديدة، تجمع بين التراث الثقافي والجماليات العصرية.
```

**OR:** Leave empty if you don't need Arabic

---

### Column: `excerpt_en` (Optional)
**What to write:** Short preview text (1-2 sentences)

**Example:**
```
A branded bag for an airline, combining purple and white for a modern, trustworthy look.
```

**Format:**
- Short text
- 1-2 sentences
- Under 200 characters

**OR:** Leave empty

---

### Column: `excerpt_ar` (Optional)
**What to write:** Short Arabic preview

**Example:**
```
حقيبة مخصصة لخطوط جوية تجمع بين البنفسجي والأبيض لمظهر عصري وجدير بالثقة.
```

**OR:** Leave empty

---

### Column: `thumbnail_image_url` (Optional)
**What to write:** Path to thumbnail image

**Example:**
```
thumbnails/egy-air-thumb.png
```

**Format:** Same as `cover_img` but smaller image

**OR:** Leave empty (can use `cover_img` instead)

---

### Column: `hero_image_url` (Optional)
**What to write:** Path to hero image

**Example:**
```
heroes/egy-air-hero.png
```

**Format:** Same as `cover_img`

**OR:** Leave empty (you already have `cover_img`)

---

### Column: `featured` (Optional)
**What to write:** `true` or `false`

**Options:**
- `true` = Featured project (check the box)
- `false` = Regular project (uncheck the box)

**Recommendation:**
- Set 2-4 of your best projects to `true`
- Rest set to `false`

---

## 📊 Complete Example: Row 1 (Egy Air)

Here's exactly what to type in each column:

```
id: (leave empty - auto)
created_at: (leave empty - auto)
text: Egy Air
category: {"c1":"Graphic Design"}
date: (leave empty or NULL)
cover_img: heroes/egy-air-hero.png
images: {"alt":"Egy Air Gallery","url":"gallery-images/egy-air/gallery-1.png"}
slug: egy-air
is_published: true
display_order: 0
title_en: Egy Air
title_ar: (leave empty or: إيجي إير)
description_en: (leave empty or add description)
description_ar: (leave empty or add Arabic description)
excerpt_en: (leave empty or add short text)
excerpt_ar: (leave empty or add Arabic excerpt)
thumbnail_image_url: (leave empty or: thumbnails/egy-air-thumb.png)
hero_image_url: (leave empty or: heroes/egy-air-hero.png)
featured: true
```

---

## 🎯 Quick Start: Minimum Required

For each row, you MUST fill these 5 columns:

1. **`text`**: Project name
   ```
   Egy Air
   ```

2. **`category`**: JSON with category
   ```
   {"c1":"Graphic Design"}
   ```

3. **`slug`**: URL-friendly name
   ```
   egy-air
   ```

4. **`is_published`**: true or false
   ```
   true
   ```

5. **`display_order`**: Number
   ```
   0
   ```

**Everything else is optional!**

---

## ✅ Checklist for Each Row

**Must Fill:**
- [ ] `text` - Project name
- [ ] `category` - JSON category
- [ ] `slug` - URL name
- [ ] `is_published` - true/false
- [ ] `display_order` - Number

**Optional (Fill Later):**
- [ ] `cover_img` - Image path
- [ ] `images` - JSON images
- [ ] `title_en` - English title
- [ ] `title_ar` - Arabic title
- [ ] `description_en` - Description
- [ ] `excerpt_en` - Short text
- [ ] `featured` - true/false

**Auto-Filled (Don't Touch):**
- [ ] `id` - Auto
- [ ] `created_at` - Auto

---

## 💡 Tips

1. **Start Simple:**
   - Fill only the 5 required columns first
   - Add optional columns later

2. **JSON Format:**
   - Always use double quotes `"`
   - Use commas `,` to separate items
   - Start with `{` and end with `}`

3. **Images:**
   - Upload images to Supabase Storage first
   - Then copy the path
   - Paste the path in the column

4. **Slug:**
   - Make it match your project name
   - Lowercase, hyphens only
   - Keep it short

---

## 🚀 That's It!

Just fill in the 5 required columns for each row, and you're done! Add optional columns later when you have time. 🎉

