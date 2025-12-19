import { supabase } from '../supabase';

/**
 * Contact Submissions API Service
 */

export const submitContact = async (contactData) => {
  try {
    const { data, error } = await supabase
      .from('contact_submissions')
      .insert([{
        ...contactData,
        created_at: new Date().toISOString(),
      }])
      .select()
      .single();

    if (error) throw error;
    return { data, error: null };
  } catch (error) {
    console.error('Error submitting contact:', error);
    return { data: null, error: error.message };
  }
};

export const getAllSubmissions = async () => {
  try {
    const { data, error } = await supabase
      .from('contact_submissions')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) throw error;
    return { data, error: null };
  } catch (error) {
    console.error('Error fetching submissions:', error);
    return { data: null, error: error.message };
  }
};

