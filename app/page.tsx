import "./globals.css"
import TopBar from "@/components/TopBar"
import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import About from "@/components/About"
import Services from "@/components/Services"
import Gallery from "@/components/Gallery"
import PoliciesContent from "@/components/PoliciesContent"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"
export default function Home() {
  return (
    <>
      <TopBar />
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Gallery />
      <PoliciesContent />
      <Contact />
      <Footer />
    </>
  );
}
