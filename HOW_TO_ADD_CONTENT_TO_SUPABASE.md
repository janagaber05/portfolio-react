# 📝 How to Add Content to Supabase - Step by Step Guide

This guide shows you exactly how to add all your content (home page, about page, projects, blogs, etc.) to Supabase tables.

---

## 🎯 Method 1: Add Content via Supabase Dashboard (Easiest)

### Step 1: Open Your Table
1. Go to your Supabase project dashboard
2. Click **"Table Editor"** in the left sidebar
3. Select the table you want to add data to (e.g., `home_content`, `projects`, `blog_posts`)

### Step 2: Add a New Row
1. Click **"Insert"** button (top right)
2. Select **"Insert row"**
3. A form will appear with all your table columns

### Step 3: Fill in the Data
1. Fill in each field:
   - **Text fields**: Type your content
   - **JSON fields**: Paste JSON data (see examples below)
   - **UUID fields**: Leave empty (auto-generated) or click "Generate UUID"
   - **Date fields**: Leave empty (auto-generated) or select a date
2. Click **"Save"** button

### Step 4: Repeat for Each Row
- Click **"Insert row"** again for each new entry
- Fill in the data
- Click **"Save"**

---

## 🎯 Method 2: Add Content via Postman (Faster for Multiple Rows)

### Step 1: Set Up Postman Request
1. **Method**: `POST`
2. **URL**: 
   ```
   https://[your-project-id].supabase.co/rest/v1/[table-name]
   ```
   Example:
   ```
   https://kkvepvlkgppzwapbbynh.supabase.co/rest/v1/home_content
   ```

3. **Headers**:
   ```
   apikey: YOUR_SUPABASE_ANON_KEY
   Authorization: Bearer YOUR_SUPABASE_ANON_KEY
   Content-Type: application/json
   Prefer: return=representation
   ```

4. **Body** (select "raw" → "JSON"):
   ```json
   {
     "section": "home",
     "key": "know_me_title",
     "content_en": "Know Me",
     "display_order": 0
   }
   ```

5. Click **"Send"**

---

## 📋 Step-by-Step: Adding Home Page Content

### Table: `home_content`

#### Row 1: Know Me Title
**Via Dashboard:**
- `section`: `home`
- `key`: `know_me_title`
- `content_en`: `Know Me`
- `display_order`: `0`

**Via Postman (JSON Body):**
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

#### Row 6: Strengths Cards (JSON in metadata)
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

## 📋 Step-by-Step: Adding Skills

### Table: `skills`

#### Example Row 1: Photoshop
```json
{
  "name": "Photoshop",
  "name_ar": "فوتوشوب",
  "category": "Design Tools",
  "proficiency": 90,
  "display_order": 1
}
```

#### Example Row 2: Figma
```json
{
  "name": "Figma",
  "name_ar": "فيجما",
  "category": "Design Tools",
  "proficiency": 95,
  "display_order": 2
}
```

#### Example Row 3: HTML
```json
{
  "name": "HTML",
  "name_ar": "إتش تي إم إل",
  "category": "Development",
  "proficiency": 85,
  "display_order": 3
}
```

---

## 📋 Step-by-Step: Adding Projects

### Table: `projects`

#### Example Project Row
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

**Important Notes:**
- `category` should be a JSON array: `["App Design", "UX/UI"]`
- `image_url` should be a full URL (from Supabase Storage or external)
- Use `int8` for `id` if your table uses that type

---

## 📋 Step-by-Step: Adding Blog Posts

### Table: `blog_posts`

#### Example Blog Post Row
```json
{
  "title": "Designing with Emotion: How Colors Shape User Experience",
  "title_ar": "التصميم بالمشاعر: كيف تشكل الألوان تجربة المستخدم",
  "slug": "designing-with-emotion-how-colors-shape-user-experience-ui-designer-in-cairo",
  "excerpt": "Discover how color psychology impacts UX design...",
  "excerpt_ar": "اكتشف كيف تؤثر نفسية الألوان على تصميم تجربة المستخدم...",
  "content": "<p>Full blog post content here...</p>",
  "content_ar": "<p>محتوى المقال الكامل هنا...</p>",
  "image_url": "https://your-image-url.com/blog-image.jpg",
  "published": true,
  "published_at": "2024-01-15T00:00:00Z",
  "display_order": 1
}
```

---

## 📋 Step-by-Step: Adding About Page Content

### Table: `about_content` (or `home_content` with `section: 'about'`)

#### Example Row
```json
{
  "section": "about",
  "key": "about_title",
  "content_en": "About Me",
  "content_ar": "عني",
  "display_order": 0
}
```

---

## 🎯 Quick Reference: Common Field Types

### Text Fields
- Just type the text directly
- Example: `"content_en": "Hello World"`

### JSON Fields (jsonb)
- Must be valid JSON
- Use double quotes for keys and strings
- Example: `"metadata": {"key": "value"}`

### Array Fields
- Use JSON array format
- Example: `"category": ["Design", "UX"]`

### Boolean Fields
- Use `true` or `false`
- Example: `"featured": true`

### Number Fields
- Just use the number
- Example: `"display_order": 1`

### Date Fields
- Format: `"2024-01-15T00:00:00Z"`
- Or leave empty for auto-generated

### UUID Fields
- Leave empty (auto-generated)
- Or click "Generate UUID" in dashboard

---

## ✅ Checklist: Before Adding Content

1. ✅ **Tables Created**: Make sure all tables exist in Supabase
2. ✅ **Columns Match**: Verify column names and types match your guides
3. ✅ **RLS Policies**: Set up Row Level Security policies (allow public read if needed)
4. ✅ **API Key Ready**: Have your Supabase anon key for Postman

---

## 🐛 Troubleshooting

### Error: "new row violates row-level security policy"
**Solution:**
1. Go to **Authentication** → **Policies**
2. Find your table
3. Add a policy to allow INSERT operations
4. Or temporarily disable RLS for testing

### Error: "column does not exist"
**Solution:**
- Check column name spelling (case-sensitive)
- Verify the column exists in your table
- Check if you're using the correct table name

### Error: "invalid input syntax for type jsonb"
**Solution:**
- Make sure your JSON is valid
- Use double quotes, not single quotes
- Escape special characters if needed

### JSON Not Saving Correctly
**Solution:**
- In dashboard: Use the JSON editor (click the JSON icon)
- In Postman: Make sure Content-Type is `application/json`
- Validate your JSON at jsonlint.com

---

## 📚 Next Steps

1. **Start with Home Page**: Add `home_content` rows first
2. **Add Skills**: Populate `skills` table
3. **Add Projects**: Add your project entries
4. **Add Blogs**: Add blog posts
5. **Test in Your App**: Verify data appears correctly

---

## 💡 Pro Tips

1. **Use Postman Collection**: Save all your POST requests in a collection for easy reuse
2. **Copy-Paste JSON**: Prepare all your JSON data in a text file first
3. **Test One Row**: Add one row first to make sure everything works
4. **Use Bulk Insert**: For many rows, consider using SQL in Supabase SQL Editor
5. **Backup Data**: Export your data regularly

---

## 🚀 Need Help?

If you get stuck:
1. Check the specific data guide files (HOME_PAGE_SUPABASE_DATA.md, etc.)
2. Verify your table structure matches the guides
3. Test with a simple row first
4. Check Supabase logs for detailed error messages

Good luck! 🎉

