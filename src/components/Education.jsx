export default function Education() {
  return (
    <section id="education" className="relative min-h-screen pt-24 flex flex-col items-center justify-center
      bg-gray-100 dark:bg-gray-900 transition-colors duration-500">
      
      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto px-6 w-full">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-gray-100 mb-12">
          Education & Experience
        </h2>

        <div className="space-y-6 text-gray-900 dark:text-gray-100">
          {/* Degree / Certification */}
          <div className="space-y-2">
            <h3 className="text-2xl font-semibold">Degree / Certification</h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-2">
              BS Computer Science, Session SP21-FA25
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              COMSATS University Islamabad, Abbottabad Campus
            </p>
          </div>

          {/* Job / Freelance */}
          <div className="space-y-2">
            <h3 className="text-2xl font-semibold">Job / Freelance</h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Frontend Developer (Independent contractor) in CrowdGen 18/March/2024 - Present
            </p> 
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Full stack developer (Freelance) on Fiverr 3/12/2023 - Present
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Full stack developer in Airacadamia as intern for my FYP March/24 to Feb/25
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
