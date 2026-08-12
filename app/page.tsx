import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Clients from "@/components/sections/Clients";
import Community from "@/components/sections/Community";
import Features from "@/components/sections/Features";
import Stats from "@/components/sections/Stats";
import Testimonial from "@/components/sections/Testimonial";
import Blog from "@/components/sections/Blog";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/layout/Footer";
import { featuresData } from "@/data/features";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <Clients />

        <Community />

        <Features feature={featuresData.first} />

        <Stats />

        <Features feature={featuresData.second} />

        <Testimonial />

        <Blog />

        <CTA />
      </main>

      <Footer />
    </>
  );
}
