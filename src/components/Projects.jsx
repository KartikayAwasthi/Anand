import React, { useState } from "react";
import { motion } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Enterprise E-Commerce Platform",
    description: "Led development of a large-scale mobile commerce platform serving 100K+ users with complex inventory management and multi-vendor capabilities.",
    technologies: ["Flutter", "Dart", "Firebase", "Microservices", "Provider"],
    image: "/project1.svg",
    github: "https://github.com/anandbhasker",
    demo: "https://play.google.com/store",
    features: ["Multi-vendor Support", "Real-time Analytics", "Advanced Search", "Payment Integration"],
    role: "Technical Lead",
    teamSize: "8 developers"
  },
  {
    id: 2,
    title: "Internal Communication Hub",
    description: "Architected and developed enterprise communication platform for 500+ employees with real-time messaging, file sharing, and video conferencing.",
    technologies: ["Flutter", "Firebase", "WebRTC", "Node.js"],
    image: "/project2.svg",
    github: "https://github.com/anandbhasker",
    demo: "https://apps.apple.com",
    features: ["Real-time Messaging", "File Sharing", "Video Conferences", "Admin Dashboard"],
    role: "Senior Developer",
    teamSize: "6 developers"
  },
  {
    id: 3,
    title: "Healthcare Management System",
    description: "Developed HIPAA-compliant mobile application for healthcare providers with patient management, appointment scheduling, and secure messaging.",
    technologies: ["Flutter", "PostgreSQL", "AWS", "Redis"],
    image: "/project3.svg",
    github: "https://github.com/anandbhasker",
    demo: "https://play.google.com/store",
    features: ["HIPAA Compliance", "Appointment Booking", "Secure Messaging", "Patient Records"],
    role: "Mobile Developer",
    teamSize: "12 developers"
  },
  {
    id: 4,
    title: "Corporate Learning Platform",
    description: "Built scalable learning management system for employee training with interactive content, progress tracking, and certification management.",
    technologies: ["Flutter", "Node.js", "MongoDB", "AWS S3"],
    image: "/project4.svg",
    github: "https://github.com/anandbhasker",
    demo: "https://lms-demo.com",
    features: ["Video Streaming", "Interactive Quizzes", "Progress Analytics", "Certificates"],
    role: "Lead Developer",
    teamSize: "5 developers"
  }
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const projectVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-black via-gray-900 to-gray-800 text-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-teal-200 to-teal-400 bg-clip-text text-transparent">
            Professional Projects
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Enterprise-scale applications developed in collaborative team environments
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-2 gap-8"
        >
          {projectsData.map((project) => (
            <motion.div
              key={project.id}
              variants={projectVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 rounded-2xl overflow-hidden border border-gray-700 hover:border-teal-500/50 transition-all duration-500 backdrop-blur-sm group"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                <div className="absolute top-4 right-4 flex space-x-2">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 bg-gray-800/80 rounded-full text-white hover:bg-teal-500 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </motion.a>
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 bg-gray-800/80 rounded-full text-white hover:bg-blue-500 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </motion.a>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-teal-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Role and Team Info */}
                <div className="mb-4 flex justify-between items-center">
                  <div className="flex items-center space-x-4">
                    <div className="text-xs">
                      <span className="text-teal-400 font-semibold">Role: </span>
                      <span className="text-gray-300">{project.role}</span>
                    </div>
                    <div className="text-xs">
                      <span className="text-teal-400 font-semibold">Team: </span>
                      <span className="text-gray-300">{project.teamSize}</span>
                    </div>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-teal-400 mb-2">Key Features:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.features.map((feature, index) => (
                      <span
                        key={index}
                        className="text-xs px-2 py-1 bg-gray-700 rounded-full text-gray-300"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="text-xs px-3 py-1 bg-gradient-to-r from-teal-500/20 to-blue-500/20 border border-teal-500/30 rounded-full text-teal-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedProject(project)}
                    className="flex-1 py-2 px-4 bg-gradient-to-r from-teal-500 to-blue-500 text-white rounded-lg text-sm font-medium hover:from-teal-600 hover:to-blue-600 transition-all"
                  >
                    View Details
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-bold mb-4 text-teal-400">Interested in my work?</h3>
          <p className="text-gray-300 mb-6">
            These projects showcase my experience in enterprise development and team collaboration. Let's discuss how I can contribute to your organization.
          </p>
          <motion.a
            href="https://github.com/anandbhasker"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-3 bg-gradient-to-r from-gray-700 to-gray-800 border border-gray-600 hover:border-teal-500 rounded-full text-white transition-all duration-300"
          >
            View Professional Portfolio
          </motion.a>
        </motion.div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            className="bg-gray-800 rounded-2xl p-6 max-w-2xl w-full max-h-[80vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-2xl font-bold text-white">{selectedProject.title}</h3>
              <button
                onClick={() => setSelectedProject(null)}
                className="text-gray-400 hover:text-white text-2xl"
              >
                ×
              </button>
            </div>
            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <p className="text-gray-300 mb-4">{selectedProject.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {selectedProject.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-teal-500/20 border border-teal-500/30 rounded-full text-teal-300 text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex space-x-4">
              <a
                href={selectedProject.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2 px-4 bg-gray-700 text-center rounded-lg hover:bg-gray-600 transition"
              >
                View Code
              </a>
              <a
                href={selectedProject.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2 px-4 bg-teal-500 text-center rounded-lg hover:bg-teal-600 transition"
              >
                Live Demo
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default Projects;
