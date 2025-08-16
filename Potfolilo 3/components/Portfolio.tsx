import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion } from "motion/react";
import lhBankImage from "figma:asset/47bb1b7c544ff8ffbdba9ea20e9f22f243512429.png";

const projects = [
  {
    title: "CinemaBook - Movie Ticket System",
    description: "A comprehensive movie ticket booking platform featuring real-time seat selection, multiple payment options, and intuitive user flow. Designed to streamline the cinema experience from movie discovery to ticket confirmation.",
    image: "https://images.unsplash.com/photo-1587135325273-adef4e88bc25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3ZpZSUyMHRpY2tldCUyMGJvb2tpbmclMjBjaW5lbWElMjBhcHB8ZW58MXx8fHwxNzU1MzIzNzQwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["React", "Node.js", "Real-time", "Payment Gateway", "Mobile-First"],
    year: "2024",
    category: "Web Application",
    client: "Personal Project",
    duration: "3 months"
  },
  {
    title: "LH Bank AI Assistant",
    description: "Interactive AI chatbot animations and interface design for LH Bank's customer service platform. Features include natural conversation flows, smooth micro-interactions, and contextual help animations to enhance user engagement.",
    image: lhBankImage,
    tags: ["UI Animation", "Micro-interactions", "Banking UX", "AI Interface", "Figma"],
    year: "2024",
    category: "UI/UX Design",
    client: "LH Bank",
    duration: "2 months"
  },
  {
    title: "Millian Cake E-commerce",
    description: "Custom e-commerce platform for Millian Cake Company featuring elegant product showcases, seamless ordering system, and mobile-optimized checkout. Focused on creating a delightful shopping experience for premium baked goods.",
    image: "https://images.unsplash.com/photo-1607877107150-de8a24f3900b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWtlJTIwYmFrZXJ5JTIwZS1jb21tZXJjZSUyMG9ubGluZSUyMHN0b3JlfGVufDF8fHx8MTc1NTMyMzc0N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["E-commerce", "React", "Responsive Design", "Cart System", "Food Tech"],
    year: "2024",
    category: "Full-Stack Development",
    client: "Millian Cake Company",
    duration: "4 months"
  },
  {
    title: "Veracity - Digital Signature App",
    description: "Secure digital signature application with document management, multi-party signing workflows, and compliance features. Built with a focus on security, user experience, and legal document integrity.",
    image: "https://images.unsplash.com/photo-1589330694653-ded6df03f754?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwc2lnbmF0dXJlJTIwZG9jdW1lbnQlMjBhcHB8ZW58MXx8fHwxNzU1MzIzNzUxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Digital Security", "Document Management", "Authentication", "PDF Processing", "Legal Tech"],
    year: "2023",
    category: "Design",
    client: "Enterprise Client",
    duration: "6 months"
  }
];

