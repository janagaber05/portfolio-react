import Layout from '../components/Layout';
import './AboutEN.css';

export default function AboutEN() {
  return (
    <Layout lang="en">
      <section className="hero hero-cover" id="hero" aria-label="About hero">
        <div className="hero-cover-bg" aria-hidden="true" style={{backgroundImage:"url('/imgs/Frame 37.png')"}}></div>
        <div className="container hero-center">
          <h1 className="hero-title">Lest’s Know <span className="accent">Me Better</span></h1>
        </div>
      </section>

      <section className="repeater" aria-hidden="true">
        <div className="rep-strip"></div>
        <div className="rep-track">
          <span>Graphic Design • Branding • Poster Design • Graphic Design • Branding • Poster Design •</span>
          <span aria-hidden="true">Graphic Design • Branding • Poster Design • Graphic Design • Branding • Poster Design •</span>
        </div>
      </section>

      <section className="know-me" id="about" aria-label="Know Me section">
        <div className="know-inner container">
          <div className="balloon-wrap" aria-hidden="true">
            <img id="balloons" src="/imgs/Group%20264.png" alt="pink balloons" />
          </div>
          <div className="know-box" id="know-box" role="region" aria-label="Know Me box">
            <h2 className="outline-text">Know Me</h2>
            <div className="know-text">
              <p>I'm a UX/UI Designer that always work on what she loves so she can give 100% results</p>
              <p>I work in every thing I like so I always love what I do</p>
              <p>I really like creating content editing videos also I'm very creative in this part</p>
              <p>idea, trends from no wear and creating them</p>
            </div>
          </div>
        </div>
      </section>

      <section className="grid-cards container" id="web-design" aria-label="Approach">
        <div className="card img-right" id="approach">
          <div className="card-body">
            <h3 className="card-title pink">My approach as a UX/Ui Designer</h3>
            <p className="typewriter approach-paragraph" data-words='["As a UX/UI designer Web developer I believe that every challenge and problem can be solved by design so by using UX and web design I tend t create solutions to these problems"]'></p>
          </div>
          <div className="card-media">
            <img src="/imgs/Frame 24.png" alt="Approach visuals" />
          </div>
        </div>
      </section>

      <section className="strengths" id="strengths" aria-label="My Strength as a UX/UI Designer">
        <div className="parallax-bg" aria-hidden="true"></div>
        <div className="container">
          <h3 className="section-title centered">My Strength as a UX/UI Designer</h3>
          <div className="cards-col">
            <article className="s-card"><h4>Ambitious UX/UI designer</h4><p>I always think big like, having my own car dealer ship and building my own company ...</p></article>
            <article className="s-card"><h4>Creative & Visionary UX/UI designer</h4><p>when I think and work on a project, I always focus on every tiny details ...</p></article>
            <article className="s-card"><h4>Resilient UX/UI designer</h4><p>I don’t hold back. whatever happens, i’m dedicated to what I do ...</p></article>
            <article className="s-card"><h4>Dedicated UX/UI Designer</h4><p>As a UX/UI designer when I start working on something, I don’t quite till I finish it ...</p></article>
            <article className="s-card"><h4>Independent minded UX/UI designer</h4><p>I don’t follow other ideas or copy them. I always have my own technique ...</p></article>
          </div>
        </div>
      </section>

      <section className="values" id="values" aria-label="My Values as a UX/UI Designer">
        <div className="container">
          <h3 className="section-title centered">My Values as a <span className="accent">UX/UI Designer</span></h3>
          <div className="values-grid">
            <article className="value-card"><p><em>As UX/UI designer</em> I always prioritize the user makes making sure that I made his dreams comes true</p></article>
            <article className="value-card"><p><em>As UX/UI designer</em> I always try to learn new things about this field there’s always an update and new things to learn</p></article>
            <article className="value-card"><p><em>As UX/UI designer</em> I enjoy creating and inventing new things new solutions to any problems</p></article>
            <article className="value-card"><p><em>As UX/UI designer</em> I believe team work and collaborations bring better results and new ideas to any problem and any design</p></article>
          </div>
        </div>
      </section>

      <section className="repeater" aria-hidden="true">
        <div className="rep-strip"></div>
        <div className="rep-track">
          <span>KNOW BETTER KNOW ME BETTER • KNOW BETTER KNOW ME BETTER •</span>
          <span aria-hidden="true">KNOW BETTER KNOW ME BETTER • KNOW BETTER KNOW ME BETTER •</span>
        </div>
      </section>

      <section className="qa-section qa1" style={{backgroundImage:"url('/imgs/Frame 18.png')", backgroundPosition:"center", backgroundSize:"cover"}}>
        <div className="container">
          <div className="qa-card qa-dark">
            <h4>What are my Future Goals as a UX/UI Designer?</h4>
            <p>As a UX/UI designer I’m working on building my own company specializing in UX/UI design , marketing , branding , content creation and web design. Also as a UX/UI designer I’m working on my own skills to become a leading creative designer entrepreneur recognized in business and designing.</p>
          </div>
        </div>
      </section>
      <section className="qa-section qa2" style={{backgroundImage:"url('/imgs/Frame 21.png')", backgroundPosition:"center", backgroundSize:"cover"}}>
        <div className="container">
          <div className="qa-card qa-pink">
            <h4>What is my Style as a UX/UI Designer?</h4>
            <p>As a UX/UI Designer my style is a mix of simplicity, creativity, and detail. I believe every design should be clear, modern, and easy to use, while still being unique and memorable.</p>
          </div>
        </div>
      </section>
      <section className="qa-section qa3" style={{backgroundImage:"url('/imgs/Frame 20.png')", backgroundPosition:"center", backgroundSize:"cover"}}>
        <div className="container">
          <div className="qa-card qa-dark">
            <h4>What is my Inspiration as a UX/UI Designer?</h4>
            <p>As a UX/UI Designer I take my inspiration from every day life, from different industries, and any problem I face or see around me. I believe that inspiration can come from anything and anywhere. By anything around me as a UX/UI Designer any problem is a inspiration and is a gate to create designs that are practical simple and creative.</p>
          </div>
        </div>
      </section>
      <section className="qa-section qa4" style={{backgroundImage:"url('/imgs/Frame 22.png')", backgroundPosition:"center", backgroundSize:"cover"}}>
        <div className="container">
          <div className="qa-card qa-pink">
            <h4>What is my Edge as a UX/UI Designer?</h4>
            <p>What makes me stand as a UX/UI Designer out that I combine between creative designs and business. I always think about the design of cure and how to make the customer dream comes true but I also think about the business and how the design will help the business.</p>
          </div>
        </div>
      </section>
      <section className="qa-section qa5" style={{backgroundImage:"url('/imgs/Frame 25.png')", backgroundPosition:"center", backgroundSize:"cover"}}>
        <div className="container">
          <div className="qa-card qa-dark">
            <h4>What is my Belief as a UX/UI Designer?</h4>
            <p>I believe that a UX/UI Designer should always solve problems, not just decorate screens. Design is more than colors and layouts; it is about creating experiences that people trust and enjoy using.</p>
          </div>
        </div>
      </section>
    </Layout>
  );
}


