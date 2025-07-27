import React from 'react';
import { Github, ExternalLink, Database, Code } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Pet Care System',
      description: 'Comprehensive pet management system with appointment scheduling, medical records, and owner management features.',
      technologies: ['Java', 'MySQL'],
      icon: <Database className="w-6 h-6" />,
      githubUrl: 'https://github.com'
    },
    {
      title: 'Hospital Management System',
      description: 'Desktop application for managing hospital operations including patient records, staff management, and inventory.',
      technologies: ['Java', 'MySQL'],
      icon: <Code className="w-6 h-6" />,
      githubUrl: 'https://github.com'
    },
    {
      title: 'Hospital Management Website',
      description: 'Web-based solution for hospital management with responsive design and user-friendly interface.',
      technologies: ['PHP', 'HTML', 'CSS'],
      icon: <ExternalLink className="w-6 h-6" />,
      githubUrl: 'https://github.com'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#03045E] mb-4 font-montserrat">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 font-opensans max-w-2xl mx-auto">
            Practical solutions built with modern technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 border border-gray-100 overflow-hidden group"
            >
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="bg-[#0077B6] text-white w-12 h-12 rounded-full flex items-center justify-center group-hover:bg-[#023e8a] transition-colors duration-300">
                    {project.icon}
                  </div>
                  <a
                    href={project.githubUrl}
                    className="text-gray-400 hover:text-[#0077B6] transition-colors duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={24} />
                  </a>
                </div>
                
                <h3 className="text-xl font-bold text-[#03045E] mb-4 font-montserrat">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 mb-6 font-opensans leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-opensans font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-[#0077B6] text-white px-6 py-3 rounded-lg hover:bg-[#023e8a] transition-colors duration-300 font-opensans font-medium"
                >
                  <Github size={16} />
                  <span>View Code</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;