# 🔗 Link Your Postman Collection to Supabase

Step-by-step guide to configure your requests to connect to Supabase.

---

## 🎯 Your Supabase Details

**Base URL**: `https://kkvepvlkgppzwapbbynh.supabase.co`

**API Key**: `sb_publishable_TXDJdOMzyg5RYq3aEYf7JQ_HlukQAuB`

**URL Format**: `https://kkvepvlkgppzwapbbynh.supabase.co/rest/v1/[TABLE_NAME]`

---

## 📋 Step 1: Configure Each Request

For **EVERY** request in your collection, you need to:

1. **Set the URL**
2. **Add Headers**
3. **Set Method** (GET, POST, PATCH, DELETE)
4. **Add Body** (for POST/PATCH)

---

## 🎯 Step 2: Configure "projects" Folder Requests

### Request: "GET All projects"

1. **Click on "GET All projects"** in your collection
2. **Method**: Should be `GET` (select from dropdown if not)
3. **URL**: 
   ```
   https://kkvepvlkgppzwapbbynh.supabase.co/rest/v1/projects?order=display_order
   ```
4. **Headers Tab** → Add these:
   | Key | Value |
   |-----|-------|
   | `apikey` | `sb_publishable_TXDJdOMzyg5RYq3aEYf7JQ_HlukQAuB` |
   | `Authorization` | `Bearer sb_publishable_TXDJdOMzyg5RYq3aEYf7JQ_HlukQAuB` |
5. **Click "Save"** (top right)
6. **Click "Send"** to test!

---

### Request: "GET Project by ID"

1. **Click on "GET Project by ID"**
2. **Method**: `GET`
3. **URL**: 
   ```
   https://kkvepvlkgppzwapbbynh.supabase.co/rest/v1/projects?id=eq.1
   ```
   (Change `1` to any project ID you want to test)
4. **Headers**: Same as above
5. **Save** and **Send**

---

### Request: "GET Project by Slug"

1. **Click on "GET Project by Slug"**
2. **Method**: `GET`
3. **URL**: 
   ```
   https://kkvepvlkgppzwapbbynh.supabase.co/rest/v1/projects?slug=eq.egy-air
   ```
   (Change `egy-air` to any slug you want)
4. **Headers**: Same as above
5. **Save** and **Send**

---

### Request: "GET Create project" (Should be POST!)

**Note**: This should be **POST**, not GET!

1. **Click on "GET Create project"**
2. **Right-click** → **"Edit"** → **Rename** to "POST Create project"
3. **Method**: Change to `POST`
4. **URL**: 
   ```
   https://kkvepvlkgppzwapbbynh.supabase.co/rest/v1/projects
   ```
5. **Headers**: 
   | Key | Value |
   |-----|-------|
   | `apikey` | `sb_publishable_TXDJdOMzyg5RYq3aEYf7JQ_HlukQAuB` |
   | `Authorization` | `Bearer sb_publishable_TXDJdOMzyg5RYq3aEYf7JQ_HlukQAuB` |
   | `Content-Type` | `application/json` |
   | `Prefer` | `return=representation` |
6. **Body Tab** → Select **"raw"** → Select **"JSON"**
7. **Body**:
   ```json
   {
     "title": "Test Project",
     "title_ar": "مشروع تجريبي",
     "description": "Test description",
     "category": ["App Design"],
     "featured": false,
     "display_order": 1
   }
   ```
8. **Save** and **Send**

---

### Request: "GET Update project" (Should be PATCH!)

**Note**: This should be **PATCH**, not GET!

1. **Click on "GET Update project"**
2. **Right-click** → **"Edit"** → **Rename** to "PATCH Update project"
3. **Method**: Change to `PATCH`
4. **URL**: 
   ```
   https://kkvepvlkgppzwapbbynh.supabase.co/rest/v1/projects?id=eq.1
   ```
   (Change `1` to the ID you want to update)
5. **Headers**: Same as POST (include Content-Type)
6. **Body Tab** → **"raw"** → **"JSON"**
7. **Body**:
   ```json
   {
     "title": "Updated Title"
   }
   ```
8. **Save** and **Send**

---

## 🎯 Step 3: Configure "blog_posts" Folder

### Create these requests in "blog_posts" folder:

#### "GET All Blog Posts"
- **Method**: `GET`
- **URL**: `https://kkvepvlkgppzwapbbynh.supabase.co/rest/v1/blog_posts?published=eq.true&order=display_order`
- **Headers**: apikey, Authorization

#### "POST Create Blog Post"
- **Method**: `POST`
- **URL**: `https://kkvepvlkgppzwapbbynh.supabase.co/rest/v1/blog_posts`
- **Headers**: apikey, Authorization, Content-Type: application/json
- **Body** (JSON):
  ```json
  {
    "title": "Test Blog Post",
    "slug": "test-blog-post",
    "excerpt": "Test excerpt",
    "published": true
  }
  ```

---

## 🎯 Step 4: Configure "skills" Folder

