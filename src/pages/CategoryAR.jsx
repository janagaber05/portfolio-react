import { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import CircularGallery from '../components/CircularGallery';
import { useSectionContent } from '../hooks/useHomeContent';
import './CategoryAR.css';

export default function CategoryAR() {
  const { getContent } = useSectionContent('category', 'ar');
  const [hero, setHero] = useState({ title: '', subline: '', muted: '' });

  useEffect(() => {
    setHero({
      title: getContent('category_hero_title') || 'أعمالي',
      subline: getContent('category_hero_subtitle') || 'استكشفي مشاريعي الإبداعية',
      muted: getContent('category_hero_description') || 'مجموعة من تصميمات UX/UI ومشاريع الويب والأعمال الإبداعية',
    });
  }, [getContent]);

  return (
    <Layout lang="ar">
      <section className="hero hero-cover work-hero" id="top" aria-label="غلاف الأعمال">
        <div className="hero-cover-bg" aria-hidden="true" style={{backgroundImage:"url('/imgs/category/hero-category.png')"}}></div>
        <div className="container hero-center">
          <div className="work-hero__content" dir="rtl">
            <div className="work-hero__text">
              <h1 className="hero-title">{hero.title}</h1>
              <p className="subline subline-centered">{hero.subline}</p>
              <p className="muted muted-centered">{hero.muted}</p>
              <p className="btn-wrapper-centered"><a className="btn" href="#cats">استكشفي المزيد</a></p>
            </div>
            <div className="work-hero__image" aria-hidden="true">
              <img src="/imgs/category/hero-category.png" alt="أعمالي" loading="eager" />
            </div>
          </div>
        </div>
      </section>

      <section className="container cat-gallery-section" id="cats" aria-label="شبكة التصنيفات">
        <div className="cat-gallery-wrapper">
          <CircularGallery
            items={[
              { image: '/imgs/category/app-design-category.png', text: 'تصميم تطبيقات', href: '/app-design-ar' },
              { image: '/imgs/category/web-desogn-category.png', text: 'تصميم ويب', href: '/web-design-ar' },
              { image: '/imgs/category/graphic-design-category.png', text: 'تصميم جرافيك', href: '/graphic-design-ar' },
              { image: '/imgs/category/coding-category.png', text: 'برمجة', href: '/404-ar' },
              { image: '/imgs/category/blogs-category.png', text: 'المدونة', href: '/blogs-ar' },
              { image: '/imgs/category/3d-category.png', text: '3D', href: '/404-ar' }
            ]}
            bend={3}
            textColor="#ffffff"
            borderRadius={0.05}
            scrollEase={0.02}
            scrollSpeed={3}
          />
        </div>
      </section>

      <section className="cta-band" id="contact" aria-label="دعوة للتواصل" style={{backgroundImage:"url('/imgs/us working together.png')"}}>
        <div className="container">
          <p className="muted muted-centered">{getContent('category_cta_text') || 'تعرفي ما الذي ينقص؟'}</p>
          <h3 className="section-title centered section-title-spaced">{getContent('category_cta_title') || 'أن نعمل معاً'}</h3>
          <p className="btn-wrapper-centered"><a className="btn" href="/ar#contact">{getContent('category_cta_button') || 'تواصلي معي'}</a></p>
        </div>
      </section>
    </Layout>
  );
}


