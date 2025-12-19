# ✅ Verify Your Supabase Data

After adding all data via Postman, verify everything is correct.

---

## 🔍 Step 1: Check in Supabase Dashboard

### Check `home_content` Table
1. Go to Supabase Dashboard
2. Click **"Table Editor"**
3. Select **`home_content`** table
4. You should see **14 rows** with:
   - `section = 'home'`
   - Keys: `know_me_title`, `know_me_content`, `approach_title`, `approach_content`, `strengths_title`, `strengths`, `values_title`, `values`, `growing_title`, `growing`, `app_design_title`, `app_design_content`, `app_design_label`, `app_design_image`

### Check `skills` Table
1. Select **`skills`** table
2. You should see **12 rows** with names: PS, PR, AN, LR, Figma, PS, Adobe, AE, AI, CSS, HTML, JS

### Check `experience` Table
1. Select **`experience`** table
2. You should see **2 rows** with:
   - Egypt University of Informatics
   - CLS Center
   - Both with `type = 'education'`

---

## 🔍 Step 2: Test with GET Requests in Postman

### Test 1: Get All Home Content
**Method**: `GET`
**URL**: `https://kkvepvlkgppzwapbbynh.supabase.co/rest/v1/home_content?section=eq.home`
**Headers**:
```
apikey: YOUR_SUPABASE_ANON_KEY
Authorization: Bearer YOUR_SUPABASE_ANON_KEY
```

**Expected**: Should return 14 rows

### Test 2: Get All Skills
**Method**: `GET`
**URL**: `https://kkvepvlkgppzwapbbynh.supabase.co/rest/v1/skills?order=display_order`
**Headers**: Same as above

**Expected**: Should return 12 rows

### Test 3: Get All Experience
**Method**: `GET`
**URL**: `https://kkvepvlkgppzwapbbynh.supabase.co/rest/v1/experience?type=eq.education`
**Headers**: Same as above

**Expected**: Should return 2 rows

---

## 🔍 Step 3: Check Your React App

1. **Start your app** (if not running):
   ```bash
   npm start
   ```

2. **Navigate to home page**:
   - Go to `http://localhost:3000/home-two` (or your port)

3. **Check if data appears**:
   - Know Me section should show your content
   - Strengths cards should display (5 cards)
   - Values cards should display (4 cards)
   - Growing cards should display (5 cards)
   - Skills should appear in the skills matrix
   - Education should show in the education section

---

## 🐛 Troubleshooting

### Data Not Showing in App?

1. **Check Browser Console**:
   - Open DevTools (F12)
   - Look for errors in Console tab
   - Check Network tab for API calls

2. **Check if API is being called**:
   - Look for requests to Supabase in Network tab
   - Check if they return 200 status

3. **Verify RLS Policies**:
   - Go to Supabase → Authentication → Policies
   - Make sure SELECT policy exists for public access
   - Policy should be: `Allow SELECT for all users`

4. **Check Table Names**:
   - Make sure table names match exactly: `home_content`, `skills`, `experience`
   - Case-sensitive!

5. **Check Column Names**:
   - Verify column names match your code
   - Common: `section`, `key`, `content_en`, `metadata`, `display_order`

---

## ✅ Success Checklist

- [ ] 14 rows in `home_content` table
- [ ] 12 rows in `skills` table
- [ ] 2 rows in `experience` table
- [ ] GET requests return correct data
- [ ] Data appears in React app
- [ ] No console errors
- [ ] All sections display correctly

---

## 🎯 Next Steps

If everything is working:

1. **Add More Content**:
   - About page content
   - Category page content
   - Blog posts
   - Projects

2. **Add Images**:
   - Upload images to Supabase Storage
   - Update image URLs in your data

3. **Test All Pages**:
   - Test home page
   - Test about page
   - Test category page
   - Test blog page

---

## 💡 Quick Fixes

### If Data Not Loading:
```javascript
// Check your Supabase query in the code
// Should be something like:
const { data, error } = await supabase
  .from('home_content')
  .select('*')
  .eq('section', 'home')
  .order('display_order');

if (error) {
  console.error('Error:', error);
}
console.log('Data:', data);
```

### If RLS Error:
1. Go to Supabase Dashboard
2. Authentication → Policies
3. Create new policy:
   - Policy name: "Allow public read"
   - Allowed operation: SELECT
   - Target roles: public
   - USING expression: `true`

---

## 🎉 You're Done!

If all data is showing correctly, your home page is now fully connected to Supabase! 🚀

