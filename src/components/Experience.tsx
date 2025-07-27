import React from 'react';
import { GraduationCap, Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
  const timeline = [
    {
      type: 'education',
      title: 'HND in Information Technology',
      organization: 'SLIATE Tangalle',
      period: '2023 - Present',
      description: 'Higher National Diploma in Information Technology with focus on software development and system design.',
      icon: <GraduationCap className="w-5 h-5" />
    },
    {
      type: 'certification',
      title: 'NVQ Level 4 - Computer Hardware Technician',
      organization: 'National Vocational Qualification',
      period: '2022',
      description: 'Professional certification in computer hardware maintenance and troubleshooting.',
      icon: <GraduationCap className="w-5 h-5" />
    },
    {
      type: 'experience',
      title: 'Trainee - ICT Department',
      organization: 'Zahira College',
      period: '4 months',
      description: 'Hands-on experience in system maintenance, network administration, and technical support.',
      icon: <Briefcase className="w-5 h-5" />
    },
    {
      type: 'experience',
      title: 'Trainee - Administration Department',
      organization: 'Government Office',
      period: '2 months',
      description: 'Administrative support and data management experience in government sector.',
      icon: <Briefcase className="w-5 h-5" />
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#03045E] mb-4 font-montserrat">
            Experience & Education
          </h2>
          <p className="text-xl text-gray-600 font-opensans max-w-2xl mx-auto">
            Academic achievements and professional development journey
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#0077B6] to-[#023e8a]"></div>
          
          <div className="space-y-12">
            {timeline.map((item, index) => (
              <div key={index} className="relative flex items-start">
                {/* Timeline dot */}
                <div className={`absolute left-6 w-5 h-5 rounded-full border-4 border-white shadow-lg ${
                  item.type === 'education' ? 'bg-[#0077B6]' : 'bg-[#023e8a]'
                }`}></div>
                
                {/* Content */}
                <div className="ml-20 bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className={`${
                        item.type === 'education' ? 'bg-[#0077B6]' : 'bg-[#023e8a]'
                      } text-white p-2 rounded-lg`}>
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-[#03045E] font-montserrat">
                          {item.title}
                        </h3>
                        <p className="text-[#0077B6] font-opensans font-semibold">
                          {item.organization}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1 text-gray-500 font-opensans text-sm">
                      <Calendar size={14} />
                      <span>{item.period}</span>
                    </div>
                  </div>
                  <p className="text-gray-700 font-opensans leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;