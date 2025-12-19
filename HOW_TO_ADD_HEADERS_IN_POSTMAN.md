# How to Add Headers in Postman - Step by Step
## Understanding Key, Value, and Description Columns

---

## 📋 What You See in Postman Headers Tab

**When you click "Headers" tab, you'll see a table with columns:**

```
┌──────────────┬────────────────────────────────┬──────────────┐
│ KEY          │ VALUE                          │ DESCRIPTION │
├──────────────┼────────────────────────────────┼──────────────┤
│              │                                │              │
└──────────────┴────────────────────────────────┴──────────────┘
```

**What each column means:**
- **KEY** = Header name (e.g., `apikey`, `Authorization`, `Content-Type`)
- **VALUE** = Header value (e.g., your API key, `Bearer YOUR_KEY`, `application/json`)
- **DESCRIPTION** = Optional description (you can leave this empty)

---

## 🎯 Step-by-Step: How to Add Headers

### Header 1: apikey

**Step 1: Click in KEY column**
- Click in the first empty row, under "KEY" column
- Type: `apikey`

**Step 2: Click in VALUE column**
- Click in the same row, under "VALUE" column
- Paste: `YOUR_PUBLISHABLE_KEY` (your actual Supabase publishable key)

**Step 3: Check the checkbox**
- On the left side of the row, there's a checkbox
- ✅ **Check it** to enable the header

**Step 4: Description (optional)**
- You can leave "DESCRIPTION" column empty
- Or add a description like "Supabase API key"

**Result:**
```
┌──────────────┬────────────────────────────────┬──────────────┐
│ ☑ KEY        │ VALUE                          │ DESCRIPTION  │
├──────────────┼────────────────────────────────┼──────────────┤
│ ☑ apikey     │ eyJhbGciOiJIUzI1NiIsInR5cCI... │              │
└──────────────┴────────────────────────────────┴──────────────┘
```

---

### Header 2: Authorization

**Step 1: Add new row**
- Click "Add Header" button (or click in next empty row)

**Step 2: Click in KEY column**
- Type: `Authorization`

