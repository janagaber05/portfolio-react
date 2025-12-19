import { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import TiltedCard from '../components/TiltedCard';
import LiquidEther from '../components/LiquidEther';
import { Link } from 'react-router-dom';
import { getAllBlogs } from '../lib/api/blogs';
import './BlogsAR.css';

export default function BlogsAR() {
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchBlogs() {
      setLoading(true);
      setError(null);
      const { data, error: fetchError } = await getAllBlogs();
      if (fetchError) {
        setError(fetchError);
        setBlogPosts([]);
      } else {
        setBlogPosts(data || []);
      }
      setLoading(false);
    }
    fetchBlogs();
  }, []);

  const recentPosts = blogPosts.slice(0, 3);
  const pastPosts = blogPosts.slice(3);

  return (
    <Layout lang="ar">
      <div className="blogs-page" dir="rtl">
        <div className="blogs-page__bg" aria-hidden="true">
          <LiquidEther
            colors={[ '#5227FF', '#FF9FFC', '#B19EEF', '#0D1017' ]}
            mouseForce={16}
            cursorSize={120}
            isViscous={false}
            viscous={30}
            iterationsViscous={32}
            iterationsPoisson={32}
            resolution={0.6}
            isBounce={false}
            autoDemo
            autoSpeed={0.45}
            autoIntensity={2}
            takeoverDuration={0.25}
            autoResumeDelay={2500}
            autoRampDuration={0.5}
          />
        </div>
        <div className="blogs-page__content">
          <section className="container blogs-hero" aria-label="بطل المدونة">
            <div className="blogs-hero__text">
              <span className="blogs-hero__badge">رؤى وخواطر</span>
              <h1 className="blogs-hero__title">مدونة جنا جابر — رؤى مصممة UI/UX في القاهرة</h1>
              <p className="blogs-hero__intro">
                هنا أشاركك تجاربي اليومية، دراسات حالة قاهرية، وأفكاراً صادقة حول بناء تجارب رقمية أصيلة.
              </p>
              <div className="blogs-hero__cta">
                <a className="btn" href="/ar#contact">
                  تواصلي معي
                </a>
              </div>
            </div>
            <div className="blogs-hero__media">
              <TiltedCard
                imageSrc="/imgs/blog page/blog-hero.png"
                altText="رسم توضيحي للمدونة"
                captionText="فن التدوين"
                containerHeight="360px"
                containerWidth="100%"
                imageHeight="360px"
                imageWidth="100%"
                rotateAmplitude={12}
                scaleOnHover={1.12}
                showMobileWarning={false}
                showTooltip={false}
                displayOverlayContent={false}
              />
            </div>
          </section>

          <section className="container blogs-section" aria-label="أحدث المقالات">
            <div className="blogs-section__header">
              <h3 className="section-label">أحدث المقالات</h3>
              <p className="blogs-section__sub">
                مقالات جديدة توثق ما أعمل عليه حالياً، وما أتعلمه مع كل مشروع تصميم وتجربة مستخدم.
              </p>
            </div>
            <div className="blogs-grid">
              {loading ? (
                <div>جار التحميل...</div>
              ) : error ? (
                <div style={{ color: 'red' }}>خطأ في جلب المقالات</div>
              ) : recentPosts.length > 0 ? (
                recentPosts.map(post => (
                  <article key={post.id} className="blog-card">
                    <div className="blog-card__media">
                      <TiltedCard
                        imageSrc={post.featured_image}
                        altText={post.title_ar}
                        captionText={post.title_ar}
                        containerHeight="260px"
                        containerWidth="100%"
                        imageHeight="260px"
                        imageWidth="100%"
                        rotateAmplitude={12}
                        scaleOnHover={1.12}
                        showMobileWarning={false}
                        showTooltip={false}
                        displayOverlayContent={false}
                      />
                    </div>
                    <h4 className="blog-card__title">
                      <Link className="blog-card__link" to={`/blog/${post.slug}`}>
                        {post.title_ar}
                      </Link>
                    </h4>
                    <p className="blog-card__excerpt">{post.excerpt_ar}</p>
                    <div className="blog-card__actions">
                      <Link className="pill" to={`/blog/${post.slug}`}>
                        اقرأ المقال
                      </Link>
                    </div>
                  </article>
                ))
              ) : (
                <div>لا توجد مقالات</div>
              )}
            </div>
          </section>

          <section className="container blogs-section" aria-label="سلايدر المقالات السابقة">
            <div className="blogs-section__header">
              <h3 className="section-label">مقالات سابقة</h3>
              <p className="blogs-section__sub">
                تصفّحي الأرشيف لتجدي دروساً عملية، نصائح تصميم، وملاحظات لن تبطل قيمتها مع الوقت.
              </p>
            </div>
            <div className="blogs-slider">
              <button className="blogs-slider__arrow blogs-slider__arrow--prev" type="button" aria-label="المقال السابق">
                ‹
              </button>
              <div className="blogs-slider__track">
                {loading ? (
                  <div>جار التحميل...</div>
                ) : error ? (
                  <div style={{ color: 'red' }}>خطأ في جلب المقالات</div>
                ) : pastPosts.length > 0 ? (
                  pastPosts.map(post => (
                    <article key={post.id} className="blog-card blog-card--compact">
                      <div className="blog-card__media">
                        <img src={post.featured_image} alt={post.title_ar} loading="lazy" />
                      </div>
                      <h4 className="blog-card__title">{post.title_ar}</h4>
                      <p className="blog-card__excerpt">{post.excerpt_ar}</p>
                      <div className="blog-card__actions">
                        <Link className="pill" to={`/blog/${post.slug}`}>
                          اقرأ المقال
                        </Link>
                      </div>
                    </article>
                  ))
                ) : (
                  <div>لا توجد مقالات</div>
                )}
              </div>
              <button className="blogs-slider__arrow blogs-slider__arrow--next" type="button" aria-label="المقال التالي">
                ›
              </button>
            </div>
            <div className="blogs-dots" role="tablist" aria-label="ترقيم المقالات">
              <button className="blogs-dots__dot blogs-dots__dot--active" type="button" aria-label="الصفحة 1" />
              <button className="blogs-dots__dot" type="button" aria-label="الصفحة 2" />
              <button className="blogs-dots__dot" type="button" aria-label="الصفحة 3" />
            </div>
          </section>
        </div>
      </div>

      <section className="cta-band" id="contact" aria-label="دعوة للتواصل" style={{ backgroundImage: "url('/imgs/us working together.png')" }}>
        <div className="container centered">
          <p className="muted">هل تعلمين ما المفقود؟</p>
          <h3 className="section-title centered">أن نعمل معاً</h3>
          <p>
            <a className="btn" href="/ar#contact">
              تواصلي معي
            </a>
          </p>
        </div>
      </section>
    </Layout>
  );
}
