# 🔧 Fix 404 Error for Blog Posts

404 means the table or URL is not found. Let's troubleshoot:

---

## ✅ Step 1: Check Your Table Name

The 404 error usually means the table name is wrong.

### Check in Supabase:

1. **Go to Supabase Dashboard**
2. **Click "Table Editor"** (left sidebar)
3. **Look for your blog posts table**
4. **What is the exact table name?**
   - Is it `blog_posts`?
   - Or `blog_posts`?
   - Or something else like `blogs`?

**Tell me the exact table name you see!**

---

## ✅ Step 2: Test with GET Request First

Before creating, test if the table exists:

1. **Use "GET Blog Post" request** (or create new GET request)
2. **URL**: `https://kkvepvlkgppzwapbbynh.supabase.co/rest/v1/blog_posts?limit=1`
3. **Headers**: `apikey`, `Authorization`
4. **Click "Send"**

**If this also gives 404**: The table name is wrong or doesn't exist.

**If this works**: The table exists, but there might be an issue with POST URL.

---

## ✅ Step 3: Common Table Name Variations

Your table might be named differently:

### Try These URLs:

1. **`blog_posts`** (with underscore):
   ```
   https://kkvepvlkgppzwapbbynh.supabase.co/rest/v1/blog_posts
   ```

2. **`blogs`** (without underscore):
   ```
   https://kkvepvlkgppzwapbbynh.supabase.co/rest/v1/blogs
   ```

3. **`blog`** (singular):
   ```
   https://kkvepvlkgppzwapbbynh.supabase.co/rest/v1/blog
   ```

4. **`post`** or **`posts`**:
   ```
   https://kkvepvlkgppzwapbbynh.supabase.co/rest/v1/posts
   ```

---

## ✅ Step 4: Verify URL Format

Make sure your URL is exactly:

```
https://kkvepvlkgppzwapbbynh.supabase.co/rest/v1/[TABLE_NAME]
```

**Important**:
- ✅ Must include `/rest/v1/`
- ✅ No trailing slash
- ✅ Table name is lowercase (usually)
- ✅ Use underscores, not hyphens

---

## ✅ Step 5: Check Table Exists in Supabase

1. **Go to Supabase Dashboard**
2. **Table Editor**
3. **Do you see a table for blog posts?**
   - If **YES**: What's the exact name?
   - If **NO**: You need to create the table first!

---

## 🎯 Quick Test

### Test 1: GET Request

Try this GET request first:
- **URL**: `https://kkvepvlkgppzwapbbynh.supabase.co/rest/v1/blog_posts?limit=1`
- **Method**: `GET`
- **Headers**: `apikey`, `Authorization`

**If this works**: Table exists, use same table name for POST.

**If this gives 404**: Table name is wrong or table doesn't exist.

---

## 🐛 Common 404 Causes

### Cause 1: Wrong Table Name
- **Fix**: Check exact table name in Supabase Table Editor

### Cause 2: Table Doesn't Exist
- **Fix**: Create the table in Supabase first

### Cause 3: Typo in URL
- **Fix**: Check for typos: `blog_posts` vs `blog-posts` vs `blogs`

### Cause 4: Missing `/rest/v1/`
- **Wrong**: `https://.../blog_posts`
- **Correct**: `https://.../rest/v1/blog_posts`

---

## 🆘 What to Do Now

**Tell me**:
1. What exact table name do you see in Supabase Table Editor?
2. Does the GET request work? (Try it first)
3. What's the exact URL you're using in POST request?

Then I can give you the exact URL to use! 🎯

---

## 💡 Pro Tip

**Always test with GET first!**

1. Use GET request to see if table exists
2. If GET works, use the same table name for POST
3. If GET gives 404, the table name is wrong

---

## ✅ Quick Fix Steps

1. **Go to Supabase → Table Editor**
2. **Find your blog posts table**
3. **Note the exact table name**
4. **Use that exact name in your URL**:
   ```
   https://kkvepvlkgppzwapbbynh.supabase.co/rest/v1/[EXACT_TABLE_NAME]
   ```
5. **Test with GET request first**
6. **Then try POST**

---

## 🎯 Most Likely Fix

**The table name is probably different!**

Check Supabase Table Editor and tell me the exact table name, then I'll give you the correct URL! 🚀

