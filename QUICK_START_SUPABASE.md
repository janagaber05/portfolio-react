# 🚀 Quick Start: Supabase Integration

## Step 1: Environment Setup

1. **Create `.env` file** in the root directory:
   ```env
   REACT_APP_SUPABASE_URL=https://kkvepvlkgppzwapbbynh.supabase.co
   REACT_APP_SUPABASE_ANON_KEY=your_anon_key_here
   ```

2. **Restart your dev server:**
   ```bash
   npm start
   ```

---

## Step 2: Use in Your Components

### Option A: Using Hooks (Recommended) ✅

```javascript
import { useProjects } from '../hooks/useProjects';

function MyComponent() {
  const { projects, loading, error } = useProjects();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      {projects.map(project => (
        <div key={project.id}>{project.title_en}</div>
      ))}
    </div>
  );
}
```

### Option B: Direct API Calls

```javascript
import { getAllProjects } from '../lib/api/projects';

useEffect(() => {
  async function fetchProjects() {
    const { data, error } = await getAllProjects();
    if (error) {
      console.error('Error:', error);
      return;
    }
    setProjects(data);
  }
  fetchProjects();
}, []);
```

---

## Step 3: Test the Integration

### View Example Components

1. **Projects CRUD Example:**
   - Navigate to: `http://localhost:3001/examples/projects`
   - Test: Create, Read, Update, Delete operations

2. **Contact Form Example:**
   - Navigate to: `http://localhost:3001/examples/contact`
   - Test: Form submission to Supabase

3. **Data Checker:**
   - Navigate to: `http://localhost:3001/supabase`
   - View: All data from your tables

---

## Step 4: Available Hooks

### Projects
```javascript
import { 
  useProjects,           // All projects
  useProject,            // Single project by ID
  useProjectsByCategory, // Filter by category
  useFeaturedProjects    // Featured projects only
} from '../hooks/useProjects';
```

### Blogs
```javascript
import { 
  useBlogs,        // All blogs
  useBlog,         // Single blog by slug
  useFeaturedBlogs // Featured blogs
} from '../hooks/useBlogs';
```

### Content (Home/About/Category)
```javascript
import { useSectionContent } from '../hooks/useHomeContent';

const { content, getContent, loading, error } = useSectionContent('home', 'en');
const title = getContent('know_me_title');
```

---

## Step 5: CRUD Operations

### CREATE
```javascript
import { createProject } from '../lib/api/projects';

const { data, error } = await createProject({
  title_en: 'My Project',
  slug: 'my-project',
  is_published: true
});
```

### READ
```javascript
import { getAllProjects } from '../lib/api/projects';

const { data, error } = await getAllProjects();
```

### UPDATE
```javascript
import { updateProject } from '../lib/api/projects';

const { data, error } = await updateProject(id, {
  is_published: true
});
```

### DELETE
```javascript
import { deleteProject } from '../lib/api/projects';

const { error } = await deleteProject(id);
```

---

## 📚 Full Documentation

See `SUPABASE_INTEGRATION_GUIDE.md` for complete documentation.

---

## 🆘 Troubleshooting

**"Missing Supabase environment variables"**
- Check `.env` file exists
- Restart dev server

**"401 Unauthorized"**
- Verify API key in `.env`
- Check RLS policies in Supabase

**"404 Not Found"**
- Verify table name (case-sensitive)
- Check table exists in Supabase dashboard

---

## ✅ Next Steps

1. ✅ Environment variables set
2. ✅ Test example components
3. ✅ Integrate hooks into your pages
4. ✅ Test CRUD operations
5. ✅ Configure RLS policies in Supabase

**You're all set! 🎉**

