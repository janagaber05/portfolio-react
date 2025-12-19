# URL Format Visual Guide
## Exactly What Your Postman URL Should Look Like

---

## 🎯 Correct URL Format

### Visual Breakdown:

```
https://abcdefghijklmnop.supabase.co/rest/v1/projects
│        │                    │         │        │
│        │                    │         │        └─ Table name
│        │                    │         └─ API path (MUST HAVE!)
│        │                    └─ Supabase domain
│        └─ Your project ID (random string)
└─ Protocol
```

---

## ✅ Correct Examples

### Example 1: GET all projects
```
https://abcdefghijklmnop.supabase.co/rest/v1/projects?select=*
```

### Example 2: GET specific project
```
https://abcdefghijklmnop.supabase.co/rest/v1/projects?id=eq.1
```

### Example 3: POST new project
```
https://abcdefghijklmnop.supabase.co/rest/v1/projects
```

### Example 4: GET blog posts
```
https://abcdefghijklmnop.supabase.co/rest/v1/blog_posts?select=*
```

---

## ❌ Common Wrong Formats

### Wrong 1: Missing /rest/v1/
```
❌ https://xxx.supabase.co/projects
✅ https://xxx.supabase.co/rest/v1/projects
```

### Wrong 2: Extra slash at end
```
❌ https://xxx.supabase.co/rest/v1/projects/
✅ https://xxx.supabase.co/rest/v1/projects
```

### Wrong 3: Wrong project ID
```
❌ https://YOUR_PROJECT_ID.supabase.co/rest/v1/projects
✅ https://abcdefghijklmnop.supabase.co/rest/v1/projects
```

### Wrong 4: Missing https://
```
❌ xxx.supabase.co/rest/v1/projects
✅ https://xxx.supabase.co/rest/v1/projects
```

---

## 📋 How to Get Your Exact URL

### Step 1: Get Project URL from Supabase

1. Go to **Supabase Dashboard**
2. Click **Settings** (gear icon, bottom left)
3. Click **API**
4. Find **"Project URL"**
5. Copy it (looks like: `https://abcdefghijklmnop.supabase.co`)

### Step 2: Build Your API URL

**Take your Project URL:**
```
https://abcdefghijklmnop.supabase.co
```

**Add `/rest/v1/` and table name:**
```
https://abcdefghijklmnop.supabase.co/rest/v1/projects
```

**That's your Postman URL!**

---

## 🎯 Quick Reference: All Tables

### Replace `[PROJECT_ID]` with your actual project ID:

```
projects:        https://[PROJECT_ID].supabase.co/rest/v1/projects
blog_posts:      https://[PROJECT_ID].supabase.co/rest/v1/blog_posts
contact_submissions: https://[PROJECT_ID].supabase.co/rest/v1/contact_submissions
gallery_items:   https://[PROJECT_ID].supabase.co/rest/v1/gallery_items
project_details: https://[PROJECT_ID].supabase.co/rest/v1/project_details
home_content:    https://[PROJECT_ID].supabase.co/rest/v1/home_content
skills:          https://[PROJECT_ID].supabase.co/rest/v1/skills
experience:      https://[PROJECT_ID].supabase.co/rest/v1/experience
```

---

## ✅ Final Check

**Your URL must have:**
1. ✅ `https://` at start
2. ✅ Your project ID (random string)
3. ✅ `.supabase.co`
4. ✅ `/rest/v1/` ← **This is the most common missing part!**
5. ✅ Table name at end

**If any part is missing, you'll get 404!**

