# 📋 Complete Guide: All HTTP Methods in Postman

Complete guide for GET, POST, PATCH, and DELETE with URL, Headers, Params, and Body.

---

## 🎯 Quick Reference Table

| Method | Purpose | URL | Headers | Params | Body |
|--------|---------|-----|---------|--------|------|
| **GET** | Read data | Table name | apikey, Authorization | Filters (optional) | ❌ None |
| **POST** | Create new | Table name | apikey, Authorization, Content-Type | ❌ None | ✅ JSON data |
| **PATCH** | Update existing | Table name + filter | apikey, Authorization, Content-Type | ❌ None | ✅ JSON (only fields to update) |
| **DELETE** | Delete row | Table name + filter | apikey, Authorization | ❌ None | ❌ None |

---

## ✅ GET Method (Read Data)

### When to Use:
- Reading/fetching data
- Getting all rows
- Getting specific rows by ID/filter

### Setup:

#### URL:
```
https://kkvepvlkgppzwapbbynh.supabase.co/rest/v1/[TABLE_NAME]
```

**Examples**:
- `https://kkvepvlkgppzwapbbynh.supabase.co/rest/v1/projects`
- `https://kkvepvlkgppzwapbbynh.supabase.co/rest/v1/skills`
- `https://kkvepvlkgppzwapbbynh.supabase.co/rest/v1/home_content`

#### Headers:
| Key | Value |
|-----|-------|
| `apikey` | `sb_publishable_TXDJdOMzyg5RYq3aEYf7JQ_HlukQAuB` |
| `Authorization` | `Bearer sb_publishable_TXDJdOMzyg5RYq3aEYf7JQ_HlukQAuB` |

#### Params (Optional - for filtering):
You can add filters in **Params tab** OR directly in URL:

**Option 1: In URL**:
```
https://kkvepvlkgppzwapbbynh.supabase.co/rest/v1/projects?id=eq.1
https://kkvepvlkgppzwapbbynh.supabase.co/rest/v1/projects?section=eq.home
```

**Option 2: In Params Tab**:
- Key: `id`
- Value: `eq.1`
- Checkbox: ✅ Checked

#### Body:
❌ **None** - GET requests don't have a body

---

## ✅ POST Method (Create New)

### When to Use:
- Creating new rows
- Adding new data

### Setup:

#### URL:
```
https://kkvepvlkgppzwapbbynh.supabase.co/rest/v1/[TABLE_NAME]
```
**No query parameters!**

**Examples**:
- `https://kkvepvlkgppzwapbbynh.supabase.co/rest/v1/projects`
- `https://kkvepvlkgppzwapbbynh.supabase.co/rest/v1/skills`
- `https://kkvepvlkgppzwapbbynh.supabase.co/rest/v1/contact_submissions`

#### Headers:
| Key | Value |
|-----|-------|
| `apikey` | `sb_publishable_TXDJdOMzyg5RYq3aEYf7JQ_HlukQAuB` |
| `Authorization` | `Bearer sb_publishable_TXDJdOMzyg5RYq3aEYf7JQ_HlukQAuB` |
| `Content-Type` | `application/json` |
| `Prefer` | `return=representation` (optional - returns created row) |

#### Params:
❌ **None** - POST doesn't use query parameters

#### Body:
✅ **Required** - JSON data with all required fields

**Body Tab Setup**:
1. Click **"Body"** tab
2. Select **"raw"**
3. Select **"JSON"** from dropdown
4. Add your JSON:

**Example for `projects`**:
```json
{
  "title": "New Project",
  "title_ar": "مشروع جديد",
  "description": "Project description",
  "category": ["App Design"],
  "featured": false,
  "display_order": 1
}
```

**Example for `skills`**:
```json
{
  "name": "Figma",
  "display_order": 5
}
```

**Example for `contact_submissions`**:
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

---

## ✅ PATCH Method (Update Existing)

### When to Use:
- Updating existing rows
- Modifying specific fields

### Setup:

#### URL:
```
https://kkvepvlkgppzwapbbynh.supabase.co/rest/v1/[TABLE_NAME]?[FILTER]
```

**Must include filter to specify which row to update!**

