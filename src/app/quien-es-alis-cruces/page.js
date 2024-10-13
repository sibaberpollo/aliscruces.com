export const metadata = {
  title: 'Biografía de Alis Cruces | Músico Venezolano',
  description:
    'Conoce la biografía de Alis Cruces, destacado músico y docente venezolano. Director de la Orquesta Regional Alma Llanera de Carabobo y cuatrista internacional.',
};

export default function QuienEsAlisCruces() {
  return (
    <section className="block">
      <div className="container">
        <div className="page-content">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="blog-single">
                <div className="blog-post v2">
                  <div className="blog-thumbnail">
                    <img src="/images/resources/blog-large.jpg" alt="" className="w-100" />
                    <div className="like-post">
                      <i className="flaticon-heart-1"></i>
                      <span>12</span>
                    </div>
                  </div>
                  <div className="blog-info">
                    <ul className="pod-meta">
                      <li>
                        <i className="flaticon-user"></i>
                        <a href="#" title="">James Smith</a>
                      </li>
                      <li>
                        <i className="flaticon-date"></i>
                        <a href="#" title="">10 Apr 2020</a>
                      </li>
                    </ul>
                    <h2>Anniversary of Elton John’s Most Popular Work</h2>
                    <p>Integer sollicitudin ligula non enim sodales, non lacinia nunc ornare...</p>
                    <p>quiam ligula.Aenamet, consectetuer adipiscing elit. Phasellus hendrerit...</p>
                    <blockquote>
                      <p>Podcasting is hard work! It's such a relief to have a team like Acast...</p>
                    </blockquote>
                    <div className="row">
                      <div className="col-sm-6">
                        <img src="/images/resources/imgg7.jpg" alt="" className="w-100 mb-30" />
                      </div>
                      <div className="col-sm-6">
                        <img src="/images/resources/imgg8.jpg" alt="" className="w-100" />
                      </div>
                    </div>
                    <ul className="points">
                      <li>Music industry fairer for independent musicians</li>
                      <li>Release all of your music onto the world’s</li>
                      <li>100% of the rights to your songs</li>
                      <li>Support and promote your music globally</li>
                      <li>Passionate about artists’ rights...</li>
                    </ul>
                    <p>udin ligula non enim sodales, non lacinia nunc ornare...</p>
                    <div className="blog-music">
                      <div className="music-player">
                        <div className="maudio">
                          <audio src="http://www.jplayer.org/audio/mp3/Miaow-04-Lismore.mp3" controls></audio>
                        </div>
                      </div>
                      <div className="music-player">
                        <div className="maudio">
                          <audio src="http://www.jplayer.org/audio/mp3/Miaow-04-Lismore.mp3" controls></audio>
                        </div>
                      </div>
                    </div>
                    <div className="vid-music">
                      <img src="/images/resources/vid-music.jpg" alt="" className="w-100" />
                      <div className="vid_play">
                        <div className="mss-player">
                          <div className="mm-audio">
                            <div className="maudio">
                              <audio src="http://www.jplayer.org/audio/mp3/Miaow-04-Lismore.mp3" controls></audio>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p>Integer sollicitudin ligula non enim sodales...</p>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="posted_by">
                          <span className="default-clr"><i className="fa fa-tags"></i>Posted in :</span>
                          <p>News, Anniversary, Elton</p>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <ul className="social_links text-right">
                          <li><a href="#" title="" className="facebook"><i className="fab fa-facebook-f"></i></a></li>
                          <li><a href="#" title="" className="google"><i className="fab fa-google-plus-g"></i></a></li>
                          <li><a href="#" title="" className="twitter"><i className="fab fa-twitter"></i></a></li>
                          <li><a href="#" title="" className="youtube"><i className="fab fa-youtube"></i></a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="listen-podcast">
                <h2>Everybody Should Be Listening to This Podcast</h2>
                <a href="#" title="" className="download-btn"><i className="fa fa-download"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
