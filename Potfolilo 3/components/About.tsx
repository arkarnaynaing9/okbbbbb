import { Card, CardContent } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion } from "motion/react";
import personalImage from "figma:asset/6baa43e5b60a9748d60af2ed8c4503f130f12cb1.png";

export function About() {
  return (
    <section id="about" className="py-20 px-6 relative overflow-hidden">
      {/* Enhanced floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(18)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ 
              opacity: [0.2, 0.8, 0.2],
              scale: [0.8, 1.5 + Math.random() * 0.5, 0.8],
            }}
            animate={{
              y: [0, -40 + Math.random() * 20, 0],
              x: [0, Math.random() * 30 - 15, 0],
            }}
            transition={{
              opacity: { duration: 1, delay: i * 0.1 },
              scale: { duration: 1, delay: i * 0.1 },
              y: { duration: 3 + Math.random() * 6, repeat: Infinity, ease: "easeInOut" },
              x: { duration: 3 + Math.random() * 6, repeat: Infinity, ease: "easeInOut" },
            }}
            viewport={{ once: true }}
          />
        ))}
        
        {/* Dynamic gradient waves triggered on view */}
        <motion.div
          className="absolute top-10 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/20 via-cyan-400/15 to-transparent blur-sm"
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ 
            scaleX: [0, 1, 0],
            opacity: [0, 0.8, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
          viewport={{ once: true }}
        />
        
        <motion.div
          className="absolute bottom-20 right-0 w-full h-0.5 bg-gradient-to-l from-transparent via-purple-400/15 via-pink-400/10 to-transparent blur-sm"
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ 
            scaleX: [0, 1, 0],
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          viewport={{ once: true }}
        />
        
        {/* Animated geometric shapes */}
        <motion.div
          className="absolute top-20 left-10 w-6 h-6 border border-primary/20 rotate-45"
          initial={{ rotate: 45, scale: 0, opacity: 0 }}
          whileInView={{ rotate: 45, scale: 1, opacity: 0.6 }}
          animate={{
            rotate: [45, 225, 45],
            scale: [1, 1.3, 1],
          }}
          transition={{
            scale: { duration: 0.8, delay: 0.3 },
            opacity: { duration: 0.8, delay: 0.3 },
            rotate: { duration: 8, repeat: Infinity, ease: "easeInOut" },
          }}
          viewport={{ once: true }}
        />
        
        <motion.div
          className="absolute bottom-32 right-16 w-4 h-4 bg-primary/10 rounded-full"
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 0.5 }}
          animate={{
            scale: [1, 2, 1],
            y: [0, -20, 0],
          }}
          transition={{
            scale: { duration: 0.6, delay: 0.5 },
            opacity: { duration: 0.6, delay: 0.5 },
            y: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 },
          }}
          viewport={{ once: true }}
        />
        
        {/* Additional geometric shapes that animate in */}
        <motion.div
          className="absolute top-1/3 right-20 w-8 h-8"
          style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
          initial={{ scale: 0, rotate: 0, opacity: 0 }}
          whileInView={{ scale: 1, rotate: 180, opacity: 0.3 }}
          animate={{
            rotate: [180, 540],
            scale: [1, 1.2, 1],
          }}
          transition={{
            scale: { duration: 1, delay: 0.8 },
            opacity: { duration: 1, delay: 0.8 },
            rotate: { duration: 12, repeat: Infinity, ease: "linear" },
          }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-cyan-400/20 to-purple-400/10"
        />
        
        <motion.div
          className="absolute bottom-1/3 left-20 w-5 h-5 border-2 border-primary/20 rounded-full"
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 0.4 }}
          animate={{
            scale: [1, 1.5, 1],
            rotate: [0, 360],
          }}
          transition={{
            scale: { duration: 0.8, delay: 1 },
            opacity: { duration: 0.8, delay: 1 },
            rotate: { duration: 10, repeat: Infinity, ease: "linear" },
          }}
          viewport={{ once: true }}
        />
        
        {/* Floating light orbs */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={`orb-${i}`}
            className="absolute rounded-full blur-xl"
            style={{
              left: `${20 + i * 15}%`,
              top: `${20 + (i % 2) * 50}%`,
              width: `${20 + i * 10}px`,
              height: `${20 + i * 10}px`,
              background: `radial-gradient(circle, rgba(${59 + i * 30}, ${130 + i * 20}, ${246 - i * 30}, 0.${2 + i}), transparent)`
            }}
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ 
              scale: [0, 1, 1.2, 1],
              opacity: [0, 0.4, 0.6, 0.3],
            }}
            animate={{
              y: [0, -30 + i * 5, 0],
              x: [0, 10 - i * 5, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              scale: { duration: 1.5, delay: i * 0.3 },
              opacity: { duration: 1.5, delay: i * 0.3 },
              y: { duration: 4 + i, repeat: Infinity, ease: "easeInOut" },
              x: { duration: 5 + i, repeat: Infinity, ease: "easeInOut" },
            }}
            viewport={{ once: true }}
          />
        ))}
        
        {/* Constellation effect */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`star-${i}`}
            className="absolute w-0.5 h-0.5 bg-primary/40 rounded-full"
            style={{
              left: `${30 + i * 8}%`,
              top: `${15 + (i % 3) * 25}%`,
            }}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ 
              opacity: [0, 1, 0.5, 1],
              scale: [0, 1.5, 1, 1.5],
            }}
            transition={{
              duration: 2,
              delay: i * 0.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            viewport={{ once: true }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-3xl md:text-4xl mb-4 font-serif neon-text bg-gradient-to-r from-primary via-cyan-400 to-purple-400 bg-clip-text text-transparent"
            style={{
              backgroundSize: '200% 200%',
              animation: 'gradient-shift 4s ease infinite'
            }}
          >
            About Me
          </motion.h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I believe great design starts with understanding people and their needs
          </p>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - About content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.h3 
              className="text-2xl mb-6 font-serif"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              My Background & Journey
            </motion.h3>
            
            <motion.p 
              className="text-muted-foreground text-lg leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              A highly motivated and enthusiastic UI/UX Designer, graduated from the{" "}
              <motion.span 
                className="text-primary font-medium"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                viewport={{ once: true }}
              >
                University of Computer Studies, Mandalay
              </motion.span>
              , with a specialization in Business Information Systems.
            </motion.p>
            
            <motion.p 
              className="text-muted-foreground text-lg leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              I am building my expertise in designing intuitive and engaging user experiences, 
              as well as in frontend development and business analysis. My academic background 
              provides a solid foundation for understanding how technology can solve business challenges.
            </motion.p>

            <motion.p 
              className="text-muted-foreground text-lg leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true }}
            >
              I am eager to apply my skills to create user-centered designs through hands-on 
              projects and practical experience, continuously learning and growing in this 
              dynamic field.
            </motion.p>

            {/* Enhanced key focus areas with 3D icons */}
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              viewport={{ once: true }}
            >
              {[
                { 
                  title: "UI/UX Design", 
                  subtitle: "User Experience Focus", 
                  color: "from-blue-500/20 to-cyan-500/10",
                  iconStyles: {
                    background: 'linear-gradient(135deg, #3b82f6, #06b6d4)',
                    boxShadow: '0 4px 12px rgba(59, 130, 246, 0.3), inset 0 -2px 4px rgba(0, 0, 0, 0.2)',
                    borderRadius: '6px',
                    width: '24px',
                    height: '24px',
                    position: 'relative' as const,
                    overflow: 'hidden' as const
                  },
                  iconElements: [
                    { width: '8px', height: '8px', top: '4px', left: '4px', background: 'rgba(255, 255, 255, 0.8)', borderRadius: '2px' },
                    { width: '6px', height: '6px', top: '4px', right: '4px', background: 'rgba(255, 255, 255, 0.6)', borderRadius: '1px' },
                    { width: '12px', height: '2px', bottom: '6px', left: '6px', background: 'rgba(255, 255, 255, 0.7)', borderRadius: '1px' },
                    { width: '8px', height: '2px', bottom: '3px', left: '8px', background: 'rgba(255, 255, 255, 0.5)', borderRadius: '1px' }
                  ]
                },
                { 
                  title: "Frontend Development", 
                  subtitle: "Technical Implementation", 
                  color: "from-purple-500/20 to-pink-500/10",
                  iconStyles: {
                    background: 'linear-gradient(135deg, #8b5cf6, #ec4899)',
                    boxShadow: '0 4px 12px rgba(139, 92, 246, 0.3), inset 0 -2px 4px rgba(0, 0, 0, 0.2)',
                    borderRadius: '4px',
                    width: '24px',
                    height: '24px',
                    position: 'relative' as const,
                    overflow: 'hidden' as const
                  },
                  iconElements: [
                    { width: '14px', height: '1px', top: '6px', left: '5px', background: 'rgba(255, 255, 255, 0.9)', borderRadius: '0.5px' },
                    { width: '10px', height: '1px', top: '10px', left: '7px', background: 'rgba(255, 255, 255, 0.7)', borderRadius: '0.5px' },
                    { width: '12px', height: '1px', top: '14px', left: '6px', background: 'rgba(255, 255, 255, 0.8)', borderRadius: '0.5px' },
                    { width: '8px', height: '1px', top: '18px', left: '8px', background: 'rgba(255, 255, 255, 0.6)', borderRadius: '0.5px' },
                    { width: '2px', height: '2px', top: '4px', left: '3px', background: 'rgba(255, 255, 255, 0.9)', borderRadius: '50%' }
                  ]
                },
                { 
                  title: "Business Analysis", 
                  subtitle: "Strategic Thinking", 
                  color: "from-green-500/20 to-emerald-500/10",
                  iconStyles: {
                    background: 'linear-gradient(135deg, #10b981, #059669)',
                    boxShadow: '0 4px 12px rgba(16, 185, 129, 0.3), inset 0 -2px 4px rgba(0, 0, 0, 0.2)',
                    borderRadius: '50%',
                    width: '24px',
                    height: '24px',
                    position: 'relative' as const,
                    overflow: 'hidden' as const
                  },
                  iconElements: [
                    { width: '12px', height: '8px', top: '8px', left: '6px', background: 'rgba(255, 255, 255, 0.2)', borderRadius: '2px' },
                    { width: '8px', height: '6px', top: '9px', left: '8px', background: 'rgba(255, 255, 255, 0.8)', borderRadius: '1px' },
                    { width: '3px', height: '10px', top: '7px', left: '10.5px', background: 'rgba(255, 255, 255, 0.9)', borderRadius: '1px' },
                    { width: '2px', height: '8px', top: '8px', left: '7px', background: 'rgba(255, 255, 255, 0.7)', borderRadius: '1px' }
                  ]
                },
                { 
                  title: "Problem Solving", 
                  subtitle: "Creative Solutions", 
                  color: "from-orange-500/20 to-red-500/10",
                  iconStyles: {
                    background: 'linear-gradient(135deg, #f97316, #ef4444)',
                    boxShadow: '0 4px 12px rgba(249, 115, 22, 0.3), inset 0 -2px 4px rgba(0, 0, 0, 0.2)',
                    borderRadius: '6px',
                    width: '24px',
                    height: '24px',
                    position: 'relative' as const,
                    overflow: 'hidden' as const,
                    transform: 'rotate(45deg)'
                  },
                  iconElements: [
                    { width: '12px', height: '12px', top: '6px', left: '6px', background: 'rgba(255, 255, 255, 0.3)', borderRadius: '2px', transform: 'rotate(-45deg)' },
                    { width: '8px', height: '8px', top: '8px', left: '8px', background: 'rgba(255, 255, 255, 0.8)', borderRadius: '1px', transform: 'rotate(-45deg)' },
                    { width: '4px', height: '4px', top: '10px', left: '10px', background: 'rgba(255, 255, 255, 0.9)', borderRadius: '50%', transform: 'rotate(-45deg)' }
                  ]
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: 1.1 + index * 0.1,
                    type: "spring",
                    stiffness: 100
                  }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    scale: 1.05,
                    y: -5,
                    rotateY: 5
                  }}
                  className="relative overflow-hidden"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.color} rounded-lg`} />
                  <Card className="relative hover:shadow-lg transition-all duration-300 hover:border-primary/30 bg-card/50 backdrop-blur-sm">
                    <CardContent className="p-4 text-center relative z-10">
                      <motion.div 
                        className="flex justify-center mb-2"
                        whileHover={{ 
                          scale: 1.3, 
                          rotate: [0, -10, 10, 0],
                          transition: { duration: 0.5 }
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        <div style={item.iconStyles}>
                          {item.iconElements.map((element, elemIndex) => (
                            <div
                              key={elemIndex}
                              style={{
                                position: 'absolute',
                                ...element
                              }}
                            />
                          ))}
                        </div>
                      </motion.div>
                      <motion.div 
                        className="font-medium mb-1"
                        whileHover={{ scale: 1.05 }}
                      >
                        {item.title}
                      </motion.div>
                      <div className="text-muted-foreground text-sm">{item.subtitle}</div>
                    </CardContent>
                  </Card>
                  
                  {/* Subtle glow effect */}
                  <motion.div
                    className="absolute inset-0 rounded-lg opacity-0"
                    whileHover={{ 
                      opacity: 0.1,
                      boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)"
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              ))}
            </motion.div>
            
            {/* Educational highlight with 3D icon */}
            <motion.div
              className="mt-8 p-6 rounded-xl bg-gradient-to-r from-primary/5 to-cyan-500/5 border border-primary/10 relative overflow-hidden"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.5 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 10px 30px rgba(59, 130, 246, 0.1)"
              }}
            >
              <motion.div
                className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-full blur-2xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              
              <div className="relative z-10">
                <motion.div 
                  className="flex items-center gap-3 mb-2"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 1.7 }}
                  viewport={{ once: true }}
                >
                  <div
                    style={{
                      background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
                      boxShadow: '0 4px 12px rgba(59, 130, 246, 0.3), inset 0 -2px 4px rgba(0, 0, 0, 0.2)',
                      borderRadius: '6px',
                      width: '20px',
                      height: '20px',
                      position: 'relative',
                      overflow: 'hidden'
                    }}
                  >
                    <div style={{
                      position: 'absolute',
                      top: '4px',
                      left: '4px',
                      width: '12px',
                      height: '8px',
                      background: 'rgba(255, 255, 255, 0.9)',
                      borderRadius: '2px'
                    }} />
                    <div style={{
                      position: 'absolute',
                      bottom: '4px',
                      left: '4px',
                      width: '12px',
                      height: '2px',
                      background: 'rgba(255, 255, 255, 0.7)',
                      borderRadius: '1px'
                    }} />
                    <div style={{
                      position: 'absolute',
                      bottom: '1px',
                      left: '6px',
                      width: '8px',
                      height: '1px',
                      background: 'rgba(255, 255, 255, 0.5)',
                      borderRadius: '0.5px'
                    }} />
                  </div>
                  <h4 className="font-medium text-primary">Education</h4>
                </motion.div>
                <motion.p 
                  className="text-sm text-muted-foreground ml-8"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 1.9 }}
                  viewport={{ once: true }}
                >
                  Bachelor's in Business Information Systems from University of Computer Studies, Mandalay
                </motion.p>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Right side - Photo and additional info */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Main photo with decorative elements */}
            <div className="relative">
              {/* Decorative background elements */}
              <motion.div
                className="absolute -top-4 -left-4 w-full h-full bg-primary/10 rounded-2xl"
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                animate={{
                  rotate: [0, 1, 0, -1, 0],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              
              <motion.div
                className="relative z-10 rounded-2xl overflow-hidden shadow-2xl"
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.02,
                  rotate: 1,
                }}
              >
                <ImageWithFallback
                  src={personalImage}
                  alt="Arkar Nay Naing - UI/UX Designer"
                  className="w-full h-[500px] object-cover"
                />
                
                {/* Subtle overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
              </motion.div>
              
              {/* Floating accent elements */}
              <motion.div
                className="absolute -bottom-2 -right-2 w-16 h-16 bg-primary/20 rounded-full blur-xl"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.4, 0.7, 0.4],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>
            
            {/* Info card */}
            <motion.div 
              className="bg-card rounded-xl p-6 mt-8 relative overflow-hidden border border-primary/10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ 
                boxShadow: "0 20px 25px -5px rgba(59, 130, 246, 0.1)",
                borderColor: "rgba(59, 130, 246, 0.3)"
              }}
            >
              {/* Subtle background animation */}
              <motion.div
                className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-full blur-2xl"
                animate={{
                  scale: [1, 1.4, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              
              <h3 className="text-xl mb-4 font-serif relative z-10">What I Do</h3>
              <div className="space-y-4 relative z-10">
                {[
                  {
                    title: "User Experience Design",
                    description: "Research, wireframing, prototyping, and testing"
                  },
                  {
                    title: "User Interface Design", 
                    description: "Visual design, design systems, and brand alignment"
                  },
                  {
                    title: "Product Strategy",
                    description: "User research, competitive analysis, and roadmapping"
                  }
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 8 }}
                  >
                    <motion.div 
                      className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.3, delay: 1 + index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ 
                        scale: 1.8,
                        boxShadow: "0 0 15px var(--primary)"
                      }}
                    />
                    <div>
                      <motion.div 
                        className="font-medium mb-1"
                        whileHover={{ scale: 1.02 }}
                      >
                        {item.title}
                      </motion.div>
                      <div className="text-muted-foreground text-sm">{item.description}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}