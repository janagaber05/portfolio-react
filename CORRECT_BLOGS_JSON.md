# ✅ Correct JSON for Your Blogs Table

Based on your table columns, here's the exact JSON to use.

---

## 📋 Your Blogs Table Columns

From your table, I can see you have:

### Main Columns:
- `id` (int8) - ❌ **Don't include** (auto-generated)
- `created_at` (timestamptz) - ❌ **Don't include** (auto-generated)
- `slug` (text) - ✅ **Include**
- `title_en` (text) - ✅ **Include**
- `title_ar` (text) - ✅ **Include**
- `excerpt_en` (text) - ✅ **Include** (optional)
- `excerpt_ar` (text) - ✅ **Include** (optional)
- `content_en` (text) - ✅ **Include** (optional)
- `content_ar` (text) - ✅ **Include** (optional)
- `featured_image` (text) - ✅ **Include** (optional)
- `updated_at` (timestamptz) - ❌ **Don't include** (auto-generated)
- `is_published` (bool) - ✅ **Include** (optional)
- `is_featured` (bool) - ✅ **Include** (optional)

**Note**: You **don't have** `display_order` column! ❌

---

## ✅ Correct JSON for POST Request

### Minimal JSON (Required Fields):

```json
{
  "title_en": "New Blog Post",
  "title_ar": "مقال جديد",
  "slug": "new-blog-post"
}
```

### Complete JSON (With All Fields):

```json
{
  "title_en": "New Blog Post",
  "title_ar": "مقال جديد",
  "slug": "new-blog-post",
  "excerpt_en": "This is a blog post excerpt",
  "excerpt_ar": "هذا ملخص المقال",
  "content_en": "<p>Full blog post content in English...</p>",
  "content_ar": "<p>محتوى المقال الكامل بالعربية...</p>",
  "featured_image": "https://example.com/image.jpg",
  "is_published": true,
  "is_featured": false
}
```

### Simple JSON (Recommended):

```json
{
  "title_en": "New Blog Post",
  "title_ar": "مقال جديد",
  "slug": "new-blog-post",
  "excerpt_en": "Blog post excerpt",
  "excerpt_ar": "ملخص المقال",
  "is_published": true
}
```

---

## 🎯 Use This in Postman

### In Your POST Request Body:

1. **Click "Body" tab**
2. **Select "raw" → "JSON"**
3. **Paste this JSON**:

```json
{
  "title_en": "New Blog Post",
  "title_ar": "مقال جديد",
  "slug": "new-blog-post",
  "excerpt_en": "This is a blog post excerpt",
  "excerpt_ar": "هذا ملخص المقال",
  "is_published": true
}
```

4. **Click "Send"**

**This should work!** ✅

---

## 📋 Examples Based on Your Data

### Example 1: Simple Blog Post

```json
{
  "title_en": "Designing with Emotion",
  "title_ar": "التصميم بالعاطفة",
  "slug": "designing-with-emotion",
  "excerpt_en": "Discover how color psychology influences user behavior",
  "excerpt_ar": "اكتشف كيف تؤثر سيكولوجيا الألوان على سلوك المستخدم",
  "is_published": true
}
```

### Example 2: With Content

```json
{
  "title_en": "From Idea to Interface",
  "title_ar": "من فكرة لواجهة",
  "slug": "from-idea-to-interface",
  "excerpt_en": "A step-by-step walkthrough of my design process",
  "excerpt_ar": "جولة خطوة بخطوة في عملية التصميم الخاصة بي",
  "content_en": "<p>Every app design starts with an idea...</p>",
  "content_ar": "<p>كل تصميم تطبيق يبدأ بفكرة...</p>",
  "is_published": true,
  "is_featured": true
}
```

### Example 3: With Featured Image

```json
{
  "title_en": "Case Study: Branding a Lifestyle App",
  "title_ar": "دراسة حالة: بناء هوية تطبيق لايف ستايل",
  "slug": "case-study-branding-lifestyle-app",
  "excerpt_en": "A behind-the-scenes look at crafting a vibrant brand",
  "excerpt_ar": "نظرة خلف الكواليس لصنع علامة تجارية نابضة بالحياة",
  "featured_image": "https://example.com/featured-image.jpg",
  "is_published": true,
  "is_featured": true
}
```

---

## ✅ Quick Reference

### Fields to Include:
- ✅ `title_en` (required)
- ✅ `title_ar` (required)
- ✅ `slug` (required)
- ✅ `excerpt_en` (optional)
- ✅ `excerpt_ar` (optional)
- ✅ `content_en` (optional)
- ✅ `content_ar` (optional)
- ✅ `featured_image` (optional)
- ✅ `is_published` (optional, default: false)
- ✅ `is_featured` (optional, default: false)

### Fields to NOT Include:
- ❌ `id` (auto-generated)
- ❌ `created_at` (auto-generated)
- ❌ `updated_at` (auto-generated)
- ❌ `display_order` (doesn't exist!)

---

## 🎯 Summary

**Your POST request should have**:

1. **Method**: `POST`
2. **URL**: `https://kkvepvlkgppzwapbbynh.supabase.co/rest/v1/Blogs`
3. **Headers**: 
   - `apikey`: `sb_publishable_TXDJdOMzyg5RYq3aEYf7JQ_HlukQAuB`
   - `Authorization`: `Bearer sb_publishable_TXDJdOMzyg5RYq3aEYf7JQ_HlukQAuB`
   - `Content-Type`: `application/json`
4. **Body** (raw JSON):
```json
{
  "title_en": "New Blog Post",
  "title_ar": "مقال جديد",
  "slug": "new-blog-post",
  "is_published": true
}
```

**This should work now!** 🚀

---

## 💡 Pro Tip

**Start with minimal JSON**:
```json
{
  "title_en": "Test",
  "title_ar": "اختبار",
  "slug": "test"
}
```

**If this works**, add more fields one by one!

---

## 🎉 After Fixing

Once you:
1. ✅ Remove `display_order` from JSON
2. ✅ Use only columns that exist (`title_en`, `title_ar`, `slug`, etc.)
3. ✅ Click "Send"

You should get **201 Created** with your new blog post! 🚀

