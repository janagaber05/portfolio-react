import Layout from '../components/Layout';
import TiltedCard from '../components/TiltedCard';
import { Link } from 'react-router-dom';
import './BlogsAR.css';

const RECENT_POSTS = [
  {
    title: 'التصميم بالعاطفة: كيف تشكل الألوان تجربة المستخدم',
    href: '/designing-with-emotion-how-colors-shape-user-experience-ui-designer-in-cairo-ar',
    image: '/imgs/Frame 42.png',
    alt: 'مكتب',
    caption: 'التصميم بالعاطفة'
  },
  {
    title: 'من فكرة لواجهة: رحلتي في تصميم التطبيقات',
    href: '#',
    image: '/imgs/Frame 40.png',
    alt: 'واجهات نيون',
    caption: 'رحلة التصميم'
  },
  {
    title: 'فن التوازن: إدارة الإبداع والاتساق في التصميم',
    href: '#',
    image: '/imgs/Frame 18.png',
    alt: 'توازن',
    caption: 'فن التوازن'
  },
];

const PAST_POSTS = [
  {
    title: 'دراسة حالة: بناء هوية تطبيق لايف ستايل',
    image: '/imgs/Frame 8.png',
    alt: 'دراسة حالة',
    excerpt:
      'حكاية بناء هوية كاملة لتطبيق شبابي في القاهرة، من اختيار الشخصية الصوتية إلى الشاشات النهائية.',
  },
  {
    title: 'التعاون مع المطورين لواجهة سلسة',
    image: '/imgs/Frame 17.png',
    alt: 'تعاون',
    excerpt:
      'أفضل ممارساتي في التنسيق مع المطورين، وتسليم ملفات Figma واضحة مع حالات تفاعلية كاملة.',
  },
  {
    title: 'التفاعلات الدقيقة والحركة في تجربة المستخدم',
    image: '/imgs/Frame 13.png',
    alt: 'حركة',
    excerpt:
      'لماذا تعد الحركة الدقيقة جزءاً من بناء ثقة المستخدم، مع أمثلة لأنيميشن أستخدمها في مشاريعي.',
  },
];

export default function BlogsAR() {
  return (
    <Layout lang="ar">
      <div className="blogs-page" dir="rtl">
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
              {RECENT_POSTS.map(post => (
                <article key={post.title} className="blog-card">
                  <div className="blog-card__media">
                    <TiltedCard
                      imageSrc={post.image}
                      altText={post.alt}
                      captionText={post.caption}
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
                    <Link className="blog-card__link" to={post.href}>
                      {post.title}
                    </Link>
                  </h4>
                  <p className="blog-card__excerpt">{post.excerpt}</p>
                  <div className="blog-card__actions">
                    <Link className="pill" to={post.href}>
                      اقرأ المقال
                    </Link>
                  </div>
                </article>
              ))}
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
                {PAST_POSTS.map(post => (
                  <article key={post.title} className="blog-card blog-card--compact">
                    <div className="blog-card__media">
                      <img src={post.image} alt={post.alt} loading="lazy" />
                    </div>
                    <h4 className="blog-card__title">{post.title}</h4>
                    <p className="blog-card__excerpt">{post.excerpt}</p>
                    <div className="blog-card__actions">
                      <a className="pill" href="#">
                        اقرأ المقال
                      </a>
                    </div>
                  </article>
                ))}
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
