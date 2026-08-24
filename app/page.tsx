import Navbar from "@/components/navbar";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Projects } from "@/components/projects";
import { Skills } from "@/components/skills";
import { Experience } from "@/components/experience";
import { Certifications } from "@/components/certifications";
import { DSAJourney } from "@/components/dsa-journey";
import { CurrentlyLearning } from "@/components/currently-learning";
import { LearningLab } from "@/components/learning-lab";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { ScrollProgress } from "@/components/scroll-progress";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground pt-16">
      <a
        href="#hero"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-accent focus:text-white focus:rounded-md"
      >
        Skip to main content
      </a>
      <ScrollProgress />
      <Navbar />
      <main id="main-content" role="main">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Certifications />
        <DSAJourney />
        <CurrentlyLearning />
        <LearningLab />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
