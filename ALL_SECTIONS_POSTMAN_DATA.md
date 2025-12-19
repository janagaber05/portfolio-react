# 📮 Complete Postman Data - Home, Category & About in One Table

All JSON data for `home_content` table with sections: `home`, `category`, and `about`.

---

## 🎯 Setup Postman Request

### For ALL requests:
1. **Method**: `POST`
2. **URL**: `https://kkvepvlkgppzwapbbynh.supabase.co/rest/v1/home_content`
3. **Headers**:
   ```
   apikey: YOUR_SUPABASE_ANON_KEY
   Authorization: Bearer YOUR_SUPABASE_ANON_KEY
   Content-Type: application/json
   Prefer: return=representation
   ```
4. **Body**: Select **"raw"** → **"JSON"**
5. Copy-paste the JSON below
6. Click **"Send"**

---

## 📋 SECTION 1: HOME (`section: "home"`) - 14 Rows

### Request 1: Know Me Title
```json
{
  "section": "home",
  "key": "know_me_title",
  "content_en": "Know Me",
  "display_order": 0
}
```

### Request 2: Know Me Content
```json
{
  "section": "home",
  "key": "know_me_content",
  "content_en": "<p>I'm a UX/UI Designer that always works on what she loves so she can give 100% results.</p><p>I work in everything I like, so I always love what I do.</p><p>I really like creating content and editing videos; I'm very creative in this part.</p><p>I get ideas and trends from nowhere and bring them to life.</p>",
  "display_order": 1
}
```

### Request 3: Approach Title
```json
{
  "section": "home",
  "key": "approach_title",
  "content_en": "My Approach as a UX/UI Designer",
  "display_order": 2
}
```

### Request 4: Approach Content
```json
{
  "section": "home",
  "key": "approach_content",
  "content_en": "Every project starts with listening. I translate business goals into streamlined flows, unlock opportunities during research and keep the storytelling vibrant until launch.",
  "display_order": 3
}
```

### Request 5: Strengths Title
```json
{
  "section": "home",
  "key": "strengths_title",
  "content_en": "My Strengths as a UX/UI Designer",
  "display_order": 4
}
```

### Request 6: Strengths Cards
```json
{
  "section": "home",
  "key": "strengths",
  "content_en": "",
  "metadata": {
    "strengths": [
      {
        "title": "Ambitious UX/UI designer",
        "description": "I always think big—building my own studio that brings bold media, digital marketing, content creation and web experiences together under one roof.",
        "background": "linear-gradient(188deg, rgba(193,172,255,0.95), rgba(98,67,199,0.92))"
      },
      {
        "title": "Creative & visionary UX/UI designer",
        "description": "Every project is a canvas. I sweat the micro-details—whether I am shaping a product flow or a brand story—to make sure each touchpoint feels intentional.",
        "background": "linear-gradient(189deg, rgba(186,165,255,0.94), rgba(104,73,200,0.92))"
      },
      {
        "title": "Resilient UX/UI designer",
        "description": "Setbacks fuel my focus. I return to the work with sharper energy, stronger ideas and the dedication to deliver what I promise.",
        "background": "linear-gradient(189deg, rgba(181,158,249,0.94), rgba(99,68,188,0.9))"
      },
      {
        "title": "Dedicated UX/UI designer",
        "description": "When I commit to a project I finish it at 100%. I stay curious, keep learning and bring the latest UX thinking into every launch.",
        "background": "linear-gradient(189deg, rgba(176,150,242,0.94), rgba(92,64,182,0.9))"
      },
      {
        "title": "Independent minded UX/UI designer",
        "description": "I do not copy. I invent. My process is uniquely mine—blending research with fearless experimentation to craft solutions that stand out.",
        "background": "linear-gradient(189deg, rgba(170,142,236,0.94), rgba(86,59,177,0.92))"
      }
    ]
  },
  "display_order": 5
}
```

### Request 7: Values Title
```json
{
  "section": "home",
  "key": "values_title",
  "content_en": "My Values as a UX/UI Designer",
  "display_order": 6
}
```

