import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedinIn } from "react-icons/fa";
import { SiFiverr } from "react-icons/si";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 bg-gray-100 dark:bg-gray-900 transition-colors duration-500"
    >
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start"
        >
          {/* LEFT: Text + Icons */}
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
              Let’s Work Together
            </h2>

            <p className="text-gray-600 dark:text-gray-400 mb-10 max-w-md">
              Have a project in mind or need a modern React frontend?
              Reach out through the form or connect with me directly.
            </p>

            <div className="flex gap-6">
              {/* Gmail */}
              <a
                href="mailto:moheenshahtrimzi@gmail.com"
                aria-label="Email"
                className="p-4 rounded-xl bg-white dark:bg-gray-800
                  border border-gray-200 dark:border-gray-700
                  text-gray-700 dark:text-gray-300
                  hover:text-indigo-600 dark:hover:text-indigo-400
                  transition"
              >
                <FaEnvelope size={22} />
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/syed-moin-shah-397b50247/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-4 rounded-xl bg-white dark:bg-gray-800
                  border border-gray-200 dark:border-gray-700
                  text-gray-700 dark:text-gray-300
                  hover:text-indigo-600 dark:hover:text-indigo-400
                  transition"
              >
                <FaLinkedinIn size={22} />
              </a>

              {/* Fiverr */}
              <a
                href="https://www.fiverr.com/moheenshah/do-front-end-of-your-website-with-html-css-javascript"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Fiverr"
                className="p-4 rounded-xl bg-white dark:bg-gray-800
                  border border-gray-200 dark:border-gray-700
                  text-gray-700 dark:text-gray-300
                  hover:text-indigo-600 dark:hover:text-indigo-400
                  transition"
              >
                <SiFiverr size={22} />
              </a>
            </div>
          </div>

          {/* RIGHT: Contact Form */}
          <form
            className="bg-white dark:bg-gray-800
              border border-gray-200 dark:border-gray-700
              rounded-2xl p-8 shadow-sm"
          >
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Name
              </label>
              <input
                type="text"
                required
                className="w-full px-4 py-3 rounded-lg
                  bg-gray-50 dark:bg-gray-900
                  border border-gray-300 dark:border-gray-700
                  text-gray-900 dark:text-gray-100
                  focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Email
              </label>
              <input
                type="email"
                required
                className="w-full px-4 py-3 rounded-lg
                  bg-gray-50 dark:bg-gray-900
                  border border-gray-300 dark:border-gray-700
                  text-gray-900 dark:text-gray-100
                  focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div className="mb-8">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Message
              </label>
              <textarea
                rows="4"
                required
                className="w-full px-4 py-3 rounded-lg
                  bg-gray-50 dark:bg-gray-900
                  border border-gray-300 dark:border-gray-700
                  text-gray-900 dark:text-gray-100
                  focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-lg font-medium
                bg-indigo-600 text-white
                hover:bg-indigo-700 transition"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
