# How to Use Postman - Step by Step Visual Guide
## Where to Add URLs and Headers

---

## 🎯 Step 1: Create a New Request

1. **Open Postman**
2. **Click "New"** button (top left)
3. **Click "HTTP Request"**
4. **A new request tab opens**

---

## 📍 Step 2: Where to Add the URL

### Location: Top of the Request Window

**Visual Guide:**
```
┌─────────────────────────────────────────────────────────────┐
│  Postman Request Window                                      │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  [GET ▼] [https://YOUR_PROJECT_ID.supabase.co/rest/v1/...] │ ← URL goes here
│         ↑                                                    │
│    Method dropdown                                           │
│                                                              │
│  [Params] [Authorization] [Headers] [Body] [Tests] [Settings]│
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

### Steps:

1. **Click in the URL field** (the big text box at the top)
2. **Select method** from dropdown (GET, POST, PATCH, DELETE)
3. **Type or paste the full URL:**
   ```
   https://YOUR_PROJECT_ID.supabase.co/rest/v1/projects?select=*&is_published=eq.true
   ```

**Example:**
- Method: `GET`
- URL: `https://abcdefghijklmnop.supabase.co/rest/v1/projects?select=*&is_published=eq.true&order=display_order.asc`

---

## 📋 Step 3: Where to Add Headers

### Location: Headers Tab

**Visual Guide:**
```
┌─────────────────────────────────────────────────────────────┐
│  [Params] [Authorization] [Headers] [Body] [Tests] [Settings]│
│            ↑ Click this tab                                  │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  Headers                                                     │
│  ┌──────────────┬────────────────────────────────────────┐ │
│  │ KEY          │ VALUE                                   │ │
│  ├──────────────┼────────────────────────────────────────┤ │
│  │ apikey       │ YOUR_SUPABASE_ANON_KEY                 │ │ ← Add here
│  │ Authorization│ Bearer YOUR_SUPABASE_ANON_KEY          │ │ ← Add here
│  │ Content-Type │ application/json                        │ │ ← Add here
│  │ Prefer       │ return=representation                  │ │ ← Add here
│  └──────────────┴────────────────────────────────────────┘ │
│                                                              │
│  [Bulk Edit]                                                 │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

### Steps:

1. **Click "Headers" tab** (below the URL field)
2. **You'll see two columns:** KEY and VALUE
3. **Add each header one by one:**

   **Header 1:**
   - KEY: `apikey`
   - VALUE: `YOUR_SUPABASE_ANON_KEY` (paste your actual key)

   **Header 2:**
   - KEY: `Authorization`
   - VALUE: `Bearer YOUR_SUPABASE_ANON_KEY` (paste your actual key after "Bearer ")

   **Header 3:**
   - KEY: `Content-Type`
   - VALUE: `application/json`

   **Header 4:**
   - KEY: `Prefer`
   - VALUE: `return=representation`

---

## 🎨 Visual Example: Complete Request Setup

### GET Request Example

```
┌─────────────────────────────────────────────────────────────────┐
│  Postman - New Request                                           │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  Method: [GET ▼]                                                │
│                                                                  │
│  URL: [https://abcdefghijklmnop.supabase.co/rest/v1/projects?   │
│       select=*&is_published=eq.true&order=display_order.asc]    │
│                                                                  │
│  [Params] [Authorization] [Headers ▼] [Body] [Tests] [Settings]  │
│                                                                  │
│  ┌──────────────────────────────────────────────────────────┐   │
│  │ Headers                                                   │   │
│  ├──────────────┬──────────────────────────────────────────┤   │
│  │ KEY          │ VALUE                                     │   │
│  ├──────────────┼──────────────────────────────────────────┤   │
│  │ apikey       │ eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...   │   │
│  │ Authorization│ Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6...   │   │
│  │ Content-Type │ application/json                          │   │
│  │ Prefer       │ return=representation                    │   │
│  └──────────────┴──────────────────────────────────────────┘   │
│                                                                  │
│  [Save] [Send]                                                   │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

---

## 📝 Step-by-Step: Complete Example

### Example: GET All Projects

**Step 1: Set Method and URL**
1. Click the method dropdown → Select **GET**
2. Click in URL field → Paste:
   ```
   https://YOUR_PROJECT_ID.supabase.co/rest/v1/projects?select=*&is_published=eq.true&order=display_order.asc
   ```

