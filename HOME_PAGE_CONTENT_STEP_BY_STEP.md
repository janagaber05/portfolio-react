# 🏠 Home Page Content - Step by Step Guide

Complete guide to add all home page content to Supabase.

---

## 📊 What You Need

**3 Tables:**
1. `home_content` - 14 rows
2. `skills` - 12 rows  
3. `experience` - 2 rows (minimum)

---

## 🎯 Method 1: Supabase Dashboard (Easiest)

### Step 1: Open Table Editor
1. Go to Supabase Dashboard
2. Click **"Table Editor"** (left sidebar)
3. Select **`home_content`** table

### Step 2: Add Each Row
Click **"Insert row"** for each row below, fill in the fields, and click **"Save"**.

---

## 📝 Row-by-Row Instructions

### Row 1: Know Me Title
- `section`: `home`
- `key`: `know_me_title`
- `content_en`: `Know Me`
- `display_order`: `0`
- Leave other fields empty

### Row 2: Know Me Content
- `section`: `home`
- `key`: `know_me_content`
- `content_en`: 
```
<p>I'm a UX/UI Designer that always works on what she loves so she can give 100% results.</p><p>I work in everything I like, so I always love what I do.</p><p>I really like creating content and editing videos; I'm very creative in this part.</p><p>I get ideas and trends from nowhere and bring them to life.</p>
```
- `display_order`: `1`

### Row 3: Approach Title
- `section`: `home`
- `key`: `approach_title`
- `content_en`: `My Approach as a UX/UI Designer`
- `display_order`: `2`

### Row 4: Approach Content
- `section`: `home`
- `key`: `approach_content`
- `content_en`: `Every project starts with listening. I translate business goals into streamlined flows, unlock opportunities during research and keep the storytelling vibrant until launch.`
- `display_order`: `3`

### Row 5: Strengths Title
- `section`: `home`
- `key`: `strengths_title`
- `content_en`: `My Strengths as a UX/UI Designer`
- `display_order`: `4`

### Row 6: Strengths Cards (JSON)
- `section`: `home`
- `key`: `strengths`
- `content_en`: (leave empty)
- `metadata`: Click the JSON icon and paste this:
```json
{
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
}
```
- `display_order`: `5`

### Row 7: Values Title
- `section`: `home`
- `key`: `values_title`
- `content_en`: `My Values as a UX/UI Designer`
- `display_order`: `6`

### Row 8: Values Cards (JSON)
- `section`: `home`
- `key`: `values`
- `content_en`: (leave empty)
- `metadata`: Click the JSON icon and paste this:
```json
{
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
}
```
- `display_order`: `7`

### Row 9: Growing Title
- `section`: `home`
- `key`: `growing_title`
- `content_en`: `Growing as a Designer`
- `display_order`: `8`

### Row 10: Growing Cards (JSON)
- `section`: `home`
- `key`: `growing`
- `content_en`: (leave empty)
- `metadata`: Click the JSON icon and paste this:
```json
{
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
}
```
- `display_order`: `9`

### Row 11: App Design Title
- `section`: `home`
- `key`: `app_design_title`
- `content_en`: `App Design`
- `display_order`: `10`

### Row 12: App Design Content
- `section`: `home`
- `key`: `app_design_content`
- `content_en`: 
```
<p>Frictionless flows, clear UI states and purposeful micro-interactions that make everyday apps feel joyful and familiar.</p><p>I love translating complex journeys into polished mobile experiences with clean visuals and strong UX writing.</p>
```
- `display_order`: `11`

### Row 13: App Design Label
- `section`: `home`
- `key`: `app_design_label`
- `content_en`: `App design`
- `display_order`: `12`

### Row 14: App Design Image (Optional)
- `section`: `home`
- `key`: `app_design_image`
- `content_en`: (leave empty)
- `metadata`: Click the JSON icon and paste this:
```json
{
  "image_url": "/imgs/home page/app-design.png"
}
```
- `display_order`: `13`

---

## 🎯 Table 2: Skills

### Switch to `skills` Table

Add these 12 rows:

#### Row 1: PS
- `name`: `PS`
- `display_order`: `0`

#### Row 2: PR
- `name`: `PR`
- `display_order`: `1`

#### Row 3: AN
- `name`: `AN`
- `display_order`: `2`

#### Row 4: LR
- `name`: `LR`
- `display_order`: `3`

#### Row 5: Figma
- `name`: `Figma`
- `icon_type`: `figma`
- `display_order`: `4`

#### Row 6: PS (second)
- `name`: `PS`
- `display_order`: `5`

