# 🔧 API Connection Test Guide

## ✅ What I Added

I've added **extensive console logging** to help debug the API connection. Now when you open your app, check the browser console (F12) and you'll see detailed logs.

---

## 🔍 How to Test

### Step 1: Open Browser Console
1. Open your app: `http://localhost:3001` (or your port)
2. Press **F12** or **Right-click → Inspect**
3. Go to **Console** tab
4. Refresh the page

### Step 2: Look for These Logs

You should see logs like:

```
🔍 Starting API fetch...
📡 Supabase URL: https://kkvepvlkgppzwapbbynh.supabase.co
🔌 Connection test: {...}
🧪 Test query result: {...}
📊 Full API Response: {...}
```

---

## 🚨 Common Errors & Fixes

### Error 1: "Invalid API key"

**What you'll see:**
```
❌ API Connection Error: { message: "Invalid API key" }
```

**Fix:**
1. Go to Supabase Dashboard
2. Settings → API
3. Copy the **`anon` `public`** key (NOT the service_role key)
4. Update `src/pages/Supabase.jsx` with the correct key

**The key should look like:** `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...` (long JWT token)

---

### Error 2: "relation does not exist"

**What you'll see:**
```
❌ Error: relation "public.home_about_category_content" does not exist
```

**Fix:**
1. Check your table name in Supabase
2. Make sure it's exactly: `home_about_category_content`
3. If your table has a different name (like `homeـ_about_category_content` with special character), update the code

---

### Error 3: "new row violates row-level security policy"

**What you'll see:**
```
❌ Error: new row violates row-level security policy
```

**Fix:**
1. Go to Supabase Dashboard
2. Table Editor → Select your table
3. Click "Policies" tab
4. Make sure you have a **SELECT** policy for `public` role:
   - Policy name: `Allow public read`
   - Operation: `SELECT`
   - Target roles: `public`
   - USING expression: `true`

---

### Error 4: "No data returned"

**What you'll see:**
```
⚠️ No data returned from API
```

**Possible causes:**
1. **No rows in table** - Add data to your `home_about_category_content` table
2. **Wrong section value** - Make sure `section` column = `'home'`
3. **RLS blocking** - Check RLS policies

---

## 🧪 Manual Test in Console

Open browser console and run:

```javascript
// Test 1: Check if Supabase is connected
import { supabase } from './pages/Supabase';
console.log('Supabase:', supabase);

// Test 2: Try to fetch data
const { data, error } = await supabase
  .from('home_about_category_content')
  .select('*')
  .limit(5);

console.log('Data:', data);
console.log('Error:', error);

// Test 3: Check what tables exist (if you have access)
const { data: tables, error: tablesError } = await supabase
  .from('home_about_category_content')
  .select('*')
  .limit(1);

console.log('Tables test:', { tables, tablesError });
```

---

## 📋 Checklist

Before reporting issues, check:

- [ ] Browser console is open (F12)
- [ ] Console shows logs (not empty)
- [ ] Supabase URL is correct: `https://kkvepvlkgppzwapbbynh.supabase.co`
- [ ] API key is the **anon public** key (starts with `eyJ...`)
- [ ] Table name is exactly: `home_about_category_content`
- [ ] Table has rows with `section = 'home'`
- [ ] RLS policy allows `SELECT` for `public` role
- [ ] `content_en` column has data
- [ ] Keys match: `hero_title`, `hero_subtitle`, `hero_paragraph`

---

## 🎯 What to Share

If content still doesn't show, share:

1. **Console logs** - Copy all logs from console
2. **Error messages** - Any red error messages
3. **Supabase table screenshot** - Show your table structure
4. **RLS policies screenshot** - Show your policies

---

## ✅ Expected Console Output

If everything works, you should see:

```
🔍 Starting API fetch...
📡 Supabase URL: https://kkvepvlkgppzwapbbynh.supabase.co
🔌 Connection test: { data: [...], error: null }
🧪 Test query result: { testData: [...], testError: null }
📊 Full API Response: { data: [...], error: null }
✅ Fetched home content: [...]
📝 Number of rows: 14
📌 Key: hero_title, Content: Has content
📌 Key: hero_subtitle, Content: Has content
📌 Key: hero_paragraph, Content: Has content
🗺️ Content map: { hero_title: {...}, ... }
🔑 Looking for keys: hero_title, hero_subtitle, hero_paragraph
🔍 Available keys: ['hero_title', 'hero_subtitle', ...]
💾 Setting hero content: { title: '...', subtitle: '...', paragraph: '...' }
```

---

## 🚀 Next Steps

1. **Open browser console** (F12)
2. **Refresh the page**
3. **Check the logs**
4. **Share what you see** if there are errors

The detailed logs will tell us exactly what's wrong!

