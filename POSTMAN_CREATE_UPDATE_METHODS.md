# 📝 POST vs PATCH: Create and Update Methods in Postman

Guide for CREATE and UPDATE operations with Supabase.

---

## 🎯 Quick Answer

| Operation | Method | When to Use |
|-----------|--------|-------------|
| **CREATE** (Add new row) | **POST** | Creating new data |
| **UPDATE** (Modify existing row) | **PATCH** | Updating existing data |

---

## ✅ CREATE: Use POST Method

### When to Use POST:
- Creating a **new row** in a table
- Adding new data that doesn't exist yet

### POST Request Setup:

#### 1. Method
- Select **POST** from dropdown

#### 2. URL
```
https://kkvepvlkgppzwapbbynh.supabase.co/rest/v1/projects
```
(No query parameters needed - you're creating new data)

#### 3. Headers
| Key | Value |
|-----|-------|
| `apikey` | `sb_publishable_TXDJdOMzyg5RYq3aEYf7JQ_HlukQAuB` |
| `Authorization` | `Bearer sb_publishable_TXDJdOMzyg5RYq3aEYf7JQ_HlukQAuB` |
| `Content-Type` | `application/json` |
| `Prefer` | `return=representation` (optional - returns created row) |

#### 4. Body
- Click **"Body"** tab
- Select **"raw"**
- Select **"JSON"** from dropdown
- Add your JSON data:

**Example for `projects` table:**
```json
{
  "title": "New Project",
  "title_ar": "مشروع جديد",
  "description": "This is a new project",
  "category": ["App Design", "UX/UI"],
  "featured": false,
  "display_order": 1
}
```

#### 5. Send
- Click **"Send"**
- **Expected**: 201 Created (or 200 OK) with the created row data

---

## ✅ UPDATE: Use PATCH Method

### When to Use PATCH:
- **Modifying** an existing row
- **Updating** specific fields
- Row must already exist (you need the ID)

### PATCH Request Setup:

#### 1. Method
- Select **PATCH** from dropdown

#### 2. URL
```
https://kkvepvlkgppzwapbbynh.supabase.co/rest/v1/projects?id=eq.1
```
(Use query parameter to specify which row: `?id=eq.1`)

**Or filter by other field:**
```
https://kkvepvlkgppzwapbbynh.supabase.co/rest/v1/projects?slug=eq.egy-air
```

#### 3. Headers
| Key | Value |
|-----|-------|
| `apikey` | `sb_publishable_TXDJdOMzyg5RYq3aEYf7JQ_HlukQAuB` |
| `Authorization` | `Bearer sb_publishable_TXDJdOMzyg5RYq3aEYf7JQ_HlukQAuB` |
| `Content-Type` | `application/json` |
| `Prefer` | `return=representation` (optional - returns updated row) |

#### 4. Body
- Click **"Body"** tab
- Select **"raw"**
- Select **"JSON"** from dropdown
- Add **only the fields you want to update**:

**Example - Update only title:**
```json
{
  "title": "Updated Project Title"
}
```

**Example - Update multiple fields:**
```json
{
  "title": "Updated Title",
  "description": "Updated description",
  "featured": true
}
```

**Important**: Only include fields you want to change!

#### 5. Send
- Click **"Send"**
- **Expected**: 200 OK with the updated row data

---

## 📋 Complete Examples

### Example 1: CREATE a New Project (POST)

**Method**: `POST`  
**URL**: `https://kkvepvlkgppzwapbbynh.supabase.co/rest/v1/projects`  
**Headers**:
- `apikey`: `sb_publishable_TXDJdOMzyg5RYq3aEYf7JQ_HlukQAuB`
- `Authorization`: `Bearer sb_publishable_TXDJdOMzyg5RYq3aEYf7JQ_HlukQAuB`
- `Content-Type`: `application/json`

**Body** (raw JSON):
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

---

### Example 2: UPDATE a Project (PATCH)

**Method**: `PATCH`  
**URL**: `https://kkvepvlkgppzwapbbynh.supabase.co/rest/v1/projects?id=eq.1`  
**Headers**:
- `apikey`: `sb_publishable_TXDJdOMzyg5RYq3aEYf7JQ_HlukQAuB`
- `Authorization`: `Bearer sb_publishable_TXDJdOMzyg5RYq3aEYf7JQ_HlukQAuB`
- `Content-Type`: `application/json`

**Body** (raw JSON):
```json
{
  "title": "Updated EgyAir App",
  "featured": false
}
```

---

## 🔄 Key Differences: POST vs PATCH

| Feature | POST (CREATE) | PATCH (UPDATE) |
|---------|---------------|----------------|
| **Method** | `POST` | `PATCH` |
| **URL** | No query params | Has query params (`?id=eq.1`) |
| **Purpose** | Create new row | Update existing row |
| **Body** | All required fields | Only fields to update |
| **Response** | 201 Created | 200 OK |

---

## 🎯 For Each Table

### `projects` Table

**CREATE (POST)**:
- URL: `https://kkvepvlkgppzwapbbynh.supabase.co/rest/v1/projects`
- Body: All project fields

**UPDATE (PATCH)**:
- URL: `https://kkvepvlkgppzwapbbynh.supabase.co/rest/v1/projects?id=eq.1`
- Body: Only fields to update

---

### `home_content` Table

**CREATE (POST)**:
- URL: `https://kkvepvlkgppzwapbbynh.supabase.co/rest/v1/home_content`
- Body:
```json
{
  "section": "home",
  "key": "new_key",
  "content_en": "English content",
  "content_ar": "المحتوى العربي",
  "display_order": 0
}
```

**UPDATE (PATCH)**:
- URL: `https://kkvepvlkgppzwapbbynh.supabase.co/rest/v1/home_content?key=eq.new_key&section=eq.home`
- Body:
```json
{
  "content_en": "Updated English content"
}
```

---

### `skills` Table

**CREATE (POST)**:
- URL: `https://kkvepvlkgppzwapbbynh.supabase.co/rest/v1/skills`
- Body:
```json
{
  "name": "Figma",
  "display_order": 5
}
```

**UPDATE (PATCH)**:
- URL: `https://kkvepvlkgppzwapbbynh.supabase.co/rest/v1/skills?id=eq.1`
- Body:
```json
{
  "name": "Figma Pro"
}
```

---

### `contact_submissions` Table

**CREATE (POST)**:
- URL: `https://kkvepvlkgppzwapbbynh.supabase.co/rest/v1/contact_submissions`
- Body:
```json
{
  "first_name": "John",
  "last_name": "Doe",
  "email": "john@example.com",
  "phone": "01234567890",
  "subject": "Inquiry",
  "status": "New"
}
```

**UPDATE (PATCH)** - Mark as Read:
- URL: `https://kkvepvlkgppzwapbbynh.supabase.co/rest/v1/contact_submissions?id=eq.[uuid]`
- Body:
```json
{
  "status": "Read"
}
```

---

## ✅ Checklist for CREATE (POST)

- [ ] Method is **POST**
- [ ] URL has **no query parameters** (just table name)
- [ ] Headers include `apikey`, `Authorization`, `Content-Type`
- [ ] Body is **raw JSON** with all required fields
- [ ] Click "Send"
- [ ] Expected: 201 Created or 200 OK

---

## ✅ Checklist for UPDATE (PATCH)

- [ ] Method is **PATCH**
- [ ] URL has **query parameter** to identify row (`?id=eq.1`)
- [ ] Headers include `apikey`, `Authorization`, `Content-Type`
- [ ] Body is **raw JSON** with **only fields to update**
- [ ] Click "Send"
- [ ] Expected: 200 OK

---

## 🐛 Common Mistakes

### ❌ Wrong: Using GET for Create
- **Wrong**: GET request with body
- **Correct**: POST request with body

### ❌ Wrong: Using POST for Update
- **Wrong**: POST to update existing row
- **Correct**: PATCH to update existing row

### ❌ Wrong: PATCH without Query Parameter
- **Wrong**: `PATCH /rest/v1/projects` (no filter)
- **Correct**: `PATCH /rest/v1/projects?id=eq.1` (with filter)

### ❌ Wrong: Sending All Fields in PATCH
- **Wrong**: Sending all fields when only updating one
- **Correct**: Send only fields you want to update

---

## 💡 Pro Tips

1. **Use `Prefer: return=representation`** header to get the created/updated row back
2. **For PATCH**: Only include fields you want to change
3. **For POST**: Include all required fields
4. **Test with GET first** to see existing data before updating
5. **Use query parameters** in PATCH URL to target specific rows

---

## 🎉 Summary

- **POST** = CREATE new data
- **PATCH** = UPDATE existing data
- **GET** = READ data
- **DELETE** = DELETE data

That's it! 🚀

