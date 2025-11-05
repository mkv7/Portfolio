'use client';

import { useState } from 'react';

const skillsData = [
  { category: 'Frontend', skills: [
    { name: 'React/Next.js', level: 70 },
    { name: 'TypeScript', level: 90 },
    { name: 'Tailwind CSS', level: 70 },
    { name: 'HTML/CSS', level: 95 },
  ]},
  { category: 'Backend', skills: [
    { name: 'Node.js', level: 50 },
    { name: 'Python', level: 90 },
    { name: 'PostgreSQL', level: 50 },
    { name: 'MongoDB', level: 30 },
  ]},
  { category: 'Tools & Others', skills: [
    { name: 'Git/GitHub', level: 90 },
    { name: 'Scala', level: 70 },
    { name: 'C/C++', level: 60 },
    { name: 'CI/CD', level: 50 },
  ]},
];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section id="skills" className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Skills & Expertise
        </h2>
        
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {skillsData.map((category, index) => (
            <button
              key={category.category}
              onClick={() => setActiveCategory(index)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                activeCategory === index
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600'
              }`}
            >
              {category.category}
            </button>
          ))}
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {skillsData[activeCategory].skills.map((skill) => (
            <div key={skill.name} className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
              <div className="flex justify-between mb-2">
                <span className="font-semibold text-gray-900 dark:text-white">{skill.name}</span>
                <span className="text-blue-600 font-semibold">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-3">
                <div
                  className="bg-gradient-to-r from-blue-500 to-purple-600 h-3 rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
