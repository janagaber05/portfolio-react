# Home, About & Category Pages - What Rows to Add
## Complete Guide: All Rows for home_content Table

---

## 📊 Overview

**All three pages use the same table:** `home_content`

**Differentiate by `section`:**
- `section: 'home'` → Home page content
- `section: 'about'` → About page content
- `section: 'category'` → Category page content

**Total rows needed:** ~110 rows (across all three pages)

---

## 🏠 HOME PAGE ROWS

### Hero Section (6 rows)

**Row 1: Hero Title (English)**
```
section: home
key: hero_title
content_en: Hello Im Jana Ahmed Ahmed<br />Passionate UX/UI Designer
content_ar: (leave empty)
metadata: (leave empty)
display_order: 0
```

**Row 2: Hero Title (Arabic)**
```
section: home
key: hero_title_ar
content_en: (leave empty)
content_ar: مرحباً أنا جنا أحمد أحمد<br />مصممة UX/UI شغوفة
metadata: (leave empty)
display_order: 0
```

**Row 3: Hero Subtitle (English)**
```
section: home
key: hero_subtitle
content_en: UX/UI Designer | Graphic Designer | Content Creator | Sales
content_ar: (leave empty)
metadata: (leave empty)
display_order: 1
```

**Row 4: Hero Subtitle (Arabic)**
```
section: home
key: hero_subtitle_ar
content_en: (leave empty)
content_ar: مصممة UX/UI | مصممة جرافيك | صانعة محتوى | مبيعات
metadata: (leave empty)
display_order: 1
```

**Row 5: Hero Paragraph (English)**
```
section: home
key: hero_paragraph
content_en: I'm Jana a hijabi girl with a designer's eye and a car lover's heart. I mix pixels and horsepower like it's an art form. I believe every design (and every car) should have personality, attitude, and a little chaos — just like me.
content_ar: (leave empty)
metadata: (leave empty)
display_order: 2
```

**Row 6: Hero Paragraph (Arabic)**
```
section: home
key: hero_paragraph_ar
content_en: (leave empty)
content_ar: أنا جنا، فتاة محجبة بعين مصممة وقلب يعشق السيارات. أمزج البكسلات مع الحصان الميكانيكي كأنه فن. أؤمن أن كل تصميم — مثل كل سيارة — يجب أن يمتلك شخصية وروحاً وقليلاً من الفوضى تماماً مثلي.
metadata: (leave empty)
display_order: 2
```

---

### Know Me Section (8 rows)

**Row 7: Know Me Paragraph 1 (English)**
```
section: home
key: know_me_1
content_en: I'm a UX/UI Designer that always works on what she loves so she can give 100% results.
content_ar: (leave empty)
metadata: (leave empty)
display_order: 0
```

**Row 8: Know Me Paragraph 1 (Arabic)**
```
section: home
key: know_me_1_ar
content_en: (leave empty)
content_ar: أنا مصممة UX/UI أعمل دائماً فيما أحب لأقدم أفضل نتيجة ممكنة.
metadata: (leave empty)
display_order: 0
```

**Row 9: Know Me Paragraph 2 (English)**
```
section: home
key: know_me_2
content_en: I work in everything I like, so I always love what I do.
content_ar: (leave empty)
metadata: (leave empty)
display_order: 1
```

**Row 10: Know Me Paragraph 2 (Arabic)**
```
section: home
key: know_me_2_ar
content_en: (leave empty)
content_ar: أستمتع بكل ما أعمل عليه، ولذلك أحب عملي دائماً.
metadata: (leave empty)
display_order: 1
```

**Row 11: Know Me Paragraph 3 (English)**
```
section: home
key: know_me_3
content_en: I really like creating content and editing videos; I'm very creative in this part.
content_ar: (leave empty)
metadata: (leave empty)
display_order: 2
```

**Row 12: Know Me Paragraph 3 (Arabic)**
```
section: home
key: know_me_3_ar
content_en: (leave empty)
content_ar: أحب صناعة المحتوى وتحرير الفيديوهات، وأنا مبدعة جداً في هذا الجزء.
metadata: (leave empty)
display_order: 2
```

