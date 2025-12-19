# Create Contact Submissions Table - Step by Step
## Next Table After Blog Posts

---

## 🎯 Table: `contact_submissions`

**Total Columns:** 11 columns

**No Foreign Keys:** This table is standalone (simple!)

**Purpose:** Stores contact form submissions from your website

---

## 📝 Step 1: Create the Table

1. Go to **Table Editor** in Supabase Dashboard
2. Click **"New table"** button
3. Table name: `contact_submissions`
4. Click **"Save"** or **"Create table"**

---

## 📋 Step 2: Add All Columns

Add these columns one by one (click "Add column" for each):

### Column 1: `id` ⭐ FIRST COLUMN
```
Column name: id
Type: uuid
Default value: gen_random_uuid()
Is nullable: ❌ No (unchecked)
Is unique: ✅ Yes (checked)
Is primary key: ✅ Yes (checked)
```

### Column 2: `first_name`
```
Column name: first_name
Type: text
Default value: (leave empty)
Is nullable: ❌ No (unchecked)
```

### Column 3: `last_name`
```
Column name: last_name
Type: text
Default value: (leave empty)
Is nullable: ❌ No (unchecked)
```

### Column 4: `email`
```
Column name: email
Type: text
Default value: (leave empty)
Is nullable: ❌ No (unchecked)
```

### Column 5: `phone`
```
Column name: phone
Type: text
Default value: (leave empty)
Is nullable: ✅ Yes (checked)
```

### Column 6: `message`
```
Column name: message
Type: text
Default value: (leave empty)
Is nullable: ❌ No (unchecked)
```

### Column 7: `status`
```
Column name: status
Type: text
Default value: 'new'
Is nullable: ❌ No (unchecked)
```

**Important:** After creating this column, add a check constraint:
- Constraint name: `status_check`
- Expression: `status IN ('new', 'read', 'replied', 'archived')`

### Column 8: `admin_notes`
```
Column name: admin_notes
Type: text
Default value: (leave empty)
Is nullable: ✅ Yes (checked)
```

### Column 9: `created_at`
```
Column name: created_at
Type: timestamptz
Default value: now()
Is nullable: ❌ No (unchecked)
```

### Column 10: `read_at`
```
Column name: read_at
Type: timestamptz
Default value: (leave empty)
Is nullable: ✅ Yes (checked)
```

### Column 11: `replied_at`
```
Column name: replied_at
Type: timestamptz
Default value: (leave empty)
Is nullable: ✅ Yes (checked)
```

---

## 📊 Visual: Complete Table Structure

```
┌─────────────────────────────────────────────────────────────────┐
│                TABLE: contact_submissions                       │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  ┌──────────────────────┬──────────────┬──────────────┬───────┐ │
│  │ Column Name           │ Type         │ Default      │ Null?│ │
│  ├──────────────────────┼──────────────┼──────────────┼───────┤ │
│  │ id                    │ uuid         │ gen_random_  │ ❌ No│ │
│  │                       │              │ uuid()       │       │ │
│  ├──────────────────────┼──────────────┼──────────────┼───────┤ │
│  │ first_name            │ text         │ (empty)      │ ❌ No│ │
│  ├──────────────────────┼──────────────┼──────────────┼───────┤ │
│  │ last_name             │ text         │ (empty)      │ ❌ No│ │
│  ├──────────────────────┼──────────────┼──────────────┼───────┤ │
│  │ email                 │ text         │ (empty)      │ ❌ No│ │
│  ├──────────────────────┼──────────────┼──────────────┼───────┤ │
│  │ phone                 │ text         │ (empty)      │ ✅ Yes│ │
│  ├──────────────────────┼──────────────┼──────────────┼───────┤ │
│  │ message               │ text         │ (empty)      │ ❌ No│ │
│  ├──────────────────────┼──────────────┼──────────────┼───────┤ │
│  │ status                │ text         │ 'new'        │ ❌ No│ │
│  │                       │              │              │       │ │
│  │                       │ [CHECK: status IN ('new', 'read', │ │
│  │                       │              'replied', 'archived')]│ │
│  ├──────────────────────┼──────────────┼──────────────┼───────┤ │
│  │ admin_notes           │ text         │ (empty)      │ ✅ Yes│ │
│  ├──────────────────────┼──────────────┼──────────────┼───────┤ │
│  │ created_at            │ timestamptz  │ now()        │ ❌ No│ │
│  ├──────────────────────┼──────────────┼──────────────┼───────┤ │
│  │ read_at               │ timestamptz  │ (empty)      │ ✅ Yes│ │
│  ├──────────────────────┼──────────────┼──────────────┼───────┤ │
│  │ replied_at            │ timestamptz  │ (empty)      │ ✅ Yes│ │
│  └──────────────────────┴──────────────┴──────────────┴───────┘ │
│                                                                  │
│  🔑 Primary Key: id                                              │
│  ✅ Unique: id                                                   │
│  🔗 Foreign Keys: None                                           │
└─────────────────────────────────────────────────────────────────┘
```

