import { Routes, Route, Navigate } from 'react-router-dom';
import HomeOneEN from '../pages/HomeOneEN';
import HomeOneAR from '../pages/HomeOneAR';
import HomeTwoEN from '../pages/HomeTwoEN';
import HomeTwoAR from '../pages/HomeTwoAR';
import AboutEN from '../pages/AboutEN';
import AboutAR from '../pages/AboutAR';
import BlogsEN from '../pages/BlogsEN';
import BlogsAR from '../pages/BlogsAR';
import CategoryEN from '../pages/CategoryEN';
import CategoryAR from '../pages/CategoryAR';
import GraphicDesignEN from '../pages/GraphicDesignEN';
import GraphicDesignAR from '../pages/GraphicDesignAR';
import BlogDetailEmotionEN from '../pages/BlogDetailEmotionEN';
import NotFoundAR from '../pages/NotFoundAR';

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
      <Route path="/category" element={<CategoryEN />} />
      <Route path="/category-ar" element={<CategoryAR />} />
      <Route path="/graphic-design" element={<GraphicDesignEN />} />
      <Route path="/graphic-design-ar" element={<GraphicDesignAR />} />
      <Route path="/designing-with-emotion-how-colors-shape-user-experience-ui-designer-in-cairo" element={<BlogDetailEmotionEN />} />
      <Route path="/404-ar" element={<NotFoundAR />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}


