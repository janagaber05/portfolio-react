# Fix Postman 403 Error and Cloudflare Block
## Troubleshooting Guide

---

## 🔍 Understanding the 403 Error

**403 Forbidden** means:
- Your request reached the server
- But you don't have permission to access it
- Usually an authentication or RLS (Row Level Security) issue

**The Cloudflare HTML response** suggests:
- Cloudflare is blocking your request
- This could be Supabase's Cloudflare protection
- Or Postman being blocked

---

## ✅ Step 1: Fix Authentication (Most Common)

### Check Your Headers

**Make sure you have ALL these headers:**

```
apikey: YOUR_PUBLISHABLE_KEY
Authorization: Bearer YOUR_PUBLISHABLE_KEY
Content-Type: application/json
Prefer: return=representation
```

**Common mistakes:**
- ❌ Missing `apikey` header
- ❌ Missing `Authorization` header
- ❌ Wrong key (using secret key instead of publishable key)
- ❌ Missing "Bearer " before key in Authorization
- ❌ Headers not enabled (checkboxes unchecked)

---

## 🔧 Step 2: Verify Your API Key

### Make Sure You're Using the Right Key

1. **Go to Supabase Dashboard → Settings → API**
2. **Find "Project API keys"**
3. **Use the `publishable key`** (NOT the secret key)
4. **Copy the FULL key** (it's very long, 200+ characters)

### Check Key Format

**Correct format:**
```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFiY2RlZmdoaWprbG1ub3AiLCJyb2xlIjoiYW5vbiIsImlhdCI6MTYxNjIzOTAyMiwiZXhwIjoxOTMxODE1MDIyfQ.xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

**Make sure:**
- ✅ It starts with `eyJ`
- ✅ It's very long (200+ characters)
- ✅ It has dots (`.`) in it
- ✅ You copied the ENTIRE key (not just part of it)

---

## 📋 Step 3: Check Headers in Postman

### Verify Each Header

**Header 1: apikey**
```
KEY: apikey
VALUE: [paste your FULL publishable key here]
☑ Checkbox: CHECKED (enabled)
```

**Header 2: Authorization**
```
KEY: Authorization
VALUE: Bearer [paste your FULL publishable key here]
☑ Checkbox: CHECKED (enabled)
```

**Important:**
- Make sure there's a **space** after "Bearer "
- Use the **same key** for both headers
- **Check the checkboxes** to enable headers

---

## 🔒 Step 4: Check Row Level Security (RLS)

### 403 Error Often Means RLS is Blocking

**If RLS is enabled but no policies exist:**
- You'll get 403 error
- Need to add RLS policies

### How to Check RLS

1. **Go to Supabase Dashboard**
2. **Table Editor**
3. **Click on your table** (e.g., `projects`)
4. **Look for RLS status:**
   - If it says "RLS enabled" → You need policies
   - If it says "RLS disabled" → Enable it or add policies

### Quick Fix: Add Public Read Policy

1. **Go to Table Editor → Your table**
2. **Click "..." menu → "Edit RLS policies"**
3. **Click "New policy"**
4. **Policy name:** `Public can read`
5. **Allowed operation:** `SELECT`
6. **Target roles:** `public`
7. **Policy definition:** `true`
8. **Save**

**This allows public read access (for testing)**

---

## 🌐 Step 5: Fix Cloudflare Block

### The Cloudflare HTML Response

**If you're getting Cloudflare HTML:**
- Cloudflare is blocking your request
- This could be:
  1. Supabase's Cloudflare protection
  2. Your IP being blocked
  3. Missing required headers

### Solutions:

**Option 1: Add User-Agent Header**
```
KEY: User-Agent
VALUE: PostmanRuntime/7.32.3
```

**Option 2: Check if Supabase is blocking**
- Try from a different network
- Or wait a few minutes and try again

**Option 3: Verify URL is correct**
- Make sure you're using Supabase URL, not Postman URL
- Should be: `https://YOUR_PROJECT_ID.supabase.co/rest/v1/...`

---

## 🎯 Step 6: Complete Working Example

### GET Request That Should Work

**Method:** GET

**URL:**
```
https://YOUR_PROJECT_ID.supabase.co/rest/v1/projects?select=*
```

**Headers (ALL of these):**
```
apikey: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9... (your FULL publishable key)
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9... (your FULL publishable key)
Content-Type: application/json
User-Agent: PostmanRuntime/7.32.3
```

**Important:**
- Replace `YOUR_PROJECT_ID` with actual project ID
- Replace the key placeholders with your actual publishable key
- Make sure all checkboxes are checked
- Make sure there's a space after "Bearer "

---

## 🔍 Step 7: Test Step by Step

### Test 1: Check URL Format
```
GET https://YOUR_PROJECT_ID.supabase.co/rest/v1/projects
```
- Should return 403 or 200 (not 404)
- If 404, URL is wrong
- If 403, continue to Test 2

### Test 2: Check Headers
- Add `apikey` header
- Add `Authorization` header
- Check both checkboxes
- Try again

### Test 3: Check RLS
- Go to Supabase → Table Editor
- Check if RLS is enabled
- Add public read policy if needed

---

## 📝 Common 403 Causes and Fixes

### Cause 1: Missing Headers
**Fix:** Add both `apikey` and `Authorization` headers

### Cause 2: Wrong API Key
**Fix:** Use publishable key (not secret key)

### Cause 3: RLS Blocking
**Fix:** Add RLS policies or disable RLS (for testing)

### Cause 4: Missing "Bearer " in Authorization
**Fix:** Add "Bearer " before the key (with space)

### Cause 5: Headers Not Enabled
**Fix:** Check the checkboxes next to headers

### Cause 6: Cloudflare Block
**Fix:** Add User-Agent header or try from different network

---

## ✅ Complete Checklist

**Before sending request:**
- [ ] URL is correct (has `/rest/v1/`)
- [ ] Project ID is correct
- [ ] Table name is correct
- [ ] `apikey` header added with publishable key
- [ ] `Authorization` header added: `Bearer YOUR_KEY`
- [ ] Space after "Bearer " in Authorization
- [ ] All header checkboxes are checked
- [ ] Using publishable key (not secret key)
- [ ] RLS policies exist (or RLS is disabled for testing)

---

## 🚀 Quick Fix Summary

**Most common 403 fixes:**

1. **Add missing headers:**
   - `apikey`: Your publishable key
   - `Authorization`: `Bearer YOUR_PUBLISHABLE_KEY`

2. **Check RLS:**
   - Go to Table Editor
   - Add public read policy if RLS is enabled

3. **Verify key:**
   - Use publishable key (not secret)
   - Copy the FULL key (200+ characters)

4. **Add User-Agent:**
   - `User-Agent`: `PostmanRuntime/7.32.3`

**Try these fixes in order!** 🎯

