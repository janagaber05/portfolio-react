import Layout from '../components/Layout';
import { Link } from 'react-router-dom';
import './NotFoundAR.css';

export default function NotFoundAR() {
  return (
    <Layout lang="ar">
      <section className="hero-split container" aria-label="404 غير موجود">
        <div className="hero-content">
          <h1 className="hero-title"><span className="accent">404</span> — الصفحة غير موجودة</h1>
          <p className="hero-intro">الصفحة التي تبحثين عنها غير موجودة أو تم نقلها. لنعدكِ للطريق الصحيح.</p>
          <p>
            <Link className="btn" to="/ar">العودة للرئيسية</Link>
            <Link className="btn" to="/category-ar" style={{marginInlineStart:"8px"}}>تصفّحي التصنيفات</Link>
            <Link className="btn" to="/blogs-ar" style={{marginInlineStart:"8px"}}>زيارة المدونة</Link>
          </p>
        </div>
        <div className="hero-media">
          <img src="/imgs/Frame 40.png" alt="رسم توضيحي" />
        </div>
      </section>
    </Layout>
  );
}


