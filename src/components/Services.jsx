import React from "react";
import { motion } from "framer-motion";

const services = [
  "React Web Application Development",
  "Interactive Dashboards",
  "Landing Pages / UI Redesign",
  "API Integration",
];

export default function Services() {
  return (
    <section
      id="services"
      className="py-20 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 text-center"
    >
      <h2 className="text-3xl font-bold mb-10">Services</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="bg-white dark:bg-gray-800 p-6 rounded shadow w-64 hover:shadow-lg transform hover:-translate-y-1 transition duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            {service}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
