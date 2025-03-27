import LoadingScreen from '@/components/loading-screen';
import HomeSection from '@/components/sections/home';
import dynamic from 'next/dynamic';

const AboutSection = dynamic(() => import('@/components/sections/about'), {
  ssr: false,
});
const ProjectsSection = dynamic(
  () => import('@/components/sections/projects'),
  { ssr: false }
);
const Technologies = dynamic(
  () => import('@/components/sections/technologies'),
  { ssr: false }
);
const ContactSection = dynamic(() => import('@/components/sections/contact'), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      {/* loading screen */}
      <LoadingScreen />
      {/* page sections */}
      <HomeSection />
      <AboutSection />
      <ProjectsSection />
      <Technologies />
      <ContactSection />
    </>
  );
}
