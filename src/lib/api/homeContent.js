import { supabase } from '../supabase';

/**
 * Home/About/Category Content API Service
 * Handles content fetching for home, about, and category sections
 */

// Try both table name variations (with and without special character)
const getTableName = async () => {
  // Try without special character first
  const test1 = await supabase.from('home_about_category_content').select('id').limit(1);
  if (!test1.error) return 'home_about_category_content';
  
  // Try with special character
  const test2 = await supabase.from('homeـ_about_category_content').select('id').limit(1);
  if (!test2.error) return 'homeـ_about_category_content';
  
  // Default fallback
  return 'home_about_category_content';
};

// Get all content for a section
export const getSectionContent = async (section) => {
  try {
    const tableName = await getTableName();
    const { data, error } = await supabase
      .from(tableName)
      .select('*')
      .eq('section', section)
      .order('display_order', { ascending: true });

    if (error) throw error;
    
    // Create a map of key -> content for easy access
    const contentMap = {};
    if (data) {
      data.forEach((item) => {
        contentMap[item.key] = item;
      });
    }
    
    return { data: contentMap, rawData: data, error: null };
  } catch (error) {
    console.error(`Error fetching ${section} content:`, error);
    return { data: null, rawData: null, error: error.message };
  }
};

// Get content by key
export const getContentByKey = async (section, key) => {
  try {
    const tableName = await getTableName();
    const { data, error } = await supabase
      .from(tableName)
      .select('*')
      .eq('section', section)
      .eq('key', key)
      .single();

    if (error) throw error;
    return { data, error: null };
  } catch (error) {
    console.error(`Error fetching content for key ${key}:`, error);
    return { data: null, error: error.message };
  }
};

// Helper function to get content value
export const getContentValue = (contentMap, key, lang = 'en') => {
  if (!contentMap || !contentMap[key]) return '';
  const contentKey = lang === 'ar' ? 'content_ar' : 'content_en';
  return contentMap[key][contentKey] || '';
};

// Create content
export const createContent = async (contentData) => {
  try {
    const tableName = await getTableName();
    const { data, error } = await supabase
      .from(tableName)
      .insert([contentData])
      .select()
      .single();

    if (error) throw error;
    return { data, error: null };
  } catch (error) {
    console.error('Error creating content:', error);
    return { data: null, error: error.message };
  }
};

// Update content
export const updateContent = async (id, updates) => {
  try {
    const tableName = await getTableName();
    const { data, error } = await supabase
      .from(tableName)
      .update(updates)
      .eq('id', id)
      .select()
      .single();

    if (error) throw error;
    return { data, error: null };
  } catch (error) {
    console.error('Error updating content:', error);
    return { data: null, error: error.message };
  }
};

