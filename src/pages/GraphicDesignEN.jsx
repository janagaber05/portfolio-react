import Layout from '../components/Layout';
import './GraphicDesignEN.css';

export default function GraphicDesignEN() {
  return (
    <Layout lang="en">
      <section className="hero-split container" aria-label="Graphic Design hero">
        <div className="hero-content">
          <h1 className="hero-title">Graphic<br/>Design</h1>
          <a className="btn" href="/#contact">Contact me</a>
        </div>
        <div className="hero-media">
          <img src="/imgs/Frame 41.png" alt="Neon laptop with project cards" />
        </div>
      </section>

      <section className="container" id="work" aria-label="Recent work">
        <h3 className="section-label">Recent Work</h3>
        <div className="work-list">
          <article className="work-item">
            <div className="work-media">
              <img src="/imgs/Frame 37.png" alt="Sandy Skin folder mockup" />
            </div>
            <div className="work-body">
              <h4>Sandy Skin – Folder Design</h4>
              <p>A sleek folder for a skincare brand using soft pink and black to express elegance and confidence. I chose this mockup to highlight the brand’s professional and luxurious feel in a real-life context.</p>
            </div>
          </article>
          <article className="work-item">
            <div className="work-media">
              <img src="/imgs/IMG_4737 2.png" alt="EGY Air bag mockup" />
            </div>
            <div className="work-body">
              <h4>EGY Air – Gift Bag Design</h4>
              <p>A branded bag for an airline, combining purple and white for a modern, trustworthy look. The bag mockup was chosen to show how the brand identity translates into physical materials and customer experience.</p>
            </div>
          </article>
          <article className="work-item">
            <div className="work-media">
              <img src="/imgs/Frame 40.png" alt="Sonic Colors settings redesign" />
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

      <section className="tips-grid container" id="tips" aria-label="Tips for designers">
        <div className="tips-left">
          <h3 className="section-label">tips each <span className="accent">Graphic Designer</span> should know</h3>
          <div className="tip-card">
            <h5>Design with Purpose, Not Just Aesthetics</h5>
            <p>Every visual element in your design should have a reason to exist, nothing is random. Whether it’s color, typography, or spacing, each decision should support the message or emotion you’re trying to convey.</p>
          </div>
          <div className="tip-card">
            <h5>Master Typography: It’s Half the Design</h5>
            <p>Typography isn’t just about choosing pretty fonts; it’s about hierarchy, readability, and emotion. The right typography can completely transform how a design is perceived.</p>
          </div>
          <div className="tip-card">
            <h5>Think Like a Brand, Not a Designer</h5>
            <p>Consistency and focus across visuals build strong brand recognition. Design choices should reflect the brand’s voice and goals, which makes the whole identity bigger and more effective.</p>
          </div>
        </div>
        <div className="tips-media">
          <img src="/imgs/Frame 42.png" alt="Neon desk with sticky notes" />
        </div>
      </section>

      <section className="cta-band" aria-label="Work together" style={{ backgroundImage: "url('/imgs/us working together.png')" }}>
        <div className="container centered">
          <p className="muted">Do you know what's Missing</p>
          <h3 className="section-title centered">Us Working Together</h3>
          <a className="btn" href="/#contact">Contact me</a>
        </div>
      </section>
    </Layout>
  );
}


