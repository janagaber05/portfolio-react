import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function useSiteEffects() {
  const location = useLocation();

  useEffect(() => {
    const heroSection = document.querySelector('#hero');
    const heroInner = document.querySelector('.hero-inner');
    if (heroSection && heroInner) {
      const heroObserver = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            heroInner.classList.add('h-animate');
            obs.unobserve(entry.target);
          }
        });
      }, { threshold: 0.35 });
      heroObserver.observe(heroSection);
    }

    const knowSection = document.querySelector('#about');
    const balloons = document.querySelector('#balloons');
    const knowBox = document.querySelector('#know-box');
    if (balloons) balloons.classList.add('balloons-rise');
    if (knowSection) {
      const knowObserver = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            if (balloons) balloons.classList.add('balloons-visible');
            if (knowBox) knowBox.classList.add('know-visible');
            obs.unobserve(entry.target);
          }
        });
      }, { threshold: 0.3 });
      knowObserver.observe(knowSection);
    }

    function runTypewriter(el) {
      const wordsAttr = el.getAttribute('data-words');
      if (!wordsAttr) return;
      let words = [];
      try { words = JSON.parse(wordsAttr); } catch(_) { words = wordsAttr.split(','); }
      const loop = el.getAttribute('data-loop') === 'true';
      let i = 0, j = 0, deleting = false;
      const speed = () => deleting ? 40 : 70;
      const pause = 1200;
      function tick(){
        const word = words[i % words.length];
        if (!loop){
          if (j < word.length){
            j++;
            el.textContent = word.slice(0, j);
            setTimeout(tick, speed());
          }
          return;
        }
        if (!deleting) {
          j++;
          el.textContent = word.slice(0, j);
          if (j === word.length) { deleting = true; setTimeout(tick, pause); return; }
        } else {
          j--;
          el.textContent = word.slice(0, j);
          if (j === 0) { deleting = false; i++; }
        }
        setTimeout(tick, speed());
      }
      tick();
    }
    const typeTargets = document.querySelectorAll('.typewriter');
    const typeObs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting){
          const el = entry.target;
          if (!el.dataset.started){
            el.dataset.started = '1';
            const delay = parseInt(el.getAttribute('data-delay') || '0', 10);
            setTimeout(() => runTypewriter(el), Math.max(0, delay));
          }
        }
      });
    }, {threshold: 0.2});
    typeTargets.forEach(t => typeObs.observe(t));

    const appSection = document.querySelector('.app-design');
    if (appSection){
      const obs = new IntersectionObserver((entries, o)=>{
        entries.forEach(e => {
          if (e.isIntersecting){
            appSection.classList.add('app-in');
            o.unobserve(e.target);
          }
        })
      }, {threshold: .35});
      obs.observe(appSection);
    }

    const strengths = document.querySelector('.strengths');
    const parallax = strengths?.querySelector('.parallax-bg');
    function updateParallax(){
      if (!strengths || !parallax) return;
      const rect = strengths.getBoundingClientRect();
      const viewH = window.innerHeight || document.documentElement.clientHeight;
      if (rect.bottom < 0 || rect.top > viewH) return;
      const progress = 1 - Math.min(Math.max((rect.top + rect.height) / (viewH + rect.height), 0), 1);
      const translate = (progress - .5) * 60;
      parallax.style.transform = `translateY(${translate}px)`;
    }
    window.addEventListener('scroll', updateParallax, {passive:true});
    updateParallax();

    const sCards = document.querySelectorAll('.s-card');
    if (sCards.length){
      const obs = new IntersectionObserver((entries, o)=>{
        entries.forEach(e=>{
          if (e.isIntersecting){
            e.target.classList.add('in');
            e.target.classList.add('show');
            o.unobserve(e.target);
          }
        })
      }, {threshold: .25});
      sCards.forEach(c=>obs.observe(c));
    }

    const kbCards = document.querySelectorAll('.kb-card');
    if (kbCards.length){
      const kbo = new IntersectionObserver((ents,o)=>{
        ents.forEach(ent=>{
          if (ent.isIntersecting){
            ent.target.classList.add('show');
            o.unobserve(ent.target);
          }
        })
      }, {threshold:.3});
      kbCards.forEach(k=>kbo.observe(k));
    }

    const portraitLink = document.querySelector('.portrait-wrap');
    if (portraitLink) {
      portraitLink.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') portraitLink.click();
      });
    }

    const imgs = document.querySelectorAll('img');
    imgs.forEach(img => img.setAttribute('draggable', 'false'));

    const navs = document.querySelectorAll('.nav');
    navs.forEach(nav => {
      const toggle = nav.parentElement?.querySelector('.nav-toggle') || nav.querySelector('.nav-toggle');
      const links = nav.querySelector('.nav-links');
      if (!toggle || !links) return;
      const onToggle = () => {
        const isOpen = nav.classList.toggle('open');
        toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      };
      toggle.addEventListener('click', onToggle);
      const closeOnClick = () => {
        if (nav.classList.contains('open')) {
          nav.classList.remove('open');
          toggle.setAttribute('aria-expanded', 'false');
        }
      };
      links.querySelectorAll('a').forEach(a => a.addEventListener('click', closeOnClick));
      const onEsc = (e) => {
        if (e.key === 'Escape' && nav.classList.contains('open')) {
          nav.classList.remove('open');
          toggle.setAttribute('aria-expanded', 'false');
        }
      };
      document.addEventListener('keydown', onEsc);
    });

    const viewMoreBtn = document.querySelector('.view-more');
    const viewLessBtn = document.querySelector('.view-less');
    const moreProjects = document.getElementById('more-projects');
    if (viewMoreBtn && moreProjects){
      const onMore = (e)=>{
        e.preventDefault();
        moreProjects.classList.remove('hidden');
        viewMoreBtn.classList.add('hidden');
        if (viewLessBtn) viewLessBtn.classList.remove('hidden');
      };
      viewMoreBtn.addEventListener('click', onMore);
    }
    if (viewLessBtn && moreProjects){
      const onLess = (e)=>{
        e.preventDefault();
        moreProjects.classList.add('hidden');
        viewMoreBtn?.classList.remove('hidden');
        viewLessBtn.classList.add('hidden');
      };
      viewLessBtn.addEventListener('click', onLess);
    }

    const blogRow = document.querySelector('.blog-row');
    const blogPrev = document.querySelector('.blog-prev');
    const blogNext = document.querySelector('.blog-next');
    const blogDots = document.querySelectorAll('.blog-dots .dot');
    if (blogRow && blogPrev && blogNext){
      let pageIndex = 0;
      const pageCount = blogDots.length || Math.max(1, Math.round(blogRow.scrollWidth / blogRow.clientWidth));
      function updateDots(){
        blogDots.forEach((d,i)=> d.classList.toggle('active', i===pageIndex));
      }
      function gotoPage(i){
        pageIndex = Math.max(0, Math.min(i, pageCount-1));
        blogRow.scrollTo({left: blogRow.clientWidth * pageIndex, behavior: 'smooth'});
        updateDots();
      }
      blogPrev.addEventListener('click', ()=> gotoPage(pageIndex - 1));
      blogNext.addEventListener('click', ()=> gotoPage(pageIndex + 1));
      blogDots.forEach((dot,i)=> dot.addEventListener('click', ()=> gotoPage(i)));
      let ticking = false;
      blogRow.addEventListener('scroll', ()=>{
        if (ticking) return;
        ticking = true;
        requestAnimationFrame(()=>{
          const idx = Math.round(blogRow.scrollLeft / blogRow.clientWidth);
          if (idx !== pageIndex){
            pageIndex = idx;
            updateDots();
          }
          ticking = false;
        });
      }, {passive:true});
      updateDots();
    }
  }, [location.pathname]);
}