#### Row 7: Adobe
- `name`: `Adobe`
- `icon_type`: `adobe`
- `display_order`: `6`

#### Row 8: AE
- `name`: `AE`
- `display_order`: `7`

#### Row 9: AI
- `name`: `AI`
- `display_order`: `8`

#### Row 10: CSS
- `name`: `CSS`
- `display_order`: `9`

#### Row 11: HTML
- `name`: `HTML`
- `display_order`: `10`

#### Row 12: JS
- `name`: `JS`
- `display_order`: `11`

---

## 🎯 Table 3: Experience

### Switch to `experience` Table

Add these 2 rows:

#### Row 1: Egypt University
- `type`: `education`
- `start_year`: `2025`
- `end_year`: `2026`
- `institution`: `Egypt University of Informatics`
- `title`: `Digital Arts & Design – UX/UI`
- `display_order`: `0`

#### Row 2: CLS Center
- `type`: `education`
- `start_year`: `2024`
- `end_year`: `2024`
- `institution`: `CLS Center`
- `title`: `Front-end Code`
- `display_order`: `1`

---

## 🚀 Method 2: Postman (Faster)

### Setup
1. **Method**: `POST`
2. **URL**: `https://[your-project-id].supabase.co/rest/v1/home_content`
3. **Headers**:
   ```
   apikey: YOUR_SUPABASE_ANON_KEY
   Authorization: Bearer YOUR_SUPABASE_ANON_KEY
   Content-Type: application/json
   Prefer: return=representation
   ```

### Copy-Paste JSON for Each Row

#### Row 1: Know Me Title
```json
{
  "section": "home",
  "key": "know_me_title",
  "content_en": "Know Me",
  "display_order": 0
}
```

#### Row 2: Know Me Content
```json
{
  "section": "home",
  "key": "know_me_content",
  "content_en": "<p>I'm a UX/UI Designer that always works on what she loves so she can give 100% results.</p><p>I work in everything I like, so I always love what I do.</p><p>I really like creating content and editing videos; I'm very creative in this part.</p><p>I get ideas and trends from nowhere and bring them to life.</p>",
  "display_order": 1
}
```

#### Row 3: Approach Title
```json
{
  "section": "home",
  "key": "approach_title",
  "content_en": "My Approach as a UX/UI Designer",
  "display_order": 2
}
```

#### Row 4: Approach Content
```json
{
  "section": "home",
  "key": "approach_content",
  "content_en": "Every project starts with listening. I translate business goals into streamlined flows, unlock opportunities during research and keep the storytelling vibrant until launch.",
  "display_order": 3
}
```

#### Row 5: Strengths Title
```json
{
  "section": "home",
  "key": "strengths_title",
  "content_en": "My Strengths as a UX/UI Designer",
  "display_order": 4
}
```

#### Row 6: Strengths Cards
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

#### Row 7: Values Title
```json
{
  "section": "home",
  "key": "values_title",
  "content_en": "My Values as a UX/UI Designer",
  "display_order": 6
}
```

#### Row 8: Values Cards
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

#### Row 9: Growing Title
```json
{
  "section": "home",
  "key": "growing_title",
  "content_en": "Growing as a Designer",
  "display_order": 8
}
```

#### Row 10: Growing Cards
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

#### Row 11: App Design Title
```json
{
  "section": "home",
  "key": "app_design_title",
  "content_en": "App Design",
  "display_order": 10
}
```

#### Row 12: App Design Content
```json
{
  "section": "home",
  "key": "app_design_content",
  "content_en": "<p>Frictionless flows, clear UI states and purposeful micro-interactions that make everyday apps feel joyful and familiar.</p><p>I love translating complex journeys into polished mobile experiences with clean visuals and strong UX writing.</p>",
  "display_order": 11
}
```

#### Row 13: App Design Label
```json
{
  "section": "home",
  "key": "app_design_label",
  "content_en": "App design",
  "display_order": 12
}
```

#### Row 14: App Design Image
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

## ✅ Checklist

- [ ] Added 14 rows to `home_content` table
- [ ] All rows have `section = 'home'`
- [ ] Added strengths JSON metadata
- [ ] Added values JSON metadata
- [ ] Added growing JSON metadata
- [ ] Added 12 rows to `skills` table
- [ ] Set `icon_type = 'figma'` for Figma
- [ ] Set `icon_type = 'adobe'` for Adobe
- [ ] Added 2 rows to `experience` table
- [ ] All experience rows have `type = 'education'`
- [ ] Tested data appears in your app

---

## 🎉 Done!

Your home page content is now in Supabase! The app will automatically fetch and display it.

