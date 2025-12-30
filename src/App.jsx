import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Education from "./components/Education";


function App() {
  return (

    <div className="font-sans text-gray-800 dark:text-gray-100">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Services />
      <Skills />
      <Education />
      <Contact />
    </div>

  );
}

export default App;
