# 🔗 Connect Supabase Tables with Postman

Complete guide to connect all your Supabase tables with Postman.

---

## 🎯 Your Supabase Project Details

**Project URL**: `https://kkvepvlkgppzwapbbynh.supabase.co`

**Your Tables**:
1. `home_content`
2. `skills`
3. `experience`
4. `projects` (if you have it)
5. `blog_posts` (if you have it)
6. `contact_submissions` (if you have it)
7. `project_details` (if you have it)

---

## 🔑 Step 1: Get Your API Key

1. Go to Supabase Dashboard
2. Click **"Settings"** (gear icon, left sidebar)
3. Click **"API"** (under Settings)
4. Find **"Project API keys"**
5. Copy the **`anon` `public`** key (this is your publishable key)
6. This is your `YOUR_SUPABASE_ANON_KEY`

**Example**: `sb_publishable_TXDJdOMzyg5RYq3aEYf7JQ_HlukQAuB`

---

## 🎯 Step 2: Set Up Postman Environment (Recommended)

### Create Environment Variables:

1. **Open Postman**
2. Click **"Environments"** (left sidebar)
3. Click **"+"** button to create new environment
4. **Name**: `Supabase Portfolio`
5. Add these variables:

| Variable | Initial Value | Current Value |
|----------|---------------|---------------|
| `supabase_url` | `https://kkvepvlkgppzwapbbynh.supabase.co` | `https://kkvepvlkgppzwapbbynh.supabase.co` |
| `supabase_key` | `YOUR_SUPABASE_ANON_KEY` | `YOUR_SUPABASE_ANON_KEY` |

6. Click **"Save"**
7. **Select this environment** from the dropdown (top right)

**Now you can use `{{supabase_url}}` and `{{supabase_key}}` in all requests!**

---

## 📋 Step 3: Common Headers for All Requests

### For ALL Supabase requests, add these headers:

| Key | Value |
|-----|-------|
| `apikey` | `{{supabase_key}}` (or your actual key) |
| `Authorization` | `Bearer {{supabase_key}}` (or your actual key) |
| `Content-Type` | `application/json` (for POST/PATCH) |
| `Prefer` | `return=representation` (optional, returns created/updated row) |

---

## 🎯 Table 1: `home_content`

### GET - Get All Home Content
**Method**: `GET`
**URL**: `{{supabase_url}}/rest/v1/home_content?section=eq.home&order=display_order`
**Headers**: apikey, Authorization

### GET - Get Specific Section
**Method**: `GET`
**URL**: `{{supabase_url}}/rest/v1/home_content?section=eq.category&order=display_order`
**Headers**: apikey, Authorization

### POST - Add New Row
**Method**: `POST`
**URL**: `{{supabase_url}}/rest/v1/home_content`
**Headers**: apikey, Authorization, Content-Type: application/json, Prefer: return=representation
**Body** (raw JSON):
```json
{
  "section": "home",
  "key": "know_me_title",
  "content_en": "Know Me",
  "display_order": 0
}
```

### PATCH - Update Row
**Method**: `PATCH`
**URL**: `{{supabase_url}}/rest/v1/home_content?key=eq.know_me_title&section=eq.home`
**Headers**: apikey, Authorization, Content-Type: application/json
**Body**:
```json
{
  "content_en": "Updated Know Me Title"
}
```

### DELETE - Delete Row
**Method**: `DELETE`
**URL**: `{{supabase_url}}/rest/v1/home_content?id=eq.[uuid-here]`
**Headers**: apikey, Authorization

---

## 🎯 Table 2: `skills`

### GET - Get All Skills
**Method**: `GET`
**URL**: `{{supabase_url}}/rest/v1/skills?order=display_order`
**Headers**: apikey, Authorization

### POST - Add Skill
**Method**: `POST`
**URL**: `{{supabase_url}}/rest/v1/skills`
**Headers**: apikey, Authorization, Content-Type: application/json
**Body**:
```json
{
  "name": "PS",
  "display_order": 0
}
```

### PATCH - Update Skill
**Method**: `PATCH`
**URL**: `{{supabase_url}}/rest/v1/skills?id=eq.[id]`
**Headers**: apikey, Authorization, Content-Type: application/json
**Body**:
```json
{
  "name": "Updated Name"
}
```

---

## 🎯 Table 3: `experience`

### GET - Get All Experience
**Method**: `GET`
**URL**: `{{supabase_url}}/rest/v1/experience?order=display_order`
**Headers**: apikey, Authorization

### GET - Get Education Only
**Method**: `GET`
**URL**: `{{supabase_url}}/rest/v1/experience?type=eq.education&order=display_order`
**Headers**: apikey, Authorization

