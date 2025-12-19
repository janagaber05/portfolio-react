# 🔧 Fix: INSERT Policy for Public Access

**The Problem**: Your INSERT policy is set to "authenticated" users only, but you're using the public/anon key in Postman (which is not authenticated).

**The Fix**: Add an INSERT policy for "public" users.

---

## ✅ What You Have Now

Looking at your policies:
- ✅ **SELECT policy**: "Enable read access fo..." → Applied to: **public** ✅ (This is good!)
- ❌ **INSERT policy**: "Enable insert for auth..." → Applied to: **authenticated** ❌ (This blocks public access!)

---

## ✅ Step 1: Create New INSERT Policy for Public

1. **Click "Create policy"** button (top right)
2. **Fill in the form**:

### Policy Setup:

**Option 1: Using the Form (Easiest)**

1. **Policy Name**: `Enable insert for public`
2. **Allowed Operation**: Select **`INSERT`**
3. **Target roles**: Select **`public`** (not authenticated!)
4. **Policy definition**: 
   - Type: `true`
   - This allows everyone (public) to insert
5. **Click "Save"** or "Create Policy"

**Option 2: Using SQL (If you see SQL editor)**

1. Click "Create policy"
2. If you see SQL editor, paste:
   ```sql
   CREATE POLICY "Enable insert for public"
   ON projects
   FOR INSERT
   TO public
   WITH CHECK (true);
   ```
3. Click "Save"

---

## ✅ Step 2: Verify New Policy

After creating, you should see **3 policies**:

1. ✅ "Enable insert for auth..." → INSERT → authenticated
2. ✅ "Enable read access fo..." → SELECT → public
3. ✅ **"Enable insert for public"** → INSERT → **public** ← **This is the new one!**

---

## ✅ Step 3: Test Your POST Request

1. **Go back to Postman**
2. **Click "Send"** on your POST request
3. **Should work now!** ✅

**Expected**: 201 Created with your new project data

---

## 🎯 Quick Fix Steps

1. **Click "Create policy"** button
2. **Name**: `Enable insert for public`
3. **Operation**: `INSERT`
4. **Applied to**: `public` (not authenticated!)
5. **Definition**: `true`
6. **Save**
7. **Test in Postman**

---

## 📋 Complete Policy Setup

For full functionality with public/anon key, you need:

| Policy Name | Operation | Applied To | Status |
|-------------|-----------|------------|--------|
| Enable read access for public | SELECT | **public** | ✅ You have this |
| Enable insert for public | INSERT | **public** | ❌ Need to add this |
| Enable insert for authenticated | INSERT | authenticated | ✅ You have this (but not needed for Postman) |

---

## 💡 Why This Matters

- **"authenticated"**: Requires user to be logged in (not what you're using in Postman)
- **"public"**: Allows anyone with the anon key (what you're using in Postman)

Since you're using the **anon/public key** in Postman, you need policies for **"public"**, not "authenticated".

---

## ✅ After Adding Public INSERT Policy

You'll have:
- ✅ SELECT policy for public (GET requests work)
- ✅ INSERT policy for public (POST requests will work)
- ✅ Your Postman requests will work with the anon key

---

## 🎉 Summary

**What to do**:
1. Click "Create policy"
2. Add INSERT policy for **"public"** (not authenticated)
3. Definition: `true`
4. Save
5. Test in Postman

**This will fix your POST request!** 🚀

