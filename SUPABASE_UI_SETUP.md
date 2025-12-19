# 🎨 Supabase Setup Using Dashboard UI (No SQL)

Complete step-by-step guide using only the Supabase Dashboard interface.

---

## 🎯 Table 1: `home_content`

### Step 1: Create the Table
1. Go to Supabase Dashboard
2. Click **"Table Editor"** in the left sidebar
3. Click the **"New table"** button (top right, blue button)
4. **Table name**: Type `home_content`
5. Click **"Create table"**

### Step 2: Add Columns One by One

Click **"Add column"** button for each column below:

#### Column 1: `id`
- **Name**: `id`
- **Type**: Select `uuid` from dropdown
- **Is Primary Key**: ✅ Check this box
- **Default value**: Type `gen_random_uuid()`
- **Is Nullable**: ❌ Uncheck (leave empty)
- Click **"Save"**

#### Column 2: `section`
- **Name**: `section`
- **Type**: Select `text` from dropdown
- **Is Nullable**: ❌ Uncheck (leave empty)
- Click **"Save"**

#### Column 3: `key`
- **Name**: `key`
- **Type**: Select `text` from dropdown
- **Is Nullable**: ❌ Uncheck (leave empty)
- Click **"Save"**

#### Column 4: `content_en`
- **Name**: `content_en`
- **Type**: Select `text` from dropdown
- **Is Nullable**: ✅ Leave checked (allow null)
- Click **"Save"**

#### Column 5: `content_ar`
- **Name**: `content_ar`
- **Type**: Select `text` from dropdown
- **Is Nullable**: ✅ Leave checked (allow null)
- Click **"Save"**

#### Column 6: `metadata`
- **Name**: `metadata`
- **Type**: Select `jsonb` from dropdown
- **Is Nullable**: ✅ Leave checked (allow null)
- Click **"Save"**

#### Column 7: `display_order`
- **Name**: `display_order`
- **Type**: Select `int4` from dropdown
- **Is Nullable**: ❌ Uncheck (leave empty)
- Click **"Save"**

#### Column 8: `created_at`
- **Name**: `created_at`
- **Type**: Select `timestamptz` from dropdown
- **Is Nullable**: ❌ Uncheck (leave empty)
- **Default value**: Type `now()`
- Click **"Save"**

#### Column 9: `updated_at`
- **Name**: `updated_at`
- **Type**: Select `timestamptz` from dropdown
- **Is Nullable**: ❌ Uncheck (leave empty)
- **Default value**: Type `now()`
- Click **"Save"**

### Step 3: Add Unique Constraint
1. Click on the `home_content` table name (in the left sidebar)
2. Click the **"Constraints"** tab (top of the table view)
3. Click **"Add constraint"**
4. **Constraint name**: `home_content_section_key_unique`
5. **Type**: Select `UNIQUE` from dropdown
6. **Columns**: Select both `section` and `key` (hold Ctrl/Cmd to select multiple)
7. Click **"Save"**

### Step 4: Enable RLS (Row Level Security)
1. Click **"Authentication"** in the left sidebar
2. Click **"Policies"** (under Authentication)
3. Find `home_content` in the table list
4. If you see **"RLS is disabled"**, click the toggle to **Enable RLS**
5. Click **"New policy"** button
6. **Policy name**: `Allow public read`
7. **Allowed operation**: Select `SELECT` from dropdown
8. **Target roles**: Type `public` or select from dropdown
9. **USING expression**: Type `true`
10. Click **"Save"**

✅ **Table 1 Complete!**

---

## 🎯 Table 2: `skills`

### Step 1: Create the Table
1. In Table Editor, click **"New table"** button
2. **Table name**: `skills`
3. Click **"Create table"**

### Step 2: Add Columns

#### Column 1: `id`
- **Name**: `id`
- **Type**: `uuid`
- **Is Primary Key**: ✅ Check
- **Default value**: `gen_random_uuid()`
- **Is Nullable**: ❌ Uncheck
- Click **"Save"**

#### Column 2: `name`
- **Name**: `name`
- **Type**: `text`
- **Is Nullable**: ❌ Uncheck
- Click **"Save"**

#### Column 3: `name_ar`
- **Name**: `name_ar`
- **Type**: `text`
- **Is Nullable**: ✅ Leave checked
- Click **"Save"**

#### Column 4: `icon_type`
- **Name**: `icon_type`
- **Type**: `text`
- **Is Nullable**: ✅ Leave checked
- Click **"Save"**

#### Column 5: `short_name`
- **Name**: `short_name`
- **Type**: `text`
- **Is Nullable**: ✅ Leave checked
- Click **"Save"**

#### Column 6: `category`
- **Name**: `category`
- **Type**: `text`
- **Is Nullable**: ✅ Leave checked
- Click **"Save"**

#### Column 7: `proficiency`
- **Name**: `proficiency`
- **Type**: `int4`
- **Is Nullable**: ✅ Leave checked
- Click **"Save"**

#### Column 8: `display_order`
- **Name**: `display_order`
- **Type**: `int4`
- **Is Nullable**: ❌ Uncheck
- Click **"Save"**

