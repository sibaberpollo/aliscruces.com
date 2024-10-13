import Link from 'next/link';

export default function MobileMenu({ menuActive, toggleMenu }) {
  return (
    <div className={`responsive-mobile-menu d-flex flex-wrap align-items-end ${menuActive ? 'active' : ''}`}>
      <button onClick={toggleMenu} className="close-menu">
        <i className="fa fa-times"></i>
      </button>
      <ul className="mb-menu">
        <li>
          <Link href="/">Home</Link>
          <ul>
            <li><Link href="/">Homepage 1</Link></li>
            <li><Link href="/index2">Homepage 2</Link></li>
            <li><Link href="/index3">Homepage 3</Link></li>
            <li><Link href="/index-dark">Homepage 4 (Dark)</Link></li>
            <li><Link href="/index4">Homepage 5</Link></li>
            <li><Link href="/index5">Homepage 6</Link></li>
            <li><Link href="/index6">Homepage 7</Link></li>
            <li><Link href="/index7">Homepage 8</Link></li>
            <li><Link href="/index8">Homepage 9</Link></li>
          </ul>
        </li>
        <li><Link href="/podcasts">Podcasts</Link></li>
        <li><Link href="/blog">Blog</Link>
          <ul>
            <li><Link href="/blog-sidebar">Blog Sidebar</Link></li>
            <li><Link href="/blog-wide">Blog Wide</Link></li>
            <li><Link href="/blog-grid">Blog Grid</Link></li>
            <li><Link href="/blog-grid-sidebar">Blog Grid Sidebar</Link></li>
            <li><Link href="/blog-details">Blog Details 01</Link></li>
            <li><Link href="/blog-details-v2">Blog Details 02</Link></li>
            <li><Link href="/blog-details-v3">Blog Details 03</Link></li>
            <li><Link href="/blog-details-v4">Blog Details 04</Link></li>
          </ul>
        </li>
        <li><Link href="/authors">Authors</Link></li>
        <li><Link href="/sponsors">Sponsor</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>
      <ul className="social-links">
        <li><Link href="https://facebook.com"><i className="fab fa-facebook-f"></i></Link></li>
        <li><Link href="https://twitter.com"><i className="fab fa-twitter"></i></Link></li>
        <li><Link href="https://instagram.com"><i className="fab fa-instagram"></i></Link></li>
        <li><Link href="https://dribbble.com"><i className="fab fa-dribbble"></i></Link></li>
      </ul>
      <div className="rep-copyright">
        <p>
          Copyright © 2020 <Link href="/">Softcircles</Link> All Rights Reserved.
        </p>
      </div>
    </div>
  );
}
