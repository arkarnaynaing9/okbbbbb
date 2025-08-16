import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { motion } from "motion/react";

const skillCategories = [
  {
    title: "Design Tools",
    icon: "🎨",
    skills: [
      { name: "Figma", level: 95 },
      { name: "Sketch", level: 85 },
      { name: "Adobe XD", level: 90 },
      { name: "Photoshop", level: 80 },
      { name: "Illustrator", level: 75 },
      { name: "Framer", level: 70 }
    ]
  },
  {
    title: "Frontend Development",
    icon: "💻",
    skills: [
      { name: "HTML/CSS", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "React", level: 80 },
      { name: "TypeScript", level: 75 },
      { name: "Tailwind CSS", level: 88 },
      { name: "SASS/SCSS", level: 70 }
    ]
  },
  {
    title: "UX Research",
    icon: "🔬",
    skills: [
      { name: "User Interviews", level: 92 },
      { name: "Usability Testing", level: 88 },
      { name: "A/B Testing", level: 75 },
      { name: "Surveys", level: 80 },
      { name: "Analytics", level: 85 },
      { name: "Heatmaps", level: 70 }
    ]
  },
  {
    title: "Design Systems",
    icon: "⚡",
    skills: [
      { name: "Design Tokens", level: 90 },
      { name: "Component Libraries", level: 85 },
      { name: "Style Guides", level: 88 },
      { name: "Accessibility", level: 82 },
      { name: "Responsive Design", level: 95 },
      { name: "Prototyping", level: 90 }
    ]
  }
];

const coreCompetencies = [
  "Visual Design",
  "Interaction Design", 
  "User Experience Design",
  "Information Architecture",
  "Wireframing & Prototyping",
  "Design Systems",
  "Frontend Development",
  "Responsive Design",
  "Accessibility (WCAG)",
  "Design Thinking",
  "Agile/Scrum",
  "Cross-functional Collaboration"
];

export function Skills() {
  return (
    <section id="skills" className="py-20 px-6 relative">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Floating skill particles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/20 rounded-full"
            style={{
              left: `${20 + (i * 15) % 60}%`,
              top: `${15 + (i * 20) % 70}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 4 + (i % 3),
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          />
        ))}
        
        {/* Neon gradient lines */}
        <motion.div
          className="absolute top-1/4 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent"
          animate={{
            scaleX: [0, 1, 0],
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
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
            className="text-4xl md:text-5xl mb-6 font-serif relative"
            style={{
              background: 'linear-gradient(135deg, #3b82f6, #06b6d4, #8b5cf6)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
              backgroundSize: '200% 200%',
            }}
            animate={{
              backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            Skills & Expertise
          </motion.h2>
          <motion.p 
            className="text-muted-foreground max-w-2xl mx-auto text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            A comprehensive toolkit combining design thinking with technical implementation
          </motion.p>
        </motion.div>
        
        {/* Skill Categories with 3D Icons */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -5,
                transition: { duration: 0.2 }
              }}
            >
              <Card className="h-full relative overflow-hidden group">
                {/* Animated border */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: 'linear-gradient(45deg, #3b82f6, #06b6d4, #8b5cf6, #3b82f6)',
                    backgroundSize: '400% 400%',
                    animation: 'gradient-shift 3s ease infinite',
                    padding: '1px',
                    borderRadius: '0.5rem'
                  }}
                >
                  <div className="w-full h-full bg-card rounded-[calc(0.5rem-1px)]"></div>
                </div>
                
                <div className="relative z-10 p-6">
                  <CardHeader className="p-0 mb-6">
                    <div className="flex items-center gap-4 mb-4">
                      <motion.div 
                        className="text-4xl relative"
                        style={{
                          filter: 'drop-shadow(0 0 10px rgba(59, 130, 246, 0.5))',
                          transform: 'perspective(100px) rotateX(15deg) rotateY(-15deg)',
                        }}
                        whileHover={{
                          scale: 1.1,
                          rotateY: 10,
                          transition: { duration: 0.2 }
                        }}
                      >
                        {category.icon}
                      </motion.div>
                      <CardTitle className="text-xl font-serif bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                        {category.title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="p-0">
                    <div className="space-y-4">
                      {category.skills.map((skill, skillIndex) => (
                        <motion.div 
                          key={skillIndex} 
                          className="space-y-2"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ 
                            duration: 0.5, 
                            delay: 0.2 + index * 0.1 + skillIndex * 0.05 
                          }}
                          viewport={{ once: true }}
                        >
                          <div className="flex justify-between items-center">
                            <span className="text-sm font-medium">{skill.name}</span>
                            <span className="text-xs text-muted-foreground">{skill.level}%</span>
                          </div>
                          <div className="w-full bg-muted/20 rounded-full h-2 overflow-hidden relative">
                            <motion.div 
                              className="h-2 rounded-full relative overflow-hidden"
                              style={{
                                background: 'linear-gradient(90deg, #3b82f6, #06b6d4)',
                                boxShadow: '0 0 10px rgba(59, 130, 246, 0.5)',
                              }}
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              transition={{ 
                                duration: 1.2, 
                                delay: 0.4 + index * 0.1 + skillIndex * 0.1,
                                ease: "easeOut"
                              }}
                              viewport={{ once: true }}
                            >
                              {/* Animated shimmer effect */}
                              <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                                animate={{
                                  x: ['-100%', '100%'],
                                }}
                                transition={{
                                  duration: 2,
                                  repeat: Infinity,
                                  ease: "linear",
                                  delay: 1 + skillIndex * 0.2,
                                }}
                              />
                            </motion.div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
        
        {/* Core Competencies */}
        <motion.div 
          className="relative"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Card className="relative overflow-hidden">
            {/* Animated background gradient */}
            <div 
              className="absolute inset-0 opacity-10"
              style={{
                background: 'linear-gradient(45deg, #3b82f6, #06b6d4, #8b5cf6, #3b82f6)',
                backgroundSize: '400% 400%',
                animation: 'gradient-shift 8s ease infinite',
              }}
            />
            
            <div className="relative z-10 p-8">
              <motion.h3 
                className="text-2xl mb-8 text-center font-serif bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
              >
                Core Competencies
              </motion.h3>
              
              <div className="flex flex-wrap gap-3 justify-center">
                {coreCompetencies.map((competency, index) => (
                  <motion.div
                    key={index}
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ 
                      duration: 0.4, 
                      delay: 0.3 + index * 0.05,
                      type: "spring",
                      stiffness: 200,
                      damping: 10
                    }}
                    viewport={{ once: true }}
                    whileHover={{ 
                      scale: 1.05,
                      transition: { duration: 0.2 }
                    }}
                  >
                    <Badge 
                      variant="outline" 
                      className="px-4 py-2 text-sm hover:bg-primary/10 hover:border-primary transition-all duration-300 relative overflow-hidden group"
                    >
                      <span className="relative z-10">{competency}</span>
                      {/* Hover glow effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-cyan-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}