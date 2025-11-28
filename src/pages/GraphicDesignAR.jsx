import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Layout from '../components/Layout';
import TiltedCard from '../components/TiltedCard';
import './GraphicDesignAR.css';

gsap.registerPlugin(ScrollTrigger);

export default function GraphicDesignAR() {
  const tipsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.tip-card-wrapper',
        {
          opacity: 0,
          y: 80,
          scale: 0.9,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: 'power3.out',
          stagger: 0.15,
          scrollTrigger: {
            trigger: tipsRef.current,
            start: 'top 75%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, tipsRef);

    return () => ctx.revert();
  }, []);

  return (
    <Layout lang="ar">
      <section className="hero-split container" aria-label="بطل تصميم الجرافيك">
        <div className="hero-content">
          <h1 className="hero-title">تصميم<br/>جرافيك</h1>
          <a className="btn" href="/ar#contact">تواصلي معي</a>
        </div>
        <div className="hero-media">
          <img src="/imgs/graphic-desgin/hero-img.png" alt="حاسوب بمشاريع" />
        </div>
      </section>

      <section className="container" id="work" aria-label="أحدث الأعمال">
        <h3 className="section-label">أحدث الأعمال</h3>
        <div className="work-list">
          <article className="work-item">
            <div className="work-media">
              <img src="/imgs/graphic-desgin/sandy-poject.png" alt="Sandy Skin" />
            </div>
            <div className="work-body">
              <h4>ساندي سكين — تصميم مجلد</h4>
              <p>مجلد أنيق لعلامة عناية بالبشرة بألوان وردية وسوداء تعكس الأناقة والثقة.</p>
            </div>
          </article>
          <article className="work-item work-item-clickable">
            <Link to="/egy-air-ar" className="work-item-link">
              <div className="work-media">
                <img src="/imgs/graphic-desgin/egy-air-project.png" alt="EGY Air Bag" />
              </div>
              <div className="work-body">
                <h4>إيجي إير — تصميم حقيبة هدايا</h4>
                <p>هوية عصرية تجمع البنفسجي والأبيض لإحساس بالثقة والحداثة.</p>
                <span className="btn view-more btn-right">عرض المشروع</span>
              </div>
            </Link>
          </article>
          <article className="work-item">
            <div className="work-media">
              <img src="/imgs/graphic-desgin/sonic-game.png" alt="Sonic Colors UI" />
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

      <section ref={tipsRef} className="tips-grid container" id="tips" aria-label="نصائح للمصممين">
        <div className="tips-left">
          <h3 className="section-label">نصائح يجب أن يعرفها كل <span className="accent">مصمم جرافيك</span></h3>
          <div className="tip-card-wrapper">
            <TiltedCard
              imageSrc="/imgs/graphic-desgin/tips-img.png"
              altText="صممي بهدف"
              captionText=""
              containerHeight="200px"
              containerWidth="100%"
              imageHeight="200px"
              imageWidth="100%"
              rotateAmplitude={12}
              scaleOnHover={1.15}
              showMobileWarning={false}
              showTooltip={false}
              displayOverlayContent={true}
              overlayContent={
                <div className="tip-card-overlay-content">
                  <h5>صممي بهدف وليس للزينة</h5>
                  <p>لكل عنصر بصري سبب وجود يدعم الرسالة أو الشعور المطلوب. سواء كان اللون أو الخط أو المسافات، كل قرار يجب أن يدعم الرسالة أو المشاعر التي تحاولين نقلها.</p>
                </div>
              }
            />
          </div>
          <div className="tip-card-wrapper">
            <TiltedCard
              imageSrc="/imgs/IMG_4737 2.png"
              altText="أتقني الخطوط"
              captionText=""
              containerHeight="200px"
              containerWidth="100%"
              imageHeight="200px"
              imageWidth="100%"
              rotateAmplitude={12}
              scaleOnHover={1.15}
              showMobileWarning={false}
              showTooltip={false}
              displayOverlayContent={true}
              overlayContent={
                <div className="tip-card-overlay-content">
                  <h5>أتقني الخطوط — نصف التصميم</h5>
                  <p>الخطوط ليست مجرد اختيار خطوط جميلة؛ بل عن التدرج الهرمي والقرائية والمشاعر. الخطوط الصحيحة يمكن أن تحول تماماً كيفية إدراك التصميم.</p>
                </div>
              }
            />
          </div>
          <div className="tip-card-wrapper">
            <TiltedCard
              imageSrc="/imgs/Frame 40.png"
              altText="فكري كعلامة"
              captionText=""
              containerHeight="200px"
              containerWidth="100%"
              imageHeight="200px"
              imageWidth="100%"
              rotateAmplitude={12}
              scaleOnHover={1.15}
              showMobileWarning={false}
              showTooltip={false}
              displayOverlayContent={true}
              overlayContent={
                <div className="tip-card-overlay-content">
                  <h5>فكري كعلامة وليس كمصمم فقط</h5>
                  <p>الاتساق والتركيز عبر العناصر البصرية يبني هوية قوية. قرارات التصميم يجب أن تعكس صوت العلامة وأهدافها، مما يجعل الهوية كاملة وأكثر فعالية.</p>
                </div>
              }
            />
          </div>
        </div>
        <div className="tips-media">
          <img src="/imgs/graphic-desgin/tips-img.png" alt="مكتب نيون" />
        </div>
      </section>

      <section className="cta-band" aria-label="لنعمل معاً" style={{backgroundImage:"url('/imgs/us working together.png')"}}>
        <div className="container centered">
          <p className="muted">تعرفي ما الذي ينقص</p>
          <h3 className="section-title centered">أن نعمل معاً</h3>
          <a className="btn" href="/ar#contact">تواصلي معي</a>
        </div>
      </section>
    </Layout>
  );
}
