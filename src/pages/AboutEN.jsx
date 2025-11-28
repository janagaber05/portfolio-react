import Layout from '../components/Layout';
import CurvedLoop from '../components/CurvedLoop';
import BounceCards from '../components/BounceCards';
import TiltedCard from '../components/TiltedCard';
import Stack from '../components/Stack';
import LiquidEther from '../components/LiquidEther';
import './AboutEN.css';

const strengthCards = [
  {
    title: 'Ambitious UX/UI designer',
    description:
      'I always think big—building my own studio that brings bold media, digital marketing, content creation and web experiences together under one roof.',
    background: 'linear-gradient(188deg, rgba(193,172,255,0.95), rgba(98,67,199,0.92))',
  },
  {
    title: 'Creative & visionary UX/UI designer',
    description:
      'Every project is a canvas. I sweat the micro-details—whether I am shaping a product flow or a brand story—to make sure each touchpoint feels intentional.',
    background: 'linear-gradient(189deg, rgba(186,165,255,0.94), rgba(104,73,200,0.92))',
  },
  {
    title: 'Resilient UX/UI designer',
    description:
      'Setbacks fuel my focus. I return to the work with sharper energy, stronger ideas and the dedication to deliver what I promise.',
    background: 'linear-gradient(189deg, rgba(181,158,249,0.94), rgba(99,68,188,0.9))',
  },
  {
    title: 'Dedicated UX/UI designer',
    description:
      'When I commit to a project I finish it at 100%. I stay curious, keep learning and bring the latest UX thinking into every launch.',
    background: 'linear-gradient(189deg, rgba(176,150,242,0.94), rgba(92,64,182,0.9))',
  },
  {
    title: 'Independent minded UX/UI designer',
    description:
      'I do not copy. I invent. My process is uniquely mine—blending research with fearless experimentation to craft solutions that stand out.',
    background: 'linear-gradient(189deg, rgba(170,142,236,0.94), rgba(86,59,177,0.92))',
  },
];

const strengthTransforms = [
  'rotate(5deg) translate(-150px)',
  'rotate(1deg) translate(-70px)',
  'rotate(-2deg)',
  'rotate(2deg) translate(70px)',
  'rotate(-4deg) translate(150px)',
];

