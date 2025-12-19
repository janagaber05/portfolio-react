# 📧 Contact Submissions - Complete Setup Guide

Complete guide for setting up and managing contact form submissions in Supabase.

---

## 🎯 Step 1: Create `contact_submissions` Table

### Via Supabase Dashboard:

1. **Go to Table Editor**:
   - Open Supabase Dashboard
   - Click **"Table Editor"** (left sidebar)
   - Click **"New table"** button
   - **Table name**: `contact_submissions`
   - Click **"Create table"**

2. **Add Columns**:

#### Column 1: `id`
- **Name**: `id`
- **Type**: `uuid`
- **Is Primary Key**: ✅ Check
- **Default value**: `gen_random_uuid()`
- **Is Nullable**: ❌ Uncheck
- Click **"Save"**

#### Column 2: `first_name`
- **Name**: `first_name`
- **Type**: `text`
- **Is Nullable**: ❌ Uncheck
- Click **"Save"**

#### Column 3: `last_name`
- **Name**: `last_name`
- **Type**: `text`
- **Is Nullable**: ❌ Uncheck
- Click **"Save"**

#### Column 4: `email`
- **Name**: `email`
- **Type**: `text`
- **Is Nullable**: ❌ Uncheck
- Click **"Save"**

#### Column 5: `phone`
- **Name**: `phone`
- **Type**: `text`
- **Is Nullable**: ✅ Leave checked (optional)
- Click **"Save"**

#### Column 6: `subject` or `request`
- **Name**: `subject` (or `request`, `message`)
- **Type**: `text`
- **Is Nullable**: ✅ Leave checked (optional)
- Click **"Save"**

#### Column 7: `status`
- **Name**: `status`
- **Type**: `text`
- **Is Nullable**: ✅ Leave checked
- **Default value**: `"New"` (optional)
- Click **"Save"**

#### Column 8: `created_at`
- **Name**: `created_at`
- **Type**: `timestamptz`
- **Is Nullable**: ❌ Uncheck
- **Default value**: `now()`
- Click **"Save"**

#### Column 9: `updated_at`
- **Name**: `updated_at`
- **Type**: `timestamptz`
- **Is Nullable**: ❌ Uncheck
- **Default value**: `now()`
- Click **"Save"**

3. **Enable RLS**:
   - Go to **Authentication** → **Policies**
   - Find `contact_submissions` table
   - Enable RLS (toggle switch)
   - Add policy for INSERT (to allow form submissions):
     - **Policy name**: `Allow public insert`
     - **Allowed operation**: `INSERT`
     - **Target roles**: `public`
     - **WITH CHECK expression**: `true`
     - Click **"Save"**
   - Add policy for SELECT (to view submissions - optional, for admin):
     - **Policy name**: `Allow authenticated read`
     - **Allowed operation**: `SELECT`
     - **Target roles**: `authenticated` (or `public` if you want anyone to read)
     - **USING expression**: `true`
     - Click **"Save"**

---

## 📋 Table Structure Summary

### Required Columns:
| Column Name | Type | Nullable | Default | Description |
|------------|------|----------|---------|-------------|
| `id` | `uuid` | ❌ No | `gen_random_uuid()` | Primary key |
| `first_name` | `text` | ❌ No | - | First name |
| `last_name` | `text` | ❌ No | - | Last name |
| `email` | `text` | ❌ No | - | Email address |
| `phone` | `text` | ✅ Yes | - | Phone number (optional) |
| `subject` | `text` | ✅ Yes | - | Message/subject (optional) |
| `status` | `text` | ✅ Yes | `"New"` | Status: "New", "Read", etc. |
| `created_at` | `timestamptz` | ❌ No | `now()` | Submission date |
| `updated_at` | `timestamptz` | ❌ No | `now()` | Last update |

---

## 🎯 Step 2: Test Contact Submission (Example Row)

### Example Submission Row:

**Values to enter (for testing):**
- `first_name`: `Salma`
- `last_name`: `Ahmed`
- `email`: `SalmaAhmed12@mail.com`
- `phone`: `01141120002` (optional)
- `subject`: `Chance To Work`
- `status`: `New`
- `created_at`: (auto-generated)
- `updated_at`: (auto-generated)

**Postman JSON (for testing):**
```json
{
  "first_name": "Salma",
  "last_name": "Ahmed",
  "email": "SalmaAhmed12@mail.com",
  "phone": "01141120002",
  "subject": "Chance To Work",
  "status": "New"
}
```

---

## 📝 How Contact Submissions Work

