import Header from '../components/Header';
import MainBanner from '../components/MainBanner';
import WelcomeSection from '../components/WelcomeSection';
import PatreonSection from '../components/FeaturedCourses';
import Footer from '@/components/Footer';


export default function Home() {
  return (
    <>
      <Header />
      <MainBanner />
      <WelcomeSection />
      <PatreonSection />
      <Footer />
    </>
  );
}
