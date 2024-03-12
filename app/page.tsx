import AboutMeComponent from "@/components/AboutMeComponent";
import ContactSection from "@/components/ContactSection";
import HomeSection from "@/components/HomeSection";
import LatestProjects from "@/components/LatestProjects";
import Navbar from "@/components/Navbar";


export default function Home() {
  return (
    <main className="flex flex-col items-center space-y-32 px-10 max-w-7xl mx-auto">
      <HomeSection />

      <AboutMeComponent />

      <LatestProjects />

      <ContactSection />

      <Navbar />
    </main>
  );
}
