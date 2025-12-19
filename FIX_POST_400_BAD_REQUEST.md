# 🔧 Fix 400 Bad Request for POST Request

The error is likely because your **Body JSON is invalid or missing**.

---

## ✅ Step 1: Check Your Body Tab

1. **Click on "Body" tab** (next to "Headers" tab)
2. **Make sure**:
   - ✅ **"raw"** radio button is selected
   - ✅ **"JSON"** is selected from the dropdown (not "Text")
   - ✅ **Valid JSON** is in the text area

---

## ✅ Step 2: Fix the JSON Body

### The Problem:
Your body shows `1 {` which is **not valid JSON**.

### The Fix:

1. **Click in the Body text area** (where it says "1 {")
2. **Delete everything** in that area
3. **Paste this complete JSON**:

```json
{
  "title": "New Project",
  "title_ar": "مشروع جديد",
  "description": "This is a new project description",
  "category": ["App Design", "UX/UI"],
  "featured": false,
  "display_order": 1
}
```

**Important**: Make sure it's **complete JSON** with:
- Opening `{` and closing `}`
- All fields properly quoted
- Commas between fields (except last one)
- No extra characters

---

## ✅ Step 3: Add Content-Type Header

1. **Click on "Headers" tab**
2. **Check if you have `Content-Type` header**:
   - If **NOT there**: Add it!
   - Key: `Content-Type`
   - Value: `application/json`
   - ✅ Checkbox checked

### Your Headers Should Be:
| Key | Value | ✅ Checked |
|-----|-------|------------|
| `apikey` | `sb_publishable_TXDJdOMzyg5RYq3aEYf7JQ_HlukQAuB` | ✅ |
| `Authorization` | `Bearer sb_publishable_TXDJdOMzyg5RYq3aEYf7JQ_HlukQAuB` | ✅ |
| `Content-Type` | `application/json` | ✅ |
| `Prefer` | `return=representation` | ✅ (optional) |

---

## ✅ Step 4: Verify Complete Setup

### Method:
- Should be **POST** ✅

### URL:
- Should be: `https://kkvepvlkgppzwapbbynh.supabase.co/rest/v1/projects`
- No query parameters ✅

### Headers (4 total):
- `apikey` ✅
- `Authorization` ✅
- `Content-Type: application/json` ✅
- `Prefer: return=representation` ✅ (optional)

### Body:
- Tab: **"Body"** → **"raw"** → **"JSON"** ✅
- Complete valid JSON ✅

---

## 🎯 Complete Valid JSON Examples

### For `projects` Table:

**Full Example**:
```json
{
  "title": "EgyAir Mobile App",
  "title_ar": "تطبيق إيجي إير",
  "description": "A modern airline booking app",
  "category": ["App Design", "UX/UI"],
  "featured": true,
  "display_order": 1
}
```

**Minimal Example** (if some fields are optional):
```json
{
  "title": "New Project",
  "description": "Project description",
  "display_order": 1
}
```

---

## 🐛 Common 400 Errors and Fixes

### Error 1: Invalid JSON
**Problem**: JSON is malformed (like `1 {` or missing brackets)  
**Fix**: Use complete, valid JSON with proper syntax

### Error 2: Missing Content-Type
**Problem**: `Content-Type: application/json` header is missing  
**Fix**: Add the header in Headers tab

### Error 3: Wrong Body Type
**Problem**: Body is set to "Text" instead of "JSON"  
**Fix**: Select "raw" → "JSON" from dropdown

### Error 4: Required Field Missing
**Problem**: Missing a required field (like `title` or `display_order`)  
**Fix**: Add all required fields to JSON

### Error 5: Invalid Field Value
**Problem**: Field value doesn't match column type (e.g., string in number field)  
**Fix**: Check field types match your table schema

---

## ✅ Step-by-Step Fix Checklist

- [ ] Click "Body" tab
- [ ] Select "raw" radio button
- [ ] Select "JSON" from dropdown (not "Text")
- [ ] Delete any invalid content (like "1 {")
- [ ] Paste complete valid JSON
- [ ] Check "Headers" tab
- [ ] Verify `Content-Type: application/json` header exists and is checked ✅
- [ ] Verify `apikey` header is checked ✅
- [ ] Verify `Authorization` header is checked ✅
- [ ] Click "Save"
- [ ] Click "Send"

---

## 🧪 Test with Minimal JSON

If you're still getting 400, try this **minimal JSON** first:

```json
{
  "title": "Test Project",
  "display_order": 1
}
```

If this works, then add more fields one by one to find which field is causing the issue.

---

## 📋 Verify JSON is Valid

### Valid JSON Rules:
- ✅ Starts with `{` and ends with `}`
- ✅ All keys are in quotes: `"title"`
- ✅ All string values are in quotes: `"New Project"`
- ✅ Numbers don't have quotes: `1` (not `"1"`)
- ✅ Booleans don't have quotes: `true` (not `"true"`)
- ✅ Arrays use `[]`: `["App Design"]`
- ✅ Commas between fields (except last one)
- ✅ No trailing commas

### ❌ Invalid Examples:
```json
// Missing closing brace
{
  "title": "Test"

// Trailing comma
{
  "title": "Test",
}

// Unquoted key
{
  title: "Test"
}

// Number in quotes
{
  "display_order": "1"
}
```

---

## 🎉 After Fixing

Once you:
1. ✅ Set Body to "raw" → "JSON"
2. ✅ Add complete valid JSON
3. ✅ Add `Content-Type: application/json` header
4. ✅ Click "Send"

You should get **201 Created** or **200 OK** with the created project data! 🚀

---

## 💡 Pro Tip

**Copy this exact JSON** and paste it in your Body tab:

```json
{
  "title": "New Project",
  "title_ar": "مشروع جديد",
  "description": "This is a new project description",
  "category": ["App Design", "UX/UI"],
  "featured": false,
  "display_order": 1
}
```

Make sure:
- Body tab is selected
- "raw" is selected
- "JSON" is selected from dropdown
- Paste the JSON above
- Save and Send

That should work! ✅

