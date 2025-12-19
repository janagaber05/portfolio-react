# 📮 Postman Complete Data - All Rows Ready to Copy

Complete JSON data for all tables. Copy each JSON block into Postman and send.

---

## 🎯 Setup Postman Request

### For ALL requests:
1. **Method**: `POST`
2. **URL**: `https://kkvepvlkgppzwapbbynh.supabase.co/rest/v1/[TABLE_NAME]`
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

## 📋 Table 1: `home_content` (14 Rows)

### Request 1: Know Me Title
**URL**: `https://kkvepvlkgppzwapbbynh.supabase.co/rest/v1/home_content`
```json
{
  "section": "home",
  "key": "know_me_title",
  "content_en": "Know Me",
  "display_order": 0
}
```

### Request 2: Know Me Content
**URL**: `https://kkvepvlkgppzwapbbynh.supabase.co/rest/v1/home_content`
```json
{
  "section": "home",
  "key": "know_me_content",
  "content_en": "<p>I'm a UX/UI Designer that always works on what she loves so she can give 100% results.</p><p>I work in everything I like, so I always love what I do.</p><p>I really like creating content and editing videos; I'm very creative in this part.</p><p>I get ideas and trends from nowhere and bring them to life.</p>",
  "display_order": 1
}
```

### Request 3: Approach Title
**URL**: `https://kkvepvlkgppzwapbbynh.supabase.co/rest/v1/home_content`
```json
{
  "section": "home",
  "key": "approach_title",
  "content_en": "My Approach as a UX/UI Designer",
  "display_order": 2
}
```

### Request 4: Approach Content
**URL**: `https://kkvepvlkgppzwapbbynh.supabase.co/rest/v1/home_content`
```json
{
  "section": "home",
  "key": "approach_content",
  "content_en": "Every project starts with listening. I translate business goals into streamlined flows, unlock opportunities during research and keep the storytelling vibrant until launch.",
  "display_order": 3
}
```

### Request 5: Strengths Title
**URL**: `https://kkvepvlkgppzwapbbynh.supabase.co/rest/v1/home_content`
```json
{
  "section": "home",
  "key": "strengths_title",
  "content_en": "My Strengths as a UX/UI Designer",
  "display_order": 4
}
```

### Request 6: Strengths Cards
**URL**: `https://kkvepvlkgppzwapbbynh.supabase.co/rest/v1/home_content`
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
**URL**: `https://kkvepvlkgppzwapbbynh.supabase.co/rest/v1/home_content`
```json
{
  "section": "home",
  "key": "values_title",
  "content_en": "My Values as a UX/UI Designer",
  "display_order": 6
}
```

### Request 8: Values Cards
**URL**: `https://kkvepvlkgppzwapbbynh.supabase.co/rest/v1/home_content`
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
**URL**: `https://kkvepvlkgppzwapbbynh.supabase.co/rest/v1/home_content`
```json
{
  "section": "home",
  "key": "growing_title",
  "content_en": "Growing as a Designer",
  "display_order": 8
}
```

### Request 10: Growing Cards
**URL**: `https://kkvepvlkgppzwapbbynh.supabase.co/rest/v1/home_content`
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
**URL**: `https://kkvepvlkgppzwapbbynh.supabase.co/rest/v1/home_content`
```json
{
  "section": "home",
  "key": "app_design_title",
  "content_en": "App Design",
  "display_order": 10
}
```

### Request 12: App Design Content
**URL**: `https://kkvepvlkgppzwapbbynh.supabase.co/rest/v1/home_content`
```json
{
  "section": "home",
  "key": "app_design_content",
  "content_en": "<p>Frictionless flows, clear UI states and purposeful micro-interactions that make everyday apps feel joyful and familiar.</p><p>I love translating complex journeys into polished mobile experiences with clean visuals and strong UX writing.</p>",
  "display_order": 11
}
```

### Request 13: App Design Label
**URL**: `https://kkvepvlkgppzwapbbynh.supabase.co/rest/v1/home_content`
```json
{
  "section": "home",
  "key": "app_design_label",
  "content_en": "App design",
  "display_order": 12
}
```

### Request 14: App Design Image
**URL**: `https://kkvepvlkgppzwapbbynh.supabase.co/rest/v1/home_content`
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

## 📋 Table 2: `skills` (12 Rows)

### Request 15: PS (Photoshop)
**URL**: `https://kkvepvlkgppzwapbbynh.supabase.co/rest/v1/skills`
```json
{
  "name": "PS",
  "display_order": 0
}
```

### Request 16: PR (Premiere Pro)
**URL**: `https://kkvepvlkgppzwapbbynh.supabase.co/rest/v1/skills`
```json
{
  "name": "PR",
  "display_order": 1
}
```

