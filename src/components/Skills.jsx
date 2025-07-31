import React from "react";
import { motion } from "framer-motion";

const skillsData = [
  { name: "Flutter & Dart", level: 95, category: "Mobile Development" },
  { name: "Team Leadership", level: 88, category: "Leadership" },
  { name: "System Architecture", level: 90, category: "Enterprise Skills" },
  { name: "JavaScript/TypeScript", level: 85, category: "Programming Languages" },
  { name: "Agile/Scrum", level: 92, category: "Project Management" },
  { name: "Code Review & Mentoring", level: 88, category: "Leadership" },
  { name: "REST APIs & Microservices", level: 92, category: "Backend Integration" },
  { name: "CI/CD & DevOps", level: 85, category: "DevOps" },
  { name: "Firebase & Cloud Services", level: 90, category: "Backend Services" },
  { name: "Technical Documentation", level: 88, category: "Communication" }
];

const skillCategories = {
  "Mobile Development": "🚀",
  "Programming Languages": "💻", 
  "Backend Services": "☁️",
  "Web Technologies": "🌐",
  "Tools & Workflow": "🛠️",
  "Backend Integration": "🔗",
  "DevOps": "⚙️",
  "Leadership": "👥",
  "Enterprise Skills": "🏢",
  "Project Management": "📋",
  "Communication": "💬"
};

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const skillVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 }
    }
  };

  const progressVariants = {
    hidden: { width: 0 },
    visible: (level) => ({
      width: `${level}%`,
      transition: { duration: 1.5, ease: "easeOut" }
    })
  };

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-gray-800 via-gray-900 to-black text-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-teal-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
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
            Skills & Expertise
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Enterprise-grade technical skills with strong leadership and collaboration capabilities
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-4xl mx-auto"
        >
          <div className="grid gap-6">
            {skillsData.map((skill, index) => (
              <motion.div
                key={skill.name}
                variants={skillVariants}
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-r from-gray-800/80 to-gray-900/80 p-6 rounded-xl border border-gray-700 hover:border-teal-500/50 transition-all duration-300 backdrop-blur-sm"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">{skillCategories[skill.category]}</span>
                    <div>
                      <h3 className="text-lg font-semibold text-white">{skill.name}</h3>
                      <p className="text-sm text-gray-400">{skill.category}</p>
                    </div>
                  </div>
                  <span className="text-teal-400 font-bold text-lg">{skill.level}%</span>
                </div>
                
                <div className="relative">
                  <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                    <motion.div
                      variants={progressVariants}
                      custom={skill.level}
                      className="h-full bg-gradient-to-r from-teal-500 to-blue-500 rounded-full relative"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 animate-pulse"></div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Additional skills showcase */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold mb-8 text-teal-400">Enterprise Technologies</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "React", "Node.js", "PostgreSQL", "Redis", "Docker", "Kubernetes",
              "AWS", "Material Design", "Figma", "Jira", "Confluence", "Slack"
            ].map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.1, y: -2 }}
                className="px-4 py-2 bg-gray-800 border border-gray-600 rounded-full text-gray-300 hover:border-teal-500 hover:text-teal-400 transition-all duration-300 cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
