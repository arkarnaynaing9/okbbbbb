import { Button } from "./ui/button";
import { motion } from "motion/react";
import { AnimatedRoleText } from "./AnimatedRoleText";

export function Hero() {
  const scrollToWork = () => {
    const element = document.getElementById('work');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20 relative overflow-hidden">
      {/* Enhanced animated background elements with cyberpunk aesthetics */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Main energy orbs with gradient neon */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.15), rgba(6, 182, 212, 0.1), transparent)',
            boxShadow: '0 0 100px rgba(59, 130, 246, 0.2)'
          }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.4, 0.7, 0.4],
            x: [0, 60, 0],
            y: [0, -40, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(139, 92, 246, 0.12), rgba(236, 72, 153, 0.08), transparent)',
            boxShadow: '0 0 120px rgba(139, 92, 246, 0.15)'
          }}
          animate={{
            scale: [1.2, 0.9, 1.2],
            opacity: [0.3, 0.6, 0.3],
            x: [0, -50, 0],
            y: [0, 35, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
        
        {/* Cyberpunk floating elements with enhanced gradients */}
        <motion.div
          className="absolute top-1/3 right-1/6 w-32 h-32 rounded-full blur-2xl"
          style={{
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.25), rgba(6, 182, 212, 0.15), transparent)',
            boxShadow: '0 0 60px rgba(59, 130, 246, 0.3)'
          }}
          animate={{
            x: [0, 120, 0],
            y: [0, -60, 0],
            scale: [0.8, 1.4, 0.8],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        <motion.div
          className="absolute bottom-1/3 left-1/6 w-24 h-24 rounded-full blur-xl"
          style={{
            background: 'radial-gradient(circle, rgba(16, 185, 129, 0.2), rgba(59, 130, 246, 0.1), transparent)',
            boxShadow: '0 0 50px rgba(16, 185, 129, 0.25)'
          }}
          animate={{
            x: [0, -90, 0],
            y: [0, 50, 0],
            scale: [1, 0.6, 1],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        
        {/* Digital matrix rain effect */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`matrix-${i}`}
            className="absolute w-0.5 h-20"
            style={{
              left: `${10 + i * 12}%`,
              top: 0,
              background: `linear-gradient(to bottom, transparent, rgba(${59 + i * 20}, ${130 + i * 10}, ${246 - i * 15}, 0.${3 + i % 4}), transparent)`,
              boxShadow: `0 0 ${3 + i % 3}px rgba(59, 130, 246, 0.${4 + i % 3})`
            }}
            animate={{
              y: ['-100%', '100vh'],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              ease: "linear",
              delay: i * 0.5,
            }}
          />
        ))}
        
        {/* Cyberpunk geometric shapes */}
        <motion.div
          className="absolute top-1/5 left-1/5 w-16 h-16 border border-primary/20"
          style={{
            background: 'linear-gradient(45deg, rgba(59, 130, 246, 0.1), rgba(6, 182, 212, 0.05))',
            clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
            boxShadow: '0 0 25px rgba(59, 130, 246, 0.3)'
          }}
          animate={{
            rotate: [0, 360],
            scale: [1, 1.3, 1],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        
        <motion.div
          className="absolute bottom-1/5 right-1/5 w-12 h-12 border-2 border-cyan-400/25"
          style={{
            background: 'radial-gradient(circle, rgba(6, 182, 212, 0.2), rgba(59, 130, 246, 0.1))',
            borderRadius: '50%',
            boxShadow: '0 0 20px rgba(6, 182, 212, 0.4)'
          }}
          animate={{
            scale: [1, 1.6, 1],
            opacity: [0.5, 0.9, 0.5],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3,
          }}
        />
        
        {/* Neon grid overlay */}
        <motion.div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
          animate={{
            opacity: [0.05, 0.15, 0.05],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        {/* Holographic scanning lines */}
        <motion.div
          className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/40 to-transparent blur-sm"
          animate={{
            y: [0, '100vh', 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        
        <motion.div
          className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-transparent via-cyan-400/30 to-transparent blur-sm"
          animate={{
            x: [0, '-100vw', 0],
            opacity: [0, 0.8, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
            delay: 2,
          }}
        />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.h1 
          className="text-3xl md:text-5xl lg:text-6xl mb-8 font-serif font-bold leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Hi, I'm{" "}
          <motion.span 
            className="text-primary bg-gradient-to-r from-primary via-cyan-400 to-blue-400 bg-clip-text text-transparent neon-text"
            style={{ 
              backgroundSize: '200% 200%',
              animation: 'gradient-shift 3s ease infinite'
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Arkar Nay Naing
          </motion.span>
          <br />
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="inline-block mt-2"
            style={{ minHeight: "4rem" }} // Ensure consistent height
          >
            <span className="inline-block">And I'm a </span>
            <AnimatedRoleText />
          </motion.span>
        </motion.h1>

        <motion.p 
          className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          I craft digital experiences that are both beautiful and functional. 
          Passionate about creating user-centered designs that solve real problems 
          and delight users.
        </motion.p>

        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button size="lg" onClick={scrollToWork} className="px-8 py-3">
              View My Work
            </Button>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button variant="outline" size="lg" className="px-8 py-3">
              Download Resume
            </Button>
          </motion.div>
        </motion.div>

        {/* Enhanced floating elements */}
        <motion.div
          className="absolute top-20 right-10 w-4 h-4 bg-primary rounded-full opacity-60"
          animate={{
            y: [-20, 20, -20],
            x: [0, 10, 0],
            opacity: [0.4, 0.8, 0.4],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-32 left-16 w-3 h-3 bg-primary/60 rounded-full"
          animate={{
            y: [20, -20, 20],
            x: [0, -15, 0],
            opacity: [0.3, 0.7, 0.3],
            scale: [0.8, 1.3, 0.8],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        
        {/* Enhanced moving elements */}
        <motion.div
          className="absolute top-1/2 left-8 w-2 h-2 bg-primary/40 rounded-full"
          animate={{
            y: [0, -40, 0],
            x: [0, 20, 0],
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
        
        <motion.div
          className="absolute top-1/3 right-20 w-5 h-5 bg-primary/30 rounded-full"
          animate={{
            y: [0, 30, 0],
            x: [0, -25, 0],
            scale: [0.7, 1.4, 0.7],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        />
        
        {/* Additional decorative elements */}
        <motion.div
          className="absolute top-16 left-1/4 w-1 h-1 bg-primary/50 rounded-full"
          animate={{
            scale: [1, 2, 1],
            opacity: [0.5, 1, 0.5],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5,
          }}
        />
        
        <motion.div
          className="absolute bottom-20 right-1/3 w-1.5 h-1.5 bg-primary/40"
          style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
          animate={{
            rotate: [0, 360],
            scale: [1, 1.6, 1],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3,
          }}
        />
        
        {/* Constellation-like pattern */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-0.5 h-0.5 bg-primary/30 rounded-full"
            style={{
              left: `${15 + i * 12}%`,
              top: `${20 + (i % 2) * 60}%`,
            }}
            animate={{
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 2 + i * 0.3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          />
        ))}
      </div>
    </section>
  );
}