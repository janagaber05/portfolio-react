# Category Page Content - Where to Upload in Supabase
## Complete Guide for Managing Category Page Content

---

## 📋 What Content Is on Your Category Page?

Your Category page has **three main sections**:

### **Hero Section:**
- Hero title: "My Work" / "أعمالي"
- Subtitle: "My Creative Universe" / "عالمي الإبداعي"
- Description: "A showcase of projects that blend design, code, and imagination." / "عرض لمشاريع تمزج بين التصميم والبرمجة والخيال."
- Button text: "Explore More" / "استكشفي المزيد"
- Hero image: `/imgs/category/hero-category.png`

### **Category Gallery Section:**
- 6 category items displayed in CircularGallery:
  1. App Design / تصميم تطبيقات
  2. Web Design / تصميم ويب
  3. Graphic Design / تصميم جرافيك
  4. Coding / برمجة
  5. Blogs / المدونة
  6. 3D

**Note:** Each category has:
- Image path
- Text label (English and Arabic)
- Link/href

### **CTA Section:**
- Text: "Do you know what's Missing" / "تعرفي ما الذي ينقص؟"
- Title: "Us Working Together" / "أن نعمل معاً"
- Button text: "Contact me" / "تواصلي معي"
- Background image: `/imgs/us working together.png`

---

## 🎯 Solution: Use Same `home_content` Table

Use the same `home_content` table with `section: 'category'` for category page content.

**For categories themselves:** You can either:
- Store them in `home_content` table (as items)
- OR fetch them dynamically from `projects` table (group by category)

---

## 📝 How to Add Category Page Content

### Use the Same `home_content` Table

Add Category page content with `section: 'category'`:

---

## 📋 Complete List of Content to Add

### Hero Section (6 rows):
1. `category_hero_title` (EN): "My Work"
2. `category_hero_title_ar` (AR): "أعمالي"
3. `category_hero_subtitle` (EN): "My Creative Universe"
4. `category_hero_subtitle_ar` (AR): "عالمي الإبداعي"
5. `category_hero_description` (EN): "A showcase of projects that blend design, code, and imagination."
6. `category_hero_description_ar` (AR): "عرض لمشاريع تمزج بين التصميم والبرمجة والخيال."
7. `category_hero_button` (EN): "Explore More"
8. `category_hero_button_ar` (AR): "استكشفي المزيد"

### Category Items (12 rows - 6 categories × 2 languages):
9-20. 6 category items with English and Arabic labels

### CTA Section (6 rows):
21. `category_cta_text` (EN): "Do you know what's Missing"
22. `category_cta_text_ar` (AR): "تعرفي ما الذي ينقص؟"
23. `category_cta_title` (EN): "Us Working Together"
24. `category_cta_title_ar` (AR): "أن نعمل معاً"
25. `category_cta_button` (EN): "Contact me"
26. `category_cta_button_ar` (AR): "تواصلي معي"

**Total: ~26 rows**

---

## 📝 Example Rows to Add

### Row 1: Category Hero Title (English)
```
section: category
key: category_hero_title
content_en: My Work
content_ar: (leave empty)
metadata: (leave empty)
display_order: 0
```

### Row 2: Category Hero Title (Arabic)
```
section: category
key: category_hero_title_ar
content_en: (leave empty)
content_ar: أعمالي
metadata: (leave empty)
display_order: 0
```

### Row 3: Category Hero Subtitle (English)
```
section: category
key: category_hero_subtitle
content_en: My Creative Universe
content_ar: (leave empty)
metadata: (leave empty)
display_order: 1
```

### Row 4: Category Hero Subtitle (Arabic)
```
section: category
key: category_hero_subtitle_ar
content_en: (leave empty)
content_ar: عالمي الإبداعي
metadata: (leave empty)
display_order: 1
```

### Row 5: Category Hero Description (English)
```
section: category
key: category_hero_description
content_en: A showcase of projects that blend design, code, and imagination.
content_ar: (leave empty)
metadata: (leave empty)
display_order: 2
```

### Row 6: Category Hero Description (Arabic)
```
section: category
key: category_hero_description_ar
content_en: (leave empty)
content_ar: عرض لمشاريع تمزج بين التصميم والبرمجة والخيال.
metadata: (leave empty)
display_order: 2
```

