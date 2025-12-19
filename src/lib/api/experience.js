import { supabase } from '../supabase';

/**
 * Experience API Service
 */

export const getAllExperience = async () => {
  try {
    const { data, error } = await supabase
      .from('experience')
      .select('*')
      .order('display_order', { ascending: true });

    if (error) throw error;
    return { data, error: null };
  } catch (error) {
    console.error('Error fetching experience:', error);
    return { data: null, error: error.message };
  }
};

export const getExperienceByType = async (type) => {
  try {
    const { data, error } = await supabase
      .from('experience')
      .select('*')
      .eq('type', type)
      .order('display_order', { ascending: true });

    if (error) throw error;
    return { data, error: null };
  } catch (error) {
    console.error('Error fetching experience by type:', error);
    return { data: null, error: error.message };
  }
};

