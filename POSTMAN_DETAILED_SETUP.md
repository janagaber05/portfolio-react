# 📝 Detailed Setup for Each HTTP Method in Postman

Complete step-by-step guide with exact values for GET, POST, PATCH, and DELETE.

---

## 🎯 Method 1: GET (Read Data)

### Step-by-Step Setup:

#### 1. Method Dropdown
- **Location**: Top left of request
- **Select**: `GET`

#### 2. URL Field
- **Location**: Top center, next to method dropdown
- **Type exactly**:
  ```
  https://kkvepvlkgppzwapbbynh.supabase.co/rest/v1/projects
  ```
  
  **For filtering, add query params**:
  ```
  https://kkvepvlkgppzwapbbynh.supabase.co/rest/v1/projects?id=eq.1
  ```
  or
  ```
  https://kkvepvlkgppzwapbbynh.supabase.co/rest/v1/projects?section=eq.home
  ```

#### 3. Headers Tab
- **Location**: Click "Headers" tab (below URL)
- **Add these headers** (checkboxes must be checked ✅):

| Key | Value | ✅ Checked |
|-----|-------|------------|
| `apikey` | `sb_publishable_TXDJdOMzyg5RYq3aEYf7JQ_HlukQAuB` | ✅ |
| `Authorization` | `Bearer sb_publishable_TXDJdOMzyg5RYq3aEYf7JQ_HlukQAuB` | ✅ |

**How to add**:
1. Click in "Key" column (first row)
2. Type: `apikey`
3. Press Tab (or click "Value" column)
4. Type: `sb_publishable_TXDJdOMzyg5RYq3aEYf7JQ_HlukQAuB`
5. ✅ Check the checkbox
6. Repeat for `Authorization` header

#### 4. Params Tab (Optional)
- **Location**: Click "Params" tab
- **When to use**: If you want to add filters via Params instead of URL
- **Example**:
  - Key: `id`
  - Value: `eq.1`
  - ✅ Checkbox checked
- **Note**: This adds `?id=eq.1` to your URL automatically

#### 5. Body Tab
- **Location**: Click "Body" tab
- **What to do**: ❌ **Nothing** - Leave it as "none"
- GET requests don't have a body

#### 6. Send
- Click **"Send"** button (top right)
- **Expected**: 200 OK with data

---

## 🎯 Method 2: POST (Create New)

### Step-by-Step Setup:

#### 1. Method Dropdown
- **Location**: Top left of request
- **Select**: `POST`

#### 2. URL Field
- **Location**: Top center
- **Type exactly**:
  ```
  https://kkvepvlkgppzwapbbynh.supabase.co/rest/v1/projects
  ```
  **Important**: No query parameters! Just the table name.

#### 3. Headers Tab
- **Location**: Click "Headers" tab
- **Add these headers** (all checkboxes checked ✅):

| Key | Value | ✅ Checked |
|-----|-------|------------|
| `apikey` | `sb_publishable_TXDJdOMzyg5RYq3aEYf7JQ_HlukQAuB` | ✅ |
| `Authorization` | `Bearer sb_publishable_TXDJdOMzyg5RYq3aEYf7JQ_HlukQAuB` | ✅ |
| `Content-Type` | `application/json` | ✅ |
| `Prefer` | `return=representation` | ✅ (optional) |

**How to add**:
1. Add `apikey` header (same as GET)
2. Add `Authorization` header (same as GET)
3. Add `Content-Type` header:
   - Key: `Content-Type`
   - Value: `application/json`
   - ✅ Checkbox checked
4. Add `Prefer` header (optional):
   - Key: `Prefer`
   - Value: `return=representation`
   - ✅ Checkbox checked

#### 4. Params Tab
- **Location**: Click "Params" tab
- **What to do**: ❌ **Nothing** - Leave it empty
- POST doesn't use query parameters

#### 5. Body Tab
- **Location**: Click "Body" tab
- **Step 1**: Click **"raw"** radio button
- **Step 2**: Click dropdown next to "raw" (says "Text")
- **Step 3**: Select **"JSON"** from dropdown
- **Step 4**: Click in the text area below
- **Step 5**: Type or paste your JSON data

