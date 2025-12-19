# Supabase Integration Guide

## 📋 Overview

This guide explains how the React portfolio frontend connects to Supabase backend using best practices for production-ready applications.

---

## 🏗️ Architecture

### File Structure

```
src/
├── lib/
│   ├── supabase.js              # Supabase client configuration
│   └── api/
│       ├── projects.js          # Projects CRUD operations
│       ├── blogs.js             # Blogs CRUD operations
│       ├── homeContent.js      # Home/About/Category content
│       ├── skills.js            # Skills data
│       ├── experience.js        # Experience data
│       └── contact.js           # Contact submissions
├── hooks/
│   ├── useProjects.js          # React hooks for projects
│   ├── useBlogs.js             # React hooks for blogs
│   └── useHomeContent.js       # React hooks for content
└── components/
    └── examples/
        ├── ProjectsExample.jsx  # CRUD example
        └── ContactFormExample.jsx # Form submission example
```

---

## 🔧 Setup

### 1. Environment Variables

Create a `.env` file in the root directory:

```env
REACT_APP_SUPABASE_URL=your_supabase_url
REACT_APP_SUPABASE_ANON_KEY=your_supabase_anon_key
```

**Important:** 
- Never commit `.env` to version control
- Use `.env.example` as a template
- Restart your dev server after changing `.env`

### 2. Supabase Client

The client is configured in `src/lib/supabase.js`:

```javascript
import { supabase } from '../lib/supabase';
```

**Features:**
- ✅ Environment variable validation
- ✅ Optimized auth settings
- ✅ Auto token refresh
- ✅ Session persistence

---

## 📡 API Services

### Projects API (`src/lib/api/projects.js`)

**Available Functions:**
- `getAllProjects()` - Get all projects
- `getProjectById(id)` - Get single project
- `getProjectsByCategory(category)` - Filter by category
- `getFeaturedProjects()` - Get featured projects
- `createProject(data)` - Create new project
- `updateProject(id, updates)` - Update project
- `deleteProject(id)` - Delete project

**Example:**
```javascript
import { getAllProjects, createProject } from '../lib/api/projects';

// Fetch all projects
const { data, error } = await getAllProjects();

// Create a project
const { data, error } = await createProject({
  title_en: 'My Project',
  title_ar: 'مشروعي',
  slug: 'my-project',
  category: ['Web Design'],
  is_published: true,
  is_featured: false
});
```

### Blogs API (`src/lib/api/blogs.js`)

**Available Functions:**
- `getAllBlogs()` - Get all published blogs
- `getBlogBySlug(slug)` - Get blog by slug
- `getFeaturedBlogs()` - Get featured blogs
- `createBlog(data)` - Create new blog
- `updateBlog(id, updates)` - Update blog
- `deleteBlog(id)` - Delete blog

### Home Content API (`src/lib/api/homeContent.js`)

**Available Functions:**
- `getSectionContent(section)` - Get all content for a section ('home', 'about', 'category')
- `getContentByKey(section, key)` - Get specific content by key
- `getContentValue(contentMap, key, lang)` - Helper to extract content value
- `createContent(data)` - Create new content
- `updateContent(id, updates)` - Update content

**Example:**
```javascript
import { getSectionContent, getContentValue } from '../lib/api/homeContent';

// Get all home section content
const { data, rawData, error } = await getSectionContent('home');

// Access content by key
const title = getContentValue(data, 'know_me_title', 'en');
const description = getContentValue(data, 'know_me_description', 'ar');
```

### Skills API (`src/lib/api/skills.js`)

**Available Functions:**
- `getAllSkills()` - Get all skills ordered by display_order

### Experience API (`src/lib/api/experience.js`)

**Available Functions:**
- `getAllExperience()` - Get all experience items
- `getExperienceByType(type)` - Filter by type ('education', 'work', etc.)

### Contact API (`src/lib/api/contact.js`)

**Available Functions:**
- `submitContact(data)` - Submit contact form
- `getAllSubmissions()` - Get all submissions (admin)

---

## 🎣 React Hooks

### useProjects Hook

```javascript
import { useProjects, useProject, useFeaturedProjects } from '../hooks/useProjects';

function MyComponent() {
  const { projects, loading, error } = useProjects();
  const { project } = useProject(projectId);
  const { projects: featured } = useFeaturedProjects();

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

### useSectionContent Hook

```javascript
import { useSectionContent } from '../hooks/useHomeContent';

function HomePage() {
  const { content, getContent, loading, error } = useSectionContent('home', 'en');

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>{getContent('know_me_title')}</h1>
      <p>{getContent('know_me_description')}</p>
    </div>
  );
}
```

### useBlogs Hook

```javascript
import { useBlogs, useBlog, useFeaturedBlogs } from '../hooks/useBlogs';

function BlogsPage() {
  const { blogs, loading, error } = useBlogs();
  const { blog } = useBlog('my-blog-slug');
  const { blogs: featured } = useFeaturedBlogs();

  // ... render blogs
}
```

---

## 🔄 CRUD Operations

### CREATE (Insert)

```javascript
import { createProject } from '../lib/api/projects';

const handleCreate = async () => {
  const { data, error } = await createProject({
    title_en: 'New Project',
    slug: 'new-project',
    // ... other fields
  });

  if (error) {
    console.error('Error:', error);
    return;
  }

  console.log('Created:', data);
};
```

### READ (Select)

```javascript
import { getAllProjects } from '../lib/api/projects';

