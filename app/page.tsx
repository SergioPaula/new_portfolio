import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Manifesto from "@/components/Manifesto";
import StorySequence from "@/components/StorySequence";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
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
