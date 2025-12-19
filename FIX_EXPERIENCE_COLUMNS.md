# 🔧 Fix: "end_year" Column Not Found in Experience Table

The `experience` table doesn't have an `end_year` column. Let's check what columns you actually have and fix the JSON.

---

## ✅ Step 1: Check Your Experience Table Columns

### Option 1: Use GET Request

1. **Use "GET All Experince" request**
2. **URL**: `https://kkvepvlkgppzwapbbynh.supabase.co/rest/v1/experience?limit=1`
3. **Headers**: `apikey`, `Authorization`
4. **Click "Send"**
5. **Look at the response** - the keys are your column names!

**Example response**:
```json
[
  {
    "id": 1,
    "type": "education",
    "start_year": "2025",
    "institution_en": "University Name",
    "display_order": 0
  }
]
```

**Column names from this**: `id`, `type`, `start_year`, `institution_en`, `display_order`

### Option 2: Check in Supabase

1. **Go to Supabase → Table Editor**
2. **Click on `experience` table**
3. **See what columns you have**

---

## ✅ Step 2: Remove Invalid Columns from JSON

**Remove from your JSON**:
- ❌ `end_year` (you don't have this column)
- ❌ Any other columns that don't exist

**Use only columns that exist** in your `experience` table.

---

## ✅ Step 3: Try Minimal JSON First

Start with the most basic JSON:

```json
{
  "type": "education",
  "institution_en": "University Name",
  "display_order": 0
}
```

**If this works**, add more fields one by one.

---

## 🎯 Common Experience Table Columns

Based on your previous setup, you might have:

| Column Name | Type | Include in POST? |
|------------|------|------------------|
| `id` | uuid/int | ❌ No (auto-generated) |
| `type` | text | ✅ Yes |
| `start_year` | text | ✅ Yes |
| `year_display` | text | ✅ Yes (if you have this) |
| `display` | bool | ✅ Yes (if you have this) |
| `institution_en` | text | ✅ Yes |
| `institution_ar` | text | ✅ Yes |
| `program_en` | text | ✅ Yes |
| `program_ar` | text | ✅ Yes |
| `description_en` | text | ✅ Yes (optional) |
| `description_ar` | text | ✅ Yes (optional) |
| `display_order` | int | ✅ Yes |
| `created_at` | timestamptz | ❌ No (auto-generated) |
| `updated_at` | timestamptz | ❌ No (auto-generated) |

**Note**: You might **not have** `end_year`!

---

## ✅ Step 4: Correct JSON Examples (Without end_year)

### Minimal JSON (Most Likely to Work):

```json
{
  "type": "education",
  "start_year": "2025",
  "institution_en": "Egypt University of Informatics",
  "institution_ar": "جامعة مصر للمعلوماتية",
  "display_order": 0
}
```

### With Program:

```json
{
  "type": "education",
  "start_year": "2025",
  "institution_en": "Egypt University of Informatics",
  "institution_ar": "جامعة مصر للمعلوماتية",
  "program_en": "Digital Arts & Design – UX/UI",
  "program_ar": "الفنون الرقمية والتصميم – UX/UI",
  "display_order": 0
}
```

### With Year Display (If You Have This Column):

```json
{
  "type": "education",
  "year_display": "2025-2026",
  "start_year": "2025",
  "institution_en": "Egypt University of Informatics",
  "institution_ar": "جامعة مصر للمعلوماتية",
  "program_en": "Digital Arts & Design – UX/UI",
  "program_ar": "الفنون الرقمية والتصميم – UX/UI",
  "display_order": 0
}
```

### With Description (If You Have These Columns):

```json
{
  "type": "education",
  "start_year": "2025",
  "institution_en": "Egypt University of Informatics",
  "institution_ar": "جامعة مصر للمعلوماتية",
  "program_en": "Digital Arts & Design – UX/UI",
  "program_ar": "الفنون الرقمية والتصميم – UX/UI",
  "description_en": "Description in English",
  "description_ar": "الوصف بالعربية",
  "display_order": 0
}
```

---

## 🎯 Quick Fix Steps

1. **Check your table columns** (use GET request or Supabase Table Editor)
2. **Remove `end_year`** from your JSON ❌
3. **Use only columns that exist**
4. **Try minimal JSON first**:
   ```json
   {
     "type": "education",
     "start_year": "2025",
     "institution_en": "University Name",
     "display_order": 0
   }
   ```
5. **If it works**, add more fields one by one

---

## 🆘 Tell Me Your Columns

**After checking your table, tell me**:
1. What columns do you see in the `experience` table?
2. Or what does the GET request return?

Then I'll give you the **exact JSON** that matches your table! 🎯

---

## 💡 Pro Tip

**Always check table structure first!**

1. Use GET request to see existing data
2. See what fields are returned
3. Use only those fields in your POST request

This prevents "column not found" errors! ✅

---

## ✅ Quick Test

**Try this minimal JSON** (without `end_year`):

```json
{
  "type": "education",
  "start_year": "2025",
  "institution_en": "Test University",
  "display_order": 0
}
```

**Remove `end_year` and any other fields that don't exist!**

---

## 🎉 After Fixing

Once you:
1. ✅ Remove `end_year` from JSON
2. ✅ Use only columns that exist
3. ✅ Click "Send"

You should get **201 Created** with your new experience entry! 🚀

