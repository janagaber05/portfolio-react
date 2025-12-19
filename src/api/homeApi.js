import { supabase } from '../pages/Supabase';

export async function fetchHomeContent() {
  const res = supabase.from('home_content').select('*').eq('section', 'home');
  console.log(res);
  
  try {
    const { data, error } = await res;
    if (error) {
      console.error('Error fetching home content:', error);
      return { data: null, error };
    }
    
    if (data) {
      const contentMap = {};
      data.forEach(item => {
        contentMap[item.key] = item;
      });
      
      // Parse strengths from metadata
      let strengths = [];
      if (contentMap['strengths']?.metadata) {
        strengths = contentMap['strengths'].metadata.strengths || [];
      }
      
      // Parse values from metadata
      let values = [];
      if (contentMap['values']?.metadata) {
        values = contentMap['values'].metadata.values || [];
      }
      
      // Parse growing cards from metadata
      let growing = [];
      if (contentMap['growing']?.metadata) {
        growing = contentMap['growing'].metadata.cards || [];
      }
      
      return { 
        data: contentMap, 
        strengths, 
        values, 
        growing, 
        error: null 
      };
    }
    
    return { data: null, strengths: [], values: [], growing: [], error: null };
  } catch (err) {
    console.error('Error fetching home content:', err);
    return { data: null, strengths: [], values: [], growing: [], error: err };
  }
}

export async function fetchSkills() {
  const skillsRes = supabase.from('skills').select('*').order('display_order', { ascending: true });
  console.log(skillsRes);
  
  try {
    const { data, error } = await skillsRes;
    if (error) {
      console.error('Error fetching skills:', error);
      return { data: null, error };
    }
    
    return { data: data || [], error: null };
  } catch (err) {
    console.error('Error fetching skills:', err);
    return { data: null, error: err };
  }
}

export async function fetchExperience() {
  const expRes = supabase.from('experience').select('*').eq('type', 'education').order('start_year', { ascending: false });
  console.log(expRes);
  
  try {
    const { data, error } = await expRes;
    if (error) {
      console.error('Error fetching experience:', error);
      return { data: null, error };
    }
    
    return { data: data || [], error: null };
  } catch (err) {
    console.error('Error fetching experience:', err);
    return { data: null, error: err };
  }
}

