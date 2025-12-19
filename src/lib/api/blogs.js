import { supabase } from '../supabase';

/**
 * Blogs API Service
 * Handles all CRUD operations for Blogs table
 */

// Get all blogs
export const getAllBlogs = async () => {
  try {
    const { data, error } = await supabase
      .from('Blogs')
      .select('*')
      .eq('is_published', true)
      .order('created_at', { ascending: false });

    if (error) throw error;
    return { data, error: null };
  } catch (error) {
    console.error('Error fetching blogs:', error);
    return { data: null, error: error.message };
  }
};

// Get blog by slug
export const getBlogBySlug = async (slug) => {
  try {
    const { data, error } = await supabase
      .from('Blogs')
      .select('*')
      .eq('slug', slug)
      .eq('is_published', true)
      .single();

    if (error) throw error;
    return { data, error: null };
  } catch (error) {
    console.error('Error fetching blog:', error);
    return { data: null, error: error.message };
  }
};

// Get featured blogs
export const getFeaturedBlogs = async () => {
  try {
    const { data, error } = await supabase
      .from('Blogs')
      .select('*')
      .eq('is_featured', true)
      .eq('is_published', true)
      .order('created_at', { ascending: false })
      .limit(3);

    if (error) throw error;
    return { data, error: null };
  } catch (error) {
    console.error('Error fetching featured blogs:', error);
    return { data: null, error: error.message };
  }
};

// Create new blog
export const createBlog = async (blogData) => {
  try {
    const { data, error } = await supabase
      .from('Blogs')
      .insert([blogData])
      .select()
      .single();

    if (error) throw error;
    return { data, error: null };
  } catch (error) {
    console.error('Error creating blog:', error);
    return { data: null, error: error.message };
  }
};

// Update blog
export const updateBlog = async (id, updates) => {
  try {
    const { data, error } = await supabase
      .from('Blogs')
      .update(updates)
      .eq('id', id)
      .select()
      .single();

    if (error) throw error;
    return { data, error: null };
  } catch (error) {
    console.error('Error updating blog:', error);
    return { data: null, error: error.message };
  }
};

// Delete blog
export const deleteBlog = async (id) => {
  try {
    const { error } = await supabase
      .from('Blogs')
      .delete()
      .eq('id', id);

    if (error) throw error;
    return { error: null };
  } catch (error) {
    console.error('Error deleting blog:', error);
    return { error: error.message };
  }
};

