# Skills and Experience Tables - Setup Guide
## Create Tables for Skills and Education/Experience

---

## 📊 Overview

You need **two tables**:

1. **`skills`** - Store technical skills (PS, PR, Figma, CSS, HTML, etc.)
2. **`experience`** - Store education and work experience

---

## 🎯 Table 1: `skills`

### Purpose
Store your technical skills that appear on the home page (PS, PR, AN, LR, Figma, Adobe, AE, AI, CSS, HTML, JS, etc.)

### Step 1: Create the Table

1. Go to **Table Editor** in Supabase Dashboard
2. Click **"New table"** button
3. Table name: `skills`
4. Click **"Save"** or **"Create table"**

### Step 2: Add Columns

#### Column 1: `id` ⭐ FIRST COLUMN
```
Column name: id
Type: uuid (or int8 if your other tables use int8)
Default value: gen_random_uuid() (or leave empty if int8)
Is nullable: ❌ No (unchecked)
Is unique: ✅ Yes (checked)
Is primary key: ✅ Yes (checked)
```

#### Column 2: `name`
```
Column name: name
Type: text
Default value: (leave empty)
Is nullable: ❌ No (unchecked)
```

#### Column 3: `name_ar`
```
Column name: name_ar
Type: text
Default value: (leave empty)
Is nullable: ✅ Yes (checked)
```

#### Column 4: `type`
```
Column name: type
Type: text
Default value: (leave empty)
Is nullable: ✅ Yes (checked)
```

**Purpose:** Special type for icons (e.g., "figma", "adobe") - leave empty for regular skills

#### Column 5: `display_order`
```
Column name: display_order
Type: int4
Default value: 0
Is nullable: ✅ Yes (checked)
```

#### Column 6: `created_at`
```
Column name: created_at
Type: timestamptz
Default value: now()
Is nullable: ❌ No (unchecked)
```

#### Column 7: `updated_at`
```
Column name: updated_at
Type: timestamptz
Default value: now()
Is nullable: ❌ No (unchecked)
```

---

## 📝 Skills Table: What Rows to Add

### Row 1: PS (Photoshop)
```
name: PS
name_ar: (leave empty)
type: (leave empty)
display_order: 0
```

### Row 2: PR (Premiere Pro)
```
name: PR
name_ar: (leave empty)
type: (leave empty)
display_order: 1
```

### Row 3: AN (After Effects)
```
name: AN
name_ar: (leave empty)
type: (leave empty)
display_order: 2
```

### Row 4: LR (Lightroom)
```
name: LR
name_ar: (leave empty)
type: (leave empty)
display_order: 3
```

### Row 5: Figma
```
name: Figma
name_ar: (leave empty)
type: figma
display_order: 4
```

### Row 6: PS (Photoshop - second instance)
```
name: PS
name_ar: (leave empty)
type: (leave empty)
display_order: 5
```

### Row 7: Adobe
```
name: Adobe
name_ar: (leave empty)
type: adobe
display_order: 6
```

### Row 8: AE (After Effects)
```
name: AE
name_ar: (leave empty)
type: (leave empty)
display_order: 7
```

### Row 9: AI (Illustrator)
```
name: AI
name_ar: (leave empty)
type: (leave empty)
display_order: 8
```

### Row 10: CSS
```
name: CSS
name_ar: (leave empty)
type: (leave empty)
display_order: 9
```

### Row 11: HTML
```
name: HTML
name_ar: (leave empty)
type: (leave empty)
display_order: 10
```

### Row 12: JS (JavaScript)
```
name: JS
name_ar: (leave empty)
type: (leave empty)
display_order: 11
```

**Total: 12 rows** (one for each skill)

---

## 🎯 Table 2: `experience`

### Purpose
Store education and work experience entries

### Step 1: Create the Table

1. Go to **Table Editor** in Supabase Dashboard
2. Click **"New table"** button
3. Table name: `experience`
4. Click **"Save"** or **"Create table"**

### Step 2: Add Columns

