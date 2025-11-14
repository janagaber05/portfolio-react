import Header from './Header';
import Footer from './Footer';
import { useSiteEffects } from '../hooks/useSiteEffects';
import './Layout.css';

export default function Layout({ lang = 'en', hideFooter = false, children }) {
  useSiteEffects();
  const isAr = lang === 'ar';
  return (
    <div className="layout-root" lang={isAr ? "ar" : "en"} dir={isAr ? "rtl" : "ltr"}>
      <Header lang={lang} />
      <main>
        {children}
      </main>
      {!hideFooter && <Footer lang={lang} />}
    </div>
  );
}


