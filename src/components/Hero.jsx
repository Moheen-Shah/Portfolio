import { motion } from "framer-motion";
import profileImg from "../assets/profile.png";

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-24 md:pt-0
  flex items-center justify-center overflow-hidden
  bg-gray-100 dark:bg-gray-900 transition-colors duration-500">
      
      {/* Animated gradient background */}
      <div className="absolute inset-0">
        <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full 
          bg-indigo-500/30 dark:bg-indigo-400/20 blur-3xl animate-pulse" />
        <div className="absolute top-1/3 -right-40 w-96 h-96 rounded-full 
          bg-pink-500/30 dark:bg-pink-400/20 blur-3xl animate-pulse" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center md:text-left text-gray-900 dark:text-gray-100"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
            Hi, I’m <span className="text-indigo-500">Moin Shah</span>
          </h1>

          <p className="text-xl md:text-2xl opacity-80 mb-8">
            Frontend Developer • React • Tailwind • Animations
          </p>

          <motion.a
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            href="#projects"
            className="inline-block px-8 py-4 rounded-xl font-semibold
              bg-indigo-600 text-white hover:bg-indigo-700 transition"
          >
            View My Work
          </motion.a>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex justify-center md:justify-end"
        >
          <motion.img
            src={profileImg}
  alt="Moin Shah"
  className="w-00 md:w-130 rounded-2xl bg-transparent"
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          />
        </motion.div>

      </div>
    </section>
  );
}
