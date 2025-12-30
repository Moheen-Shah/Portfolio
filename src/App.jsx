import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Contact from "./components/Contact";

function App() {
  return (

    <div className="font-sans text-gray-800 dark:text-gray-100">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Services />
      <Contact />
    </div>

  );
}

export default App;
