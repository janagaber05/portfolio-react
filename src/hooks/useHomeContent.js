import { useState, useEffect } from 'react';
import { getSectionContent, getContentValue } from '../lib/api/homeContent';

/**
 * Custom hook for fetching home/about/category content
 */
export const useSectionContent = (section, lang = 'en') => {
  const [content, setContent] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!section) {
      setLoading(false);
      return;
    }

    const fetchContent = async () => {
      setLoading(true);
      setError(null);
      const { data, error: fetchError } = await getSectionContent(section);
      
      if (fetchError) {
        setError(fetchError);
        setContent({});
      } else {
        setContent(data || {});
      }
      setLoading(false);
    };

    fetchContent();
  }, [section]);

  // Helper function to get content by key
  const getContent = (key) => {
    return getContentValue(content, key, lang);
  };

  return { content, getContent, loading, error };
};

