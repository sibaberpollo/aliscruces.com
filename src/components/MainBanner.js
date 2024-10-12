import Link from 'next/link';

export default function MainBanner() {
  return (
    <section className="main-banner-hp3">
      <div className="fixed-bg bg5 overlay"></div>
      <div className="container">
        <div className="banner-text-hp3">
          <span>Channel Podcasts</span>
          <h2>All The Latest Videos, Podcasts, Articles and Photography</h2>
          <Link href="#" className="btn-default open-music-player">
            <i className="fa fa-play"></i>Play episode <span></span>
          </Link>
        </div>
      </div>
    </section>
  );
}
