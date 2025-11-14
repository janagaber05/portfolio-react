import { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import LiquidEther from '../components/LiquidEther';
import './HomeOne.css';

export default function HomeOneEN() {
  const navigate = useNavigate();
  const location = useLocation();
  const rootRef = useRef(null);
  const startY = useRef(0);
  const allowScrollRef = useRef(true);
  const cameFromHomeTwo = location.state?.from === 'home-two';
  const [entering, setEntering] = useState(!cameFromHomeTwo);
  const [leaving, setLeaving] = useState(false);

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

    let unlockRAF;
    allowScrollRef.current = true;
    if (cameFromHomeTwo) {
      allowScrollRef.current = false;
      unlockRAF = requestAnimationFrame(() => {
        allowScrollRef.current = true;
      });
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
      setTimeout(() => navigate('/home-two'), 320);
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
      if (unlockRAF) cancelAnimationFrame(unlockRAF);
    };
  }, [cameFromHomeTwo, leaving, navigate]);

  return (
    <Layout lang="en" hideFooter>
      <section ref={rootRef} className="home-one" aria-label="Hero section">
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
              Hello Im Jana Ahmed Ahmed<br />Passonat Ux/Ui Designer
            </h1>
            <p className="home-one-hero__subtitle">
              UX/Ui Designer&nbsp;| Graphic Designer&nbsp;| Content Creator&nbsp;| Sales
            </p>
            <p className="home-one-hero__paragraph">
              I’m Jana a hijabi girl with a designer’s eye and a car lover’s heart. I mix pixels and
              horsepower like it’s an art form. I believe every design (and every car) should have
              personality, attitude, and a little chaos&nbsp;— just like me.
            </p>
          </div>
          <div className="home-one-hero__image" aria-hidden="true">
            <img src="/imgs/home page/hero-img.png" alt="Jana Ahmed portrait" />
          </div>
        </div>
      </section>
    </Layout>
  );
}

