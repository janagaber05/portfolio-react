# 📝 CATEGORY Section - Exact Row Values

Complete guide with exact values for all rows in the CATEGORY section.

---

## 🎯 How to Add Rows

### Option 1: Supabase Dashboard
1. Go to **Table Editor** → `home_content` table
2. Click **"Insert row"** button
3. Fill in the values below
4. Click **"Save"**
5. Repeat for all rows

### Option 2: Postman
1. Use POST method
2. URL: `https://kkvepvlkgppzwapbbynh.supabase.co/rest/v1/home_content`
3. Headers: apikey, Authorization, Content-Type: application/json
4. Copy JSON for each row below
5. Send request

---

## 📋 Row 1: Category Hero Title

**Values to enter:**
- `section`: `category`
- `key`: `category_hero_title`
- `content_en`: `My Work`
- `content_ar`: `أعمالي`
- `metadata`: (leave empty)
- `display_order`: `0`

**Postman JSON:**
```json
{
  "section": "category",
  "key": "category_hero_title",
  "content_en": "My Work",
  "content_ar": "أعمالي",
  "display_order": 0
}
```

---

## 📋 Row 2: Category Hero Subtitle

**Values to enter:**
- `section`: `category`
- `key`: `category_hero_subtitle`
- `content_en`: `My Creative Universe`
- `content_ar`: `عالمي الإبداعي`
- `metadata`: (leave empty)
- `display_order`: `1`

**Postman JSON:**
```json
{
  "section": "category",
  "key": "category_hero_subtitle",
  "content_en": "My Creative Universe",
  "content_ar": "عالمي الإبداعي",
  "display_order": 1
}
```

---

## 📋 Row 3: Category Hero Description

**Values to enter:**
- `section`: `category`
- `key`: `category_hero_description`
- `content_en`: `A showcase of projects that blend design, code, and imagination.`
- `content_ar`: `عرض لمشاريع تمزج بين التصميم والبرمجة والخيال.`
- `metadata`: (leave empty)
- `display_order`: `2`

**Postman JSON:**
```json
{
  "section": "category",
  "key": "category_hero_description",
  "content_en": "A showcase of projects that blend design, code, and imagination.",
  "content_ar": "عرض لمشاريع تمزج بين التصميم والبرمجة والخيال.",
  "display_order": 2
}
```

---

## 📋 Row 4: Category Hero Button

**Values to enter:**
- `section`: `category`
- `key`: `category_hero_button`
- `content_en`: `Explore More`
- `content_ar`: `استكشفي المزيد`
- `metadata`: (leave empty)
- `display_order`: `3`

**Postman JSON:**
```json
{
  "section": "category",
  "key": "category_hero_button",
  "content_en": "Explore More",
  "content_ar": "استكشفي المزيد",
  "display_order": 3
}
```

---

## 📋 Row 5: Category Items (All 6 Categories)

**Values to enter:**
- `section`: `category`
- `key`: `category_items`
- `content_en`: (leave empty)
- `content_ar`: (leave empty)
- `metadata`: Click the JSON icon and paste this (copy exactly, no extra spaces):
```json
{
  "categories": [
    {
      "id": "app-design",
      "label_en": "App Design",
      "label_ar": "تصميم تطبيقات",
      "image": "/imgs/category/app-design-category.png",
      "href": "/app-design"
    },
    {
      "id": "web-design",
      "label_en": "Web Design",
      "label_ar": "تصميم ويب",
      "image": "/imgs/category/web-desogn-category.png",
      "href": "/web-design"
    },
    {
      "id": "graphic-design",
      "label_en": "Graphic Design",
      "label_ar": "تصميم جرافيك",
      "image": "/imgs/category/graphic-design-category.png",
      "href": "/graphic-design"
    },
    {
      "id": "coding",
      "label_en": "Coding",
      "label_ar": "برمجة",
      "image": "/imgs/category/coding-category.png",
      "href": "/404"
    },
    {
      "id": "blogs",
      "label_en": "Blogs",
      "label_ar": "المدونة",
      "image": "/imgs/category/blogs-category.png",
      "href": "/blogs"
    },
    {
      "id": "3d-design",
      "label_en": "3D",
      "label_ar": "ثلاثي الأبعاد",
      "image": "/imgs/category/3d-category.png",
      "href": "/404"
    }
  ]
}
```
- `display_order`: `4`

