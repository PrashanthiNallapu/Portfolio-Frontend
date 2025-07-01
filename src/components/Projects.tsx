import React from 'react';
import { ExternalLink, Github, Zap } from 'lucide-react';
import JewelleryImage from "./jewellery.png";
import portfolio from "./portfolio.png";
import jewellerywebsite from "./jewellerywebsite.png";
import facultymanagement from "./facultymanagement.png";
import studentmanagement from "./studentmanagement.png";
import adminmanagement from "./adminmanagement.png";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: ' Jewellery Mobile App',
      description: 'A full-stack e-commerce solution for jewellery with React Native, Node.js, and MongoDB. Features include user authentication, payment processing, inventory management.',
     image: JewelleryImage,
      technologies: ['React Native', 'Node.js', 'MongoDB', 'Razorpay'],
      liveUrl: 'https://play.google.com/store/apps/details?id=com.vishwasritechnologies.vishujewellery',
      githubUrl: '#',
      featured: true
    },
    {
      id: 2,
      title: 'Portfolio Website',
      description: 'A responsive portfolio website built with React, featuring smooth animations, optimized performance, and modern design.',
      image: portfolio,
      technologies: ['React', 'Node js', 'MongoDB', 'Express'],
      liveUrl: 'https://vishcom.net/',
      githubUrl: '#',
      featured: true
    },
    {
      id: 3,
      title: 'Responsive Jewellery Website',
      description: 'A fully responsive jewellery website showcasing elegant designs with seamless user experience across all devices.',
      image: jewellerywebsite,
      technologies: ['React','Node.js','Express','Mongo DB'],
      liveUrl: 'https://srilaxmibhagavan.vishcom.net/',
      githubUrl: '#',
      featured: false
    },
    {
      id: 4,
      title: 'Faculty Management App',
      description: 'A comprehensive  mobile application for managing faculty profiles, schedules, and academic records efficiently.',
      image: facultymanagement,
      technologies: ['React Native','Node.js', 'Express'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    },
    {
      id: 5,
      title: 'Student Management App',
      description: 'A comprehensive student management app for efficiently handling student profiles, attendance, academics, and performance tracking.',
      image: studentmanagement,
      technologies: ['React Native','Node.js', 'Express'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    },
    {
      id: 6,
      title: 'Admin Desktop Application',
      description: 'A powerful admin desktop application for managing users, data, and system operations with a user-friendly interface.',
      image: adminmanagement,
      technologies: ['React Native for windows','Node.js', 'Express'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    },
   
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A showcase of my recent work and personal projects that demonstrate my skills and passion for development
          </p>
        </div>

        {/* Featured Projects */}
        <div className="space-y-20 mb-20">
          {featuredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="w-full h-96 overflow-hidden hover:overflow-auto">
  <img
    src={project.image}
    alt={project.title}
    className="object-contain"
  />


                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Zap className="text-white" size={24} />
                  </div>
                </div>
              </div>

              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="space-y-4">
                  <h3 className="text-3xl font-bold text-gray-900">{project.title}</h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-3">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.liveUrl}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200"
                  >
                    <ExternalLink size={18} />
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    className="inline-flex items-center gap-2 px-6 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:border-gray-400 hover:bg-gray-50 transition-all duration-200"
                  >
                    <Github size={18} />
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects Grid */}
        <div>
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Other Notable Projects
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherProjects.map((project) => (
              <div
                key={project.id}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
              >
               <div className="relative h-64 overflow-y-auto">
  <img
    src={project.image}
    alt={project.title}
    className="w-full object-contain"
  />
  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
</div>

                
                <div className="p-6 space-y-4">
                  <h4 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                    {project.title}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-3 py-1 bg-gray-100 text-gray-500 rounded-full text-xs font-medium">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                  
                  <div className="flex gap-3 pt-2">
                    <a
                      href={project.liveUrl}
                      className="flex items-center gap-1 text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors duration-200"
                    >
                      <ExternalLink size={14} />
                      Live Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      className="flex items-center gap-1 text-gray-600 hover:text-gray-700 font-medium text-sm transition-colors duration-200"
                    >
                      <Github size={14} />
                      Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;