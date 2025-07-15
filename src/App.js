import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// Layout Components
import Header from './components/layout/header';
import Footer from './components/layout/footer';

// Section Components
import Hero from './components/sections/hero';
import AboutUs from './components/sections/about-us';
import Team from './components/sections/team';
import Testimonials from './components/sections/testimonials';
import Contact from './components/sections/contact';

// Common Components
import ScrollToTop from './components/common/scroll-to-top';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  // Initialize dark mode from localStorage
  useEffect(() => {
    const savedDarkMode = localStorage.getItem('darkMode');
    if (savedDarkMode) {
      setDarkMode(JSON.parse(savedDarkMode));
    } else {
      // Check system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setDarkMode(prefersDark);
    }
  }, []);

  // Apply dark mode class to document
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      {/* Main Content */}
      <main>
        <Hero />
        <AboutUs />
        <Team />
        <Testimonials />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Scroll to Top Button */}
      <ScrollToTop />

      {/* Loading Animation (Optional) */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="fixed inset-0 bg-background z-50 flex items-center justify-center pointer-events-none"
      >
        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto mb-4 flex items-center justify-center">
            <span className="text-white font-bold text-xl">S</span>
          </div>
          <div className="animate-pulse text-muted-foreground">Loading...</div>
        </div>
      </motion.div>
    </div>
  );
}

export default App;
