# 🚀 Quick Copy-Paste Data for Supabase

Ready-to-use JSON data you can copy directly into Postman or Supabase dashboard.

---

## 📋 Home Page Content (`home_content` table)

### Row 1: Know Me Title
```json
{
  "section": "home",
  "key": "know_me_title",
  "content_en": "Know Me",
  "display_order": 0
}
```

### Row 2: Know Me Content
```json
{
  "section": "home",
  "key": "know_me_content",
  "content_en": "<p>I'm a UX/UI Designer that always works on what she loves so she can give 100% results.</p><p>I work in everything I like, so I always love what I do.</p><p>I really like creating content and editing videos; I'm very creative in this part.</p><p>I get ideas and trends from nowhere and bring them to life.</p>",
  "display_order": 1
}
```

### Row 3: Approach Title
```json
{
  "section": "home",
  "key": "approach_title",
  "content_en": "My Approach as a UX/UI Designer",
  "display_order": 2
}
```

### Row 4: Approach Content
```json
{
  "section": "home",
  "key": "approach_content",
  "content_en": "Every project starts with listening. I translate business goals into streamlined flows, unlock opportunities during research and keep the storytelling vibrant until launch.",
  "display_order": 3
}
```

### Row 5: Strengths Title
```json
{
  "section": "home",
  "key": "strengths_title",
  "content_en": "My Strengths as a UX/UI Designer",
  "display_order": 4
}
```

### Row 6: Strengths Cards
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
        "background": "linear-gradient(190deg, rgba(179,158,255,0.93), rgba(110,79,201,0.91))"
      },
      {
        "title": "Committed UX/UI designer",
        "description": "When I commit to a project I finish it at 100%. I stay curious, keep learning and bring the latest UX thinking into every launch.",
        "background": "linear-gradient(191deg, rgba(172,151,255,0.92), rgba(116,85,202,0.90))"
      },
      {
        "title": "Innovative UX/UI designer",
        "description": "I do not copy. I invent. My process is uniquely mine—blending research with fearless experimentation to craft solutions that stand out.",
        "background": "linear-gradient(192deg, rgba(165,144,255,0.91), rgba(122,91,203,0.89))"
      }
    ]
  },
  "display_order": 5
}
```

---

## 📋 Skills (`skills` table)

### Photoshop
```json
{
  "name": "Photoshop",
  "name_ar": "فوتوشوب",
  "category": "Design Tools",
  "proficiency": 90,
  "display_order": 1
}
```

### Figma
```json
{
  "name": "Figma",
  "name_ar": "فيجما",
  "category": "Design Tools",
  "proficiency": 95,
  "display_order": 2
}
```

### Premiere Pro
```json
{
  "name": "Premiere Pro",
  "name_ar": "بريمير برو",
  "category": "Video Editing",
  "proficiency": 85,
  "display_order": 3
}
```

### HTML
```json
{
  "name": "HTML",
  "name_ar": "إتش تي إم إل",
  "category": "Development",
  "proficiency": 85,
  "display_order": 4
}
```

### CSS
```json
{
  "name": "CSS",
  "name_ar": "سي إس إس",
  "category": "Development",
  "proficiency": 80,
  "display_order": 5
}
```

---

## 📋 Projects (`projects` table)

### Example Project 1
```json
{
  "title": "EgyAir Mobile App",
  "title_ar": "تطبيق إيجي إير",
  "description": "A modern airline booking app with seamless UX",
  "description_ar": "تطبيق حجز طيران حديث بتجربة مستخدم سلسة",
  "category": ["App Design", "UX/UI"],
  "image_url": "https://your-image-url.com/egyair.jpg",
  "project_url": "https://example.com/egyair",
  "featured": true,
  "display_order": 1
}
```

### Example Project 2
```json
{
  "title": "Web Design Portfolio",
  "title_ar": "معرض تصميم الويب",
  "description": "Modern portfolio website design",
  "description_ar": "تصميم موقع معرض حديث",
  "category": ["Web Design", "UI"],
  "image_url": "https://your-image-url.com/portfolio.jpg",
  "project_url": "https://example.com/portfolio",
  "featured": true,
  "display_order": 2
}
```

---

## 📋 Blog Posts (`blog_posts` table)

### Example Blog Post
```json
{
  "title": "Designing with Emotion: How Colors Shape User Experience",
  "title_ar": "التصميم بالمشاعر: كيف تشكل الألوان تجربة المستخدم",
  "slug": "designing-with-emotion-how-colors-shape-user-experience-ui-designer-in-cairo",
  "excerpt": "Discover how color psychology impacts UX design and creates emotional connections with users.",
  "excerpt_ar": "اكتشف كيف تؤثر نفسية الألوان على تصميم تجربة المستخدم وتخلق روابط عاطفية مع المستخدمين.",
  "content": "<p>Full blog post content here...</p>",
  "content_ar": "<p>محتوى المقال الكامل هنا...</p>",
  "image_url": "https://your-image-url.com/blog-image.jpg",
  "published": true,
  "published_at": "2024-01-15T00:00:00Z",
  "display_order": 1
}
```

---

## 🎯 How to Use This Data

### Option 1: Supabase Dashboard
1. Go to **Table Editor** → Select your table
2. Click **"Insert row"**
3. For JSON fields, click the JSON icon
4. Paste the JSON data
5. Click **"Save"**

### Option 2: Postman
1. Method: `POST`
2. URL: `https://[your-project-id].supabase.co/rest/v1/[table-name]`
3. Headers:
   - `apikey`: YOUR_SUPABASE_ANON_KEY
   - `Authorization`: Bearer YOUR_SUPABASE_ANON_KEY
   - `Content-Type`: application/json
4. Body (raw JSON): Paste the JSON above
5. Click **"Send"**

---

## ⚠️ Important Notes

1. **Replace Image URLs**: Change `https://your-image-url.com/...` to your actual image URLs
2. **Check Table Structure**: Make sure your table columns match these field names
3. **UUID Fields**: Leave `id` empty (auto-generated) or remove it from JSON
4. **Date Fields**: `created_at` and `updated_at` are auto-generated
5. **Category Arrays**: Make sure your `category` column accepts JSON arrays

---

## ✅ Quick Checklist

- [ ] Home page content rows added
- [ ] Skills added
- [ ] Projects added
- [ ] Blog posts added
- [ ] Images uploaded to Supabase Storage
- [ ] Image URLs updated in data
- [ ] Test data appears in your app

Good luck! 🚀

