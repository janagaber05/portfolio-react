import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Layout from '../components/Layout';
import TiltedCard from '../components/TiltedCard';
import './WebDesignEN.css';

gsap.registerPlugin(ScrollTrigger);

export default function WebDesignEN() {
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
    <Layout lang="en">
      <section className="hero-split container" aria-label="Web Design hero">
        <div className="hero-content">
          <h1 className="hero-title">Web<br/>Design</h1>
          <a className="btn" href="/contact">Contact me</a>
        </div>
        <div className="hero-media">
          <img src="/imgs/Frame 41.png" alt="3D laptop with web interface" />
        </div>
      </section>

      <section className="container" id="work" aria-label="Recent work">
        <h3 className="section-label">Recent Work</h3>
        <div className="work-list">
          <article className="work-item">
            <div className="work-media">
              <img src="/imgs/Frame 37.png" alt="E-commerce website mockup" />
            </div>
            <div className="work-body">
              <h4>Modern E-Commerce Platform</h4>
              <p>A sleek and user-friendly e-commerce website designed to provide seamless shopping experiences. The design focuses on intuitive navigation, clear product presentation, and smooth checkout processes that convert visitors into customers.</p>
            </div>
          </article>
          <article className="work-item">
            <div className="work-media">
              <img src="/imgs/IMG_4737 2.png" alt="Portfolio website mockup" />
            </div>
            <div className="work-body">
              <h4>Creative Portfolio Website</h4>
              <p>An elegant portfolio website showcasing creative work with stunning visuals and smooth animations. The design emphasizes the work itself while providing an engaging and memorable browsing experience for visitors.</p>
            </div>
          </article>
          <article className="work-item">
            <div className="work-media">
              <img src="/imgs/Frame 40.png" alt="Corporate website mockup" />
            </div>
            <div className="work-body">
              <h4>Corporate Business Website</h4>
              <p>A professional corporate website that builds trust and credibility. The design combines modern aesthetics with functional layouts, ensuring that important information is easily accessible and the brand message is clearly communicated.</p>
              <a className="btn view-more btn-right" href="#more">View More</a>
            </div>
          </article>
        </div>
        <div id="more-projects" className="work-more hidden">
          <article className="work-box b1"><span className="box-title">Landing Pages</span></article>
          <article className="work-box b2"><span className="box-title">Web Apps</span></article>
          <article className="work-box b3"><span className="box-title">Responsive Sites</span></article>
        </div>
        <div className="actions-right">
          <a className="btn view-less hidden" href="#less">View Less</a>
        </div>
      </section>

      <section ref={tipsRef} className="tips-grid container" id="tips" aria-label="Tips for web designers">
        <div className="tips-left">
          <h3 className="section-label">tips each <span className="accent">Web Designer</span> should know</h3>
          <div className="tip-card-wrapper">
            <TiltedCard
              imageSrc="/imgs/Frame 37.png"
              altText="Mobile First Design"
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
                  <h5>Design Mobile First</h5>
                  <p>Start with mobile devices in mind. Mobile-first design ensures your website works perfectly on smaller screens and scales beautifully to larger ones, providing the best experience for all users.</p>
                </div>
              }
            />
          </div>
          <div className="tip-card-wrapper">
            <TiltedCard
              imageSrc="/imgs/IMG_4737 2.png"
              altText="Fast Loading"
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
                  <h5>Speed Matters More Than Ever</h5>
                  <p>Fast loading times are crucial for user experience and SEO. Optimize images, minimize code, and prioritize performance. Users expect instant results, and search engines reward fast sites.</p>
                </div>
              }
            />
          </div>
          <div className="tip-card-wrapper">
            <TiltedCard
              imageSrc="/imgs/Frame 40.png"
              altText="Clear Navigation"
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
                  <h5>Navigation Should Be Intuitive</h5>
                  <p>Users should never have to guess where to find information. Clear navigation, logical page structure, and consistent placement of elements help users find what they need quickly and easily.</p>
                </div>
              }
            />
          </div>
        </div>
        <div className="tips-media">
          <img src="/imgs/Frame 42.png" alt="Modern desk setup with laptop and UI elements" />
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