### Request 17: AN (After Effects)
**URL**: `https://kkvepvlkgppzwapbbynh.supabase.co/rest/v1/skills`
```json
{
  "name": "AN",
  "display_order": 2
}
```

### Request 18: LR (Lightroom)
**URL**: `https://kkvepvlkgppzwapbbynh.supabase.co/rest/v1/skills`
```json
{
  "name": "LR",
  "display_order": 3
}
```

### Request 19: Figma
**URL**: `https://kkvepvlkgppzwapbbynh.supabase.co/rest/v1/skills`
```json
{
  "name": "Figma",
  "icon_type": "figma",
  "display_order": 4
}
```

### Request 20: PS (Photoshop - second)
**URL**: `https://kkvepvlkgppzwapbbynh.supabase.co/rest/v1/skills`
```json
{
  "name": "PS",
  "display_order": 5
}
```

### Request 21: Adobe
**URL**: `https://kkvepvlkgppzwapbbynh.supabase.co/rest/v1/skills`
```json
{
  "name": "Adobe",
  "icon_type": "adobe",
  "display_order": 6
}
```

### Request 22: AE (After Effects)
**URL**: `https://kkvepvlkgppzwapbbynh.supabase.co/rest/v1/skills`
```json
{
  "name": "AE",
  "display_order": 7
}
```

### Request 23: AI (Illustrator)
**URL**: `https://kkvepvlkgppzwapbbynh.supabase.co/rest/v1/skills`
```json
{
  "name": "AI",
  "display_order": 8
}
```

### Request 24: CSS
**URL**: `https://kkvepvlkgppzwapbbynh.supabase.co/rest/v1/skills`
```json
{
  "name": "CSS",
  "display_order": 9
}
```

### Request 25: HTML
**URL**: `https://kkvepvlkgppzwapbbynh.supabase.co/rest/v1/skills`
```json
{
  "name": "HTML",
  "display_order": 10
}
```

### Request 26: JS (JavaScript)
**URL**: `https://kkvepvlkgppzwapbbynh.supabase.co/rest/v1/skills`
```json
{
  "name": "JS",
  "display_order": 11
}
```

---

## 📋 Table 3: `experience` (2 Rows)

### Request 27: Egypt University of Informatics
**URL**: `https://kkvepvlkgppzwapbbynh.supabase.co/rest/v1/experience`
```json
{
  "type": "education",
  "start_year": 2025,
  "end_year": 2026,
  "institution": "Egypt University of Informatics",
  "title": "Digital Arts & Design – UX/UI",
  "display_order": 0
}
```

### Request 28: CLS Center
**URL**: `https://kkvepvlkgppzwapbbynh.supabase.co/rest/v1/experience`
```json
{
  "type": "education",
  "start_year": 2024,
  "end_year": 2024,
  "institution": "CLS Center",
  "title": "Front-end Code",
  "display_order": 1
}
```

---

## ✅ Complete Checklist

### home_content Table (14 requests)
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

### skills Table (12 requests)
- [ ] Request 15: PS
- [ ] Request 16: PR
- [ ] Request 17: AN
- [ ] Request 18: LR
- [ ] Request 19: Figma
- [ ] Request 20: PS (second)
- [ ] Request 21: Adobe
- [ ] Request 22: AE
- [ ] Request 23: AI
- [ ] Request 24: CSS
- [ ] Request 25: HTML
- [ ] Request 26: JS

### experience Table (2 requests)
- [ ] Request 27: Egypt University
- [ ] Request 28: CLS Center

**Total: 28 POST requests**

---

## 🚀 Quick Tips

1. **Save as Collection**: Create a Postman collection and save all 28 requests
2. **Use Variables**: Set your API key as a variable to reuse
3. **Check Responses**: Each request should return the created row
4. **Error Handling**: If you get an error, check:
   - Headers are correct
   - JSON is valid (no extra commas)
   - Table names match exactly
   - Column names match your table structure

---

## 🐛 Common Issues

### Error: "new row violates row-level security policy"
**Fix**: Go to Supabase → Authentication → Policies → Add INSERT policy for your table

### Error: "column does not exist"
**Fix**: Check your table column names match exactly (case-sensitive)

### Error: "invalid input syntax for type jsonb"
**Fix**: Make sure JSON is valid - check for missing quotes, commas, brackets

---

## 📝 Notes

- Replace `YOUR_SUPABASE_ANON_KEY` with your actual anon key
- All dates (`created_at`, `updated_at`) are auto-generated
- All IDs are auto-generated (don't include `id` in JSON)
- Make sure your tables have the correct column types before adding data

Good luck! 🎉