---

## ✅ Step-by-Step Checklist

### Create Table:
- [ ] Go to Table Editor
- [ ] Click "New table"
- [ ] Name: `contact_submissions`
- [ ] Save

### Add Columns (11 total):
- [ ] `id` - uuid, primary key, unique
- [ ] `first_name` - text, NOT nullable
- [ ] `last_name` - text, NOT nullable
- [ ] `email` - text, NOT nullable
- [ ] `phone` - text, nullable
- [ ] `message` - text, NOT nullable
- [ ] `status` - text, default: 'new', NOT nullable
  - [ ] Add check constraint: `status IN ('new', 'read', 'replied', 'archived')`
- [ ] `admin_notes` - text, nullable
- [ ] `created_at` - timestamptz, default: now()
- [ ] `read_at` - timestamptz, nullable
- [ ] `replied_at` - timestamptz, nullable

### Enable RLS:
- [ ] Click on `contact_submissions` table
- [ ] Click "..." menu
- [ ] Click "Enable RLS"

### Add RLS Policies:
- [ ] Policy 1: "Public can submit contact forms"
  - Operation: INSERT
  - Roles: public
  - WITH CHECK: `true`
- [ ] Policy 2: "Admins can manage contact submissions"
  - Operation: ALL (or SELECT, UPDATE, DELETE)
  - Roles: authenticated
  - USING: `(auth.jwt() ->> 'user_metadata')::jsonb ->> 'role' = 'admin'`

---

## 📝 How This Table Works

### When Someone Submits Contact Form:

1. User fills out contact form on your website
2. Form data is sent to Supabase
3. A new row is automatically created in `contact_submissions` table
4. You can see it in Supabase Dashboard

### Example Row (Auto-created when form is submitted):

```
first_name: "John"
last_name: "Doe"
email: "john@example.com"
phone: "1234567890"
message: "I'm interested in working with you on a project."
status: "new" (automatically set)
created_at: (automatically set to current time)
```

### You Don't Need to Add Rows Manually:

- ✅ Rows are created automatically when users submit the contact form
- ✅ You just view and manage them in Supabase
- ✅ You can update `status` to track: new → read → replied → archived

---

## 🎯 Special: Status Column Check Constraint

After creating the `status` column:

1. Click on the `status` column
2. Look for "Check constraints" section
3. Click "Add check" or "Add constraint"
4. Name: `status_check`
5. Expression: `status IN ('new', 'read', 'replied', 'archived')`
6. Save

This ensures `status` can only be one of these 4 values.

---

## 📋 Quick Summary

**Table Name:** `contact_submissions`

**Total Columns:** 11

**Required Columns:**
- `id` (primary key)
- `first_name` (required)
- `last_name` (required)
- `email` (required)
- `message` (required)
- `status` (required, default: 'new')
- `created_at` (auto)

**Optional Columns:**
- `phone` (optional)
- `admin_notes` (for your private notes)
- `read_at` (when you read it)
- `replied_at` (when you replied)

**No Foreign Keys:** Standalone table!

---

## 🚀 After Creating This Table

Once `contact_submissions` is created:
1. ✅ Contact form on your website will work
2. ✅ Submissions will be saved automatically
3. ✅ You can view them in Supabase Dashboard
4. ✅ Next table: `gallery_items` (for project galleries)
5. ✅ Finally: `project_details` (for detailed project pages)

---

## 💡 Important Notes

1. **You don't add rows manually** - they're created when users submit the form
2. **Status values:** Only 'new', 'read', 'replied', or 'archived'
3. **Public can INSERT:** Anyone can submit the form
4. **Only admins can READ/UPDATE:** Only you can see and manage submissions

**This table is simple - just create it and it will work automatically!** 🎯
