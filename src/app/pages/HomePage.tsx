import { Navigation } from "../components/Navigation";
import { Hero } from "../components/Hero";
import { WhoItsFor } from "../components/WhoItsFor";
import { Services } from "../components/Services";
import { WhyCommendatori } from "../components/WhyCommendatori";
import { CaseStudies } from "../components/CaseStudies";
import { BlogPreview } from "../components/BlogPreview";
import { FinalCTA } from "../components/FinalCTA";
import { Footer } from "../components/Footer";

export function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <Navigation />
      <Hero />
      <WhoItsFor />
      <Services />
      <WhyCommendatori />
      <BlogPreview />
      <FinalCTA />
      <Footer />
    </div>
  );
}
