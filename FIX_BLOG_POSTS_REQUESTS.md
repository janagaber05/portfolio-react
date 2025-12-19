# 📝 Fix Blog Posts Requests

Step-by-step guide to fix your `blog_posts` requests.

---

## 🎯 What to Fix

You have 3 requests in `blog_posts` folder:
- ❌ "GET Create Blog Post" → Should be **POST**
- ❌ "GET Update Blog Post" → Should be **PATCH**
- ✅ "GET Blog Post" → Keep as **GET** (correct)

---

## ✅ Step 1: Fix "GET Create Blog Post" → Change to POST

### Setup:

1. **Click on "GET Create Blog Post"**
2. **Change Method**: Select **POST** from dropdown
3. **Set URL**: 
   ```
   https://kkvepvlkgppzwapbbynh.supabase.co/rest/v1/blog_posts
   ```
   (No query parameters)

4. **Add Headers** (all checkboxes checked ✅):
   | Key | Value |
   |-----|-------|
   | `apikey` | `sb_publishable_TXDJdOMzyg5RYq3aEYf7JQ_HlukQAuB` |
   | `Authorization` | `Bearer sb_publishable_TXDJdOMzyg5RYq3aEYf7JQ_HlukQAuB` |
   | `Content-Type` | `application/json` |
   | `Prefer` | `return=representation` |

5. **Add Body** (raw → JSON):
   ```json
   {
     "title": "New Blog Post",
     "title_ar": "مقال جديد",
     "slug": "new-blog-post",
     "excerpt": "This is a blog post excerpt",
     "excerpt_ar": "هذا ملخص المقال",
     "published": true,
     "display_order": 1
   }
   ```

6. **Rename**: Right-click → Edit → Change to "POST Create Blog Post"
7. **Save and test**

---

## ✅ Step 2: Fix "GET Update Blog Post" → Change to PATCH

### Setup:

1. **Click on "GET Update Blog Post"**
2. **Change Method**: Select **PATCH** from dropdown
3. **Set URL**: 
   ```
   https://kkvepvlkgppzwapbbynh.supabase.co/rest/v1/blog_posts?id=eq.1
   ```
   (Change `1` to the ID you want to update)

4. **Add Headers** (all checkboxes checked ✅):
   | Key | Value |
   |-----|-------|
   | `apikey` | `sb_publishable_TXDJdOMzyg5RYq3aEYf7JQ_HlukQAuB` |
   | `Authorization` | `Bearer sb_publishable_TXDJdOMzyg5RYq3aEYf7JQ_HlukQAuB` |
   | `Content-Type` | `application/json` |
   | `Prefer` | `return=representation` |

5. **Add Body** (raw → JSON):
   ```json
   {
     "title": "Updated Blog Post Title"
   }
   ```

6. **Rename**: Right-click → Edit → Change to "PATCH Update Blog Post"
7. **Save and test**

---

## ✅ Step 3: Keep "GET Blog Post" (Already Correct)

This one is already correct! Just verify:

1. **Method**: `GET` ✅
2. **URL**: `https://kkvepvlkgppzwapbbynh.supabase.co/rest/v1/blog_posts`
3. **Headers**: `apikey`, `Authorization` ✅
4. **Body**: None ✅

---

## ✅ Step 4: Add RLS Policies for blog_posts Table

For POST and PATCH to work, add policies:

### Add INSERT Policy:

1. **Go to Supabase Dashboard**
2. **Authentication → Policies**
3. **Select `blog_posts` table**
4. **Click "Create policy"**
5. **Fill in**:
   - Name: `Enable insert for public`
   - Operation: `INSERT`
   - Applied to: `public`
   - Definition: `true`
6. **Save**

### Add UPDATE Policy:

1. **Still in Policies → `blog_posts`**
2. **Click "Create policy"** again
3. **Fill in**:
   - Name: `Enable update for public`
   - Operation: `UPDATE`
   - Applied to: `public`
   - Definition: `true`
