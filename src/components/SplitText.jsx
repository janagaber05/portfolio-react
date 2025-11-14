import { useEffect, useMemo, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const TAG_MAP = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  p: 'p',
  span: 'span'
};

export default function SplitText({
  text,
  className = '',
  delay = 100,
  duration = 0.6,
  ease = 'power3.out',
  from = { opacity: 0, y: 40 },
  to = { opacity: 1, y: 0 },
  threshold = 0.1,
  rootMargin = '-100px',
  textAlign = 'center',
  tag = 'p',
  onLetterAnimationComplete
}) {
  const ref = useRef(null);

  const characters = useMemo(() => {
    if (!text) return [];
    return Array.from(text);
  }, [text]);

  useEffect(() => {
    const el = ref.current;
    if (!el || !characters.length) return;

    const chars = el.querySelectorAll('.split-char');
    const startPct = (1 - threshold) * 100;
    const marginMatch = /^(-?\d+(?:\.\d+)?)(px|em|rem|vh|vw|%)?$/.exec(rootMargin);
    const marginValue = marginMatch ? parseFloat(marginMatch[1]) : 0;
    const marginUnit = marginMatch ? marginMatch[2] || 'px' : 'px';
    const sign =
      marginValue === 0
        ? ''
        : marginValue < 0
          ? `-=${Math.abs(marginValue)}${marginUnit}`
          : `+=${marginValue}${marginUnit}`;
    const start = `top ${startPct}%${sign}`;

    gsap.set(chars, from);

    const trigger = ScrollTrigger.create({
      trigger: el,
      start,
      once: true,
      onEnter: () => {
        gsap.to(chars, {
          ...to,
          duration,
          ease,
          stagger: delay / 1000,
          onComplete: () => {
            onLetterAnimationComplete?.();
          }
        });
      }
    });

    return () => {
      trigger.kill();
      gsap.set(chars, { clearProps: 'all' });
    };
  }, [characters, delay, duration, ease, from, to, threshold, rootMargin, onLetterAnimationComplete]);

  const Tag = TAG_MAP[tag] || 'p';
  const wrapperStyle = {
    textAlign,
    overflow: 'hidden',
    display: 'inline-block',
    whiteSpace: 'normal',
    wordWrap: 'break-word'
  };

  return (
    <Tag ref={ref} className={`split-parent ${className}`.trim()} style={wrapperStyle} aria-label={text}>
      <span aria-hidden="true">
        {characters.map((char, idx) => (
          <span key={`${char}-${idx}`} className="split-char">
            {char === ' ' ? '\u00A0' : char}
          </span>
        ))}
      </span>
    </Tag>
  );
}
