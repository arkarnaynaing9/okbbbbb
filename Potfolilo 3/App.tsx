import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Portfolio } from "./components/Portfolio";
import { Skills } from "./components/Skills";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { motion } from "motion/react";

export default function App() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Enhanced global moving elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Traveling particles */}
        <motion.div
          className="absolute top-0 left-0 w-1 h-1 bg-primary/20 rounded-full"
          animate={{
            x: [0, window.innerWidth || 1200],
            y: [0, (window.innerHeight || 800) * 0.3, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        
        <motion.div
          className="absolute top-1/4 right-0 w-1.5 h-1.5 bg-primary/15 rounded-full"
          animate={{
            x: [0, -(window.innerWidth || 1200)],
            y: [0, (window.innerHeight || 800) * 0.4, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
            delay: 5,
          }}
        />
        
        <motion.div
          className="absolute bottom-1/3 left-0 w-0.5 h-0.5 bg-primary/25 rounded-full"
          animate={{
            x: [0, window.innerWidth || 1200],
            y: [0, -(window.innerHeight || 800) * 0.2, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear",
            delay: 10,
          }}
        />
        
        {/* Additional diagonal movers */}
        <motion.div
          className="absolute top-1/2 left-0 w-0.5 h-0.5 bg-primary/15 rounded-full"
          animate={{
            x: [0, window.innerWidth || 1200],
            y: [0, -(window.innerHeight || 800) * 0.5, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
            delay: 15,
          }}
        />
        
        <motion.div
          className="absolute bottom-0 right-0 w-1 h-1 bg-primary/10 rounded-full"
          animate={{
            x: [0, -(window.innerWidth || 1200)],
            y: [0, -(window.innerHeight || 800) * 0.6, 0],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "linear",
            delay: 8,
          }}
        />
        
        {/* Wave-like patterns */}
        <motion.div
          className="absolute top-1/6 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/10 to-transparent"
          animate={{
            scaleX: [0, 1, 0],
            x: [0, 200, 400],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        <motion.div
          className="absolute bottom-1/6 right-0 w-full h-0.5 bg-gradient-to-l from-transparent via-cyan-400/15 to-transparent"
          animate={{
            scaleX: [0, 1, 0],
            x: [0, -300, -600],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
        
        {/* Neon gradient waves */}
        <motion.div
          className="absolute top-1/3 left-0 w-full h-2 bg-gradient-to-r from-transparent via-cyan-400/20 via-primary/20 via-purple-400/20 to-transparent blur-sm"
          style={{
            backgroundSize: '200% 200%'
          }}
          animate={{
            scaleX: [0, 1, 0],
            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        
        <motion.div
          className="absolute bottom-1/3 right-0 w-full h-1.5 bg-gradient-to-l from-transparent via-pink-400/15 via-blue-400/15 via-green-400/15 to-transparent blur-sm"
          style={{
            backgroundSize: '200% 200%'
          }}
          animate={{
            scaleX: [0, 1, 0],
            backgroundPosition: ['100% 50%', '0% 50%', '100% 50%'],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4,
          }}
        />
        
        {/* Floating geometric shapes with neon effects */}
        <motion.div
          className="absolute top-1/6 left-1/3 w-8 h-8 border border-primary/10"
          style={{
            background: 'linear-gradient(45deg, rgba(59, 130, 246, 0.1), rgba(6, 182, 212, 0.1))',
            boxShadow: '0 0 20px rgba(59, 130, 246, 0.3)'
          }}
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        <motion.div
          className="absolute bottom-1/4 left-2/3 w-6 h-6 bg-gradient-to-br from-primary/20 via-cyan-400/15 to-purple-400/10 rotate-45"
          style={{
            boxShadow: '0 0 15px rgba(59, 130, 246, 0.4)'
          }}
          animate={{
            rotate: [45, 405],
            y: [0, -30, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3,
          }}
        />
        
        {/* Additional geometric shapes with gradient neons */}
        <motion.div
          className="absolute top-1/3 left-1/6 w-4 h-4 border-2 border-primary/15 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.2), rgba(6, 182, 212, 0.1))',
            boxShadow: '0 0 10px rgba(59, 130, 246, 0.5), inset 0 0 10px rgba(6, 182, 212, 0.3)'
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.7, 0.3],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        
        <motion.div
          className="absolute bottom-1/3 right-1/6 w-5 h-5"
          style={{ 
            clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
            background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.3), rgba(59, 130, 246, 0.2))',
            boxShadow: '0 0 12px rgba(139, 92, 246, 0.6)'
          }}
          animate={{
            rotate: [0, 360],
            scale: [1, 1.4, 1],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 5,
          }}
        />
        
        {/* Neon orbiting elements */}
        <motion.div
          className="absolute top-1/3 right-1/4"
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <motion.div
            className="w-1 h-1 bg-gradient-to-r from-primary to-cyan-400 rounded-full"
            style={{ 
              transformOrigin: "0 30px",
              boxShadow: '0 0 8px rgba(59, 130, 246, 0.8)'
            }}
            animate={{
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
        
        <motion.div
          className="absolute bottom-1/2 left-1/4"
          animate={{
            rotate: [360, 0],
          }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <motion.div
            className="w-0.5 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"
            style={{ 
              transformOrigin: "0 40px",
              boxShadow: '0 0 6px rgba(139, 92, 246, 0.8)'
            }}
            animate={{
              scale: [1, 1.8, 1],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
        
        {/* More complex orbiting systems with gradients */}
        <motion.div
          className="absolute top-2/3 right-1/3"
          animate={{
            rotate: [0, -360],
          }}
          transition={{
            duration: 50,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <motion.div
            className="w-0.5 h-0.5 bg-gradient-to-br from-cyan-400 via-blue-400 to-purple-400 rounded-full"
            style={{ 
              transformOrigin: "0 50px",
              boxShadow: '0 0 10px rgba(6, 182, 212, 0.8)'
            }}
            animate={{
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
        
        {/* Enhanced pulsing background spots with gradients */}
        <motion.div
          className="absolute top-1/5 right-1/3 w-32 h-32 rounded-full blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.3), rgba(6, 182, 212, 0.2), transparent)'
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        <motion.div
          className="absolute bottom-1/5 left-1/4 w-24 h-24 rounded-full blur-2xl"
          style={{
            background: 'radial-gradient(circle, rgba(139, 92, 246, 0.2), rgba(236, 72, 153, 0.15), transparent)'
          }}
          animate={{
            scale: [1.2, 0.8, 1.2],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4,
          }}
        />
        
        {/* Additional pulsing spots with gradient neons */}
        <motion.div
          className="absolute top-3/4 left-3/4 w-20 h-20 rounded-full blur-2xl"
          style={{
            background: 'radial-gradient(circle, rgba(16, 185, 129, 0.2), rgba(59, 130, 246, 0.15), transparent)'
          }}
          animate={{
            scale: [0.8, 1.3, 0.8],
            opacity: [0.1, 0.4, 0.1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        
        {/* Gradient flowing lines with enhanced neon */}
        <motion.div
          className="absolute top-0 left-1/4 w-0.5 h-full blur-sm"
          style={{
            background: 'linear-gradient(to bottom, transparent, rgba(59, 130, 246, 0.4), rgba(6, 182, 212, 0.3), transparent)'
          }}
          animate={{
            scaleY: [0, 1, 0],
            opacity: [0, 0.5, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
        
        <motion.div
          className="absolute top-0 right-1/3 w-0.3 h-full blur-sm"
          style={{
            background: 'linear-gradient(to bottom, transparent, rgba(139, 92, 246, 0.3), rgba(236, 72, 153, 0.2), transparent)'
          }}
          animate={{
            scaleY: [0, 1, 0],
            opacity: [0, 0.3, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4,
          }}
        />
        
        {/* Enhanced floating dots constellation with gradients */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-0.5 h-0.5 rounded-full"
            style={{
              left: `${20 + (i * 5) % 60}%`,
              top: `${10 + (i * 7) % 80}%`,
              background: `linear-gradient(45deg, rgba(${59 + i * 10}, ${130 + i * 5}, ${246 - i * 5}, 0.${3 + i % 5}), rgba(${6 + i * 8}, ${182 - i * 3}, ${212 + i * 2}, 0.${2 + i % 4}))`,
              boxShadow: `0 0 ${3 + i % 5}px rgba(59, 130, 246, 0.${5 + i % 3})`
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.2, 0.6, 0.2],
              y: [0, -10, 0],
            }}
            transition={{
              duration: 4 + (i % 3),
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.2,
            }}
          />
        ))}
        
        {/* Rotating gradient rings with neon */}
        <motion.div
          className="absolute top-1/4 left-1/2 w-16 h-16"
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <div 
            className="w-full h-full rounded-full border-2"
            style={{
              borderImage: 'linear-gradient(45deg, rgba(59, 130, 246, 0.5), rgba(6, 182, 212, 0.3), rgba(139, 92, 246, 0.4)) 1',
              boxShadow: '0 0 15px rgba(59, 130, 246, 0.3)'
            }}
          ></div>
        </motion.div>
        
        <motion.div
          className="absolute bottom-1/4 right-1/2 w-12 h-12"
          animate={{
            rotate: [360, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <div 
            className="w-full h-full rounded-full border-2"
            style={{
              borderImage: 'linear-gradient(135deg, rgba(236, 72, 153, 0.4), rgba(59, 130, 246, 0.3), rgba(16, 185, 129, 0.3)) 1',
              boxShadow: '0 0 12px rgba(236, 72, 153, 0.4)'
            }}
          ></div>
        </motion.div>
      </div>

      <div className="relative z-10">
        <Navigation />
        <main>
          <Hero />
          <About />
          <Portfolio />
          <Skills />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}