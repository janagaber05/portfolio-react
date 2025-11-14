import Layout from '../components/Layout';
import './BlogDetailEmotionEN.css';

const sections = [
  {
    id: 'introduction',
    title: 'Introduction',
    paragraphs: [
      "Color isn't just decoration — it’s an emotional language. In design, colors influence how users feel, react, and connect with an interface. As designers, we don’t just create visuals; we create feelings. In this article, I peel back what color design means for UX work, sharing how my journey as a UI designer in Cairo shapes the palettes I choose.",
    ],
  },
  {
    id: 'evoke-emotion',
    title: 'How Do I, as a UI Designer in Cairo, Use Colors to Evoke Emotion?',
    paragraphs: [
      'As a UI designer in Cairo, I’ve learned that color can instantly shift a user’s experience. In my work, I love combining warm colors (for energy) with cool tones (for clarity). Each project answers a question: “What do we want the user to feel?” When we align story, tone, and hue, the color becomes a voice — not just decoration.',
      'Jana Gaber – Portfolio Lifestyle',
    ],
  },
  {
    id: 'color-schemes',
    title: 'How Does Salma Waleed Build Emotional Interfaces Through Soft Color Schemes?',
    paragraphs: [
      'Color isn’t just decoration — it’s an emotional language. It signals trust, warmth, clarity, and delight. In design, colors create emotional narratives within interfaces. In this article, I explore how colors set moods, forge meaningful connections, and elevate experiences. Here’s how my journey as a UI designer in Cairo, and insights from talented classmates, informs my palette.',
    ],
  },
  {
    id: 'contrast-focus',
    title: 'How Does Samaa Soud Use Contrast to Strengthen Focus and Impact?',
    paragraphs: [
      'Samaa Soud’s portfolio highlights how psychological principles of contrast amplify clarity. Our eyes naturally gravitate toward light against dark, which boosts the visual focus in key interactions — making strong, emotionally anchored call-to-action points.',
    ],
  },
  {
    id: 'color-gradients',
    title: 'What Can We Learn from Hesham Abozaid’s Bold Approach to Color Gradients?',
    paragraphs: [
      'Salma Qashaty’s portfolio shows a thoughtful balance between warmth and calm. She blends vivid vibrant highlights with tranquil neutrals, helping users feel both excited and relaxed — a rare emotional balance in digital design.',
    ],
  },
  {
    id: 'inclusive-design',
    title: 'Why Does Abdelrahman Afia Prioritize Accessible and Inclusive Color Design?',
    paragraphs: [
      'Abdelrahman Afia’s portfolio focuses on empathy and accessibility. Every hue is carefully chosen for readability, ensuring every user — including those with visual impairments — experiences the same emotions without barriers.',
    ],
  },
  {
    id: 'minimalism',
    title: "What Makes Enjy Amir’s Minimalist Palette Emotionally Effective?",
    paragraphs: [
      'Enjy Amir’s portfolio embraces simplicity. By limiting her palette to fewer hues, she helps the emotional focus on the message, not the noise. Her minimalistic approach makes each color decision powerful and intentional.',
    ],
  },
  {
    id: 'conclusion',
    title: 'Conclusion',
    paragraphs: [
      'From personal projects to collaborative studies, color choice is the emotional heartbeat of design. The palettes we create can calm, energize, or guide users toward clarity — all while honoring inclusive standards. Color isn’t just looked at; it’s felt. Thoughtful design always makes emotion part of the experience.',
    ],
  },
];

const references = [
  {
    label: 'Interaction Design Foundation – Color Psychology in UX',
    href: 'https://www.interaction-design.org/literature/topics/color-psychology',
  },
  {
    label: 'Nielsen Norman Group – Emotional Design Principles',
    href: 'https://www.nngroup.com/articles/emotional-design/',
  },
  {
    label: 'Smashing Magazine – Color Accessibility and User Perception',
    href: 'https://www.smashingmagazine.com/2020/09/color-accessibility-user-interace/',
  },
];

export default function BlogDetailEmotionEN() {
  return (
    <Layout lang="en">
      <article className="blog-detail">
        <header className="blog-detail__hero">
          <div className="blog-detail__hero-text">
            <p className="blog-detail__eyebrow">Designing with Emotion</p>
            <h1>Designing with Emotion: How Colors Shape User Experience</h1>
            <span className="blog-detail__tag">UI/UX Colors Guide • Cairo Edition</span>
            <p className="blog-detail__subtitle">
              Discover how a UI designer in Cairo uses color psychology to build emotional, user-centered interfaces.
              Explore how creative designers across Egypt use color to connect with users.
            </p>
          </div>
          <div className="blog-detail__hero-art">
            <img src="/imgs/Frame 40.png" alt="Colorful laptop concept art" />
          </div>
        </header>

        <nav className="blog-detail__toc" aria-label="Table of contents">
          <h2>Table of Contents</h2>
          <ol>
            {sections.map(section => (
              <li key={section.id}>
                <a href={`#${section.id}`}>{section.title}</a>
              </li>
            ))}
            <li>
              <a href="#sources">Sources / References</a>
            </li>
          </ol>
        </nav>

        <div className="blog-detail__body">
          {sections.map(section => (
            <section key={section.id} id={section.id} className="blog-detail__section">
              <div className="blog-detail__section-image">
                <img src="/imgs/Frame 42.png" alt="Colorful lighting concept" />
              </div>
              <div className="blog-detail__section-text">
                <h3>{section.title}</h3>
                {section.paragraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </section>
          ))}
        </div>

        <footer className="blog-detail__footer" id="sources">
          <h3>Sources / References</h3>
          <ul>
            {references.map(reference => (
              <li key={reference.label}>
                <a href={reference.href} target="_blank" rel="noreferrer">
                  {reference.label}
                </a>
              </li>
            ))}
          </ul>
        </footer>
      </article>

      <section
        className="cta-band"
        id="contact"
        aria-label="Contact CTA"
        style={{ backgroundImage: "url('/imgs/us working together.png')" }}
      >
        <div className="container centered">
          <p className="muted">Do you know what’s Missing</p>
          <h3 className="section-title centered">Us Working Together</h3>
          <p>
            <a className="btn" href="/#contact">
              Contact me
            </a>
          </p>
        </div>
      </section>
    </Layout>
  );
}

