import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Layout from '../components/Layout';
import TiltedCard from '../components/TiltedCard';
import './AppDesignAR.css';

gsap.registerPlugin(ScrollTrigger);

export default function AppDesignAR() {
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
      <section className="hero-split container" aria-label="بطل تصميم التطبيقات">
        <div className="hero-content">
          <h1 className="hero-title">تصميم<br/>تطبيقات</h1>
          <a className="btn" href="/contact-ar">تواصلي معي</a>
        </div>
        <div className="hero-media">
          <img src="/imgs/Frame 41.png" alt="هاتف ذكي ثلاثي الأبعاد بواجهة تطبيق" />
        </div>
      </section>

      <section className="container" id="work" aria-label="أحدث الأعمال">
        <h3 className="section-label">أحدث الأعمال</h3>
        <div className="work-list">
          <article className="work-item">
            <div className="work-media">
              <img src="/imgs/Frame 37.png" alt="تطبيق Easy Eat" />
            </div>
            <div className="work-body">
              <h4>Easy Eat — الطبخ أصبح سهلاً</h4>
              <p>Easy Eat هو تطبيق طبخ ذكي مصمم لجعل وقتك في المطبخ أبسط وأكثر متعة. يساعد المستخدمين على اكتشاف الوصفات وتنظيم المكونات واتباع التعليمات خطوة بخطوة بسهولة — مما يحول كل وجبة إلى تجربة سلسة وخالية من التوتر.</p>
            </div>
          </article>
          <article className="work-item">
            <div className="work-media">
              <img src="/imgs/IMG_4737 2.png" alt="تطبيق Evento" />
            </div>
            <div className="work-body">
              <h4>Evento — ابحثي عن اللحظة المناسبة لك</h4>
              <p>Evento يبسط اكتشاف الفعاليات من خلال التوصيات الذكية والحجز السلس. سواء كانت موسيقى أو فن أو مغامرة، يساعدك على التخطيط لرحلتك المثالية ببضع نقرات فقط.</p>
            </div>
          </article>
          <article className="work-item">
            <div className="work-media">
              <img src="/imgs/Frame 40.png" alt="تطبيق Escape It" />
            </div>
            <div className="work-body">
              <h4>Escape It — الواقع له لمسة خاصة</h4>
              <p>Escape It هي لعبة غرفة هروب بالواقع المعزز تم إنشاؤها بالتعاون مع جيلان حمد. يحول التطبيق أي مساحة إلى تجربة تفاعلية مثيرة، حيث يحل اللاعبون الألغاز ويكتشفون الأدلة المخفية ويتسابقون مع الوقت — مما يدمج الإبداع والتكنولوجيا والخيال في عالم واحد غامر.</p>
              <a className="btn view-more btn-right" href="#more">عرض المزيد</a>
            </div>
          </article>
        </div>
        <div id="more-projects" className="work-more hidden">
          <article className="work-box b1"><span className="box-title">تطبيقات موبايل</span></article>
          <article className="work-box b2"><span className="box-title">تصميم واجهة المستخدم</span></article>
          <article className="work-box b3"><span className="box-title">نماذج أولية</span></article>
        </div>
        <div className="actions-right">
          <a className="btn view-less hidden" href="#less">عرض أقل</a>
        </div>
      </section>

      <section ref={tipsRef} className="tips-grid container" id="tips" aria-label="نصائح لمصممي التطبيقات">
        <div className="tips-left">
          <h3 className="section-label">نصائح يجب أن يعرفها كل <span className="accent">مصمم تطبيقات</span></h3>
          <div className="tip-card-wrapper">
            <TiltedCard
              imageSrc="/imgs/Frame 37.png"
              altText="صممي للمستخدم"
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
                  <h5>صممي للمستخدم وليس لنفسك</h5>
                  <p>ابدئي دائماً بفهم مستخدميك — أهدافهم وإحباطاتهم وعاداتهم. كل لون وزر واختيار تخطيط يجب أن يجعل رحلتهم أسهل، وليس فقط أن يبدو جميلاً.</p>
                </div>
              }
            />
          </div>
          <div className="tip-card-wrapper">
            <TiltedCard
              imageSrc="/imgs/IMG_4737 2.png"
              altText="اجعليه بسيطاً"
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
                  <h5>اجعليه بسيطاً وبديهياً</h5>
                  <p>أفضل التصاميم تشعر بالطبيعية. تجنبي الفوضى، استخدمي التنقل الواضح، وتأكدي من أن المستخدمين لا يحتاجون للتفكير كثيراً لمعرفة ما يجب فعله بعد ذلك.</p>
                </div>
              }
            />
          </div>
          <div className="tip-card-wrapper">
            <TiltedCard
              imageSrc="/imgs/Frame 40.png"
              altText="أولوي الاتساق"
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
                  <h5>أولوي الاتساق</h5>
                  <p>استخدمي خطوطاً وألواناً وأيقونات ومسافات متسقة عبر جميع الشاشات. الاتساق يبني الثقة ويساعد المستخدمين على الشعور بالألفة مع تطبيقك.</p>
                </div>
              }
            />
          </div>
        </div>
        <div className="tips-media">
          <img src="/imgs/Frame 42.png" alt="مكتب حديث مع لوح و عناصر واجهة المستخدم" />
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

