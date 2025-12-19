# ✅ Add Variables to Your Postman Environment

You're in the right place! Here's exactly what to type:

---

## 🎯 Step 1: Add First Variable

1. **Click in the "Variable" column** (first column)
2. **Type**: `supabase_url`
3. **Click in the "Value" column** (second column, same row)
4. **Type**: `https://kkvepvlkgppzwapbbynh.supabase.co`

---

## 🎯 Step 2: Add Second Variable

1. **Click in the next empty row** in the "Variable" column
2. **Type**: `supabase_key`
3. **Click in the "Value" column** (same row, second column)
4. **Type**: `sb_publishable_TXDJdOMzyg5RYq3aEYf7JQ_HlukQAuB`

---

## 📋 What Your Screen Should Look Like:

```
┌─────────────────────────────────────────┐
│ Variable        │ Value                  │
├─────────────────────────────────────────┤
│ supabase_url    │ https://kkvepvlkgpp... │
│ supabase_key    │ sb_publishable_TXDJ... │
└─────────────────────────────────────────┘
```

---

## ✅ Step 3: Save

1. **Look for a "Save" button** (usually top right or bottom)
2. **Click "Save"**
3. Done! ✅

---

## 🎯 Step 4: Make Sure It's Selected

1. **Look at the top right** of Postman
2. You should see a **dropdown** that says "Supabase Portfolio" or "No Environment"
3. **Click the dropdown**
4. **Select "Supabase Portfolio"** (if not already selected)

---

## 🚀 Now You Can Use Variables!

In any request, use:
- URL: `{{supabase_url}}/rest/v1/home_content`
- Header: `apikey: {{supabase_key}}`

Postman will automatically replace these with your actual values! 🎉

