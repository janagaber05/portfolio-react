import { useEffect, useMemo, useRef } from 'react';
import { gsap } from 'gsap';
import './BounceCards.css';

export default function BounceCards({
  className = '',
  items = [],
  containerWidth = 520,
  containerHeight = 280,
  animationDelay = 0.5,
  animationStagger = 0.08,
  easeType = 'elastic.out(1, 0.7)',
  transformStyles = [
    'rotate(6deg) translate(-160px)',
    'rotate(3deg) translate(-80px)',
    'rotate(0deg)',
    'rotate(-3deg) translate(80px)',
    'rotate(-6deg) translate(160px)',
  ],
  enableHover = true,
}) {
  const uniqueBase = useMemo(() => `bounce-card-${Math.random().toString(36).slice(2)}`, []);
  const cardSelector = useMemo(() => `.${uniqueBase}`, [uniqueBase]);
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        `${cardSelector}`,
        { scale: 0, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          stagger: animationStagger,
          ease: easeType,
          delay: animationDelay,
          duration: 0.9,
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, [animationDelay, animationStagger, easeType, cardSelector, items.length]);

  const getNoRotationTransform = (transformStr) => {
    const hasRotate = /rotate\([\s\S]*?\)/.test(transformStr);
    if (hasRotate) {
      return transformStr.replace(/rotate\([\s\S]*?\)/, 'rotate(0deg)');
    }
    if (transformStr === 'none') {
      return 'rotate(0deg)';
    }
    return `${transformStr} rotate(0deg)`;
  };

  const getPushedTransform = (baseTransform, offsetX) => {
    const translateRegex = /translate\(([-0-9.]+)px\)/;
    const match = baseTransform.match(translateRegex);
    if (match) {
      const currentX = parseFloat(match[1]);
      const newX = currentX + offsetX;
      return baseTransform.replace(translateRegex, `translate(${newX}px)`);
    }
    if (baseTransform === 'none') {
      return `translate(${offsetX}px)`;
    }
    return `${baseTransform} translate(${offsetX}px)`;
  };

  const pushSiblings = (hoveredIdx) => {
    if (!enableHover) return;
    items.forEach((_, idx) => {
    const selector = `.${uniqueBase}-${idx}`;
      gsap.killTweensOf(selector);
      const baseTransform = transformStyles[idx] || 'none';
      if (idx === hoveredIdx) {
        gsap.to(selector, {
          transform: getNoRotationTransform(baseTransform),
          duration: 0.4,
          ease: 'back.out(1.4)',
          overwrite: 'auto',
        });
      } else {
        const offsetX = idx < hoveredIdx ? -140 : 140;
        const pushedTransform = getPushedTransform(baseTransform, offsetX);
        const delay = Math.abs(hoveredIdx - idx) * 0.05;
        gsap.to(selector, {
          transform: pushedTransform,
          duration: 0.4,
          ease: 'back.out(1.4)',
          delay,
          overwrite: 'auto',
        });
      }
    });
  };

  const resetSiblings = () => {
    if (!enableHover) return;
    items.forEach((_, idx) => {
      const selector = `.${uniqueBase}-${idx}`;
      const baseTransform = transformStyles[idx] || 'none';
      gsap.killTweensOf(selector);
      gsap.to(selector, {
        transform: baseTransform,
        duration: 0.4,
        ease: 'back.out(1.4)',
        overwrite: 'auto',
      });
    });
  };

  return (
    <div
      className={`bounceCardsContainer ${className}`}
      style={{ width: containerWidth, height: containerHeight }}
      ref={containerRef}
    >
      {items.map((item, idx) => (
        <article
          key={item.id || idx}
          className={`bounce-card ${uniqueBase} ${uniqueBase}-${idx}`}
          style={{
            transform: transformStyles[idx] ?? 'none',
            background: item.background,
            color: item.color || '#fff',
          }}
          onMouseEnter={() => pushSiblings(idx)}
          onMouseLeave={resetSiblings}
          aria-label={item.title}
        >
          <div className="bounce-card__inner">
            <h4>{item.title}</h4>
            <p>{item.description}</p>
          </div>
        </article>
      ))}
    </div>
  );
}

