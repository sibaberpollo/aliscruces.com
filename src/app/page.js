import MainBanner from '@/components/MainBanner';
import WelcomeSection from '@/components/WelcomeSection';
import PatreonSection from '@/components/FeaturedCourses';

export default function Home() {
  return (
    <>
      <MainBanner />
      <WelcomeSection />
      <PatreonSection />
    </>
  );
}
