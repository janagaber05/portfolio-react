import Layout from '../components/Layout';
import TiltedCard from '../components/TiltedCard';
import { Link } from 'react-router-dom';
import './BlogsEN.css';

const RECENT_POSTS = [
  {
    title: 'Designing with Emotion: How Colors Shape User Experience',
    href: '/designing-with-emotion-how-colors-shape-user-experience-ui-designer-in-cairo',
    image: '/imgs/blog page/recentblog1.png',
    alt: 'desk setup',
    caption: 'Designing with Emotion'
  },
  {
    title: 'From Idea to Interface: My Process in App Design',
    href: '#',
    image: '/imgs/blog page/recentblog2.png',
    alt: 'neon ui',
    caption: 'App Design Process'
  },
  {
    title: 'The Art of Balance: Managing Creativity and Consistency in Design',
    href: '#',
    image: '/imgs/blog page/recentblog3.png',
    alt: 'balance concept',
    caption: 'Balance & Consistency'
  },
];

const PAST_POSTS = [
  {
    title: 'Case Study: Branding a Lifestyle App',
    image: '/imgs/blog page/pastblogs1.jpg',
    alt: 'case studies',
    excerpt:
      'A behind-the-scenes look at crafting a vivid lifestyle identity, from concept moodboards to launch assets.',
  },
  {
    title: 'Collaborating with Developers for Seamless UI',
    image: '/imgs/blog page/pastblogs2.jpg',
    alt: 'collaboration',
    excerpt:
      'Hand-off tips, component libraries and communication rituals that keep designers and developers in flow.',
  },
  {
    title: 'Microinteractions & Motion in UX',
    image: '/imgs/blog page/pastblogs3.jpg',
    alt: 'motion',
    excerpt:
      'Why motion matters, with practical animation guidelines and Figma-to-After Effects workflows I rely on.',
  },
];

export default function BlogsEN() {
  return (
    <Layout lang="en">
      <div className="blogs-page">
        <div className="blogs-page__content">
          <section className="container blogs-hero" aria-label="Blogs hero">
            <div className="blogs-hero__text">
              <span className="blogs-hero__badge">Insights & Stories</span>
              <h1 className="blogs-hero__title">Jana Gaber Blog — Cairo UI/UX Designer Insights</h1>
              <p className="blogs-hero__intro">
                Welcome to my corner of the internet. I share process notes, Cairo-rooted case studies, and candid
                reflections on building charming, inclusive product experiences.
              </p>
              <div className="blogs-hero__cta">
                <a className="btn" href="/#contact">
                  Contact me
                </a>
              </div>
            </div>
            <div className="blogs-hero__media">
              <TiltedCard
                imageSrc="/imgs/blog page/blog-hero.png"
                altText="Blogs illustration"
                captionText="Blog hero art"
                containerHeight="360px"
                containerWidth="100%"
                imageHeight="360px"
                imageWidth="100%"
                rotateAmplitude={12}
                scaleOnHover={1.12}
                showMobileWarning={false}
                showTooltip={false}
                displayOverlayContent={false}
              />
            </div>
          </section>

          <section className="container blogs-section" aria-label="Recent blogs">
            <div className="blogs-section__header">
              <h3 className="section-label">Recent Blogs</h3>
              <p className="blogs-section__sub">
                Fresh write-ups capturing what I&apos;m experimenting with right now—from client journeys to playful UI
                research.
              </p>
            </div>

            <div className="blogs-grid">
              {RECENT_POSTS.map(post => (
                <article key={post.title} className="blog-card">
                  <div className="blog-card__media">
                    <TiltedCard
                      imageSrc={post.image}
                      altText={post.alt}
                      captionText={post.caption}
                      containerHeight="260px"
                      containerWidth="100%"
                      imageHeight="260px"
                      imageWidth="100%"
                      rotateAmplitude={12}
                      scaleOnHover={1.12}
                      showMobileWarning={false}
                      showTooltip={false}
                      displayOverlayContent={false}
                    />
                  </div>
                  <h4 className="blog-card__title">
                    <Link className="blog-card__link" to={post.href}>
                      {post.title}
                    </Link>
                  </h4>
                  <p className="blog-card__excerpt">{post.excerpt}</p>
                  <div className="blog-card__actions">
                    <Link className="pill" to={post.href}>
                      Read Blog
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="container blogs-section" aria-label="Past blogs slider">
            <div className="blogs-section__header">
              <h3 className="section-label">Past Blogs</h3>
              <p className="blogs-section__sub">
                Missed an earlier drop? Scroll through the archive for timeless lessons, motion snippets, and product
                musings.
              </p>
            </div>

            <div className="blogs-slider">
              <button className="blogs-slider__arrow blogs-slider__arrow--prev" type="button" aria-label="Previous blog">
                ‹
              </button>
              <div className="blogs-slider__track">
                {PAST_POSTS.map(post => (
                  <article key={post.title} className="blog-card blog-card--compact">
                    <div className="blog-card__media">
                      <img src={post.image} alt={post.alt} loading="lazy" />
                    </div>
                    <h4 className="blog-card__title">{post.title}</h4>
                    <p className="blog-card__excerpt">{post.excerpt}</p>
                    <div className="blog-card__actions">
                      <a className="pill" href="#">
                        Read Blog
                      </a>
                    </div>
                  </article>
                ))}
              </div>
              <button className="blogs-slider__arrow blogs-slider__arrow--next" type="button" aria-label="Next blog">
                ›
              </button>
            </div>

            <div className="blogs-dots" role="tablist" aria-label="Blog pagination">
              <button className="blogs-dots__dot blogs-dots__dot--active" type="button" aria-label="Page 1" />
              <button className="blogs-dots__dot" type="button" aria-label="Page 2" />
              <button className="blogs-dots__dot" type="button" aria-label="Page 3" />
            </div>
          </section>
        </div>
      </div>

      <section className="cta-band" id="contact" aria-label="Contact CTA" style={{ backgroundImage: "url('/imgs/us working together.png')" }}>
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

