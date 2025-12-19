# 📝 EXPERIENCE Table - Exact Row Values

Complete guide with exact values for all rows in the `experience` table.

**Your columns:**
- `type`
- `year_display` (text - for displaying year range)
- `start_year`
- `end_year`
- `institution_en`
- `institution_ar`
- `program_en`
- `program_ar`
- `description_en`
- `description_ar`
- `display_order`
- `updated_at` (auto-generated)

---

## 🎯 How to Add Rows

### Option 1: Supabase Dashboard
1. Go to **Table Editor** → `experience` table
2. Click **"Insert row"** button
3. Fill in the values below
4. Click **"Save"**
5. Repeat for all rows

### Option 2: Postman
1. Use POST method
2. URL: `https://kkvepvlkgppzwapbbynh.supabase.co/rest/v1/experience`
3. Headers: apikey, Authorization, Content-Type: application/json
4. Copy JSON for each row below
5. Send request

---

## 📋 Row 1: Egypt University of Informatics

**Values to enter:**
- `type`: `education`
- `year_display`: `2025-2026`
- `start_year`: `2025`
- `end_year`: `2026`
- `institution_en`: `Egypt University of Informatics`
- `institution_ar`: `جامعة مصر للمعلوماتية`
- `program_en`: `Digital Arts & Design – UX/UI`
- `program_ar`: `الفنون الرقمية والتصميم – UX/UI`
- `description_en`: (leave empty or add description)
- `description_ar`: (leave empty or add description)
- `display_order`: `0`

**Postman JSON:**
```json
{
  "type": "education",
  "year_display": "2025-2026",
  "start_year": "2025",
  "end_year": "2026",
  "institution_en": "Egypt University of Informatics",
  "institution_ar": "جامعة مصر للمعلوماتية",
  "program_en": "Digital Arts & Design – UX/UI",
  "program_ar": "الفنون الرقمية والتصميم – UX/UI",
  "display_order": 0
}
```

---

## 📋 Row 2: CLS Center

**Values to enter:**
- `type`: `education`
- `year_display`: `2024`
- `start_year`: `2024`
- `end_year`: `2024`
- `institution_en`: `CLS Center`
- `institution_ar`: `مركز CLS`
- `program_en`: `Front-end Code`
- `program_ar`: `برمجة الواجهة الأمامية`
- `description_en`: (leave empty or add description)
- `description_ar`: (leave empty or add description)
- `display_order`: `1`

**Postman JSON:**
```json
{
  "type": "education",
  "year_display": "2024",
  "start_year": "2024",
  "end_year": "2024",
  "institution_en": "CLS Center",
  "institution_ar": "مركز CLS",
  "program_en": "Front-end Code",
  "program_ar": "برمجة الواجهة الأمامية",
  "display_order": 1
}
```

---

## ✅ Summary Table

| Row | Type | Start Year | End Year | Institution EN | Institution AR | Program EN | Program AR | Display Order |
|-----|------|------------|----------|----------------|----------------|------------|------------|---------------|
| 1 | `education` | `2025` | `2026` | Egypt University of Informatics | جامعة مصر للمعلوماتية | Digital Arts & Design – UX/UI | الفنون الرقمية والتصميم – UX/UI | 0 |
| 2 | `education` | `2024` | `2024` | CLS Center | مركز CLS | Front-end Code | برمجة الواجهة الأمامية | 1 |

**Total: 2 rows minimum (you can add more as needed)**

---

## 📝 Important Notes

1. **Type**: All rows must have `type = "education"` for home page
2. **Year Display**: Use this to show the year range, like `"2025-2026"` or single year `"2024"`, or `"2023-Present"` for ongoing
3. **Start year**: Use text format (e.g., `"2025"`, `"2024"`) to allow values like "Present", "Ongoing", etc.
4. **End year**: Can be same as start year for single-year courses, or "Present" for ongoing
5. **Description**: Leave empty if not needed, or add description text in both languages
6. **Display order**: Must be unique numbers (0, 1, 2, etc.)
7. **Auto-generated**: Don't fill `id`, `created_at`, or `updated_at`

---

## 🎯 Adding More Experience Rows

You can add more education or work experience entries. Examples:

### Example: Work Experience
```json
{
  "type": "work",
  "year_display": "2023-Present",
  "start_year": "2023",
  "end_year": "Present",
  "institution_en": "Company Name",
  "institution_ar": "اسم الشركة",
  "program_en": "UX/UI Designer",
  "program_ar": "مصممة UX/UI",
  "description_en": "Worked on various projects...",
  "description_ar": "عملت على مشاريع متنوعة...",
  "display_order": 2
}
```

### Example: Another Education
```json
{
  "type": "education",
  "year_display": "2023",
  "start_year": "2023",
  "end_year": "2023",
  "institution_en": "Online Course Platform",
  "institution_ar": "منصة دورات أونلاين",
  "program_en": "Advanced UI Design",
  "program_ar": "تصميم واجهة المستخدم المتقدم",
  "description_en": "Completed advanced UI design course...",
  "description_ar": "أكملت دورة تصميم واجهة المستخدم المتقدمة...",
  "display_order": 2
}
```

---

## 🚀 Ready to Add!

Copy each row's values and add them one by one. Good luck! 🎉
