import Navbar from "../components/portfolio/Navbar";
import HeroSection from "../components/portfolio/HeroSection";
import AboutSection from "../components/portfolio/AboutSection";
import EducationSection from "../components/portfolio/EducationSection";
import ExperienceSection from "../components/portfolio/ExperienceSection";
import ProjectsSection from "../components/portfolio/ProjectsSection";
import SkillsSection from "../components/portfolio/SkillsSection";
import CertificatesSection from "../components/portfolio/CertificatesSection";
import CoursesSection from "../components/portfolio/CoursesSection";
import LanguagesSection from "../components/portfolio/LanguagesSection";
import PublicationSection from "../components/portfolio/PublicationSection";
import Footer from "../components/portfolio/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-body">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <EducationSection />
      <ExperienceSection />
      <ProjectsSection />
      <PublicationSection />
      <CertificatesSection />
      <CoursesSection />
      <SkillsSection />
      <LanguagesSection />
      <Footer />
    </div>
  );
}