import Layout from '../components/Layout';
import Masonry from '../components/Masonry';
import './EgyAirAR.css';

export default function EgyAirAR() {
  return (
    <Layout lang="ar">
      <section className="egyair-project">
        {/* Hero Section */}
        <div className="egyair-hero">
          <div className="egyair-hero-content">
            <h1 className="egyair-title">Egy Air</h1>
            <p className="egyair-subtitle">هوية طيران مصري عصرية</p>
          </div>
          <div className="egyair-hero-image">
            <img src="/imgs/IMG_4737 2.png" alt="حقيبة إيجي إير البنفسجية" />
          </div>
        </div>

        {/* Project Overview Section */}
        <div className="egyair-section egyair-overview">
          <div className="egyair-overview-image">
            <img src="/imgs/Frame 37.png" alt="كتيبات إيجي إير" />
          </div>
          <div className="egyair-overview-text">
            <p className="egyair-description">
              الشعار مستوحى من رمز جناح حورس المصري المرتبط بقوة بالحماية والسفر والسماء والحركة في الثقافة المصرية القديمة. يعيد التصميم تفسير هذا الرمز بشكل عصري وبسيط:
            </p>
          </div>
          <div className="egyair-overview-bullets">
            <ul>
              <li>الدائرة في الوسط تمثل الشمس، عنصر أساسي في الهوية المصرية القديمة ورمز للدفء والحياة والقوة.</li>
              <li>أشكال الأجنحة الشبيهة بالمروحة حول الشمس ترمز للحركة والطيران والتوسع، مما يعكس مهمة الخطوط الجوية: ربط مصر بالعالم مع الحفاظ على الهوية الثقافية.</li>
              <li>استخدام المنحنيات الهندسية القوية يعطي الشعار إحساساً بالتوازن والاتجاه والحركة للأمام والصعود والسفر.</li>
            </ul>
          </div>
          <div className="egyair-overview-image-bottom">
            <img src="/imgs/Frame 40.png" alt="صندوق إيجي إير البنفسجي" />
          </div>
        </div>

        {/* Cultural Message Section */}
        <div className="egyair-section egyair-cultural">
          <div className="egyair-cultural-text">
            <h2 className="egyair-section-title">الرسالة الثقافية</h2>
            <p className="egyair-description">الشعار ينقل:</p>
            <ul>
              <li>الهوية الوطنية دون استخدام كليشيهات مباشرة (مثل الأهرامات).</li>
              <li>الاحترام للتراث المصري، من خلال الأشكال الرمزية بدلاً من الصور التاريخية الحرفية.</li>
              <li>رؤية مصر الحديثة — جريئة ومرحبة ومتقدمة.</li>
            </ul>
          </div>
          <div className="egyair-cultural-image">
            <img src="/imgs/IMG_4737 2.png" alt="حقيبة إيجي إير البيضاء" />
          </div>
        </div>

        {/* Color Choice Section */}
        <div className="egyair-section egyair-colors">
          <div className="egyair-colors-content">
            <div className="egyair-color-item">
              <div className="egyair-color-swatch purple"></div>
              <div className="egyair-color-text">
                <h3 className="egyair-color-title">النسخة البنفسجية</h3>
                <ul>
                  <li>اللون البنفسجي يعطي العلامة إحساساً فاخراً وأنيقاً.</li>
                  <li>البنفسجي تاريخياً يرمز للملكية والأهمية، مما يتماشى مع الإرث الثقافي الطويل لمصر.</li>
                  <li>يبرز من الأزرق التقليدي للخطوط الجوية، مما يجعل العلامة لا تُنسى ومميزة.</li>
                </ul>
              </div>
            </div>
            <div className="egyair-color-item">
              <div className="egyair-color-swatch gray"></div>
              <div className="egyair-color-text">
                <h3 className="egyair-color-title">النسخة الرمادية البديلة</h3>
                <ul>
                  <li>التباين الرمادي يدعم نغمة نظيفة وعصرية وبسيطة.</li>
                  <li>يعمل بشكل جيد في التطبيقات الرسمية مثل طلاء الطائرات وتذاكر الصعود ولافتات المقصورة.</li>
                  <li>الرمادي يحافظ على الهوية مع تكييف العلامة للسياقات المهنية والشركات.</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="egyair-colors-image">
            <img src="/imgs/Frame 40.png" alt="تطبيق النسخة الرمادية لإيجي إير" />
          </div>
        </div>

        {/* Why This Works Section */}
        <div className="egyair-section egyair-why">
          <div className="egyair-why-text">
            <h2 className="egyair-section-title">لماذا يعمل هذا</h2>
            <p className="egyair-description">هذه الهوية تعمل لأنها:</p>
            <ul>
              <li>تحترم الثقافة دون أن تكون قديمة الطراز.</li>
              <li>تشعر بالجدة والبساطة والتميز.</li>
              <li>تترجم بشكل جيد عبر الاستخدامات — ذيل الطائرة، أيقونة التطبيق، الزي الرسمي، اللافتات، ومواد العلامة التجارية.</li>
            </ul>
          </div>
          <div className="egyair-why-image">
            <img src="/imgs/Frame 37.png" alt="شعار إيجي إير كبير" />
          </div>
        </div>

        {/* Gallery Section */}
        <div className="egyair-section egyair-gallery">
          <h2 className="egyair-section-title">معرض المشروع</h2>
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