### POST - Add Experience
**Method**: `POST`
**URL**: `{{supabase_url}}/rest/v1/experience`
**Headers**: apikey, Authorization, Content-Type: application/json
**Body**:
```json
{
  "type": "education",
  "start_year": "2025",
  "end_year": "2026",
  "institution_en": "Egypt University of Informatics",
  "institution_ar": "جامعة مصر للمعلوماتية",
  "program_en": "Digital Arts & Design – UX/UI",
  "program_ar": "الفنون الرقمية والتصميم – UX/UI",
  "display_order": 0
}
```

---

## 🎯 Table 4: `projects`

### GET - Get All Projects
**Method**: `GET`
**URL**: `{{supabase_url}}/rest/v1/projects?order=display_order`
**Headers**: apikey, Authorization

### GET - Get Featured Projects
**Method**: `GET`
**URL**: `{{supabase_url}}/rest/v1/projects?featured=eq.true&order=display_order`
**Headers**: apikey, Authorization

### GET - Get Project by ID
**Method**: `GET`
**URL**: `{{supabase_url}}/rest/v1/projects?id=eq.1`
**Headers**: apikey, Authorization

### GET - Get Project by Slug
**Method**: `GET`
**URL**: `{{supabase_url}}/rest/v1/projects?slug=eq.egy-air`
**Headers**: apikey, Authorization

### POST - Create Project
**Method**: `POST`
**URL**: `{{supabase_url}}/rest/v1/projects`
**Headers**: apikey, Authorization, Content-Type: application/json
**Body**:
```json
{
  "title": "EgyAir Mobile App",
  "title_ar": "تطبيق إيجي إير",
  "description": "A modern airline booking app",
  "category": ["App Design", "UX/UI"],
  "image_url": "https://.../project-images/egyair.jpg",
  "featured": true,
  "display_order": 1
}
```

---

## 🎯 Table 5: `blog_posts`

### GET - Get All Blog Posts
**Method**: `GET`
**URL**: `{{supabase_url}}/rest/v1/blog_posts?published=eq.true&order=display_order`
**Headers**: apikey, Authorization

### GET - Get Published Posts Only
**Method**: `GET`
**URL**: `{{supabase_url}}/rest/v1/blog_posts?published=eq.true&order=published_at.desc`
**Headers**: apikey, Authorization

### GET - Get Blog Post by Slug
**Method**: `GET`
**URL**: `{{supabase_url}}/rest/v1/blog_posts?slug=eq.designing-with-emotion-how-colors-shape-user-experience-ui-designer-in-cairo`
**Headers**: apikey, Authorization

### POST - Create Blog Post
**Method**: `POST`
**URL**: `{{supabase_url}}/rest/v1/blog_posts`
**Headers**: apikey, Authorization, Content-Type: application/json
**Body**:
```json
{
  "title": "Designing with Emotion: How Colors Shape User Experience",
  "slug": "designing-with-emotion-how-colors-shape-user-experience-ui-designer-in-cairo",
  "excerpt": "Discover how color psychology...",
  "content_en": "<p>Full article...</p>",
  "published": true,
  "display_order": 1
}
```

---

## 🎯 Table 6: `contact_submissions`

### GET - Get All Submissions
**Method**: `GET`
**URL**: `{{supabase_url}}/rest/v1/contact_submissions?order=created_at.desc`
**Headers**: apikey, Authorization

### GET - Get New Submissions Only
**Method**: `GET`
**URL**: `{{supabase_url}}/rest/v1/contact_submissions?status=eq.New&order=created_at.desc`
**Headers**: apikey, Authorization

### POST - Create Submission (Test)
**Method**: `POST`
**URL**: `{{supabase_url}}/rest/v1/contact_submissions`
**Headers**: apikey, Authorization, Content-Type: application/json
**Body**:
```json
{
  "first_name": "Salma",
  "last_name": "Ahmed",
  "email": "SalmaAhmed12@mail.com",
  "phone": "01141120002",
  "subject": "Chance To Work",
  "status": "New"
}
```

### PATCH - Update Status (Mark as Read)
**Method**: `PATCH`
**URL**: `{{supabase_url}}/rest/v1/contact_submissions?id=eq.[id]`
**Headers**: apikey, Authorization, Content-Type: application/json
**Body**:
```json
{
  "status": "Read"
}
```

---

## 🎯 Table 7: `project_details`

### GET - Get All Project Details
**Method**: `GET`
**URL**: `{{supabase_url}}/rest/v1/project_details?order=display_order`
**Headers**: apikey, Authorization

### GET - Get Details by Project ID
**Method**: `GET`
**URL**: `{{supabase_url}}/rest/v1/project_details?project_id=eq.1`
**Headers**: apikey, Authorization