**Step 2: Add Headers**
1. Click **"Headers"** tab
2. Click **"Add Header"** or click in the KEY column
3. Add each header:

   **Row 1:**
   - KEY: `apikey`
   - VALUE: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFiY2RlZmdoaWprbG1ub3AiLCJyb2xlIjoiYW5vbiIsImlhdCI6MTYxNjIzOTAyMiwiZXhwIjoxOTMxODE1MDIyfQ.xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`
   - ✅ Check the checkbox to enable it

   **Row 2:**
   - KEY: `Authorization`
   - VALUE: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFiY2RlZmdoaWprbG1ub3AiLCJyb2xlIjoiYW5vbiIsImlhdCI6MTYxNjIzOTAyMiwiZXhwIjoxOTMxODE1MDIyfQ.xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`
   - ✅ Check the checkbox to enable it

   **Row 3:**
   - KEY: `Content-Type`
   - VALUE: `application/json`
   - ✅ Check the checkbox to enable it

   **Row 4:**
   - KEY: `Prefer`
   - VALUE: `return=representation`
   - ✅ Check the checkbox to enable it

**Step 3: Send Request**
1. Click **"Send"** button (blue button, top right)
2. View response in the bottom panel

---

## 📦 Step 4: For POST/PATCH Requests - Add Body

### Location: Body Tab

**Visual Guide:**
```
┌─────────────────────────────────────────────────────────────┐
│  [Params] [Authorization] [Headers] [Body ▼] [Tests] [Settings]│
│                              ↑ Click this tab                │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  Body                                                        │
│  ○ none  ○ form-data  ○ x-www-form-urlencoded              │
│  ● raw   ○ binary     ○ GraphQL                            │
│                                                              │
│  [JSON ▼]  [Text ▼]                                         │
│                                                              │
│  ┌────────────────────────────────────────────────────────┐ │
│  │ {                                                       │ │
│  │   "title_en": "New Project",                          │ │
│  │   "title_ar": "مشروع جديد",                          │ │
│  │   "slug": "new-project",                              │ │
│  │   "category": "App Design",                           │ │
│  │   "is_published": true                                │ │
│  │ }                                                      │ │
│  └────────────────────────────────────────────────────────┘ │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

### Steps for POST/PATCH:

1. **Click "Body" tab**
2. **Select "raw"** radio button
3. **Select "JSON"** from dropdown (top right of body area)
4. **Paste your JSON body:**
   ```json
   {
     "title_en": "New Project",
     "title_ar": "مشروع جديد",
     "slug": "new-project",
     "category": "App Design",
     "is_published": true
   }
   ```

---

## 🎯 Quick Reference: Where Everything Goes

### URL
**Location:** Top of request window (big text box)
```
[GET ▼] [https://YOUR_PROJECT_ID.supabase.co/rest/v1/projects?select=*]
```

### Headers
**Location:** Headers tab (click "Headers" below URL)
```
KEY: apikey
VALUE: YOUR_ANON_KEY

KEY: Authorization
VALUE: Bearer YOUR_ANON_KEY

KEY: Content-Type
VALUE: application/json

KEY: Prefer
VALUE: return=representation
```

### Body (for POST/PATCH)
**Location:** Body tab → raw → JSON
```json
{
  "title_en": "New Project",
  "slug": "new-project"
}
```

---

## ✅ Checklist: Setting Up a Request

**For GET requests:**
- [ ] Set method to GET
- [ ] Paste URL in URL field
- [ ] Go to Headers tab
- [ ] Add `apikey` header
- [ ] Add `Authorization` header
- [ ] Click "Send"

**For POST/PATCH requests:**
- [ ] Set method to POST or PATCH
- [ ] Paste URL in URL field
- [ ] Go to Headers tab
- [ ] Add `apikey` header
- [ ] Add `Authorization` header
- [ ] Add `Content-Type: application/json` header
- [ ] Add `Prefer: return=representation` header
- [ ] Go to Body tab
- [ ] Select "raw" and "JSON"
- [ ] Paste JSON body
- [ ] Click "Send"

---

## 💡 Tips

1. **Save requests:**
   - Click "Save" button after setting up
   - Name your request (e.g., "GET All Projects")
   - Save to a collection

2. **Use variables:**
   - Create collection variables for `base_url` and `anon_key`
   - Use `{{base_url}}` and `{{anon_key}}` in requests

3. **Copy headers:**
   - Once you set headers for one request, you can copy them
   - Right-click header → Copy
   - Paste in new request

4. **Test response:**
   - After clicking "Send", check the response at the bottom
   - Status should be `200 OK` for successful requests
   - Response body shows the data returned

---

## 🚀 Summary

**URL goes here:**
- Top text box (next to method dropdown)

**Headers go here:**
- Headers tab → Add KEY and VALUE pairs

**Body goes here (POST/PATCH only):**
- Body tab → raw → JSON → Paste JSON

**That's it!** Now you know exactly where to add everything in Postman! 🎯

