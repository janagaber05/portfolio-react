import { supabase } from '../supabase';

/**
 * Skills API Service
 */

export const getAllSkills = async () => {
  try {
    const { data, error } = await supabase
      .from('skills')
      .select('*')
      .order('display_order', { ascending: true });

    if (error) throw error;
    return { data, error: null };
  } catch (error) {
    console.error('Error fetching skills:', error);
    return { data: null, error: error.message };
  }
};

