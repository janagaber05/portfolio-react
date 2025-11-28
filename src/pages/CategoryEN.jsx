import Layout from '../components/Layout';
import CircularGallery from '../components/CircularGallery';
import './CategoryEN.css';

export default function CategoryEN() {
  return (
    <Layout lang="en">
      <section className="hero hero-cover work-hero" id="top" aria-label="Work hero">
        <div className="hero-cover-bg" aria-hidden="true" style={{backgroundImage:"url('/imgs/Rectangle 20.png')"}}></div>
        <div className="container hero-center">
          <div className="work-hero__content">
            <div className="work-hero__text">
              <h1 className="hero-title">My Work</h1>
              <p className="subline" style={{textAlign:"center", marginTop:"8px"}}>My Creative Universe</p>
              <p className="muted" style={{textAlign:"center", maxWidth:"720px", margin:"6px auto 14px"}}>A showcase of projects that blend design, code, and imagination.</p>
              <p style={{textAlign:"center"}}><a className="btn" href="#cats">Explore More</a></p>
            </div>
            <div className="work-hero__image" aria-hidden="true">
              <img src="/imgs/home page/hero-img.png" alt="My Work" loading="eager" />
            </div>
          </div>
        </div>
      </section>

      <section className="container cat-gallery-section" id="cats" aria-label="Categories gallery">
        <div style={{ height: '600px', position: 'relative' }}>
          <CircularGallery
            items={[
              { image: '/imgs/Frame 42.png', text: 'App Design', href: '/app-design' },
              { image: '/imgs/Frame 41.png', text: 'Web Design', href: '/web-design' },
              { image: '/imgs/Frame 43.png', text: 'Graphic Design', href: '/graphic-design' },
              { image: '/imgs/Frame 40.png', text: 'Coding', href: '/#skills' },
              { image: '/imgs/Frame 21.png', text: 'Blogs', href: '/blogs' },
              { image: '/imgs/Frame 22.png', text: '3D', href: '/3d-design' }
            ]}
            bend={3}
            textColor="#ffffff"
            borderRadius={0.05}
            scrollEase={0.02}
            scrollSpeed={3}
          />
        </div>
      </section>

      <section className="cta-band" id="contact" aria-label="Contact CTA" style={{ backgroundImage: "url('/imgs/us working together.png')" }}>
        <div className="container">
          <p className="muted" style={{textAlign:"center"}}>Do you know what’s Missing</p>
          <h3 className="section-title centered" style={{marginBottom:"12px"}}>Us Working Together</h3>
          <p style={{textAlign:"center"}}><a className="btn" href="/#contact">Contact me</a></p>
        </div>
      </section>
    </Layout>
  );
}


