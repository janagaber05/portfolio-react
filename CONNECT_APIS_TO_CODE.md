# 🔗 Connect Supabase APIs to Your React Code

Complete guide to integrate Supabase APIs into your React components.

---

## 🎯 Step 1: Import Supabase Client

In any component that needs API data, import the supabase client:

```javascript
import { supabase } from './Supabase'; // or '../Supabase' depending on file location
```

---

## 🎯 Step 2: Basic API Fetch Pattern

### Pattern for Fetching Data:

```javascript
import { useEffect, useState } from 'react';
import { supabase } from './Supabase';

function YourComponent() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const { data, error } = await supabase
          .from('table_name')
          .select('*');
        
        if (error) {
          setError(error.message);
        } else {
          setData(data || []);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    
    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      {/* Render your data */}
    </div>
  );
}
```

---

## 🎯 Step 3: Connect Home Page (HomeTwoEN.jsx)

### Example: Fetch Home Content

```javascript
import { useEffect, useState } from 'react';
import { supabase } from './Supabase';
import Layout from '../components/Layout';

export default function HomeTwoEN() {
  const [homeContent, setHomeContent] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchHomeContent() {
      const { data, error } = await supabase
        .from('home_about_category_content')
        .select('*')
        .eq('section', 'home')
        .order('display_order');
      
      if (error) {
        console.error('Error fetching home content:', error);
      } else {
        setHomeContent(data || []);
      }
      setLoading(false);
    }
    
    fetchHomeContent();
  }, []);

  // Find specific content by key
  const getContent = (key) => {
    const item = homeContent.find(item => item.key === key);
    return item?.content_en || '';
  };

  if (loading) return <Layout lang="en"><div>Loading...</div></Layout>;

  return (
    <Layout lang="en">
      <div>
        <h1>{getContent('know_me_title') || 'Know Me'}</h1>
        {/* Use getContent('key_name') to get content */}
      </div>
    </Layout>
  );
}
```

---

## 🎯 Step 4: Connect Skills Section

### Fetch Skills Data:

```javascript
const [skills, setSkills] = useState([]);

useEffect(() => {
  async function fetchSkills() {
    const { data, error } = await supabase
      .from('skills')
      .select('*')
      .order('display_order');
    
    if (error) {
      console.error('Error fetching skills:', error);
    } else {
      setSkills(data || []);
    }
  }
  
  fetchSkills();
}, []);

// Use in your component
{skills.map((skill) => (
  <div key={skill.id}>{skill.name}</div>
))}
```

---

## 🎯 Step 5: Connect Experience Section

### Fetch Experience Data:

```javascript
const [experience, setExperience] = useState([]);

useEffect(() => {
  async function fetchExperience() {
    const { data, error } = await supabase
      .from('experience')
      .select('*')
      .order('display_order');
    
    if (error) {
      console.error('Error fetching experience:', error);
    } else {
      setExperience(data || []);
    }
  }
  
  fetchExperience();
}, []);

// Filter by type
const education = experience.filter(exp => exp.type === 'education');
const work = experience.filter(exp => exp.type === 'work');
```

---

## 🎯 Step 6: Connect Projects Section

### Fetch Projects Data:

```javascript
const [projects, setProjects] = useState([]);

useEffect(() => {
  async function fetchProjects() {
    const { data, error } = await supabase
      .from('projects')
      .select('*')
      .order('display_order');
    
    if (error) {
      console.error('Error fetching projects:', error);
    } else {
      setProjects(data || []);
    }
  }
  
  fetchProjects();
}, []);

// Use in your component
{projects.map((project) => (
  <div key={project.id}>
    <h2>{project.title_en}</h2>
    <p>{project.title_ar}</p>
  </div>
))}
```

---

## 🎯 Step 7: Connect Blogs Section

### Fetch Blog Posts:

```javascript
const [blogPosts, setBlogPosts] = useState([]);

useEffect(() => {
  async function fetchBlogPosts() {
    const { data, error } = await supabase
      .from('Blogs')
      .select('*')
      .eq('is_published', true)
      .order('created_at', { ascending: false });
    
    if (error) {
      console.error('Error fetching blog posts:', error);
    } else {
      setBlogPosts(data || []);
    }
  }
  
  fetchBlogPosts();
}, []);

// Use in your component
{blogPosts.map((post) => (
  <div key={post.id}>
    <h2>{post.title_en}</h2>
    <p>{post.excerpt_en}</p>
    <Link to={`/blog/${post.slug}`}>Read More</Link>
  </div>
))}
```

---

## 🎯 Step 8: Connect About Page

### Fetch About Content:

```javascript
const [aboutContent, setAboutContent] = useState([]);

useEffect(() => {
  async function fetchAboutContent() {
    const { data, error } = await supabase
      .from('home_about_category_content')
      .select('*')
      .eq('section', 'about')
      .order('display_order');
    
    if (error) {
      console.error('Error fetching about content:', error);
    } else {
      setAboutContent(data || []);
    }
  }
  
  fetchAboutContent();
}, []);

// Helper function to get content by key
const getContent = (key) => {
  const item = aboutContent.find(item => item.key === key);
  return item?.content_en || '';
};
```

---

## 🎯 Step 9: Connect Category Page

### Fetch Category Content:

```javascript
const [categoryContent, setCategoryContent] = useState([]);

useEffect(() => {
  async function fetchCategoryContent() {
    const { data, error } = await supabase
      .from('home_about_category_content')
      .select('*')
      .eq('section', 'category')
      .order('display_order');
    
    if (error) {
      console.error('Error fetching category content:', error);
    } else {
      setCategoryContent(data || []);
    }
  }
  
  fetchCategoryContent();
}, []);
```

