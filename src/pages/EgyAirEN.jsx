import Layout from '../components/Layout';
import Masonry from '../components/Masonry';
import './EgyAirEN.css';

export default function EgyAirEN() {
  return (
    <Layout lang="en">
      <section className="egyair-project">
        {/* Hero Section */}
        <div className="egyair-hero">
          <div className="egyair-hero-content">
            <h1 className="egyair-title">Egy Air</h1>
            <p className="egyair-subtitle">Modern Egyptian Airline Branding</p>
          </div>
          <div className="egyair-hero-image">
            <img src="/imgs/IMG_4737 2.png" alt="Egy Air purple shopping bag" />
          </div>
        </div>

        {/* Project Overview Section */}
        <div className="egyair-section egyair-overview">
          <div className="egyair-overview-image">
            <img src="/imgs/Frame 37.png" alt="Egy Air brochures" />
          </div>
          <div className="egyair-overview-text">
            <p className="egyair-description">
              The logo is inspired by the Egyptian Horus wing symbol strongly connected to protection, travel, sky, and movement in ancient Egyptian culture. The design reinterprets this symbol in a modern, minimal form:
            </p>
          </div>
          <div className="egyair-overview-bullets">
            <ul>
              <li>The circle in the center represents the sun, a core element in ancient Egyptian identity and a symbol of warmth, life, and power.</li>
              <li>The fan-like wing shapes around the sun symbolize motion, flight, and expansion, reflecting the airline's mission: connecting Egypt to the world while preserving cultural identity.</li>
              <li>The use of strong geometric curves gives the logo a sense of balance and direction forward movement, ascension, and travel.</li>
            </ul>
          </div>
          <div className="egyair-overview-image-bottom">
            <img src="/imgs/Frame 40.png" alt="Egy Air purple box" />
          </div>
        </div>

        {/* Cultural Message Section */}
        <div className="egyair-section egyair-cultural">
          <div className="egyair-cultural-text">
            <h2 className="egyair-section-title">Cultural Message</h2>
            <p className="egyair-description">The logo communicates:</p>
            <ul>
              <li>National identity without using direct clichés (like pyramids).</li>
              <li>Respect for Egyptian heritage, shown through symbolic shapes rather than literal historic imagery.</li>
              <li>A vision of modern Egypt bold, welcoming, and moving forward.</li>
            </ul>
          </div>
          <div className="egyair-cultural-image">
            <img src="/imgs/IMG_4737 2.png" alt="Egy Air white shopping bag" />
          </div>
        </div>

        {/* Color Choice Section */}
        <div className="egyair-section egyair-colors">
          <div className="egyair-colors-content">
            <div className="egyair-color-item">
              <div className="egyair-color-swatch purple"></div>
              <div className="egyair-color-text">
                <h3 className="egyair-color-title">Purple Version</h3>
                <ul>
                  <li>The purple tone gives the brand a premium, elegant feel.</li>
                  <li>Purple historically symbolizes royalty and significance, aligning with Egypt's long cultural legacy.</li>
                  <li>It stands out from traditional airline blues, making the brand memorable and distinct.</li>
                </ul>
              </div>
            </div>
            <div className="egyair-color-item">
              <div className="egyair-color-swatch gray"></div>
              <div className="egyair-color-text">
                <h3 className="egyair-color-title">Gray Alternate Version</h3>
                <ul>
                  <li>The gray variation supports a clean, modern, minimal tone.</li>
                  <li>Works well in formal applications like aircraft livery, boarding passes, and cabin signage.</li>
                  <li>Gray maintains the identity while adapting the brand to professional and corporate contexts.</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="egyair-colors-image">
            <img src="/imgs/Frame 40.png" alt="Egy Air gray version application" />
          </div>
        </div>

        {/* Why This Works Section */}
        <div className="egyair-section egyair-why">
          <div className="egyair-why-text">
            <h2 className="egyair-section-title">Why This Works</h2>
            <p className="egyair-description">This brand identity works because it:</p>
            <ul>
              <li>Respects culture without being old-fashioned.</li>
              <li>Feels fresh, simple, and recognizable.</li>
              <li>Translates well across uses aircraft tail, app icon, uniforms, signage, and branding materials.</li>
            </ul>
          </div>
          <div className="egyair-why-image">
            <img src="/imgs/Frame 37.png" alt="Egy Air logo large" />
          </div>
        </div>

        {/* Gallery Section */}
        <div className="egyair-section egyair-gallery">
          <h2 className="egyair-section-title">Project Gallery</h2>
          <div className="egyair-gallery-container">
            <Masonry
              items={[
                {
                  id: "1",
                  img: "/imgs/IMG_4737 2.png",
                  url: "/imgs/IMG_4737 2.png",
                  height: 600,
                },
                {
                  id: "2",
                  img: "/imgs/Frame 37.png",
                  url: "/imgs/Frame 37.png",
                  height: 400,
                },
                {
                  id: "3",
                  img: "/imgs/Frame 40.png",
                  url: "/imgs/Frame 40.png",
                  height: 500,
                },
                {
                  id: "4",
                  img: "/imgs/Frame 41.png",
                  url: "/imgs/Frame 41.png",
                  height: 450,
                },
                {
                  id: "5",
                  img: "/imgs/Frame 42.png",
                  url: "/imgs/Frame 42.png",
                  height: 550,
                },
                {
                  id: "6",
                  img: "/imgs/Frame 43.png",
                  url: "/imgs/Frame 43.png",
                  height: 380,
                },
                {
                  id: "7",
                  img: "/imgs/IMG_4737 2.png",
                  url: "/imgs/IMG_4737 2.png",
                  height: 420,
                },
                {
                  id: "8",
                  img: "/imgs/Frame 37.png",
                  url: "/imgs/Frame 37.png",
                  height: 480,
                },
              ]}
              ease="power3.out"
              duration={0.6}
              stagger={0.05}
              animateFrom="bottom"
              scaleOnHover={true}
              hoverScale={0.95}
              blurToFocus={true}
              colorShiftOnHover={false}
            />
          </div>
        </div>
      </section>
    </Layout>
  );
}

