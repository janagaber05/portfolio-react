import { useEffect, useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import './Header.css';

export default function Header({ lang = 'en' }) {
  const location = useLocation();
  const isAr = lang === 'ar';
  const pathname = location.pathname;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const getClassName = (isActive, matches) => {
    const customActive = matches ? matches.includes(pathname) : isActive;
    return customActive ? 'nav-link nav-link--active' : 'nav-link';
  };

  const logoSrc = `${process.env.PUBLIC_URL || ''}/imgs/logo/logo-small.png`;

  const closeMenu = () => setIsMenuOpen(false);
  const toggleMenu = () => setIsMenuOpen(prev => !prev);

  useEffect(() => {
    closeMenu();
  }, [pathname]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }

    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [isMenuOpen]);

  return (
    <header className="site-header" role="banner">
      <nav className="nav" role="navigation" aria-label={isAr ? 'التنقل الرئيسي' : 'Main navigation'}>
        <div className="nav-container">
          {/* Logo */}
          <div className="nav-logo">
            <Link to={isAr ? '/ar' : '/'} aria-label={isAr ? 'الرئيسية' : 'Home'}>
              <img
                src={logoSrc}
                alt={isAr ? 'الشعار' : 'Logo'}
                width={44}
                height={44}
                loading="eager"
              />
            </Link>
          </div>

          {/* Navigation */}
          <ul className="nav-links" role="menubar">
            <li role="none">
              <NavLink
                to={isAr ? '/ar' : '/'}
                end={!isAr}
                className={({ isActive }) => getClassName(isActive, isAr ? ['/ar', '/home-two-ar'] : ['/', '/home-two'])}
                role="menuitem"
              >
                {isAr ? 'الرئيسية' : 'Home'}
              </NavLink>
            </li>
            <li role="none">
              <NavLink
                to={isAr ? '/about-ar' : '/about'}
                className={({ isActive }) => getClassName(isActive)}
                role="menuitem"
              >
                {isAr ? 'عني' : 'About'}
              </NavLink>
            </li>
            <li role="none">
              <NavLink
                to={isAr ? '/contact-ar' : '/contact'}
                className={({ isActive }) => getClassName(isActive)}
                role="menuitem"
              >
                {isAr ? 'اتصل بي' : 'Contact'}
              </NavLink>
            </li>
            <li role="none">
              <NavLink
                to={isAr ? '/blogs-ar' : '/blogs'}
                className={({ isActive }) => getClassName(isActive)}
                role="menuitem"
              >
                {isAr ? 'المدونة' : 'Blogs'}
              </NavLink>
            </li>
            <li role="none">
              <NavLink
                to={isAr ? '/category-ar' : '/category'}
                className={({ isActive }) => getClassName(isActive)}
                role="menuitem"
              >
                {isAr ? 'التصنيفات' : 'Category'}
              </NavLink>
            </li>
            <li className="nav-links__divider" aria-hidden="true">|</li>
            <li role="none">
              <NavLink 
                to="/ar" 
                className={({ isActive }) => getClassName(isActive)} 
                role="menuitem"
              >
                AR
              </NavLink>
            </li>
            <li role="none">
              <NavLink 
                to="/" 
                end 
                className={({ isActive }) => getClassName(isActive, ['/', '/home-two'])} 
                role="menuitem"
              >
                EN
              </NavLink>
            </li>
          </ul>

          <button
            type="button"
            className={`burger-menu ${isMenuOpen ? 'burger-menu--open' : ''}`}
            aria-label={isAr ? 'فتح قائمة التنقل' : 'Toggle navigation'}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            onClick={toggleMenu}
          >
            <span className="burger-line" />
            <span className="burger-line" />
            <span className="burger-line" />
          </button>
        </div>
      </nav>

      <div
        className={`mobile-menu-overlay ${isMenuOpen ? 'mobile-menu-overlay--visible' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label={isAr ? 'قائمة الجوال' : 'Mobile menu'}
        onClick={closeMenu}
      >
        <div
          id="mobile-menu"
          className="mobile-menu"
          role="menu"
          dir={isAr ? 'rtl' : 'ltr'}
          onClick={(e) => e.stopPropagation()}
        >
          <ul className="mobile-menu-list">
            <li>
              <NavLink
                to={isAr ? '/ar' : '/'}
                end={!isAr}
                className="mobile-menu-link"
                onClick={closeMenu}
              >
                {isAr ? 'الرئيسية' : 'Home'}
              </NavLink>
            </li>
            <li>
              <NavLink
                to={isAr ? '/about-ar' : '/about'}
                className="mobile-menu-link"
                onClick={closeMenu}
              >
                {isAr ? 'عني' : 'About'}
              </NavLink>
            </li>
            <li>
              <NavLink
                to={isAr ? '/contact-ar' : '/contact'}
                className="mobile-menu-link"
                onClick={closeMenu}
              >
                {isAr ? 'اتصل بي' : 'Contact'}
              </NavLink>
            </li>
            <li>
              <NavLink
                to={isAr ? '/blogs-ar' : '/blogs'}
                className="mobile-menu-link"
                onClick={closeMenu}
              >
                {isAr ? 'المدونة' : 'Blogs'}
              </NavLink>
            </li>
            <li>
              <NavLink
                to={isAr ? '/category-ar' : '/category'}
                className="mobile-menu-link"
                onClick={closeMenu}
              >
                {isAr ? 'التصنيفات' : 'Category'}
              </NavLink>
            </li>
          </ul>
          <div className="mobile-menu-divider" aria-hidden="true" />
          <ul className="mobile-menu-list mobile-menu-list--secondary">
            <li>
              <NavLink
                to="/ar"
                className="mobile-menu-link"
                onClick={closeMenu}
              >
                AR
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/"
                end
                className="mobile-menu-link"
                onClick={closeMenu}
              >
                EN
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
