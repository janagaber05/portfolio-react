# How to Fill the "Add Column" Form
## Step-by-Step Guide for Adding `slug` Column

---

## 📝 Form Fields - What to Fill

### 1. **Name** Field

**What to write:** `slug`

**Current value:** `slug` ✅ (already filled correctly)

**Notes:**
- Use lowercase
- No spaces
- No special characters
- Just type: `slug`

---

### 2. **Description** Field (Optional)

**What to write:** (Optional - can leave empty)

**OR** you can add:
```
URL-friendly identifier for project routing
```

**OR:**
```
Unique slug for project URLs (e.g., egy-air, sonic-game)
```

**Notes:**
- This is optional
- Helps you remember what the column is for
- Can leave it empty if you want

---

### 3. **Type** Dropdown

**What to select:** `text`

**Steps:**
1. Click on the dropdown that says "Choose a column type..."
2. Scroll down or type "text"
3. Select **"text"** from the list

**Available options you'll see:**
- `text` ← **Select this one**
- `int4`
- `int8`
- `bool`
- `uuid`
- `timestamptz`
- `date`
- `json`
- `jsonb`
- etc.

**Notes:**
- Must select `text` type
- This allows storing text/string values

---

### 4. **Define as Array** Checkbox

**What to do:** ❌ **Leave it UNCHECKED**

**Current state:** Unchecked ✅ (correct)

**Notes:**
- Do NOT check this box
- We want a single text value, not an array
- Leave it as is

---

### 5. **Default Value** Field

**What to write:** Leave it as `NULL` OR leave it empty

**Current value:** `NULL` ✅ (this is fine)

**Options:**
- Keep `NULL` (recommended)
- OR delete it and leave empty

**Notes:**
- `NULL` means no default value
- Users must provide a value when creating rows
- This is correct for `slug` column

---

### 6. **Is Nullable** (if visible)

**What to do:** ❌ **Make sure it's UNCHECKED** (NOT nullable)

**Look for:**
- A checkbox that says "Is nullable" or "Allow NULL"
- Make sure it's **UNCHECKED**

**Why:**
- `slug` is required - every project must have one
- Cannot be empty

---

### 7. **Is Unique** (if visible)

**What to do:** ✅ **Make sure it's CHECKED** (unique)

**Look for:**
- A checkbox that says "Is unique" or "Unique constraint"
- Make sure it's **CHECKED**

**Why:**
- Each project must have a unique slug
- No two projects can have the same slug
- Prevents duplicate URLs

---

### 8. **Foreign Keys** Section

**What to do:** ❌ **Leave it empty** (don't add anything)

**Notes:**
- `slug` doesn't reference another table
- Skip this section
- Just leave it as is

---

## ✅ Complete Form Summary

Here's what your form should look like:

```
┌─────────────────────────────────────────────┐
│ Add new column to projects                  │
├─────────────────────────────────────────────┤
│                                             │
│ General:                                    │
│   Name: slug                                │
│   Description: (empty or add description)   │
│                                             │
│ Data Type:                                  │
│   Type: text ▼ [Select "text"]              │
│   ☐ Define as Array (UNCHECKED)            │
│   Default Value: NULL                        │
│                                             │
│ Constraints (if visible):                   │
│   ☐ Is nullable (UNCHECKED - NOT nullable) │
│   ☑ Is unique (CHECKED - must be unique)   │
│                                             │
│ Foreign Keys:                               │
│   (Leave empty)                             │
│                                             │
│ [Save] or [Add Column]                      │
└─────────────────────────────────────────────┘
```

---

## 🎯 Step-by-Step Actions

1. ✅ **Name:** Already filled with `slug` - looks good!

2. ✅ **Description:** Leave empty OR add a note (optional)

3. ⚠️ **Type:** Click dropdown → Select **"text"**

4. ✅ **Define as Array:** Leave unchecked (already correct)

5. ✅ **Default Value:** Keep `NULL` or leave empty (already correct)

6. ⚠️ **Is Nullable:** Make sure it's **UNCHECKED** (required field)

7. ⚠️ **Is Unique:** Make sure it's **CHECKED** (must be unique)

8. ✅ **Foreign Keys:** Leave empty (no foreign key needed)

9. ✅ Click **"Save"** or **"Add Column"** button

---

## 🔍 What to Look For

### After Clicking "Save", You Should See:

1. ✅ Column appears in your table
2. ✅ Shows as `slug (text)`
3. ✅ Has a "Unique" badge/icon
4. ✅ Shows as "NOT NULL" or required

### If You See Errors:

- **"Column name already exists"** → Column already exists, skip this
- **"Invalid type"** → Make sure you selected `text`
- **"Unique constraint failed"** → This is normal if you have existing data - you'll need to fill in `slug` values for existing rows

---

## 📋 Quick Checklist

Before clicking "Save", verify:

- [ ] Name: `slug` (lowercase)
- [ ] Type: `text` (selected from dropdown)
- [ ] Define as Array: ❌ Unchecked
- [ ] Default Value: `NULL` or empty
- [ ] Is Nullable: ❌ Unchecked (NOT nullable)
- [ ] Is Unique: ✅ Checked (unique)
- [ ] Foreign Keys: Empty

---

## 🎬 Next Steps After Adding Column

Once you save the `slug` column:

1. The column will appear in your table
2. You'll need to fill in `slug` values for existing rows
3. For each project, add a slug like:
   - "Egy Air" → `slug: "egy-air"`
   - "Sonic Game" → `slug: "sonic-game"`
   - etc.

---

## 💡 Tips

1. **Type Selection:**
   - If you don't see "text" in the dropdown, try typing "text" to filter
   - Make sure it's `text` not `text[]` (array)

2. **Unique Constraint:**
   - If you can't check "Is unique", you might need to add it later
   - Go to column settings after creating it

3. **Nullable:**
   - If the form doesn't show "Is nullable", it might be in a different section
   - Look for "Constraints" or "Advanced" section

---

## 🚀 Ready to Save!

Once all fields are filled correctly:
- Click **"Save"** or **"Add Column"** button
- The column will be added to your table
- You can then add the other required columns (`is_published`, `display_order`)

That's it! Your `slug` column is ready! 🎉

