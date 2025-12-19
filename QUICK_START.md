# Quick Start Guide - Supabase Setup

## What You Need to Do in Supabase Dashboard

### 1. Create 5 Tables

Go to **Table Editor** and create:

1. **`projects`** - Portfolio projects
2. **`project_details`** - Project page sections  
3. **`blog_posts`** - Blog posts
4. **`contact_submissions`** - Contact form data
5. **`gallery_items`** - Gallery images

### 2. Enable RLS on All Tables

For each table:
- Click the table → **"..."** menu → **"Enable RLS"**

### 3. Create Storage Buckets

Go to **Storage** → Create 4 buckets (all public):
- `project-images`
- `blog-images`
- `gallery-images`
- `general-images`

### 4. Create Admin User

Go to **Authentication** → **Users** → **Add user**
- Set user metadata: `role: 'admin'`

---

## Detailed Instructions

See **`SUPABASE_DASHBOARD_SETUP.md`** for complete step-by-step instructions with all column names, types, and policies.

---

## After Setup

1. Add your Supabase credentials to `.env`:
```env
REACT_APP_SUPABASE_URL=your-url
REACT_APP_SUPABASE_ANON_KEY=your-key
```

2. Install dependencies:
```bash
npm install @supabase/supabase-js
```

3. Start using the hooks in your components!

