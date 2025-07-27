import React from 'react';
import { Code, Database, Server, Users, Lightbulb, Brain } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: <Code className="w-8 h-8" />,
      skills: ['Java', 'Python', 'PHP'],
      color: 'bg-[#0077B6]'
    },
    {
      title: 'IT Skills',
      icon: <Server className="w-8 h-8" />,
      skills: ['Programming', 'Data Handling', 'System Maintenance'],
      color: 'bg-[#023e8a]'
    },
    {
      title: 'Soft Skills',
      icon: <Brain className="w-8 h-8" />,
      skills: ['Management', 'Creativity', 'Critical Thinking'],
      color: 'bg-[#03045E]'
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#03045E] mb-4 font-montserrat">
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-600 font-opensans max-w-2xl mx-auto">
            Technical proficiency combined with strong interpersonal skills
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
            >
              <div className={`${category.color} text-white w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto`}>
                {category.icon}
              </div>
              <h3 className="text-xl font-bold text-[#03045E] mb-6 text-center font-montserrat">
                {category.title}
              </h3>
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="bg-white px-4 py-3 rounded-lg shadow-sm border border-gray-100 text-center font-opensans font-medium text-gray-700 hover:bg-[#0077B6] hover:text-white transition-colors duration-300"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;