import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Layout from '../components/Layout';
import TiltedCard from '../components/TiltedCard';
import './GraphicDesignEN.css';

gsap.registerPlugin(ScrollTrigger);

export default function GraphicDesignEN() {
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
      <section className="hero-split container" aria-label="Graphic Design hero">
        <div className="hero-content">
          <h1 className="hero-title">Graphic<br/>Design</h1>
          <a className="btn" href="/#contact">Contact me</a>
        </div>
        <div className="hero-media">
          <img 
            src="/imgs/graphic-desgin/hero-img.png" 
            alt="Neon laptop with project cards" 
            loading="eager"
            onError={(e) => {
              console.error('Hero image failed to load:', e.target.src);
              e.target.style.border = '2px solid red';
            }}
            onLoad={() => console.log('Hero image loaded successfully')}
          />
        </div>
      </section>

      <section className="container" id="work" aria-label="Recent work">
        <h3 className="section-label">Recent Work</h3>
        <div className="work-list">
          <article className="work-item">
            <div className="work-media">
              <img 
                src="/imgs/graphic-desgin/sandy-poject.png" 
                alt="Sandy Skin folder mockup" 
                loading="lazy"
                onError={(e) => {
              console.error('Sandy project image failed to load:', e.target.src);
            }}
          />
            </div>
            <div className="work-body">
              <h4>Sandy Skin – Folder Design</h4>
              <p>A sleek folder for a skincare brand using soft pink and black to express elegance and confidence. I chose this mockup to highlight the brand's professional and luxurious feel in a real-life context.</p>
            </div>
          </article>
          <article className="work-item work-item-clickable">
            <Link to="/egy-air" className="work-item-link">
              <div className="work-media">
                <img 
                  src="/imgs/graphic-desgin/egy-air-project.png" 
                  alt="EGY Air bag mockup" 
                  loading="lazy"
                  onError={(e) => {
                console.error('EGY Air image failed to load:', e.target.src);
              }}
            />
              </div>
              <div className="work-body">
                <h4>EGY Air – Gift Bag Design</h4>
                <p>A branded bag for an airline, combining purple and white for a modern, trustworthy look. The bag mockup was chosen to show how the brand identity translates into physical materials and customer experience.</p>
                <span className="btn view-more btn-right">View Project</span>
              </div>
            </Link>
          </article>
          <article className="work-item">
            <div className="work-media">
              <img 
                src="/imgs/graphic-desgin/sonic-game.png" 
                alt="Sonic Colors settings redesign" 
                loading="lazy"
                onError={(e) => {
              console.error('Sonic game image failed to load:', e.target.src);
            }}
          />
            </div>
            <div className="work-body">
              <h4>Sonic Colors Ultimate – Game Settings Rebrand</h4>
              <p>A redesigned settings screen for the Sonic Colors Ultimate game with vibrant neon elements. I used a laptop mockup to display how the new UI looks in an actual digital environment.</p>
              <a className="btn view-more btn-right" href="#more">View More</a>
            </div>
          </article>
        </div>
        <div id="more-projects" className="work-more hidden">
          <article className="work-box b1"><span className="box-title">Poster Series</span></article>
          <article className="work-box b2"><span className="box-title">Brand Kit</span></article>
          <article className="work-box b3"><span className="box-title">Social Cards</span></article>
        </div>
        <div className="actions-right">
          <a className="btn view-less hidden" href="#less">View Less</a>
        </div>
      </section>

      <section ref={tipsRef} className="tips-grid container" id="tips" aria-label="Tips for designers">
        <div className="tips-left">
          <h3 className="section-label">tips each <span className="accent">Graphic Designer</span> should know</h3>
          <div className="tip-card-wrapper">
            <TiltedCard
              imageSrc="/imgs/graphic-desgin/tips-img.png"
              altText="Design with Purpose"
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
                  <h5>Design with Purpose, Not Just Aesthetics</h5>
                  <p>Every visual element in your design should have a reason to exist, nothing is random. Whether it's color, typography, or spacing, each decision should support the message or emotion you're trying to convey.</p>
                </div>
              }
            />
          </div>
          <div className="tip-card-wrapper">
            <TiltedCard
              imageSrc="/imgs/IMG_4737 2.png"
              altText="Master Typography"
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
                  <h5>Master Typography: It's Half the Design</h5>
                  <p>Typography isn't just about choosing pretty fonts; it's about hierarchy, readability, and emotion. The right typography can completely transform how a design is perceived.</p>
                </div>
              }
            />
          </div>
          <div className="tip-card-wrapper">
            <TiltedCard
              imageSrc="/imgs/Frame 40.png"
              altText="Think Like a Brand"
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
                  <h5>Think Like a Brand, Not a Designer</h5>
                  <p>Consistency and focus across visuals build strong brand recognition. Design choices should reflect the brand's voice and goals, which makes the whole identity bigger and more effective.</p>
                </div>
              }
            />
          </div>
        </div>
        <div className="tips-media">
          <img 
            src="/imgs/graphic-desgin/tips-img.png" 
            alt="Neon desk with sticky notes" 
            loading="lazy"
            onError={(e) => {
              console.error('Tips image failed to load:', e.target.src);
            }}
            onLoad={() => console.log('Tips image loaded successfully')}
          />
        </div>
      </section>

      <section className="cta-band" aria-label="Work together" style={{backgroundImage:"url('/imgs/us working together.png')"}}>
        <div className="container centered">
          <p className="muted">Do you know what's Missing</p>
          <h3 className="section-title centered">Us Working Together</h3>
          <a className="btn" href="/#contact">Contact me</a>
        </div>
      </section>
    </Layout>
  );
}
