# 🔧 Fix "GET Create project" → Change to POST

Step-by-step guide to fix your "GET Create project" request.

---

## 🎯 Step 1: Change the Method

1. **Click on "GET Create project"** (it's selected/highlighted)
2. **Look at the top left** - you'll see a dropdown that says "GET"
3. **Click the dropdown**
4. **Select "POST"** from the list
5. The request name might still say "GET Create project" - that's okay, we'll rename it later

---

## 🎯 Step 2: Set the URL

1. **Look at the top center** - you'll see the URL field
2. **Click in the URL field**
3. **Type or paste**:
   ```
   https://kkvepvlkgppzwapbbynh.supabase.co/rest/v1/projects
   ```
4. **Important**: No query parameters! Just the table name.

---

## 🎯 Step 3: Add Headers

1. **Click on "Headers" tab** (below the URL)
2. **Add these 4 headers** (make sure checkboxes are checked ✅):

### Header 1: `apikey`
- **Key**: `apikey`
- **Value**: `sb_publishable_TXDJdOMzyg5RYq3aEYf7JQ_HlukQAuB`
- ✅ **Checkbox checked**

### Header 2: `Authorization`
- **Key**: `Authorization`
- **Value**: `Bearer sb_publishable_TXDJdOMzyg5RYq3aEYf7JQ_HlukQAuB`
- ✅ **Checkbox checked**

### Header 3: `Content-Type`
- **Key**: `Content-Type`
- **Value**: `application/json`
- ✅ **Checkbox checked**

### Header 4: `Prefer` (Optional)
- **Key**: `Prefer`
- **Value**: `return=representation`
- ✅ **Checkbox checked**

---

## 🎯 Step 4: Set Up Body

1. **Click on "Body" tab** (next to "Headers" tab)
2. **Click "raw"** radio button
3. **Click the dropdown** next to "raw" (it says "Text")
4. **Select "JSON"** from the dropdown
5. **Click in the text area** below
6. **Paste this JSON**:

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

---

## 🎯 Step 5: Rename the Request (Optional)

1. **Right-click** on "GET Create project" in the left sidebar
2. **Select "Edit"** or "Rename"
3. **Change name to**: `POST Create project`
4. **Press Enter** or click outside

---

## 🎯 Step 6: Save and Test

1. **Click "Save"** button (top right)
2. **Click "Send"** button (top right, blue button)
3. **Expected Result**: 
   - ✅ **201 Created** or **200 OK**
   - Response body shows the created project data

---

## ✅ Complete Setup Summary

### What You Should Have:

**Method**: `POST`  
**URL**: `https://kkvepvlkgppzwapbbynh.supabase.co/rest/v1/projects`  
**Headers** (4 total):
- `apikey`: `sb_publishable_TXDJdOMzyg5RYq3aEYf7JQ_HlukQAuB` ✅
- `Authorization`: `Bearer sb_publishable_TXDJdOMzyg5RYq3aEYf7JQ_HlukQAuB` ✅
- `Content-Type`: `application/json` ✅
- `Prefer`: `return=representation` ✅

**Body** (raw JSON):
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

---

## 🐛 Troubleshooting

### If you get 400 Bad Request:
- Check that Body is set to "raw" → "JSON"
- Check that JSON is valid (no syntax errors)
- Make sure all required fields are included

### If you get 401 Unauthorized:
- Check that `apikey` and `Authorization` headers are checked ✅
- Verify the API key value is correct

### If you get 404 Not Found:
- Check the URL is correct: `https://kkvepvlkgppzwapbbynh.supabase.co/rest/v1/projects`
- Make sure it includes `/rest/v1/`

---

## 🎉 Done!

Once you've completed all steps, your "POST Create project" request is ready to use! 🚀

You can now create new projects by:
1. Changing the JSON body values
2. Clicking "Send"

---

## 📝 Next Steps

After fixing this one, you can fix:
- "GET Update project" → Change to PATCH
- "GET All projects" → Keep as GET (already correct)
- "GET Project by ID" → Keep as GET (already correct)
- "GET Project by Slug" → Keep as GET (already correct)

