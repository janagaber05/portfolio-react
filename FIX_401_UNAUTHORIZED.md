# 🔧 Fix 401 Unauthorized Error in Postman

You're getting **401 Unauthorized** - this means authentication is failing. Let's fix it!

---

## ✅ Step 1: Check Your API Key Values

Make sure your headers have the **exact** values:

### Header 1: `apikey`
**Key**: `apikey`  
**Value**: `sb_publishable_TXDJdOMzyg5RYq3aEYf7JQ_HlukQAuB`

### Header 2: `Authorization`
**Key**: `Authorization`  
**Value**: `Bearer sb_publishable_TXDJdOMzyg5RYq3aEYf7JQ_HlukQAuB`

**Important**: 
- Make sure there's a **space** after "Bearer"
- Make sure the value is **exactly** the same as above
- No extra spaces or characters

---

## ✅ Step 2: Verify Headers Are Checked

1. **Click on "Headers" tab**
2. **Make sure both checkboxes are checked** ✅:
   - ✅ `apikey` checkbox
   - ✅ `Authorization` checkbox

If unchecked, the headers won't be sent!

---

## ✅ Step 3: Check RLS Policies in Supabase

**401 Unauthorized** often means **Row Level Security (RLS)** is blocking your request.

### Fix RLS in Supabase:

1. **Go to Supabase Dashboard**
2. **Click "Authentication"** (left sidebar)
3. **Click "Policies"** (under Authentication)
4. **Select your table** (e.g., `projects`)
5. **Check if RLS is enabled**:
   - If RLS is **ON** and you have **no policies**, you'll get 401!
   - You need to add policies to allow access

### Option A: Add Policy (Recommended)

1. **Click "New Policy"**
2. **Policy Name**: `Allow public read access`
3. **Allowed Operation**: `SELECT` (for GET requests)
4. **Policy Definition**: 
   ```sql
   true
   ```
   (This allows everyone to read)
5. **Click "Save"**

### Option B: Disable RLS (For Testing Only)

1. **Go to Table Editor**
2. **Select your table** (e.g., `projects`)
3. **Click "..." menu** (top right)
4. **Click "Disable RLS"** (temporarily for testing)
5. **⚠️ Warning**: Only do this for testing! Re-enable RLS later.

---

## ✅ Step 4: Test with Correct Values

### Copy-Paste These Exact Values:

**In Headers tab:**

1. **First Header**:
   - **Key**: `apikey`
   - **Value**: `sb_publishable_TXDJdOMzyg5RYq3aEYf7JQ_HlukQAuB`
   - ✅ **Checkbox checked**

2. **Second Header**:
   - **Key**: `Authorization`
   - **Value**: `Bearer sb_publishable_TXDJdOMzyg5RYq3aEYf7JQ_HlukQAuB`
   - ✅ **Checkbox checked**

3. **URL**: `https://kkvepvlkgppzwapbbynh.supabase.co/rest/v1/projects?limit=1`

4. **Click "Send"**

---

## 🎯 Quick Checklist

- [ ] `apikey` header value is correct: `sb_publishable_TXDJdOMzyg5RYq3aEYf7JQ_HlukQAuB`
- [ ] `Authorization` header value is correct: `Bearer sb_publishable_TXDJdOMzyg5RYq3aEYf7JQ_HlukQAuB`
- [ ] Both headers have checkboxes checked ✅
- [ ] There's a space after "Bearer" in Authorization header
- [ ] RLS policies are set up in Supabase (or RLS is disabled for testing)
- [ ] URL is correct: `https://kkvepvlkgppzwapbbynh.supabase.co/rest/v1/projects`

---

## 🐛 Common 401 Causes

### 1. Wrong API Key
- **Fix**: Copy the exact key from Supabase Dashboard → Settings → API

### 2. Missing "Bearer" in Authorization
- **Wrong**: `sb_publishable_TXDJdOMzyg5RYq3aEYf7JQ_HlukQAuB`
- **Correct**: `Bearer sb_publishable_TXDJdOMzyg5RYq3aEYf7JQ_HlukQAuB`

### 3. Headers Not Checked
- **Fix**: Make sure checkboxes are checked ✅

### 4. RLS Blocking Access
- **Fix**: Add RLS policies or disable RLS for testing

### 5. Using Wrong Key Type
- **Use**: `anon` `public` key (publishable key)
- **Don't use**: `service_role` key (secret key)

---

## 🔍 Verify Your API Key

### Get Fresh API Key from Supabase:

1. **Go to Supabase Dashboard**
2. **Click "Settings"** (gear icon, left sidebar)
3. **Click "API"** (under Settings)
4. **Find "Project API keys"**
5. **Copy the `anon` `public` key**
6. **Use this exact key** in Postman

---

## 🧪 Test Request

### Simple Test:

1. **Method**: `GET`
2. **URL**: `https://kkvepvlkgppzwapbbynh.supabase.co/rest/v1/projects?limit=1`
3. **Headers**:
   - `apikey`: `sb_publishable_TXDJdOMzyg5RYq3aEYf7JQ_HlukQAuB`
   - `Authorization`: `Bearer sb_publishable_TXDJdOMzyg5RYq3aEYf7JQ_HlukQAuB`
4. **Click "Send"**

**Expected**: ✅ 200 OK with data (or empty array `[]`)

---

## 💡 Most Likely Fix

**90% of 401 errors are caused by RLS policies!**

1. **Go to Supabase Dashboard**
2. **Authentication → Policies**
3. **Select your table** (`projects`)
4. **Add a policy** that allows `SELECT` with `true` as the definition
5. **Try your request again**

---

## ✅ After Fixing

Once you fix the RLS policies or verify your API key, your request should work! 🎉

If you still get 401, double-check:
- API key is correct
- Authorization header has "Bearer " (with space)
- Headers are checked ✅
- RLS policies allow access

