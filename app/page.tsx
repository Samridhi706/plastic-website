import Image from "next/image";
import Herosection from "./components/Herosection";
import ContactSection from "./components/ContactSection";
import AboutUs from "./components/AboutUs";
import Products from "./components/Products";


export default function Home() {
  return (
    <>
    <Herosection />
    <Products />
    <section
        id="about-us"
        className="scroll-mt-28"
      >
        <AboutUs />
      </section>
   <section id="contact-us" className="scroll-mt-28">
      <ContactSection />
   </section> 
   

    
    </>
  );
}
