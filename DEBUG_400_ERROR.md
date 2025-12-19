# 🔍 Debug 400 Bad Request - Step by Step

Let's find the exact problem and fix it.

---

## 🔍 Step 1: Check the Error Message

1. **After clicking "Send"**, look at the **Response** section (bottom panel)
2. **Click on "Body" tab** in the Response section
3. **Read the error message** - it will tell you what's wrong!

**Common error messages**:
- `"column does not exist"` → Wrong field name
- `"invalid input syntax"` → Wrong data type
- `"null value in column"` → Missing required field
- `"malformed json"` → Invalid JSON syntax

**Tell me what error message you see!**

---

## ✅ Step 2: Verify Your Setup

### Check Method:
- [ ] Method dropdown shows **POST** (not GET)

### Check URL:
- [ ] URL is exactly: `https://kkvepvlkgppzwapbbynh.supabase.co/rest/v1/projects`
- [ ] No query parameters (`?id=...`)

### Check Headers Tab:
- [ ] You have **4 headers**:
  - [ ] `apikey` = `sb_publishable_TXDJdOMzyg5RYq3aEYf7JQ_HlukQAuB` ✅ checked
  - [ ] `Authorization` = `Bearer sb_publishable_TXDJdOMzyg5RYq3aEYf7JQ_HlukQAuB` ✅ checked
  - [ ] `Content-Type` = `application/json` ✅ checked
  - [ ] `Prefer` = `return=representation` ✅ checked (optional)

### Check Body Tab:
- [ ] "Body" tab is selected
- [ ] "raw" radio button is selected
- [ ] Dropdown shows "JSON" (not "Text")
- [ ] JSON is complete and valid

---

## 🧪 Step 3: Try Minimal JSON First

Let's test with the **simplest possible JSON**:

1. **Click "Body" tab**
2. **Delete everything** in the body
3. **Paste ONLY this**:

```json
{
  "title": "Test"
}
```

4. **Click "Send"**

**If this works**: Your setup is correct, but one of the fields in your full JSON is wrong.

**If this still gives 400**: The problem is with your setup (headers, URL, or table structure).

---

## 🔧 Step 4: Check Your Table Structure

The error might be because your `projects` table has different column names.

### Common Column Names for Projects:
- `id` (auto-generated, don't include)
- `title` or `title_en`
- `title_ar`
- `description` or `description_en`
- `category` (might be `text[]` or `jsonb`)
- `featured` (boolean)
- `display_order` (integer)
- `created_at` (auto-generated)
- `updated_at` (auto-generated)

### Try This JSON (Most Common Fields):

```json
{
  "title": "Test Project",
  "description": "Test description"
}
```

---

## 🔧 Step 5: Fix Common Issues

### Issue 1: Invalid JSON Format

**❌ Wrong**:
```json
{
  "title": "Test",
  // Missing closing brace
```

**✅ Correct**:
```json
{
  "title": "Test"
}
```

### Issue 2: Wrong Data Types

**❌ Wrong** (if `display_order` is integer):
```json
{
  "display_order": "1"  // String instead of number
}
```

**✅ Correct**:
```json
{
  "display_order": 1  // Number without quotes
}
```

**❌ Wrong** (if `featured` is boolean):
```json
{
  "featured": "true"  // String instead of boolean
}
```

**✅ Correct**:
```json
{
  "featured": true  // Boolean without quotes
}
```

### Issue 3: Array Format

**❌ Wrong**:
```json
{
  "category": "App Design"  // String instead of array
}
```

**✅ Correct**:
```json
{
  "category": ["App Design"]  // Array with brackets
}
```

---

## 🎯 Step 6: Complete Test JSON

Try this **complete, tested JSON**:

```json
{
  "title": "Test Project",
  "title_ar": "مشروع تجريبي",
  "description": "This is a test project",
  "category": ["App Design"],
  "featured": false,
  "display_order": 1
}
```

**Copy this EXACTLY** - make sure:
- No extra spaces
- No trailing commas
- All quotes are straight quotes (not curly quotes)
- All brackets match

---

## 🔍 Step 7: Check Response Details

1. **After clicking "Send"**
2. **Look at Response section** (bottom)
3. **Click "Body" tab** in Response
4. **Read the full error message**

**Example error messages**:

```json
{
  "message": "column \"title\" does not exist",
  "hint": "Perhaps you meant \"title_en\""
}
```

This tells you the column name is wrong!

```json
{
  "message": "invalid input syntax for type integer",
  "hint": "Value must be a number"
}
```

This tells you a field has wrong data type!

---

## ✅ Step 8: Verify JSON is Valid

### Test Your JSON:
1. **Copy your JSON** from Body tab
2. **Go to**: https://jsonlint.com/
3. **Paste your JSON**
4. **Click "Validate JSON"**
5. **If it says "Valid JSON"**: JSON syntax is OK
6. **If it shows errors**: Fix the syntax errors

---

## 🎯 Quick Fix Checklist

Go through each step:

- [ ] Method is **POST** ✅
- [ ] URL is correct (no query params) ✅
- [ ] Headers tab has 4 headers, all checked ✅
- [ ] `Content-Type: application/json` header exists and is checked ✅
- [ ] Body tab: "raw" → "JSON" selected ✅
- [ ] JSON is complete (starts with `{` and ends with `}`) ✅
- [ ] No syntax errors in JSON ✅
- [ ] Field names match your table columns ✅
- [ ] Data types are correct (numbers without quotes, booleans without quotes) ✅

---

## 🆘 Still Not Working?

**Tell me**:
1. What **error message** do you see in the Response Body?
2. What **JSON** are you using in the Body?
3. What **headers** do you have (screenshot or list)?

With this information, I can give you the exact fix! 🎯

---

## 💡 Alternative: Test with Different Table

If `projects` table is giving issues, try testing with a simpler table first:

### Test with `skills` table:

**URL**: `https://kkvepvlkgppzwapbbynh.supabase.co/rest/v1/skills`

**Body**:
```json
{
  "name": "Test Skill",
  "display_order": 1
}
```

If this works, then the issue is specific to the `projects` table structure.

---

## 🎉 Most Likely Fix

**90% of 400 errors are caused by**:
1. Missing `Content-Type: application/json` header
2. Invalid JSON syntax
3. Wrong field names

**Check these first!** ✅

