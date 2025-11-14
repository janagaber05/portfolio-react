import { NavLink, Link, useLocation } from 'react-router-dom';
import './Header.css';

export default function Header({ lang = 'en' }) {
  const location = useLocation();
  const isAr = lang === 'ar';
  const pathname = location.pathname;

  const links = isAr
    ? [
        { to: '/about-ar', label: 'عني' },
        { to: '/ar', label: 'الرئيسية', matches: ['/ar', '/home-two-ar'] },
        { to: '/blogs-ar', label: 'المدونة' },
        { to: '/category-ar', label: 'التصنيفات' },
      ]
    : [
        { to: '/about', label: 'About' },
        { to: '/', label: 'Home', end: true, matches: ['/', '/home-two'] },
        { to: '/blogs', label: 'Blogs' },
        { to: '/category', label: 'Categories' },
      ];

  const getClassName = (isActive, matches) => {
    const customActive = matches ? matches.includes(pathname) : isActive;
    return customActive ? 'nav-link nav-link--active' : 'nav-link';
  };

  const logoSrc = `${process.env.PUBLIC_URL || ''}/imgs/logo/logo-small.png`;

  return (
    <header className="site-header" role="banner">
      <nav className="nav" role="navigation" aria-label={isAr ? 'التنقل الرئيسي' : 'Main navigation'}>
        <div className="nav-center">
          <ul className="nav-links" role="menubar">
            <li className="nav-logo" role="none">
              <Link to={isAr ? '/ar' : '/'} aria-label={isAr ? 'الرئيسية' : 'Home'}>
                <img
                  src={logoSrc}
                  alt={isAr ? 'الشعار' : 'Logo'}
                  width={44}
                  height={44}
                  loading="eager"
                />
              </Link>
            </li>
            {links.map(({ to, label, end, matches }) => (
              <li key={to} role="none">
                <NavLink
                  to={to}
                  end={Boolean(end)}
                  className={({ isActive }) => getClassName(isActive, matches)}
                  role="menuitem"
                >
                  {label}
                </NavLink>
              </li>
            ))}
            <li className="nav-links__divider" aria-hidden="true">|</li>
            <li role="none">
              <NavLink to="/ar" className={({ isActive }) => getClassName(isActive)} role="menuitem">
                AR
              </NavLink>
            </li>
            <li role="none">
              <NavLink to="/" end className={({ isActive }) => getClassName(isActive, ['/', '/home-two'])} role="menuitem">
                EN
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}


