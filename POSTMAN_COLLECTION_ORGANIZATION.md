# Postman Collection Organization Guide
## How to Organize Requests by Supabase Tables

---

## ✅ Yes! Name Folders After Your Tables

**Perfect organization:** Create folders that match your Supabase table names!

**This makes it easy to:**
- Find requests quickly
- Know which table each request uses
- Organize all endpoints logically
- Match your database structure

---

## 📊 Your Supabase Tables

Based on your setup, you have these tables:

1. **`projects`**
2. **`blog_posts`**
3. **`contact_submissions`**
4. **`gallery_items`**
5. **`project_details`**
6. **`home_content`**
7. **`skills`**
8. **`experience`**

---

## 📁 Recommended Folder Structure

### Create Folders Matching Table Names:

```
Portfolio Supabase API (Collection)
│
├── 📁 projects
│   ├── GET All Projects
│   ├── GET Project by ID
│   ├── GET Project by Slug
│   ├── POST Create Project
│   ├── PATCH Update Project
│   └── DELETE Project
│
├── 📁 blog_posts
│   ├── GET All Blog Posts
│   ├── GET Blog Post by Slug
│   ├── POST Create Blog Post
│   ├── PATCH Update Blog Post
│   └── DELETE Blog Post
│
├── 📁 contact_submissions
│   ├── GET All Submissions
│   ├── GET Submissions by Status
│   ├── POST Create Submission
│   └── PATCH Update Submission
│
├── 📁 gallery_items
│   ├── GET All Gallery Items
│   ├── GET Gallery Items by Project
│   ├── POST Create Gallery Item
│   └── DELETE Gallery Item
│
├── 📁 project_details
│   ├── GET All Project Details
│   ├── GET Details by Project ID
│   ├── POST Create Project Details
│   └── PATCH Update Project Details
│
├── 📁 home_content
│   ├── GET All Home Content
│   ├── GET Content by Section
│   ├── GET Content by Key
│   └── POST Create Home Content
│
├── 📁 skills
│   ├── GET All Skills
│   └── POST Create Skill
│
└── 📁 experience
    ├── GET All Experience
    ├── GET Experience by Type
    └── POST Create Experience
```

---

## 🎯 Step-by-Step: Create Folders

### Method 1: Create Folders First, Then Add Requests

1. **In Postman, go to your collection**
2. **Right-click on collection name** → **"Add Folder"**
3. **Name it:** `projects`
4. **Repeat for all tables:**
   - `blog_posts`
   - `contact_submissions`
   - `gallery_items`
   - `project_details`
   - `home_content`
   - `skills`
   - `experience`

### Method 2: Create Request, Then Organize

1. **Create a request** (e.g., "GET All Projects")
2. **Save it to collection**
3. **Drag it into the appropriate folder** (e.g., `projects`)

---

## 📝 Naming Convention

### Folder Names (Match Table Names):
- ✅ `projects`
- ✅ `blog_posts`
- ✅ `contact_submissions`
- ✅ `gallery_items`
- ✅ `project_details`
- ✅ `home_content`
- ✅ `skills`
- ✅ `experience`

### Request Names (Descriptive):
- ✅ `GET All Projects`
- ✅ `GET Project by ID`
- ✅ `POST Create Project`
- ✅ `PATCH Update Project`
- ✅ `DELETE Project`

**Format:** `[METHOD] [Description]`

---

## 🎨 Complete Example: Projects Folder

### Folder: `projects`

**Requests inside:**
1. **GET All Projects**
   - URL: `https://YOUR_PROJECT_ID.supabase.co/rest/v1/projects?select=*&is_published=eq.true`

2. **GET Project by ID**
   - URL: `https://YOUR_PROJECT_ID.supabase.co/rest/v1/projects?id=eq.1&select=*`

3. **GET Project by Slug**
   - URL: `https://YOUR_PROJECT_ID.supabase.co/rest/v1/projects?slug=eq.egy-air&select=*`

4. **POST Create Project**
   - Method: POST
   - URL: `https://YOUR_PROJECT_ID.supabase.co/rest/v1/projects`
   - Body: JSON with project data

5. **PATCH Update Project**
   - Method: PATCH
   - URL: `https://YOUR_PROJECT_ID.supabase.co/rest/v1/projects?id=eq.1`
   - Body: JSON with updated fields

6. **DELETE Project**
   - Method: DELETE
   - URL: `https://YOUR_PROJECT_ID.supabase.co/rest/v1/projects?id=eq.1`

---

## ✅ Complete Checklist

### Create Collection:
- [ ] Create collection: "Portfolio Supabase API"

### Create Folders (8 folders):
- [ ] `projects`
- [ ] `blog_posts`
- [ ] `contact_submissions`
- [ ] `gallery_items`
- [ ] `project_details`
- [ ] `home_content`
- [ ] `skills`
- [ ] `experience`

### Add Requests to Each Folder:
- [ ] Projects folder: 6 requests (GET all, GET by ID, GET by slug, POST, PATCH, DELETE)
- [ ] Blog Posts folder: 5 requests
- [ ] Contact Submissions folder: 4 requests
- [ ] Gallery Items folder: 4 requests
- [ ] Project Details folder: 4 requests
- [ ] Home Content folder: 4 requests
- [ ] Skills folder: 2 requests
- [ ] Experience folder: 3 requests

**Total: ~32 requests** organized in 8 folders

---

## 💡 Tips

1. **Match table names exactly:**
   - Use same name as in Supabase
   - Keep lowercase
   - Use underscores: `blog_posts` not `blog-posts`

2. **Organize logically:**
   - One folder per table
   - All requests for that table in the folder

3. **Use descriptive request names:**
   - `GET All Projects` (not just "GET")
   - `POST Create Blog Post` (not just "POST")

4. **Add descriptions:**
   - Right-click request → "Edit"
   - Add description explaining what it does

---

## 🚀 Summary

**Yes! Name folders after your Supabase tables:**

- ✅ `projects` folder → All projects requests
- ✅ `blog_posts` folder → All blog posts requests
- ✅ `contact_submissions` folder → All contact requests
- ✅ And so on...

**This organization:**
- Matches your database structure
- Makes it easy to find requests
- Keeps everything organized
- Perfect for your assignment!

**Create 8 folders, one for each table!** 🎯