**Postman JSON:**
```json
{
  "section": "category",
  "key": "category_items",
  "content_en": "",
  "metadata": {
    "categories": [
      {
        "id": "app-design",
        "label_en": "App Design",
        "label_ar": "تصميم تطبيقات",
        "image": "/imgs/category/app-design-category.png",
        "href": "/app-design"
      },
      {
        "id": "web-design",
        "label_en": "Web Design",
        "label_ar": "تصميم ويب",
        "image": "/imgs/category/web-desogn-category.png",
        "href": "/web-design"
      },
      {
        "id": "graphic-design",
        "label_en": "Graphic Design",
        "label_ar": "تصميم جرافيك",
        "image": "/imgs/category/graphic-design-category.png",
        "href": "/graphic-design"
      },
      {
        "id": "coding",
        "label_en": "Coding",
        "label_ar": "برمجة",
        "image": "/imgs/category/coding-category.png",
        "href": "/404"
      },
      {
        "id": "blogs",
        "label_en": "Blogs",
        "label_ar": "المدونة",
        "image": "/imgs/category/blogs-category.png",
        "href": "/blogs"
      },
      {
        "id": "3d-design",
        "label_en": "3D",
        "label_ar": "ثلاثي الأبعاد",
        "image": "/imgs/category/3d-category.png",
        "href": "/404"
      }
    ]
  },
  "display_order": 4
}
```

---

## 📋 Row 6: Category CTA Text

**Values to enter:**
- `section`: `category`
- `key`: `category_cta_text`
- `content_en`: `Do you know what's Missing`
- `content_ar`: `تعرفي ما الذي ينقص؟`
- `metadata`: (leave empty)
- `display_order`: `5`

**Postman JSON:**
```json
{
  "section": "category",
  "key": "category_cta_text",
  "content_en": "Do you know what's Missing",
  "content_ar": "تعرفي ما الذي ينقص؟",
  "display_order": 5
}
```

---

## 📋 Row 7: Category CTA Title

**Values to enter:**
- `section`: `category`
- `key`: `category_cta_title`
- `content_en`: `Us Working Together`
- `content_ar`: `أن نعمل معاً`
- `metadata`: (leave empty)
- `display_order`: `6`

**Postman JSON:**
```json
{
  "section": "category",
  "key": "category_cta_title",
  "content_en": "Us Working Together",
  "content_ar": "أن نعمل معاً",
  "display_order": 6
}
```

---

## 📋 Row 8: Category CTA Button

**Values to enter:**
- `section`: `category`
- `key`: `category_cta_button`
- `content_en`: `Contact me`
- `content_ar`: `تواصلي معي`
- `metadata`: (leave empty)
- `display_order`: `7`

**Postman JSON:**
```json
{
  "section": "category",
  "key": "category_cta_button",
  "content_en": "Contact me",
  "content_ar": "تواصلي معي",
  "display_order": 7
}
```

---

## ✅ Summary Table

| Row | Key | Content EN | Content AR | Display Order |
|-----|-----|------------|------------|---------------|
| 1 | `category_hero_title` | "My Work" | "أعمالي" | 0 |
| 2 | `category_hero_subtitle` | "My Creative Universe" | "عالمي الإبداعي" | 1 |
| 3 | `category_hero_description` | "A showcase of projects..." | "عرض لمشاريع..." | 2 |
| 4 | `category_hero_button` | "Explore More" | "استكشفي المزيد" | 3 |
| 5 | `category_items` | (empty) - JSON in metadata | (empty) | 4 |
| 6 | `category_cta_text` | "Do you know what's Missing" | "تعرفي ما الذي ينقص؟" | 5 |
| 7 | `category_cta_title` | "Us Working Together" | "أن نعمل معاً" | 6 |
| 8 | `category_cta_button` | "Contact me" | "تواصلي معي" | 7 |

**Total: 8 rows for Category section**

---

## 📝 Important Notes

1. **Section**: All rows must have `section = "category"`
2. **Display order**: Must be unique numbers from 0 to 7
3. **JSON field**: For Row 5 (`category_items`), click the JSON icon in Supabase and paste the JSON exactly as shown
4. **Arabic content**: All rows have both English and Arabic content
5. **Auto-generated**: Don't fill `id`, `created_at`, or `updated_at`

---

## 🎯 How to Enter JSON in Supabase Dashboard

For Row 5 (category_items with JSON):

1. Click on the `metadata` field
2. You should see a JSON icon (looks like `{}`) - click it
3. A JSON editor will open
4. Delete any existing content
5. Paste the JSON exactly as shown above (starting with `{` and ending with `}`)
6. Click **"Save"** or close the JSON editor
7. Make sure no extra characters or spaces

**If you get "invalid JSON" error:**
- Make sure you copied the entire JSON (from `{` to `}`)
- Check there are no extra commas at the end
- Make sure all quotes are straight quotes (`"`), not curly quotes (`"` or `"`)
- Validate your JSON at jsonlint.com before pasting

---

## 🚀 Ready to Add!

Copy each row's values and add them one by one. Good luck! 🎉

