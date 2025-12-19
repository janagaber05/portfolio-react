# ✅ Fix: Use Correct Table Name "Blogs"

Your table is named **"Blogs"** (with capital B). Here's how to use it:

---

## ✅ Step 1: Update Your POST Request URL

### Correct URL:

```
https://kkvepvlkgppzwapbbynh.supabase.co/rest/v1/Blogs
```

**Note**: Capital "B" in "Blogs"!

---

## ✅ Step 2: Update All Your Requests

### POST Create Blog Post:
- **URL**: `https://kkvepvlkgppzwapbbynh.supabase.co/rest/v1/Blogs`
- **Method**: `POST`
- **Headers**: apikey, Authorization, Content-Type: application/json
- **Body**: Your JSON

### PATCH Update Blog Post:
- **URL**: `https://kkvepvlkgppzwapbbynh.supabase.co/rest/v1/Blogs?id=eq.1`
- **Method**: `PATCH`
- **Headers**: Same as POST
- **Body**: JSON with fields to update

### GET Blog Post:
- **URL**: `https://kkvepvlkgppzwapbbynh.supabase.co/rest/v1/Blogs?limit=1`
- **Method**: `GET`
- **Headers**: apikey, Authorization

---

## ✅ Step 3: Test GET Request First

1. **Use "GET Blog Post" request**
2. **Update URL to**: `https://kkvepvlkgppzwapbbynh.supabase.co/rest/v1/Blogs?limit=1`
3. **Headers**: `apikey`, `Authorization`
4. **Click "Send"**

**If this works**: Table exists! Use `Blogs` (capital B) for all requests.

**If this still gives 404**: Try lowercase `blogs` or check if table exists.

---

## 🎯 Quick Fix

### In Your POST Request:

1. **Click on "POST Create Blog Post"** (or "GET Create Blog Post" if not renamed yet)
2. **Update URL to**:
   ```
   https://kkvepvlkgppzwapbbynh.supabase.co/rest/v1/Blogs
   ```
   (Capital "B" in "Blogs")
3. **Keep everything else the same** (headers, body)
4. **Click "Send"**

**Should work now!** ✅

---

## 📋 All URLs Updated

### For `Blogs` table:

| Request | Method | URL |
|---------|--------|-----|
| GET All | GET | `https://kkvepvlkgppzwapbbynh.supabase.co/rest/v1/Blogs` |
| GET by ID | GET | `https://kkvepvlkgppzwapbbynh.supabase.co/rest/v1/Blogs?id=eq.1` |
| POST Create | POST | `https://kkvepvlkgppzwapbbynh.supabase.co/rest/v1/Blogs` |
| PATCH Update | PATCH | `https://kkvepvlkgppzwapbbynh.supabase.co/rest/v1/Blogs?id=eq.1` |
| DELETE | DELETE | `https://kkvepvlkgppzwapbbynh.supabase.co/rest/v1/Blogs?id=eq.1` |

**All use capital "B" in "Blogs"!**

---

## ✅ Step 4: Add RLS Policies for "Blogs" Table

Don't forget to add policies:

1. **Supabase → Authentication → Policies**
2. **Select `Blogs` table** (capital B)
3. **Add INSERT policy** (for POST)
4. **Add UPDATE policy** (for PATCH)
5. **Add SELECT policy** (for GET)

---

## 🎯 Summary

**The fix**: Use `Blogs` (capital B) instead of `blog_posts` in your URLs!

**Updated URL**:
```
https://kkvepvlkgppzwapbbynh.supabase.co/rest/v1/Blogs
```

**Try it now!** 🚀

---

## 💡 Note

If `Blogs` (capital B) still doesn't work, Supabase might require lowercase. Try:
- `blogs` (lowercase)
- Or check Supabase Table Editor for exact casing

But start with `Blogs` (capital B) first! ✅

