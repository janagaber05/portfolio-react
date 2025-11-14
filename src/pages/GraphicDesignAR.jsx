import Layout from '../components/Layout';
import './GraphicDesignAR.css';

export default function GraphicDesignAR() {
  return (
    <Layout lang="ar">
      <section className="hero-split container" aria-label="بطل تصميم الجرافيك">
        <div className="hero-content">
          <h1 className="hero-title">تصميم<br/>جرافيك</h1>
          <a className="btn" href="/ar#contact">تواصلي معي</a>
        </div>
        <div className="hero-media">
          <img src="/imgs/Frame 41.png" alt="حاسوب بمشاريع" />
        </div>
      </section>

      <section className="container" id="work" aria-label="أحدث الأعمال">
        <h3 className="section-label">أحدث الأعمال</h3>
        <div className="work-list">
          <article className="work-item">
            <div className="work-media">
              <img src="/imgs/Frame 37.png" alt="Sandy Skin" />
            </div>
            <div className="work-body">
              <h4>ساندي سكين — تصميم مجلد</h4>
              <p>مجلد أنيق لعلامة عناية بالبشرة بألوان وردية وسوداء تعكس الأناقة والثقة.</p>
            </div>
          </article>
          <article className="work-item">
            <div className="work-media">
              <img src="/imgs/IMG_4737 2.png" alt="EGY Air Bag" />
            </div>
            <div className="work-body">
              <h4>إيجي إير — تصميم حقيبة هدايا</h4>
              <p>هوية عصرية تجمع البنفسجي والأبيض لإحساس بالثقة والحداثة.</p>
            </div>
          </article>
          <article className="work-item">
            <div className="work-media">
              <img src="/imgs/Frame 40.png" alt="Sonic Colors UI" />
            </div>
            <div className="work-body">
              <h4>سونيك كولورز — إعادة تصميم الإعدادات</h4>
              <p>واجهة نابضة وعناصر نيون لعرض الشكل داخل بيئة رقمية فعلية.</p>
              <a className="btn view-more btn-right" href="#more">عرض المزيد</a>
            </div>
          </article>
        </div>
        <div id="more-projects" className="work-more hidden">
          <article className="work-box b1"><span className="box-title">سلسلة بوسترات</span></article>
          <article className="work-box b2"><span className="box-title">عدة براند</span></article>
          <article className="work-box b3"><span className="box-title">بطاقات سوشيال</span></article>
        </div>
        <div className="actions-right">
          <a className="btn view-less hidden" href="#less">عرض أقل</a>
        </div>
      </section>

      <section className="tips-grid container" id="tips" aria-label="نصائح للمصممين">
        <div className="tips-left">
          <h3 className="section-label">نصائح يجب أن يعرفها كل <span className="accent">مصمم جرافيك</span></h3>
          <div className="tip-card">
            <h5>صممي بهدف وليس للزينة</h5>
            <p>لكل عنصر بصري سبب وجود يدعم الرسالة أو الشعور المطلوب.</p>
          </div>
          <div className="tip-card">
            <h5>أتقني الخطوط — نصف التصميم</h5>
            <p>التدرج الهرمي والقرائية والمشاعر تصنع الفارق.</p>
          </div>
          <div className="tip-card">
            <h5>فكري كعلامة وليس كمصمم فقط</h5>
            <p>الاتساق يبني هوية قوية والقرارات يجب أن تعكس صوت العلامة.</p>
          </div>
        </div>
        <div className="tips-media">
          <img src="/imgs/Frame 42.png" alt="مكتب نيون" />
        </div>
      </section>

      <section className="cta-band" aria-label="لنعمل معاً" style={{ backgroundImage: "url('/imgs/us working together.png')" }}>
        <div className="container centered">
          <p className="muted">تعرفي ما الذي ينقص</p>
          <h3 className="section-title centered">أن نعمل معاً</h3>
          <a className="btn" href="/ar#contact">تواصلي معي</a>
        </div>
      </section>
    </Layout>
  );
}


