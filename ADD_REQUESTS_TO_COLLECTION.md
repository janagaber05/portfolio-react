# How to Add Requests to Your Collection
## Step-by-Step Guide from Collection Overview

---

## 🎯 Current Screen: Collection Overview

**You're currently on:** "New Collection" overview page

**What you see:**
- Collection name: "New Collection"
- Tabs: Overview, Authorization, Scripts, Variables, Runs
- Statistics: 0 requests
- This is your collection, but you need to add requests to it

---

## 📍 Step 1: Add a Request to Your Collection

### Method 1: From Collection (Easiest)

1. **Look at the left sidebar**
2. **Click on "Collections"** (folder icon)
3. **You'll see your collection listed**
4. **Click on your collection name** ("New Collection")
5. **Click the "..." menu** (three dots) next to collection name
6. **Click "Add Request"**
   - OR
7. **Right-click on collection name** → **"Add Request"**

### Method 2: Create Request Then Save

1. **Click "New" button** (top left, next to tabs)
2. **Click "HTTP Request"**
3. **A new request window opens**
4. **Add your URL and headers** (see Step 2 below)
5. **Click "Save" button** (top right)
6. **Select your collection** from dropdown
7. **Name your request** (e.g., "GET All Projects")
8. **Click "Save"**

---

## 🎯 Step 2: Where to Add URL and Headers (In Request Window)

### After Creating a Request, You'll See:

```
┌─────────────────────────────────────────────────────────────┐
│  Postman - New Request                    [Save] [Send]     │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  Method: [GET ▼]                                            │
│                                                              │
│  URL: [https://YOUR_PROJECT_ID.supabase.co/rest/v1/projects]│
│       ↑                                                      │
│    ADD URL HERE (click in this box and paste)               │
│                                                              │
│  ┌────────────────────────────────────────────────────────┐ │
│  │ [Params] [Authorization] [Headers ▼] [Body] [Tests]   │ │
│  │                              ↑                         │ │
│  │                    CLICK THIS TAB                      │ │
│  └────────────────────────────────────────────────────────┘ │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

---

## 📝 Step 3: Add the URL

### Location: Top Text Box

**Steps:**
1. **Click in the URL field** (the big text box at the top)
2. **Select method** from dropdown: GET, POST, PATCH, or DELETE
3. **Paste your Supabase URL:**
   ```
   https://YOUR_PROJECT_ID.supabase.co/rest/v1/projects?select=*&is_published=eq.true&order=display_order.asc
   ```

**Example:**
- Method: `GET`
- URL: `https://abcdefghijklmnop.supabase.co/rest/v1/projects?select=*&is_published=eq.true`

---

## 📋 Step 4: Add Headers

### Location: Headers Tab

**Steps:**
1. **Click "Headers" tab** (below the URL field)
2. **You'll see a table with KEY and VALUE columns**
3. **Add each header one by one:**

   **Header 1: apikey**
   - Click in KEY column → Type: `apikey`
   - Click in VALUE column → Paste: `YOUR_SUPABASE_ANON_KEY`
   - ✅ **Check the checkbox** on the left to enable it

   **Header 2: Authorization**
   - Click "Add Header" or click in next KEY field
   - KEY: `Authorization`
   - VALUE: `Bearer YOUR_SUPABASE_ANON_KEY` (paste your key after "Bearer ")
   - ✅ Check the checkbox

   **Header 3: Content-Type**
   - KEY: `Content-Type`
   - VALUE: `application/json`
   - ✅ Check the checkbox

   **Header 4: Prefer**
   - KEY: `Prefer`
   - VALUE: `return=representation`
   - ✅ Check the checkbox

---

## 🎨 Visual: Complete Request Setup

### What Your Request Should Look Like:

```
┌─────────────────────────────────────────────────────────────┐
│  Postman - New Request                    [Save] [Send]     │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  [GET ▼] [https://abcdefghijklmnop.supabase.co/rest/v1/     │
│          projects?select=*&is_published=eq.true]             │
│                                                              │
│  [Params] [Authorization] [Headers ▼] [Body] [Tests]        │
│                                                              │
│  Headers:                                                    │
│  ┌──────────────┬────────────────────────────────────────┐ │
│  │ ☑ KEY        │ VALUE                                   │ │
│  ├──────────────┼────────────────────────────────────────┤ │
│  │ ☑ apikey     │ eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...│ │
│  │ ☑ Authorization│ Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6...│ │
│  │ ☑ Content-Type│ application/json                       │ │
│  │ ☑ Prefer     │ return=representation                  │ │
│  └──────────────┴────────────────────────────────────────┘ │
│                                                              │
│  [Send] ← Click to test                                     │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

---

## 💾 Step 5: Save Request to Collection

### After Adding URL and Headers:

1. **Click "Save" button** (top right, blue button)
2. **A popup appears:**
   ```
   ┌─────────────────────────────────────┐
   │ Save Request                        │
   ├─────────────────────────────────────┤
   │ Request name: [GET All Projects]   │
   │                                     │
   │ Collection: [New Collection ▼]     │
   │                                     │
   │ [Cancel] [Save]                     │
   └─────────────────────────────────────┘
   ```
3. **Enter request name:** e.g., "GET All Projects"
4. **Select your collection:** "New Collection"
5. **Click "Save"**

**Now your request is saved in your collection!**

---

## 📦 Step 6: Organize Requests in Collection

### Create Folders (Optional but Recommended)

1. **Go back to Collections** (left sidebar)
2. **Click on your collection** ("New Collection")
3. **Right-click on collection name** → **"Add Folder"**
4. **Name the folder:** e.g., "Projects", "Blog Posts", "Contact"
5. **Add requests to folders:**
   - Drag requests into folders
   - OR right-click folder → "Add Request"

---

## ✅ Quick Checklist

**From Collection Overview:**
- [ ] Click "New" → "HTTP Request" (or right-click collection → "Add Request")
- [ ] Request window opens

**In Request Window:**
- [ ] Select method (GET, POST, etc.)
- [ ] Paste URL in URL field (top text box)
- [ ] Click "Headers" tab
- [ ] Add `apikey` header with your anon key
- [ ] Add `Authorization` header: `Bearer YOUR_ANON_KEY`
- [ ] Add `Content-Type` header: `application/json`
- [ ] Add `Prefer` header: `return=representation`
- [ ] Check all checkboxes
- [ ] Click "Save" → Select collection → Name request
- [ ] Click "Send" to test

---

## 🎯 Summary

**Current location:** Collection Overview (not where you add URLs/headers)

**What to do:**
1. **Create a request:**
   - Click "New" → "HTTP Request"
   - OR right-click collection → "Add Request"

2. **Add URL:**
   - Top text box (next to method dropdown)

3. **Add Headers:**
   - Click "Headers" tab
   - Add 4 headers in the table

4. **Save:**
   - Click "Save" → Select collection → Name it

**That's it!** Your request is now in your collection! 🚀

