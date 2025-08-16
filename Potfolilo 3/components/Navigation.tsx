import { Button } from "./ui/button";
import { motion } from "motion/react";

export function Navigation() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav 
      className="fixed top-0 w-full bg-background/80 backdrop-blur-sm border-b border-border z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div 
            className="font-medium font-serif text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Arkar Nay Naing
          </motion.div>
          <motion.div 
            className="hidden md:flex items-center gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            {['about', 'work', 'skills', 'contact'].map((item, index) => (
              <motion.button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-muted-foreground hover:text-foreground transition-colors capitalize relative"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
              >
                {item}
                <motion.div
                  className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary"
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            ))}
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <Button 
              onClick={() => scrollToSection('contact')}
              className="hidden md:block"
            >
              Get in Touch
            </Button>
          </motion.div>
        </div>
      </div>
    </motion.nav>
  );
}