# 🔧 Fix 401 Unauthorized for POST Request

401 means authentication failed. Let's fix your headers.

---

## ✅ Step 1: Check Your Headers Tab

1. **Click on "Headers" tab** (below URL)
2. **Verify you have these 4 headers** (all checkboxes checked ✅):

### Header 1: `apikey`
- **Key**: `apikey` (exactly this, lowercase)
- **Value**: `sb_publishable_TXDJdOMzyg5RYq3aEYf7JQ_HlukQAuB`
- ✅ **Checkbox MUST be checked**

### Header 2: `Authorization`
- **Key**: `Authorization` (capital A, rest lowercase)
- **Value**: `Bearer sb_publishable_TXDJdOMzyg5RYq3aEYf7JQ_HlukQAuB`
- ✅ **Checkbox MUST be checked**
- **Important**: There's a **space** after "Bearer"!

### Header 3: `Content-Type`
- **Key**: `Content-Type`
- **Value**: `application/json`
- ✅ **Checkbox MUST be checked**

### Header 4: `Prefer` (Optional)
- **Key**: `Prefer`
- **Value**: `return=representation`
- ✅ **Checkbox checked** (optional but recommended)

---

## ✅ Step 2: Verify Exact Values

### Copy-Paste These Exact Values:

**Header 1**:
- Key: `apikey`
- Value: `sb_publishable_TXDJdOMzyg5RYq3aEYf7JQ_HlukQAuB`

**Header 2**:
- Key: `Authorization`
- Value: `Bearer sb_publishable_TXDJdOMzyg5RYq3aEYf7JQ_HlukQAuB`
- **Note**: Space after "Bearer"!

**Header 3**:
- Key: `Content-Type`
- Value: `application/json`

**Header 4** (Optional):
- Key: `Prefer`
- Value: `return=representation`

---

## ✅ Step 3: Common 401 Issues

### Issue 1: Checkbox Not Checked ❌
**Problem**: Header exists but checkbox is unchecked  
**Fix**: ✅ **Check ALL checkboxes** next to headers

### Issue 2: Wrong Key Name
**Wrong**: `API-Key`, `api_key`, `ApiKey`, `apikey ` (with space)  
**Correct**: `apikey` (exactly lowercase, no spaces)

### Issue 3: Missing "Bearer" in Authorization
**Wrong**: `sb_publishable_TXDJdOMzyg5RYq3aEYf7JQ_HlukQAuB`  
**Correct**: `Bearer sb_publishable_TXDJdOMzyg5RYq3aEYf7JQ_HlukQAuB`

### Issue 4: No Space After "Bearer"
**Wrong**: `Bearersb_publishable_TXDJdOMzyg5RYq3aEYf7JQ_HlukQAuB`  
**Correct**: `Bearer sb_publishable_TXDJdOMzyg5RYq3aEYf7JQ_HlukQAuB` (space after Bearer)

### Issue 5: Wrong API Key
**Fix**: Verify your API key is correct:
- Go to Supabase Dashboard
- Settings → API
- Copy the `anon` `public` key
- Make sure it matches: `sb_publishable_TXDJdOMzyg5RYq3aEYf7JQ_HlukQAuB`

---

## ✅ Step 4: Delete and Re-add Headers

If headers still don't work, try deleting and re-adding:

1. **Click "Headers" tab**
2. **Delete all existing headers** (click trash icon or uncheck them)
3. **Add headers one by one**:

**Add Header 1**:
- Click in "Key" column
- Type: `apikey`
- Press Tab (or click "Value")
- Type: `sb_publishable_TXDJdOMzyg5RYq3aEYf7JQ_HlukQAuB`
- ✅ **Check the checkbox**

**Add Header 2**:
- Click in next row "Key" column
- Type: `Authorization`
- Press Tab (or click "Value")
- Type: `Bearer sb_publishable_TXDJdOMzyg5RYq3aEYf7JQ_HlukQAuB`
- ✅ **Check the checkbox**

**Add Header 3**:
- Click in next row "Key" column
- Type: `Content-Type`
- Press Tab (or click "Value")
- Type: `application/json`
- ✅ **Check the checkbox**

**Add Header 4** (Optional):
- Click in next row "Key" column
- Type: `Prefer`
- Press Tab (or click "Value")
- Type: `return=representation`
- ✅ **Check the checkbox**

4. **Click "Save"** (top right)
5. **Click "Send"**

---

## ✅ Step 5: Verify Headers Are Being Sent

1. **After clicking "Send"**
2. **Look at Response section** (bottom panel)
3. **Click "Headers" tab** in Response section
4. **Look for "Request Headers"**
5. **Verify you see**:
   - `apikey: sb_publishable_TXDJdOMzyg5RYq3aEYf7JQ_HlukQAuB`
   - `authorization: Bearer sb_publishable_TXDJdOMzyg5RYq3aEYf7JQ_HlukQAuB`

If these don't appear, headers aren't being sent!

---

## 🎯 Complete Setup Checklist

- [ ] Method is **POST** ✅
- [ ] URL is: `https://kkvepvlkgppzwapbbynh.supabase.co/rest/v1/projects` ✅
- [ ] Headers tab has 4 headers ✅
- [ ] `apikey` header exists, value is correct, checkbox checked ✅
- [ ] `Authorization` header exists, value has "Bearer " (with space), checkbox checked ✅
- [ ] `Content-Type` header exists, value is `application/json`, checkbox checked ✅
- [ ] `Prefer` header exists (optional), checkbox checked ✅
- [ ] Body has valid JSON ✅
- [ ] Clicked "Save" ✅
- [ ] Clicked "Send" ✅

---

## 🧪 Test with GET First

Before testing POST, verify your headers work with GET:

1. **Use "GET All projects" request**
2. **Make sure it has**:
   - Headers: `apikey` ✅, `Authorization` ✅
3. **Click "Send"**
4. **If GET works**: Headers are correct, issue might be with POST setup
5. **If GET also gives 401**: Headers are wrong, fix them first

---

## 🎯 Quick Fix Steps

1. **Go to Headers tab**
2. **Verify all 4 headers exist and are checked** ✅
3. **Double-check the values** (especially "Bearer " with space)
4. **Click "Save"**
5. **Click "Send"**

---

## 💡 Most Common Fix

**90% of 401 errors are caused by**:
1. ✅ Checkbox not checked (most common!)
2. Missing "Bearer " (with space) in Authorization
3. Wrong API key value

**Check these first!** ✅

---

## 🆘 Still Not Working?

**Tell me**:
1. Are all header checkboxes checked? ✅
2. What exact value do you have in `Authorization` header?
3. Does your GET request work? (If GET works, headers are correct)

With this info, I can help you fix it! 🎯

