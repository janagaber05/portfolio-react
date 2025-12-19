# 🔍 Debug API Content Issues

## ✅ What I Fixed

### 1. HomeOneEN.jsx
- ✅ Removed hardcoded initial state content
- ✅ Removed all fallback values (|| 'default text')
- ✅ Added loading state
- ✅ Added console logging to debug API responses
- ✅ Content now ONLY comes from API

### 2. HomeTwoEN.jsx
- ✅ Added console logging to see what keys are available
- ✅ Content already set to only use API (no fallbacks)

### 3. All Pages
- ✅ Removed all hardcoded content arrays
- ✅ Removed all fallback text

---

## 🔍 How to Debug

### Step 1: Open Browser Console
1. Open your app in browser
2. Press `F12` or `Right-click → Inspect`
3. Go to **Console** tab

### Step 2: Check Console Logs

You should see logs like:
```
Fetched home content: [...]
Content map: {...}
Looking for keys: hero_title, hero_subtitle, hero_paragraph
Set hero content: {...}
```

### Step 3: Check What Keys Are Available

Look for this log:
```
Available keys: ['hero_title', 'know_me_title', ...]
```

**If you see different keys**, that's the problem! The code is looking for:
- `hero_title`
- `hero_subtitle`
- `hero_paragraph`

But your Supabase might have different key names.

---

## 🎯 Common Issues & Fixes

### Issue 1: Content Not Showing

**Problem**: API returns data but content is empty

**Check**:
1. Open browser console
2. Look for "Fetched home content" log
3. Check if `content_en` column has data
4. Check if `key` values match what code expects

**Fix**: Make sure your Supabase `key` values match:
- `hero_title` (not `hero-title` or `heroTitle`)
- `hero_subtitle` (not `hero-subtitle`)
- `hero_paragraph` (not `hero-paragraph`)

---

### Issue 2: Wrong Key Names

**Problem**: Code looks for `hero_title` but Supabase has `hero-title`

**Solution**: Either:
1. **Change Supabase keys** to match code (recommended)
2. **Change code** to match Supabase keys

---

### Issue 3: Empty Content

**Problem**: Content shows empty even though data exists

**Check**:
1. Is `content_en` column filled in Supabase?
2. Is `section` = `'home'` correct?
3. Check console for errors

**Fix**: Make sure:
- `content_en` column has HTML/text content
- `section` is exactly `'home'` (case-sensitive)
- No RLS policy blocking the read

---

## 📋 Required Supabase Keys for Home Page

### HomeOneEN.jsx (Hero Section)
Your `home_about_category_content` table needs rows with:

| section | key | content_en |
|---------|-----|------------|
| `home` | `hero_title` | Your hero title HTML |
| `home` | `hero_subtitle` | Your hero subtitle text |
| `home` | `hero_paragraph` | Your hero paragraph text |

### HomeTwoEN.jsx (Detailed Sections)
Your `home_about_category_content` table needs rows with:

| section | key | content_en |
|---------|-----|------------|
| `home` | `know_me_title` | Know Me title |
| `home` | `know_me_description` | Know Me description HTML |
| `home` | `approach_title` | Approach title |
| `home` | `approach_description` | Approach description HTML |
| `home` | `app_design_title` | App Design title |
| `home` | `app_design_description` | App Design description HTML |
| `home` | `strengths_title` | Strengths section title |
| `home` | `values_title` | Values section title |
| `home` | `growing_title` | Growing section title |

**Plus metadata for cards**:
- `strengths` key with `metadata` JSON containing `cards` array
- `values` key with `metadata` JSON containing `cards` array
- `growing` key with `metadata` JSON containing `cards` array

---

## 🧪 Test Your API

### Test in Browser Console

Open console and run:

```javascript
// Test if Supabase connection works
const { data, error } = await supabase
  .from('home_about_category_content')
  .select('*')
  .eq('section', 'home');

console.log('Data:', data);
console.log('Error:', error);
```

### Check What Keys You Have

```javascript
const { data } = await supabase
  .from('home_about_category_content')
  .select('key, content_en')
  .eq('section', 'home');

console.log('Keys:', data.map(d => d.key));
```

---

## 🎯 Next Steps

1. **Open browser console** and check logs
2. **Verify your Supabase keys** match what code expects
3. **Check if content_en has data** in Supabase
4. **Share console logs** if content still doesn't show

---

## 📝 Notes

- **Images**: Images are still hardcoded (like `/imgs/home page/hero-img.png`). This is normal - images are usually static assets, not from API.
- **If you want images from API**: You'd need to add an `image_url` column to your content table and update the code to use it.

---

## ✅ Summary

All hardcoded content has been removed. Content now ONLY comes from your Supabase API. If content isn't showing:

1. Check browser console for errors
2. Verify Supabase has data with correct `key` values
3. Make sure `section` = `'home'` matches
4. Check that `content_en` column has content

