
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

export default function Portfolio() {
  return (
    <>
      <div section="Hero">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Contact/>
      </div>
    </>
  );
}
