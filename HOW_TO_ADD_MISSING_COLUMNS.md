# How to Add Missing Columns to Your Projects Table
## Step-by-Step Guide with Visual Examples

---

## 📊 Your Current Table Structure

```
┌─────────────────────────────────────────────────────────────────┐
│                    TABLE: projects (Current)                     │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  ┌──────────────┬──────────────┬──────────────┬─────────────┐ │
│  │ Column Name  │ Type         │ Default      │ Nullable?    │ │
│  ├──────────────┼──────────────┼──────────────┼─────────────┤ │
│  │ id           │ int8         │ (auto)       │ ❌ No        │ │
│  │ created_at   │ timestamptz  │ now()        │ ❌ No        │ │
│  │ text         │ text         │ (empty)      │ ✅ Yes       │ │
│  │ category     │ json         │ (empty)      │ ✅ Yes       │ │
│  │ date         │ date         │ (empty)      │ ✅ Yes       │ │
│  │ cover_img    │ text         │ (empty)      │ ✅ Yes       │ │
│  │ images       │ jsonb        │ (empty)      │ ✅ Yes       │ │
│  └──────────────┴──────────────┴──────────────┴─────────────┘ │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

---

## 🎯 Columns to Add

You need to add these columns:

1. `slug` (text, unique) ⭐ **IMPORTANT**
2. `is_published` (bool, default: false) ⭐ **IMPORTANT**
3. `display_order` (int4, default: 0) ⭐ **IMPORTANT**
4. `title_en` (text) - Optional but recommended
5. `title_ar` (text) - Optional (if you need Arabic)
6. `description_en` (text) - Optional
7. `description_ar` (text) - Optional
8. `excerpt_en` (text) - Optional
9. `excerpt_ar` (text) - Optional
10. `thumbnail_image_url` (text) - Optional
11. `hero_image_url` (text) - Optional (or use `cover_img`)
12. `featured` (bool, default: false) - Optional

---

## 📝 Step-by-Step: Adding Each Column

### Column 1: `slug` ⭐ **REQUIRED**

1. In your `projects` table, click **"Add column"**
2. Fill in the form:

```
┌─────────────────────────────────────────────┐
│ Column name: slug                            │
│                                              │
│ Type: [text ▼]                               │
│   (Select "text" from dropdown)             │
│                                              │
│ Default value: [leave empty]                 │
│                                              │
│ ☐ Is nullable (UNCHECK - make it required)  │
│                                              │
│ ☑ Is unique (CHECK THIS - very important!)  │
│                                              │
│ ☐ Is primary key (leave unchecked)          │
│                                              │
│ [Save]                                       │
└─────────────────────────────────────────────┘
```

**Settings:**
- Column name: `slug`
- Type: `text`
- Default value: (empty)
- Is nullable: ❌ **NO** (unchecked)
- Is unique: ✅ **YES** (checked)
- Is primary key: ❌ No

---

### Column 2: `is_published` ⭐ **REQUIRED**

```
┌─────────────────────────────────────────────┐
│ Column name: is_published                    │
│                                              │
│ Type: [bool ▼]                               │
│   (Select "bool" from dropdown)             │
│                                              │
│ Default value: [false]                       │
│   (Type: false without quotes)               │
│                                              │
│ ☐ Is nullable (UNCHECK)                     │
│                                              │
│ ☐ Is unique (leave unchecked)               │
│                                              │
│ [Save]                                       │
└─────────────────────────────────────────────┘
```

**Settings:**
- Column name: `is_published`
- Type: `bool`
- Default value: `false`
- Is nullable: ❌ **NO**
- Is unique: ❌ No

---

### Column 3: `display_order` ⭐ **REQUIRED**

```
┌─────────────────────────────────────────────┐
│ Column name: display_order                   │
│                                              │
│ Type: [int4 ▼]                               │
│   (Select "int4" from dropdown)              │
│                                              │
│ Default value: [0]                           │
│   (Type: 0)                                  │
│                                              │
│ ☑ Is nullable (CHECK - can be empty)        │
│                                              │
│ ☐ Is unique (leave unchecked)                │
│                                              │
│ [Save]                                       │
└─────────────────────────────────────────────┘
```

**Settings:**
- Column name: `display_order`
- Type: `int4`
- Default value: `0`
- Is nullable: ✅ **YES** (checked)
- Is unique: ❌ No

---

### Column 4: `title_en` (Optional)

```
Column name: title_en
Type: text
Default value: (empty)
Is nullable: ✅ YES
Is unique: ❌ No
```

---

### Column 5: `title_ar` (Optional)

```
Column name: title_ar
Type: text
Default value: (empty)
Is nullable: ✅ YES
Is unique: ❌ No
```

---

### Column 6: `description_en` (Optional)

```
Column name: description_en
Type: text
Default value: (empty)
Is nullable: ✅ YES
Is unique: ❌ No
```

---

### Column 7: `description_ar` (Optional)

```
Column name: description_ar
Type: text
Default value: (empty)
Is nullable: ✅ YES
Is unique: ❌ No
```

---

### Column 8: `excerpt_en` (Optional)

```
Column name: excerpt_en
Type: text
Default value: (empty)
Is nullable: ✅ YES
Is unique: ❌ No
```

---

### Column 9: `excerpt_ar` (Optional)

```
Column name: excerpt_ar
Type: text
Default value: (empty)
Is nullable: ✅ YES
Is unique: ❌ No
```

---

### Column 10: `thumbnail_image_url` (Optional)

```
Column name: thumbnail_image_url
Type: text
Default value: (empty)
Is nullable: ✅ YES
Is unique: ❌ No
```

---

### Column 11: `hero_image_url` (Optional)

```
Column name: hero_image_url
Type: text
Default value: (empty)
Is nullable: ✅ YES
Is unique: ❌ No
```

**Note:** You already have `cover_img`, so this is optional. You can use either `cover_img` or `hero_image_url`.

---

### Column 12: `featured` (Optional)

```
Column name: featured
Type: bool
Default value: false
Is nullable: ❌ NO
Is unique: ❌ No
```

---

## 📊 How Your Table Will Look After Adding Columns

### Minimum Required Columns (3 columns to add):

```
┌─────────────────────────────────────────────────────────────────┐
│                    TABLE: projects (After Adding 3 Columns)     │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  ┌──────────────────┬──────────────┬──────────────┬─────────┐ │
│  │ Column Name       │ Type         │ Default      │ Null?   │ │
│  ├──────────────────┼──────────────┼──────────────┼─────────┤ │
│  │ id                │ int8         │ (auto)       │ ❌ No   │ │
│  │ created_at        │ timestamptz  │ now()        │ ❌ No   │ │
│  │ text              │ text         │ (empty)      │ ✅ Yes  │ │
│  │ category          │ json         │ (empty)      │ ✅ Yes  │ │
│  │ date              │ date         │ (empty)      │ ✅ Yes  │ │
│  │ cover_img         │ text         │ (empty)      │ ✅ Yes  │ │
│  │ images            │ jsonb        │ (empty)      │ ✅ Yes  │ │
│  │ slug              │ text         │ (empty)      │ ❌ No   │ │ ⭐ NEW
│  │ is_published      │ bool         │ false        │ ❌ No   │ │ ⭐ NEW
│  │ display_order     │ int4         │ 0            │ ✅ Yes  │ │ ⭐ NEW
│  └──────────────────┴──────────────┴──────────────┴─────────┘ │
│                                                                  │
│  Total: 9 columns                                               │
└─────────────────────────────────────────────────────────────────┘
```

---

### Complete Table (All Optional Columns Added):

```
┌─────────────────────────────────────────────────────────────────┐
│                    TABLE: projects (Complete)                    │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  ┌──────────────────────┬──────────────┬──────────────┬───────┐ │
│  │ Column Name           │ Type         │ Default      │ Null?│ │
│  ├──────────────────────┼──────────────┼──────────────┼───────┤ │
│  │ id                    │ int8         │ (auto)       │ ❌ No│ │
│  │ created_at            │ timestamptz  │ now()        │ ❌ No│ │
│  │ text                  │ text         │ (empty)      │ ✅ Yes│ │
│  │ category              │ json         │ (empty)      │ ✅ Yes│ │
│  │ date                  │ date         │ (empty)      │ ✅ Yes│ │
│  │ cover_img             │ text         │ (empty)      │ ✅ Yes│ │
│  │ images                │ jsonb        │ (empty)      │ ✅ Yes│ │
│  ├──────────────────────┼──────────────┼──────────────┼───────┤ │
│  │ slug                  │ text         │ (empty)      │ ❌ No│ │ ⭐ NEW
│  │ is_published          │ bool         │ false        │ ❌ No│ │ ⭐ NEW
│  │ display_order         │ int4         │ 0            │ ✅ Yes│ │ ⭐ NEW
│  ├──────────────────────┼──────────────┼──────────────┼───────┤ │
│  │ title_en              │ text         │ (empty)      │ ✅ Yes│ │ NEW
│  │ title_ar              │ text         │ (empty)      │ ✅ Yes│ │ NEW
│  │ description_en        │ text         │ (empty)      │ ✅ Yes│ │ NEW
│  │ description_ar       │ text         │ (empty)      │ ✅ Yes│ │ NEW
│  │ excerpt_en            │ text         │ (empty)      │ ✅ Yes│ │ NEW
│  │ excerpt_ar            │ text         │ (empty)      │ ✅ Yes│ │ NEW
│  │ thumbnail_image_url   │ text         │ (empty)      │ ✅ Yes│ │ NEW
│  │ hero_image_url        │ text         │ (empty)      │ ✅ Yes│ │ NEW
│  │ featured              │ bool         │ false        │ ❌ No│ │ NEW
│  └──────────────────────┴──────────────┴──────────────┴───────┘ │
│                                                                  │
│  Total: 18 columns                                               │
└─────────────────────────────────────────────────────────────────┘
```

---

## 🎯 Visual: What You'll See in Supabase Dashboard

### Before Adding Columns:
```
Table: projects
┌─────────────────────────────────────────────┐
│ Columns (7)                                  │
├─────────────────────────────────────────────┤
│ 🔑 id (int8)                                 │
│ created_at (timestamptz)                     │
│ text (text)                                  │
│ category (json)                              │
│ date (date)                                  │
│ cover_img (text)                             │
│ images (jsonb)                               │
│                                              │
│ [+ Add column]                               │
└─────────────────────────────────────────────┘
```

### After Adding 3 Required Columns:
```
Table: projects
┌─────────────────────────────────────────────┐
│ Columns (10)                                 │
├─────────────────────────────────────────────┤
│ 🔑 id (int8)                                 │
│ created_at (timestamptz)                     │
│ text (text)                                  │
│ category (json)                              │
│ date (date)                                  │
│ cover_img (text)                             │
│ images (jsonb)                               │
│ slug (text) [Unique] ⭐ NEW                  │
│ is_published (bool) ⭐ NEW                   │
│ display_order (int4) ⭐ NEW                  │
│                                              │
│ [+ Add column]                               │
└─────────────────────────────────────────────┘
```

---

## 📋 Quick Reference: Column Settings Table

| Column Name | Type | Default | Nullable? | Unique? | Required? |
|------------|------|---------|-----------|---------|-----------|
| `slug` | text | (empty) | ❌ No | ✅ Yes | ⭐ Yes |
| `is_published` | bool | `false` | ❌ No | ❌ No | ⭐ Yes |
| `display_order` | int4 | `0` | ✅ Yes | ❌ No | ⭐ Yes |
| `title_en` | text | (empty) | ✅ Yes | ❌ No | Optional |
| `title_ar` | text | (empty) | ✅ Yes | ❌ No | Optional |
| `description_en` | text | (empty) | ✅ Yes | ❌ No | Optional |
| `description_ar` | text | (empty) | ✅ Yes | ❌ No | Optional |
| `excerpt_en` | text | (empty) | ✅ Yes | ❌ No | Optional |
| `excerpt_ar` | text | (empty) | ✅ Yes | ❌ No | Optional |
| `thumbnail_image_url` | text | (empty) | ✅ Yes | ❌ No | Optional |
| `hero_image_url` | text | (empty) | ✅ Yes | ❌ No | Optional |
| `featured` | bool | `false` | ❌ No | ❌ No | Optional |

---

## ✅ Step-by-Step Checklist

### Minimum Required (Do These First):

- [ ] Add `slug` column (text, unique, NOT nullable)
- [ ] Add `is_published` column (bool, default: false, NOT nullable)
- [ ] Add `display_order` column (int4, default: 0, nullable: YES)

### Optional (Add Later if Needed):

- [ ] Add `title_en` column (text, nullable)
- [ ] Add `title_ar` column (text, nullable)
- [ ] Add `description_en` column (text, nullable)
- [ ] Add `description_ar` column (text, nullable)
- [ ] Add `excerpt_en` column (text, nullable)
- [ ] Add `excerpt_ar` column (text, nullable)
- [ ] Add `thumbnail_image_url` column (text, nullable)
- [ ] Add `hero_image_url` column (text, nullable)
- [ ] Add `featured` column (bool, default: false, NOT nullable)

---

## 🔧 After Adding Columns: Fill in Data

### 1. Fill in `slug` values for existing rows:

For each project, add a URL-friendly slug:
- "Egy Air" → `slug: "egy-air"`
- "Sonic Game" → `slug: "sonic-game"`
- "Freezy Bite" → `slug: "freezy-bite"`

### 2. Set `is_published`:

- Set to `true` for projects you want visible
- Set to `false` for drafts

### 3. Set `display_order`:

- Use numbers to control sort order (0, 1, 2, 3...)
- Lower numbers appear first

---

## 💡 Recommendation

**Start with the 3 required columns:**
1. `slug` ⭐
2. `is_published` ⭐
3. `display_order` ⭐

Then add optional columns later as needed. This gives you the essential functionality without overwhelming your table structure.

---

## 🎬 Summary

Your table will go from **7 columns** to **10 columns** (minimum) or **18 columns** (complete).

The most important additions are:
- `slug` - For URLs and routing
- `is_published` - To control visibility
- `display_order` - To control sorting

Add these 3 first, then add the optional ones as you need them! 🚀

