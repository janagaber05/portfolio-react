import Layout from '../components/Layout';
import './CategoryAR.css';

export default function CategoryAR() {
  return (
    <Layout lang="ar">
      <section className="hero hero-cover work-hero" id="top" aria-label="غلاف الأعمال">
        <div className="hero-cover-bg" aria-hidden="true" style={{backgroundImage:"url('/imgs/Rectangle 20.png')"}}></div>
        <div className="container hero-center">
          <div>
            <h1 className="hero-title">أعمالي</h1>
            <p className="subline" style={{textAlign:"center", marginTop:"8px"}}>عالمي الإبداعي</p>
            <p className="muted" style={{textAlign:"center", maxWidth:"720px", margin:"6px auto 14px"}}>عرض لمشاريع تمزج بين التصميم والبرمجة والخيال.</p>
            <p style={{textAlign:"center"}}><a className="btn" href="#cats">استكشفي المزيد</a></p>
          </div>
        </div>
      </section>

      <section className="container cat-grid" id="cats" aria-label="شبكة التصنيفات">
        <article className="cat-card c1" style={{backgroundImage:"url('/imgs/Frame 42.png')", backgroundPosition:"center", backgroundSize:"cover"}}>
          <span className="cat-label">تصميم تطبيقات</span>
          <a className="click-fill" href="/ar#app-design" aria-label="تصميم تطبيقات"></a>
        </article>
        <article className="cat-card c2" style={{backgroundImage:"url('/imgs/Frame 41.png')", backgroundPosition:"center", backgroundSize:"cover"}}>
          <span className="cat-label">تصميم ويب</span>
          <a className="click-fill" href="/ar#web-design" aria-label="تصميم ويب"></a>
        </article>
        <article className="cat-card c3" style={{backgroundImage:"url('/imgs/Frame 43.png')", backgroundPosition:"center", backgroundSize:"cover"}}>
          <span className="cat-label">تصميم جرافيك</span>
          <a className="click-fill" href="/graphic-design-ar" aria-label="تصميم جرافيك"></a>
        </article>
        <article className="cat-card c4" style={{backgroundImage:"url('/imgs/Frame 40.png')", backgroundPosition:"center", backgroundSize:"cover"}}>
          <span className="cat-label">برمجة</span>
          <a className="click-fill" href="/ar#skills" aria-label="برمجة"></a>
        </article>
        <article className="cat-card c5" style={{backgroundImage:"url('/imgs/Frame 21.png')", backgroundPosition:"center", backgroundSize:"cover"}}>
          <span className="cat-label">المدونة</span>
          <a className="click-fill" href="/blogs-ar" aria-label="المدونة"></a>
        </article>
        <article className="cat-card c6" style={{backgroundImage:"url('/imgs/Frame 22.png')", backgroundPosition:"center", backgroundSize:"cover"}}>
          <span className="cat-label">3D</span>
          <a className="click-fill" href="#cats" aria-label="3D"></a>
        </article>
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


