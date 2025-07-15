import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Github, Twitter, Instagram } from 'lucide-react';
import { COMPANY_INFO, NAVIGATION_ITEMS, SOCIAL_LINKS } from '../../utils/constants';
import { fadeInUp, staggerContainer, staggerItem } from '../../utils/animation-variants';

const Footer = () => {
  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const getIcon = (iconName) => {
    const icons = {
      Linkedin,
      Github,
      Twitter,
      Instagram,
    };
    const Icon = icons[iconName];
    return Icon ? <Icon className="h-5 w-5" /> : null;
  };

  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-4 gap-8"
        >
          {/* Company Info */}
          <motion.div variants={staggerItem} className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">S</span>
              </div>
              <span className="text-xl font-bold text-gradient">{COMPANY_INFO.name}</span>
            </div>
            <p className="text-muted-foreground text-sm">
              {COMPANY_INFO.tagline}
            </p>
            <p className="text-muted-foreground text-sm">
              {COMPANY_INFO.subtitle}
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={staggerItem} className="space-y-4">
            <h3 className="font-semibold text-foreground">Quick Links</h3>
            <nav className="space-y-2">
              {NAVIGATION_ITEMS.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={staggerItem} className="space-y-4">
            <h3 className="font-semibold text-foreground">Contact</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>{COMPANY_INFO.email}</p>
              <p>{COMPANY_INFO.phone}</p>
              <p>{COMPANY_INFO.address}</p>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={staggerItem} className="space-y-4">
            <h3 className="font-semibold text-foreground">Follow Us</h3>
            <div className="flex space-x-4">
              {SOCIAL_LINKS.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label={social.name}
                >
                  {getIcon(social.icon)}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          {...fadeInUp}
          className="mt-8 pt-8 border-t border-border text-center"
        >
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} {COMPANY_INFO.name}. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
