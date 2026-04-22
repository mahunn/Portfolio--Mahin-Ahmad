import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="min-h-screen py-24 flex items-center">
      <div className="max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 flex items-center gap-4">
            <span className="text-primary font-mono text-xl">01.</span> About Me
            <div className="h-px bg-gray-700 flex-grow max-w-xs ml-4"></div>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-gray-400 text-lg leading-relaxed">
            <div className="space-y-6">
              <p>
                Hello! My name is Mahin Ahmad. I am a Computer Science and Engineering (CSE) student
                with a strong foundation in software development and logical problem-solving.
              </p>
              <p>
                Over the past year, I have focused intensively on web development, building scalable, responsive,
                and high-performing web applications. I strive to adhere to industry best practices, clean architecture,
                and formalized coding standards in all my projects.
              </p>
              <p>
                Beyond traditional web development, I have a deep and growing interest in Artificial Intelligence and
                Machine Learning. My academic and personal research currently involves exploring how intelligent systems
                can be seamlessly integrated into modern web infrastructure to create more dynamic user experiences.
              </p>
            </div>

            <div>
              <p className="mb-4">Here are a few technologies I've been working with recently:</p>
              <ul className="grid grid-cols-2 gap-2 font-mono text-sm">
                <li className="flex items-center gap-2"><span className="text-primary">▹</span> JavaScript (ES6+)</li>
                <li className="flex items-center gap-2"><span className="text-primary">▹</span> React</li>
                <li className="flex items-center gap-2"><span className="text-primary">▹</span> Node.js</li>
                <li className="flex items-center gap-2"><span className="text-primary">▹</span> TailwindCSS</li>
                <li className="flex items-center gap-2"><span className="text-primary">▹</span> C++</li>
                <li className="flex items-center gap-2"><span className="text-primary">▹</span> Java</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
