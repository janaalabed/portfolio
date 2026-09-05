import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Contact from "./components/sections/Contact";
import Footer from "./components/layout/Footer";
import Experience from "./components/sections/Experience";
import Project from "./components/sections/Project";

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
        <Project />
      </div>
    </>
  );
}