export default function AboutEN() {
  return (
    <Layout lang="en">
      <div className="about-page">
        <div className="about-page__bg" aria-hidden="true">
          <LiquidEther
            colors={[ '#5227FF', '#FF9FFC', '#B19EEF', '#0D1017' ]}
            mouseForce={16}
            cursorSize={120}
            isViscous={false}
            viscous={30}
            iterationsViscous={32}
            iterationsPoisson={32}
            resolution={0.6}
            isBounce={false}
            autoDemo
            autoSpeed={0.45}
            autoIntensity={2}
            takeoverDuration={0.25}
            autoResumeDelay={2500}
            autoRampDuration={0.5}
          />
        </div>

        <div className="about-page__content">
      <section className="hero hero-cover" id="hero" aria-label="About hero">
        <div className="hero-cover-bg" aria-hidden="true" style={{backgroundImage:"url('/imgs/home page/know-me-better-img.png')"}}></div>
        <div className="container hero-center">
          <h1 className="hero-title">Lest's Know <span className="accent">Me Better</span></h1>
        </div>
      </section>

      <section className="about-divider" aria-label="Services strip">
        <div className="about-divider__strip">
          <CurvedLoop
            marqueeText="Graphic Design • Branding • Poster Design •"
            speed={4.2}
            curveAmount={0}
            interactive={false}
          />
        </div>
      </section>

      <section className="know-me" id="about" aria-label="Know Me section">
        <div className="know-me__inner container">
          <div className="know-me__photo" aria-hidden="true">
            <img src="/imgs/3d-object.png" alt="3D object" />
          </div>
          <div className="know-me__card" role="region" aria-label="Know Me card">
            <h2>Know Me</h2>
            <p>I'm a UX/UI Designer that always work on what she loves so she can give 100% results</p>
            <p>I work in every thing I like so I always love what I do</p>
            <p>I really like creating content editing videos also I'm very creative in this part</p>
            <p>idea, trends from no wear and creating them</p>
          </div>
        </div>
      </section>

      <section className="about-approach" aria-label="Design approach">
        <div className="container about-approach__grid">
          <figure className="about-approach__media">
            <img
              src="/imgs/home page/my-approach.png"
              alt="Web design workflow boards and UI screens"
              loading="lazy"
            />
          </figure>
          <div className="about-approach__text">
            <h3>My Approach as a UX/UI Designer</h3>
            <p>
              As a UX/UI designer Web developer I believe that every challenge and problem can be solved by design so by using UX and web design I tend t create solutions to these problems
            </p>
          </div>
        </div>
      </section>

      <section className="about-strengths" aria-label="Strengths">
        <div className="container">
          <h3>My Strengths as a UX/UI Designer</h3>
          <div className="about-strengths__deck">
            <BounceCards
              items={strengthCards}
              transformStyles={strengthTransforms}
              containerWidth={640}
              containerHeight={320}
              animationDelay={0.6}
              animationStagger={0.1}
              easeType="elastic.out(1, 0.6)"
            />
          </div>
        </div>
      </section>

      <section className="about-values" aria-label="My Values as a UX/UI Designer">
        <div className="container">
          <h3>My Values as a UX/UI Designer</h3>
          <div className="about-values__tilted">
            {[
              {
                title: 'Human first',
                description:
                  'As a UX/UI designer I always prioritize user needs—my goal is to turn their goals into a product reality that feels intuitive and delightful.',
              },
              {
                title: 'Always curious',
                description:
                  'As a UX/UI designer I keep learning every day. Design evolves fast, so I chase the updates, trends and insights that keep experiences fresh.',
              },
              {
                title: 'Inventive spirit',
                description:
                  'As a UX/UI designer I love creating. I experiment, iterate and craft new solutions to any friction or problem the journey reveals.',
              },
              {
                title: 'Collaboration is power',
                description:
                  'As a UX/UI designer I believe teamwork elevates every idea. Co-creating with product, engineering and marketing opens better paths forward.',
              },
            ].map(({ title, description }) => (
              <div key={title} className="about-values__item">
                <TiltedCard
                  containerHeight="320px"
                  containerWidth="100%"
                  imageHeight="320px"
                  imageWidth="320px"
                  rotateAmplitude={12}
                  scaleOnHover={1.22}
                  showMobileWarning={false}
                  showTooltip={false}
                  isTextOnly
                  overlayContent={
                    <div className="about-values__cardtext">
                      <h4>{title}</h4>
                      <p>{description}</p>
                    </div>
                  }
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-stack" aria-label="Q&A Cards">
        <div className="container">
          <div className="about-stack__wrapper">
            <Stack
              randomRotation={true}
              sensitivity={180}
              sendToBackOnClick={false}
              cardDimensions={{ width: 320, height: 400 }}
              cardsData={[
                {
                  id: 1,
                  type: 'dark',
                  title: 'What are my Future Goals as a UX/UI Designer?',
                  description: "As a UX/UI designer I'm working on building my own company specializing in UX/UI design , marketing , branding , content creation and web design. Also as a UX/UI designer I'm working on my own skills to become a leading creative designer entrepreneur recognized in business and designing."
                },
                {
                  id: 2,
                  type: 'pink',
                  title: 'What is my Style as a UX/UI Designer?',
                  description: 'As a UX/UI Designer my style is a mix of simplicity, creativity, and detail. I believe every design should be clear, modern, and easy to use, while still being unique and memorable.'
                },
                {
                  id: 3,
                  type: 'dark',
                  title: 'What is my Inspiration as a UX/UI Designer?',
                  description: 'As a UX/UI Designer I take my inspiration from every day life, from different industries, and any problem I face or see around me. I believe that inspiration can come from anything and anywhere. By anything around me as a UX/UI Designer any problem is a inspiration and is a gate to create designs that are practical simple and creative.'
                },
                {
                  id: 4,
                  type: 'pink',
                  title: 'What is my Edge as a UX/UI Designer?',
                  description: 'What makes me stand as a UX/UI Designer out that I combine between creative designs and business. I always think about the design of cure and how to make the customer dream comes true but I also think about the business and how the design will help the business.'
                },
                {
                  id: 5,
                  type: 'dark',
                  title: 'What is my Belief as a UX/UI Designer?',
                  description: 'I believe that a UX/UI Designer should always solve problems, not just decorate screens. Design is more than colors and layouts; it is about creating experiences that people trust and enjoy using.'
                }
              ]}
            />
          </div>
        </div>
      </section>
        </div>
      </div>
    </Layout>
  );
}


