import Layout from '../components/Layout';
import CircularGallery from '../components/CircularGallery';
import './CategoryAR.css';

export default function CategoryAR() {
  return (
    <Layout lang="ar">
      <section className="hero hero-cover work-hero" id="top" aria-label="غلاف الأعمال">
        <div className="hero-cover-bg" aria-hidden="true" style={{backgroundImage:"url('/imgs/Rectangle 20.png')"}}></div>
        <div className="container hero-center">
          <div className="work-hero__content" dir="rtl">
            <div className="work-hero__text">
              <h1 className="hero-title">أعمالي</h1>
              <p className="subline" style={{textAlign:"center", marginTop:"8px"}}>عالمي الإبداعي</p>
              <p className="muted" style={{textAlign:"center", maxWidth:"720px", margin:"6px auto 14px"}}>عرض لمشاريع تمزج بين التصميم والبرمجة والخيال.</p>
              <p style={{textAlign:"center"}}><a className="btn" href="#cats">استكشفي المزيد</a></p>
            </div>
            <div className="work-hero__image" aria-hidden="true">
              <img src="/imgs/home page/hero-img.png" alt="أعمالي" loading="eager" />
            </div>
          </div>
        </div>
      </section>

      <section className="container cat-gallery-section" id="cats" aria-label="شبكة التصنيفات">
        <div style={{ height: '600px', position: 'relative' }}>
          <CircularGallery
            items={[
              { image: '/imgs/Frame 42.png', text: 'تصميم تطبيقات', href: '/app-design-ar' },
              { image: '/imgs/Frame 41.png', text: 'تصميم ويب', href: '/web-design-ar' },
              { image: '/imgs/Frame 43.png', text: 'تصميم جرافيك', href: '/graphic-design-ar' },
              { image: '/imgs/Frame 40.png', text: 'برمجة', href: '/ar#skills' },
              { image: '/imgs/Frame 21.png', text: 'المدونة', href: '/blogs-ar' },
              { image: '/imgs/Frame 22.png', text: '3D', href: '/3d-design-ar' }
            ]}
            bend={3}
            textColor="#ffffff"
            borderRadius={0.05}
            scrollEase={0.02}
            scrollSpeed={3}
          />
        </div>
      </section>

      <section className="cta-band" id="contact" aria-label="دعوة للتواصل" style={{ backgroundImage: "url('/imgs/us working together.png')" }}>
        <div className="container">
          <p className="muted" style={{textAlign:"center"}}>تعرفي ما الذي ينقص؟</p>
          <h3 className="section-title centered" style={{marginBottom:"12px"}}>أن نعمل معاً</h3>
          <p style={{textAlign:"center"}}><a className="btn" href="/ar#contact">تواصلي معي</a></p>
        </div>
      </section>
    </Layout>
  );
}