### POST - Create Project Details
**Method**: `POST`
**URL**: `{{supabase_url}}/rest/v1/project_details`
**Headers**: apikey, Authorization, Content-Type: application/json
**Body**:
```json
{
  "project_id": 1,
  "hero_text_en": "EgyAir Mobile App",
  "hero_text_ar": "تطبيق إيجي إير",
  "description_en": "A modern airline booking app...",
  "image_url": "https://.../project-images/egyair.jpg"
}
```

---

## 📝 Postman Collection Setup

### Create a Collection:

1. **Create Collection**:
   - Click **"Collections"** (left sidebar)
   - Click **"+"** button
   - Name: `Supabase Portfolio API`

2. **Organize by Table**:
   - Create folders for each table:
     - `home_content`
     - `skills`
     - `experience`
     - `projects`
     - `blog_posts`
     - `contact_submissions`
     - `project_details`

3. **Add Requests to Folders**:
   - Right-click folder → **"Add Request"**
   - Name the request (e.g., "GET All Home Content")
   - Set up URL, method, headers, body

---

## 🎯 Quick Reference: URL Format

### Base URL:
```
https://kkvepvlkgppzwapbbynh.supabase.co/rest/v1/[TABLE_NAME]
```

### Examples:
- `https://kkvepvlkgppzwapbbynh.supabase.co/rest/v1/home_content`
- `https://kkvepvlkgppzwapbbynh.supabase.co/rest/v1/skills`
- `https://kkvepvlkgppzwapbbynh.supabase.co/rest/v1/experience`
- `https://kkvepvlkgppzwapbbynh.supabase.co/rest/v1/projects`
- `https://kkvepvlkgppzwapbbynh.supabase.co/rest/v1/blog_posts`
- `https://kkvepvlkgppzwapbbynh.supabase.co/rest/v1/contact_submissions`
- `https://kkvepvlkgppzwapbbynh.supabase.co/rest/v1/project_details`

---

## 🔍 Query Parameters (Filters)

### Common Filters:

| Filter | Example | Description |
|--------|---------|-------------|
| `?column=eq.value` | `?section=eq.home` | Equal to |
| `?column=neq.value` | `?status=neq.New` | Not equal to |
| `?order=column.desc` | `?order=created_at.desc` | Order by (descending) |
| `?order=column.asc` | `?order=display_order.asc` | Order by (ascending) |
| `?limit=10` | `?limit=10` | Limit results |
| `?select=col1,col2` | `?select=id,title` | Select specific columns |

### Multiple Filters:
```
?section=eq.home&display_order=gte.0&order=display_order.asc
```

---

## ✅ Complete Setup Checklist

### Postman Setup:
- [ ] Environment created with `supabase_url` and `supabase_key`
- [ ] Environment selected (top right dropdown)
- [ ] Collection created: "Supabase Portfolio API"
- [ ] Folders created for each table
- [ ] Headers configured (apikey, Authorization, Content-Type)

### Test Requests:
- [ ] GET request tested for `home_content`
- [ ] GET request tested for `skills`
- [ ] GET request tested for `experience`
- [ ] POST request tested (create new row)
- [ ] PATCH request tested (update row)
- [ ] All requests return data (no 404/403 errors)

---

## 🐛 Troubleshooting

### Error 404: "requested path is invalid"
**Fix**:
- Make sure URL includes `/rest/v1/`
- Check table name spelling (case-sensitive)
- Example: `https://.../rest/v1/home_content` ✅

### Error 403: "new row violates row-level security policy"
**Fix**:
- Go to Supabase → Authentication → Policies
- Add INSERT policy for the table
- Or temporarily disable RLS for testing

### Error: "column does not exist"
**Fix**:
- Check column name spelling (case-sensitive)
- Verify column exists in your table
- Check if you're using correct table name

### Headers Not Working
**Fix**:
- Make sure headers are in "Headers" tab (not "Params")
- Check for typos: `apikey` (not `api_key`)
- Verify API key is correct

---

## 🚀 Quick Start

### Test Connection (GET Request):

1. **Method**: `GET`
2. **URL**: `https://kkvepvlkgppzwapbbynh.supabase.co/rest/v1/home_content?limit=1`
3. **Headers**:
   ```
   apikey: YOUR_SUPABASE_ANON_KEY
   Authorization: Bearer YOUR_SUPABASE_ANON_KEY
   ```
4. **Click "Send"**
5. **Expected**: Should return array with data (or empty array `[]`)

If this works, your connection is set up correctly! ✅

---

## 📚 Next Steps

1. ✅ Postman connected to Supabase
2. ✅ Test GET requests for all tables
3. ✅ Test POST requests to add data
4. ✅ Test PATCH requests to update data
5. 📝 Use your Postman collection for all API operations

You're all set! 🎉

