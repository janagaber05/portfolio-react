# ✅ Quick Setup Checklist

Fast checklist to set up Supabase tables.

---

## 🎯 Method 1: Using SQL Editor (Fastest)

1. Go to Supabase Dashboard
2. Click **"SQL Editor"** (left sidebar)
3. Click **"New query"**
4. Copy the entire content from `SUPABASE_SQL_SETUP.sql`
5. Paste into the SQL editor
6. Click **"Run"** (or press Cmd/Ctrl + Enter)
7. ✅ Done! All tables created with RLS policies

---

## 🎯 Method 2: Using Table Editor (Step by Step)

### Table 1: `home_content`
- [ ] Create table named `home_content`
- [ ] Add column: `id` (uuid, primary key, default: `gen_random_uuid()`)
- [ ] Add column: `section` (text, NOT NULL)
- [ ] Add column: `key` (text, NOT NULL)
- [ ] Add column: `content_en` (text, nullable)
- [ ] Add column: `content_ar` (text, nullable)
- [ ] Add column: `metadata` (jsonb, nullable)
- [ ] Add column: `display_order` (int4, NOT NULL)
- [ ] Add column: `created_at` (timestamptz, default: `now()`)
- [ ] Add column: `updated_at` (timestamptz, default: `now()`)
- [ ] Add unique constraint: `section` + `key`
- [ ] Enable RLS
- [ ] Add policy: "Allow public read" (SELECT, public, USING: true)

### Table 2: `skills`
- [ ] Create table named `skills`
- [ ] Add column: `id` (uuid, primary key, default: `gen_random_uuid()`)
- [ ] Add column: `name` (text, NOT NULL)
- [ ] Add column: `name_ar` (text, nullable)
- [ ] Add column: `icon_type` (text, nullable)
- [ ] Add column: `short_name` (text, nullable)
- [ ] Add column: `category` (text, nullable)
- [ ] Add column: `proficiency` (int4, nullable)
- [ ] Add column: `display_order` (int4, NOT NULL)
- [ ] Add column: `created_at` (timestamptz, default: `now()`)
- [ ] Add column: `updated_at` (timestamptz, default: `now()`)
- [ ] Enable RLS
- [ ] Add policy: "Allow public read" (SELECT, public, USING: true)

### Table 3: `experience`
- [ ] Create table named `experience`
- [ ] Add column: `id` (uuid, primary key, default: `gen_random_uuid()`)
- [ ] Add column: `type` (text, NOT NULL)
- [ ] Add column: `start_year` (text, NOT NULL)
- [ ] Add column: `end_year` (text, nullable)
- [ ] Add column: `institution` (text, NOT NULL)
- [ ] Add column: `title` (text, NOT NULL)
- [ ] Add column: `description` (text, nullable)
- [ ] Add column: `display_order` (int4, NOT NULL)
- [ ] Add column: `created_at` (timestamptz, default: `now()`)
- [ ] Add column: `updated_at` (timestamptz, default: `now()`)
- [ ] Enable RLS
- [ ] Add policy: "Allow public read" (SELECT, public, USING: true)

---

## ✅ Verification Steps

After setup, verify:

1. **Check Tables Exist**:
   - [ ] Go to Table Editor
   - [ ] See `home_content` table
   - [ ] See `skills` table
   - [ ] See `experience` table

2. **Test RLS**:
   - [ ] Open Postman
   - [ ] GET request: `https://[project-id].supabase.co/rest/v1/home_content`
   - [ ] Should return `[]` (empty array, no error)
   - [ ] If error, check RLS policies

3. **Ready for Data**:
   - [ ] All tables created ✅
   - [ ] All RLS policies set ✅
   - [ ] Ready to add rows via Postman ✅

---

## 🚀 Next Step

Once setup is complete:
→ Use `ALL_SECTIONS_POSTMAN_DATA.md` to add all your data!

---

## 🐛 Quick Fixes

**Error: "relation already exists"**
- Table already created, skip it or drop first

**Error: "permission denied"**
- Check RLS policies are set correctly

**Error: "column does not exist"**
- Make sure all columns are added exactly as specified

---

**Total Setup Time: ~5-10 minutes** ⏱️

