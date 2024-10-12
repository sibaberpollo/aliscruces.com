import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="top-footer">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="widget widget-about">
                <h3>London Sinfonietta</h3>
                <p>169 Bridle Ave. <br /> Georgetown, SC 29440</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="widget widget-contact">
                <ul>
                  <li>+123 456 789 01</li>
                  <li>
                    <a href="mailto:info@username.com" title="">info@username.com</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="widget widget-links">
                <ul className="wd-links">
                  <li><Link href="#">Accessibility</Link></li>
                  <li><Link href="#">Contact</Link></li>
                  <li><Link href="#">Privacy and Cookie</Link></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="widget widget-links">
                <ul className="wd-links">
                  <li><Link href="#">Accessibility</Link></li>
                  <li><Link href="#">Contact</Link></li>
                  <li><Link href="#">Privacy and Cookie</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="bottom-footer">
          <div className="row">
            <div className="col-lg-3">
              <div className="btm-logo">
                <Image src="/images/logo.png" alt="Logo" width={150} height={50} />
              </div>
            </div>
            <div className="col-lg-9">
              <ul className="btm-links">
                <li><Link href="#">About Us</Link></li>
                <li><Link href="#">Working for Us</Link></li>
                <li><Link href="#">Help</Link></li>
                <li><Link href="#">Press</Link></li>
                <li><Link href="#">Code of Conduct</Link></li>
              </ul>
              <p className="copyright-txt">
                <strong>BeatX</strong> - Copyright 2020. Website by{' '}
                <a href="https://themeforest.net/user/softcircles" title="">Softcircles</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
