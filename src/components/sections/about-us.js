import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Code, Smartphone, Palette, Users, Target, Eye } from 'lucide-react';
import { COMPANY_INFO, SERVICES, STATS } from '../../utils/constants';
import { useIntersectionObserver } from '../../hooks/use-intersection-observer';
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer, staggerItem } from '../../utils/animation-variants';

const CounterAnimation = ({ end, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const { elementRef, hasIntersected } = useIntersectionObserver();

  useEffect(() => {
    if (!hasIntersected) return;

    let startTime;
    const endCount = parseInt(end.replace(/\D/g, '')) || 0;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);

      setCount(Math.floor(progress * endCount));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [hasIntersected, end, duration]);

  return (
    <span ref={elementRef}>
      {end.includes('+') ? `${count}+` : end.includes('%') ? `${count}%` : end.includes('/') ? end : count}
    </span>
  );
};

const ServiceCard = ({ service, index }) => {
  const getIcon = (iconName) => {
    const icons = { Code, Smartphone, Palette, Users };
    const Icon = icons[iconName];
    return Icon ? <Icon className="h-8 w-8" /> : <Code className="h-8 w-8" />;
  };

  return (
    <motion.div
      variants={staggerItem}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className="bg-card border border-border rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="flex items-center space-x-4 mb-4">
        <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center text-white">
          {getIcon(service.icon)}
        </div>
        <h3 className="text-xl font-semibold text-foreground">{service.title}</h3>
      </div>
      <p className="text-muted-foreground">{service.description}</p>
    </motion.div>
  );
};

const AboutUs = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            About <span className="text-gradient">SATI Consulting</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            With over 5 years of experience in web and mobile development, we've helped businesses
            transform their digital presence and achieve remarkable growth.
          </motion.p>
        </motion.div>

        {/* Company Story */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20"
        >
          <motion.div variants={fadeInLeft} className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground">Our Story</h3>
            <p className="text-muted-foreground leading-relaxed">
              Founded in {COMPANY_INFO.founded}, SATI Consulting emerged from a passion for creating
              exceptional digital experiences. We started as a small team of developers and designers
              who believed that technology should be accessible, beautiful, and powerful.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Today, we're a full-service digital consultancy that has successfully delivered over 50
              projects across various industries. Our expertise spans modern web technologies, mobile
              app development, and strategic technology consulting.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We pride ourselves on building long-term partnerships with our clients, understanding
              their unique challenges, and delivering solutions that drive real business results.
            </p>
          </motion.div>

          <motion.div variants={fadeInRight} className="relative">
            <div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl border border-border/50 flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="w-20 h-20 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto flex items-center justify-center">
                  <Code className="h-10 w-10 text-white" />
                </div>
                <p className="text-muted-foreground">Company Image Placeholder</p>
              </div>
            </div>

            {/* Floating Stats */}
            <motion.div
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-4 -right-4 bg-card border border-border rounded-lg p-4 shadow-lg"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">50+</div>
                <div className="text-xs text-muted-foreground">Projects</div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [5, -5, 5] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-4 -left-4 bg-card border border-border rounded-lg p-4 shadow-lg"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-secondary">5+</div>
                <div className="text-xs text-muted-foreground">Years</div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Services */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="mb-20"
        >
          <motion.h3
            variants={fadeInUp}
            className="text-2xl font-bold text-center mb-12"
          >
            Our Services
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((service, index) => (
              <ServiceCard key={service.title} service={service} index={index} />
            ))}
          </div>
        </motion.div>

        {/* Statistics */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="bg-muted/50 rounded-2xl p-8 mb-20"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {STATS.map((stat, index) => (
              <motion.div
                key={stat.label}
                variants={staggerItem}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  <CounterAnimation end={stat.number} />
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Mission & Vision */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <motion.div
            variants={fadeInLeft}
            className="bg-card border border-border rounded-xl p-8"
          >
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
                <Target className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Our Mission</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              To empower businesses with innovative digital solutions that drive growth,
              enhance user experiences, and create lasting value in an ever-evolving digital landscape.
            </p>
          </motion.div>

          <motion.div
            variants={fadeInRight}
            className="bg-card border border-border rounded-xl p-8"
          >
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-secondary to-accent rounded-lg flex items-center justify-center">
                <Eye className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Our Vision</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              To be the leading digital consultancy that bridges the gap between cutting-edge
              technology and business success, creating a future where innovation is accessible to all.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
