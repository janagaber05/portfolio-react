# What is YOUR_SUPABASE_ANON_KEY?
## How to Find and Use Your Supabase API Key

---

## 🔑 What is the Anon Key?

**`YOUR_SUPABASE_ANON_KEY`** is your **Supabase API key** (also called "anon key" or "public key").

**What it does:**
- Authenticates your API requests to Supabase
- Allows you to read/write data from your Supabase database
- Required for ALL API requests

**Important:**
- It's safe to use in frontend code (it's public)
- It's restricted by Row Level Security (RLS) policies
- You need it for Postman requests

---

## 📍 Where to Find Your Supabase Anon Key

### Step-by-Step:

1. **Go to Supabase Dashboard**
   - Open your browser
   - Go to: https://supabase.com/dashboard
   - Log in if needed

2. **Select Your Project**
   - Click on your project name (or create one if you don't have one)

3. **Go to Settings**
   - Look at the **left sidebar**
   - Click on **"Settings"** (gear icon ⚙️)
   - It's usually at the bottom of the sidebar

4. **Click on "API"**
   - Under Settings, you'll see several options
   - Click on **"API"**

5. **Find Your Keys**
   - You'll see a page with API information
   - Look for **"Project API keys"** section
   - You'll see two keys:
     - **`publishable key`** ← This is the one you need! (This is the anon/public key)
     - **`secret key`** ← Don't use this one (it's secret, for backend only)

6. **Copy the Publishable Key**
   - Find the **`publishable key`** (this is your anon/public key)
   - It looks like: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFiY2RlZmdoaWprbG1ub3AiLCJyb2xlIjoiYW5vbiIsImlhdCI6MTYxNjIzOTAyMiwiZXhwIjoxOTMxODE1MDIyfQ.xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`
   - Click the **copy icon** (📋) next to it
   - OR select the text and copy it
   - **This is the key you'll use in Postman!**

---

## 🎯 Visual Guide: Where to Find It

```
┌─────────────────────────────────────────────────────────────┐
│  Supabase Dashboard                                          │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  Left Sidebar:                                               │
│  ┌────────────────────────┐                                 │
│  │ Table Editor           │                                 │
│  │ Authentication         │                                 │
│  │ Storage                │                                 │
│  │ Edge Functions         │                                 │
│  │ ...                    │                                 │
│  │ Settings ⚙️            │ ← Click here                    │
│  │   ├─ General           │                                 │
│  │   ├─ API               │ ← Then click here               │
│  │   ├─ Database          │                                 │
│  │   └─ ...               │                                 │
│  └────────────────────────┘                                 │
│                                                              │
│  API Settings Page:                                         │
│  ┌────────────────────────────────────────────────────────┐ │
│  │ Project API keys                                       │ │
│  ├────────────────────────────────────────────────────────┤ │
│  │                                                         │ │
│  │ publishable key                                        │ │
│  │ eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...                │ │
│  │ [📋 Copy]                                              │ ← Copy this one!
│  │                                                         │ │
│  │ secret key                                             │ │
│  │ eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...                │ │
│  │ (Don't use this one - it's secret)                     │ │
│  │                                                         │ │
│  └────────────────────────────────────────────────────────┘ │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

---

## 📋 Step-by-Step: Get Your Key

### Detailed Steps:

1. **Open Supabase Dashboard**
   ```
   https://supabase.com/dashboard
   ```

2. **Select Your Project**
   - Click on your project from the list
   - If you don't have a project, create one first

3. **Click "Settings"**
   - Left sidebar → Bottom → "Settings" (gear icon)

4. **Click "API"**
   - Under Settings menu → "API"

5. **Find "Project API keys" Section**
   - Scroll down to "Project API keys"
   - You'll see two keys listed

6. **Copy the `publishable key`**
   - Look for the key labeled **`publishable key`** (this is your anon/public key)
   - It's a long string starting with `eyJ...`
   - Click the copy icon (📋) or select and copy
   - **This is the key you need for Postman!**

7. **Save It Safely**
   - Paste it somewhere safe (notepad, password manager)
   - You'll need it for all Postman requests

---

## 🔍 What the Key Looks Like

**Format:**
```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFiY2RlZmdoaWprbG1ub3AiLCJyb2xlIjoiYW5vbiIsImlhdCI6MTYxNjIzOTAyMiwiZXhwIjoxOTMxODE1MDIyfQ.xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

**Characteristics:**
- Very long string (200+ characters)
- Starts with `eyJ`
- Contains dots (`.`) separating parts
- It's a JWT (JSON Web Token)

---

## 💡 How to Use It in Postman

### In Headers:

**Header 1: apikey**
```
KEY: apikey
VALUE: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9... (paste your full key here)
```

**Header 2: Authorization**
```
KEY: Authorization
VALUE: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9... (paste your full key here after "Bearer ")
```

**Important:** 
- Use the SAME key for both headers
- For Authorization, add "Bearer " before the key (with a space)

---

## 🎯 Quick Example

**What you'll see in Supabase:**
```
Project API keys

publishable key
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFiY2RlZmdoaWprbG1ub3AiLCJyb2xlIjoiYW5vbiIsImlhdCI6MTYxNjIzOTAyMiwiZXhwIjoxOTMxODE1MDIyfQ.xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
[📋 Copy] ← Copy this one!

secret key
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9... (Don't use this one)
```

**How to use in Postman:**
```
Headers:
  apikey: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9... (paste full key)
  Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9... (paste full key)
```

---

## ⚠️ Important Notes

1. **Use `publishable key`:**
   - ✅ This is the one you need (it's the anon/public key)
   - Safe to use in frontend and Postman
   - This is what you'll use for all Postman requests

2. **Don't use `secret key`:**
   - ❌ This is for backend only
   - Has full access (bypasses RLS)
   - Never expose it publicly
   - Keep it secret!

3. **Keep it safe:**
   - Don't commit it to public repositories
   - Use environment variables in production
   - It's okay to use in Postman for testing

4. **Each project has its own key:**
   - Different projects = different keys
   - Make sure you're using the key from the correct project

---

## 🚀 Summary

**What is it?**
- Your Supabase API authentication key
- Required for all API requests

**Where to find it?**
1. Supabase Dashboard
2. Settings → API
3. Project API keys section
4. Copy the **`publishable key`** (this is your anon/public key)

**How to use it?**
- In Postman headers:
  - `apikey`: paste the full key
  - `Authorization`: `Bearer ` + paste the full key

**That's your Supabase anon key!** Use it in all your Postman requests! 🎯

