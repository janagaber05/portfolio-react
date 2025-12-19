# Supabase REST API - Postman Testing Guide
## Complete Guide for Testing All Endpoints

---

## 🔑 Step 1: Get Your Supabase Credentials

### 1. Get Your Supabase URL and API Key

1. **Go to Supabase Dashboard**
2. **Click on "Settings"** (gear icon in left sidebar)
3. **Click on "API"**
4. **Copy these values:**
   - **Project URL:** `https://xxxxx.supabase.co`
   - **anon/public key:** `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...`

**Save these - you'll need them for all requests!**

---

## 📋 Step 2: Supabase REST API Base URL

**Base URL Format:**
```
https://YOUR_PROJECT_ID.supabase.co/rest/v1/
```

**Example:**
```
https://abcdefghijklmnop.supabase.co/rest/v1/
```

---

## 🔧 Step 3: Required Headers

**For ALL requests, add these headers:**

```
apikey: YOUR_SUPABASE_ANON_KEY
Authorization: Bearer YOUR_SUPABASE_ANON_KEY
Content-Type: application/json
Prefer: return=representation
```

**Example:**
```
apikey: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFiY2RlZmdoaWprbG1ub3AiLCJyb2xlIjoiYW5vbiIsImlhdCI6MTYxNjIzOTAyMiwiZXhwIjoxOTMxODE1MDIyfQ.xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFiY2RlZmdoaWprbG1ub3AiLCJyb2xlIjoiYW5vbiIsImlhdCI6MTYxNjIzOTAyMiwiZXhwIjoxOTMxODE1MDIyfQ.xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
Content-Type: application/json
Prefer: return=representation
```

---

## 📊 Step 4: All API Endpoints

### Table: `projects`

#### GET - Get All Projects
```
Method: GET
URL: https://YOUR_PROJECT_ID.supabase.co/rest/v1/projects?select=*&is_published=eq.true&order=display_order.asc
Headers:
  apikey: YOUR_ANON_KEY
  Authorization: Bearer YOUR_ANON_KEY
```

#### GET - Get Single Project by ID
```
Method: GET
URL: https://YOUR_PROJECT_ID.supabase.co/rest/v1/projects?id=eq.1&select=*
Headers:
  apikey: YOUR_ANON_KEY
  Authorization: Bearer YOUR_ANON_KEY
```

#### GET - Get Project by Slug
```
Method: GET
URL: https://YOUR_PROJECT_ID.supabase.co/rest/v1/projects?slug=eq.egy-air&select=*
Headers:
  apikey: YOUR_ANON_KEY
  Authorization: Bearer YOUR_ANON_KEY
```

#### POST - Create New Project
```
Method: POST
URL: https://YOUR_PROJECT_ID.supabase.co/rest/v1/projects
Headers:
  apikey: YOUR_ANON_KEY
  Authorization: Bearer YOUR_ANON_KEY
  Content-Type: application/json
  Prefer: return=representation
Body (JSON):
{
  "title_en": "New Project",
  "title_ar": "مشروع جديد",
  "slug": "new-project",
  "category": "App Design",
  "cover_img": "project-images/new-project.png",
  "is_published": true,
  "display_order": 10
}
```

#### PATCH - Update Project
```
Method: PATCH
URL: https://YOUR_PROJECT_ID.supabase.co/rest/v1/projects?id=eq.1
Headers:
  apikey: YOUR_ANON_KEY
  Authorization: Bearer YOUR_ANON_KEY
  Content-Type: application/json
  Prefer: return=representation
Body (JSON):
{
  "title_en": "Updated Title",
  "is_published": false
}
```

#### DELETE - Delete Project
```
Method: DELETE
URL: https://YOUR_PROJECT_ID.supabase.co/rest/v1/projects?id=eq.1
Headers:
  apikey: YOUR_ANON_KEY
  Authorization: Bearer YOUR_ANON_KEY
```

