# Home Page Supabase Data - Complete Guide
## Exact Data and Rows to Add in Supabase

---

## 📊 Overview

Your home page needs **3 tables**:
1. **`home_content`** - All text content (Know Me, Approach, Strengths, Values, Growing, App Design)
2. **`skills`** - Technical skills (PS, PR, Figma, CSS, HTML, etc.)
3. **`experience`** - Education entries

---

## 🎯 Table 1: `home_content`

### Required Columns:
- `id` (uuid, primary key)
- `section` (text) - Must be `'home'` for home page
- `key` (text) - Unique identifier
- `content_en` (text) - English content
- `content_ar` (text) - Arabic content (optional)
- `metadata` (jsonb) - For cards data
- `display_order` (int4) - Order for display
- `created_at` (timestamptz)
- `updated_at` (timestamptz)

---

## 📝 Rows to Add to `home_content` Table

### Row 1: Know Me Title
```
section: home
key: know_me_title
content_en: Know Me
content_ar: (leave empty or add Arabic)
metadata: (leave empty)
display_order: 0
```

### Row 2: Know Me Content
```
section: home
key: know_me_content
content_en: <p>I'm a UX/UI Designer that always works on what she loves so she can give 100% results.</p><p>I work in everything I like, so I always love what I do.</p><p>I really like creating content and editing videos; I'm very creative in this part.</p><p>I get ideas and trends from nowhere and bring them to life.</p>
content_ar: (leave empty or add Arabic)
metadata: (leave empty)
display_order: 1
```

### Row 3: Approach Title
```
section: home
key: approach_title
content_en: My Approach as a UX/UI Designer
content_ar: (leave empty or add Arabic)
metadata: (leave empty)
display_order: 2
```

### Row 4: Approach Content
```
section: home
key: approach_content
content_en: Every project starts with listening. I translate business goals into streamlined flows, unlock opportunities during research and keep the storytelling vibrant until launch.
content_ar: (leave empty or add Arabic)
metadata: (leave empty)
display_order: 3
```

### Row 5: Strengths Title
```
section: home
key: strengths_title
content_en: My Strengths as a UX/UI Designer
content_ar: (leave empty or add Arabic)
metadata: (leave empty)
display_order: 4
```

### Row 6: Strengths Cards (All 5 cards in metadata)
```
section: home
key: strengths
content_en: (leave empty)
content_ar: (leave empty)
metadata: {
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
display_order: 5
```

### Row 7: Values Title
```
section: home
key: values_title
content_en: My Values as a UX/UI Designer
content_ar: (leave empty or add Arabic)
metadata: (leave empty)
display_order: 6
```

### Row 8: Values Cards (All 4 cards in metadata)
```
section: home
key: values
content_en: (leave empty)
content_ar: (leave empty)
metadata: {
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
display_order: 7
```

### Row 9: Growing Title
```
section: home
key: growing_title
content_en: Growing as a Designer
content_ar: (leave empty or add Arabic)
metadata: (leave empty)
display_order: 8
```

### Row 10: Growing Cards (All 5 cards in metadata)
```
section: home
key: growing
content_en: (leave empty)
content_ar: (leave empty)
metadata: {
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
display_order: 9
```

### Row 11: App Design Title
```
section: home
key: app_design_title
content_en: App Design
content_ar: (leave empty or add Arabic)
metadata: (leave empty)
display_order: 10
```

### Row 12: App Design Content
```
section: home
key: app_design_content
content_en: <p>Frictionless flows, clear UI states and purposeful micro-interactions that make everyday apps feel joyful and familiar.</p><p>I love translating complex journeys into polished mobile experiences with clean visuals and strong UX writing.</p>
content_ar: (leave empty or add Arabic)
metadata: (leave empty)
display_order: 11
```

### Row 13: App Design Label
```
section: home
key: app_design_label
content_en: App design
content_ar: (leave empty or add Arabic)
metadata: (leave empty)
display_order: 12
```

### Row 14: App Design Image (Optional)
```
section: home
key: app_design_image
content_en: (leave empty)
content_ar: (leave empty)
metadata: {
  "image_url": "/imgs/home page/app-design.png"
}
display_order: 13
```

**Total: 14 rows** for `home_content` table

---

## 🎯 Table 2: `skills`

### Required Columns:
- `id` (uuid or int8, primary key)
- `name` (text) - Skill name (e.g., "PS", "Figma", "CSS")
- `name_ar` (text, optional) - Arabic name
- `icon_type` (text, optional) - Special type: "figma" or "adobe" (leave empty for others)
- `short_name` (text, optional) - Short name if different from name
- `display_order` (int4) - Order for display

### Rows to Add:

#### Row 1: PS (Photoshop)
```
name: PS
name_ar: (leave empty)
icon_type: (leave empty)
short_name: (leave empty)
display_order: 0
```

#### Row 2: PR (Premiere Pro)
```
name: PR
name_ar: (leave empty)
icon_type: (leave empty)
short_name: (leave empty)
display_order: 1
```

#### Row 3: AN (After Effects)
```
name: AN
name_ar: (leave empty)
icon_type: (leave empty)
short_name: (leave empty)
display_order: 2
```

#### Row 4: LR (Lightroom)
```
name: LR
name_ar: (leave empty)
icon_type: (leave empty)
short_name: (leave empty)
display_order: 3
```

