import { useState, useEffect } from 'react';
import { getAllBlogs, getBlogBySlug, getFeaturedBlogs } from '../lib/api/blogs';

/**
 * Custom hook for fetching blogs
 */
export const useBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      setLoading(true);
      setError(null);
      const { data, error: fetchError } = await getAllBlogs();
      
      if (fetchError) {
        setError(fetchError);
        setBlogs([]);
      } else {
        setBlogs(data || []);
      }
      setLoading(false);
    };

    fetchBlogs();
  }, []);

  return { blogs, loading, error };
};

/**
 * Custom hook for fetching a single blog by slug
 */
export const useBlog = (slug) => {
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!slug) {
      setLoading(false);
      return;
    }

    const fetchBlog = async () => {
      setLoading(true);
      setError(null);
      const { data, error: fetchError } = await getBlogBySlug(slug);
      
      if (fetchError) {
        setError(fetchError);
        setBlog(null);
      } else {
        setBlog(data);
      }
      setLoading(false);
    };

    fetchBlog();
  }, [slug]);

  return { blog, loading, error };
};

/**
 * Custom hook for fetching featured blogs
 */
export const useFeaturedBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      setLoading(true);
      setError(null);
      const { data, error: fetchError } = await getFeaturedBlogs();
      
      if (fetchError) {
        setError(fetchError);
        setBlogs([]);
      } else {
        setBlogs(data || []);
      }
      setLoading(false);
    };

    fetchBlogs();
  }, []);

  return { blogs, loading, error };
};