---

### Table: `blog_posts`

#### GET - Get All Published Blog Posts
```
Method: GET
URL: https://YOUR_PROJECT_ID.supabase.co/rest/v1/blog_posts?select=*&is_published=eq.true&order=created_at.desc
Headers:
  apikey: YOUR_ANON_KEY
  Authorization: Bearer YOUR_ANON_KEY
```

#### GET - Get Single Blog Post by Slug
```
Method: GET
URL: https://YOUR_PROJECT_ID.supabase.co/rest/v1/blog_posts?slug=eq.designing-with-emotion&select=*
Headers:
  apikey: YOUR_ANON_KEY
  Authorization: Bearer YOUR_ANON_KEY
```

#### POST - Create New Blog Post
```
Method: POST
URL: https://YOUR_PROJECT_ID.supabase.co/rest/v1/blog_posts
Headers:
  apikey: YOUR_ANON_KEY
  Authorization: Bearer YOUR_ANON_KEY
  Content-Type: application/json
  Prefer: return=representation
Body (JSON):
{
  "slug": "new-blog-post",
  "title_en": "New Blog Post",
  "title_ar": "مقال جديد",
  "excerpt_en": "Short preview text",
  "excerpt_ar": "نص معاينة قصير",
  "content_en": "Full blog post content...",
  "content_ar": "محتوى المقال الكامل...",
  "cover_img": "blog-images/new-post.png",
  "is_published": true
}
```

#### PATCH - Update Blog Post
```
Method: PATCH
URL: https://YOUR_PROJECT_ID.supabase.co/rest/v1/blog_posts?slug=eq.new-blog-post
Headers:
  apikey: YOUR_ANON_KEY
  Authorization: Bearer YOUR_ANON_KEY
  Content-Type: application/json
  Prefer: return=representation
Body (JSON):
{
  "title_en": "Updated Title",
  "is_published": false
}
```

#### DELETE - Delete Blog Post
```
Method: DELETE
URL: https://YOUR_PROJECT_ID.supabase.co/rest/v1/blog_posts?slug=eq.new-blog-post
Headers:
  apikey: YOUR_ANON_KEY
  Authorization: Bearer YOUR_ANON_KEY
```

---

### Table: `contact_submissions`

#### GET - Get All Contact Submissions
```
Method: GET
URL: https://YOUR_PROJECT_ID.supabase.co/rest/v1/contact_submissions?select=*&order=created_at.desc
Headers:
  apikey: YOUR_ANON_KEY
  Authorization: Bearer YOUR_ANON_KEY
```

#### GET - Get Submissions by Status
```
Method: GET
URL: https://YOUR_PROJECT_ID.supabase.co/rest/v1/contact_submissions?select=*&status=eq.new&order=created_at.desc
Headers:
  apikey: YOUR_ANON_KEY
  Authorization: Bearer YOUR_ANON_KEY
```

#### POST - Create New Contact Submission
```
Method: POST
URL: https://YOUR_PROJECT_ID.supabase.co/rest/v1/contact_submissions
Headers:
  apikey: YOUR_ANON_KEY
  Authorization: Bearer YOUR_ANON_KEY
  Content-Type: application/json
  Prefer: return=representation
Body (JSON):
{
  "first_name": "John",
  "last_name": "Doe",
  "email": "john@example.com",
  "phone": "1234567890",
  "message": "Hello, I'm interested in working with you.",
  "status": "new"
}
```

#### PATCH - Update Submission Status
```
Method: PATCH
URL: https://YOUR_PROJECT_ID.supabase.co/rest/v1/contact_submissions?id=eq.UUID_HERE
Headers:
  apikey: YOUR_ANON_KEY
  Authorization: Bearer YOUR_ANON_KEY
  Content-Type: application/json
  Prefer: return=representation
Body (JSON):
{
  "status": "read",
  "read_at": "2024-01-15T10:30:00Z"
}
```

---