### Row 7: Category Hero Button (English)
```
section: category
key: category_hero_button
content_en: Explore More
content_ar: (leave empty)
metadata: (leave empty)
display_order: 3
```

### Row 8: Category Hero Button (Arabic)
```
section: category
key: category_hero_button_ar
content_en: (leave empty)
content_ar: استكشفي المزيد
metadata: (leave empty)
display_order: 3
```

### Row 9: Category Item 1 - App Design (English)
```
section: category
key: category_item_app_design
content_en: (leave empty)
content_ar: (leave empty)
metadata: {"text": "App Design", "image": "/imgs/category/app-design-category.png", "href": "/app-design"}
display_order: 0
```

### Row 10: Category Item 1 - App Design (Arabic)
```
section: category
key: category_item_app_design_ar
content_en: (leave empty)
content_ar: (leave empty)
metadata: {"text": "تصميم تطبيقات", "image": "/imgs/category/app-design-category.png", "href": "/app-design-ar"}
display_order: 0
```

### Row 11: Category Item 2 - Web Design (English)
```
section: category
key: category_item_web_design
content_en: (leave empty)
content_ar: (leave empty)
metadata: {"text": "Web Design", "image": "/imgs/category/web-desogn-category.png", "href": "/web-design"}
display_order: 1
```

### Row 12: Category Item 2 - Web Design (Arabic)
```
section: category
key: category_item_web_design_ar
content_en: (leave empty)
content_ar: (leave empty)
metadata: {"text": "تصميم ويب", "image": "/imgs/category/web-desogn-category.png", "href": "/web-design-ar"}
display_order: 1
```

### Row 13: Category Item 3 - Graphic Design (English)
```
section: category
key: category_item_graphic_design
content_en: (leave empty)
content_ar: (leave empty)
metadata: {"text": "Graphic Design", "image": "/imgs/category/graphic-design-category.png", "href": "/graphic-design"}
display_order: 2
```

### Row 14: Category Item 3 - Graphic Design (Arabic)
```
section: category
key: category_item_graphic_design_ar
content_en: (leave empty)
content_ar: (leave empty)
metadata: {"text": "تصميم جرافيك", "image": "/imgs/category/graphic-design-category.png", "href": "/graphic-design-ar"}
display_order: 2
```

### Row 15: Category Item 4 - Coding (English)
```
section: category
key: category_item_coding
content_en: (leave empty)
content_ar: (leave empty)
metadata: {"text": "Coding", "image": "/imgs/category/coding-category.png", "href": "/404"}
display_order: 3
```

### Row 16: Category Item 4 - Coding (Arabic)
```
section: category
key: category_item_coding_ar
content_en: (leave empty)
content_ar: (leave empty)
metadata: {"text": "برمجة", "image": "/imgs/category/coding-category.png", "href": "/404-ar"}
display_order: 3
```

### Row 17: Category Item 5 - Blogs (English)
```
section: category
key: category_item_blogs
content_en: (leave empty)
content_ar: (leave empty)
metadata: {"text": "Blogs", "image": "/imgs/category/blogs-category.png", "href": "/blogs"}
display_order: 4
```

### Row 18: Category Item 5 - Blogs (Arabic)
```
section: category
key: category_item_blogs_ar
content_en: (leave empty)
content_ar: (leave empty)
metadata: {"text": "المدونة", "image": "/imgs/category/blogs-category.png", "href": "/blogs-ar"}
display_order: 4
```

### Row 19: Category Item 6 - 3D (English)
```
section: category
key: category_item_3d
content_en: (leave empty)
content_ar: (leave empty)
metadata: {"text": "3D", "image": "/imgs/category/3d-category.png", "href": "/404"}
display_order: 5
```

### Row 20: Category Item 6 - 3D (Arabic)
```
section: category
key: category_item_3d_ar
content_en: (leave empty)
content_ar: (leave empty)
metadata: {"text": "3D", "image": "/imgs/category/3d-category.png", "href": "/404-ar"}
display_order: 5
```

