# Fix "Failed to Run SQL" Error
## Common Issues and Solutions

---

## 🔍 What Step Is Failing?

Tell me which step is giving the error:
- [ ] Creating the table?
- [ ] Adding a specific column?
- [ ] Adding a check constraint?
- [ ] Setting a default value?
- [ ] Something else?

---

## ⚠️ Common Issues and Fixes

### Issue 1: Default Value with Quotes

**Problem:** When setting default value for `status` column

**Wrong:**
```
Default value: 'new'  ❌ (with single quotes)
```

**Correct:**
```
Default value: new   ✅ (without quotes)
```

**OR:**
```
Default value: (leave empty, then set it after creating column)
```

**Solution:**
1. Create the `status` column first with default value: `new` (no quotes)
2. OR leave default empty, create the column, then edit it to set default

---

### Issue 2: Check Constraint Syntax

**Problem:** When adding check constraint for `status` column

**If you're adding it in the column form:**
- Don't add the constraint when creating the column
- Create the column first
- Then add the constraint separately

**Solution:**
1. Create `status` column normally (without constraint)
2. After saving, click on the `status` column
3. Look for "Constraints" or "Check constraints" section
4. Add constraint there (not in the initial column form)

---

### Issue 3: Default Value for Text Column

**Problem:** Setting default value `'new'` for text column

**Try this:**
1. Create column with default value: `new` (no quotes)
2. OR create column with empty default
3. Then edit the column to add default value

---

### Issue 4: Column Name Issues

**Problem:** Column name has spaces or special characters

**Check:**
- Column name should be: `contact_submissions` (with underscore)
- Not: `contact submissions` (with space)
- Use lowercase and underscores only

---

## 🛠️ Step-by-Step: Creating Status Column (Without Error)

### Method 1: Create Column First, Then Add Default

1. **Create the column:**
   ```
   Column name: status
   Type: text
   Default value: (leave empty)
   Is nullable: ❌ No
   ```

2. **Save the column**

3. **Edit the column:**
   - Click on the `status` column
   - Edit default value: Type `new` (no quotes)
   - Save

4. **Add check constraint:**
   - Still in the column settings
   - Find "Check constraints" section
   - Add constraint: `status IN ('new', 'read', 'replied', 'archived')`

---

### Method 2: Skip Default, Add Later

1. **Create column without default:**
   ```
   Column name: status
   Type: text
   Default value: (leave completely empty)
   Is nullable: ❌ No
   ```

2. **Save**

3. **Add default later:**
   - Edit the column
   - Set default to: `new` (no quotes)

4. **Add constraint separately**

---

## 🔧 Alternative: Create Table Without Constraints First

### Step 1: Create All Columns (No Constraints)

Create all 11 columns first:
- `id` (uuid, primary key)
- `first_name` (text)
- `last_name` (text)
- `email` (text)
- `phone` (text, nullable)
- `message` (text)
- `status` (text, default: leave empty for now)
- `admin_notes` (text, nullable)
- `created_at` (timestamptz, default: now())
- `read_at` (timestamptz, nullable)
- `replied_at` (timestamptz, nullable)

### Step 2: Edit Status Column After

1. Click on `status` column
2. Edit default value: `new` (no quotes)
3. Save

### Step 3: Add Check Constraint

1. Click on `status` column
2. Go to "Check constraints" section
3. Add constraint:
   - Name: `status_check`
   - Expression: `status IN ('new', 'read', 'replied', 'archived')`
4. Save

---

## 📋 Quick Fix Checklist

**If you get SQL error:**

1. **Check default values:**
   - [ ] Remove quotes from default values
   - [ ] Use `new` not `'new'`
   - [ ] Use `false` not `'false'`

2. **Check column names:**
   - [ ] No spaces in column names
   - [ ] Use lowercase
   - [ ] Use underscores: `contact_submissions` not `contact submissions`

3. **Skip constraints initially:**
   - [ ] Create columns first
   - [ ] Add constraints later
   - [ ] Add defaults after creating column

4. **Try one column at a time:**
   - [ ] Create one column
   - [ ] Save
   - [ ] Then create next column

---

## 🎯 Simplified: Create Status Column (Easiest Way)

### Option A: Without Default (Easiest)

1. **Create column:**
   ```
   Column name: status
   Type: text
   Default value: (leave completely empty)
   Is nullable: ❌ No
   ```

2. **Save**

3. **Skip the constraint for now** - you can add it later or skip it entirely

4. **When adding data, just make sure to use:**
   - `new`
   - `read`
   - `replied`
   - `archived`

**This will work!** The constraint is optional - it just helps prevent mistakes.

---

## 💡 What to Do Right Now

1. **Tell me which column is failing:**
   - Is it the `status` column?
   - Or a different column?

2. **Try this:**
   - Create the column without default value first
   - Save it
   - Then edit it to add the default

3. **Or skip the constraint:**
   - Create the column normally
   - Skip the check constraint
   - You can add it later or manage it manually

---

## 🚨 If Still Getting Error

**Share with me:**
1. Which column are you trying to create?
2. What exact error message do you see?
3. What default value are you typing?

**Common fixes:**
- Remove quotes from default values
- Leave default empty, add it later
- Create column first, add constraint after
- Skip constraint if it keeps failing

**The table will still work without the constraint!** It just won't prevent invalid status values, but you can manage that manually.

---

## ✅ Quick Solution

**If `status` column is causing problems:**

1. Create it like this:
   ```
   Column name: status
   Type: text
   Default value: (leave empty)
   Is nullable: ❌ No
   ```

2. **Don't add the constraint yet** - skip it for now

3. **The table will work fine!** You just need to make sure when you add data, you use valid status values.

**Which column is giving you the error?** Let me know and I'll give you the exact fix! 🎯

