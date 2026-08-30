import { Navbar } from "@/components/Navbar";
import { Hero } from "@/sections/Hero";
import { Services } from "@/sections/Services";
import { Gallery } from "@/sections/Gallery";
import { Footer } from "@/sections/Footer";
import { JsonLd } from "@/components/JsonLd";

export default function Home() {
  return (
    <>
      <JsonLd />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Gallery />
      </main>
      <Footer />
    </>
  );
}