**Row 13: Know Me Paragraph 4 (English)**
```
section: home
key: know_me_4
content_en: I get ideas and trends from nowhere and bring them to life.
content_ar: (leave empty)
metadata: (leave empty)
display_order: 3
```

**Row 14: Know Me Paragraph 4 (Arabic)**
```
section: home
key: know_me_4_ar
content_en: (leave empty)
content_ar: أبتكر الأفكار والاتجاهات من العدم وأحوّلها إلى واقع ملموس.
metadata: (leave empty)
display_order: 3
```

---

### Strengths Section (10 rows - 5 cards × 2 languages)

**Row 15: Strength Card 1 (English)**
```
section: strengths
key: strength_1
content_en: (leave empty)
content_ar: (leave empty)
metadata: {"title": "Ambitious UX/UI designer", "description": "I always think big—building my own studio that brings bold media, digital marketing, content creation and web experiences together under one roof.", "background": "linear-gradient(188deg, rgba(193,172,255,0.95), rgba(98,67,199,0.92))"}
display_order: 0
```

**Row 16: Strength Card 1 (Arabic)**
```
section: strengths
key: strength_1_ar
content_en: (leave empty)
content_ar: (leave empty)
metadata: {"title": "مصممة UX/UI طموحة", "description": "أفكر دائماً بحجم أكبر؛ تأسيس شركة تجمع التسويق الرقمي وصناعة المحتوى وتصميم الويب تحت علامة واحدة جريئة.", "background": "linear-gradient(188deg, rgba(193,172,255,0.95), rgba(98,67,199,0.92))"}
display_order: 0
```

**Row 17-24: Strength Cards 2-5** (Follow same pattern for remaining 4 cards)

---

### Growing Cards Section (10 rows - 5 cards × 2 languages)

**Row 25: Growing Card 1 (English)**
```
section: growing
key: growing_1
content_en: (leave empty)
content_ar: (leave empty)
metadata: {"label": "01", "title": "01 — What are my Future Goals as a UX/UI Designer?", "description": "As a UX/UI designer I'm building my own company specialising in UX/UI design, digital marketing, branding, content creation, and web design. I'm also developing my skills to become a leading creative designer and future entrepreneur recognised in both business and design."}
display_order: 0
```

**Row 26-34: Growing Cards 2-5** (Follow same pattern)

---

### Values Section (8 rows - 4 cards × 2 languages)

**Row 35: Value Card 1 (English)**
```
section: values
key: value_1
content_en: (leave empty)
content_ar: (leave empty)
metadata: {"title": "Human first", "description": "As a UX/UI designer I always prioritize user needs—my goal is to turn their goals into a product reality that feels intuitive and delightful."}
display_order: 0
```

**Row 36-42: Value Cards 2-4** (Follow same pattern)

---

### Contact Section (2 rows)

**Row 43: Contact Email**
```
section: contact
key: contact_email
content_en: JanaGaber9201@gamil.Com
content_ar: (leave empty)
metadata: (leave empty)
display_order: 0
```

**Row 44: Contact Phone**
```
section: contact
key: contact_phone
content_en: 01141120002
content_ar: (leave empty)
metadata: (leave empty)
display_order: 1
```

---

### Other Home Sections (6 rows)

**Row 45: Approach Title (English)**
```
section: home
key: approach_title
content_en: My Approach as a UX/UI Designer
content_ar: (leave empty)
metadata: (leave empty)
display_order: 3
```

**Row 46: Approach Text (English)**
```
section: home
key: approach_text
content_en: Every project starts with listening. I translate business goals into streamlined flows, unlock opportunities during research and keep the storytelling vibrant until launch.
content_ar: (leave empty)
metadata: (leave empty)
display_order: 4
```

**Row 47-50: App Design, Web Design sections** (Add similar rows)

---

## 📖 ABOUT PAGE ROWS

### Hero Section (2 rows)

**Row 51: About Hero Title (English)**
```
section: about
key: about_hero_title
content_en: Let's Know <span className="accent">Me Better</span>
content_ar: (leave empty)
metadata: (leave empty)
display_order: 0
```

