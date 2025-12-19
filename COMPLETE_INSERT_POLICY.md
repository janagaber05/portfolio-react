# ✅ Complete Your INSERT Policy Setup

Your policy form looks good! But you need to add the **policy definition** to make it work.

---

## ✅ What You Have (Good!)

- ✅ Policy Name: "Enable insert for public"
- ✅ Table: "public.projects"
- ✅ Policy Behavior: Permissive
- ✅ Policy Command: INSERT (selected)
- ✅ Target Roles: public (defaults to all public roles)

---

## ✅ What's Missing: Policy Definition

The SQL at the bottom is incomplete. You need to add the **WITH CHECK** clause.

---

## ✅ Step 1: Find the Policy Definition Section

Look for a section in the form that says:
- "Policy definition"
- "WITH CHECK"
- "Using expression"
- Or a text area/input field for the policy definition

---

## ✅ Step 2: Add Policy Definition

### Option A: If You See a Text Field/Area

1. **Find the policy definition field** (might be labeled "WITH CHECK" or "Policy definition")
2. **Type**: `true`
3. This allows all inserts

### Option B: If You See "Using expression" or Similar

1. **Click on the field**
2. **Type**: `true`
3. Or select "Always true" if available

### Option C: If You See SQL Editor

1. **Look for a section to add SQL**
2. **Add this line**:
   ```sql
   WITH CHECK (true)
   ```

---

## ✅ Step 3: Complete SQL Should Look Like

The complete SQL should be:
```sql
create policy "Enable insert for public"
on "public"."projects"
as PERMISSIVE
for INSERT
to public
WITH CHECK (true);
```

**Important**: The `WITH CHECK (true)` part is what actually allows the inserts!

---

## ✅ Step 4: Save the Policy

1. **Look for "Save" or "Create Policy" button**
2. **Click it**
3. **The policy should be created**

---

## 🎯 What to Look For in the Form

The form should have these sections:

1. ✅ Policy Name: "Enable insert for public" (you have this)
2. ✅ Table: "public.projects" (you have this)
3. ✅ Policy Behavior: Permissive (you have this)
4. ✅ Policy Command: INSERT (you have this)
5. ✅ Target Roles: public (you have this)
6. ❓ **Policy Definition/WITH CHECK**: Need to add `true` (this is what's missing!)

---

## 🔍 Common Form Layouts

### Layout 1: Separate "WITH CHECK" Section
Look for a section that says:
- "WITH CHECK expression"
- "Policy definition"
- "Check expression"

**Type**: `true`

### Layout 2: Advanced Options
1. **Look for "Advanced" or "More options"**
2. **Click to expand**
3. **Find "WITH CHECK" field**
4. **Type**: `true`

### Layout 3: SQL Editor
1. **Look for "Edit SQL" or "SQL" tab**
2. **Click it**
3. **Add**: `WITH CHECK (true)`

---

## ✅ Quick Checklist

- [ ] Policy Name: "Enable insert for public" ✅
- [ ] Table: "public.projects" ✅
- [ ] Policy Behavior: Permissive ✅
- [ ] Policy Command: INSERT selected ✅
- [ ] Target Roles: public ✅
- [ ] **Policy Definition/WITH CHECK: `true`** ← **Add this!**
- [ ] Click "Save" or "Create Policy"

---

## 🎯 If You Can't Find the Field

**Try scrolling down** in the form - the policy definition field might be below the visible area.

Or look for:
- "WITH CHECK"
- "Check expression"
- "Policy definition"
- "Using expression"

---

## 💡 Alternative: Use SQL Directly

If the form doesn't have a clear field for the definition:

1. **Look for "SQL" tab or "Edit SQL" button**
2. **Click it**
3. **Paste this complete SQL**:
   ```sql
   CREATE POLICY "Enable insert for public"
   ON "public"."projects"
   AS PERMISSIVE
   FOR INSERT
   TO public
   WITH CHECK (true);
   ```
4. **Click "Save"**

---

## ✅ After Completing

Once you add `WITH CHECK (true)` and save:

1. ✅ Policy will be created
2. ✅ You'll see it in your policies list
3. ✅ Your POST request in Postman will work!

---

## 🎉 Summary

**What to do**:
1. Find the "Policy definition" or "WITH CHECK" field in the form
2. Type: `true`
3. Click "Save" or "Create Policy"
4. Test your POST request in Postman

**The `WITH CHECK (true)` is the key part that actually allows inserts!** 🚀

