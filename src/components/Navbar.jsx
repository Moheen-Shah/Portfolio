import { Link } from 'react-scroll';
import React, { useState, useEffect } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

export default function Navbar() {
  const [dark, setDark] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");

    if (storedTheme === "light") {
      document.documentElement.classList.remove("dark");
      setDark(false);
    } else {
      document.documentElement.classList.add("dark");
      setDark(true);
    }

    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleDark = () => {
    if (dark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
    setDark(!dark);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full h-16 z-50 transition-all duration-300
        ${scrolled
          ? "backdrop-blur bg-white/70 dark:bg-gray-900/70 shadow"
          : "bg-transparent"
        }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-gray-900 dark:text-gray-100">
          Moin Shah
        </h1>
        <div className="flex items-center space-x-4">
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-blue-500 dark:hover:text-blue-400 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            About
          </Link>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-blue-500 dark:hover:text-blue-400 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            Projects
          </Link>
          <Link
            to="skills"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-blue-500 dark:hover:text-blue-400 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            Skills
          </Link>
          <Link
            to="education"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-blue-500 dark:hover:text-blue-400 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            Education
          </Link>
          <Link
            to="services"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-blue-500 dark:hover:text-blue-400 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            Services
          </Link>
          <Link 
            to="contact"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-blue-500 dark:hover:text-blue-400 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            Contact
          </Link>
          <button
            onClick={toggleDark}
            className="ml-4 p-2 rounded bg-gray-200 dark:bg-gray-700 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            {dark ? <FaSun /> : <FaMoon />}
          </button>
        </div>
      </div>
    </nav>
  );
}