**Row 52: About Hero Title (Arabic)**
```
section: about
key: about_hero_title_ar
content_en: (leave empty)
content_ar: دعنا نتعرف <span className="accent">عليّ أكثر</span>
metadata: (leave empty)
display_order: 0
```

---

### Divider Section (2 rows)

**Row 53: About Divider (English)**
```
section: about
key: about_divider_text
content_en: Graphic Design • Branding • Poster Design •
content_ar: (leave empty)
metadata: (leave empty)
display_order: 1
```

**Row 54: About Divider (Arabic)**
```
section: about
key: about_divider_text_ar
content_en: (leave empty)
content_ar: اعرفني أكثر ✦ رحلة تصميم ✦ تجربة ثرية ✦
metadata: (leave empty)
display_order: 1
```

---

### Know Me Section (9 rows)

**Row 55: About Know Me Heading (English)**
```
section: about
key: about_know_me_heading
content_en: Know Me
content_ar: (leave empty)
metadata: (leave empty)
display_order: 2
```

**Row 56-62: About Know Me Paragraphs** (4 paragraphs × 2 languages)

---

### Approach Section (4 rows)

**Row 63: About Approach Heading (English)**
```
section: about
key: about_approach_heading
content_en: My Approach as a UX/UI Designer
content_ar: (leave empty)
metadata: (leave empty)
display_order: 4
```

**Row 64: About Approach Text (English)**
```
section: about
key: about_approach_text
content_en: As a UX/UI designer Web developer I believe that every challenge and problem can be solved by design so by using UX and web design I tend t create solutions to these problems
content_ar: (leave empty)
metadata: (leave empty)
display_order: 5
```

**Row 65-66: About Approach (Arabic)** (Add Arabic versions)

---

### Q&A Cards Section (10 rows - 5 cards × 2 languages)

**Row 67: Q&A Card 1 (English)**
```
section: about
key: about_qa_1
content_en: (leave empty)
content_ar: (leave empty)
metadata: {"title": "What are my Future Goals as a UX/UI Designer?", "description": "As a UX/UI designer I'm working on building my own company specializing in UX/UI design , marketing , branding , content creation and web design. Also as a UX/UI designer I'm working on my own skills to become a leading creative designer entrepreneur recognized in business and designing.", "type": "dark"}
display_order: 0
```

**Row 68-76: Q&A Cards 2-5** (Follow same pattern)

---

## 📁 CATEGORY PAGE ROWS

### Hero Section (8 rows)

**Row 77: Category Hero Title (English)**
```
section: category
key: category_hero_title
content_en: My Work
content_ar: (leave empty)
metadata: (leave empty)
display_order: 0
```

**Row 78: Category Hero Title (Arabic)**
```
section: category
key: category_hero_title_ar
content_en: (leave empty)
content_ar: أعمالي
metadata: (leave empty)
display_order: 0
```

**Row 79: Category Hero Subtitle (English)**
```
section: category
key: category_hero_subtitle
content_en: My Creative Universe
content_ar: (leave empty)
metadata: (leave empty)
display_order: 1
```

**Row 80: Category Hero Subtitle (Arabic)**
```
section: category
key: category_hero_subtitle_ar
content_en: (leave empty)
content_ar: عالمي الإبداعي
metadata: (leave empty)
display_order: 1
```

**Row 81: Category Hero Description (English)**
```
section: category
key: category_hero_description
content_en: A showcase of projects that blend design, code, and imagination.
content_ar: (leave empty)
metadata: (leave empty)
display_order: 2
```

**Row 82: Category Hero Description (Arabic)**
```
section: category
key: category_hero_description_ar
content_en: (leave empty)
content_ar: عرض لمشاريع تمزج بين التصميم والبرمجة والخيال.
metadata: (leave empty)
display_order: 2
```

**Row 83: Category Hero Button (English)**
```
section: category
key: category_hero_button
content_en: Explore More
content_ar: (leave empty)
metadata: (leave empty)
display_order: 3
```