#### Column 9: `created_at`
- **Name**: `created_at`
- **Type**: `timestamptz`
- **Is Nullable**: ❌ Uncheck
- **Default value**: `now()`
- Click **"Save"**

#### Column 10: `updated_at`
- **Name**: `updated_at`
- **Type**: `timestamptz`
- **Is Nullable**: ❌ Uncheck
- **Default value**: `now()`
- Click **"Save"**

### Step 3: Enable RLS
1. Go to **Authentication** → **Policies**
2. Find `skills` table
3. Enable RLS (toggle switch)
4. Click **"New policy"**
5. **Policy name**: `Allow public read`
6. **Allowed operation**: `SELECT`
7. **Target roles**: `public`
8. **USING expression**: `true`
9. Click **"Save"**

✅ **Table 2 Complete!**

---

## 🎯 Table 3: `experience`

### Step 1: Create the Table
1. In Table Editor, click **"New table"**
2. **Table name**: `experience`
3. Click **"Create table"**

### Step 2: Add Columns

#### Column 1: `id`
- **Name**: `id`
- **Type**: `uuid`
- **Is Primary Key**: ✅ Check
- **Default value**: `gen_random_uuid()`
- **Is Nullable**: ❌ Uncheck
- Click **"Save"**

#### Column 2: `type`
- **Name**: `type`
- **Type**: `text`
- **Is Nullable**: ❌ Uncheck
- Click **"Save"**

#### Column 3: `start_year`
- **Name**: `start_year`
- **Type**: `text`
- **Is Nullable**: ❌ Uncheck
- Click **"Save"**

#### Column 4: `end_year`
- **Name**: `end_year`
- **Type**: `text`
- **Is Nullable**: ✅ Leave checked
- Click **"Save"**

#### Column 5: `institution`
- **Name**: `institution`
- **Type**: `text`
- **Is Nullable**: ❌ Uncheck
- Click **"Save"**

#### Column 6: `title`
- **Name**: `title`
- **Type**: `text`
- **Is Nullable**: ❌ Uncheck
- Click **"Save"**

#### Column 7: `description`
- **Name**: `description`
- **Type**: `text`
- **Is Nullable**: ✅ Leave checked
- Click **"Save"**

#### Column 8: `display_order`
- **Name**: `display_order`
- **Type**: `int4`
- **Is Nullable**: ❌ Uncheck
- Click **"Save"**

#### Column 9: `created_at`
- **Name**: `created_at`
- **Type**: `timestamptz`
- **Is Nullable**: ❌ Uncheck
- **Default value**: `now()`
- Click **"Save"**

#### Column 10: `updated_at`
- **Name**: `updated_at`
- **Type**: `timestamptz`
- **Is Nullable**: ❌ Uncheck
- **Default value**: `now()`
- Click **"Save"**

### Step 3: Enable RLS
1. Go to **Authentication** → **Policies**
2. Find `experience` table
3. Enable RLS (toggle switch)
4. Click **"New policy"**
5. **Policy name**: `Allow public read`
6. **Allowed operation**: `SELECT`
7. **Target roles**: `public`
8. **USING expression**: `true`
9. Click **"Save"**

✅ **Table 3 Complete!**

---

## ✅ Final Verification

### Check All Tables Exist:
1. Go to **Table Editor**
2. You should see:
   - ✅ `home_content`
   - ✅ `skills`
   - ✅ `experience`

### Test RLS is Working:
1. Open Postman
2. **Method**: `GET`
3. **URL**: `https://kkvepvlkgppzwapbbynh.supabase.co/rest/v1/home_content`
4. **Headers**:
   ```
   apikey: YOUR_SUPABASE_ANON_KEY
   Authorization: Bearer YOUR_SUPABASE_ANON_KEY
   ```
5. Click **"Send"**
6. **Expected**: Should return `[]` (empty array, no error)
7. If you get an error, check RLS policies again

---

## 📝 Quick Reference: Column Types

When selecting type from dropdown, look for:
- **`text`** - For text strings
- **`uuid`** - For unique IDs
- **`int4`** - For integers (numbers)
- **`jsonb`** - For JSON data
- **`timestamptz`** - For dates/times
- **`bool`** - For true/false (if needed)

---

## 🎯 Next Steps

Once all 3 tables are created:
1. ✅ All tables verified
2. ✅ All RLS policies set
3. 📝 Ready to add data!
4. 📝 Use `ALL_SECTIONS_POSTMAN_DATA.md` to add rows

---

## 🐛 Troubleshooting

### "Column type not found"
- Make sure you're selecting from the dropdown, not typing
- Common types: `text`, `uuid`, `int4`, `jsonb`, `timestamptz`

### "Default value error"
- For `uuid`: Use `gen_random_uuid()` (exactly as shown)
- For `timestamptz`: Use `now()` (exactly as shown)
- Make sure no extra spaces

### "RLS policy not working"
- Make sure RLS toggle is ON (green/enabled)
- Check USING expression is exactly `true` (lowercase)
- Verify target role is `public`

### "Cannot find table"
- Refresh the page
- Check you're in the correct project
- Look in Table Editor sidebar

---

## 🚀 You're Done!

After completing all 3 tables, you're ready to add data via Postman! 🎉

