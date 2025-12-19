# ✅ Correct JSON for Your Projects Table

Based on your Supabase columns, here's the exact JSON to use.

---

## 📋 Your Columns (from Supabase)

From your table, I can see you have:

### Main Columns:
- `id` (int8) - ❌ **Don't include** (auto-generated)
- `created_at` (timestamptz) - ❌ **Don't include** (auto-generated)
- `title_en` (text) - ✅ **Include**
- `title_ar` (text) - ✅ **Include**
- `category` (json) - ✅ **Include**

### Optional Columns (if you have them):
- `slug` (text) - ✅ Optional
- `is_published` (bool) - ✅ Optional
- `display_order` (int4) - ✅ Optional
- `date` (date) - ✅ Optional
- `cover_img` (text) - ✅ Optional
- `images` (jsonb) - ✅ Optional
- `description-en` (text) - ✅ Optional
- `description-ar` (text) - ✅ Optional

---

## 🎯 Correct JSON for POST Request

### Minimal JSON (Required Fields Only):

```json
{
  "title_en": "New Project",
  "title_ar": "مشروع جديد",
  "category": {
    "c1": "Web Design"
  }
}
```

### Complete JSON (With All Common Fields):

```json
{
  "title_en": "New Project",
  "title_ar": "مشروع جديد",
  "category": {
    "c1": "Web Design",
    "c2": "Coding"
  },
  "slug": "new-project",
  "is_published": true,
  "display_order": 1
}
```

### With Images and Cover:

```json
{
  "title_en": "New Project",
  "title_ar": "مشروع جديد",
  "category": {
    "c1": "Web Design"
  },
  "slug": "new-project",
  "cover_img": "https://example.com/image.jpg",
  "images": [
    {
      "alt": "Project image",
      "url": "https://example.com/image1.jpg"
    }
  ],
  "is_published": true,
  "display_order": 1
}
```

---

## 📝 Important Notes

### 1. Column Names:
- Use `title_en` (not `title`)
- Use `title_ar` (not `title_ar` - wait, that's correct)
- Use `category` as JSON object (not array)

### 2. Category Format:
Your `category` column is **JSON**, not an array!

**❌ Wrong** (array):
```json
{
  "category": ["Web Design", "Coding"]
}
```

**✅ Correct** (JSON object):
```json
{
  "category": {
    "c1": "Web Design",
    "c2": "Coding"
  }
}
```

### 3. Don't Include:
- ❌ `id` - auto-generated
- ❌ `created_at` - auto-generated
- ❌ `description` - you don't have this column (you have `description-en` and `description-ar` if they exist)

---

## 🎯 Use This JSON in Postman

### Step 1: Click "Body" tab
### Step 2: Select "raw" → "JSON"
### Step 3: Paste this JSON:

```json
{
  "title_en": "Test Project",
  "title_ar": "مشروع تجريبي",
  "category": {
    "c1": "Web Design"
  }
}
```

### Step 4: Click "Send"

**This should work!** ✅

---

## 📋 Examples Based on Your Data

### Example 1: Simple Project (Like "Egy Air")
```json
{
  "title_en": "Egy Air",
  "title_ar": "ايجي اير",
  "category": {
    "c1": "Graphic Design"
  }
}
```

### Example 2: Project with Multiple Categories (Like "Fit Up")
```json
{
  "title_en": "Fit Up",
  "title_ar": "فيت اب",
  "category": {
    "c1": "Graphic Design",
    "c2": "Web Design"
  }
}
```

### Example 3: Complete Project
```json
{
  "title_en": "New Project",
  "title_ar": "مشروع جديد",
  "category": {
    "c1": "Web Design",
    "c2": "Coding"
  },
  "slug": "new-project",
  "is_published": true,
  "display_order": 1
}
```

---

## ✅ Quick Test

**Try this minimal JSON first**:

```json
{
  "title_en": "Test",
  "title_ar": "اختبار",
  "category": {
    "c1": "Web Design"
  }
}
```

If this works, you can add more fields!

---

## 🎉 Summary

**Your POST request should have**:

1. **Method**: `POST`
2. **URL**: `https://kkvepvlkgppzwapbbynh.supabase.co/rest/v1/projects`
3. **Headers**: 
   - `apikey`: `sb_publishable_TXDJdOMzyg5RYq3aEYf7JQ_HlukQAuB`
   - `Authorization`: `Bearer sb_publishable_TXDJdOMzyg5RYq3aEYf7JQ_HlukQAuB`
   - `Content-Type`: `application/json`
4. **Body** (raw JSON):
```json
{
  "title_en": "New Project",
  "title_ar": "مشروع جديد",
  "category": {
    "c1": "Web Design"
  }
}
```

**This should work now!** 🚀

