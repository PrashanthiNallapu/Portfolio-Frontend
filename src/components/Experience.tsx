
import React from 'react';
import { Calendar, MapPin, Briefcase } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: 'Software Developer',
      company: 'Vishwasri Technologies PVT.LTD',
      location: 'Hyderabad',
      period: 'Nov 2024 - Present',
      type: 'Full-time',
      description:
        'Worked on developing responsive and user-centric web and mobile applications. Collaborated with cross-functional teams to build intuitive UI components using React and React Native. Contributed to performance optimization and improved UI consistency across platforms.',
      achievements: [
        'Developed and maintained responsive websites including a Jewellery eCommerce platform and admin dashboard',
        'Built a mobile application from scratch using React Native, ensuring smooth cross-platform performance',
        'Integrated REST APIs and enhanced front-end performance through code splitting and lazy loading',
      ],
      technologies: ['React', 'React Native', 'JavaScript', 'Bootstrap'],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Work Experience
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            My journey through different roles and companies, building experience and expertise.
          </p>
        </div>

        {/* Experience Cards */}
        <div className="space-y-12">
          {experiences.map((exp) => (
            <div key={exp.id} className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg border border-gray-100 transition-shadow duration-300">
              {/* Header */}
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-2">
                  <Briefcase className="text-blue-600" size={20} />
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                    {exp.type}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-2">{exp.title}</h3>

                <div className="space-y-2 text-gray-600">
                  <p className="text-lg font-semibold text-blue-600">{exp.company}</p>
                  <div className="flex flex-wrap items-center gap-4 text-sm">
                    <div className="flex items-center gap-1">
                      <Calendar size={16} />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin size={16} />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-700 mb-6 leading-relaxed">{exp.description}</p>

              {/* Achievements */}
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">Key Achievements:</h4>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Technologies Used:</h4>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-blue-50 hover:text-blue-700 transition-colors duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-md border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Interested in working together?
            </h3>
            <p className="text-gray-600 mb-6">
              I'm always open to discussing new opportunities and exciting projects.
            </p>
            <button
              onClick={() =>
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
              }
              className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition duration-200 transform hover:scale-105"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