---

## 🎯 Step 10: Complete Example - HomeTwoEN.jsx

### Full Integration Example:

```javascript
import { useEffect, useState } from 'react';
import { supabase } from './Supabase';
import Layout from '../components/Layout';
// ... other imports

export default function HomeTwoEN() {
  // State for all data
  const [homeContent, setHomeContent] = useState([]);
  const [skills, setSkills] = useState([]);
  const [experience, setExperience] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch all data
  useEffect(() => {
    async function fetchAllData() {
      try {
        // Fetch home content
        const { data: content, error: contentError } = await supabase
          .from('home_about_category_content')
          .select('*')
          .eq('section', 'home')
          .order('display_order');
        
        if (contentError) console.error('Content error:', contentError);
        else setHomeContent(content || []);

        // Fetch skills
        const { data: skillsData, error: skillsError } = await supabase
          .from('skills')
          .select('*')
          .order('display_order');
        
        if (skillsError) console.error('Skills error:', skillsError);
        else setSkills(skillsData || []);

        // Fetch experience
        const { data: expData, error: expError } = await supabase
          .from('experience')
          .select('*')
          .order('display_order');
        
        if (expError) console.error('Experience error:', expError);
        else setExperience(expData || []);

      } catch (err) {
        console.error('Error:', err);
      } finally {
        setLoading(false);
      }
    }
    
    fetchAllData();
  }, []);

  // Helper function to get content by key
  const getContent = (key) => {
    const item = homeContent.find(item => item.key === key);
    return item?.content_en || '';
  };

  if (loading) {
    return <Layout lang="en"><div>Loading...</div></Layout>;
  }

  return (
    <Layout lang="en">
      {/* Know Me Section */}
      <section>
        <h1>{getContent('know_me_title') || 'Know Me'}</h1>
        <p>{getContent('know_me_description') || 'Default description'}</p>
      </section>

      {/* Skills Section */}
      <section>
        <h2>Skills</h2>
        <div>
          {skills.map((skill) => (
            <div key={skill.id}>{skill.name}</div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section>
        <h2>Education</h2>
        {experience
          .filter(exp => exp.type === 'education')
          .map((edu) => (
            <div key={edu.id}>
              <h3>{edu.institution_en}</h3>
              <p>{edu.program_en}</p>
              <p>{edu.year_start} - {edu.year_end}</p>
            </div>
          ))}
      </section>
    </Layout>
  );
}
```

---

## 🎯 Step 11: Handle Loading and Errors

### Better Loading/Error Handling:

```javascript
const [data, setData] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);

useEffect(() => {
  async function fetchData() {
    try {
      setLoading(true);
      setError(null);
      
      const { data, error } = await supabase
        .from('table_name')
        .select('*');
      
      if (error) throw error;
      
      setData(data || []);
    } catch (err) {
      setError(err.message);
      console.error('Error:', err);
    } finally {
      setLoading(false);
    }
  }
  
  fetchData();
}, []);

// In your JSX
if (loading) return <div>Loading...</div>;
if (error) return <div>Error: {error}</div>;
if (!data.length) return <div>No data found</div>;

return (
  <div>
    {/* Render data */}
  </div>
);
```

---

## 🎯 Step 12: Filter and Query Examples

### Common Query Patterns:

```javascript
// Get by ID
const { data } = await supabase
  .from('projects')
  .select('*')
  .eq('id', 1)
  .single();

// Get by slug
const { data } = await supabase
  .from('Blogs')
  .select('*')
  .eq('slug', 'blog-slug')
  .single();

// Get with filter
const { data } = await supabase
  .from('home_about_category_content')
  .select('*')
  .eq('section', 'home')
  .eq('key', 'know_me_title');

// Get with limit
const { data } = await supabase
  .from('projects')
  .select('*')
  .limit(5);

// Get with ordering
const { data } = await supabase
  .from('skills')
  .select('*')
  .order('display_order', { ascending: true });
```

---

## 📋 Complete Integration Checklist

### For Each Page:

- [ ] Import `supabase` from `./Supabase`
- [ ] Add `useState` for data, loading, error
- [ ] Add `useEffect` to fetch data
- [ ] Handle loading state
- [ ] Handle error state
- [ ] Update JSX to use API data
- [ ] Add fallback data (optional)

---

## 🎯 Quick Reference: All Your Tables

### Table Names and Usage:

| Table | Use Case | Example Query |
|-------|----------|---------------|
| `projects` | Projects page | `.from('projects').select('*')` |
| `Blogs` | Blogs page | `.from('Blogs').select('*')` |
| `skills` | Skills section | `.from('skills').select('*')` |
| `experience` | Experience section | `.from('experience').select('*')` |
| `home_about_category_content` | Home/About/Category | `.from('home_about_category_content').eq('section', 'home')` |
| `gallery_items` | Gallery images | `.from('gallery_items').select('*')` |
| `project_details` | Project details | `.from('project_details').select('*')` |
| `contact_submissions` | Contact form | `.from('contact_submissions').select('*')` |

---

## 🎉 Summary

**Basic Pattern**:
1. Import `supabase`
2. Use `useState` for data
3. Use `useEffect` to fetch
4. Handle loading/errors
5. Render data in JSX

**You're ready to connect all your APIs!** 🚀

