# ✅ Correct Table Name: home_about_category_content

Your table is named `home_about_category_content`. Here's how to use it:

---

## ✅ Step 1: Update Your POST Request URL

### Correct URL:

```
https://kkvepvlkgppzwapbbynh.supabase.co/rest/v1/home_about_category_content
```

**Note**: Use the exact table name as it appears in Supabase!

---

## ✅ Step 2: Update All Your Requests

### POST Create Home Content:
- **URL**: `https://kkvepvlkgppzwapbbynh.supabase.co/rest/v1/home_about_category_content`
- **Method**: `POST`
- **Headers**: apikey, Authorization, Content-Type: application/json
- **Body**: Your JSON

### GET All Home Content:
- **URL**: `https://kkvepvlkgppzwapbbynh.supabase.co/rest/v1/home_about_category_content`
- **Method**: `GET`
- **Headers**: apikey, Authorization

### GET Content by Section:
- **URL**: `https://kkvepvlkgppzwapbbynh.supabase.co/rest/v1/home_about_category_content?section=eq.home`
- **Method**: `GET`
- **Headers**: apikey, Authorization

### GET Content by Key:
- **URL**: `https://kkvepvlkgppzwapbbynh.supabase.co/rest/v1/home_about_category_content?key=eq.know_me_title&section=eq.home`
- **Method**: `GET`
- **Headers**: apikey, Authorization

---

## ✅ Step 3: Fix "GET Create Home Content" → Change to POST

### Setup:

1. **Click on "GET Create Home Content"**
2. **Change Method**: Select **POST** from dropdown
3. **Set URL**: 
   ```
   https://kkvepvlkgppzwapbbynh.supabase.co/rest/v1/home_about_category_content
   ```
   **Important**: Use the exact table name!

4. **Add Headers** (all checkboxes checked ✅):
   | Key | Value |
   |-----|-------|
   | `apikey` | `sb_publishable_TXDJdOMzyg5RYq3aEYf7JQ_HlukQAuB` |
   | `Authorization` | `Bearer sb_publishable_TXDJdOMzyg5RYq3aEYf7JQ_HlukQAuB` |
   | `Content-Type` | `application/json` |
   | `Prefer` | `return=representation` |

5. **Add Body** (raw → JSON):
   ```json
   {
     "section": "home",
     "key": "test_key",
     "content_en": "Test content in English",
     "content_ar": "محتوى تجريبي بالعربية",
     "display_order": 0
   }
   ```

6. **Rename**: Right-click → Edit → Change to "POST Create Home Content"
7. **Save and test**

---

## ✅ Step 4: Check Your Table Columns

Before using the JSON above, check what columns you actually have:

### Option 1: Use GET Request
1. **Use "GET All Home Content" request**
2. **Update URL to**: `https://kkvepvlkgppzwapbbynh.supabase.co/rest/v1/home_about_category_content?limit=1`
3. **Headers**: `apikey`, `Authorization`
4. **Click "Send"**
5. **Look at the response** - the keys are your column names!

### Option 2: Check in Supabase
1. **Go to Supabase → Table Editor**
2. **Click on `home_about_category_content` table**
3. **See what columns you have**

---

## ✅ Step 5: Add RLS Policies for home_about_category_content Table

For POST to work, add INSERT policy:

1. **Go to Supabase Dashboard**
2. **Authentication → Policies**
3. **Select `home_about_category_content` table**
4. **Click "Create policy"**
5. **Fill in**:
   - Name: `Enable insert for public`
   - Operation: `INSERT`
   - Applied to: `public`
   - Definition: `true`
6. **Save**

---

## 📋 All URLs Updated

### For `home_about_category_content` table:

| Request | Method | URL |
|---------|--------|-----|
| GET All | GET | `https://kkvepvlkgppzwapbbynh.supabase.co/rest/v1/home_about_category_content` |
| GET by Section | GET | `https://kkvepvlkgppzwapbbynh.supabase.co/rest/v1/home_about_category_content?section=eq.home` |
| GET by Key | GET | `https://kkvepvlkgppzwapbbynh.supabase.co/rest/v1/home_about_category_content?key=eq.know_me_title&section=eq.home` |
| POST Create | POST | `https://kkvepvlkgppzwapbbynh.supabase.co/rest/v1/home_about_category_content` |

**All use `home_about_category_content`!**

---

## ✅ Quick Fix Steps

1. **Update all URLs** to use `home_about_category_content`
2. **Fix "GET Create Home Content"** → Change to POST
3. **Set URL**: `https://kkvepvlkgppzwapbbynh.supabase.co/rest/v1/home_about_category_content`
4. **Add headers and body**
5. **Add INSERT policy** in Supabase
6. **Test everything**

---

## 🎯 Summary

**The fix**: Use `home_about_category_content` (not `home_content`) in all your URLs!

**Updated URL**:
```
https://kkvepvlkgppzwapbbynh.supabase.co/rest/v1/home_about_category_content
```

**Try it now!** 🚀

---

## 💡 Important Note

**Make sure the table name is exactly**:
- `home_about_category_content` (with underscores, no spaces)

**Copy-paste this exact URL**:
```
https://kkvepvlkgppzwapbbynh.supabase.co/rest/v1/home_about_category_content
```

**This should work now!** ✅

