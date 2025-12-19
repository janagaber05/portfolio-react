# 🔧 Fix: Invalid API Key Error

The API key you're using is incorrect or has changed. Let's get the correct one and update it.

---

## ✅ Step 1: Get Your Correct API Key from Supabase

1. **Go to Supabase Dashboard**
   - URL: https://supabase.com/dashboard
   - Login if needed

2. **Select Your Project**
   - Click on your project: `kkvepvlkgppzwapbbynh`

3. **Go to Settings**
   - Click **"Settings"** (gear icon, left sidebar)

4. **Click "API"**
   - Under Settings, click **"API"**

5. **Find Your API Key**
   - Look for **"Project API keys"** section
   - Find the **`anon` `public`** key
   - **Copy this key** (it's your publishable key)

6. **Verify the Key**
   - Make sure it starts with `sb_publishable_` or similar
   - It should be a long string

---

## ✅ Step 2: Update API Key in Postman

### Option 1: Update in Each Request

1. **Click on your request** (the one giving the error)
2. **Click "Headers" tab**
3. **Find the `apikey` header**
4. **Update the value** with your new API key
5. **Also update `Authorization` header**:
   - Value: `Bearer [YOUR_NEW_API_KEY]`
6. **Make sure both checkboxes are checked** ✅
7. **Click "Save"**

### Option 2: Update Environment Variable (If You're Using One)

1. **Click "Environments"** (left sidebar)
2. **Select your environment** (e.g., "Supabase Portfolio")
3. **Find `supabase_key` variable**
4. **Update the value** with your new API key
5. **Click "Save"**
6. **All requests using this environment will use the new key**

---

## ✅ Step 3: Verify Your API Key

### Check Your Current Key:

The key you've been using:
```
sb_publishable_TXDJdOMzyg5RYq3aEYf7JQ_HlukQAuB
```

**Get the fresh key from Supabase** and compare:
- If it's different → Update it
- If it's the same → Check for typos or extra spaces

---

## ✅ Step 4: Common API Key Issues

### Issue 1: Wrong Key Type
- ❌ **Wrong**: Using `service_role` key (secret key)
- ✅ **Correct**: Use `anon` `public` key (publishable key)

### Issue 2: Key Has Changed
- **Fix**: Get fresh key from Supabase Dashboard

### Issue 3: Typo in Key
- **Fix**: Copy-paste the key directly from Supabase (don't type it)

### Issue 4: Extra Spaces
- **Wrong**: `sb_publishable_... ` (space at end)
- **Correct**: `sb_publishable_...` (no spaces)

### Issue 5: Using Old Key
- **Fix**: Get the current key from Supabase Dashboard

---

## ✅ Step 5: Test with New Key

1. **Update your API key** in Postman headers
2. **Click "Send"** on your request
3. **Should work now!** ✅

---

## 🎯 Quick Fix Steps

1. **Go to Supabase → Settings → API**
2. **Copy the `anon` `public` key**
3. **Go to Postman → Headers tab**
4. **Update `apikey` header** with new key
5. **Update `Authorization` header**: `Bearer [NEW_KEY]`
6. **Make sure checkboxes are checked** ✅
7. **Click "Save"**
8. **Click "Send"**

---

## 📋 Complete Header Setup

After getting your new API key, your headers should be:

| Key | Value | ✅ Checked |
|-----|-------|------------|
| `apikey` | `[YOUR_NEW_API_KEY]` | ✅ |
| `Authorization` | `Bearer [YOUR_NEW_API_KEY]` | ✅ |
| `Content-Type` | `application/json` | ✅ (for POST/PATCH) |

**Replace `[YOUR_NEW_API_KEY]` with the actual key from Supabase!**

---

## 🆘 Still Not Working?

**Tell me**:
1. What API key do you see in Supabase Dashboard? (first few characters)
2. What API key are you using in Postman? (first few characters)
3. Are they the same?

Then I can help you further! 🎯

---

## 💡 Pro Tip

**Always copy-paste the API key** from Supabase Dashboard:
1. Don't type it manually (might have typos)
2. Copy directly from Supabase
3. Paste into Postman
4. Make sure no extra spaces

**This prevents "Invalid API key" errors!** ✅

---

## 🎉 After Fixing

Once you:
1. ✅ Get fresh API key from Supabase
2. ✅ Update it in Postman headers
3. ✅ Make sure checkboxes are checked
4. ✅ Click "Send"

You should get a successful response! 🚀

