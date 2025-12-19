# 📧 Contact Submissions - Example Rows

Example contact submission rows based on your form structure.

---

## 🎯 How Contact Submissions Work

**Important**: Contact submissions are usually created **automatically** when users submit your contact form. You don't need to manually add rows - they're added when someone fills out and submits the form.

However, you can add test rows manually for testing purposes.

---

## 📋 Example Row 1: Salma Ahmed

**Values to enter:**
- `first_name`: `Salma`
- `last_name`: `Ahmed`
- `email`: `SalmaAhmed12@mail.com`
- `phone`: `01141120002` (optional)
- `subject`: `Chance To Work`
- `status`: `New`
- `created_at`: (auto-generated)
- `updated_at`: (auto-generated)

**Postman JSON:**
```json
{
  "first_name": "Salma",
  "last_name": "Ahmed",
  "email": "SalmaAhmed12@mail.com",
  "phone": "01141120002",
  "subject": "Chance To Work",
  "status": "New"
}
```

---

## 📋 Example Row 2: Another Submission

**Values to enter:**
- `first_name`: `Ahmed`
- `last_name`: `Mohamed`
- `email`: `ahmed.mohamed@example.com`
- `phone`: `01234567890`
- `subject`: `Project Inquiry`
- `status`: `New`

**Postman JSON:**
```json
{
  "first_name": "Ahmed",
  "last_name": "Mohamed",
  "email": "ahmed.mohamed@example.com",
  "phone": "01234567890",
  "subject": "Project Inquiry",
  "status": "New"
}
```

---

## 📋 Example Row 3: Read Submission

**Values to enter:**
- `first_name`: `Mona`
- `last_name`: `Ali`
- `email`: `mona.ali@example.com`
- `phone`: `01012345678`
- `subject`: `Design Consultation`
- `status`: `Read` (already read)

**Postman JSON:**
```json
{
  "first_name": "Mona",
  "last_name": "Ali",
  "email": "mona.ali@example.com",
  "phone": "01012345678",
  "subject": "Design Consultation",
  "status": "Read"
}
```

---

## ✅ Summary Table

| Row | First Name | Last Name | Email | Phone | Subject | Status |
|-----|------------|-----------|-------|-------|---------|--------|
| 1 | Salma | Ahmed | SalmaAhmed12@mail.com | 01141120002 | Chance To Work | New |
| 2 | Ahmed | Mohamed | ahmed.mohamed@example.com | 01234567890 | Project Inquiry | New |
| 3 | Mona | Ali | mona.ali@example.com | 01012345678 | Design Consultation | Read |

---

## 📝 Important Notes

1. **Status Values**:
   - `"New"` - New/unread submission
   - `"Read"` - Submission has been read
   - `"Replied"` - You can add this if you want to track replies
   - `"Archived"` - For archived submissions

2. **Auto-Generated**:
   - `id` - Auto-generated UUID
   - `created_at` - Auto-generated timestamp
   - `updated_at` - Auto-generated timestamp

3. **Optional Fields**:
   - `phone` - Can be left empty
   - `subject` - Can be left empty (if form doesn't require it)

4. **Form Submission**:
   - When users submit your contact form, rows are created automatically
   - You don't need to manually add every submission
   - These examples are just for testing

---

## 🎯 How to View Submissions

### Via Supabase Dashboard:
1. Go to **Table Editor** → `contact_submissions` table
2. All submissions will be listed
3. You can:
   - View details by clicking on a row
   - Edit `status` to mark as "Read"
   - Filter by status (New, Read, etc.)

### Via Postman (GET):
```
GET https://kkvepvlkgppzwapbbynh.supabase.co/rest/v1/contact_submissions
```

**With filters:**
```
GET https://kkvepvlkgppzwapbbynh.supabase.co/rest/v1/contact_submissions?status=eq.New
GET https://kkvepvlkgppzwapbbynh.supabase.co/rest/v1/contact_submissions?order=created_at.desc
```

---

## 🚀 Ready!

These are example rows for testing. Real submissions will be created automatically when users submit your contact form! 🎉

