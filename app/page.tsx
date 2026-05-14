import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Manifesto from "@/components/Manifesto";
import StorySequence from "@/components/StorySequence";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import IntroScreen from "@/components/IntroScreen";

export default function Home() {
  return (
    <main>
      <IntroScreen />
      <Navbar />
      <Hero />
      <Manifesto />
      <StorySequence />
      <Projects />
      <Testimonials />
      <FAQ />
      <Footer />
    </main>
  );
}
