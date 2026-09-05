import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Experience from "./components/Experience";

export default function Portfolio() {
  return (
    <>
      <div>
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Contact />
        <Footer />
        <Experience />
      </div>
    </>
  );
}
