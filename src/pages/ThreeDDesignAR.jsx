import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Layout from '../components/Layout';
import TiltedCard from '../components/TiltedCard';
import SplitText from '../components/SplitText';
import CurvedLoop from '../components/CurvedLoop';
import './ThreeDDesignAR.css';

gsap.registerPlugin(ScrollTrigger);

export default function ThreeDDesignAR() {
  const tipsRef = useRef(null);
  const floating3dRef = useRef(null);
  const workRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Floating 3D object animation
      if (floating3dRef.current) {
        gsap.to(floating3dRef.current.querySelector('.floating-3d-img'), {
          y: -30,
          duration: 3,
          ease: 'power1.inOut',
          repeat: -1,
          yoyo: true,
        });
        
        gsap.to(floating3dRef.current.querySelector('.floating-3d-img'), {
          rotation: 5,
          duration: 4,
          ease: 'power1.inOut',
          repeat: -1,
          yoyo: true,
        });
      }

      // Parallax effects for work items
      if (workRef.current) {
        const workItems = workRef.current.querySelectorAll('.work-item');
        workItems.forEach((item, index) => {
          const img = item.querySelector('.work-media img');
          const content = item.querySelector('.work-body');
          
          // Parallax for image
          gsap.to(img, {
            y: -100,
            ease: 'none',
            scrollTrigger: {
              trigger: item,
              start: 'top bottom',
              end: 'bottom top',
              scrub: true,
            },
          });

          // Fade in content
          gsap.fromTo(
            content,
            {
              opacity: 0,
              y: 50,
            },
            {
              opacity: 1,
              y: 0,
              duration: 1,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: item,
                start: 'top 80%',
                toggleActions: 'play none none none',
              },
            }
          );
        });
      }

      // Tips section cards animation
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
    }, workRef);

    return () => ctx.revert();
  }, []);

  return (
    <Layout lang="ar">
      <section className="hero-split container" aria-label="بطل التصميم ثلاثي الأبعاد">
        <div className="hero-content">
          <h1 className="hero-title">
            <SplitText
              text="تصميم"
              tag="span"
              delay={80}
              duration={0.6}
              ease="power3.out"
              from={{ opacity: 0, y: 50 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.2}
              textAlign="right"
            />
            <br/>
            <SplitText
              text="ثلاثي الأبعاد"
              tag="span"
              delay={80}
              duration={0.6}
              ease="power3.out"
              from={{ opacity: 0, y: 50 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.2}
              textAlign="right"
            />
          </h1>
          <a className="btn" href="/contact-ar">تواصلي معي</a>
        </div>
        <div className="hero-media">
          <img src="/imgs/Frame 41.png" alt="لوحات ثلاثية الأبعاد متصلة بتصاميم متوهجة" />
        </div>
      </section>

      <section className="three-d-divider" aria-label="شريط خدمات التصميم ثلاثي الأبعاد">
        <div className="three-d-divider__strip three-d-divider__strip--rtl">
          <CurvedLoop
            marqueeText="النمذجة ثلاثية الأبعاد • التقديم • الرسوم المتحركة • القوام • الإضاءة •"
            speed={4.2}
            curveAmount={0}
            interactive={false}
            className="curved-loop-text"
          />
        </div>
      </section>

      <section className="floating-3d-object container" aria-label="كائن ثلاثي الأبعاد عائم" ref={floating3dRef}>
        <div className="floating-3d-wrapper">
          <img src="/imgs/3d-object.png" alt="كائن ثلاثي الأبعاد عائم" className="floating-3d-img" />
        </div>
      </section>

      <section className="container" id="work" aria-label="أحدث الأعمال" ref={workRef}>
        <h3 className="section-label">
          <SplitText
            text="أحدث الأعمال"
            tag="span"
            delay={50}
            duration={0.6}
            ease="power3.out"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.2}
            textAlign="right"
          />
        </h3>
        <div className="work-list">
          <article className="work-item">
            <div className="work-media">
              <img src="/imgs/3d-object.png" alt="مزهرية كريستال ثلاثية الأبعاد" />
            </div>
            <div className="work-body">
              <h4>مزهرية كريستال</h4>
              <p>مزهرية ثلاثية الأبعاد شفافة مصممة لعرض الضوء والانعكاس والواقعية المادية. يبرز النموذج الدقة في نسيج الزجاج والانكسار والشكل البسيط النظيف — مما يدمج الأناقة مع التحكم التقني في التقديم.</p>
            </div>
          </article>
          <article className="work-item">
            <div className="work-media">
              <img src="/imgs/3d-object.png" alt="ثنائي التكنولوجيا ثلاثي الأبعاد" />
            </div>
            <div className="work-body">
              <h4>ثنائي التكنولوجيا — حاسوب محمول ولوح</h4>
              <p>مجموعة نماذج ثلاثية الأبعاد مفصلة تضم حاسوباً محمولاً ولوحاً مصممة لتعكس الجماليات الرقمية العصرية. يكمن التركيز في التشطيبات المعدنية والنسب الأنيقة والإضاءة الواقعية، مما يمثل الوظائف والتصميم المعاصر.</p>
            </div>
          </article>
          <article className="work-item">
            <div className="work-media">
              <img src="/imgs/3d-object.png" alt="إعداد مساحة معيشة ثلاثي الأبعاد" />
            </div>
            <div className="work-body">
              <h4>إعداد مساحة المعيشة — جدار التلفزيون</h4>
              <p>مشهد داخلي واقعي ثلاثي الأبعاد يتضمن تلفزيوناً مثبتاً وطاولة وتصميم جدار. يستكشف هذا المشروع التوازن المكاني وعمق الإضاءة وتنوع المواد، مما يلتقط أجواء معيشة مريحة وعصرية.</p>
              <a className="btn view-more btn-right" href="#more">عرض المزيد</a>
            </div>
          </article>
        </div>
        <div id="more-projects" className="work-more hidden">
          <article className="work-box b1"><span className="box-title">نماذج ثلاثية الأبعاد</span></article>
          <article className="work-box b2"><span className="box-title">عروض تقديمية</span></article>
          <article className="work-box b3"><span className="box-title">رسوم متحركة</span></article>
        </div>
        <div className="actions-right">
          <a className="btn view-less hidden" href="#less">عرض أقل</a>
        </div>
      </section>

      <section ref={tipsRef} className="tips-grid container" id="tips" aria-label="نصائح لمصممي ثلاثي الأبعاد">
        <div className="tips-left">
          <h3 className="section-label">
            <SplitText
              text="نصائح يجب أن يعرفها كل "
              tag="span"
              delay={40}
              duration={0.5}
              ease="power2.out"
              from={{ opacity: 0, x: 20 }}
              to={{ opacity: 1, x: 0 }}
              threshold={0.3}
              textAlign="right"
            />
            <span className="accent">
              <SplitText
                text="مصمم ثلاثي الأبعاد"
                tag="span"
                delay={40}
                duration={0.5}
                ease="power2.out"
                from={{ opacity: 0, x: 20 }}
                to={{ opacity: 1, x: 0 }}
                threshold={0.3}
                textAlign="right"
              />
            </span>
          </h3>
          <div className="tip-card-wrapper">
            <TiltedCard
              imageSrc="/imgs/Frame 37.png"
              altText="ابدئي بمراجع قوية"
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
                  <h5>ابدئي بمراجع قوية</h5>
                  <p>اجمعي دائماً صوراً من الحياة الواقعية قبل النمذجة. المراجع توجه نسبك وأشكالك وتفاصيلك، مما يجعل نموذجك النهائي أكثر دقة ومصداقية.</p>
                </div>
              }
            />
          </div>
          <div className="tip-card-wrapper">
            <TiltedCard
              imageSrc="/imgs/IMG_4737 2.png"
              altText="حافظي على طوبولوجيا نظيفة"
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
                  <h5>حافظي على طوبولوجيا نظيفة</h5>
                  <p>الهندسة المنظمة هي المفتاح. حلقات الحواف النظيفة والطوبولوجيا الصحيحة تجعل نموذجك أسهل في النسيج والتحريك والتقديم.</p>
                </div>
              }
            />
          </div>
          <div className="tip-card-wrapper">
            <TiltedCard
              imageSrc="/imgs/Frame 40.png"
              altText="ركز على القوام الواقعي"
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
                  <h5>ركز على القوام الواقعي</h5>
                  <p>المواد مثل الزجاج والمعدن والخشب تعتمد على القوام عالية الجودة. تفاصيل السطح الصحيحة يمكن أن تحول نموذجاً بسيطاً إلى شيء مذهل بصرياً.</p>
                </div>
              }
            />
          </div>
        </div>
        <div className="tips-media">
          <img src="/imgs/Frame 42.png" alt="مكتب حديث مع لوح وعناصر ثلاثية الأبعاد" />
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

