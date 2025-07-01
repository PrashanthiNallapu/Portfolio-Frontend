import React from 'react';
import { Code2, Palette, Zap, Heart } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and efficient code that stands the test of time.'
    },
    {
      icon: Palette,
      title: 'Creative Design',
      description: 'Blending aesthetics with functionality to create beautiful user experiences.'
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'Optimizing applications for speed, accessibility, and seamless user interaction.'
    },
    {
      icon: Heart,
      title: 'Passion',
      description: 'Genuinely passionate about technology and its power to solve real-world problems.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
         <p className="text-xl text-gray-600 max-w-3xl mx-auto">
  I'm a dedicated frontend developer focused on transforming complex challenges into clean, efficient, and visually appealing user interfaces.
</p>

        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/3182765/pexels-photo-3182765.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Working on code"
                className="w-full h-96 object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-6 rounded-2xl shadow-xl">
              <p className="text-2xl font-bold">1</p>
              <p className="text-sm">Year Experience</p>
            </div>
          </div>

          {/* Content */}
         <div className="space-y-6">
  <h3 className="text-3xl font-bold text-gray-900">
    Crafting Engaging Frontend Experiences
  </h3>
  <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
    <p>
      With a strong focus on frontend development, I specialize in building responsive, accessible, and visually compelling web interfaces. My journey began with a passion for design and interactivity, which naturally evolved into a deep interest in modern web technologies.
    </p>
    <p>
      I take pride in writing clean, maintainable code and translating UI/UX designs into pixel-perfect user experiences. Whether developing reusable components in React or optimizing performance for production, I strive to deliver seamless and user-friendly applications.
    </p>
    <p>
      Outside of coding, I enjoy staying up to date with the latest frontend trends, experimenting with new frameworks, and contributing to the developer community through open-source projects and mentorship.
    </p>
  </div>


            
            <div className="flex flex-wrap gap-3 pt-4">
              {[ 'JavaScript', 'React','React Native', 'MySQL','Bootstrap'].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Highlights */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="group text-center p-8 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-lg transition-all duration-300 border border-transparent hover:border-gray-200"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-full mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                <Icon size={28} />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">{title}</h4>
              <p className="text-gray-600">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;