import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Trading Journal App",
    description:
      "A React-based trading journal to track trades, performance, and analytics.",
    tech: "React, Redux, Tailwind",
    github: "https://github.com/Moheen-Shah",
    demo: "#",
  },
  {
    title: "Gold Price Tracker",
    description:
      "Live gold price tracking dashboard with clean UI and API integration.",
    tech: "React, API, Tailwind",
    github: "https://github.com/Moheen-Shah",
    demo: "#",
  },
  {
    title: "Landing Page UI",
    description:
      "High-conversion landing page with modern animations and responsive layout.",
    tech: "React, Tailwind",
    github: "https://github.com/Moheen-Shah",
    demo: "#",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-24 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-16"
        >
          Selected Projects
        </motion.h2>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="perspective-[1000px]"
            >
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{
                  rotateX: 8,
                  rotateY: -8,
                  scale: 1.05,
                }}
                className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 shadow-xl transform-gpu transition-all duration-300"
              >
                {/* Project Title */}
                <h3 className="text-2xl font-semibold mb-3">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-sm opacity-80 mb-4">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <p className="text-xs font-mono mb-6 opacity-70">
                  {project.tech}
                </p>

                {/* Buttons */}
                <div className="flex gap-4">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition"
                  >
                    <FaExternalLinkAlt />
                    Demo
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-900 text-white hover:bg-black transition"
                  >
                    <FaGithub />
                    GitHub
                  </a>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