#### Row 5: Figma
```
name: Figma
name_ar: (leave empty)
icon_type: figma
short_name: (leave empty)
display_order: 4
```

#### Row 6: PS (Photoshop - second instance)
```
name: PS
name_ar: (leave empty)
icon_type: (leave empty)
short_name: (leave empty)
display_order: 5
```

#### Row 7: Adobe
```
name: Adobe
name_ar: (leave empty)
icon_type: adobe
short_name: (leave empty)
display_order: 6
```

#### Row 8: AE (After Effects)
```
name: AE
name_ar: (leave empty)
icon_type: (leave empty)
short_name: (leave empty)
display_order: 7
```

#### Row 9: AI (Illustrator)
```
name: AI
name_ar: (leave empty)
icon_type: (leave empty)
short_name: (leave empty)
display_order: 8
```

#### Row 10: CSS
```
name: CSS
name_ar: (leave empty)
icon_type: (leave empty)
short_name: (leave empty)
display_order: 9
```

#### Row 11: HTML
```
name: HTML
name_ar: (leave empty)
icon_type: (leave empty)
short_name: (leave empty)
display_order: 10
```

#### Row 12: JS (JavaScript)
```
name: JS
name_ar: (leave empty)
icon_type: (leave empty)
short_name: (leave empty)
display_order: 11
```

**Total: 12 rows** for `skills` table

---

## 🎯 Table 3: `experience`

### Required Columns:
- `id` (uuid or int8, primary key)
- `type` (text) - Must be `'education'` for home page
- `start_year` (text or int4) - Start year (e.g., "2025" or 2025)
- `end_year` (text or int4, optional) - End year (e.g., "2026" or 2026)
- `institution` (text) - School/company name
- `title` (text) - Program/position name
- `display_order` (int4) - Order for display

### Rows to Add:

#### Row 1: Egypt University of Informatics
```
type: education
start_year: 2025
end_year: 2026
institution: Egypt University of Informatics
title: Digital Arts & Design – UX/UI
display_order: 0
```

#### Row 2: CLS Center
```
type: education
start_year: 2024
end_year: 2024
institution: CLS Center
title: Front-end Code
display_order: 1
```

**Total: 2 rows** for `experience` table (add more as needed)

---

## 📋 Quick Summary

### `home_content` Table:
- **14 rows** total
- **Section:** All rows must have `section = 'home'`
- **Keys:** `know_me_title`, `know_me_content`, `approach_title`, `approach_content`, `strengths_title`, `strengths`, `values_title`, `values`, `growing_title`, `growing`, `app_design_title`, `app_design_content`, `app_design_label`, `app_design_image`
- **Metadata:** Use JSONB for strengths, values, and growing cards arrays

### `skills` Table:
- **12 rows** total
- **Columns:** `name`, `icon_type` (for figma/adobe), `display_order`
- **Order:** 0-11

### `experience` Table:
- **2 rows** minimum (add more as needed)
- **Type:** Must be `'education'` for home page
- **Columns:** `type`, `start_year`, `end_year`, `institution`, `title`

---

## ✅ Step-by-Step Checklist

### 1. Create `home_content` Table:
- [ ] Create table with 9 columns
- [ ] Add 14 rows (all with `section = 'home'`)
- [ ] Add strengths metadata with all 5 cards
- [ ] Add values metadata with all 4 cards
- [ ] Add growing metadata with all 5 cards

### 2. Create `skills` Table:
- [ ] Create table with columns: `id`, `name`, `icon_type`, `display_order`
- [ ] Add 12 skill rows (PS, PR, AN, LR, Figma, PS, Adobe, AE, AI, CSS, HTML, JS)
- [ ] Set `icon_type = 'figma'` for Figma row
- [ ] Set `icon_type = 'adobe'` for Adobe row

### 3. Create `experience` Table:
- [ ] Create table with columns: `id`, `type`, `start_year`, `end_year`, `institution`, `title`
- [ ] Add 2 education rows
- [ ] Set `type = 'education'` for both rows

### 4. Enable RLS:
- [ ] Enable RLS on all 3 tables
- [ ] Add SELECT policy for public access

---

## 💡 Important Notes

1. **Metadata Format:**
   - For strengths: `{"strengths": [...]}`
   - For values: `{"values": [...]}`
   - For growing: `{"cards": [...]}`
   - Use JSONB type in Supabase

2. **Section Name:**
   - All `home_content` rows must have `section = 'home'`
   - This is how the code filters: `.eq('section', 'home')`

3. **Key Names:**
   - Must match exactly: `know_me_title`, `strengths`, `values`, `growing`, etc.
   - The code uses these keys to find content

4. **Skills Icon Types:**
   - Only Figma and Adobe need `icon_type` set
   - All others leave `icon_type` empty

5. **Experience Type:**
   - Must be `'education'` for home page
   - The code filters: `.eq('type', 'education')`

---

## 🚀 After Adding Data

Once you add all the data:
1. Your home page will fetch from Supabase
2. Know Me section will show your content
3. Strengths, Values, and Growing cards will display
4. Skills will appear in the skills matrix
5. Education will show in the education section

**All data is now manageable from Supabase Dashboard!** 🎯