### Automatic (When Form is Submitted):
When a user fills out your contact form and clicks "Send", your React app should:
1. Collect form data (firstName, lastName, email, phone, request)
2. Send POST request to Supabase
3. Create a new row in `contact_submissions` table
4. Show success message to user

### Manual (For Testing):
You can manually add test submissions via:
- Supabase Dashboard (Insert row)
- Postman (POST request)

---

## 🎯 Example: Complete Contact Submission Data

### Row 1: Example Submission
```json
{
  "first_name": "Salma",
  "last_name": "Ahmed",
  "email": "SalmaAhmed12@mail.com",
  "phone": "01141120002",
  "subject": "Chance To Work",
  "status": "New"
}
```

### Row 2: Another Example
```json
{
  "first_name": "Ahmed",
  "last_name": "Mohamed",
  "email": "ahmed.mohamed@example.com",
  "phone": "01234567890",
  "subject": "Project Inquiry",
  "status": "New"
}
```

---

## 🔍 Viewing Contact Submissions

### Via Supabase Dashboard:
1. Go to **Table Editor** → `contact_submissions` table
2. You'll see all submissions listed
3. Click on a row to view details
4. You can edit `status` to mark as "Read" or "Replied"

### Via Postman (GET Request):
1. **Method**: `GET`
2. **URL**: `https://kkvepvlkgppzwapbbynh.supabase.co/rest/v1/contact_submissions`
3. **Headers**:
   ```
   apikey: YOUR_SUPABASE_ANON_KEY
   Authorization: Bearer YOUR_SUPABASE_ANON_KEY
   ```
4. **Query Parameters** (optional):
   - `?status=eq.New` - Get only new submissions
   - `?order=created_at.desc` - Order by newest first
   - `?limit=10` - Limit results

---

## 🎯 Updating Submission Status

### Mark as "Read":
**Via Dashboard:**
- Click on submission row
- Change `status` from `"New"` to `"Read"`
- Click **"Save"**

**Via Postman (PATCH):**
```json
{
  "status": "Read"
}
```
**URL**: `https://kkvepvlkgppzwapbbynh.supabase.co/rest/v1/contact_submissions?id=eq.[submission-id]`

---

## 📋 Column Name Variations

Your table might use different column names. Common variations:

### Option 1: Snake Case (Recommended)
- `first_name`
- `last_name`
- `phone`
- `email`
- `subject` (or `message`, `request`)

### Option 2: Camel Case
- `firstName`
- `lastName`
- `phone`
- `email`
- `subject`

### Option 3: Different Names
- `name` (instead of first_name + last_name)
- `message` (instead of subject)
- `contact_message` (instead of subject)

**Important**: Make sure your React form sends data with the same column names as your table!

---

## 🎯 React Form Integration

### Example: How to Submit from React Form

```javascript
const handleSubmit = async (e) => {
  e.preventDefault();
  
  const formData = {
    first_name: e.target.firstName.value,
    last_name: e.target.lastName.value,
    email: e.target.email.value,
    phone: e.target.phone.value,
    subject: e.target.request.value,
    status: "New"
  };

  const { data, error } = await supabase
    .from('contact_submissions')
    .insert([formData]);

  if (error) {
    console.error('Error:', error);
    alert('Failed to send message');
  } else {
    alert('Message sent successfully!');
    e.target.reset();
  }
};
```

---

## ✅ Checklist

### Table Setup:
- [ ] `contact_submissions` table created
- [ ] All columns added (`id`, `first_name`, `last_name`, `email`, `phone`, `subject`, `status`, `created_at`, `updated_at`)
- [ ] RLS enabled
- [ ] INSERT policy added (for public form submissions)
- [ ] SELECT policy added (for viewing submissions)

### Testing:
- [ ] Test submission via Postman
- [ ] Test submission via React form
- [ ] Verify submissions appear in table
- [ ] Test updating status

---

## 🎯 Quick Reference

### Table Name:
`contact_submissions`

### Required Columns:
- `id` (uuid, primary key)
- `first_name` (text)
- `last_name` (text)
- `email` (text)
- `phone` (text, optional)
- `subject` (text, optional)
- `status` (text, optional, default: "New")
- `created_at` (timestamptz)
- `updated_at` (timestamptz)

### RLS Policies Needed:
1. **INSERT** - Allow public to submit (for contact form)
2. **SELECT** - Allow viewing (for admin/dashboard)

---

## 🚀 Next Steps

1. ✅ Table created
2. ✅ RLS policies set
3. 📝 Connect your React contact form to submit to this table
4. 📝 Create admin page to view submissions (optional)
5. 📝 Set up email notifications (optional)

Good luck! 🎉

