import React from "react";
import { motion } from "framer-motion";

const About = () => {
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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const achievements = [
    { number: "4+", label: "Years Professional Experience" },
    { number: "15+", label: "Enterprise Projects" },
    { number: "5", label: "Team Members Mentored" },
    { number: "3", label: "Production Apps Delivered" }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-6xl mx-auto"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-white via-teal-200 to-teal-400 bg-clip-text text-transparent"
          >
            About Me
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <motion.div variants={itemVariants} className="space-y-6">
              <motion.p
                variants={itemVariants}
                className="text-lg text-gray-300 leading-relaxed"
              >
                I'm a seasoned Flutter developer with 4+ years of professional experience in enterprise 
                mobile development. I thrive in collaborative environments, leading technical initiatives 
                and mentoring team members while delivering high-quality, scalable applications for 
                complex business requirements.
              </motion.p>

              <motion.div variants={itemVariants} className="space-y-4">
                <h3 className="text-xl font-semibold text-teal-400 mb-3">Professional Strengths:</h3>
                <ul className="space-y-3">
                  {[
                    "Technical leadership & cross-functional collaboration",
                    "Enterprise Flutter architecture & scalability",
                    "Agile development & sprint planning",
                    "Code review & mentoring junior developers",
                    "CI/CD implementation & DevOps practices",
                    "Requirements analysis & stakeholder communication"
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      variants={itemVariants}
                      className="flex items-center space-x-3 text-gray-300"
                    >
                      <span className="w-2 h-2 bg-teal-500 rounded-full"></span>
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              <motion.div variants={itemVariants} className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
                <h4 className="text-lg font-semibold text-teal-400 mb-2">Professional Experience</h4>
                <div className="space-y-3">
                  <div>
                    <p className="text-white font-medium">Senior Flutter Developer</p>
                    <p className="text-sm text-gray-400">TechCorp Solutions • 2022 - Present</p>
                    <p className="text-xs text-gray-500 mt-1">Leading mobile development team, architecting enterprise applications</p>
                  </div>
                  <div>
                    <p className="text-white font-medium">Mobile Application Developer</p>
                    <p className="text-sm text-gray-400">InnovateTech Ltd • 2020 - 2022</p>
                    <p className="text-xs text-gray-500 mt-1">Developed cross-platform solutions, collaborated with product teams</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Achievements */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-700 text-center hover:border-teal-500/50 transition-all duration-300"
                  >
                    <motion.h3
                      className="text-3xl font-bold text-teal-400 mb-2"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ delay: index * 0.1, type: "spring", stiffness: 200 }}
                    >
                      {achievement.number}
                    </motion.h3>
                    <p className="text-gray-300 text-sm">{achievement.label}</p>
                  </motion.div>
                ))}
              </div>

              <motion.div
                variants={itemVariants}
                className="bg-gradient-to-r from-teal-500/10 to-blue-500/10 p-6 rounded-xl border border-teal-500/20"
              >
                <h4 className="text-lg font-semibold text-teal-400 mb-3">Career Objective</h4>
                <p className="text-gray-300">
                  Seeking a senior mobile development role where I can leverage my technical expertise 
                  to drive product innovation, lead development teams, and contribute to strategic 
                  technology decisions in a growth-oriented company.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
