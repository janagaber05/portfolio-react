# 🔧 Fix 400 Bad Request Error in Postman

The problem: You're putting `apikey` and `Authorization` in the **wrong place**!

---

## ❌ What's Wrong

You have `apikey` and `Authorization` in the **"Params" tab** (query parameters).  
**They should be in the "Headers" tab!**

---

## ✅ How to Fix It

### Step 1: Remove from Params Tab

1. **Click on "Params" tab** (currently selected)
2. **Uncheck** the checkboxes next to `apikey` and `Authorization`
3. **OR delete** those rows completely

### Step 2: Clean the URL

1. **Look at your URL field** (top center)
2. **Remove** `?apikey=...` from the URL if it's there
3. **Your URL should be**:
   ```
   https://kkvepvlkgppzwapbbynh.supabase.co/rest/v1/projects
   ```
   **OR** if you want to filter by ID:
   ```
   https://kkvepvlkgppzwapbbynh.supabase.co/rest/v1/projects?id=eq.1
   ```

### Step 3: Add to Headers Tab (Correct Place!)

1. **Click on "Headers" tab** (next to "Params")
2. **Add these headers**:

   **First Header**:
   - **Key**: `apikey`
   - **Value**: `sb_publishable_TXDJdOMzyg5RYq3aEYf7JQ_HlukQAuB`
   - **Make sure the checkbox is checked** ✅

   **Second Header**:
   - **Key**: `Authorization`
   - **Value**: `Bearer sb_publishable_TXDJdOMzyg5RYq3aEYf7JQ_HlukQAuB`
   - **Make sure the checkbox is checked** ✅

### Step 4: Test Again

1. **Click "Send"** button
2. **Should work now!** ✅

---

## 🎯 Correct Setup for "GET Project by ID"

### URL:
```
https://kkvepvlkgppzwapbbynh.supabase.co/rest/v1/projects?id=eq.1
```
(Change `1` to the actual project ID you want)

### Headers Tab:
| Key | Value | ✅ Checked |
|-----|-------|------------|
| `apikey` | `sb_publishable_TXDJdOMzyg5RYq3aEYf7JQ_HlukQAuB` | ✅ |
| `Authorization` | `Bearer sb_publishable_TXDJdOMzyg5RYq3aEYf7JQ_HlukQAuB` | ✅ |

### Params Tab:
- **Leave empty** OR use for filtering:
  - **Key**: `id`
  - **Value**: `eq.1`
  - **Description**: (optional)

---

## 📋 Key Differences

### ❌ WRONG: Params Tab
- Params = Query parameters in URL (`?key=value`)
- Used for **filtering data** (like `?id=eq.1`, `?section=eq.home`)
- **NOT** for authentication!

### ✅ CORRECT: Headers Tab
- Headers = HTTP headers
- Used for **authentication** (`apikey`, `Authorization`)
- Used for **content type** (`Content-Type: application/json`)

---

## 🎯 Quick Fix Checklist

- [ ] Removed `apikey` from Params tab
- [ ] Removed `Authorization` from Params tab
- [ ] Cleaned URL (removed `?apikey=...` if it was there)
- [ ] Added `apikey` to Headers tab ✅
- [ ] Added `Authorization` to Headers tab ✅
- [ ] Both headers are checked ✅
- [ ] Clicked "Send" to test

---

## 🧪 Test Request

### For "GET Project by ID":

1. **Method**: `GET`
2. **URL**: `https://kkvepvlkgppzwapbbynh.supabase.co/rest/v1/projects?id=eq.1`
3. **Headers Tab**:
   - `apikey`: `sb_publishable_TXDJdOMzyg5RYq3aEYf7JQ_HlukQAuB`
   - `Authorization`: `Bearer sb_publishable_TXDJdOMzyg5RYq3aEYf7JQ_HlukQAuB`
4. **Params Tab**: Leave empty (or add `id` = `eq.1` if you want)
5. **Click "Send"**

**Expected Result**: ✅ Success with data (or empty array if no project with ID 1)

---

## 🐛 Common 400 Errors

### Error: "400 Bad Request"
**Causes**:
- ❌ `apikey` in URL or Params (should be in Headers)
- ❌ `Authorization` in Params (should be in Headers)
- ❌ Malformed URL
- ❌ Invalid query parameter syntax

**Fix**: Move authentication to Headers tab!

---

## 💡 Pro Tip

**Remember**:
- **Headers** = Authentication (`apikey`, `Authorization`)
- **Params** = Filtering (`?id=eq.1`, `?section=eq.home`)

Never mix them up! 🎯

---

## ✅ You're Fixed!

After moving `apikey` and `Authorization` to the Headers tab, your request should work! 🎉