#### "GET All Skills"
- **Method**: `GET`
- **URL**: `https://kkvepvlkgppzwapbbynh.supabase.co/rest/v1/skills?order=display_order`
- **Headers**: apikey, Authorization

#### "POST Create Skill"
- **Method**: `POST`
- **URL**: `https://kkvepvlkgppzwapbbynh.supabase.co/rest/v1/skills`
- **Headers**: apikey, Authorization, Content-Type: application/json
- **Body**:
  ```json
  {
    "name": "PS",
    "display_order": 0
  }
  ```

---

## 🎯 Step 5: Configure "experince" Folder (experience)

#### "GET All Experience"
- **Method**: `GET`
- **URL**: `https://kkvepvlkgppzwapbbynh.supabase.co/rest/v1/experience?order=display_order`
- **Headers**: apikey, Authorization

#### "GET Education Only"
- **Method**: `GET`
- **URL**: `https://kkvepvlkgppzwapbbynh.supabase.co/rest/v1/experience?type=eq.education&order=display_order`
- **Headers**: apikey, Authorization

---

## 🎯 Step 6: Configure "project-details" Folder

#### "GET All Project Details"
- **Method**: `GET`
- **URL**: `https://kkvepvlkgppzwapbbynh.supabase.co/rest/v1/project_details?order=display_order`
- **Headers**: apikey, Authorization

#### "GET Details by Project ID"
- **Method**: `GET`
- **URL**: `https://kkvepvlkgppzwapbbynh.supabase.co/rest/v1/project_details?project_id=eq.1`
- **Headers**: apikey, Authorization

---

## 🎯 Step 7: Configure "contact_submissions" Folder

#### "GET All Submissions"
- **Method**: `GET`
- **URL**: `https://kkvepvlkgppzwapbbynh.supabase.co/rest/v1/contact_submissions?order=created_at.desc`
- **Headers**: apikey, Authorization

#### "POST Create Submission"
- **Method**: `POST`
- **URL**: `https://kkvepvlkgppzwapbbynh.supabase.co/rest/v1/contact_submissions`
- **Headers**: apikey, Authorization, Content-Type: application/json
- **Body**:
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

---

## 🎯 Step 8: Configure "Home About Category" Folder

#### "GET Home Content"
- **Method**: `GET`
- **URL**: `https://kkvepvlkgppzwapbbynh.supabase.co/rest/v1/home_content?section=eq.home&order=display_order`
- **Headers**: apikey, Authorization

#### "GET Category Content"
- **Method**: `GET`
- **URL**: `https://kkvepvlkgppzwapbbynh.supabase.co/rest/v1/home_content?section=eq.category&order=display_order`
- **Headers**: apikey, Authorization

#### "GET About Content"
- **Method**: `GET`
- **URL**: `https://kkvepvlkgppzwapbbynh.supabase.co/rest/v1/home_content?section=eq.about&order=display_order`
- **Headers**: apikey, Authorization

---

## ✅ Quick Setup Checklist

For **EVERY** request:

- [ ] Method is correct (GET, POST, PATCH, DELETE)
- [ ] URL starts with: `https://kkvepvlkgppzwapbbynh.supabase.co/rest/v1/`
- [ ] URL includes table name (e.g., `/projects`, `/skills`)
- [ ] Headers include `apikey` and `Authorization`
- [ ] For POST/PATCH: Headers include `Content-Type: application/json`
- [ ] For POST/PATCH: Body is set to "raw" → "JSON"
- [ ] Request is saved
- [ ] Tested with "Send" button

---

## 🧪 Test Your Connection

### Quick Test:

1. **Open "GET All projects"** request
2. **Make sure URL and headers are set** (as shown above)
3. **Click "Send"**
4. **Expected Result**: 
   - ✅ **Success**: You get data (or empty array `[]`)
   - ❌ **Error 404**: Check URL (make sure it has `/rest/v1/`)
   - ❌ **Error 403**: Check headers (apikey and Authorization)

---

## 🎯 Common URL Patterns

### GET All Rows:
```
https://kkvepvlkgppzwapbbynh.supabase.co/rest/v1/[TABLE_NAME]?order=display_order
```

### GET by ID:
```
https://kkvepvlkgppzwapbbynh.supabase.co/rest/v1/[TABLE_NAME]?id=eq.1
```

### GET with Filter:
```
https://kkvepvlkgppzwapbbynh.supabase.co/rest/v1/[TABLE_NAME]?column=eq.value
```

### POST Create:
```
https://kkvepvlkgppzwapbbynh.supabase.co/rest/v1/[TABLE_NAME]
```

### PATCH Update:
```
https://kkvepvlkgppzwapbbynh.supabase.co/rest/v1/[TABLE_NAME]?id=eq.1
```

---

## 🚀 You're Done!

Once you've configured all requests with:
- ✅ Correct URLs
- ✅ Required headers
- ✅ Correct methods
- ✅ Body (for POST/PATCH)

Your Postman collection is **fully connected to Supabase**! 🎉

Test each request with the "Send" button to make sure they work!

