'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import MobileMenu from './MobileMenu';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className="pb">
      <div className={`bottom-header ${isScrolled ? 'sticky animated slideInDown' : ''}`}>
        <div className="container">
          <div className="header-content">
            <div className="logo">
              <Link href="/" title="Homepage">
                <Image src="/images/logo750x750.png" alt="Logo" width={150} height={50} />
              </Link>
            </div>
            <nav>
              <ul>
                <li>
                  <Link href="/">Home</Link>
                  <ul>
                    <li><Link href="/">Homepage 1</Link></li>
                    <li><Link href="/index2">Homepage 2</Link></li>
                    <li><Link href="/index3" className="active">Homepage 3</Link></li>
                    <li><Link href="/index-dark">Homepage 4 (Dark)</Link></li>
                    <li><Link href="/index4">Homepage 5</Link></li>
                    <li><Link href="/index5">Homepage 6</Link></li>
                    <li><Link href="/index6">Homepage 7</Link></li>
                    <li><Link href="/index7">Homepage 8</Link></li>
                    <li><Link href="/index8">Homepage 9</Link></li>
                  </ul>
                </li>
                <li><Link href="/podcasts">Podcasts</Link></li>
                <li><Link href="/blog">Blog</Link></li>
                <li><Link href="/authors">Authors</Link></li>
                <li><Link href="/sponsors">Sponsor</Link></li>
                <li><Link href="/contact">Contact</Link></li>
              </ul>
            </nav>
            <Link href="/" className="menu-btn">
              <Image src="/images/bars2.png" alt="Menu" width={30} height={30} />
            </Link>
            <ul className="social-links">
              <li><Link href="https://facebook.com" className="facebook"><i className="fab fa-facebook"></i></Link></li>
              <li><Link href="https://spotify.com" className="spotify"><i className="flaticon-spotify"></i></Link></li>
              <li><Link href="https://soundcloud.com" className="soundcloud"><i className="flaticon-soundcloud-logo"></i></Link></li>
            </ul>
          </div>
        </div>
      </div>
      <MobileMenu />
    </header>
  );
}
