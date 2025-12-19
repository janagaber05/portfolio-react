import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import HomeOneEN from '../pages/HomeOneEN';
import HomeOneAR from '../pages/HomeOneAR';
import HomeTwoEN from '../pages/HomeTwoEN';
import HomeTwoAR from '../pages/HomeTwoAR';
import AboutEN from '../pages/AboutEN';
import AboutAR from '../pages/AboutAR';
import BlogsEN from '../pages/BlogsEN';
import BlogsAR from '../pages/BlogsAR';
import ContactEN from '../pages/ContactEN';
import ContactAR from '../pages/ContactAR';
import CategoryEN from '../pages/CategoryEN';
import CategoryAR from '../pages/CategoryAR';
import GraphicDesignEN from '../pages/GraphicDesignEN';
import GraphicDesignAR from '../pages/GraphicDesignAR';
import AppDesignEN from '../pages/AppDesignEN';
import AppDesignAR from '../pages/AppDesignAR';
import WebDesignEN from '../pages/WebDesignEN';
import WebDesignAR from '../pages/WebDesignAR';
import ThreeDDesignEN from '../pages/ThreeDDesignEN';
import ThreeDDesignAR from '../pages/ThreeDDesignAR';
import EgyAirEN from '../pages/EgyAirEN';
import EgyAirAR from '../pages/EgyAirAR';
import BlogDetailEmotionEN from '../pages/BlogDetailEmotionEN';
import NotFoundEN from '../pages/NotFoundEN';
import NotFoundAR from '../pages/NotFoundAR';
import TestAPI from '../pages/TestAPI';
import SupabasePage from '../pages/SupabasePage';
import ProjectsExample from '../components/examples/ProjectsExample';
import ContactFormExample from '../components/examples/ContactFormExample';

// List of valid/complete routes
const VALID_ROUTES = [
  '/',
  '/ar',
  '/home-two',
  '/home-two-ar',
  '/about',
  '/about-ar',
  '/blogs',
  '/blogs-ar',
  '/contact',
  '/contact-ar',
  '/category',
  '/category-ar',
  '/graphic-design',
  '/graphic-design-ar',
  '/app-design',
  '/app-design-ar',
  '/web-design',
  '/web-design-ar',
  '/3d-design',
  '/3d-design-ar',
  '/egy-air',
  '/egy-air-ar',
  '/designing-with-emotion-how-colors-shape-user-experience-ui-designer-in-cairo',
  '/404',
  '/404-ar'
];


function NotFoundRedirect() {
  const location = useLocation();
  const isAr = location.pathname.includes('-ar') || location.pathname.startsWith('/ar');
  return isAr ? <NotFoundAR /> : <NotFoundEN />;
}

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomeOneEN />} />
      <Route path="/ar" element={<HomeOneAR />} />
      <Route path="/home-two" element={<HomeTwoEN />} />
      <Route path="/home-two-ar" element={<HomeTwoAR />} />
      <Route path="/about" element={<AboutEN />} />
      <Route path="/about-ar" element={<AboutAR />} />
      <Route path="/blogs" element={<BlogsEN />} />
      <Route path="/blogs-ar" element={<BlogsAR />} />
      <Route path="/contact" element={<ContactEN />} />
      <Route path="/contact-ar" element={<ContactAR />} />
      <Route path="/category" element={<CategoryEN />} />
      <Route path="/category-ar" element={<CategoryAR />} />
      <Route path="/graphic-design" element={<GraphicDesignEN />} />
      <Route path="/graphic-design-ar" element={<GraphicDesignAR />} />
      <Route path="/app-design" element={<AppDesignEN />} />
      <Route path="/app-design-ar" element={<AppDesignAR />} />
      <Route path="/web-design" element={<WebDesignEN />} />
      <Route path="/web-design-ar" element={<WebDesignAR />} />
      <Route path="/3d-design" element={<ThreeDDesignEN />} />
      <Route path="/3d-design-ar" element={<ThreeDDesignAR />} />
      <Route path="/egy-air" element={<EgyAirEN />} />
      <Route path="/egy-air-ar" element={<EgyAirAR />} />
      <Route path="/test-api" element={<TestAPI />} />
      <Route path="/supabase" element={<SupabasePage />} />
      <Route path="/examples/projects" element={<ProjectsExample />} />
      <Route path="/examples/contact" element={<ContactFormExample />} />
      <Route path="/designing-with-emotion-how-colors-shape-user-experience-ui-designer-in-cairo" element={<BlogDetailEmotionEN />} />
      <Route path="/404" element={<NotFoundEN />} />
      <Route path="/404-ar" element={<NotFoundAR />} />
      <Route path="*" element={<NotFoundRedirect />} />
    </Routes>
  );
}