**Example for `projects` table**:
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

**Example for `skills` table**:
```json
{
  "name": "Figma",
  "display_order": 5
}
```

**Example for `contact_submissions` table**:
```json
{
  "first_name": "John",
  "last_name": "Doe",
  "email": "john@example.com",
  "phone": "01234567890",
  "subject": "Inquiry about services",
  "status": "New"
}
```

**Example for `home_content` table**:
```json
{
  "section": "home",
  "key": "know_me_title",
  "content_en": "Know Me",
  "content_ar": "اعرفني",
  "display_order": 0
}
```

**Example for `experience` table**:
```json
{
  "type": "education",
  "start_year": "2025",
  "end_year": "2026",
  "institution_en": "Egypt University of Informatics",
  "institution_ar": "جامعة مصر للمعلوماتية",
  "program_en": "Digital Arts & Design – UX/UI",
  "program_ar": "الفنون الرقمية والتصميم – UX/UI",
  "display_order": 0
}
```

#### 6. Send
- Click **"Send"** button
- **Expected**: 201 Created (or 200 OK) with created row data

---

## 🎯 Method 3: PATCH (Update Existing)

### Step-by-Step Setup:

#### 1. Method Dropdown
- **Location**: Top left of request
- **Select**: `PATCH`

#### 2. URL Field
- **Location**: Top center
- **Type exactly** (must include filter):
  ```
  https://kkvepvlkgppzwapbbynh.supabase.co/rest/v1/projects?id=eq.1
  ```
  
  **Other examples**:
  ```
  https://kkvepvlkgppzwapbbynh.supabase.co/rest/v1/projects?slug=eq.egy-air
  https://kkvepvlkgppzwapbbynh.supabase.co/rest/v1/home_content?key=eq.know_me_title&section=eq.home
  https://kkvepvlkgppzwapbbynh.supabase.co/rest/v1/contact_submissions?id=eq.[uuid-here]
  ```
  
  **Important**: Must have `?id=eq.1` or similar filter to specify which row to update!

#### 3. Headers Tab
- **Location**: Click "Headers" tab
- **Add these headers** (all checkboxes checked ✅):

| Key | Value | ✅ Checked |
|-----|-------|------------|
| `apikey` | `sb_publishable_TXDJdOMzyg5RYq3aEYf7JQ_HlukQAuB` | ✅ |
| `Authorization` | `Bearer sb_publishable_TXDJdOMzyg5RYq3aEYf7JQ_HlukQAuB` | ✅ |
| `Content-Type` | `application/json` | ✅ |
| `Prefer` | `return=representation` | ✅ (optional) |

**Same as POST** - all 4 headers needed.

#### 4. Params Tab
- **Location**: Click "Params" tab
- **What to do**: ❌ **Nothing** - Leave it empty
- Use query parameters in URL instead

#### 5. Body Tab
- **Location**: Click "Body" tab
- **Step 1**: Click **"raw"** radio button
- **Step 2**: Select **"JSON"** from dropdown
- **Step 3**: Type JSON with **only fields you want to update**

