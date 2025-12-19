-- ============================================
-- Complete Supabase Tables Setup SQL Script
-- Run this in Supabase SQL Editor
-- ============================================

-- ============================================
-- Table 1: home_content
-- ============================================
CREATE TABLE IF NOT EXISTS home_content (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  section TEXT NOT NULL,
  key TEXT NOT NULL,
  content_en TEXT,
  content_ar TEXT,
  metadata JSONB,
  display_order INT4 NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE(section, key)
);

-- Enable RLS
ALTER TABLE home_content ENABLE ROW LEVEL SECURITY;

-- Public read policy
CREATE POLICY "Allow public read" ON home_content
  FOR SELECT
  TO public
  USING (true);

-- ============================================
-- Table 2: skills
-- ============================================
CREATE TABLE IF NOT EXISTS skills (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  name_ar TEXT,
  icon_type TEXT,
  short_name TEXT,
  category TEXT,
  proficiency INT4,
  display_order INT4 NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE skills ENABLE ROW LEVEL SECURITY;

-- Public read policy
CREATE POLICY "Allow public read" ON skills
  FOR SELECT
  TO public
  USING (true);

-- ============================================
-- Table 3: experience
-- ============================================
CREATE TABLE IF NOT EXISTS experience (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  type TEXT NOT NULL,
  start_year TEXT NOT NULL,
  end_year TEXT,
  institution TEXT NOT NULL,
  title TEXT NOT NULL,
  description TEXT,
  display_order INT4 NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE experience ENABLE ROW LEVEL SECURITY;

-- Public read policy
CREATE POLICY "Allow public read" ON experience
  FOR SELECT
  TO public
  USING (true);

-- ============================================
-- Table 4: projects (Optional)
-- ============================================
CREATE TABLE IF NOT EXISTS projects (
  id INT8 PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  title TEXT NOT NULL,
  title_ar TEXT,
  description TEXT,
  description_ar TEXT,
  category JSONB,
  image_url TEXT,
  project_url TEXT,
  slug TEXT,
  featured BOOL NOT NULL DEFAULT false,
  display_order INT4 NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;

-- Public read policy
CREATE POLICY "Allow public read" ON projects
  FOR SELECT
  TO public
  USING (true);

-- ============================================
-- Table 5: blog_posts (Optional)
-- ============================================
CREATE TABLE IF NOT EXISTS blog_posts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  title_ar TEXT,
  slug TEXT NOT NULL UNIQUE,
  excerpt TEXT,
  excerpt_ar TEXT,
  content TEXT,
  content_ar TEXT,
  image_url TEXT,
  published BOOL NOT NULL DEFAULT false,
  published_at TIMESTAMPTZ,
  display_order INT4 NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;

-- Public read policy
CREATE POLICY "Allow public read" ON blog_posts
  FOR SELECT
  TO public
  USING (true);

-- ============================================
-- Success! All tables created.
-- ============================================