**Step 3: Click in VALUE column**
- Type: `Bearer ` (with space after "Bearer")
- Then paste your publishable key after the space
- Full value: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI...`

**Step 4: Check the checkbox**
- ✅ Check the checkbox to enable

**Result:**
```
┌──────────────┬────────────────────────────────┬──────────────┐
│ ☑ KEY        │ VALUE                          │ DESCRIPTION  │
├──────────────┼────────────────────────────────┼──────────────┤
│ ☑ apikey     │ eyJhbGciOiJIUzI1NiIsInR5cCI... │              │
│ ☑ Authorization│ Bearer eyJhbGciOiJIUzI1NiIs...│              │
└──────────────┴────────────────────────────────┴──────────────┘
```

---

### Header 3: Content-Type

**Step 1: Add new row**

**Step 2: KEY column**
- Type: `Content-Type`

**Step 3: VALUE column**
- Type: `application/json`

**Step 4: Check checkbox**
- ✅ Check to enable

**Result:**
```
┌──────────────┬────────────────────────────────┬──────────────┐
│ ☑ KEY        │ VALUE                          │ DESCRIPTION  │
├──────────────┼────────────────────────────────┼──────────────┤
│ ☑ apikey     │ eyJhbGciOiJIUzI1NiIsInR5cCI... │              │
│ ☑ Authorization│ Bearer eyJhbGciOiJIUzI1NiIs...│              │
│ ☑ Content-Type│ application/json              │              │
└──────────────┴────────────────────────────────┴──────────────┘
```

---

### Header 4: Prefer

**Step 1: Add new row**

**Step 2: KEY column**
- Type: `Prefer`

**Step 3: VALUE column**
- Type: `return=representation`

**Step 4: Check checkbox**
- ✅ Check to enable

**Final Result:**
```
┌──────────────┬────────────────────────────────┬──────────────┐
│ ☑ KEY        │ VALUE                          │ DESCRIPTION  │
├──────────────┼────────────────────────────────┼──────────────┤
│ ☑ apikey     │ eyJhbGciOiJIUzI1NiIsInR5cCI... │              │
│ ☑ Authorization│ Bearer eyJhbGciOiJIUzI1NiIs...│              │
│ ☑ Content-Type│ application/json              │              │
│ ☑ Prefer     │ return=representation         │              │
└──────────────┴────────────────────────────────┴──────────────┘
```

---

## 🎨 Visual Guide: Complete Process

### What You See in Postman:

```
┌─────────────────────────────────────────────────────────────┐
│  Headers                                                     │
├──────────────┬──────────────────────────────────────────────┤
│ ☑ KEY        │ VALUE                                        │
├──────────────┼──────────────────────────────────────────────┤
│              │                                              │ ← Click here to add first header
└──────────────┴──────────────────────────────────────────────┘
```

### After Adding Headers:

```
┌─────────────────────────────────────────────────────────────┐
│  Headers                                                     │
├──────────────┬──────────────────────────────────────────────┤
│ ☑ KEY        │ VALUE                                        │
├──────────────┼──────────────────────────────────────────────┤
│ ☑ apikey     │ eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...      │
│ ☑ Authorization│ Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...│
│ ☑ Content-Type│ application/json                            │
│ ☑ Prefer     │ return=representation                        │
└──────────────┴──────────────────────────────────────────────┘
```

---

## 📝 Complete Example: Adding All 4 Headers

### Step 1: Header 1 - apikey

1. **Click in KEY column** (first row)
2. **Type:** `apikey`
3. **Click in VALUE column** (same row)
4. **Paste:** Your full publishable key
5. **Check checkbox** (left side)

### Step 2: Header 2 - Authorization

1. **Click "Add Header"** or click in next row
2. **KEY column:** Type `Authorization`
3. **VALUE column:** Type `Bearer ` (with space) then paste your key
4. **Check checkbox**

### Step 3: Header 3 - Content-Type

1. **Add new row**
2. **KEY column:** Type `Content-Type`
3. **VALUE column:** Type `application/json`
4. **Check checkbox**

### Step 4: Header 4 - Prefer

1. **Add new row**
2. **KEY column:** Type `Prefer`
3. **VALUE column:** Type `return=representation`
4. **Check checkbox**

---

## ✅ Important Notes

### About the Columns:

**KEY Column:**
- This is where you type the **header name**
- Examples: `apikey`, `Authorization`, `Content-Type`, `Prefer`
- Must match exactly (case-sensitive)

**VALUE Column:**
- This is where you type the **header value**
- Examples: Your API key, `Bearer YOUR_KEY`, `application/json`
- Can be long text (like API keys)

**DESCRIPTION Column:**
- Optional - you can leave it empty
- Just for your notes
- Doesn't affect the request

**Checkbox:**
- ✅ **Must be checked** to enable the header
- If unchecked, header won't be sent
- Always check it!

---

## 🎯 Quick Reference: What Goes Where

### Header 1: apikey
```
KEY: apikey
VALUE: YOUR_PUBLISHABLE_KEY (paste full key)
☑ Checkbox: CHECKED
```

### Header 2: Authorization
```
KEY: Authorization
VALUE: Bearer YOUR_PUBLISHABLE_KEY (paste full key after "Bearer ")
☑ Checkbox: CHECKED
```

### Header 3: Content-Type
```
KEY: Content-Type
VALUE: application/json
☑ Checkbox: CHECKED
```

### Header 4: Prefer
```
KEY: Prefer
VALUE: return=representation
☑ Checkbox: CHECKED
```

---

## 💡 Tips

1. **KEY = Header Name:**
   - Type the exact header name in KEY column
   - Examples: `apikey`, `Authorization` (capital A)

2. **VALUE = Header Value:**
   - Type the value in VALUE column
   - For Authorization, include "Bearer " before the key

3. **Checkbox Must Be Checked:**
   - Unchecked headers won't be sent
   - Always check the checkbox!

4. **Description is Optional:**
   - You can leave it empty
   - It's just for your notes

---

## 🚀 Summary

**In Postman Headers tab:**

- **KEY column** = Type header name (`apikey`, `Authorization`, etc.)
- **VALUE column** = Type header value (your key, `Bearer YOUR_KEY`, etc.)
- **DESCRIPTION column** = Optional (leave empty)
- **Checkbox** = Must be checked to enable header

**Add 4 headers:**
1. KEY: `apikey` → VALUE: Your publishable key
2. KEY: `Authorization` → VALUE: `Bearer YOUR_KEY`
3. KEY: `Content-Type` → VALUE: `application/json`
4. KEY: `Prefer` → VALUE: `return=representation`

**That's how you add headers in Postman!** 🎯

