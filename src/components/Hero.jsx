import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const [displayedGreeting, setDisplayedGreeting] = useState("");
  const [displayedName, setDisplayedName] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const [currentPhase, setCurrentPhase] = useState("greeting"); // "greeting", "name", "complete"
  
  const greetingText = "Hi, I'm ";
  const nameText = "Anand Bhasker";
  
  useEffect(() => {
    let greetingIndex = 0;
    let nameIndex = 0;
    
    // Phase 1: Type greeting
    const greetingInterval = setInterval(() => {
      if (greetingIndex < greetingText.length) {
        setDisplayedGreeting(greetingText.slice(0, greetingIndex + 1));
        greetingIndex++;
      } else {
        clearInterval(greetingInterval);
        setCurrentPhase("name");
        
        // Phase 2: Type name after a short pause
        setTimeout(() => {
          const nameInterval = setInterval(() => {
            if (nameIndex < nameText.length) {
              setDisplayedName(nameText.slice(0, nameIndex + 1));
              nameIndex++;
            } else {
              clearInterval(nameInterval);
              setCurrentPhase("complete");
              setTimeout(() => setShowCursor(false), 1500);
            }
          }, 120);
        }, 300);
      }
    }, 100);

    return () => clearInterval(greetingInterval);
  }, []);

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/Anand_Bhasker_Resume.pdf';
    link.download = 'Anand_Bhasker_Resume.pdf';
    link.click();
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-teal-900 relative overflow-hidden pt-30">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="flex-1 flex justify-center lg:justify-start"
          >
            <div className="relative group">
              {/* Floating background rings */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-teal-500/30"
                animate={{ 
                  rotate: 360,
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                  scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                }}
                style={{ width: "120%", height: "120%", left: "-10%", top: "-10%" }}
              />
              <motion.div
                className="absolute inset-0 rounded-full border border-blue-500/20"
                animate={{ 
                  rotate: -360,
                  scale: [1, 1.2, 1]
                }}
                transition={{ 
                  rotate: { duration: 15, repeat: Infinity, ease: "linear" },
                  scale: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }
                }}
                style={{ width: "140%", height: "140%", left: "-20%", top: "-20%" }}
              />
              
              {/* Main profile image container */}
              <motion.div
                className="relative"
                animate={{ 
                  y: [0, -10, 0],
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity, 
                  ease: "easeInOut"
                }}
              >
                <motion.img
                  src="/profile.jpg"
                  alt="Anand Bhasker"
                  className="w-80 h-80 lg:w-96 lg:h-96 rounded-full object-cover border-4 border-teal-500 shadow-2xl relative z-10 cursor-pointer"
                  whileHover={{ 
                    scale: 1.1,
                    rotate: [0, -2, 2, 0],
                    borderColor: "#3b82f6",
                    filter: "brightness(1.1) contrast(1.1)"
                  }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 300, 
                    damping: 20,
                    rotate: { duration: 0.3 },
                    filter: { duration: 0.3 }
                  }}
                />
                
                {/* Gradient overlay */}
                <motion.div 
                  className="absolute inset-0 rounded-full bg-gradient-to-t from-teal-500/20 to-transparent z-20"
                  whileHover={{
                    background: "linear-gradient(to top, rgba(59, 130, 246, 0.3), transparent)"
                  }}
                  transition={{ duration: 0.3 }}
                />
                
                {/* Hover glow effect */}
                <motion.div
                  className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: "radial-gradient(circle, rgba(20, 184, 166, 0.4) 0%, rgba(59, 130, 246, 0.2) 50%, transparent 70%)",
                    filter: "blur(20px)",
                    transform: "scale(1.3)"
                  }}
                />
                
                {/* Additional sparkle effects on hover */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ pointerEvents: "none" }}
                >
                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-teal-300 rounded-full"
                      style={{
                        left: `${15 + Math.random() * 70}%`,
                        top: `${15 + Math.random() * 70}%`,
                      }}
                      animate={{
                        scale: [0, 1, 0],
                        opacity: [0, 1, 0],
                        y: [0, -20, 0],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        delay: i * 0.2,
                        ease: "easeInOut"
                      }}
                    />
                  ))}
                </motion.div>
                
                {/* Pulsing dots around the image */}
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-3 h-3 bg-teal-400 rounded-full opacity-60"
                    style={{
                      left: "50%",
                      top: "50%",
                      transformOrigin: `0 ${200 + i * 10}px`,
                    }}
                    animate={{
                      rotate: 360,
                      scale: [1, 1.5, 1],
                      opacity: [0.6, 1, 0.6]
                    }}
                    transition={{
                      rotate: { duration: 10 + i * 2, repeat: Infinity, ease: "linear" },
                      scale: { duration: 2 + i * 0.3, repeat: Infinity, ease: "easeInOut" },
                      opacity: { duration: 2 + i * 0.3, repeat: Infinity, ease: "easeInOut" }
                    }}
                  />
                ))}
              </motion.div>
              
              {/* Professional badge */}
              <motion.div
                className="absolute -bottom-2 -right-2 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full p-3 border-4 border-gray-900 shadow-lg"
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 1.5, type: "spring", stiffness: 200 }}
                whileHover={{ scale: 1.2, rotate: 15 }}
              >
                <span className="text-white text-xl">💼</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Hero Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="flex-1 text-center lg:text-left text-white"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 bg-gradient-to-r from-white via-teal-200 to-teal-400 bg-clip-text text-transparent"
            >
              <motion.span
                className="inline-block"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                {displayedGreeting}
                {currentPhase === "greeting" && showCursor && (
                  <motion.span
                    className="inline-block w-1 h-12 md:h-16 lg:h-20 bg-white ml-1"
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                  />
                )}
              </motion.span>
              
              <motion.span
                className="text-teal-400 relative inline-block"
                initial={{ opacity: 0 }}
                animate={{ opacity: currentPhase !== "greeting" ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {displayedName}
                {(currentPhase === "name" || (currentPhase === "complete" && showCursor)) && (
                  <motion.span
                    className="inline-block w-1 h-12 md:h-16 lg:h-20 bg-teal-400 ml-2"
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                  />
                )}
                
                {/* Enhanced glow effect on name */}
                <motion.div
                  className="absolute inset-0 text-teal-400 blur-sm opacity-0"
                  animate={{ 
                    opacity: currentPhase === "complete" ? [0.3, 0.7, 0.3] : 0,
                    scale: currentPhase === "complete" ? [1, 1.02, 1] : 1
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                >
                  {displayedName}
                </motion.div>
                
                {/* Sparkle effects */}
                {currentPhase === "complete" && (
                  <>
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-teal-400 rounded-full"
                        style={{
                          left: `${20 + i * 25}%`,
                          top: `${10 + i * 15}%`,
                        }}
                        animate={{
                          scale: [0, 1, 0],
                          opacity: [0, 1, 0],
                          rotate: [0, 180, 360],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.3,
                          ease: "easeInOut"
                        }}
                      />
                    ))}
                  </>
                )}
              </motion.span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-8 leading-relaxed"
            >
              Senior Flutter Developer seeking new opportunities to drive{" "}
              <span className="text-teal-400 font-semibold">innovation</span> and build scalable solutions
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.a
                href="#contact"
                className="inline-block px-8 py-4 bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 rounded-full text-white font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-teal-500/25"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Opportunities
              </motion.a>
              
              <motion.button
                onClick={handleDownloadResume}
                className="inline-block px-8 py-4 border-2 border-teal-500 text-teal-400 hover:bg-teal-500 hover:text-white rounded-full font-semibold text-lg transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Download Resume
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
