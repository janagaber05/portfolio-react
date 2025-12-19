# 📝 Fix Project Details Requests

Step-by-step guide to fix your `project-details` requests.

---

## 🎯 What to Fix

You have 4 requests in `project-details` folder:
- ✅ "GET All Project Details" → Keep as **GET** (correct)
- ✅ "GET Details by Poject ID" → Keep as **GET** (correct, though has typo "Poject")
- ❌ "GET Create Project Details" → Should be **POST**
- ❌ "GET Update Project Details" → Should be **PATCH**

---

## ✅ Step 1: Check Your Table Name

First, check what your table is actually called in Supabase:

1. **Go to Supabase → Table Editor**
2. **Look for your project details table**
3. **What is the exact table name?**
   - Is it `project_details`?
   - Or `project-details`?
   - Or something else?

**Note**: Supabase table names usually use underscores, not hyphens!

---

## ✅ Step 2: Fix "GET Create Project Details" → Change to POST

### Setup:

1. **Click on "GET Create Project Details"**
2. **Change Method**: Select **POST** from dropdown
3. **Set URL**: 
   ```
   https://kkvepvlkgppzwapbbynh.supabase.co/rest/v1/project_details
   ```
   **Note**: Use `project_details` (with underscore) or check your actual table name

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
     "project_id": 1,
     "hero_text_en": "Project Hero Text",
     "hero_text_ar": "نص البطل للمشروع"
   }
   ```

6. **Rename**: Right-click → Edit → Change to "POST Create Project Details"
7. **Save and test**

---

## ✅ Step 3: Check Your Project Details Table Columns

Before using the JSON above, check what columns you actually have:

### Option 1: Use GET Request
1. **Use "GET All Project Details" request**
2. **URL**: `https://kkvepvlkgppzwapbbynh.supabase.co/rest/v1/project_details?limit=1`
3. **Headers**: `apikey`, `Authorization`
4. **Click "Send"**
5. **Look at the response** - the keys are your column names!

