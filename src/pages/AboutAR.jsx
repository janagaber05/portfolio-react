import Layout from '../components/Layout';
import CurvedLoop from '../components/CurvedLoop';
import BounceCards from '../components/BounceCards';
import TiltedCard from '../components/TiltedCard';
import Stack from '../components/Stack';
import LiquidEther from '../components/LiquidEther';
import { useSectionContent } from '../hooks/useHomeContent';
import './AboutAR.css';

const strengthCards = [
  {
    title: 'مصممة UX/UI طموحة',
    description:
      'أفكر دائماً بحجم أكبر؛ تأسيس شركة تجمع التسويق الرقمي وصناعة المحتوى وتصميم الويب تحت علامة واحدة جريئة.',
    background: 'linear-gradient(188deg, rgba(193,172,255,0.95), rgba(98,67,199,0.92))',
  },
  {
    title: 'مصممة UX/UI مبدعة وبصيرة',
    description:
      'كل مشروع هو مساحة للإبداع. أعتني بكل تفصيلة في الموقع أو التطبيق أو الهوية لأضمن أن التجربة متكاملة.',
    background: 'linear-gradient(189deg, rgba(186,165,255,0.94), rgba(104,73,200,0.92))',
  },
  {
    title: 'مصممة UX/UI صبورة',
    description:
      'لا أستسلم للمصاعب؛ أعود دائماً بطاقة أكبر وأفكار أقوى وأحافظ على التزامي بالنتيجة النهائية.',
    background: 'linear-gradient(189deg, rgba(181,158,249,0.94), rgba(99,68,188,0.9))',
  },
  {
    title: 'مصممة UX/UI ملتزمة',
    description:
      'عندما أبدأ مشروعاً أنهيه بأعلى جودة. أتعلم باستمرار وأتابع أحدث اتجاهات تجربة المستخدم لأبقى متقدمة.',
    background: 'linear-gradient(189deg, rgba(176,150,242,0.94), rgba(92,64,182,0.9))',
  },
  {
    title: 'مصممة UX/UI مستقلة التفكير',
    description:
      'لا أقلد الآخرين. أبتكر حلولاً فريدة تمزج البحث المتعمق مع الجرأة في التنفيذ لتقديم أعمال تترك أثراً.',
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

export default function AboutAR() {
  const { getContent } = useSectionContent('about', 'ar');

  return (
    <Layout lang="ar">
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
          <h1 className="hero-title">
            {getContent('hero_title') || ''}
          </h1>
        </div>
      </section>

      <section className="about-divider" aria-label="Know me better strip">
        <div className="about-divider__strip about-divider__strip--rtl">
          <CurvedLoop
            marqueeText="Know me better ✦ UX / UI Journey ✦ Motion ✦ Detail ✦"
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
            <h2>{getContent('know_me_title') || ''}</h2>
            <p>{getContent('know_me_description') || ''}</p>
          </div>
        </div>
      </section>

      <section className="about-approach" aria-label="Design approach">
        <div className="container about-approach__grid">
          <div className="about-approach__text">
            <h3>{getContent('approach_title') || ''}</h3>
            <p>
              {getContent('approach_description') || ''}
            </p>
          </div>
          <figure className="about-approach__media">
            <img
              src="/imgs/home page/my-approach.png"
              alt="Web design workflow boards and UI screens"
              loading="lazy"
            />
          </figure>
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

      <section className="about-values" aria-label="القيم">
        <div className="container">
          <h3>قيمــي كمصممة UX/UI</h3>
          <div className="about-values__tilted">
            {[
              {
                title: 'المستخدم أولاً',
                description:
                  'بصفتي مصممة UX/UI أضع احتياجات المستخدم في المقدمة، هدفي أن أجعل أحلامه حقيقة داخل المنتج بشكل بسيط وممتع.',
              },
              {
                title: 'شغف التعلم',
                description:
                  'بصفتي مصممة UX/UI أحرص على التعلم المستمر، فمجالنا يتطور بسرعة ودائماً هناك جديد يلهم التجارب القادمة.',
              },
              {
                title: 'روح الابتكار',
                description:
                  'بصفتي مصممة UX/UI أستمتع بابتكار حلول وتجارب جديدة لكل تحدٍ أو مشكلة تواجه المستخدم.',
              },
              {
                title: 'نتشارك النجاح',
                description:
                  'بصفتي مصممة UX/UI أؤمن بأن العمل الجماعي والتعاون مع الفرق المختلفة يصنع نتائج أقوى وأفكاراً أغنى.',
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
                    <div className="about-values__cardtext about-values__cardtext--rtl">
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


