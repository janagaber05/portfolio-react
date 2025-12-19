# Fix Project ID Type Error (UUID to int8)
## How to Change project_id Column Type

---

## 🔍 Why You're Getting an Error

When changing `project_id` from `uuid` to `int8`, you might get errors because:
1. **Foreign key constraint** - The foreign key relationship needs to be updated
2. **Existing data** - If there's data in the table, it can't be converted
3. **Column constraints** - Other constraints might prevent the change

---

## ✅ Solution: Step-by-Step Fix

### Option 1: If Table is Empty (No Rows Yet)

**Easiest way - if you haven't added any data yet:**

1. **Delete the foreign key first:**
   - Go to `project_details` table
   - Click on `project_id` column
   - Find "Foreign key relationship" section
   - Delete/remove the foreign key
   - Save

2. **Change the column type:**
   - Click on `project_id` column
   - Change type from `uuid` to `int8`
   - Save

3. **Re-add the foreign key:**
   - Click on `project_id` column
   - Add foreign key relationship:
     - Foreign table: `projects`
     - Foreign column: `id`
     - On delete: `Cascade`
   - Save

---

### Option 2: If Table Has Data (Rows Already Added)

**If you already added rows, you need to delete them first:**

1. **Delete all rows:**
   - Go to `project_details` table
   - Select all rows
   - Delete them (or delete the table and recreate it)

2. **Then follow Option 1** (delete foreign key, change type, re-add foreign key)

---

### Option 3: Delete and Recreate Column

**If the above doesn't work:**

1. **Delete the foreign key:**
   - Go to `project_details` table
   - Click on `project_id` column
   - Remove foreign key relationship
   - Save

2. **Delete the column:**
   - Click on `project_id` column
   - Delete the column
   - Save

3. **Recreate the column:**
   - Click "Add column"
   - Column name: `project_id`
   - Type: `int8`
   - Is nullable: ❌ No (unchecked)
   - Is unique: ✅ Yes (checked)
   - Save

4. **Add foreign key:**
   - Click on `project_id` column
   - Add foreign key relationship:
     - Foreign table: `projects`
     - Foreign column: `id`
     - On delete: `Cascade`
   - Save

---

## 📋 Detailed Steps

### Step 1: Remove Foreign Key

1. Go to **Supabase Dashboard** → **Table Editor**
2. Click on **`project_details`** table
3. Click on **`project_id`** column
4. Scroll down to **"Foreign key relationship"** or **"Relationships"** section
5. Find the foreign key to `projects.id`
6. Click **"Delete"** or **"Remove"**
7. **Save**

### Step 2: Change Column Type

1. Still in the `project_id` column settings
2. Find **"Type"** dropdown
3. Change from **`uuid`** to **`int8`**
4. **Save**

**If you get an error here:**
- The column might have data that can't be converted
- Delete all rows first (see Option 2 above)
- Or delete and recreate the column (see Option 3 above)

### Step 3: Re-add Foreign Key

1. Still in the `project_id` column settings
2. Scroll to **"Foreign key relationship"** section
3. Click **"Add relationship"** or **"Add foreign key"**
4. Fill in:
   - **Foreign table:** `projects`
   - **Foreign column:** `id`
   - **On delete:** `Cascade`
5. **Save**

---

## 🚨 Common Errors and Fixes

### Error: "Cannot change column type because of foreign key"

**Fix:**
1. Delete the foreign key first (Step 1 above)
2. Then change the column type (Step 2)
3. Then re-add the foreign key (Step 3)

---

### Error: "Cannot convert uuid to int8"

**Fix:**
- This means you have data in the table
- Delete all rows first
- Then change the column type
- Then add your data again

---

### Error: "Column has constraints"

**Fix:**
1. Remove the unique constraint (if any)
2. Remove the foreign key
3. Change the type
4. Re-add constraints

---

### Error: "Column is referenced"

**Fix:**
- Another table or view might reference this column
- Check if any other tables have foreign keys to `project_details.project_id`
- Remove those first, then change the type

---

## ✅ Quick Checklist

**Before changing type:**
- [ ] Delete all rows in `project_details` table (if any)
- [ ] Remove foreign key from `project_id`
- [ ] Remove any other constraints (if needed)

**Change type:**
- [ ] Change `project_id` from `uuid` to `int8`
- [ ] Save

**After changing type:**
- [ ] Re-add foreign key: `projects.id` (Cascade)
- [ ] Re-add unique constraint (if needed)
- [ ] Test by adding a row with a number (1, 2, 3, etc.)

---

## 🎯 Alternative: Create New Table

**If nothing works, create a new table:**

1. **Create new table:** `project_details_new`
2. **Add all columns** with correct types (`project_id` as `int8`)
3. **Add foreign key**
4. **Copy data** (if any) from old table
5. **Delete old table:** `project_details`
6. **Rename new table:** `project_details_new` → `project_details`

---

## 💡 Best Practice

**To avoid this in the future:**
- Make sure `project_details.project_id` type matches `projects.id` type from the start
- If `projects.id` is `int8`, make `project_details.project_id` `int8` when creating the table
- Always check column types before creating foreign keys

---

## 🚀 Summary

**The issue:** You can't change a column type when it has a foreign key constraint.

**The solution:**
1. Remove foreign key
2. Change column type
3. Re-add foreign key

**If you have data:**
- Delete rows first
- Then change type
- Then add data again

**Try Option 1 first** (if table is empty), then Option 2 or 3 if needed! 🎯

