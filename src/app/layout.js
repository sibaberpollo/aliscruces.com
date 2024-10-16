import localFont from "next/font/local";
import "bootstrap/dist/css/bootstrap.min.css";  // Importar Bootstrap
import "@fortawesome/fontawesome-free/css/all.min.css";  // Importar FontAwesome
import "./globals.css";  // Tus estilos globales
import '../styles/flaticon.css';
import '../styles/responsive.css';
import '../styles/color.css';
import '../styles/animate.css';

import Header from '@/components/Header';  // Importar el Header
import Footer from '@/components/Footer';  // Importar el Footer

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <div className="wrapper">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
