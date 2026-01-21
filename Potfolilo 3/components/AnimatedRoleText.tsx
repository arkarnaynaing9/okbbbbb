import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";

const roles = [
  { en: "UX/UI Designer", jp: "デザイナー", translation: "Designer" },
  { en: "UX/UI Designer", jp: "ユーザー体験", translation: "User Experience" },
  { en: "UX/UI Designer", jp: "インターフェース", translation: "Interface" },
  { en: "UX/UI Designer", jp: "創造者", translation: "Creator" }
];

export function AnimatedRoleText() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showJapanese, setShowJapanese] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowJapanese(prev => {
        if (prev) {
          // If currently showing Japanese, move to next role and show English
          setCurrentIndex((prevIndex) => (prevIndex + 1) % roles.length);
          return false;
        } else {
          // If currently showing English, show Japanese
          return true;
        }
      });
    }, 2000); // Change every 2 seconds

    return () => clearInterval(interval);
  }, []);

  const currentRole = roles[currentIndex];

  return (
    <span className="relative inline-block min-w-[300px] text-left" style={{ height: "1.2em" }}>
      <AnimatePresence mode="wait">
        <motion.span
          key={`${currentIndex}-${showJapanese ? 'jp' : 'en'}`}
          initial={{ opacity: 0, filter: "blur(10px)", y: 10 }}
          animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          exit={{ opacity: 0, filter: "blur(10px)", y: -10 }}
          transition={{ 
            duration: 0.6,
            ease: "easeInOut"
          }}
          className="absolute top-0 left-0 inline-block text-primary bg-gradient-to-r from-primary via-blue-400 to-cyan-400 bg-clip-text text-transparent font-bold whitespace-nowrap"
          style={{
            backgroundSize: '200% 200%',
            animation: 'gradient-shift 3s ease infinite'
          }}
        >
          {showJapanese ? currentRole.jp : currentRole.en}
        </motion.span>
      </AnimatePresence>
      
      {/* Invisible placeholder to maintain layout - increased width */}
      <span className="invisible font-bold whitespace-nowrap">UX/UI Designer</span>
      
      {/* Subtle indicator for Japanese mode */}
      <AnimatePresence>
        {showJapanese && (
          <motion.div
            className="absolute -bottom-6 left-0 text-xs text-muted-foreground font-medium whitespace-nowrap opacity-70"
            initial={{ opacity: 0, scale: 0.8, y: -5 }}
            animate={{ opacity: 0.7, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 5 }}
            transition={{ duration: 0.3 }}
          >
            {currentRole.translation}
          </motion.div>
        )}
      </AnimatePresence>
    </span>
  );
}