**Example - Update only title**:
```json
{
  "title": "Updated Project Title"
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

**Example - Update skill name**:
```json
{
  "name": "Figma Pro"
}
```

**Important**: Only include fields you want to change! Don't send all fields.

#### 6. Send
- Click **"Send"** button
- **Expected**: 200 OK with updated row data

---

## 🎯 Method 4: DELETE (Delete Row)

### Step-by-Step Setup:

#### 1. Method Dropdown
- **Location**: Top left of request
- **Select**: `DELETE`

#### 2. URL Field
- **Location**: Top center
- **Type exactly** (must include filter):
  ```
  https://kkvepvlkgppzwapbbynh.supabase.co/rest/v1/projects?id=eq.1
  ```
  
  **Other examples**:
  ```
  https://kkvepvlkgppzwapbbynh.supabase.co/rest/v1/skills?id=eq.5
  https://kkvepvlkgppzwapbbynh.supabase.co/rest/v1/contact_submissions?id=eq.[uuid-here]
  ```
  
  **Important**: Must have `?id=eq.1` or similar filter to specify which row to delete!

#### 3. Headers Tab
- **Location**: Click "Headers" tab
- **Add these headers** (checkboxes checked ✅):

| Key | Value | ✅ Checked |
|-----|-------|------------|
| `apikey` | `sb_publishable_TXDJdOMzyg5RYq3aEYf7JQ_HlukQAuB` | ✅ |
| `Authorization` | `Bearer sb_publishable_TXDJdOMzyg5RYq3aEYf7JQ_HlukQAuB` | ✅ |

**Only 2 headers needed** (no Content-Type, no Prefer)

#### 4. Params Tab
- **Location**: Click "Params" tab
- **What to do**: ❌ **Nothing** - Leave it empty
- Use query parameters in URL instead

#### 5. Body Tab
- **Location**: Click "Body" tab
- **What to do**: ❌ **Nothing** - Leave it as "none"
- DELETE requests don't have a body

#### 6. Send
- Click **"Send"** button
- **Expected**: 204 No Content (or 200 OK)

---

## 📊 Complete Comparison Table

| Method | Method Dropdown | URL | Headers Count | Headers List | Params | Body |
|--------|----------------|-----|---------------|--------------|--------|------|
| **GET** | `GET` | Table name (optional filter) | 2 | apikey, Authorization | Optional | ❌ None |
| **POST** | `POST` | Table name only | 4 | apikey, Authorization, Content-Type, Prefer | ❌ None | ✅ JSON (all fields) |
| **PATCH** | `PATCH` | Table name + filter | 4 | apikey, Authorization, Content-Type, Prefer | ❌ None | ✅ JSON (only fields to update) |
| **DELETE** | `DELETE` | Table name + filter | 2 | apikey, Authorization | ❌ None | ❌ None |

---

## 🎯 Exact Values Reference

### Your Supabase Details:
- **Base URL**: `https://kkvepvlkgppzwapbbynh.supabase.co`
- **API Key**: `sb_publishable_TXDJdOMzyg5RYq3aEYf7JQ_HlukQAuB`

### All Your Tables:
- `projects`
- `skills`
- `experience`
- `home_content`
- `blog_posts`
- `contact_submissions`
- `project_details`
- `gallery_items` (if you have it)

---

## ✅ Quick Checklist for Each Method

### GET Checklist:
- [ ] Method: `GET`
- [ ] URL: `https://kkvepvlkgppzwapbbynh.supabase.co/rest/v1/[TABLE]`
- [ ] Headers: `apikey` ✅, `Authorization` ✅
- [ ] Params: Optional (or add filter in URL)
- [ ] Body: None

### POST Checklist:
- [ ] Method: `POST`
- [ ] URL: `https://kkvepvlkgppzwapbbynh.supabase.co/rest/v1/[TABLE]` (no query params)
- [ ] Headers: `apikey` ✅, `Authorization` ✅, `Content-Type` ✅, `Prefer` ✅
- [ ] Params: None
- [ ] Body: raw → JSON → Add all required fields

### PATCH Checklist:
- [ ] Method: `PATCH`
- [ ] URL: `https://kkvepvlkgppzwapbbynh.supabase.co/rest/v1/[TABLE]?id=eq.1` (with filter)
- [ ] Headers: `apikey` ✅, `Authorization` ✅, `Content-Type` ✅, `Prefer` ✅
- [ ] Params: None
- [ ] Body: raw → JSON → Add only fields to update

### DELETE Checklist:
- [ ] Method: `DELETE`
- [ ] URL: `https://kkvepvlkgppzwapbbynh.supabase.co/rest/v1/[TABLE]?id=eq.1` (with filter)
- [ ] Headers: `apikey` ✅, `Authorization` ✅
- [ ] Params: None
- [ ] Body: None

---

## 🎉 You're All Set!

Now you have exact details for every method! Follow these step-by-step instructions for each request. 🚀

