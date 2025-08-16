import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Badge } from "./ui/badge";
import { motion } from "motion/react";

export function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-muted/30 relative overflow-hidden">
      {/* Background animated elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating particles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/25 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20 + Math.random() * 10, 0],
              x: [0, Math.random() * 15 - 7.5, 0],
              opacity: [0.2, 0.6, 0.2],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeInOut",
            }}
          />
        ))}
        
        {/* Gradient waves */}
        <motion.div
          className="absolute top-10 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary/8 to-transparent"
          animate={{
            scaleX: [0, 1, 0],
            opacity: [0, 0.5, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        
        <motion.div
          className="absolute bottom-10 right-0 w-full h-0.3 bg-gradient-to-l from-transparent via-primary/6 to-transparent"
          animate={{
            scaleX: [0, 1, 0],
            opacity: [0, 0.3, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3,
          }}
        />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-3xl md:text-4xl mb-4 font-serif neon-text bg-gradient-to-r from-primary via-pink-400 to-cyan-400 bg-clip-text text-transparent"
            style={{
              backgroundSize: '200% 200%',
              animation: 'gradient-shift 3s ease infinite'
            }}
          >
            Let's Work Together
          </motion.h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind? I'd love to hear about it and explore how we can create something amazing together.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl mb-6 font-serif">Get in Touch</h3>
            <div className="space-y-6">
              {[
                { icon: "📧", title: "Email", value: "arkarnaynaing1058@gmail.com" },
                { icon: "📱", title: "Phone", value: "+95 9796599476" },
                { icon: "📍", title: "Location", value: "Yangon, Myanmar" }
              ].map((contact, index) => (
                <motion.div 
                  key={index}
                  className="flex items-center gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 8 }}
                >
                  <motion.div 
                    className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center"
                    whileHover={{ 
                      scale: 1.15,
                      backgroundColor: "rgba(59, 130, 246, 0.2)",
                      rotate: 5
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.span 
                      className="text-primary"
                      whileHover={{ scale: 1.2 }}
                    >
                      {contact.icon}
                    </motion.span>
                  </motion.div>
                  <div>
                    <motion.div 
                      className="font-medium"
                      whileHover={{ scale: 1.02 }}
                    >
                      {contact.title}
                    </motion.div>
                    <div className="text-muted-foreground">{contact.value}</div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <motion.div 
              className="mt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <h4 className="mb-4">Find me on</h4>
              <div className="flex gap-3">
                {["LinkedIn", "Dribbble", "Behance", "Twitter"].map((platform, index) => (
                  <motion.div
                    key={platform}
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    transition={{ 
                      duration: 0.5, 
                      delay: 0.6 + index * 0.1,
                      type: "spring",
                      stiffness: 200
                    }}
                    viewport={{ once: true }}
                    whileHover={{ 
                      scale: 1.1,
                      y: -2
                    }}
                  >
                    <Badge 
                      variant="outline" 
                      className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:shadow-lg"
                    >
                      {platform}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              whileHover={{ 
                y: -5,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
              transition={{ duration: 0.3 }}
            >
              <Card className="hover:shadow-lg transition-all duration-300 border-primary/10 hover:border-primary/20">
                <CardContent className="p-6">
                  <h3 className="text-xl mb-6 font-serif">Send a Message</h3>
                  <form className="space-y-4">
                    <motion.div 
                      className="grid grid-cols-2 gap-4"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      viewport={{ once: true }}
                    >
                      <motion.div whileHover={{ scale: 1.02 }}>
                        <label className="block mb-2">First Name</label>
                        <Input placeholder="John" className="transition-all duration-200 focus:scale-105" />
                      </motion.div>
                      <motion.div whileHover={{ scale: 1.02 }}>
                        <label className="block mb-2">Last Name</label>
                        <Input placeholder="Doe" className="transition-all duration-200 focus:scale-105" />
                      </motion.div>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.01 }}
                    >
                      <label className="block mb-2">Email</label>
                      <Input type="email" placeholder="john@example.com" className="transition-all duration-200 focus:scale-105" />
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.01 }}
                    >
                      <label className="block mb-2">Project Type</label>
                      <Input placeholder="Web Design, Mobile App, etc." className="transition-all duration-200 focus:scale-105" />
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.01 }}
                    >
                      <label className="block mb-2">Message</label>
                      <Textarea 
                        placeholder="Tell me about your project..." 
                        className="min-h-[120px] transition-all duration-200 focus:scale-105"
                      />
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.6 }}
                      viewport={{ once: true }}
                    >
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Button className="w-full transition-all duration-300 hover:shadow-lg">
                          Send Message
                        </Button>
                      </motion.div>
                    </motion.div>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}