export function Portfolio() {
  return (
    <section id="work" className="py-20 px-6 bg-muted/30 relative overflow-hidden">
      {/* Enhanced background animations with cyberpunk elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Enhanced floating particles specific to portfolio */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={`portfolio-particle-${i}`}
            className="absolute w-1 h-1 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `linear-gradient(45deg, rgba(${59 + i * 12}, ${130 + i * 8}, ${246 - i * 6}, 0.${4 + i % 4}), rgba(${6 + i * 15}, ${182 - i * 4}, ${212 + i * 3}, 0.${3 + i % 3}))`,
              boxShadow: `0 0 ${2 + i % 4}px rgba(59, 130, 246, 0.${6 + i % 3})`
            }}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ 
              opacity: [0.2, 0.8, 0.2],
              scale: [0.8, 1.5, 0.8],
            }}
            animate={{
              y: [0, -40 + Math.random() * 20, 0],
              x: [0, Math.random() * 25 - 12.5, 0],
              rotate: [0, 360],
            }}
            transition={{
              opacity: { duration: 1.5, delay: i * 0.1 },
              scale: { duration: 1.5, delay: i * 0.1 },
              y: { duration: 5 + Math.random() * 4, repeat: Infinity, ease: "easeInOut" },
              x: { duration: 4 + Math.random() * 5, repeat: Infinity, ease: "easeInOut" },
              rotate: { duration: 8 + Math.random() * 4, repeat: Infinity, ease: "linear" },
            }}
            viewport={{ once: true }}
          />
        ))}
        
        {/* Dynamic gradient waves with enhanced neon */}
        <motion.div
          className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/15 via-cyan-400/20 to-transparent blur-sm"
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ 
            scaleX: [0, 1, 0],
            opacity: [0, 0.7, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
          viewport={{ once: true }}
        />
        
        <motion.div
          className="absolute bottom-0 right-0 w-full h-0.5 bg-gradient-to-l from-transparent via-purple-400/15 via-pink-400/10 to-transparent blur-sm"
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ 
            scaleX: [0, 1, 0],
            opacity: [0, 0.5, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5
          }}
          viewport={{ once: true }}
        />
        
        {/* Cyberpunk data streams */}
        <motion.div
          className="absolute left-10 top-0 w-0.5 h-full bg-gradient-to-b from-transparent via-primary/20 to-transparent"
          initial={{ scaleY: 0, opacity: 0 }}
          whileInView={{ 
            scaleY: [0, 1, 0],
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          viewport={{ once: true }}
        />
        
        <motion.div
          className="absolute right-20 top-0 w-0.3 h-full bg-gradient-to-b from-transparent via-cyan-400/15 to-transparent"
          initial={{ scaleY: 0, opacity: 0 }}
          whileInView={{ 
            scaleY: [0, 1, 0],
            opacity: [0, 0.4, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
          viewport={{ once: true }}
        />
        
        {/* Floating geometric neon shapes */}
        <motion.div
          className="absolute top-1/4 left-1/6 w-12 h-12 border border-primary/20 rotate-45"
          style={{
            background: 'linear-gradient(45deg, rgba(59, 130, 246, 0.1), rgba(6, 182, 212, 0.05))',
            boxShadow: '0 0 20px rgba(59, 130, 246, 0.3)'
          }}
          animate={{
            rotate: [45, 405],
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        <motion.div
          className="absolute bottom-1/3 right-1/5 w-8 h-8 rounded-full border-2 border-cyan-400/20"
          style={{
            background: 'radial-gradient(circle, rgba(6, 182, 212, 0.2), rgba(59, 130, 246, 0.1))',
            boxShadow: '0 0 15px rgba(6, 182, 212, 0.4)'
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.4, 0.8, 0.4],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
        
        {/* Digital grid lines */}
        <motion.div
          className="absolute top-1/3 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary/10 to-transparent"
          style={{
            backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 10px, rgba(59, 130, 246, 0.1) 10px, rgba(59, 130, 246, 0.1) 11px)'
          }}
          animate={{
            x: ['-100%', '100%'],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        
        {/* Neon circuit paths */}
        <motion.div
          className="absolute top-1/2 left-1/4 w-20 h-0.5 bg-gradient-to-r from-primary/30 to-cyan-400/20"
          style={{
            borderRadius: '2px',
            boxShadow: '0 0 8px rgba(59, 130, 246, 0.5)'
          }}
          animate={{
            scaleX: [0, 1, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        
        <motion.div
          className="absolute bottom-1/4 right-1/3 w-16 h-0.5 bg-gradient-to-l from-purple-400/25 to-pink-400/15"
          style={{
            borderRadius: '2px',
            boxShadow: '0 0 6px rgba(139, 92, 246, 0.4)'
          }}
          animate={{
            scaleX: [0, 1, 0],
            opacity: [0, 0.8, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2.5,
          }}
        />
        
        {/* Enhanced pulsing energy orbs */}
        <motion.div
          className="absolute top-1/5 right-1/4 w-16 h-16 rounded-full blur-xl"
          style={{
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.3), rgba(6, 182, 212, 0.2), transparent)'
          }}
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        <motion.div
          className="absolute bottom-1/6 left-1/3 w-12 h-12 rounded-full blur-lg"
          style={{
            background: 'radial-gradient(circle, rgba(139, 92, 246, 0.25), rgba(236, 72, 153, 0.15), transparent)'
          }}
          animate={{
            scale: [1.2, 0.8, 1.2],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3,
          }}
        />
        
        {/* Cyberpunk scanning lines */}
        <motion.div
          className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent"
          animate={{
            y: [0, '100vh', 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
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
            className="text-3xl md:text-4xl mb-4 font-serif neon-text bg-gradient-to-r from-primary via-cyan-400 to-purple-400 bg-clip-text text-transparent"
            style={{
              backgroundSize: '200% 200%',
              animation: 'gradient-shift 4s ease infinite'
            }}
          >
            Featured Work
          </motion.h2>
          <motion.p 
            className="text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Real projects showcasing my journey from concept to completion, focusing on user-centered design and technical excellence
          </motion.p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -15,
                rotateY: 5,
                rotateX: 5,
              }}
              style={{ perspective: 1000 }}
            >
              <Card className="overflow-hidden group hover:shadow-2xl transition-all duration-500 border-2 hover:border-primary/30 relative bg-card/50 backdrop-blur-sm">
                {/* Enhanced animated border gradient */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary/20 via-cyan-400/10 to-purple-400/20 opacity-0 group-hover:opacity-100 rounded-lg"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                />
                
                {/* Project category badge */}
                <motion.div
                  className="absolute top-4 left-4 z-10"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Badge className="bg-primary/90 hover:bg-primary text-primary-foreground">
                    {project.category}
                  </Badge>
                </motion.div>
                
                <div className="aspect-video overflow-hidden relative">
                  <motion.div
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  >
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                  
                  {/* Enhanced overlay effect with gradient */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-background/80 via-primary/20 to-transparent opacity-0 group-hover:opacity-100"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  {/* Project metadata overlay */}
                  <motion.div
                    className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileHover={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="bg-background/90 backdrop-blur-sm rounded-lg p-2 text-xs">
                      <div className="text-muted-foreground">Duration: {project.duration}</div>
                      <div className="text-primary font-medium">{project.client}</div>
                    </div>
                  </motion.div>
                </div>
                
                <CardContent className="p-6 relative">
                  <div className="flex items-center justify-between mb-3">
                    <motion.h3 
                      className="text-xl font-serif"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.2 + index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.02 }}
                    >
                      {project.title}
                    </motion.h3>
                    <motion.span 
                      className="text-muted-foreground"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ 
                        color: "var(--primary)",
                        scale: 1.1 
                      }}
                    >
                      {project.year}
                    </motion.span>
                  </div>
                  
                  <motion.p 
                    className="text-muted-foreground mb-4 text-sm leading-relaxed"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {project.description}
                  </motion.p>
                  
                  <motion.div 
                    className="flex flex-wrap gap-2 mb-4"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {project.tags.map((tag, tagIndex) => (
                      <motion.div
                        key={tagIndex}
                        initial={{ scale: 0, rotate: -180 }}
                        whileInView={{ scale: 1, rotate: 0 }}
                        transition={{ 
                          delay: 0.6 + index * 0.1 + tagIndex * 0.05,
                          type: "spring",
                          stiffness: 200
                        }}
                        viewport={{ once: true }}
                        whileHover={{ 
                          scale: 1.1,
                          rotate: 5,
                          backgroundColor: "var(--primary)",
                          color: "var(--primary-foreground)"
                        }}
                      >
                        <Badge variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      </motion.div>
                    ))}
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Button 
                      variant="outline" 
                      className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 hover:scale-105 relative overflow-hidden"
                    >
                      <motion.span
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                        className="relative z-10"
                      >
                        View Case Study
                      </motion.span>
                      
                      {/* Button glow effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-primary/20 to-cyan-400/20 opacity-0 group-hover:opacity-100"
                        initial={{ x: "-100%" }}
                        whileHover={{ x: "100%" }}
                        transition={{ duration: 0.6 }}
                      />
                    </Button>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button size="lg" className="px-8 relative overflow-hidden group">
              <motion.span
                className="relative z-10"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                View All Projects
              </motion.span>
              
              {/* Button background animation */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary to-cyan-400 opacity-0 group-hover:opacity-100"
                initial={{ x: "-100%" }}
                whileHover={{ x: "0%" }}
                transition={{ duration: 0.3 }}
              />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}