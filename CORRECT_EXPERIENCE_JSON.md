# ✅ Correct JSON for Your Experience Table

Based on your actual table columns, here's the exact JSON to use.

---

## 📋 Your Experience Table Columns

From your table, I can see you have:

### Main Columns:
- `id` (int8) - ❌ **Don't include** (auto-generated)
- `created_at` (timestamptz) - ❌ **Don't include** (auto-generated)
- `type` (text) - ✅ **Include**
- `year_start` (text) - ✅ **Include** (not `start_year`!)
- `year_end` (text) - ✅ **Include** (not `end_year`!)
- `year_display` (text) - ✅ **Include** (optional)
- `instution_en` (text) - ✅ **Include** (note: typo in column name - "instution" not "institution")
- `instution_ar` (text) - ✅ **Include** (note: typo in column name)
- `program_en` (text) - ✅ **Include** (optional)
- `program_ar` (text) - ✅ **Include** (optional)
- `description_en` (text) - ✅ **Include** (optional)
- `description_ar` (text) - ✅ **Include** (optional)
- `display_order` (text) - ✅ **Include** (or might be `dis`)

**Important Notes**:
- Use `year_start` (not `start_year`)
- Use `year_end` (not `end_year`)
- Use `instution_en` (not `institution_en`) - note the typo!
- Use `instution_ar` (not `institution_ar`) - note the typo!

---

## ✅ Correct JSON for POST Request

### Minimal JSON (Required Fields):

```json
{
  "type": "education",
  "year_start": "2025",
  "year_end": "2026",
  "instution_en": "Egypt University of Informatics",
  "instution_ar": "جامعة مصر للمعلوماتية"
}
```

### Complete JSON (With All Fields):

```json
{
  "type": "education",
  "year_start": "2025",
  "year_end": "2026",
  "year_display": "2025-2026",
  "instution_en": "Egypt University of Informatics",
  "instution_ar": "جامعة مصر للمعلوماتية",
  "program_en": "Digital Arts & Design – UX/UI",
  "program_ar": "الفنون الرقمية والتصميم – UX/UI",
  "description_en": "Description in English",
  "description_ar": "الوصف بالعربية",
  "display_order": "0"
}
```

### Simple JSON (Recommended):

```json
{
  "type": "education",
  "year_start": "2022",
  "year_end": "2026",
  "year_display": "2022-2026",
  "instution_en": "Egypt University of Informatics",
  "instution_ar": "جامعة مصر للمعلوماتية",
  "program_en": "Digital Arts & Design – UX/UI",
  "program_ar": "الفنون الرقمية والتصميم – UX/UI",
  "display_order": "0"
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
  "type": "education",
  "year_start": "2025",
  "year_end": "2026",
  "year_display": "2025-2026",
  "instution_en": "Egypt University of Informatics",
  "instution_ar": "جامعة مصر للمعلوماتية",
  "program_en": "Digital Arts & Design – UX/UI",
  "program_ar": "الفنون الرقمية والتصميم – UX/UI",
  "display_order": "0"
}
```

4. **Click "Send"**

**This should work!** ✅

---

## 📋 Examples Based on Your Data

### Example 1: Education Entry (Like Your Data)

```json
{
  "type": "education",
  "year_start": "2022",
  "year_end": "2026",
  "year_display": "2022-2026",
  "instution_en": "Egypt University of Informatics",
  "instution_ar": "جامعة مصر للمعلوماتية",
  "program_en": "Digital Arts & Design – UX/UI",
  "program_ar": "الفنون الرقمية والتصميم – UX/UI",
  "display_order": "0"
}
```

### Example 2: Another Education Entry

```json
{
  "type": "education",
  "year_start": "2024",
  "year_end": "2024",
  "year_display": "2024",
  "instution_en": "CLS Center",
  "instution_ar": "مركز CLS",
  "program_en": "Front-end Code",
  "program_ar": "برمجة الواجهة الأمامية",
  "display_order": "1"
}
```

### Example 3: Minimal Entry

```json
{
  "type": "education",
  "year_start": "2025",
  "year_end": "2026",
  "instution_en": "University Name",
  "instution_ar": "اسم الجامعة",
  "display_order": "0"
}
```

---

## ⚠️ Important: Column Name Typos

**Your table has typos in column names**:
- ✅ Use: `instution_en` (not `institution_en`)
- ✅ Use: `instution_ar` (not `institution_ar`)

**Use the exact column names as they appear in your table!**

---

## ✅ Quick Reference

### Fields to Include:
- ✅ `type` (required)
- ✅ `year_start` (required) - not `start_year`!
- ✅ `year_end` (required) - not `end_year`!
- ✅ `year_display` (optional)
- ✅ `instution_en` (required) - note the typo!
- ✅ `instution_ar` (required) - note the typo!
- ✅ `program_en` (optional)
- ✅ `program_ar` (optional)
- ✅ `description_en` (optional)
- ✅ `description_ar` (optional)
- ✅ `display_order` (optional) - might be string "0" not number 0

### Fields to NOT Include:
- ❌ `id` (auto-generated)
- ❌ `created_at` (auto-generated)
- ❌ `start_year` (doesn't exist - use `year_start`)
- ❌ `end_year` (doesn't exist - use `year_end`)
- ❌ `institution_en` (typo - use `instution_en`)
- ❌ `institution_ar` (typo - use `instution_ar`)

---

## 🎯 Summary

**Your POST request should have**:

1. **Method**: `POST`
2. **URL**: `https://kkvepvlkgppzwapbbynh.supabase.co/rest/v1/experience`
3. **Headers**: 
   - `apikey`: `sb_publishable_TXDJdOMzyg5RYq3aEYf7JQ_HlukQAuB`
   - `Authorization`: `Bearer sb_publishable_TXDJdOMzyg5RYq3aEYf7JQ_HlukQAuB`
   - `Content-Type`: `application/json`
4. **Body** (raw JSON):
```json
{
  "type": "education",
  "year_start": "2025",
  "year_end": "2026",
  "year_display": "2025-2026",
  "instution_en": "Egypt University of Informatics",
  "instution_ar": "جامعة مصر للمعلوماتية",
  "program_en": "Digital Arts & Design – UX/UI",
  "program_ar": "الفنون الرقمية والتصميم – UX/UI",
  "display_order": "0"
}
```

**This should work now!** 🚀

---

## 💡 Key Differences

**Wrong** (what you might have tried):
```json
{
  "start_year": "2025",  ❌ Wrong column name
  "end_year": "2026",    ❌ Wrong column name
  "institution_en": "...", ❌ Wrong column name (typo)
  "institution_ar": "..."  ❌ Wrong column name (typo)
}
```

**Correct** (what you should use):
```json
{
  "year_start": "2025",   ✅ Correct
  "year_end": "2026",     ✅ Correct
  "instution_en": "...",  ✅ Correct (note the typo in table)
  "instution_ar": "..."   ✅ Correct (note the typo in table)
}
```

---

## 🎉 After Fixing

Once you:
1. ✅ Use `year_start` (not `start_year`)
2. ✅ Use `year_end` (not `end_year`)
3. ✅ Use `instution_en` (not `institution_en`)
4. ✅ Use `instution_ar` (not `institution_ar`)
5. ✅ Click "Send"

You should get **201 Created** with your new experience entry! 🚀

