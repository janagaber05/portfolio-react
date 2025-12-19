# Postman Method Differences - GET vs POST/PATCH/DELETE
## Why Other Methods Give Errors

---

## 🔍 Why GET Works But Others Don't

**GET requests:**
- ✅ Just read data
- ✅ Only need URL and headers
- ✅ No body required
- ✅ Usually works if RLS allows reading

**POST/PATCH/DELETE requests:**
- ❌ Modify data (create/update/delete)
- ❌ Need additional headers
- ❌ POST/PATCH need body
- ❌ RLS might block write operations

---

## ✅ Step 1: Required Headers for Each Method

### GET Requests (Reading Data)

**Required Headers:**
```
apikey: YOUR_PUBLISHABLE_KEY
Authorization: Bearer YOUR_PUBLISHABLE_KEY
```

**Optional Headers:**
```
Content-Type: application/json
```

**No body needed!**

---

### POST Requests (Creating Data)

**Required Headers:**
```
apikey: YOUR_PUBLISHABLE_KEY
Authorization: Bearer YOUR_PUBLISHABLE_KEY
Content-Type: application/json          ← REQUIRED!
Prefer: return=representation          ← REQUIRED!
```

**Required Body:**
- Must have Body tab
- Select "raw" → "JSON"
- Include JSON data

**Example:**
```
Method: POST
URL: https://YOUR_PROJECT_ID.supabase.co/rest/v1/projects

Headers:
  apikey: YOUR_KEY
  Authorization: Bearer YOUR_KEY
  Content-Type: application/json        ← Must have!
  Prefer: return=representation        ← Must have!

Body (raw JSON):
{
  "title_en": "Test Project",
  "slug": "test-project",
  "category": "App Design"
}
```

---

### PATCH Requests (Updating Data)

**Required Headers:**
```
apikey: YOUR_PUBLISHABLE_KEY
Authorization: Bearer YOUR_PUBLISHABLE_KEY
Content-Type: application/json          ← REQUIRED!
Prefer: return=representation          ← REQUIRED!
```

**Required Body:**
- Must have Body tab
- Select "raw" → "JSON"
- Include JSON with fields to update

**Example:**
```
Method: PATCH
URL: https://YOUR_PROJECT_ID.supabase.co/rest/v1/projects?id=eq.1

Headers:
  apikey: YOUR_KEY
  Authorization: Bearer YOUR_KEY
  Content-Type: application/json        ← Must have!
  Prefer: return=representation        ← Must have!

Body (raw JSON):
{
  "title_en": "Updated Title",
  "is_published": true
}
```

---

### DELETE Requests (Deleting Data)

**Required Headers:**
```
apikey: YOUR_PUBLISHABLE_KEY
Authorization: Bearer YOUR_PUBLISHABLE_KEY
```

**No body needed!**

**Example:**
```
Method: DELETE
URL: https://YOUR_PROJECT_ID.supabase.co/rest/v1/projects?id=eq.1

Headers:
  apikey: YOUR_KEY
  Authorization: Bearer YOUR_KEY
```

---

## 🔒 Step 2: Check RLS Policies

### Why POST/PATCH/DELETE Might Be Blocked

**RLS (Row Level Security) might block write operations!**

**Check RLS:**
1. **Go to Supabase → Table Editor**
2. **Click on your table** (e.g., `projects`)
3. **Look for RLS status:**
   - If "RLS enabled" → You need policies for write operations
   - If "RLS disabled" → Should work (but less secure)

### Add Write Policies

**For POST (INSERT):**
1. **Go to table → "..." → "Edit RLS policies"**
2. **Click "New policy"**
3. **Policy name:** `Public can insert`
4. **Allowed operation:** `INSERT`
5. **Target roles:** `public`
6. **Policy definition:** `true`
7. **Save**

**For PATCH (UPDATE):**
1. **New policy**
2. **Policy name:** `Public can update`
3. **Allowed operation:** `UPDATE`
4. **Target roles:** `public`
5. **Policy definition:** `true`
6. **Save**

