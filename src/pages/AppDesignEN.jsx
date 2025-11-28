import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Layout from '../components/Layout';
import TiltedCard from '../components/TiltedCard';
import './AppDesignEN.css';

gsap.registerPlugin(ScrollTrigger);

export default function AppDesignEN() {
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
      <section className="hero-split container" aria-label="App Design hero">
        <div className="hero-content">
          <h1 className="hero-title">App<br/>Design</h1>
          <a className="btn" href="/contact">Contact me</a>
        </div>
        <div className="hero-media">
          <img src="/imgs/Frame 41.png" alt="3D smartphone with app interface" />
        </div>
      </section>

      <section className="container" id="work" aria-label="Recent work">
        <h3 className="section-label">Recent Work</h3>
        <div className="work-list">
          <article className="work-item">
            <div className="work-media">
              <img src="/imgs/Frame 37.png" alt="Easy Eat app mockup" />
            </div>
            <div className="work-body">
              <h4>Easy Eat — Cooking Made Effortless</h4>
              <p>Easy Eat is a smart cooking app designed to make your time in the kitchen simpler and more enjoyable. It helps users discover recipes, organize ingredients, and follow step-by-step instructions with ease — turning every meal into a smooth and stress-free experience.</p>
            </div>
          </article>
          <article className="work-item">
            <div className="work-media">
              <img src="/imgs/IMG_4737 2.png" alt="Evento app mockup" />
            </div>
            <div className="work-body">
              <h4>Evento — Find the Moment That Fits You</h4>
              <p>Evento simplifies event discovery through smart recommendations and seamless booking. Whether it's music, art, or adventure, it helps you plan your perfect outing in just a few taps.</p>
            </div>
          </article>
          <article className="work-item">
            <div className="work-media">
              <img src="/imgs/Frame 40.png" alt="Escape It app mockup" />
            </div>
            <div className="work-body">
              <h4>Escape It — Reality Has a Twist</h4>
              <p>Escape It is an augmented reality escape room game created in collaboration with Jailan Hammad. The app transforms any space into a thrilling interactive experience, where players solve puzzles, uncover hidden clues, and race against time — blending creativity, technology, and imagination in one immersive world.</p>
              <a className="btn view-more btn-right" href="#more">View More</a>
            </div>
          </article>
        </div>
        <div id="more-projects" className="work-more hidden">
          <article className="work-box b1"><span className="box-title">Mobile Apps</span></article>
          <article className="work-box b2"><span className="box-title">UI/UX Design</span></article>
          <article className="work-box b3"><span className="box-title">Prototypes</span></article>
        </div>
        <div className="actions-right">
          <a className="btn view-less hidden" href="#less">View Less</a>
        </div>
      </section>

      <section ref={tipsRef} className="tips-grid container" id="tips" aria-label="Tips for app designers">
        <div className="tips-left">
          <h3 className="section-label">tips each <span className="accent">App Designer</span> should know</h3>
          <div className="tip-card-wrapper">
            <TiltedCard
              imageSrc="/imgs/Frame 37.png"
              altText="Design for the User"
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
                  <h5>Design for the User, Not Yourself</h5>
                  <p>Always start by understanding your users — their goals, frustrations, and habits. Every color, button, and layout choice should make their journey easier, not just look nice.</p>
                </div>
              }
            />
          </div>
          <div className="tip-card-wrapper">
            <TiltedCard
              imageSrc="/imgs/IMG_4737 2.png"
              altText="Keep It Simple"
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
                  <h5>Keep It Simple and Intuitive</h5>
                  <p>The best designs feel natural. Avoid clutter, use clear navigation, and make sure users never have to think too hard to figure out what to do next.</p>
                </div>
              }
            />
          </div>
          <div className="tip-card-wrapper">
            <TiltedCard
              imageSrc="/imgs/Frame 40.png"
              altText="Prioritize Consistency"
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
                  <h5>Prioritize Consistency</h5>
                  <p>Use consistent typography, color palettes, icons, and spacing across all screens. Consistency builds trust and helps users feel familiar with your app.</p>
                </div>
              }
            />
          </div>
        </div>
        <div className="tips-media">
          <img src="/imgs/Frame 42.png" alt="Modern desk setup with tablet and UI elements" />
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

