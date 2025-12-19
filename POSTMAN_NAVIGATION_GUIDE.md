# Postman Navigation Guide - Where to Add URL and Headers
## Step-by-Step from Overview to Request

---

## 🎯 Current Screen: Overview Page

**You're currently on:** Postman Workspace Overview

**What you see:**
- Left sidebar: Collections, Environments, History, Flows
- Main area: Overview tab
- This is NOT where you add URLs/headers

---

## 📍 Step 1: Create a New Request

### Option A: From Collections (Recommended)

1. **Look at the left sidebar**
2. **Click on "Collections"** (folder icon)
3. **You'll see your collections list**
4. **Either:**
   - **Click on an existing collection** (or create a new one)
   - **Click "New" button** (top left) → **"HTTP Request"**

### Option B: Quick Create

1. **Click "New" button** (top left, next to hamburger menu)
2. **Click "HTTP Request"**
3. **A new request window opens**

---

## 🎯 Step 2: The Request Window (Where to Add Everything)

**After creating a request, you'll see:**

```
┌─────────────────────────────────────────────────────────────┐
│  Postman - New Request                                       │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  [GET ▼] [https://example.com/api/endpoint]  [Save] [Send] │
│   ↑        ↑                                                │
│ Method    URL Field (ADD URL HERE)                          │
│                                                              │
│  [Params] [Authorization] [Headers] [Body] [Tests] [Settings]│
│                              ↑                               │
│                    Click this tab to add headers             │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

---

## 📝 Step 3: Add the URL

### Location: Top Text Box

**Visual Guide:**
```
┌─────────────────────────────────────────────────────────────┐
│                                                              │
│  [GET ▼] [https://YOUR_PROJECT_ID.supabase.co/rest/v1/...] │
│         ↑                                                    │
│    Click here and paste your URL                            │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

**Steps:**
1. **Click in the big text box** (next to the method dropdown)
2. **Paste your Supabase URL:**
   ```
   https://YOUR_PROJECT_ID.supabase.co/rest/v1/projects?select=*&is_published=eq.true
   ```
3. **Select method** from dropdown (GET, POST, PATCH, DELETE)

---

## 📋 Step 4: Add Headers

### Location: Headers Tab

**Visual Guide:**
```
┌─────────────────────────────────────────────────────────────┐
│  [Params] [Authorization] [Headers ▼] [Body] [Tests]        │
│                              ↑                               │
│                    CLICK THIS TAB                            │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  Headers                                                     │
│  ┌──────────────┬────────────────────────────────────────┐ │
│  │ KEY          │ VALUE                                   │ │
│  ├──────────────┼────────────────────────────────────────┤ │
│  │              │                                         │ │ ← Click here
│  └──────────────┴────────────────────────────────────────┘ │
│                                                              │
│  [Bulk Edit]                                                 │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

**Steps:**
1. **Click "Headers" tab** (below the URL field)
2. **You'll see a table with KEY and VALUE columns**
3. **Click in the first KEY field** (or click "Add Header")
4. **Add each header:**

   **Header 1:**
   - Click in KEY column → Type: `apikey`
   - Click in VALUE column → Paste: `YOUR_SUPABASE_ANON_KEY`
   - ✅ Check the checkbox on the left to enable it

   **Header 2:**
   - Click "Add Header" or click in next KEY field
   - KEY: `Authorization`
   - VALUE: `Bearer YOUR_SUPABASE_ANON_KEY` (paste your key after "Bearer ")
   - ✅ Check the checkbox

   **Header 3:**
   - KEY: `Content-Type`
   - VALUE: `application/json`
   - ✅ Check the checkbox

   **Header 4:**
   - KEY: `Prefer`
   - VALUE: `return=representation`
   - ✅ Check the checkbox

---

## 🎨 Complete Visual Example

### After Clicking "New" → "HTTP Request"

```
┌─────────────────────────────────────────────────────────────┐
│  Postman - New Request                    [Save] [Send]     │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  Method: [GET ▼]                                            │
│                                                              │
│  URL: [https://abcdefghijklmnop.supabase.co/rest/v1/         │
│       projects?select=*&is_published=eq.true]                │
│       ↑                                                      │
│    PASTE URL HERE                                            │
│                                                              │
│  ┌────────────────────────────────────────────────────────┐ │
│  │ [Params] [Authorization] [Headers ▼] [Body] [Tests]   │ │
│  │                              ↑                         │ │
│  │                    CLICK THIS TAB                      │ │
│  └────────────────────────────────────────────────────────┘ │
│                                                              │
│  Headers Tab (after clicking):                              │
│  ┌──────────────┬────────────────────────────────────────┐ │
│  │ ☑ KEY        │ VALUE                                   │ │
│  ├──────────────┼────────────────────────────────────────┤ │
│  │ ☑ apikey     │ eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...│ │
│  │ ☑ Authorization│ Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6...│ │
│  │ ☑ Content-Type│ application/json                       │ │
│  │ ☑ Prefer     │ return=representation                  │ │
│  └──────────────┴────────────────────────────────────────┘ │
│                                                              │
│  [Send] ← Click this to test                                │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

---

## 🚀 Quick Steps Summary

### From Overview Page:

1. **Click "New"** (top left) → **"HTTP Request"**
   - OR click "Collections" → Create/Open collection → Add request

2. **New request window opens**

3. **Add URL:**
   - Click in the URL field (top text box)
   - Paste: `https://YOUR_PROJECT_ID.supabase.co/rest/v1/projects?select=*`

4. **Add Headers:**
   - Click **"Headers"** tab
   - Add 4 headers:
     - `apikey`: `YOUR_ANON_KEY`
     - `Authorization`: `Bearer YOUR_ANON_KEY`
     - `Content-Type`: `application/json`
     - `Prefer`: `return=representation`

5. **Click "Send"** button (top right)

---

## 📍 Exact Locations

### URL Location:
- **Where:** Top of request window (big text box)
- **Next to:** Method dropdown (GET, POST, etc.)
- **What to paste:** Full Supabase REST API URL

### Headers Location:
- **Where:** Headers tab (click "Headers" below URL)
- **What you see:** Table with KEY and VALUE columns
- **What to add:** 4 header rows (apikey, Authorization, Content-Type, Prefer)

---

## ✅ Checklist

**From Overview Page:**
- [ ] Click "New" → "HTTP Request"
- [ ] Request window opens

**In Request Window:**
- [ ] Select method (GET, POST, etc.)
- [ ] Paste URL in URL field
- [ ] Click "Headers" tab
- [ ] Add `apikey` header
- [ ] Add `Authorization` header
- [ ] Add `Content-Type` header
- [ ] Add `Prefer` header
- [ ] Check all checkboxes
- [ ] Click "Send"

**That's where everything goes!** 🎯

