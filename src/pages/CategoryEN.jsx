import Layout from '../components/Layout';
import './CategoryEN.css';

export default function CategoryEN() {
  return (
    <Layout lang="en">
      <section className="hero hero-cover work-hero" id="top" aria-label="Work hero">
        <div className="hero-cover-bg" aria-hidden="true" style={{backgroundImage:"url('/imgs/Rectangle 20.png')"}}></div>
        <div className="container hero-center">
          <div>
            <h1 className="hero-title">My Work</h1>
            <p className="subline" style={{textAlign:"center", marginTop:"8px"}}>My Creative Universe</p>
            <p className="muted" style={{textAlign:"center", maxWidth:"720px", margin:"6px auto 14px"}}>A showcase of projects that blend design, code, and imagination.</p>
            <p style={{textAlign:"center"}}><a className="btn" href="#cats">Explore More</a></p>
          </div>
        </div>
      </section>

      <section className="container cat-grid" id="cats" aria-label="Categories grid">
        <article className="cat-card c1" style={{backgroundImage:"url('/imgs/Frame 42.png')", backgroundPosition:"center", backgroundSize:"cover"}}>
          <span className="cat-label">App Design</span>
          <a className="click-fill" href="/#app-design" aria-label="App Design"></a>
        </article>
        <article className="cat-card c2" style={{backgroundImage:"url('/imgs/Frame 41.png')", backgroundPosition:"center", backgroundSize:"cover"}}>
          <span className="cat-label">Web Design</span>
          <a className="click-fill" href="/#web-design" aria-label="Web Design"></a>
        </article>
        <article className="cat-card c3" style={{backgroundImage:"url('/imgs/Frame 43.png')", backgroundPosition:"center", backgroundSize:"cover"}}>
          <span className="cat-label">Graphic Design</span>
          <a className="click-fill" href="/graphic-design" aria-label="Graphic Design"></a>
        </article>
        <article className="cat-card c4" style={{backgroundImage:"url('/imgs/Frame 40.png')", backgroundPosition:"center", backgroundSize:"cover"}}>
          <span className="cat-label">Coding</span>
          <a className="click-fill" href="/#skills" aria-label="Coding"></a>
        </article>
        <article className="cat-card c5" style={{backgroundImage:"url('/imgs/Frame 21.png')", backgroundPosition:"center", backgroundSize:"cover"}}>
          <span className="cat-label">Blogs</span>
          <a className="click-fill" href="/blogs" aria-label="Blogs"></a>
        </article>
        <article className="cat-card c6" style={{backgroundImage:"url('/imgs/Frame 22.png')", backgroundPosition:"center", backgroundSize:"cover"}}>
          <span className="cat-label">3D</span>
          <a className="click-fill" href="#cats" aria-label="3D"></a>
        </article>
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