### Option 2: Check in Supabase
1. **Go to Supabase → Table Editor**
2. **Click on `project_details` table** (or whatever it's called)
3. **See what columns you have**

---

## ✅ Step 4: Common Project Details Table Columns

Based on typical project details tables:

| Column Name | Type | Include in POST? |
|------------|------|------------------|
| `id` | uuid/int | ❌ No (auto-generated) |
| `project_id` | int8/uuid | ✅ Yes |
| `hero_text_en` | text | ✅ Yes (optional) |
| `hero_text_ar` | text | ✅ Yes (optional) |
| `description_en` | text | ✅ Yes (optional) |
| `description_ar` | text | ✅ Yes (optional) |
| `image_url` | text | ✅ Yes (optional) |
| `created_at` | timestamptz | ❌ No (auto-generated) |
| `updated_at` | timestamptz | ❌ No (auto-generated) |

**Note**: Your table might have different columns!

---

## ✅ Step 5: Try Minimal JSON First

Start with minimal JSON:

```json
{
  "project_id": 1
}
```

**If this works**, add more fields one by one.

---

## ✅ Step 6: Complete JSON Examples

### Example 1: Minimal Project Details

```json
{
  "project_id": 1,
  "hero_text_en": "Project Hero Text",
  "hero_text_ar": "نص البطل للمشروع"
}
```

### Example 2: With Description

```json
{
  "project_id": 1,
  "hero_text_en": "Project Hero Text",
  "hero_text_ar": "نص البطل للمشروع",
  "description_en": "Project description in English",
  "description_ar": "وصف المشروع بالعربية"
}
```

### Example 3: With Image

```json
{
  "project_id": 1,
  "hero_text_en": "Project Hero Text",
  "hero_text_ar": "نص البطل للمشروع",
  "description_en": "Project description",
  "description_ar": "وصف المشروع",
  "image_url": "https://example.com/project-image.jpg"
}
```

---

## ✅ Step 7: Fix "GET Update Project Details" → Change to PATCH

### Setup:

1. **Click on "GET Update Project Details"**
2. **Change Method**: Select **PATCH** from dropdown
3. **Set URL**: 
   ```
   https://kkvepvlkgppzwapbbynh.supabase.co/rest/v1/project_details?id=eq.1
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
     "hero_text_en": "Updated Hero Text"
   }
   ```

6. **Rename**: Right-click → Edit → Change to "PATCH Update Project Details"
7. **Save and test**

---

## ✅ Step 8: Add RLS Policies for Project Details Table

For POST and PATCH to work, add policies:

### Add INSERT Policy:

1. **Go to Supabase Dashboard**
2. **Authentication → Policies**
3. **Select `project_details` table** (or your actual table name)
4. **Click "Create policy"**
5. **Fill in**:
   - Name: `Enable insert for public`
   - Operation: `INSERT`
   - Applied to: `public`
   - Definition: `true`
6. **Save**

### Add UPDATE Policy:

1. **Still in Policies → `project_details`**
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

## ✅ Step 9: Verify GET Requests Work

### Test "GET All Project Details":

1. **Click on "GET All Project Details"**
2. **URL**: `https://kkvepvlkgppzwapbbynh.supabase.co/rest/v1/project_details`
3. **Headers**: `apikey`, `Authorization` (both checked ✅)
4. **Click "Send"**

**If it works**: Great! SELECT policy exists.

**If it gives 403/401**: Add SELECT policy (as above).

### Test "GET Details by Poject ID":

1. **Click on "GET Details by Poject ID"**
2. **URL**: `https://kkvepvlkgppzwapbbynh.supabase.co/rest/v1/project_details?project_id=eq.1`
3. **Headers**: `apikey`, `Authorization` (both checked ✅)
4. **Click "Send"**

---

## 📋 Complete Setup Checklist

### Postman Requests:
- [ ] GET All Project Details → Test (should work)
- [ ] GET Details by Poject ID → Test (should work)
- [ ] POST Create Project Details → Fixed and tested
- [ ] PATCH Update Project Details → Fixed and tested
- [ ] Renamed requests properly (optional)

### Supabase Policies:
- [ ] SELECT policy for `project_details` → For GET requests
- [ ] INSERT policy for `project_details` → For POST requests
- [ ] UPDATE policy for `project_details` → For PATCH requests

---

## 🎯 Quick Reference

### Project Details Table - All Requests:

| Request | Method | URL | Headers | Body |
|---------|--------|-----|---------|------|
| GET All | GET | `/rest/v1/project_details` | apikey, Authorization | None |
| GET by Project ID | GET | `/rest/v1/project_details?project_id=eq.1` | apikey, Authorization | None |
| POST Create | POST | `/rest/v1/project_details` | apikey, Authorization, Content-Type | JSON |
| PATCH Update | PATCH | `/rest/v1/project_details?id=eq.1` | apikey, Authorization, Content-Type | JSON |

**Table name is usually `project_details` (with underscore)!**

---

## 🎯 Summary

**What to do**:
1. Check your actual table name in Supabase
2. Fix "GET Create Project Details" → Change to POST
3. Set URL: `https://kkvepvlkgppzwapbbynh.supabase.co/rest/v1/project_details`
4. Add headers and body
5. Fix "GET Update Project Details" → Change to PATCH
6. Add INSERT and UPDATE policies in Supabase
7. Test everything

**You've got this!** 🚀

---

## 💡 Pro Tip

**Check your table structure first**:
1. Use GET request to see existing data
2. See what fields are returned
3. Use only those fields in your POST request

This prevents "column not found" errors! ✅

---

## 🆘 Need Help?

If you get errors:
- **400 Bad Request**: Check JSON syntax and column names
- **401 Unauthorized**: Check headers are checked ✅
- **403/RLS Error**: Add INSERT/UPDATE policies
- **404 Not Found**: Check table name (might be `project_details` not `project-details`)

**After checking your table columns, tell me what you see and I'll give you the exact JSON!** 🎯