const handleRead = async () => {
  const { data, error } = await getAllProjects();

  if (error) {
    console.error('Error:', error);
    return;
  }

  console.log('Projects:', data);
};
```

### UPDATE (Patch)

```javascript
import { updateProject } from '../lib/api/projects';

const handleUpdate = async (id) => {
  const { data, error } = await updateProject(id, {
    is_published: true,
    title_en: 'Updated Title'
  });

  if (error) {
    console.error('Error:', error);
    return;
  }

  console.log('Updated:', data);
};
```

### DELETE

```javascript
import { deleteProject } from '../lib/api/projects';

const handleDelete = async (id) => {
  const { error } = await deleteProject(id);

  if (error) {
    console.error('Error:', error);
    return;
  }

  console.log('Deleted successfully');
};
```

---

## 🎨 Example Components

### ProjectsExample Component

Located at `src/components/examples/ProjectsExample.jsx`

**Features:**
- ✅ Lists all projects
- ✅ Create new project form
- ✅ Update project (toggle published)
- ✅ Delete project
- ✅ Shows featured projects
- ✅ Loading and error states

**Usage:**
```javascript
import ProjectsExample from '../components/examples/ProjectsExample';

function AdminPage() {
  return <ProjectsExample />;
}
```

### ContactFormExample Component

Located at `src/components/examples/ContactFormExample.jsx`

**Features:**
- ✅ Form validation
- ✅ Loading states
- ✅ Error handling
- ✅ Success feedback
- ✅ Auto-reset on success

---

## 🔐 Authentication (Optional)

If you need authentication in the future:

```javascript
import { supabase } from '../lib/supabase';

// Sign up
const { data, error } = await supabase.auth.signUp({
  email: 'user@example.com',
  password: 'password123'
});

// Sign in
const { data, error } = await supabase.auth.signInWithPassword({
  email: 'user@example.com',
  password: 'password123'
});

// Sign out
await supabase.auth.signOut();

// Get current user
const { data: { user } } = await supabase.auth.getUser();
```

---

## ⚠️ Error Handling

All API functions return a consistent format:

```javascript
{
  data: <result> | null,
  error: <error_message> | null
}
```

**Best Practice:**
```javascript
const { data, error } = await getAllProjects();

if (error) {
  // Handle error
  console.error('Error:', error);
  setError(error);
  return;
}

// Use data
setProjects(data);
```

---

## 🚀 Performance Optimization

### 1. Use Hooks for Automatic Caching

Hooks automatically handle loading states and prevent unnecessary re-fetches:

```javascript
// ✅ Good - Uses hook
const { projects, loading } = useProjects();

// ❌ Bad - Manual fetch in component
useEffect(() => {
  fetchProjects(); // Runs on every render
}, []);
```

### 2. Selective Queries

Only fetch what you need:

```javascript
// ✅ Good - Select specific columns
const { data } = await supabase
  .from('projects')
  .select('id, title_en, slug')
  .eq('is_published', true);

// ❌ Bad - Fetch everything
const { data } = await supabase.from('projects').select('*');
```

### 3. Use Filters

Filter on the database side, not in JavaScript:

```javascript
// ✅ Good - Database filter
const { data } = await supabase
  .from('projects')
  .select('*')
  .eq('is_featured', true);

// ❌ Bad - Client-side filter
const { data } = await supabase.from('projects').select('*');
const featured = data.filter(p => p.is_featured);
```

---

## 📝 Migration Guide

### Updating Existing Components

**Old Way:**
```javascript
import { supabase } from './Supabase';

useEffect(() => {
  async function fetch() {
    const res = await supabase.from('projects').select('*');
    setProjects(res.data);
  }
  fetch();
}, []);
```

**New Way:**
```javascript
import { useProjects } from '../hooks/useProjects';

function MyComponent() {
  const { projects, loading, error } = useProjects();
  // ... rest of component
}
```

---

## 🧪 Testing Connection

Use the connection checker:

```javascript
import { checkSupabaseConnection } from '../lib/supabase';

const { connected, error } = await checkSupabaseConnection();
console.log('Connected:', connected);
```

---

## 📚 Additional Resources

- [Supabase JavaScript Client Docs](https://supabase.com/docs/reference/javascript/introduction)
- [Supabase React Guide](https://supabase.com/docs/guides/getting-started/quickstarts/reactjs)
- [Row Level Security (RLS)](https://supabase.com/docs/guides/auth/row-level-security)

---

## 🆘 Troubleshooting

### "Missing Supabase environment variables"
- Check `.env` file exists
- Verify variable names start with `REACT_APP_`
- Restart dev server after changing `.env`

### "401 Unauthorized"
- Check API key is correct
- Verify RLS policies allow public access (if needed)

### "404 Not Found"
- Verify table name is correct (case-sensitive)
- Check table exists in Supabase dashboard

### "RLS Policy Violation"
- Update RLS policies in Supabase dashboard
- Ensure policies allow the operation you're trying to perform

---

## ✅ Checklist for Production

- [ ] Environment variables set in `.env`
- [ ] `.env` added to `.gitignore`
- [ ] `.env.example` created with placeholder values
- [ ] All API calls have error handling
- [ ] Loading states implemented
- [ ] RLS policies configured correctly
- [ ] API keys are `anon` keys (not `service_role`)
- [ ] Connection tested in production environment

---

**Last Updated:** 2024
**Version:** 1.0.0

