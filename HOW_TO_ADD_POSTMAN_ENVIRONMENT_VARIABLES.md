# 📝 How to Add Environment Variables in Postman

Step-by-step guide showing exactly where to add variables in Postman.

---

## 🎯 Step-by-Step Instructions

### Step 1: Open Environments
1. **Look at the left sidebar** in Postman
2. You'll see tabs: **"Collections"**, **"Environments"**, **"History"**, **"Flows"**
3. **Click on "Environments"** tab (second from top, usually)

### Step 2: Create New Environment
1. **Click the "+" button** (top left, next to "Environments" title)
   - OR click **"Create Environment"** button
2. A form will appear

### Step 3: Fill in Environment Details
1. **Environment name**: Type `Supabase Portfolio` (or any name you want)
2. You'll see a table with columns: **Variable**, **Initial Value**, **Current Value**

### Step 4: Add First Variable (`supabase_url`)
1. **Click in the first empty row** under "Variable" column
2. **Type**: `supabase_url`
3. **Tab** to "Initial Value" column (or click it)
4. **Type**: `https://kkvepvlkgppzwapbbynh.supabase.co`
5. **Tab** to "Current Value" column
6. **Type**: `https://kkvepvlkgppzwapbbynh.supabase.co` (same value)

### Step 5: Add Second Variable (`supabase_key`)
1. **Click in the next empty row** under "Variable" column
2. **Type**: `supabase_key`
3. **Tab** to "Initial Value" column
4. **Type**: `sb_publishable_TXDJdOMzyg5RYq3aEYf7JQ_HlukQAuB`
5. **Tab** to "Current Value" column
6. **Type**: `sb_publishable_TXDJdOMzyg5RYq3aEYf7JQ_HlukQAuB` (same value)

### Step 6: Save Environment
1. **Click "Save" button** (bottom right of the form)
2. Your environment is now created!

### Step 7: Select Environment
1. **Look at the top right** of Postman window
2. You'll see a **dropdown** that says "No Environment" or "Environments"
3. **Click the dropdown**
4. **Select** `Supabase Portfolio` (the environment you just created)
5. Now it's active! ✅

---

## 📋 Visual Guide

### What You'll See:

```
┌─────────────────────────────────────────────────┐
│ Postman                                          │
├─────────────────────────────────────────────────┤
│                                                  │
│  [Collections] [Environments] [History] [Flows] │ ← Step 1: Click "Environments"
│                                                  │
│  Environments                                    │
│  ┌───────────────────────────────────────────┐  │
│  │ + Create Environment                     │  │ ← Step 2: Click "+" or "Create"
│  └───────────────────────────────────────────┘  │
│                                                  │
│  ┌───────────────────────────────────────────┐  │
│  │ Environment Name: [Supabase Portfolio]    │  │ ← Step 3: Type name
│  │                                              │
│  │ ┌──────────┬──────────────┬──────────────┐│
│  │ │ Variable │ Initial Value│ Current Value││
│  │ ├──────────┼──────────────┼──────────────┤│
│  │ │supabase_ │https://kkvep..│https://kkvep..││ ← Step 4: Add supabase_url
│  │ │url       │              │              ││
│  │ ├──────────┼──────────────┼──────────────┤│
│  │ │supabase_ │sb_publishable│sb_publishable││ ← Step 5: Add supabase_key
│  │ │key       │_TXDJdOMzyg...│_TXDJdOMzyg...││
│  │ └──────────┴──────────────┴──────────────┘│
│  │                                              │
│  │                    [Save]                   │ ← Step 6: Click Save
│  └───────────────────────────────────────────┘
│                                                  │
│  Top Right:                                      │
│  [No Environment ▼]                            │ ← Step 7: Select your environment
│                                                  │
└─────────────────────────────────────────────────┘
```

---

## 🎯 After Creating Environment

### How to Use Variables in Requests:

1. **In URL field**, type:
   ```
   {{supabase_url}}/rest/v1/home_content
   ```
   Postman will automatically replace `{{supabase_url}}` with your actual URL!

2. **In Headers**, type:
   ```
   apikey: {{supabase_key}}
   Authorization: Bearer {{supabase_key}}
   ```
   Postman will automatically replace `{{supabase_key}}` with your actual key!

---

## ✅ Quick Checklist

- [ ] Clicked "Environments" tab (left sidebar)
- [ ] Clicked "+" or "Create Environment" button
- [ ] Named environment: "Supabase Portfolio"
- [ ] Added variable: `supabase_url` = `https://kkvepvlkgppzwapbbynh.supabase.co`
- [ ] Added variable: `supabase_key` = `sb_publishable_TXDJdOMzyg5RYq3aEYf7JQ_HlukQAuB`
- [ ] Clicked "Save"
- [ ] Selected environment from dropdown (top right)

---

## 🎯 Example: Using Variables in a Request

### Before (without variables):
```
URL: https://kkvepvlkgppzwapbbynh.supabase.co/rest/v1/home_content
Header: apikey: sb_publishable_TXDJdOMzyg5RYq3aEYf7JQ_HlukQAuB
```

### After (with variables):
```
URL: {{supabase_url}}/rest/v1/home_content
Header: apikey: {{supabase_key}}
```

**Much easier!** And if your URL or key changes, you only update it in one place! 🎉

---

## 🐛 Troubleshooting

### "I don't see Environments tab"
- Make sure you're in the main Postman window (not a request)
- Look at the very left sidebar
- It should be the second tab from top

### "Variables not working"
- Make sure environment is **selected** (top right dropdown)
- Check variable names: `{{supabase_url}}` (with double curly braces)
- Make sure you saved the environment

### "Can't find the dropdown"
- Look at **top right** of Postman window
- Should say "No Environment" or show your environment name
- Click it to see dropdown menu

---

## 🚀 You're Done!

Once you've added the variables and selected the environment, you can use `{{supabase_url}}` and `{{supabase_key}}` in all your requests! 🎉

