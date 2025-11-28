import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Layout from '../components/Layout';
import TiltedCard from '../components/TiltedCard';
import SplitText from '../components/SplitText';
import CurvedLoop from '../components/CurvedLoop';
import './ThreeDDesignEN.css';

gsap.registerPlugin(ScrollTrigger);

export default function ThreeDDesignEN() {
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
    <Layout lang="en">
      <section className="hero-split container" aria-label="3D Design hero">
        <div className="hero-content">
          <h1 className="hero-title">
            <SplitText
              text="3D"
              tag="span"
              delay={80}
              duration={0.6}
              ease="power3.out"
              from={{ opacity: 0, y: 50 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.2}
              textAlign="left"
            />
            <br/>
            <SplitText
              text="Design"
              tag="span"
              delay={80}
              duration={0.6}
              ease="power3.out"
              from={{ opacity: 0, y: 50 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.2}
              textAlign="left"
            />
          </h1>
          <a className="btn" href="/contact">Contact me</a>
        </div>
        <div className="hero-media">
          <img src="/imgs/Frame 41.png" alt="3D interconnected panels with glowing designs" />
        </div>
      </section>

      <section className="three-d-divider" aria-label="3D Design services strip">
        <div className="three-d-divider__strip">
          <CurvedLoop
            marqueeText="3D Modeling • Rendering • Animation • Texturing • Lighting •"
            speed={4.2}
            curveAmount={0}
            interactive={false}
          />
        </div>
      </section>

      <section className="floating-3d-object container" aria-label="Floating 3D object" ref={floating3dRef}>
        <div className="floating-3d-wrapper">
          <img src="/imgs/3d-object.png" alt="Floating 3D object" className="floating-3d-img" />
        </div>
      </section>

      <section className="container" id="work" aria-label="Recent work" ref={workRef}>
        <h3 className="section-label">
          <SplitText
            text="Recent Work"
            tag="span"
            delay={50}
            duration={0.6}
            ease="power3.out"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.2}
            textAlign="left"
          />
        </h3>
        <div className="work-list">
          <article className="work-item">
            <div className="work-media">
              <img src="/imgs/3d-object.png" alt="Crystal Vase 3D render" />
            </div>
            <div className="work-body">
              <h4>Crystal Vase</h4>
              <p>A transparent 3D vase designed to showcase light, reflection, and material realism. The model highlights precision in glass texture, refraction, and clean minimal form — blending elegance with technical control in rendering.</p>
            </div>
          </article>
          <article className="work-item">
            <div className="work-media">
              <img src="/imgs/3d-object.png" alt="Tech Duo 3D render" />
            </div>
            <div className="work-body">
              <h4>Tech Duo — Laptop & Tablet</h4>
              <p>A detailed 3D model set featuring a laptop and tablet designed to reflect modern digital aesthetics. The focus lies in metallic finishes, sleek proportions, and realistic lighting, representing functionality and contemporary design.</p>
            </div>
          </article>
          <article className="work-item">
            <div className="work-media">
              <img src="/imgs/3d-object.png" alt="Living Space Setup 3D render" />
            </div>
            <div className="work-body">
              <h4>Living Space Setup — TV Wall</h4>
              <p>A realistic 3D interior scene that includes a mounted television, table, and wall design. This project explores spatial balance, lighting depth, and material variety, capturing a cozy yet modern living atmosphere.</p>
              <a className="btn view-more btn-right" href="#more">View More</a>
            </div>
          </article>
        </div>
        <div id="more-projects" className="work-more hidden">
          <article className="work-box b1"><span className="box-title">3D Models</span></article>
          <article className="work-box b2"><span className="box-title">Renders</span></article>
          <article className="work-box b3"><span className="box-title">Animations</span></article>
        </div>
        <div className="actions-right">
          <a className="btn view-less hidden" href="#less">View Less</a>
        </div>
      </section>

      <section ref={tipsRef} className="tips-grid container" id="tips" aria-label="Tips for 3D designers">
        <div className="tips-left">
          <h3 className="section-label">
            <SplitText
              text="tips each "
              tag="span"
              delay={40}
              duration={0.5}
              ease="power2.out"
              from={{ opacity: 0, x: -20 }}
              to={{ opacity: 1, x: 0 }}
              threshold={0.3}
              textAlign="left"
            />
            <span className="accent">
              <SplitText
                text="3D Designer"
                tag="span"
                delay={40}
                duration={0.5}
                ease="power2.out"
                from={{ opacity: 0, x: -20 }}
                to={{ opacity: 1, x: 0 }}
                threshold={0.3}
                textAlign="left"
              />
            </span>
            <SplitText
              text=" should know"
              tag="span"
              delay={40}
              duration={0.5}
              ease="power2.out"
              from={{ opacity: 0, x: -20 }}
              to={{ opacity: 1, x: 0 }}
              threshold={0.3}
              textAlign="left"
            />
          </h3>
          <div className="tip-card-wrapper">
            <TiltedCard
              imageSrc="/imgs/Frame 37.png"
              altText="Start with Strong References"
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
                  <h5>Start with Strong References</h5>
                  <p>Always collect real-life images before modeling. References guide your proportions, shapes, and details, making your final model more accurate and believable.</p>
                </div>
              }
            />
          </div>
          <div className="tip-card-wrapper">
            <TiltedCard
              imageSrc="/imgs/IMG_4737 2.png"
              altText="Keep Your Topology Clean"
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
                  <h5>Keep Your Topology Clean</h5>
                  <p>Organized geometry is key. Clean edge loops and proper topology make your model easier to texture, animate, and render.</p>
                </div>
              }
            />
          </div>
          <div className="tip-card-wrapper">
            <TiltedCard
              imageSrc="/imgs/Frame 40.png"
              altText="Focus on Realistic Textures"
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
                  <h5>Focus on Realistic Textures</h5>
                  <p>Materials like glass, metal, and wood rely on high-quality textures. The right surface details can transform a simple model into something visually stunning.</p>
                </div>
              }
            />
          </div>
        </div>
        <div className="tips-media">
          <img src="/imgs/Frame 42.png" alt="Modern desk setup with tablet and 3D elements" />
        </div>
      </section>

      <section className="cta-band" aria-label="Work together" style={{ backgroundImage: "url('/imgs/us working together.png')" }}>
        <div className="container centered">
          <p className="muted">Do you know what's Missing</p>
          <h3 className="section-title centered">Us Working Together</h3>
          <a className="btn" href="/contact">Contact me</a>
        </div>
      </section>
    </Layout>
  );
}

