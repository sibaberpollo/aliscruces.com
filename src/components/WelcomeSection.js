import Link from 'next/link';

export default function WelcomeSection() {
  return (
    <section className="pt-0">
      <div className="fixed-bg bg1"></div>
      <div className="about-section">
        <div className="container">
          <div className="abt-sec">
            <div className="row m-0">
              <div className="col-lg-5 p-0">
                {/* Video responsivo */}
                <div className="video-responsive">
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/YqCT8UxVs_g"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
              <div className="col-lg-7 p-0">
                <div className="abt-text">
                  <h5 className="rad-status">
                    <i className="flaticon-sound-bars"></i>On Radio 81.1 FM
                  </h5>
                  <h2>¿Quién soy?</h2>
                  <p>Alis Cruces, es un músico y docente de Güigüe Estado Carabobo, que reside actualmente en Valencia, Venezuela.</p>
                  <div className="presented">
                    {/*<h3>Presented By:</h3>
                    <ul>
                      <li>
                        <Link href="#">
                          Rhian Todhunter
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          Will Backler + Jackson
                        </Link>
                      </li>
                    </ul>*/}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