4. **Save**

### Add SELECT Policy (if GET doesn't work):

1. **Click "Create policy"** again
2. **Fill in**:
   - Name: `Enable select for public`
   - Operation: `SELECT`
   - Applied to: `public`
   - Definition: `true`
3. **Save**

---

## 📋 Complete JSON Examples

### POST Create Blog Post - Full Example:

```json
{
  "title": "Designing with Emotion: How Colors Shape User Experience",
  "title_ar": "التصميم بالعاطفة: كيف تشكل الألوان تجربة المستخدم",
  "slug": "designing-with-emotion-how-colors-shape-user-experience",
  "excerpt": "Discover how color psychology influences user behavior and creates memorable digital experiences.",
  "excerpt_ar": "اكتشف كيف تؤثر سيكولوجيا الألوان على سلوك المستخدم وتخلق تجارب رقمية لا تُنسى.",
  "content_en": "<p>Full article content in English...</p>",
  "content_ar": "<p>محتوى المقال الكامل بالعربية...</p>",
  "published": true,
  "display_order": 1
}
```

### POST Create Blog Post - Minimal Example:

```json
{
  "title": "New Blog Post",
  "slug": "new-blog-post",
  "excerpt": "Blog post excerpt",
  "published": true,
  "display_order": 1
}
```

### PATCH Update Blog Post:

```json
{
  "title": "Updated Title",
  "published": false
}
```

---

## ✅ Step 5: Test All Requests

### Test Checklist:

- [ ] GET Blog Post → Test (should work if SELECT policy exists)
- [ ] POST Create Blog Post → Test (after adding INSERT policy)
- [ ] PATCH Update Blog Post → Test (after adding UPDATE policy)

---

## 🎯 Quick Reference

### POST Create Blog Post:
- Method: `POST`
- URL: `https://kkvepvlkgppzwapbbynh.supabase.co/rest/v1/blog_posts`
- Headers: apikey, Authorization, Content-Type
- Body: JSON with blog post data

### PATCH Update Blog Post:
- Method: `PATCH`
- URL: `https://kkvepvlkgppzwapbbynh.supabase.co/rest/v1/blog_posts?id=eq.1`
- Headers: apikey, Authorization, Content-Type
- Body: JSON with only fields to update

### GET Blog Post:
- Method: `GET`
- URL: `https://kkvepvlkgppzwapbbynh.supabase.co/rest/v1/blog_posts`
- Headers: apikey, Authorization
- Body: None

---

## ✅ Complete Setup Checklist

- [ ] Changed "GET Create Blog Post" to POST
- [ ] Set up POST request (URL, headers, body)
- [ ] Changed "GET Update Blog Post" to PATCH
- [ ] Set up PATCH request (URL, headers, body)
- [ ] Verified "GET Blog Post" is correct
- [ ] Added INSERT policy for `blog_posts` table
- [ ] Added UPDATE policy for `blog_posts` table
- [ ] Added SELECT policy for `blog_posts` table (if needed)
- [ ] Tested all requests
- [ ] Renamed requests properly

---

## 🎉 After Completing

You'll have:
- ✅ Working GET request (read blog posts)
- ✅ Working POST request (create blog posts)
- ✅ Working PATCH request (update blog posts)
- ✅ All RLS policies set up

**Your blog_posts requests are complete!** 🚀

---

## 💡 Pro Tip

**Check your `blog_posts` table columns first** (like we did for projects):
1. Use GET request to see existing data
2. See what fields are returned
3. Use only those fields in your POST/PATCH requests

This prevents "column not found" errors!

---

## 🆘 Need Help?

If you get errors:
- **400 Bad Request**: Check JSON syntax and column names
- **401 Unauthorized**: Check headers are checked ✅
- **403/RLS Error**: Add INSERT/UPDATE policies
- **404 Not Found**: Check URL is correct

**You've got this!** 🎯

