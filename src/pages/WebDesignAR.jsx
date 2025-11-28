import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Layout from '../components/Layout';
import TiltedCard from '../components/TiltedCard';
import './WebDesignAR.css';

gsap.registerPlugin(ScrollTrigger);

export default function WebDesignAR() {
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
      <section className="hero-split container" aria-label="بطل تصميم الويب">
        <div className="hero-content">
          <h1 className="hero-title">تصميم<br/>ويب</h1>
          <a className="btn" href="/contact-ar">تواصلي معي</a>
        </div>
        <div className="hero-media">
          <img src="/imgs/Frame 41.png" alt="حاسوب ثلاثي الأبعاد بواجهة ويب" />
        </div>
      </section>

      <section className="container" id="work" aria-label="أحدث الأعمال">
        <h3 className="section-label">أحدث الأعمال</h3>
        <div className="work-list">
          <article className="work-item">
            <div className="work-media">
              <img src="/imgs/Frame 37.png" alt="موقع تجارة إلكترونية" />
            </div>
            <div className="work-body">
              <h4>منصة تجارة إلكترونية عصرية</h4>
              <p>موقع تجارة إلكترونية أنيق وسهل الاستخدام مصمم لتوفير تجارب تسوق سلسة. يركز التصميم على التنقل البديهي وعرض المنتجات الواضح وعمليات الدفع السلسة التي تحول الزوار إلى عملاء.</p>
            </div>
          </article>
          <article className="work-item">
            <div className="work-media">
              <img src="/imgs/IMG_4737 2.png" alt="موقع محفظة أعمال" />
            </div>
            <div className="work-body">
              <h4>موقع محفظة أعمال إبداعي</h4>
              <p>موقع محفظة أعمال أنيق يعرض الأعمال الإبداعية بصور مذهلة ورسوم متحركة سلسة. يؤكد التصميم على العمل نفسه مع توفير تجربة تصفح جذابة لا تُنسى للزوار.</p>
            </div>
          </article>
          <article className="work-item">
            <div className="work-media">
              <img src="/imgs/Frame 40.png" alt="موقع شركة" />
            </div>
            <div className="work-body">
              <h4>موقع شركة تجارية</h4>
              <p>موقع شركة احترافي يبني الثقة والمصداقية. يجمع التصميم بين الجماليات العصرية والتخطيطات الوظيفية، مما يضمن سهولة الوصول إلى المعلومات المهمة ووضوح رسالة العلامة التجارية.</p>
              <a className="btn view-more btn-right" href="#more">عرض المزيد</a>
            </div>
          </article>
        </div>
        <div id="more-projects" className="work-more hidden">
          <article className="work-box b1"><span className="box-title">صفحات هبوط</span></article>
          <article className="work-box b2"><span className="box-title">تطبيقات ويب</span></article>
          <article className="work-box b3"><span className="box-title">مواقع متجاوبة</span></article>
        </div>
        <div className="actions-right">
          <a className="btn view-less hidden" href="#less">عرض أقل</a>
        </div>
      </section>

      <section ref={tipsRef} className="tips-grid container" id="tips" aria-label="نصائح لمصممي الويب">
        <div className="tips-left">
          <h3 className="section-label">نصائح يجب أن يعرفها كل <span className="accent">مصمم ويب</span></h3>
          <div className="tip-card-wrapper">
            <TiltedCard
              imageSrc="/imgs/Frame 37.png"
              altText="تصميم موبايل أولاً"
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
                  <h5>صممي للموبايل أولاً</h5>
                  <p>ابدئي بالتفكير في الأجهزة المحمولة. التصميم الموجه للموبايل يضمن أن موقعك يعمل بشكل مثالي على الشاشات الصغيرة ويتوسع بشكل جميل إلى الشاشات الأكبر، مما يوفر أفضل تجربة لجميع المستخدمين.</p>
                </div>
              }
            />
          </div>
          <div className="tip-card-wrapper">
            <TiltedCard
              imageSrc="/imgs/IMG_4737 2.png"
              altText="سرعة التحميل"
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
                  <h5>السرعة مهمة أكثر من أي وقت مضى</h5>
                  <p>أوقات التحميل السريعة ضرورية لتجربة المستخدم وتحسين محركات البحث. حسني الصور وقللي الكود وركزي على الأداء. المستخدمون يتوقعون نتائج فورية، ومحركات البحث تكافئ المواقع السريعة.</p>
                </div>
              }
            />
          </div>
          <div className="tip-card-wrapper">
            <TiltedCard
              imageSrc="/imgs/Frame 40.png"
              altText="تنقل واضح"
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
                  <h5>التنقل يجب أن يكون بديهياً</h5>
                  <p>المستخدمون لا يجب أن يضطروا للتخمين أين يجدون المعلومات. التنقل الواضح وهيكل الصفحة المنطقي والموضع المتسق للعناصر تساعد المستخدمين على العثور على ما يحتاجونه بسرعة وسهولة.</p>
                </div>
              }
            />
          </div>
        </div>
        <div className="tips-media">
          <img src="/imgs/Frame 42.png" alt="مكتب حديث مع حاسوب محمول وعناصر واجهة المستخدم" />
        </div>
      </section>

      <section className="cta-band" aria-label="لنعمل معاً" style={{ backgroundImage: "url('/imgs/us working together.png')" }}>
        <div className="container centered">
          <p className="muted">تعرفي ما الذي ينقص</p>
          <h3 className="section-title centered">أن نعمل معاً</h3>
          <a className="btn" href="/contact-ar">تواصلي معي</a>
        </div>
      </section>
    </Layout>
  );
}

