import Layout from '../components/Layout';
import CircularGallery from '../components/CircularGallery';
import './CategoryEN.css';

export default function CategoryEN() {
  return (
    <Layout lang="en">
      <section className="hero hero-cover work-hero" id="top" aria-label="Work hero">
        <div className="hero-cover-bg" aria-hidden="true" style={{backgroundImage:"url('/imgs/category/hero-category.png')"}}></div>
        <div className="container hero-center">
          <div className="work-hero__content">
            <div className="work-hero__text">
              <h1 className="hero-title">My Work</h1>
              <p className="subline subline-centered">My Creative Universe</p>
              <p className="muted muted-centered">A showcase of projects that blend design, code, and imagination.</p>
              <p className="btn-wrapper-centered"><a className="btn" href="#cats">Explore More</a></p>
            </div>
            <div className="work-hero__image" aria-hidden="true">
              <img src="/imgs/category/hero-category.png" alt="My Work" loading="eager" />
            </div>
          </div>
        </div>
      </section>

      <section className="container cat-gallery-section" id="cats" aria-label="Categories gallery">
        <div className="cat-gallery-wrapper">
          <CircularGallery
            items={[
              { image: '/imgs/category/app-design-category.png', text: 'App Design', href: '/app-design' },
              { image: '/imgs/category/web-desogn-category.png', text: 'Web Design', href: '/web-design' },
              { image: '/imgs/category/graphic-design-category.png', text: 'Graphic Design', href: '/graphic-design' },
              { image: '/imgs/category/coding-category.png', text: 'Coding', href: '/#skills' },
              { image: '/imgs/category/blogs-category.png', text: 'Blogs', href: '/blogs' },
              { image: '/imgs/category/3d-category.png', text: '3D', href: '/3d-design' }
            ]}
            bend={3}
            textColor="#ffffff"
            borderRadius={0.05}
            scrollEase={0.02}
            scrollSpeed={3}
          />
        </div>
      </section>

      <section className="cta-band" id="contact" aria-label="Contact CTA" style={{backgroundImage:"url('/imgs/us working together.png')"}}>
        <div className="container">
          <p className="muted muted-centered">Do you know what's Missing</p>
          <h3 className="section-title centered section-title-spaced">Us Working Together</h3>
          <p className="btn-wrapper-centered"><a className="btn" href="/#contact">Contact me</a></p>
        </div>
      </section>
    </Layout>
  );
}