**For DELETE:**
1. **New policy**
2. **Policy name:** `Public can delete`
3. **Allowed operation:** `DELETE`
4. **Target roles:** `public`
5. **Policy definition:** `true`
6. **Save**

**OR for testing only:**
- **Disable RLS** (not recommended for production)
- Go to table → "..." → "Disable RLS"

---

## 📋 Step 3: Complete Setup for Each Method

### POST Request - Complete Setup

**Method:** POST

**URL:**
```
https://YOUR_PROJECT_ID.supabase.co/rest/v1/projects
```

**Headers Tab:**
```
☑ apikey: YOUR_PUBLISHABLE_KEY
☑ Authorization: Bearer YOUR_PUBLISHABLE_KEY
☑ Content-Type: application/json
☑ Prefer: return=representation
```

**Body Tab:**
1. Click "Body" tab
2. Select "raw" radio button
3. Select "JSON" from dropdown (top right of body area)
4. Paste JSON:
```json
{
  "title_en": "Test Project",
  "title_ar": "مشروع تجريبي",
  "slug": "test-project",
  "category": "App Design",
  "is_published": false,
  "display_order": 10
}
```

**Then click "Send"**

---

### PATCH Request - Complete Setup

**Method:** PATCH

**URL:**
```
https://YOUR_PROJECT_ID.supabase.co/rest/v1/projects?id=eq.1
```

**Headers Tab:**
```
☑ apikey: YOUR_PUBLISHABLE_KEY
☑ Authorization: Bearer YOUR_PUBLISHABLE_KEY
☑ Content-Type: application/json
☑ Prefer: return=representation
```

**Body Tab:**
1. Click "Body" tab
2. Select "raw"
3. Select "JSON"
4. Paste JSON:
```json
{
  "title_en": "Updated Title",
  "is_published": true
}
```

**Then click "Send"**

---

### DELETE Request - Complete Setup

**Method:** DELETE

**URL:**
```
https://YOUR_PROJECT_ID.supabase.co/rest/v1/projects?id=eq.1
```

**Headers Tab:**
```
☑ apikey: YOUR_PUBLISHABLE_KEY
☑ Authorization: Bearer YOUR_PUBLISHABLE_KEY
```

**No Body needed!**

**Then click "Send"**

---

## 🚨 Common Errors and Fixes

### Error 1: "Missing required header"

**Fix:** Add `Content-Type: application/json` and `Prefer: return=representation` for POST/PATCH

---

### Error 2: "Request body is required"

**Fix:** 
- Click "Body" tab
- Select "raw"
- Select "JSON"
- Add JSON body

---

### Error 3: "403 Forbidden" on POST/PATCH/DELETE

**Fix:**
- Check RLS policies
- Add INSERT/UPDATE/DELETE policies
- Or disable RLS for testing

---

### Error 4: "Column does not exist"

**Fix:**
- Check column names in Supabase table
- Use exact column names in JSON body
- Match case exactly

---

## ✅ Quick Checklist: POST/PATCH Setup

**For POST/PATCH requests:**

**Headers:**
- [ ] `apikey` header added
- [ ] `Authorization` header added
- [ ] `Content-Type: application/json` added ← Important!
- [ ] `Prefer: return=representation` added ← Important!
- [ ] All checkboxes checked

**Body:**
- [ ] Body tab clicked
- [ ] "raw" radio button selected
- [ ] "JSON" selected from dropdown
- [ ] Valid JSON pasted
- [ ] Column names match Supabase table

**RLS:**
- [ ] RLS policies added for INSERT/UPDATE
- [ ] OR RLS disabled for testing

---

## 🎯 Summary

**Why GET works but POST/PATCH/DELETE don't:**

1. **Missing headers:**
   - POST/PATCH need `Content-Type` and `Prefer` headers
   - GET doesn't need these

2. **Missing body:**
   - POST/PATCH need JSON body
   - GET doesn't need body

3. **RLS blocking:**
   - Write operations (POST/PATCH/DELETE) need RLS policies
   - Read operations (GET) might work without policies

**Fix:**
- Add required headers for POST/PATCH
- Add body for POST/PATCH
- Add RLS policies for write operations

**That's why other methods give errors!** 🎯

