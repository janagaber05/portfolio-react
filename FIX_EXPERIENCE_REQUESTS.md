# 📝 Fix Experience Requests

Step-by-step guide to fix your `experience` (experince) requests.

---

## 🎯 What to Fix

You have 3 requests in `experince` folder:
- ✅ "GET All Experince" → Keep as **GET** (correct)
- ✅ "GET Experince by Type" → Keep as **GET** (correct)
- ❌ "GET Create Experince" → Should be **POST**

---

## ✅ Step 1: Fix "GET Create Experince" → Change to POST

### Setup:

1. **Click on "GET Create Experince"** (it's selected/highlighted)
2. **Change Method**: Select **POST** from dropdown
3. **Set URL**: 
   ```
   https://kkvepvlkgppzwapbbynh.supabase.co/rest/v1/experience
   ```
   **Note**: Table name is `experience` (not "experince")

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
     "type": "education",
     "start_year": "2025",
     "end_year": "2026",
     "institution_en": "Egypt University of Informatics",
     "institution_ar": "جامعة مصر للمعلوماتية",
     "program_en": "Digital Arts & Design – UX/UI",
     "program_ar": "الفنون الرقمية والتصميم – UX/UI",
     "display_order": 0
   }
   ```

6. **Rename**: Right-click → Edit → Change to "POST Create Experience"
7. **Save and test**

---

## ✅ Step 2: Check Your Experience Table Columns

Before using the JSON above, check what columns you actually have:

### Option 1: Use GET Request
1. **Use "GET All Experince" request**
2. **URL**: `https://kkvepvlkgppzwapbbynh.supabase.co/rest/v1/experience?limit=1`
3. **Headers**: `apikey`, `Authorization`
4. **Click "Send"**
5. **Look at the response** - the keys are your column names!

### Option 2: Check in Supabase
1. **Go to Supabase → Table Editor**
2. **Click on `experience` table**
3. **See what columns you have**

---

## ✅ Step 3: Common Experience Table Columns

Based on your previous setup, you might have:

| Column Name | Type | Include in POST? |
|------------|------|------------------|
| `id` | uuid/int | ❌ No (auto-generated) |
| `type` | text | ✅ Yes |
| `year_display` | text | ✅ Yes (if you have this) |
| `start_year` | text | ✅ Yes |
| `end_year` | text | ✅ Yes |
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

---

## ✅ Step 4: Try Minimal JSON First

Start with minimal JSON:

```json
{
  "type": "education",
  "institution_en": "University Name",
  "display_order": 0
}
```

**If this works**, add more fields one by one.

---

## ✅ Step 5: Complete JSON Examples

### Example 1: Education Entry

```json
{
  "type": "education",
  "start_year": "2025",
  "end_year": "2026",
  "institution_en": "Egypt University of Informatics",
  "institution_ar": "جامعة مصر للمعلوماتية",
  "program_en": "Digital Arts & Design – UX/UI",
  "program_ar": "الفنون الرقمية والتصميم – UX/UI",
  "display_order": 0
}
```

### Example 2: Work Experience

```json
{
  "type": "work",
  "start_year": "2024",
  "end_year": "2025",
  "institution_en": "Company Name",
  "institution_ar": "اسم الشركة",
  "program_en": "UI/UX Designer",
  "program_ar": "مصمم واجهات المستخدم",
  "display_order": 1
}
```

### Example 3: With Year Display (If You Have This Column)

```json
{
  "type": "education",
  "year_display": "2025-2026",
  "start_year": "2025",
  "end_year": "2026",
  "institution_en": "University Name",
  "institution_ar": "اسم الجامعة",
  "display_order": 0
}
```

---

## ✅ Step 6: Add RLS Policies for Experience Table

For POST to work, add INSERT policy:

1. **Go to Supabase Dashboard**
2. **Authentication → Policies**
3. **Select `experience` table**
4. **Click "Create policy"**
5. **Fill in**:
   - Name: `Enable insert for public`
   - Operation: `INSERT`
   - Applied to: `public`
   - Definition: `true`
6. **Save**

---

## ✅ Step 7: Verify GET Requests Work

### Test "GET All Experince":

1. **Click on "GET All Experince"**
2. **URL**: `https://kkvepvlkgppzwapbbynh.supabase.co/rest/v1/experience`
3. **Headers**: `apikey`, `Authorization` (both checked ✅)
4. **Click "Send"**

**If it works**: Great! SELECT policy exists.

**If it gives 403/401**: Add SELECT policy:
- Name: `Enable select for public`
- Operation: `SELECT`
- Applied to: `public`
- Definition: `true`

### Test "GET Experince by Type":

1. **Click on "GET Experince by Type"**
2. **URL**: `https://kkvepvlkgppzwapbbynh.supabase.co/rest/v1/experience?type=eq.education`
3. **Headers**: `apikey`, `Authorization` (both checked ✅)
4. **Click "Send"**

---

## 📋 Complete Setup Checklist

### Postman Requests:
- [ ] GET All Experince → Test (should work)
- [ ] GET Experince by Type → Test (should work)
- [ ] POST Create Experince → Fixed and tested
- [ ] Renamed to "POST Create Experience" (optional)

### Supabase Policies:
- [ ] SELECT policy for `experience` → For GET requests
- [ ] INSERT policy for `experience` → For POST requests

---

## 🎯 Quick Reference

### Experience Table - All Requests:

| Request | Method | URL | Headers | Body |
|---------|--------|-----|---------|------|
| GET All | GET | `/rest/v1/experience` | apikey, Authorization | None |
| GET by Type | GET | `/rest/v1/experience?type=eq.education` | apikey, Authorization | None |
| POST Create | POST | `/rest/v1/experience` | apikey, Authorization, Content-Type | JSON |

**Table name is `experience` (not "experince")!**

---

## 🎯 Summary

**What to do**:
1. Fix "GET Create Experince" → Change to POST
2. Set URL: `https://kkvepvlkgppzwapbbynh.supabase.co/rest/v1/experience`
3. Add headers (apikey, Authorization, Content-Type)
4. Add body with experience data
5. Add INSERT policy in Supabase
6. Test

**You've got this!** 🚀

---

## 💡 Pro Tip

**Check your table columns first**:
1. Use GET request to see existing data
2. See what fields are returned
3. Use only those fields in your POST request

This prevents "column not found" errors! ✅

---

## 🆘 Need Help?

If you get errors:
- **400 Bad Request**: Check JSON syntax and column names
- **401 Unauthorized**: Check headers are checked ✅
- **403/RLS Error**: Add INSERT policy
- **404 Not Found**: Check URL (should be `experience`, not `experince`)

**After checking your table columns, tell me what you see and I'll give you the exact JSON!** 🎯