### Table: `gallery_items`

#### GET - Get All Gallery Items
```
Method: GET
URL: https://YOUR_PROJECT_ID.supabase.co/rest/v1/gallery_items?select=*&order=display_order.asc
Headers:
  apikey: YOUR_ANON_KEY
  Authorization: Bearer YOUR_ANON_KEY
```

#### GET - Get Gallery Items for Specific Project
```
Method: GET
URL: https://YOUR_PROJECT_ID.supabase.co/rest/v1/gallery_items?select=*&project_id=eq.1&order=display_order.asc
Headers:
  apikey: YOUR_ANON_KEY
  Authorization: Bearer YOUR_ANON_KEY
```

#### POST - Create New Gallery Item
```
Method: POST
URL: https://YOUR_PROJECT_ID.supabase.co/rest/v1/gallery_items
Headers:
  apikey: YOUR_ANON_KEY
  Authorization: Bearer YOUR_ANON_KEY
  Content-Type: application/json
  Prefer: return=representation
Body (JSON):
{
  "project_id": 1,
  "image_url": "gallery-images/egy-air/gallery-1.png",
  "image_alt": "Egy Air Gallery Image 1",
  "display_order": 0,
  "height": 600
}
```

#### DELETE - Delete Gallery Item
```
Method: DELETE
URL: https://YOUR_PROJECT_ID.supabase.co/rest/v1/gallery_items?id=eq.UUID_HERE
Headers:
  apikey: YOUR_ANON_KEY
  Authorization: Bearer YOUR_ANON_KEY
```

---

### Table: `project_details`

#### GET - Get All Project Details
```
Method: GET
URL: https://YOUR_PROJECT_ID.supabase.co/rest/v1/project_details?select=*
Headers:
  apikey: YOUR_ANON_KEY
  Authorization: Bearer YOUR_ANON_KEY
```

#### GET - Get Project Details by Project ID
```
Method: GET
URL: https://YOUR_PROJECT_ID.supabase.co/rest/v1/project_details?select=*&project_id=eq.1
Headers:
  apikey: YOUR_ANON_KEY
  Authorization: Bearer YOUR_ANON_KEY
```

#### POST - Create Project Details
```
Method: POST
URL: https://YOUR_PROJECT_ID.supabase.co/rest/v1/project_details
Headers:
  apikey: YOUR_ANON_KEY
  Authorization: Bearer YOUR_ANON_KEY
  Content-Type: application/json
  Prefer: return=representation
Body (JSON):
{
  "project_id": 1,
  "hero_text_en": "Elegant Air Travel Experience",
  "hero_text_ar": "تجربة سفر جوية أنيقة",
  "description_en": "A modern airline booking platform...",
  "description_ar": "منصة حجز طيران حديثة..."
}
```

#### PATCH - Update Project Details
```
Method: PATCH
URL: https://YOUR_PROJECT_ID.supabase.co/rest/v1/project_details?project_id=eq.1
Headers:
  apikey: YOUR_ANON_KEY
  Authorization: Bearer YOUR_ANON_KEY
  Content-Type: application/json
  Prefer: return=representation
Body (JSON):
{
  "hero_text_en": "Updated Hero Text"
}
```

---

### Table: `home_content`

#### GET - Get All Home Content
```
Method: GET
URL: https://YOUR_PROJECT_ID.supabase.co/rest/v1/home_content?select=*&order=display_order.asc
Headers:
  apikey: YOUR_ANON_KEY
  Authorization: Bearer YOUR_ANON_KEY
```

#### GET - Get Content by Section
```
Method: GET
URL: https://YOUR_PROJECT_ID.supabase.co/rest/v1/home_content?select=*&section=eq.home&order=display_order.asc
Headers:
  apikey: YOUR_ANON_KEY
  Authorization: Bearer YOUR_ANON_KEY
```

