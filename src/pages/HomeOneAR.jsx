import { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import LiquidEther from '../components/LiquidEther';
import { useSectionContent } from '../hooks/useHomeContent';
import './HomeOne.css';

export default function HomeOneAR() {
  const navigate = useNavigate();
  const location = useLocation();
  const rootRef = useRef(null);
  const startY = useRef(0);
  const allowScrollRef = useRef(true);
  const cameFromHomeTwo = location.state?.from === 'home-two';
  const [entering, setEntering] = useState(true);
  const [leaving, setLeaving] = useState(false);
  const { getContent } = useSectionContent('home', 'ar');

  useEffect(() => {
    if (cameFromHomeTwo) {
      setEntering(false);
      navigate(location.pathname, { replace: true, state: null });
    } else {
      const timeout = setTimeout(() => setEntering(false), 40);
      return () => clearTimeout(timeout);
    }
  }, [cameFromHomeTwo, location.pathname, navigate]);

  useEffect(() => {
    const node = rootRef.current;
    if (!node) return;

    allowScrollRef.current = !cameFromHomeTwo;
    let unlockTimer;
    if (cameFromHomeTwo) {
      allowScrollRef.current = false;
      unlockTimer = setTimeout(() => {
        allowScrollRef.current = true;
      }, 360);
    }

    let locked = false;
    let wheelDownTotal = 0;

    const triggerLeave = () => {
      if (!allowScrollRef.current) return;
      if (locked || leaving) return;
      locked = true;
      setLeaving(true);
      wheelDownTotal = 0;
      allowScrollRef.current = false;
      setTimeout(() => navigate('/home-two-ar'), 320);
    };

    const onWheel = (event) => {
      if (!allowScrollRef.current) return;
      if (event.deltaY > 0) {
        wheelDownTotal += event.deltaY;
        if (wheelDownTotal > 80) {
          wheelDownTotal = 0;
          triggerLeave();
        }
      } else {
        wheelDownTotal = 0;
      }
    };

    const onTouchStart = (event) => {
      if (event.touches.length === 1) startY.current = event.touches[0].clientY;
    };

    const onTouchMove = (event) => {
      if (!allowScrollRef.current) return;
      if (!startY.current) return;
      if (startY.current - event.touches[0].clientY > 110) triggerLeave();
    };

    node.addEventListener('wheel', onWheel, { passive: true });
    node.addEventListener('touchstart', onTouchStart, { passive: true });
    node.addEventListener('touchmove', onTouchMove, { passive: true });

    return () => {
      node.removeEventListener('wheel', onWheel);
      node.removeEventListener('touchstart', onTouchStart);
      node.removeEventListener('touchmove', onTouchMove);
      if (unlockTimer) clearTimeout(unlockTimer);
    };
  }, [cameFromHomeTwo, leaving, navigate]);

  return (
    <Layout lang="ar" hideFooter>
      <section ref={rootRef} className="home-one" aria-label="قسم البطل">
        <div className="home-one-liquid" aria-hidden="true">
          <LiquidEther
            colors={[ '#5227FF', '#FF9FFC', '#B19EEF' ]}
            mouseForce={20}
            cursorSize={100}
            isViscous={false}
            viscous={30}
            iterationsViscous={32}
            iterationsPoisson={32}
            resolution={0.55}
            isBounce={false}
            autoDemo
            autoSpeed={0.5}
            autoIntensity={2.2}
            takeoverDuration={0.25}
            autoResumeDelay={3000}
            autoRampDuration={0.6}
          />
        </div>
        <div
          className={`home-one__inner container ${entering ? 'home-one__inner--enter' : ''} ${
            leaving ? 'home-one__inner--leave' : ''
          }`}
        >
          <div className="home-one-hero__text">
            <h1 className="home-one-hero__title">
              {getContent('hero_title') || ''}
            </h1>
            <p className="home-one-hero__subtitle">
              {getContent('hero_subtitle') || ''}
            </p>
            <p className="home-one-hero__paragraph">
              {getContent('hero_paragraph') || ''}
            </p>
          </div>
          <div className="home-one-hero__image" aria-hidden="true">
            <img src="/imgs/home page/hero-img.png" alt="صورة جنا أحمد" />
          </div>
        </div>
      </section>
    </Layout>
  );
}

