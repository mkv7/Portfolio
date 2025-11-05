'use client';

import { useState } from 'react';

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.',
    technologies: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL'],
    category: 'Full-Stack',
    image: '🛍️',
    link: '#',
    github: '#'
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'Collaborative task management tool with real-time updates and team collaboration features.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
    category: 'Full-Stack',
    image: '📋',
    link: '#',
    github: '#'
  },
  {
    id: 3,
    title: 'AI Content Generator',
    description: 'AI-powered content generation tool using OpenAI API for marketing and creative writing.',
    technologies: ['Next.js', 'OpenAI API', 'Tailwind'],
    category: 'Frontend',
    image: '🤖',
    link: '#',
    github: '#'
  },
  {
    id: 4,
    title: 'Analytics Dashboard',
    description: 'Real-time analytics dashboard with interactive charts and data visualization.',
    technologies: ['React', 'D3.js', 'Python', 'FastAPI'],
    category: 'Full-Stack',
    image: '📊',
    link: '#',
    github: '#'
  },
  {
    id: 5,
    title: 'Social Media App',
    description: 'Social networking platform with posts, messaging, and user interactions.',
    technologies: ['Next.js', 'PostgreSQL', 'Redis', 'AWS'],
    category: 'Full-Stack',
    image: '💬',
    link: '#',
    github: '#'
  },
  {
    id: 6,
    title: 'Portfolio Builder',
    description: 'Drag-and-drop portfolio builder with customizable templates and themes.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS'],
    category: 'Frontend',
    image: '🎨',
    link: '#',
    github: '#'
  },
];

const categories = ['All', 'Full-Stack', 'Frontend', 'Backend'];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 px-4 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900 dark:text-white">
          Featured Projects
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects that showcase my skills and expertise
        </p>
        
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-200 ${
                activeFilter === category
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-8xl">
                {project.image}
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <a
                    href={project.link}
                    className="flex-1 text-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.github}
                    className="flex-1 text-center px-4 py-2 border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
