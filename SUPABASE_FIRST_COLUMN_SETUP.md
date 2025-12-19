# Setting Up the First Column (Primary Key) in Supabase

## The `id` Column - Step by Step

Every table needs an `id` column as the **first column** and **Primary Key**. Here's exactly how to set it up:

---

## 🎯 Step-by-Step: Creating the `id` Column

### 1. When you create a new table:

1. Go to **Table Editor** → Click **"New table"**
2. **Table name**: Enter your table name (e.g., `projects`)
3. **The FIRST thing you do**: Add the `id` column

### 2. Click "Add column" and fill in:

```
┌─────────────────────────────────────────────────────┐
│              ADD COLUMN FORM                        │
├─────────────────────────────────────────────────────┤
│                                                     │
│  Column name: [id]                                  │
│                                                     │
│  Type: [uuid ▼]                                     │
│    (Select "uuid" from dropdown)                    │
│                                                     │
│  Default value: [gen_random_uuid()]                │
│    (Type exactly: gen_random_uuid()                 │
│     without quotes)                                 │
│                                                     │
│  ☑ Is nullable (UNCHECK THIS - leave empty)        │
│     ❌ Do NOT check this box                        │
│                                                     │
│  ☑ Is unique (CHECK THIS)                           │
│     ✅ Check this box                               │
│                                                     │
│  ☑ Is primary key (CHECK THIS)                     │
│     ✅ Check this box                               │
│                                                     │
│  [Save]                                             │
└─────────────────────────────────────────────────────┘
```

### 3. What it looks like in Supabase Dashboard:

```
Column Configuration:
┌──────────────────────────────────────────────┐
│ Column name: id                              │
│ Type: uuid                                   │
│ Default value: gen_random_uuid()             │
│                                              │
│ ☐ Is nullable                               │
│ ☑ Is unique                                  │
│ ☑ Is primary key                             │
└──────────────────────────────────────────────┘
```

---

## 📋 Exact Settings for `id` Column in Each Table

### For ALL 5 Tables:

| Setting | Value |
|--------|-------|
| **Column name** | `id` |
| **Type** | `uuid` |
| **Default value** | `gen_random_uuid()` |
| **Is nullable** | ❌ **NO** (unchecked) |
| **Is unique** | ✅ **YES** (checked) |
| **Is primary key** | ✅ **YES** (checked) |

---

## 🎨 Visual: What You See in Supabase Dashboard

### Before Adding Column:
```
Table: projects
┌─────────────────────────────────────┐
│  No columns yet                     │
│                                     │
│  [+ Add column]  [Save table]      │
└─────────────────────────────────────┘
```

### After Adding `id` Column:
```
Table: projects
┌─────────────────────────────────────────────────────┐
│  Columns (1)                                        │
├─────────────────────────────────────────────────────┤
│  🔑 id (uuid) [Primary Key] [Unique]               │
│     Default: gen_random_uuid()                      │
│     Nullable: No                                     │
│                                                     │
│  [+ Add column]  [Save table]                      │
└─────────────────────────────────────────────────────┘
```

---

## ⚠️ Important Notes

### 1. **Default Value**
- Type exactly: `gen_random_uuid()`
- **No quotes** around it
- This automatically generates a unique ID for each row

### 2. **Primary Key**
- ✅ **Must be checked**
- Only ONE column per table can be primary key
- This is always the `id` column

### 3. **Unique**
- ✅ **Must be checked**
- Ensures no duplicate IDs

### 4. **Nullable**
- ❌ **Must be unchecked** (NOT nullable)
- Every row MUST have an ID

---

## 🔄 Example: Creating `projects` Table

### Step 1: Create Table
```
Table name: projects
[Create table]
```

### Step 2: Add `id` Column (FIRST!)
```
Column name: id
Type: uuid
Default value: gen_random_uuid()
☐ Is nullable
☑ Is unique
☑ Is primary key
[Save]
```

### Step 3: Add Other Columns
Now add the rest of the columns (slug, category, title_en, etc.)

---

## 🎯 Quick Checklist for `id` Column

When creating the `id` column, make sure:

- [ ] Column name is exactly: `id` (lowercase)
- [ ] Type is: `uuid`
- [ ] Default value is: `gen_random_uuid()` (no quotes)
- [ ] **Is nullable** is **UNCHECKED** ❌
- [ ] **Is unique** is **CHECKED** ✅
- [ ] **Is primary key** is **CHECKED** ✅

---

## 📊 What Happens When You Save

After you save the `id` column, Supabase will:

1. ✅ Create the column
2. ✅ Set it as Primary Key
3. ✅ Make it Unique
4. ✅ Auto-generate IDs for new rows

### Example: When you insert a row

```
You insert:
┌─────────────────────────────────────┐
│ slug: "egy-air"                     │
│ title_en: "Egy Air"                 │
│ ...                                 │
└─────────────────────────────────────┘

Supabase automatically adds:
┌─────────────────────────────────────┐
│ id: "a1b2c3d4-e5f6-7890-abcd-ef1234"│  ← Auto-generated!
│ slug: "egy-air"                      │
│ title_en: "Egy Air"                  │
│ ...                                  │
└─────────────────────────────────────┘
```

---

## 🔍 How to Verify It's Set Up Correctly

After creating the `id` column:

1. Look at your table in Table Editor
2. You should see:
   - 🔑 Icon next to `id` (indicates Primary Key)
   - "Primary Key" label
   - "Unique" label
   - Default value showing: `gen_random_uuid()`

3. Try adding a test row:
   - Don't fill in the `id` field
   - Supabase will auto-generate it
   - You'll see a UUID like: `550e8400-e29b-41d4-a716-446655440000`

---

## 💡 Pro Tip

**Always create the `id` column FIRST** before adding any other columns. This ensures:
- The table structure is correct from the start
- Foreign keys can reference it properly
- No issues with relationships

---

## 🎬 Summary

The `id` column is the **foundation** of every table:

```
id (uuid, Primary Key, Unique, NOT NULL, Default: gen_random_uuid())
```

Once this is set up correctly, you can add all the other columns! 🚀

