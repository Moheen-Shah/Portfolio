export default function Skills() {
  const skills = {
    Frontend: ["React", "Tailwind", "Vite"],
    Backend: ["Node.js", "Express"],
    Tools: ["Git", "Figma", "VS Code"]
  };

  return (
    <section id="skills" className="relative min-h-screen pt-24 flex flex-col items-center justify-center
      bg-gray-100 dark:bg-gray-900 transition-colors duration-500">
      
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-gray-100 mb-12">Skills</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {Object.entries(skills).map(([group, list], idx) => (
            <div key={idx} className="bg-white/10 p-6 rounded-lg text-center text-gray-900 dark:text-gray-100">
              <h3 className="text-2xl font-semibold mb-4">{group}</h3>
              <ul className="space-y-2">
                {list.map((skill, i) => <li key={i}>{skill}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