### Request 8: Values Cards
```json
{
  "section": "home",
  "key": "values",
  "content_en": "",
  "metadata": {
    "values": [
      {
        "title": "Human first",
        "description": "As a UX/UI designer I always prioritize user needs—my goal is to turn their goals into a product reality that feels intuitive and delightful."
      },
      {
        "title": "Always curious",
        "description": "As a UX/UI designer I keep learning every day. Design evolves fast, so I chase the updates, trends and insights that keep experiences fresh."
      },
      {
        "title": "Inventive spirit",
        "description": "As a UX/UI designer I love creating. I experiment, iterate and craft new solutions to any friction or problem the journey reveals."
      },
      {
        "title": "Collaboration is power",
        "description": "As a UX/UI designer I believe teamwork elevates every idea. Co-creating with product, engineering and marketing opens better paths forward."
      }
    ]
  },
  "display_order": 7
}
```

### Request 9: Growing Title
```json
{
  "section": "home",
  "key": "growing_title",
  "content_en": "Growing as a Designer",
  "display_order": 8
}
```

### Request 10: Growing Cards
```json
{
  "section": "home",
  "key": "growing",
  "content_en": "",
  "metadata": {
    "cards": [
      {
        "color": "#060010",
        "label": "01",
        "title": "01 — What are my Future Goals as a UX/UI Designer?",
        "description": "As a UX/UI designer I'm building my own company specialising in UX/UI design, digital marketing, branding, content creation, and web design. I'm also developing my skills to become a leading creative designer and future entrepreneur recognised in both business and design."
      },
      {
        "color": "#060010",
        "label": "02",
        "title": "02 — What is my Style as a UX/UI Designer?",
        "description": "My style is a mix of simplicity, creativity, and detail. Every design should be clear, modern, and easy to use, while still feeling unique and memorable."
      },
      {
        "color": "#060010",
        "label": "03",
        "title": "03 — What is my Inspiration as a UX/UI Designer?",
        "description": "I take inspiration from everyday life, different industries, and any problem I encounter. Inspiration can come from anything and anywhere—every challenge becomes a gateway to create practical, simple, and creative designs."
      },
      {
        "color": "#060010",
        "label": "04",
        "title": "04 — What is my Edge as a UX/UI Designer?",
        "description": "I combine creative design with business impact. I focus on the customer's dream and how to bring it to life, while ensuring each design helps the company grow, sell more, and connect better with its audience."
      },
      {
        "color": "#060010",
        "label": "05",
        "title": "05 — What is my Belief as a UX/UI Designer?",
        "description": "I believe UX/UI designers should always solve problems, not just decorate screens. Design is more than colours and layouts; it's about creating experiences that people trust and enjoy using."
      }
    ]
  },
  "display_order": 9
}
```

### Request 11: App Design Title
```json
{
  "section": "home",
  "key": "app_design_title",
  "content_en": "App Design",
  "display_order": 10
}
```

### Request 12: App Design Content
```json
{
  "section": "home",
  "key": "app_design_content",
  "content_en": "<p>Frictionless flows, clear UI states and purposeful micro-interactions that make everyday apps feel joyful and familiar.</p><p>I love translating complex journeys into polished mobile experiences with clean visuals and strong UX writing.</p>",
  "display_order": 11
}
```

### Request 13: App Design Label
```json
{
  "section": "home",
  "key": "app_design_label",
  "content_en": "App design",
  "display_order": 12
}
```

### Request 14: App Design Image
```json
{
  "section": "home",
  "key": "app_design_image",
  "content_en": "",
  "metadata": {
    "image_url": "/imgs/home page/app-design.png"
  },
  "display_order": 13
}
```

---

## 📋 SECTION 2: CATEGORY (`section: "category"`) - 14 Rows

### Request 15: Category Hero Title (EN)
```json
{
  "section": "category",
  "key": "category_hero_title",
  "content_en": "My Work",
  "content_ar": "أعمالي",
  "display_order": 0
}
```

### Request 16: Category Hero Subtitle (EN)
```json
{
  "section": "category",
  "key": "category_hero_subtitle",
  "content_en": "My Creative Universe",
  "content_ar": "عالمي الإبداعي",
  "display_order": 1
}
```

### Request 17: Category Hero Description (EN)
```json
{
  "section": "category",
  "key": "category_hero_description",
  "content_en": "A showcase of projects that blend design, code, and imagination.",
  "content_ar": "عرض لمشاريع تمزج بين التصميم والبرمجة والخيال.",
  "display_order": 2
}
```