#### GET - Get Specific Content by Key
```
Method: GET
URL: https://YOUR_PROJECT_ID.supabase.co/rest/v1/home_content?select=*&section=eq.home&key=eq.hero_title
Headers:
  apikey: YOUR_ANON_KEY
  Authorization: Bearer YOUR_ANON_KEY
```

#### POST - Create Home Content
```
Method: POST
URL: https://YOUR_PROJECT_ID.supabase.co/rest/v1/home_content
Headers:
  apikey: YOUR_ANON_KEY
  Authorization: Bearer YOUR_ANON_KEY
  Content-Type: application/json
  Prefer: return=representation
Body (JSON):
{
  "section": "home",
  "key": "hero_title",
  "content_en": "Hello Im Jana Ahmed Ahmed",
  "content_ar": "مرحباً أنا جنا أحمد أحمد",
  "display_order": 0
}
```

---

### Table: `skills`

#### GET - Get All Skills
```
Method: GET
URL: https://YOUR_PROJECT_ID.supabase.co/rest/v1/skills?select=*&order=display_order.asc
Headers:
  apikey: YOUR_ANON_KEY
  Authorization: Bearer YOUR_ANON_KEY
```

#### POST - Create New Skill
```
Method: POST
URL: https://YOUR_PROJECT_ID.supabase.co/rest/v1/skills
Headers:
  apikey: YOUR_ANON_KEY
  Authorization: Bearer YOUR_ANON_KEY
  Content-Type: application/json
  Prefer: return=representation
Body (JSON):
{
  "name": "React",
  "name_ar": "رياكت",
  "type": "",
  "display_order": 12
}
```

---

### Table: `experience`

#### GET - Get All Experience
```
Method: GET
URL: https://YOUR_PROJECT_ID.supabase.co/rest/v1/experience?select=*&order=display_order.asc
Headers:
  apikey: YOUR_ANON_KEY
  Authorization: Bearer YOUR_ANON_KEY
```

#### GET - Get Experience by Type
```
Method: GET
URL: https://YOUR_PROJECT_ID.supabase.co/rest/v1/experience?select=*&type=eq.education&order=display_order.asc
Headers:
  apikey: YOUR_ANON_KEY
  Authorization: Bearer YOUR_ANON_KEY
```

#### POST - Create New Experience
```
Method: POST
URL: https://YOUR_PROJECT_ID.supabase.co/rest/v1/experience
Headers:
  apikey: YOUR_ANON_KEY
  Authorization: Bearer YOUR_ANON_KEY
  Content-Type: application/json
  Prefer: return=representation
Body (JSON):
{
  "type": "education",
  "year_display": "2025–2026",
  "institution_en": "Egypt University of Informatics",
  "institution_ar": "جامعة مصر للمعلوماتية",
  "program_en": "Digital Arts & Design – UX/UI",
  "program_ar": "الفنون الرقمية وتصميم UX/UI",
  "display_order": 0
}
```

---

## 🧪 Step 5: Testing in Postman

### How to Test Each Endpoint

1. **Open Postman**
2. **Create a new request:**
   - Click "New" → "HTTP Request"
   - Or click "New" → "Collection" (to organize)

3. **Set the method:**
   - Select GET, POST, PATCH, or DELETE from dropdown

4. **Enter the URL:**
   - Copy the full URL from the guide above
   - Replace `YOUR_PROJECT_ID` with your actual project ID

5. **Add headers:**
   - Click "Headers" tab
   - Add each header:
     - `apikey`: `YOUR_ANON_KEY`
     - `Authorization`: `Bearer YOUR_ANON_KEY`
     - `Content-Type`: `application/json` (for POST/PATCH)
     - `Prefer`: `return=representation` (for POST/PATCH)

6. **Add body (for POST/PATCH):**
   - Click "Body" tab
   - Select "raw"
   - Select "JSON" from dropdown
   - Paste the JSON body from the guide

7. **Send request:**
   - Click "Send" button
   - Check the response

