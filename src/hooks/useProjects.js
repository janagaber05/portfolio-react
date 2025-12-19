import { useState, useEffect } from 'react';
import { getAllProjects, getProjectById, getProjectsByCategory, getFeaturedProjects } from '../lib/api/projects';

/**
 * Custom hook for fetching projects
 */
export const useProjects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      setLoading(true);
      setError(null);
      const { data, error: fetchError } = await getAllProjects();
      
      if (fetchError) {
        setError(fetchError);
        setProjects([]);
      } else {
        setProjects(data || []);
      }
      setLoading(false);
    };

    fetchProjects();
  }, []);

  return { projects, loading, error };
};

/**
 * Custom hook for fetching a single project
 */
export const useProject = (id) => {
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) {
      setLoading(false);
      return;
    }

    const fetchProject = async () => {
      setLoading(true);
      setError(null);
      const { data, error: fetchError } = await getProjectById(id);
      
      if (fetchError) {
        setError(fetchError);
        setProject(null);
      } else {
        setProject(data);
      }
      setLoading(false);
    };

    fetchProject();
  }, [id]);

  return { project, loading, error };
};

/**
 * Custom hook for fetching projects by category
 */
export const useProjectsByCategory = (category) => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!category) {
      setLoading(false);
      return;
    }

    const fetchProjects = async () => {
      setLoading(true);
      setError(null);
      const { data, error: fetchError } = await getProjectsByCategory(category);
      
      if (fetchError) {
        setError(fetchError);
        setProjects([]);
      } else {
        setProjects(data || []);
      }
      setLoading(false);
    };

    fetchProjects();
  }, [category]);

  return { projects, loading, error };
};

/**
 * Custom hook for fetching featured projects
 */
export const useFeaturedProjects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      setLoading(true);
      setError(null);
      const { data, error: fetchError } = await getFeaturedProjects();
      
      if (fetchError) {
        setError(fetchError);
        setProjects([]);
      } else {
        setProjects(data || []);
      }
      setLoading(false);
    };

    fetchProjects();
  }, []);

  return { projects, loading, error };
};