**Row 84: Category Hero Button (Arabic)**
```
section: category
key: category_hero_button_ar
content_en: (leave empty)
content_ar: استكشفي المزيد
metadata: (leave empty)
display_order: 3
```

---

### Category Items Section (12 rows - 6 categories × 2 languages)

**Row 85: Category Item 1 - App Design (English)**
```
section: category
key: category_item_app_design
content_en: (leave empty)
content_ar: (leave empty)
metadata: {"text": "App Design", "image": "/imgs/category/app-design-category.png", "href": "/app-design"}
display_order: 0
```

**Row 86: Category Item 1 - App Design (Arabic)**
```
section: category
key: category_item_app_design_ar
content_en: (leave empty)
content_ar: (leave empty)
metadata: {"text": "تصميم تطبيقات", "image": "/imgs/category/app-design-category.png", "href": "/app-design-ar"}
display_order: 0
```

**Row 87-96: Category Items 2-6** (Web Design, Graphic Design, Coding, Blogs, 3D)

---

### CTA Section (6 rows)

**Row 97: Category CTA Text (English)**
```
section: category
key: category_cta_text
content_en: Do you know what's Missing
content_ar: (leave empty)
metadata: (leave empty)
display_order: 6
```

**Row 98: Category CTA Text (Arabic)**
```
section: category
key: category_cta_text_ar
content_en: (leave empty)
content_ar: تعرفي ما الذي ينقص؟
metadata: (leave empty)
display_order: 6
```

**Row 99: Category CTA Title (English)**
```
section: category
key: category_cta_title
content_en: Us Working Together
content_ar: (leave empty)
metadata: (leave empty)
display_order: 7
```

**Row 100: Category CTA Title (Arabic)**
```
section: category
key: category_cta_title_ar
content_en: (leave empty)
content_ar: أن نعمل معاً
metadata: (leave empty)
display_order: 7
```

**Row 101: Category CTA Button (English)**
```
section: category
key: category_cta_button
content_en: Contact me
content_ar: (leave empty)
metadata: (leave empty)
display_order: 8
```

**Row 102: Category CTA Button (Arabic)**
```
section: category
key: category_cta_button_ar
content_en: (leave empty)
content_ar: تواصلي معي
metadata: (leave empty)
display_order: 8
```

---

## 📋 Quick Summary

### Home Page Rows: ~50 rows
- Hero section: 6 rows
- Know Me: 8 rows
- Strengths: 10 rows
- Growing cards: 10 rows
- Values: 8 rows
- Contact: 2 rows
- Other sections: 6 rows

### About Page Rows: ~27 rows
- Hero: 2 rows
- Divider: 2 rows
- Know Me: 9 rows
- Approach: 4 rows
- Q&A cards: 10 rows

### Category Page Rows: ~26 rows
- Hero: 8 rows
- Category items: 12 rows
- CTA: 6 rows

**Total: ~103 rows**

---

## ✅ Checklist

**Before adding rows:**
- [ ] Create `home_content` table
- [ ] Add all columns (id, section, key, content_en, content_ar, metadata, display_order, created_at, updated_at)

**Add rows:**
- [ ] Home page rows (~50 rows)
- [ ] About page rows (~27 rows)
- [ ] Category page rows (~26 rows)

**After adding rows:**
- [ ] Verify all rows are added
- [ ] Check that `section` values are correct
- [ ] Check that `key` values are unique within each section

---

## 💡 Important Notes

1. **Section Names:**
   - Use `section: 'home'` for Home page
   - Use `section: 'about'` for About page
   - Use `section: 'category'` for Category page
   - Use `section: 'strengths'` for shared strengths
   - Use `section: 'values'` for shared values
   - Use `section: 'contact'` for contact info

2. **Key Names:**
   - Must be unique within each section
   - Use descriptive names: `hero_title`, `know_me_1`, `strength_1`, etc.

3. **Metadata:**
   - Use JSON format for cards
   - Example: `{"title": "...", "description": "...", "background": "..."}`

4. **Display Order:**
   - Use numbers (0, 1, 2, 3...) to control sequence
   - Lower numbers appear first

**This guide shows all the rows you need to add!** 🚀

