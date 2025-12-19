# 📍 Where to Add URL, Headers, Method, and Body in Postman

Visual guide showing exactly where everything goes in Postman.

---

## 🎯 Postman Request Screen Layout

When you click on a request, you'll see this layout:

```
┌─────────────────────────────────────────────────────────┐
│  [GET ▼]  [URL: https://...]              [Send]       │ ← Method & URL
├─────────────────────────────────────────────────────────┤
│  [Params] [Authorization] [Headers] [Body] [Pre-request]│ ← Tabs
│                                                          │
│  ┌────────────────────────────────────────────────────┐  │
│  │  Headers Content Area                              │  │
│  │  Key          │ Value                             │  │
│  │  ────────────┼───────────────────────────────────│  │
│  │  apikey       │ sb_publishable_TXDJdOMzyg5RYq... │  │
│  │  Authorization│ Bearer sb_publishable_TXDJdOM... │  │
│  └────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────┘
```

---

## 📋 Step-by-Step: Where to Add Each Element

### Step 1: Set the Method

**Location**: Top left, dropdown menu

1. **Look at the top left** of the request screen
2. You'll see a **dropdown** that says "GET", "POST", "PATCH", etc.
3. **Click the dropdown**
4. **Select** the method you want (GET, POST, PATCH, DELETE)

**Visual**:
```
┌─────────────────────────────────────┐
│ [GET ▼]  ← Click here!              │
│   GET                               │
│   POST                              │
│   PATCH                             │
│   DELETE                            │
└─────────────────────────────────────┘
```

---

### Step 2: Add the URL

**Location**: Top center, URL input field

1. **Look at the top center** of the request screen
2. You'll see a **text field** that says "Enter request URL" or shows a URL
3. **Click in that field**
4. **Type or paste** your URL:
   ```
   https://kkvepvlkgppzwapbbynh.supabase.co/rest/v1/projects
   ```

**Visual**:
```
┌─────────────────────────────────────────────────────────┐
│ [GET ▼]  [https://kkvepvlkgppzwapbbynh.supabase.co/...] │
│          ↑ Click here and type your URL!                │
└─────────────────────────────────────────────────────────┘
```

---

### Step 3: Add Headers

**Location**: "Headers" tab (below the URL)

1. **Look below the URL field**
2. You'll see tabs: **"Params"**, **"Authorization"**, **"Headers"**, **"Body"**, etc.
3. **Click on "Headers" tab**
4. You'll see a table with columns: **"Key"** and **"Value"**
5. **Add each header**:

   **First Header**:
   - Click in **"Key"** column (first row)
   - Type: `apikey`
   - Press **Tab** (or click in **"Value"** column)
   - Type: `sb_publishable_TXDJdOMzyg5RYq3aEYf7JQ_HlukQAuB`

   **Second Header**:
   - Click in **"Key"** column (next row)
   - Type: `Authorization`
   - Press **Tab** (or click in **"Value"** column)
   - Type: `Bearer sb_publishable_TXDJdOMzyg5RYq3aEYf7JQ_HlukQAuB`

**Visual**:
```
┌─────────────────────────────────────────────────────────┐
│  [Params] [Authorization] [Headers] ← Click here!       │
│                                                          │
│  ┌────────────────────────────────────────────────────┐  │
│  │  Key          │ Value                             │  │
│  │  ────────────┼───────────────────────────────────│  │
│  │  apikey       │ sb_publishable_TXDJdOMzyg5RYq... │  │ ← Row 1
│  │  Authorization│ Bearer sb_publishable_TXDJdOM... │  │ ← Row 2
│  └────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────┘
```

**For POST/PATCH requests, also add**:
- **Key**: `Content-Type`
- **Value**: `application/json`

---

### Step 4: Add Body (Only for POST/PATCH)

**Location**: "Body" tab (next to "Headers")

1. **Click on "Body" tab** (next to "Headers" tab)
2. You'll see options: **"none"**, **"form-data"**, **"x-www-form-urlencoded"**, **"raw"**, **"binary"**, **"GraphQL"**
3. **Click "raw"** (radio button)
4. **Look to the right** of "raw" - you'll see a dropdown that says "Text"
5. **Click that dropdown** and select **"JSON"**
6. **Click in the text area below**
7. **Type or paste** your JSON:
   ```json
   {
     "title": "Test Project",
     "description": "Test description"
   }
   ```

**Visual**:
```
┌─────────────────────────────────────────────────────────┐
│  [Params] [Authorization] [Headers] [Body] ← Click here!│
│                                                          │
│  ○ none  ○ form-data  ○ x-www-form-urlencoded           │
│  ● raw   ○ binary  ○ GraphQL                            │ ← Click "raw"
│                                                          │
│  [Text ▼] ← Click and select "JSON"                     │
│                                                          │
│  ┌────────────────────────────────────────────────────┐  │
│  │  {                                                  │  │
│  │    "title": "Test Project",                        │  │ ← Type JSON here
│  │    "description": "Test description"               │  │
│  │  }                                                  │  │
│  └────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────┘
```

---

## ✅ Complete Example: POST Request Setup

### Visual Guide:

```
┌─────────────────────────────────────────────────────────┐
│  [POST ▼]  [https://kkvepvlkgppzwapbbynh.supabase.co/   │
│            rest/v1/projects]              [Send]        │
├─────────────────────────────────────────────────────────┤
│  [Params] [Authorization] [Headers] [Body]              │
│                                                          │
│  ┌────────────────────────────────────────────────────┐  │
│  │  Key          │ Value                             │  │
│  │  ────────────┼───────────────────────────────────│  │
│  │  apikey       │ sb_publishable_TXDJdOMzyg5RYq... │  │
│  │  Authorization│ Bearer sb_publishable_TXDJdOM... │  │
│  │  Content-Type │ application/json                  │  │
│  └────────────────────────────────────────────────────┘  │
│                                                          │
│  [Body Tab Selected]                                     │
│  ● raw   [JSON ▼]                                        │
│                                                          │
│  ┌────────────────────────────────────────────────────┐  │
│  │  {                                                  │  │
│  │    "title": "Test Project"                         │  │
│  │  }                                                  │  │
│  └────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────┘
```

---

## 🎯 Quick Reference: Where Everything Goes

| Element | Location | How to Add |
|---------|----------|------------|
| **Method** | Top left dropdown | Click dropdown → Select GET/POST/PATCH/DELETE |
| **URL** | Top center text field | Click field → Type/paste URL |
| **Headers** | "Headers" tab → Table | Click "Headers" tab → Add Key/Value pairs |
| **Body** | "Body" tab → raw → JSON | Click "Body" → Select "raw" → Select "JSON" → Type JSON |

---

## 🧪 Test It!

1. **Set Method**: Select "GET" from dropdown
2. **Set URL**: `https://kkvepvlkgppzwapbbynh.supabase.co/rest/v1/projects?limit=1`
3. **Add Headers**: Click "Headers" tab → Add `apikey` and `Authorization`
4. **Click "Send"** button (top right)
5. **Check Response**: You should see data in the bottom panel!

---

## 💡 Pro Tips

- **Save your request**: Click "Save" button (top right) after configuring
- **Test first**: Always test with a GET request before trying POST/PATCH
- **Check response**: Look at the bottom panel after clicking "Send" to see results
- **Copy headers**: Once you add headers to one request, you can copy them to others

---

## 🎉 You're All Set!

Now you know exactly where to add everything in Postman! 🚀

