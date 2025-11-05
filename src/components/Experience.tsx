const experiences = [
  {
    id: 1,
    company: 'Reila Palvelut',
    position: 'Control Room operator / Security Guard',
    period: '2020 - Present',
    description: 'Working in difficult environment, collaborating with authorities in case of burgulary, hazardous event and other emergency situations.',
    technologies: ['MS Office']
  },
  {
    id: 2,
    company: 'Demande',
    position: 'Promoter',
    period: '2019 - Present',
    description: 'Customer service and event planner.',
    technologies: []
  },
  {
    id: 3,
    company: 'AAA - Palvelut',
    position: 'Seller',
    period: '2016',
    description: 'Selling products to customers',
    technologies: []
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Work Experience
        </h2>
        
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-blue-600"></div>
          
          {experiences.map((exp, index) => (
            <div key={exp.id} className={`relative mb-12 ${index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2 md:ml-auto'}`}>
              {/* Timeline Dot */}
              <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-blue-600 rounded-full transform -translate-x-1/2 border-4 border-white dark:border-gray-800"></div>
              
              <div className={`ml-16 md:ml-0 ${index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'}`}>
                <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg">
                  <div className="text-sm text-blue-600 font-semibold mb-2">{exp.period}</div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{exp.position}</h3>
                  <div className="text-gray-600 dark:text-gray-300 font-semibold mb-3">{exp.company}</div>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">{exp.description}</p>
                  
                  {exp.technologies && exp.technologies.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 text-sm rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