### Request 18: Category Hero Button (EN)
```json
{
  "section": "category",
  "key": "category_hero_button",
  "content_en": "Explore More",
  "content_ar": "استكشفي المزيد",
  "display_order": 3
}
```

### Request 19: Category Items (All 6 categories in metadata)
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
        "image": "/imgs/category/app-design.png",
        "href": "/app-design"
      },
      {
        "id": "web-design",
        "label_en": "Web Design",
        "label_ar": "تصميم ويب",
        "image": "/imgs/category/web-design.png",
        "href": "/web-design"
      },
      {
        "id": "graphic-design",
        "label_en": "Graphic Design",
        "label_ar": "تصميم جرافيك",
        "image": "/imgs/category/graphic-design.png",
        "href": "/graphic-design"
      },
      {
        "id": "coding",
        "label_en": "Coding",
        "label_ar": "برمجة",
        "image": "/imgs/category/coding.png",
        "href": "/coding"
      },
      {
        "id": "blogs",
        "label_en": "Blogs",
        "label_ar": "المدونة",
        "image": "/imgs/category/blogs.png",
        "href": "/blogs"
      },
      {
        "id": "3d-design",
        "label_en": "3D",
        "label_ar": "ثلاثي الأبعاد",
        "image": "/imgs/category/3d-design.png",
        "href": "/3d-design"
      }
    ]
  },
  "display_order": 4
}
```

### Request 20: Category CTA Text (EN)
```json
{
  "section": "category",
  "key": "category_cta_text",
  "content_en": "Do you know what's Missing",
  "content_ar": "تعرفي ما الذي ينقص؟",
  "display_order": 5
}
```

### Request 21: Category CTA Title (EN)
```json
{
  "section": "category",
  "key": "category_cta_title",
  "content_en": "Us Working Together",
  "content_ar": "أن نعمل معاً",
  "display_order": 6
}
```

### Request 22: Category CTA Button (EN)
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

## 📋 SECTION 3: ABOUT (`section: "about"`) - 20 Rows

### Request 23: About Hero Title (EN)
```json
{
  "section": "about",
  "key": "about_hero_title",
  "content_en": "Let's Know Me Better",
  "content_ar": "دعنا نتعرف عليّ أكثر",
  "display_order": 0
}
```

### Request 24: About Divider Text (EN)
```json
{
  "section": "about",
  "key": "about_divider_text",
  "content_en": "Graphic Design • Branding • Poster Design •",
  "content_ar": "اعرفني أكثر ✦ رحلة تصميم ✦ تجربة ثرية ✦",
  "display_order": 1
}
```

### Request 25: About Know Me Heading (EN)
```json
{
  "section": "about",
  "key": "about_know_me_heading",
  "content_en": "Know Me",
  "content_ar": "تعرف عليّ",
  "display_order": 2
}
```

### Request 26: About Know Me Paragraph 1
```json
{
  "section": "about",
  "key": "about_know_me_1",
  "content_en": "I'm a UX/UI Designer that always work on what she loves so she can give 100% results",
  "content_ar": "أنا مصممة UX/UI أعمل دائماً فيما أحب لأقدم أفضل نتيجة ممكنة",
  "display_order": 3
}
```

### Request 27: About Know Me Paragraph 2
```json
{
  "section": "about",
  "key": "about_know_me_2",
  "content_en": "I work in every thing I like so I always love what I do",
  "content_ar": "أستمتع بكل ما أعمل عليه، ولذلك أحب عملي دائماً",
  "display_order": 4
}
```

### Request 28: About Know Me Paragraph 3
```json
{
  "section": "about",
  "key": "about_know_me_3",
  "content_en": "I really like creating content editing videos also I'm very creative in this part",
  "content_ar": "أحب صناعة المحتوى وتحرير الفيديوهات، وأنا مبدعة جداً في هذا الجزء",
  "display_order": 5
}
```

### Request 29: About Know Me Paragraph 4
```json
{
  "section": "about",
  "key": "about_know_me_4",
  "content_en": "idea, trends from no wear and creating them",
  "content_ar": "أبتكر الأفكار والاتجاهات من العدم وأحوّلها إلى واقع ملموس",
  "display_order": 6
}
```

### Request 30: About Approach Heading (EN)
```json
{
  "section": "about",
  "key": "about_approach_heading",
  "content_en": "My Approach as a UX/UI Designer",
  "content_ar": "منهجي كمصممة UX/UI",
  "display_order": 7
}
```

### Request 31: About Approach Content
```json
{
  "section": "about",
  "key": "about_approach_content",
  "content_en": "Every project starts with listening. I translate business goals into streamlined flows, unlock opportunities during research and keep the storytelling vibrant until launch.",
  "content_ar": "كل مشروع يبدأ بالاستماع. أترجم أهداف العمل إلى تدفقات مبسطة، وأكتشف الفرص أثناء البحث وأبقي السرد حياً حتى الإطلاق.",
  "display_order": 8
}
```

### Request 32: About Strengths Heading (EN)
```json
{
  "section": "about",
  "key": "about_strengths_heading",
  "content_en": "My Strengths as a UX/UI Designer",
  "content_ar": "نقاط قوتي كمصممة UX/UI",
  "display_order": 9
}
```

### Request 33: About Strengths Cards (Same as home - reuse or add separately)
```json
{
  "section": "about",
  "key": "about_strengths",
  "content_en": "",
  "metadata": {
    "strengths": [
      {
        "title": "Ambitious UX/UI designer",
        "description": "I always think big—building my own studio that brings bold media, digital marketing, content creation and web experiences together under one roof.",
        "background": "linear-gradient(188deg, rgba(193,172,255,0.95), rgba(98,67,199,0.92))"
      },
      {
        "title": "Creative & visionary UX/UI designer",
        "description": "Every project is a canvas. I sweat the micro-details—whether I am shaping a product flow or a brand story—to make sure each touchpoint feels intentional.",
        "background": "linear-gradient(189deg, rgba(186,165,255,0.94), rgba(104,73,200,0.92))"
      },
      {
        "title": "Resilient UX/UI designer",
        "description": "Setbacks fuel my focus. I return to the work with sharper energy, stronger ideas and the dedication to deliver what I promise.",
        "background": "linear-gradient(189deg, rgba(181,158,249,0.94), rgba(99,68,188,0.9))"
      },
      {
        "title": "Dedicated UX/UI designer",
        "description": "When I commit to a project I finish it at 100%. I stay curious, keep learning and bring the latest UX thinking into every launch.",
        "background": "linear-gradient(189deg, rgba(176,150,242,0.94), rgba(92,64,182,0.9))"
      },
      {
        "title": "Independent minded UX/UI designer",
        "description": "I do not copy. I invent. My process is uniquely mine—blending research with fearless experimentation to craft solutions that stand out.",
        "background": "linear-gradient(189deg, rgba(170,142,236,0.94), rgba(86,59,177,0.92))"
      }
    ]
  },
  "display_order": 10
}
```

### Request 34: About Values Heading (EN)
```json
{
  "section": "about",
  "key": "about_values_heading",
  "content_en": "My Values as a UX/UI Designer",
  "content_ar": "قيمي كمصممة UX/UI",
  "display_order": 11
}
```

### Request 35: About Values Cards
```json
{
  "section": "about",
  "key": "about_values",
  "content_en": "",
  "metadata": {
    "values": [
      {
        "title": "Human first",
        "description": "As a UX/UI designer I always prioritize user needs—my goal is to turn their goals into a product reality that feels intuitive and delightful."
      },
      {
        "title": "Always curious",
        "description": "As a UX/UI designer I keep learning every day. Design evolves fast, so I chase the updates, trends and insights that keep experiences fresh."
      },
      {
        "title": "Inventive spirit",
        "description": "As a UX/UI designer I love creating. I experiment, iterate and craft new solutions to any friction or problem the journey reveals."
      },
      {
        "title": "Collaboration is power",
        "description": "As a UX/UI designer I believe teamwork elevates every idea. Co-creating with product, engineering and marketing opens better paths forward."
      }
    ]
  },
  "display_order": 12
}
```

### Request 36: About Stack/QA Heading (EN)
```json
{
  "section": "about",
  "key": "about_stack_heading",
  "content_en": "Growing as a Designer",
  "content_ar": "نموي كمصممة",
  "display_order": 13
}
```

### Request 37: About Stack/QA Cards (Same as Growing cards from home)
```json
{
  "section": "about",
  "key": "about_stack_cards",
  "content_en": "",
  "metadata": {
    "cards": [
      {
        "color": "#060010",
        "label": "01",
        "title": "01 — What are my Future Goals as a UX/UI Designer?",
        "description": "As a UX/UI designer I'm building my own company specialising in UX/UI design, digital marketing, branding, content creation, and web design. I'm also developing my skills to become a leading creative designer and future entrepreneur recognised in both business and design."
      },
      {
        "color": "#060010",
        "label": "02",
        "title": "02 — What is my Style as a UX/UI Designer?",
        "description": "My style is a mix of simplicity, creativity, and detail. Every design should be clear, modern, and easy to use, while still feeling unique and memorable."
      },
      {
        "color": "#060010",
        "label": "03",
        "title": "03 — What is my Inspiration as a UX/UI Designer?",
        "description": "I take inspiration from everyday life, different industries, and any problem I encounter. Inspiration can come from anything and anywhere—every challenge becomes a gateway to create practical, simple, and creative designs."
      },
      {
        "color": "#060010",
        "label": "04",
        "title": "04 — What is my Edge as a UX/UI Designer?",
        "description": "I combine creative design with business impact. I focus on the customer's dream and how to bring it to life, while ensuring each design helps the company grow, sell more, and connect better with its audience."
      },
      {
        "color": "#060010",
        "label": "05",
        "title": "05 — What is my Belief as a UX/UI Designer?",
        "description": "I believe UX/UI designers should always solve problems, not just decorate screens. Design is more than colours and layouts; it's about creating experiences that people trust and enjoy using."
      }
    ]
  },
  "display_order": 14
}
```

---

## ✅ Complete Checklist

### Home Section (14 requests)
- [ ] Request 1: Know Me Title
- [ ] Request 2: Know Me Content
- [ ] Request 3: Approach Title
- [ ] Request 4: Approach Content
- [ ] Request 5: Strengths Title
- [ ] Request 6: Strengths Cards
- [ ] Request 7: Values Title
- [ ] Request 8: Values Cards
- [ ] Request 9: Growing Title
- [ ] Request 10: Growing Cards
- [ ] Request 11: App Design Title
- [ ] Request 12: App Design Content
- [ ] Request 13: App Design Label
- [ ] Request 14: App Design Image

### Category Section (8 requests)
- [ ] Request 15: Category Hero Title
- [ ] Request 16: Category Hero Subtitle
- [ ] Request 17: Category Hero Description
- [ ] Request 18: Category Hero Button
- [ ] Request 19: Category Items (6 categories)
- [ ] Request 20: Category CTA Text
- [ ] Request 21: Category CTA Title
- [ ] Request 22: Category CTA Button

### About Section (15 requests)
- [ ] Request 23: About Hero Title
- [ ] Request 24: About Divider Text
- [ ] Request 25: About Know Me Heading
- [ ] Request 26: About Know Me 1
- [ ] Request 27: About Know Me 2
- [ ] Request 28: About Know Me 3
- [ ] Request 29: About Know Me 4
- [ ] Request 30: About Approach Heading
- [ ] Request 31: About Approach Content
- [ ] Request 32: About Strengths Heading
- [ ] Request 33: About Strengths Cards
- [ ] Request 34: About Values Heading
- [ ] Request 35: About Values Cards
- [ ] Request 36: About Stack Heading
- [ ] Request 37: About Stack Cards

**Total: 37 POST requests**

---

## 🎯 How to Query in Your Code

### Get Home Content:
```javascript
const { data } = await supabase
  .from('home_content')
  .select('*')
  .eq('section', 'home')
  .order('display_order');
```

### Get Category Content:
```javascript
const { data } = await supabase
  .from('home_content')
  .select('*')
  .eq('section', 'category')
  .order('display_order');
```

### Get About Content:
```javascript
const { data } = await supabase
  .from('home_content')
  .select('*')
  .eq('section', 'about')
  .order('display_order');
```

---

## 🚀 You're Ready!

All data is organized by `section` field. Just copy-paste each JSON into Postman and send! 🎉

