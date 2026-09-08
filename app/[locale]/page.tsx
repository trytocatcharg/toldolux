import { Navbar } from "@/components/Navbar";
import { Hero } from "@/sections/Hero";
import { Services } from "@/sections/Services";
import { Products } from "@/sections/Products";
import { Gallery } from "@/sections/Gallery";
import { Reviews } from "@/sections/Reviews";
import { Contact } from "@/sections/Contact";
import { Footer } from "@/sections/Footer";
import { JsonLd } from "@/components/JsonLd";
import { CallNowButton } from "@/components/CallNowButton";

export default function Home() {
  return (
    <>
      <JsonLd />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Products />
        <Gallery />
        <Reviews />
        <Contact />
      </main>
      <Footer />
      <CallNowButton />
    </>
  );
}
