import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import './NotFoundEN.css';

export default function NotFoundEN() {
  return (
    <Layout lang="en">
      <section className="notfound container" aria-label="Page not found">
        <div className="notfound__content">
          <p className="notfound__eyebrow">Error 404</p>
          <h1 className="notfound__title">
            Looks like this page has floated away
          </h1>
          <p className="notfound__copy">
            The link might be broken or the page may have been removed.
            Let’s send you back to the sections that matter most.
          </p>
          <div className="notfound__cta">
            <Link className="btn" to="/">Go Home</Link>
            <Link className="btn ghost" to="/category">Explore Categories</Link>
            <Link className="btn ghost" to="/blogs">Read the Blog</Link>
          </div>
        </div>
        <div className="notfound__media" aria-hidden="true">
          <img src="/imgs/Frame 40.png" alt="" />
        </div>
      </section>
    </Layout>
  );
}

