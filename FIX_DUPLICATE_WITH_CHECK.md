# 🔧 Fix: Duplicate "with check" Error

**The Problem**: You have **two** `with check (` statements in your SQL, which causes a syntax error.

**The Fix**: Remove the duplicate!

---

## ❌ What You Have (Wrong)

Your SQL probably looks like this:
```sql
create policy "Enable insert for public"
on "public"."projects"
as PERMISSIVE
for INSERT
to public
with check (          ← First one (keep this)
with check (          ← Duplicate! (delete this)
  true
);
```

---

## ✅ What It Should Be (Correct)

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

**Only ONE `with check (` statement!**

---

## ✅ Step-by-Step Fix

1. **Look at your SQL editor**
2. **Find the duplicate `with check (` line**
3. **Delete the duplicate line** (the second one)
4. **Keep only one `with check (`**
5. **Make sure it looks like this**:

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

6. **Click "Save policy"**

---

## 🎯 Correct SQL Structure

Your SQL should have this structure:
- Line 1: `create policy "Enable insert for public"`
- Line 2: `on "public"."projects"`
- Line 3: `as PERMISSIVE`
- Line 4: `for INSERT`
- Line 5: `to public`
- Line 6: `with check (` ← **Only ONE of these!**
- Line 7: `  true`
- Line 8: `);`

---

## ✅ Quick Fix

**Delete the duplicate `with check (` line!**

You should only see `with check (` **once** in your SQL.

---

## 🎉 After Fixing

1. ✅ Remove duplicate `with check (`
2. ✅ Keep only one `with check (` followed by `true`
3. ✅ Click "Save policy"
4. ✅ Should work now!

---

## 💡 Common Mistake

The form might have generated `with check (` twice. Just delete one of them!

**Final SQL should be**:
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

**That's it!** 🚀