#### Column 1: `id` ⭐ FIRST COLUMN
```
Column name: id
Type: uuid (or int8 if your other tables use int8)
Default value: gen_random_uuid() (or leave empty if int8)
Is nullable: ❌ No (unchecked)
Is unique: ✅ Yes (checked)
Is primary key: ✅ Yes (checked)
```

#### Column 2: `type`
```
Column name: type
Type: text
Default value: (leave empty)
Is nullable: ❌ No (unchecked)
```

**Purpose:** Either "education" or "work" or "certification"

#### Column 3: `year_start`
```
Column name: year_start
Type: text
Default value: (leave empty)
Is nullable: ✅ Yes (checked)
```

**Purpose:** Start year (e.g., "2024", "2025")

#### Column 4: `year_end`
```
Column name: year_end
Type: text
Default value: (leave empty)
Is nullable: ✅ Yes (checked)
```

**Purpose:** End year (e.g., "2026", "Present")

#### Column 5: `year_display`
```
Column name: year_display
Type: text
Default value: (leave empty)
Is nullable: ✅ Yes (checked)
```

**Purpose:** Display format (e.g., "2025–2026", "2024")

#### Column 6: `institution_en`
```
Column name: institution_en
Type: text
Default value: (leave empty)
Is nullable: ❌ No (unchecked)
```

**Purpose:** School/company name in English

#### Column 7: `institution_ar`
```
Column name: institution_ar
Type: text
Default value: (leave empty)
Is nullable: ✅ Yes (checked)
```

**Purpose:** School/company name in Arabic

#### Column 8: `program_en`
```
Column name: program_en
Type: text
Default value: (leave empty)
Is nullable: ❌ No (unchecked)
```

**Purpose:** Program/position name in English

#### Column 9: `program_ar`
```
Column name: program_ar
Type: text
Default value: (leave empty)
Is nullable: ✅ Yes (checked)
```

**Purpose:** Program/position name in Arabic

#### Column 10: `description_en`
```
Column name: description_en
Type: text
Default value: (leave empty)
Is nullable: ✅ Yes (checked)
```

**Purpose:** Optional description in English

#### Column 11: `description_ar`
```
Column name: description_ar
Type: text
Default value: (leave empty)
Is nullable: ✅ Yes (checked)
```

**Purpose:** Optional description in Arabic

#### Column 12: `display_order`
```
Column name: display_order
Type: int4
Default value: 0
Is nullable: ✅ Yes (checked)
```

#### Column 13: `created_at`
```
Column name: created_at
Type: timestamptz
Default value: now()
Is nullable: ❌ No (unchecked)
```

#### Column 14: `updated_at`
```
Column name: updated_at
Type: timestamptz
Default value: now()
Is nullable: ❌ No (unchecked)
```

---

## 📝 Experience Table: What Rows to Add

### Row 1: Education - Egypt University of Informatics
```
type: education
year_start: 2025
year_end: 2026
year_display: 2025–2026
institution_en: Egypt University of Informatics
institution_ar: جامعة مصر للمعلوماتية
program_en: Digital Arts & Design – UX/UI
program_ar: الفنون الرقمية وتصميم UX/UI
description_en: (leave empty)
description_ar: (leave empty)
display_order: 0
```

### Row 2: Education - CLS Center
```
type: education
year_start: 2024
year_end: 2024
year_display: 2024
institution_en: CLS Center
institution_ar: مركز CLS
program_en: Front-end Code
program_ar: برمجة الواجهة الأمامية
description_en: (leave empty)
description_ar: (leave empty)
display_order: 1
```

**Total: 2 rows** (for education - add more as needed for work experience)

---

## 📊 Visual: Complete Table Structures

