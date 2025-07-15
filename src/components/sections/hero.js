import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Play, ArrowRight } from 'lucide-react';
import { Button } from '../ui/button';
import { COMPANY_INFO } from '../../utils/constants';
import { fadeInUp, staggerContainer, staggerItem } from '../../utils/animation-variants';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-muted/20 pt-16">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute top-1/2 right-1/3 w-48 h-48 bg-accent/10 rounded-full blur-2xl"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="text-center max-w-4xl mx-auto"
        >
          {/* Main Headline */}
          <motion.h1
            variants={fadeInUp}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          >
            <span className="text-gradient">{COMPANY_INFO.tagline}</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={fadeInUp}
            className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto"
          >
            {COMPANY_INFO.subtitle}
          </motion.p>

          {/* Description */}
          <motion.p
            variants={fadeInUp}
            className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto"
          >
            We specialize in creating cutting-edge web and mobile applications that drive business growth.
            From concept to deployment, we deliver exceptional digital solutions tailored to your needs.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={staggerContainer}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <motion.div variants={staggerItem}>
              <Button
                size="lg"
                variant="gradient"
                onClick={() => scrollToSection('contact')}
                className="group"
              >
                Get Started
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>

            <motion.div variants={staggerItem}>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection('about')}
                className="group"
              >
                <Play className="mr-2 h-4 w-4" />
                View Our Work
              </Button>
            </motion.div>
          </motion.div>

          {/* Hero Image Placeholder */}
          <motion.div
            variants={fadeInUp}
            className="relative max-w-4xl mx-auto mb-16"
          >
            <div className="relative">
              <div className="aspect-video bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl border border-border/50 backdrop-blur-sm flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto flex items-center justify-center">
                    <Play className="h-8 w-8 text-white" />
                  </div>
                  <p className="text-muted-foreground">Hero Image / Video Placeholder</p>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-4 -left-4 w-8 h-8 bg-primary rounded-full opacity-60"
              />
              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-4 -right-4 w-6 h-6 bg-secondary rounded-full opacity-60"
              />
              <motion.div
                animate={{ y: [-5, 15, -5] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-1/2 -right-8 w-4 h-4 bg-accent rounded-full opacity-60"
              />
            </div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col items-center"
          >
            <p className="text-sm text-muted-foreground mb-4">Scroll to explore</p>
            <motion.button
              onClick={() => scrollToSection('about')}
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Scroll down"
            >
              <ChevronDown className="h-6 w-6" />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
