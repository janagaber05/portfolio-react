# ✅ Add `true` to WITH CHECK Clause

Perfect! You can see the SQL editor. Now you just need to replace the comment with `true`.

---

## ✅ Step 1: Replace the Comment

In the SQL editor, you see:
```sql
with check (
-- Provide a SQL expression for the with check
statement );
```

**Replace it with**:
```sql
with check (
  true
);
```

---

## ✅ Step 2: What to Do

1. **Click on line 7** (where the comment is)
2. **Delete the comment**: `-- Provide a SQL expression for the with check`
3. **Delete**: `statement`
4. **Type**: `true`
5. **Your SQL should look like**:

```sql
create policy "Enable insert for public"
on "public"."projects"
as PERMISSIVE
for INSERT
to public
with check (
  true
);
```

---

## ✅ Step 3: Save

1. **Click "Save policy"** button (bottom right, green button)
2. **Done!** ✅

---

## 🎯 Quick Fix

**Just replace line 7-8 with**:
```
  true
```

**Final SQL**:
```sql
create policy "Enable insert for public"
on "public"."projects"
as PERMISSIVE
for INSERT
to public
with check (
  true
);
```

---

## ✅ After Saving

1. ✅ Policy will be created
2. ✅ Go back to Postman
3. ✅ Click "Send" on your POST request
4. ✅ Should work now! 🎉

---

## 🎉 That's It!

Just replace the comment and `statement` with `true`, then click "Save policy"! 🚀

