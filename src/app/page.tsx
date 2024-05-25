import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import { Spotlight } from "./components/ui/Spotlight";
import { LampDemo } from "./components/ui/lamp";





export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
   <Spotlight/>
    <div className="hidden md:block">
   <HeroSection/>
  </div>

<div className="md:hidden">
  <LampDemo/>
</div>

   <Services/>
   <Footer/>
   </main>
  );
}
