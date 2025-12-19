# 💰 Free Method: Use Postman Without Variables

**Good news**: Environment variables in Postman are **FREE**! But if you prefer not to use them, here's how to use Postman directly without variables.

---

## ✅ Method 1: Environment Variables (FREE - Recommended)

**Environment variables are FREE in Postman!** You might be seeing a different feature. The basic environment variables we're using are completely free.

If you want to use them:
- Just add the variables as shown before
- They're free to use!

---

## 🎯 Method 2: Type Values Directly (No Variables Needed)

If you don't want to use variables, just type the actual values directly in each request:

### For Every Request:

#### URL Field:
Type the full URL:
```
https://kkvepvlkgppzwapbbynh.supabase.co/rest/v1/home_content
```

#### Headers:
Add these headers with actual values:

| Key | Value |
|-----|-------|
| `apikey` | `sb_publishable_TXDJdOMzyg5RYq3aEYf7JQ_HlukQAuB` |
| `Authorization` | `Bearer sb_publishable_TXDJdOMzyg5RYq3aEYf7JQ_HlukQAuB` |
| `Content-Type` | `application/json` (for POST/PATCH) |

---

## 📋 Example: GET Request (No Variables)

### Step 1: Create New Request
1. Click **"New"** → **"HTTP Request"**
2. Name it: `GET All Home Content`

### Step 2: Set Method
- Select **GET** from dropdown

### Step 3: Enter URL
```
https://kkvepvlkgppzwapbbynh.supabase.co/rest/v1/home_content?limit=1
```

### Step 4: Add Headers
1. Click **"Headers"** tab
2. Add these headers:

| Key | Value |
|-----|-------|
| `apikey` | `sb_publishable_TXDJdOMzyg5RYq3aEYf7JQ_HlukQAuB` |
| `Authorization` | `Bearer sb_publishable_TXDJdOMzyg5RYq3aEYf7JQ_HlukQAuB` |

### Step 5: Send
- Click **"Send"** button
- You should get data back! ✅

---

## 📋 Example: POST Request (No Variables)

### Step 1: Create New Request
- Name: `POST Create Home Content`

### Step 2: Set Method
- Select **POST**

### Step 3: Enter URL
```
https://kkvepvlkgppzwapbbynh.supabase.co/rest/v1/home_content
```

### Step 4: Add Headers
| Key | Value |
|-----|-------|
| `apikey` | `sb_publishable_TXDJdOMzyg5RYq3aEYf7JQ_HlukQAuB` |
| `Authorization` | `Bearer sb_publishable_TXDJdOMzyg5RYq3aEYf7JQ_HlukQAuB` |
| `Content-Type` | `application/json` |
| `Prefer` | `return=representation` |

### Step 5: Add Body
1. Click **"Body"** tab
2. Select **"raw"**
3. Select **"JSON"** from dropdown
4. Paste your JSON:
```json
{
  "section": "home",
  "key": "know_me_title",
  "content_en": "Know Me",
  "display_order": 0
}
```

### Step 6: Send
- Click **"Send"**

---

## 🎯 Your Supabase Details (Copy These)

**Base URL**: `https://kkvepvlkgppzwapbbynh.supabase.co`

**API Key**: `sb_publishable_TXDJdOMzyg5RYq3aEYf7JQ_HlukQAuB`

**Full URL Format**: `https://kkvepvlkgppzwapbbynh.supabase.co/rest/v1/[TABLE_NAME]`

---

## 📋 Quick Reference: All Your Tables

### Table URLs (just add `/rest/v1/` + table name):

1. **home_content**: 
   ```
   https://kkvepvlkgppzwapbbynh.supabase.co/rest/v1/home_content
   ```

2. **skills**: 
   ```
   https://kkvepvlkgppzwapbbynh.supabase.co/rest/v1/skills
   ```

3. **experience**: 
   ```
   https://kkvepvlkgppzwapbbynh.supabase.co/rest/v1/experience
   ```

4. **projects**: 
   ```
   https://kkvepvlkgppzwapbbynh.supabase.co/rest/v1/projects
   ```

5. **blog_posts**: 
   ```
   https://kkvepvlkgppzwapbbynh.supabase.co/rest/v1/blog_posts
   ```

6. **contact_submissions**: 
   ```
   https://kkvepvlkgppzwapbbynh.supabase.co/rest/v1/contact_submissions
   ```

7. **project_details**: 
   ```
   https://kkvepvlkgppzwapbbynh.supabase.co/rest/v1/project_details
   ```

---

## ✅ Always Use These Headers

For **EVERY** request, add these headers:

| Key | Value |
|-----|-------|
| `apikey` | `sb_publishable_TXDJdOMzyg5RYq3aEYf7JQ_HlukQAuB` |
| `Authorization` | `Bearer sb_publishable_TXDJdOMzyg5RYq3aEYf7JQ_HlukQAuB` |

For **POST/PATCH** requests, also add:

| Key | Value |
|-----|-------|
| `Content-Type` | `application/json` |

---

## 🎯 Test Connection (First Request)

Try this to test:

1. **Method**: `GET`
2. **URL**: `https://kkvepvlkgppzwapbbynh.supabase.co/rest/v1/home_content?limit=1`
3. **Headers**:
   - `apikey`: `sb_publishable_TXDJdOMzyg5RYq3aEYf7JQ_HlukQAuB`
   - `Authorization`: `Bearer sb_publishable_TXDJdOMzyg5RYq3aEYf7JQ_HlukQAuB`
4. **Click "Send"**

If you get data (or empty array `[]`), it's working! ✅

---

## 💡 Pro Tip

**Save your requests in a Collection** so you don't have to retype everything:
1. Create a Collection: "Supabase Portfolio API"
2. Save each request in the collection
3. You can duplicate requests and just change the URL/body

---

## 🎉 You're All Set!

You can use Postman completely free by just typing the values directly. No variables needed! 🚀

