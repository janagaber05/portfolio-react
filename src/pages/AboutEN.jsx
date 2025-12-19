import { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import CurvedLoop from '../components/CurvedLoop';
import BounceCards from '../components/BounceCards';
import TiltedCard from '../components/TiltedCard';
import Stack from '../components/Stack';
import LiquidEther from '../components/LiquidEther';
import { supabase } from './Supabase';
import './AboutEN.css';

const strengthTransforms = [
  'rotate(5deg) translate(-150px)',
  'rotate(1deg) translate(-70px)',
  'rotate(-2deg)',
  'rotate(2deg) translate(70px)',
  'rotate(-4deg) translate(150px)',
];

export default function AboutEN() {
  const [aboutContent, setAboutContent] = useState([]);
  const [strengthCards, setStrengthCards] = useState([]);
  const [valuesCards, setValuesCards] = useState([]);
  const [stackCards, setStackCards] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getAllAboutContentAPI() {
      try {
        // Try without special character first
        let res = await supabase.from("home_about_category_content").select("*").eq("section", "about");
        console.log("AboutEN - First try (without special char):", res);
        
        // If that fails, try with special character
        if (res.error) {
          console.log("AboutEN - Trying with special character...");
          res = await supabase.from("homeـ_about_category_content").select("*").eq("section", "about");
          console.log("AboutEN - Second try (with special char):", res);
        }
        
        if (res.error) {
          console.error("AboutEN Error:", res.error);
        }
        
        if (res.data) {
          console.log("AboutEN - Data received:", res.data.length, "items");
          console.log("AboutEN - Full data:", res.data);
          console.log("AboutEN - All keys in data:", res.data.map(item => item.key));
          setAboutContent(res.data || []);
          
          // Parse metadata for cards
          res.data.forEach(item => {
            console.log(`AboutEN - Item key: "${item.key}", has content_en: ${item.content_en ? 'YES' : 'NO'}`);
            if (item.metadata) {
              try {
                const metadata = typeof item.metadata === 'string' ? JSON.parse(item.metadata) : item.metadata;
                
                if (item.key === 'strengths' && metadata.cards) {
                  setStrengthCards(metadata.cards);
                }
                if (item.key === 'values' && metadata.cards) {
                  setValuesCards(metadata.cards);
                }
                if (item.key === 'stack' && metadata.cards) {
                  setStackCards(metadata.cards);
                }
              } catch (e) {
                console.error('Error parsing metadata for', item.key, e);
              }
            }
          });
        }
      } catch (err) {
        console.error("AboutEN - Exception:", err);
      } finally {
        setLoading(false);
      }
    }
    
    getAllAboutContentAPI();
  }, []);

  // Helper function to get content by key
  const getContent = (key) => {
    const item = aboutContent.find(item => item.key === key);
    if (!item) {
      console.log(`❌ AboutEN - Content not found for key: "${key}"`);
      console.log('📋 Available keys:', aboutContent.map(c => c.key));
    } else {
      console.log(`✅ AboutEN - Found content for key: "${key}", has content_en: ${item.content_en ? 'YES' : 'NO'}`);
    }
    return item?.content_en || '';
  };

  if (loading) return <Layout lang="en"><div>Loading...</div></Layout>;

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
          <h1 className="hero-title">{getContent('hero_title')}</h1>
        </div>
      </section>

      <section className="about-divider" aria-label="Services strip">
        <div className="about-divider__strip">
          <CurvedLoop
            marqueeText={getContent('services_strip')}
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
            <h2>{getContent('know_me_title')}</h2>
            <div dangerouslySetInnerHTML={{ __html: getContent('know_me_description') }} />
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
            <h3>{getContent('approach_title')}</h3>
            <div dangerouslySetInnerHTML={{ __html: getContent('approach_description') }} />
          </div>
        </div>
      </section>

      <section className="about-strengths" aria-label="Strengths">
        <div className="container">
          <h3>{getContent('strengths_title')}</h3>
          {strengthCards.length > 0 && (
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
          )}
        </div>
      </section>

      <section className="about-values" aria-label="My Values as a UX/UI Designer">
        <div className="container">
          <h3>{getContent('values_title')}</h3>
          {valuesCards.length > 0 && (
            <div className="about-values__tilted">
              {valuesCards.map((card, index) => (
                <div key={index} className="about-values__item">
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
                        <h4>{card.title}</h4>
                        <p>{card.description}</p>
                      </div>
                    }
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="about-stack" aria-label="Q&A Cards">
        <div className="container">
          <div className="about-stack__wrapper">
            {stackCards.length > 0 && (
              <Stack
                randomRotation={true}
                sensitivity={180}
                sendToBackOnClick={false}
                cardDimensions={{ width: 320, height: 400 }}
                cardsData={stackCards}
              />
            )}
          </div>
        </div>
      </section>
        </div>
      </div>
    </Layout>
  );
}