---

## 📦 Step 6: Create Postman Collection

### Create Collection

1. **Click "New" → "Collection"**
2. **Name it:** "Portfolio Supabase API"
3. **Add description:** "All API endpoints for portfolio website"

### Add Folders (Organize by Table)

1. **Right-click collection → "Add Folder"**
2. **Create folders:**
   - `Projects`
   - `Blog Posts`
   - `Contact Submissions`
   - `Gallery Items`
   - `Project Details`
   - `Home Content`
   - `Skills`
   - `Experience`

### Add Requests to Collection

1. **Create a request** (as shown above)
2. **Save it:**
   - Click "Save" button
   - Select your collection
   - Select the appropriate folder
   - Name the request (e.g., "GET All Projects")

3. **Repeat for all endpoints**

### Use Variables (Recommended)

1. **Click on collection → "Variables" tab**
2. **Add variables:**
   - `base_url`: `https://YOUR_PROJECT_ID.supabase.co/rest/v1`
   - `anon_key`: `YOUR_ANON_KEY`

3. **Use in requests:**
   - URL: `{{base_url}}/projects?select=*`
   - Header `apikey`: `{{anon_key}}`
   - Header `Authorization`: `Bearer {{anon_key}}`

---

## ✅ Step 7: Test Checklist

### For Each Table, Test:

**Projects:**
- [ ] GET all projects
- [ ] GET project by ID
- [ ] GET project by slug
- [ ] POST create project
- [ ] PATCH update project
- [ ] DELETE project

**Blog Posts:**
- [ ] GET all blog posts
- [ ] GET blog post by slug
- [ ] POST create blog post
- [ ] PATCH update blog post
- [ ] DELETE blog post

**Contact Submissions:**
- [ ] GET all submissions
- [ ] GET submissions by status
- [ ] POST create submission
- [ ] PATCH update submission

**Gallery Items:**
- [ ] GET all gallery items
- [ ] GET gallery items by project
- [ ] POST create gallery item
- [ ] DELETE gallery item

**Project Details:**
- [ ] GET all project details
- [ ] GET details by project ID
- [ ] POST create project details
- [ ] PATCH update project details

**Home Content:**
- [ ] GET all home content
- [ ] GET content by section
- [ ] GET content by key
- [ ] POST create home content

**Skills:**
- [ ] GET all skills
- [ ] POST create skill

**Experience:**
- [ ] GET all experience
- [ ] GET experience by type
- [ ] POST create experience

---

## 🎯 Quick Reference: Common Query Parameters

### Select Specific Columns
```
?select=id,title_en,slug
```

### Filter (eq = equals)
```
?is_published=eq.true
?category=eq.App Design
?project_id=eq.1
```

### Order By
```
?order=display_order.asc
?order=created_at.desc
```

### Limit Results
```
?limit=10
```

### Combine Multiple
```
?select=*&is_published=eq.true&order=display_order.asc&limit=5
```

---

## 📝 Example: Complete Postman Request

### GET All Published Projects

**Method:** GET

**URL:**
```
https://abcdefghijklmnop.supabase.co/rest/v1/projects?select=*&is_published=eq.true&order=display_order.asc
```

**Headers:**
```
apikey: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

**Expected Response:**
```json
[
  {
    "id": 1,
    "title_en": "Egy Air",
    "title_ar": "إيجي إير",
    "slug": "egy-air",
    "category": "App Design",
    "cover_img": "project-images/egy-air.png",
    "is_published": true,
    "display_order": 0
  },
  ...
]
```

---

## 🚀 Summary

**Steps to complete:**
1. ✅ Get Supabase URL and API key
2. ✅ Create Postman Collection
3. ✅ Add all endpoints to collection
4. ✅ Test each endpoint
5. ✅ Use variables for base_url and anon_key
6. ✅ Organize requests in folders
7. ✅ Document each request

**All endpoints are ready to test!** 🎯