### Row 21: CTA Text (English)
```
section: category
key: category_cta_text
content_en: Do you know what's Missing
content_ar: (leave empty)
metadata: (leave empty)
display_order: 6
```

### Row 22: CTA Text (Arabic)
```
section: category
key: category_cta_text_ar
content_en: (leave empty)
content_ar: تعرفي ما الذي ينقص؟
metadata: (leave empty)
display_order: 6
```

### Row 23: CTA Title (English)
```
section: category
key: category_cta_title
content_en: Us Working Together
content_ar: (leave empty)
metadata: (leave empty)
display_order: 7
```

### Row 24: CTA Title (Arabic)
```
section: category
key: category_cta_title_ar
content_en: (leave empty)
content_ar: أن نعمل معاً
metadata: (leave empty)
display_order: 7
```

### Row 25: CTA Button (English)
```
section: category
key: category_cta_button
content_en: Contact me
content_ar: (leave empty)
metadata: (leave empty)
display_order: 8
```

### Row 26: CTA Button (Arabic)
```
section: category
key: category_cta_button_ar
content_en: (leave empty)
content_ar: تواصلي معي
metadata: (leave empty)
display_order: 8
```

---

## 🎯 Alternative: Dynamic Categories from Projects Table

**Instead of storing categories in `home_content`, you can:**

1. **Fetch categories dynamically from `projects` table:**
   ```javascript
   // Get unique categories from projects
   const { data } = await supabase
     .from('projects')
     .select('category')
     .eq('is_published', true);
   
   // Get unique categories
   const uniqueCategories = [...new Set(data.map(p => p.category))];
   ```

2. **Or create a separate `categories` table** (optional):
   - `id`, `slug`, `name_en`, `name_ar`, `image_url`, `href`, `display_order`
   - More structured approach
   - Better for managing category metadata

---

## 🎯 How to Use This Content

### In Your React App:

1. **Fetch category hero content:**
   ```javascript
   const { data } = await supabase
     .from('home_content')
     .select('*')
     .eq('section', 'category')
     .like('key', 'category_hero_%')
     .order('display_order');
   ```

2. **Fetch category items:**
   ```javascript
   const { data } = await supabase
     .from('home_content')
     .select('*')
     .eq('section', 'category')
     .like('key', 'category_item_%')
     .order('display_order');
   ```

3. **Fetch CTA content:**
   ```javascript
   const { data } = await supabase
     .from('home_content')
     .select('*')
     .eq('section', 'category')
     .like('key', 'category_cta_%')
     .order('display_order');
   ```

---

## ✅ Step-by-Step Checklist

### Add Category Content to `home_content` Table:
- [ ] Add hero section (8 rows)
- [ ] Add category items (12 rows - 6 categories × 2 languages)
- [ ] Add CTA section (6 rows)

**Total new rows: ~26 rows**

---

## 💡 Important Notes

1. **Same Table:**
   - Use the same `home_content` table
   - Differentiate by `section: 'category'`

2. **Category Items:**
   - Store category items in JSONB metadata:
   ```json
   {
     "text": "App Design",
     "image": "/imgs/category/app-design-category.png",
     "href": "/app-design"
   }
   ```

3. **Alternative Approach:**
   - You can fetch categories dynamically from `projects` table
   - OR create a separate `categories` table for better structure

4. **Section Names:**
   - Use `section: 'category'` for Category page content
   - Use `section: 'home'` for Home page content
   - Use `section: 'about'` for About page content

5. **Key Names:**
   - Prefix Category page keys with `category_`
   - Example: `category_hero_title`, `category_item_app_design`, `category_cta_title`

---

## 🚀 Summary

**Table Name:** `home_content` (same as home and about pages)

**Section:** `category`

**Total New Rows:** ~26 rows

**Content Types:**
- Hero section (title, subtitle, description, button)
- Category items (6 categories with images and links)
- CTA section (text, title, button)

**How to Use:**
1. Add Category page content to `home_content` table
2. Use `section: 'category'` to identify Category page content
3. Fetch content in React app by `section` and `key`
4. Display content dynamically

**Alternative:** Fetch categories dynamically from `projects` table instead of storing them separately.

**This allows you to manage all Category page content from Supabase Dashboard!** 🎯