**Examples**:
- `https://kkvepvlkgppzwapbbynh.supabase.co/rest/v1/projects?id=eq.1`
- `https://kkvepvlkgppzwapbbynh.supabase.co/rest/v1/projects?slug=eq.egy-air`
- `https://kkvepvlkgppzwapbbynh.supabase.co/rest/v1/home_content?key=eq.know_me_title&section=eq.home`
- `https://kkvepvlkgppzwapbbynh.supabase.co/rest/v1/contact_submissions?id=eq.[uuid]`

#### Headers:
| Key | Value |
|-----|-------|
| `apikey` | `sb_publishable_TXDJdOMzyg5RYq3aEYf7JQ_HlukQAuB` |
| `Authorization` | `Bearer sb_publishable_TXDJdOMzyg5RYq3aEYf7JQ_HlukQAuB` |
| `Content-Type` | `application/json` |
| `Prefer` | `return=representation` (optional - returns updated row) |

#### Params:
❌ **None** - Use query parameters in URL instead

#### Body:
✅ **Required** - JSON with **only fields you want to update**

**Body Tab Setup**:
1. Click **"Body"** tab
2. Select **"raw"**
3. Select **"JSON"** from dropdown
4. Add **only fields to update**:

**Example - Update only title**:
```json
{
  "title": "Updated Title"
}
```

**Example - Update multiple fields**:
```json
{
  "title": "Updated Title",
  "description": "Updated description",
  "featured": true
}
```

**Example - Update status**:
```json
{
  "status": "Read"
}
```

---

## ✅ DELETE Method (Delete Row)

### When to Use:
- Deleting rows
- Removing data

### Setup:

#### URL:
```
https://kkvepvlkgppzwapbbynh.supabase.co/rest/v1/[TABLE_NAME]?[FILTER]
```

**Must include filter to specify which row to delete!**

**Examples**:
- `https://kkvepvlkgppzwapbbynh.supabase.co/rest/v1/projects?id=eq.1`
- `https://kkvepvlkgppzwapbbynh.supabase.co/rest/v1/skills?id=eq.5`
- `https://kkvepvlkgppzwapbbynh.supabase.co/rest/v1/contact_submissions?id=eq.[uuid]`

#### Headers:
| Key | Value |
|-----|-------|
| `apikey` | `sb_publishable_TXDJdOMzyg5RYq3aEYf7JQ_HlukQAuB` |
| `Authorization` | `Bearer sb_publishable_TXDJdOMzyg5RYq3aEYf7JQ_HlukQAuB` |

#### Params:
❌ **None** - Use query parameters in URL instead

#### Body:
❌ **None** - DELETE requests don't have a body

---

## 📋 Fix Your Requests

### Your Current Requests (Need to Fix):

#### ❌ "GET Create project" → ✅ Should be "POST Create project"
- **Method**: Change to `POST`
- **URL**: `https://kkvepvlkgppzwapbbynh.supabase.co/rest/v1/projects`
- **Headers**: Add `Content-Type: application/json`
- **Body**: Add JSON with project data

#### ❌ "GET Update project" → ✅ Should be "PATCH Update project"
- **Method**: Change to `PATCH`
- **URL**: `https://kkvepvlkgppzwapbbynh.supabase.co/rest/v1/projects?id=eq.1`
- **Headers**: Add `Content-Type: application/json`
- **Body**: Add JSON with fields to update

#### ❌ "GET Create skills" → ✅ Should be "POST Create skills"
- **Method**: Change to `POST`
- **URL**: `https://kkvepvlkgppzwapbbynh.supabase.co/rest/v1/skills`
- **Headers**: Add `Content-Type: application/json`
- **Body**: Add JSON with skill data

#### ❌ "GET Create Experince" → ✅ Should be "POST Create Experience"
- **Method**: Change to `POST`
- **URL**: `https://kkvepvlkgppzwapbbynh.supabase.co/rest/v1/experience`
- **Headers**: Add `Content-Type: application/json`
- **Body**: Add JSON with experience data

#### ❌ "GET Create Submission" → ✅ Should be "POST Create Submission"
- **Method**: Change to `POST`
- **URL**: `https://kkvepvlkgppzwapbbynh.supabase.co/rest/v1/contact_submissions`
- **Headers**: Add `Content-Type: application/json`
- **Body**: Add JSON with submission data

