# ✅ Complete PATCH Request for Update Blog Post

Your PATCH request is ready! Just need to add the URL and body.

---

## ✅ Step 1: Add the URL

1. **Click in the URL field** (where it says "Enter URL or paste text")
2. **Type or paste**:
   ```
   https://kkvepvlkgppzwapbbynh.supabase.co/rest/v1/Blogs?id=eq.1
   ```
   **Note**: Change `1` to the ID of the blog post you want to update

---

## ✅ Step 2: Verify Headers

1. **Click on "Headers" tab** (you have 8 headers)
2. **Make sure you have these headers** (all checkboxes checked ✅):

| Key | Value | ✅ Checked |
|-----|-------|------------|
| `apikey` | `sb_publishable_TXDJdOMzyg5RYq3aEYf7JQ_HlukQAuB` | ✅ |
| `Authorization` | `Bearer sb_publishable_TXDJdOMzyg5RYq3aEYf7JQ_HlukQAuB` | ✅ |
| `Content-Type` | `application/json` | ✅ |
| `Prefer` | `return=representation` | ✅ (optional) |

---

## ✅ Step 3: Add Body

1. **Click on "Body" tab**
2. **Select "raw"** radio button
3. **Select "JSON"** from dropdown
4. **Click in the text area**
5. **Paste this JSON**:

```json
{
  "title_en": "Updated Blog Post Title"
}
```

**Or update multiple fields**:
```json
{
  "title_en": "Updated Title",
  "title_ar": "عنوان محدث",
  "is_published": false
}
```

---

## ✅ Step 4: Get the Blog Post ID

Before updating, you need to know which blog post to update:

### Option 1: Use GET Request
1. **Use "GET Blog Post" request**
2. **URL**: `https://kkvepvlkgppzwapbbynh.supabase.co/rest/v1/Blogs`
3. **Click "Send"**
4. **Look at the response** - find the `id` of the blog post you want to update
5. **Use that ID** in your PATCH URL

### Option 2: Use ID from Supabase
1. **Go to Supabase → Table Editor → Blogs**
2. **See the `id` column**
3. **Use that ID** in your PATCH URL

---

## ✅ Step 5: Complete Setup

### Your PATCH Request Should Have:

**Method**: `PATCH` ✅ (already set)

**URL**: 
```
https://kkvepvlkgppzwapbbynh.supabase.co/rest/v1/Blogs?id=eq.1
```
(Change `1` to actual blog post ID)

**Headers** (4 total, all checked ✅):
- `apikey`: `sb_publishable_TXDJdOMzyg5RYq3aEYf7JQ_HlukQAuB`
- `Authorization`: `Bearer sb_publishable_TXDJdOMzyg5RYq3aEYf7JQ_HlukQAuB`
- `Content-Type`: `application/json`
- `Prefer`: `return=representation`

**Body** (raw → JSON):
```json
{
  "title_en": "Updated Title"
}
```

---

## ✅ Step 6: Add UPDATE Policy (If Not Done)

For PATCH to work, you need UPDATE policy:

1. **Go to Supabase Dashboard**
2. **Authentication → Policies**
3. **Select `Blogs` table**
4. **Click "Create policy"**
5. **Fill in**:
   - Name: `Enable update for public`
   - Operation: `UPDATE`
   - Applied to: `public`
   - Definition: `true`
6. **Save**

---

## ✅ Step 7: Test

1. **Make sure URL has a valid blog post ID** (use GET request to find one)
2. **Add body with fields to update**
3. **Click "Send"**
4. **Expected**: 200 OK with updated blog post data

---

## 🎯 Quick Examples

### Update Only Title:
```json
{
  "title_en": "New Title"
}
```

### Update Title and Published Status:
```json
{
  "title_en": "Updated Title",
  "is_published": false
}
```

### Update Multiple Fields:
```json
{
  "title_en": "Updated Title",
  "title_ar": "عنوان محدث",
  "excerpt_en": "Updated excerpt",
  "is_published": true,
  "is_featured": true
}
```

---

## 📋 Complete Checklist

- [ ] Method is `PATCH` ✅
- [ ] URL is set: `https://kkvepvlkgppzwapbbynh.supabase.co/rest/v1/Blogs?id=eq.1`
- [ ] URL has correct blog post ID (not just `1`)
- [ ] Headers tab has 4 headers, all checked ✅
- [ ] Body tab: raw → JSON selected
- [ ] Body has JSON with fields to update
- [ ] UPDATE policy added in Supabase
- [ ] Clicked "Save"
- [ ] Clicked "Send"

---

## 🎯 Summary

**What to do**:
1. Add URL: `https://kkvepvlkgppzwapbbynh.supabase.co/rest/v1/Blogs?id=eq.1`
2. Change `1` to actual blog post ID
3. Add body with fields to update
4. Add UPDATE policy in Supabase
5. Click "Send"

**That's it!** 🚀

---

## 💡 Pro Tip

**Get the ID first**:
1. Use GET request to see all blog posts
2. Find the `id` of the one you want to update
3. Use that `id` in your PATCH URL

**Example**: If blog post has `id: 5`, use:
```
https://kkvepvlkgppzwapbbynh.supabase.co/rest/v1/Blogs?id=eq.5
```

---

## 🎉 After Completing

Once you:
1. ✅ Add URL with correct ID
2. ✅ Add body with fields to update
3. ✅ Add UPDATE policy
4. ✅ Click "Send"

You should get **200 OK** with the updated blog post! 🎉

