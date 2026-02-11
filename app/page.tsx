import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import OpenSource from "@/components/OpenSource";
import Projects from "@/components/Projects";
import CodingProfiles from "@/components/CodingProfiles";
import GitHubStats from "@/components/GitHubStats";
import Sidebar from "@/components/Sidebar";
import MobileNavbar from "@/components/MobileNavbar";
import SocialLinks from "@/components/SocialLinks";
import BackgroundEffects from "@/components/BackgroundEffects";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import ScrollToTop from "@/components/ScrollToTop";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground relative selection:bg-primary/30">
      <BackgroundEffects />
      <Sidebar />
      <MobileNavbar />
      <SocialLinks />

      <PageTransition>
        <div className="px-4 lg:pl-20 lg:pr-20 relative z-20"> {/* Add padding to account for fixed sidebars */}
          <Hero />
          <About />
          <Skills />
          <OpenSource />
          <Projects />
          <CodingProfiles />
          <GitHubStats />
        </div>

        <Footer />
        <ScrollToTop />
      </PageTransition>

      {/* Background radial gradient spotlight following mouse could be added here */}
    </main>
  );
}