#### ❌ "GET Update Submission" → ✅ Should be "PATCH Update Submission"
- **Method**: Change to `PATCH`
- **URL**: `https://kkvepvlkgppzwapbbynh.supabase.co/rest/v1/contact_submissions?id=eq.[uuid]`
- **Headers**: Add `Content-Type: application/json`
- **Body**: Add JSON with fields to update

---

## 🎯 Complete Examples

### Example 1: GET All Projects

**Method**: `GET`  
**URL**: `https://kkvepvlkgppzwapbbynh.supabase.co/rest/v1/projects`  
**Headers**:
- `apikey`: `sb_publishable_TXDJdOMzyg5RYq3aEYf7JQ_HlukQAuB`
- `Authorization`: `Bearer sb_publishable_TXDJdOMzyg5RYq3aEYf7JQ_HlukQAuB`
**Params**: None  
**Body**: None

---

### Example 2: POST Create Project

**Method**: `POST`  
**URL**: `https://kkvepvlkgppzwapbbynh.supabase.co/rest/v1/projects`  
**Headers**:
- `apikey`: `sb_publishable_TXDJdOMzyg5RYq3aEYf7JQ_HlukQAuB`
- `Authorization`: `Bearer sb_publishable_TXDJdOMzyg5RYq3aEYf7JQ_HlukQAuB`
- `Content-Type`: `application/json`
**Params**: None  
**Body** (raw JSON):
```json
{
  "title": "New Project",
  "description": "Description here"
}
```

---

### Example 3: PATCH Update Project

**Method**: `PATCH`  
**URL**: `https://kkvepvlkgppzwapbbynh.supabase.co/rest/v1/projects?id=eq.1`  
**Headers**:
- `apikey`: `sb_publishable_TXDJdOMzyg5RYq3aEYf7JQ_HlukQAuB`
- `Authorization`: `Bearer sb_publishable_TXDJdOMzyg5RYq3aEYf7JQ_HlukQAuB`
- `Content-Type`: `application/json`
**Params**: None  
**Body** (raw JSON):
```json
{
  "title": "Updated Title"
}
```

---

### Example 4: DELETE Project

**Method**: `DELETE`  
**URL**: `https://kkvepvlkgppzwapbbynh.supabase.co/rest/v1/projects?id=eq.1`  
**Headers**:
- `apikey`: `sb_publishable_TXDJdOMzyg5RYq3aEYf7JQ_HlukQAuB`
- `Authorization`: `Bearer sb_publishable_TXDJdOMzyg5RYq3aEYf7JQ_HlukQAuB`
**Params**: None  
**Body**: None

---

## 📊 Summary Table

| Method | URL Has Filter? | Headers | Params | Body |
|--------|----------------|---------|--------|------|
| **GET** | Optional (for filtering) | apikey, Authorization | Optional | ❌ |
| **POST** | ❌ No | apikey, Authorization, Content-Type | ❌ | ✅ Required |
| **PATCH** | ✅ Yes (required) | apikey, Authorization, Content-Type | ❌ | ✅ Required |
| **DELETE** | ✅ Yes (required) | apikey, Authorization | ❌ | ❌ |

---

## ✅ Quick Checklist

### For POST (Create):
- [ ] Method is `POST`
- [ ] URL has no query parameters
- [ ] Headers include `apikey`, `Authorization`, `Content-Type`
- [ ] Body is raw JSON with all required fields
- [ ] Body tab is set to "raw" → "JSON"

### For PATCH (Update):
- [ ] Method is `PATCH`
- [ ] URL has query parameter (`?id=eq.1`)
- [ ] Headers include `apikey`, `Authorization`, `Content-Type`
- [ ] Body is raw JSON with only fields to update
- [ ] Body tab is set to "raw" → "JSON"

### For DELETE:
- [ ] Method is `DELETE`
- [ ] URL has query parameter (`?id=eq.1`)
- [ ] Headers include `apikey`, `Authorization`
- [ ] No body

---

## 🎉 You're All Set!

Now you know exactly what to put in URL, Headers, Params, and Body for each method! 🚀