### Skills Table:
```
┌─────────────────────────────────────────────────────────────────┐
│                    TABLE: skills                                │
├─────────────────────────────────────────────────────────────────┤
│  ┌──────────────────────┬──────────────┬──────────────┬───────┐ │
│  │ Column Name           │ Type         │ Default      │ Null?│ │
│  ├──────────────────────┼──────────────┼──────────────┼───────┤ │
│  │ id                    │ uuid/int8    │ auto         │ ❌ No│ │
│  │ name                  │ text         │ (empty)      │ ❌ No│ │
│  │ name_ar               │ text         │ (empty)      │ ✅ Yes│ │
│  │ type                  │ text         │ (empty)      │ ✅ Yes│ │
│  │ display_order         │ int4         │ 0            │ ✅ Yes│ │
│  │ created_at            │ timestamptz  │ now()        │ ❌ No│ │
│  │ updated_at            │ timestamptz  │ now()        │ ❌ No│ │
│  └──────────────────────┴──────────────┴──────────────┴───────┘ │
└─────────────────────────────────────────────────────────────────┘
```

### Experience Table:
```
┌─────────────────────────────────────────────────────────────────┐
│                  TABLE: experience                              │
├─────────────────────────────────────────────────────────────────┤
│  ┌──────────────────────┬──────────────┬──────────────┬───────┐ │
│  │ Column Name           │ Type         │ Default      │ Null?│ │
│  ├──────────────────────┼──────────────┼──────────────┼───────┤ │
│  │ id                    │ uuid/int8    │ auto         │ ❌ No│ │
│  │ type                  │ text         │ (empty)      │ ❌ No│ │
│  │ year_start            │ text         │ (empty)      │ ✅ Yes│ │
│  │ year_end              │ text         │ (empty)      │ ✅ Yes│ │
│  │ year_display          │ text         │ (empty)      │ ✅ Yes│ │
│  │ institution_en        │ text         │ (empty)      │ ❌ No│ │
│  │ institution_ar        │ text         │ (empty)      │ ✅ Yes│ │
│  │ program_en            │ text         │ (empty)      │ ❌ No│ │
│  │ program_ar            │ text         │ (empty)      │ ✅ Yes│ │
│  │ description_en        │ text         │ (empty)      │ ✅ Yes│ │
│  │ description_ar        │ text         │ (empty)      │ ✅ Yes│ │
│  │ display_order         │ int4         │ 0            │ ✅ Yes│ │
│  │ created_at            │ timestamptz  │ now()        │ ❌ No│ │
│  │ updated_at            │ timestamptz  │ now()        │ ❌ No│ │
│  └──────────────────────┴──────────────┴──────────────┴───────┘ │
└─────────────────────────────────────────────────────────────────┘
```

---

## ✅ Step-by-Step Checklist

### Skills Table:
- [ ] Create table: `skills`
- [ ] Add 7 columns (id, name, name_ar, type, display_order, created_at, updated_at)
- [ ] Add 12 skill rows (PS, PR, AN, LR, Figma, PS, Adobe, AE, AI, CSS, HTML, JS)
- [ ] Enable RLS
- [ ] Add RLS policies

### Experience Table:
- [ ] Create table: `experience`
- [ ] Add 14 columns (id, type, year_start, year_end, year_display, institution_en, institution_ar, program_en, program_ar, description_en, description_ar, display_order, created_at, updated_at)
- [ ] Add 2 education rows (Egypt University, CLS Center)
- [ ] Add work experience rows (if any)
- [ ] Enable RLS
- [ ] Add RLS policies

---

## 💡 Important Notes

1. **Skills Table:**
   - One row per skill
   - Use `type` column for special icons (figma, adobe)
   - Use `display_order` to control sequence

2. **Experience Table:**
   - One row per education/work entry
   - Use `type` to differentiate: "education", "work", "certification"
   - Use `year_display` for formatted display (e.g., "2025–2026")
   - Use `display_order` to control sequence (newest first usually)

3. **Column Types:**
   - Use `uuid` for `id` if your other tables use uuid
   - Use `int8` for `id` if your other tables use int8
   - Keep it consistent with your other tables!

---

## 🚀 Summary

**Two tables to create:**
1. `skills` - 7 columns, 12 rows (technical skills)
2. `experience` - 14 columns, 2+ rows (education and work experience)

**After creating:**
- Skills will appear on home page
- Education/Experience will appear on home page
- You can manage them from Supabase Dashboard

**This allows you to manage all skills and experience from Supabase!** 🎯

