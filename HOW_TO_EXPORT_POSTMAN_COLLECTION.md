# How to Export Postman Collection
## Step-by-Step Guide to Export Your Collection

---

## 🎯 Quick Steps

1. **Right-click on your collection** (in left sidebar)
2. **Click "Export"**
3. **Select "Collection v2.1"**
4. **Click "Export"**
5. **Save the file**

---

## 📋 Detailed Step-by-Step

### Step 1: Find Your Collection

**In Postman:**
- Look at the **left sidebar**
- Find your collection (e.g., "Supabase API" or "Portfolio Backend")
- It should be under **"Collections"** section

**Visual:**
```
┌─────────────────────────────┐
│ Collections                 │
│  ▼ Supabase API             │ ← Your collection
│    ├─ projects              │
│    ├─ blog_posts            │
│    └─ contact_submissions   │
└─────────────────────────────┘
```

---

### Step 2: Right-Click on Collection

**Action:**
- **Right-click** (or Ctrl+Click on Mac) on your collection name
- A menu will appear

**Visual:**
```
┌─────────────────────────────┐
│ Collections                 │
│  ▼ Supabase API  ← Right-click here
│    ├─ projects              │
│    ├─ blog_posts            │
│    └─ contact_submissions   │
└─────────────────────────────┘

Menu appears:
┌─────────────────────────────┐
│ Add Request                 │
│ Add Folder                  │
│ Duplicate                   │
│ Export...                   │ ← Click this!
│ Delete                      │
└─────────────────────────────┘
```

---

### Step 3: Click "Export"

**Action:**
- Click **"Export"** from the menu
- A dialog box will open

---

### Step 4: Select Collection v2.1

**In the dialog box:**
- You'll see export options
- Select **"Collection v2.1"** (or "Collection v2.1 (recommended)")
- Click **"Export"** button

**Visual:**
```
┌─────────────────────────────────────┐
│ Export Collection                    │
├─────────────────────────────────────┤
│                                     │
│  Collection v2.1 (recommended)  ●  │ ← Select this
│  Collection v2.0                    │
│  Collection v1.0                    │
│                                     │
│  [Cancel]  [Export]                 │ ← Click Export
└─────────────────────────────────────┘
```

---

### Step 5: Save the File

**Action:**
- A file save dialog will open
- Choose where to save (e.g., Desktop, Documents)
- File name will be something like: `Supabase API.postman_collection.json`
- Click **"Save"**

**Visual:**
```
┌─────────────────────────────────────┐
│ Save Collection                      │
├─────────────────────────────────────┤
│ Desktop                              │
│  📁 Documents                        │
│  📁 Downloads                        │
│                                     │
│ File name:                           │
│ [Supabase API.postman_collection.json]│
│                                     │
│  [Cancel]  [Save]                   │ ← Click Save
└─────────────────────────────────────┘
```

---

## ✅ Alternative Method: From Collection Menu

### If Right-Click Doesn't Work:

1. **Click on your collection name** (to select it)
2. **Look at the top menu bar**
3. **Click the three dots** (⋯) next to collection name
4. **Click "Export"**
5. **Select "Collection v2.1"**
6. **Click "Export"**
7. **Save the file**

**Visual:**
```
┌─────────────────────────────────────────────┐
│ Postman                                      │
├─────────────────────────────────────────────┤
│  Supabase API  ⋯  ← Click three dots        │
│                                     │
│  Menu:                                    │
│  ┌─────────────────────────────────────┐  │
│  │ Edit                                 │  │
│  │ Duplicate                            │  │
│  │ Export...                            │  │ ← Click this
│  │ Delete                               │  │
│  └─────────────────────────────────────┘  │
└─────────────────────────────────────────────┘
```

---

## 📁 What You'll Get

### Exported File:

**File name:** `Your-Collection-Name.postman_collection.json`

**File location:** Wherever you saved it (Desktop, Documents, etc.)

**File format:** JSON file containing all your requests, headers, URLs, etc.

---

## 🎯 Complete Visual Walkthrough

### Full Process:

```
1. Left Sidebar
   ┌─────────────────────────────┐
   │ Collections                 │
   │  ▼ Supabase API             │ ← Step 1: Find collection
   └─────────────────────────────┘

2. Right-Click Menu
   ┌─────────────────────────────┐
   │ Add Request                 │
   │ Export...                   │ ← Step 2: Click Export
   └─────────────────────────────┘

3. Export Dialog
   ┌─────────────────────────────┐
   │ Collection v2.1  ●          │ ← Step 3: Select v2.1
   │ [Export]                     │ ← Step 4: Click Export
   └─────────────────────────────┘

4. Save Dialog
   ┌─────────────────────────────┐
   │ [Supabase API.postman_collection.json]│
   │ [Save]                       │ ← Step 5: Save file
   └─────────────────────────────┘
```

---

## ✅ Verification

### After Exporting:

1. **Check the file exists** where you saved it
2. **File should be JSON format** (`.postman_collection.json`)
3. **File should contain:**
   - All your requests
   - Headers
   - URLs
   - Collection structure

### To Verify File Contents:

- **Open the file** in a text editor
- **Should see JSON** with collection data
- **Should have your table names** (projects, blog_posts, etc.)

---

## 💡 Tips

### Before Exporting:

- **Make sure all requests are saved** in the collection
- **Verify URLs are correct** (with `/rest/v1/`)
- **Check headers are added** (apikey, Authorization, etc.)
- **Test at least one request** to ensure it works

### After Exporting:

- **Keep the file safe** (backup location)
- **File can be imported** later if needed
- **Can share with others** for collaboration
- **Can submit for assignment**

---

## 🚀 Quick Summary

**To export Postman collection:**

1. **Right-click** collection name (left sidebar)
2. **Click "Export"**
3. **Select "Collection v2.1"**
4. **Click "Export"** button
5. **Save file** to your desired location

**Done!** ✅

---

## 🔍 Troubleshooting

### Problem: Can't find "Export" option

**Solution:**
- Make sure you're right-clicking on the **collection name** (not a request)
- Try clicking the **three dots** (⋯) next to collection name
- Collection must be created first (not just requests)

### Problem: Export dialog doesn't show v2.1

**Solution:**
- Look for "Collection v2.1 (recommended)"
- Or select the newest version available
- v2.1 is the standard format

### Problem: File not saving

**Solution:**
- Check you have write permissions to the folder
- Try saving to Desktop or Documents folder
- Make sure you clicked "Save" button

---

## ✅ Final Checklist

**Before exporting:**
- [ ] Collection created with all requests
- [ ] All requests have correct URLs
- [ ] All requests have headers added
- [ ] At least one request tested successfully

**During export:**
- [ ] Right-clicked on collection name
- [ ] Selected "Collection v2.1"
- [ ] Saved file to known location

**After export:**
- [ ] File exists and is JSON format
- [ ] File contains collection data
- [ ] File saved for assignment submission

**You're ready to export!** 🎯

