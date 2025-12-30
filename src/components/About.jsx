import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="py-24 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100"
    >
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-4xl font-bold mb-8"
        >
          About Me
        </motion.h2>

        {/* Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-lg leading-relaxed mb-10 opacity-90"
        >
          I’m a Frontend Web Developer specializing in React.js and modern UI
          development. I build fast, responsive, and visually engaging web
          applications with clean code and great user experience.
        </motion.p>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4"
        >
          {["React", "Redux", "Next.js", "JavaScript", "Tailwind CSS", "Vite"].map(
            (skill, index) => (
              <span
                key={index}
                className="px-5 py-2 rounded-full bg-white dark:bg-gray-800 shadow-md text-sm font-medium"
              >
                {skill}
              </span>
            )
          )}
        </motion.div>
      </div>
    </section>
  );
}
