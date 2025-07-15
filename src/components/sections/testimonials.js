import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote, User } from 'lucide-react';
import { Button } from '../ui/button';
import { TESTIMONIALS } from '../../utils/constants';
import { fadeInUp, staggerContainer, staggerItem } from '../../utils/animation-variants';

const StarRating = ({ rating }) => {
  return (
    <div className="flex space-x-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-muted-foreground'
            }`}
        />
      ))}
    </div>
  );
};

const TestimonialCard = ({ testimonial, isActive }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: isActive ? 1 : 0.7, scale: isActive ? 1 : 0.95 }}
      transition={{ duration: 0.5 }}
      className={`bg-card border border-border rounded-xl p-8 shadow-sm ${isActive ? 'shadow-lg' : ''
        } transition-shadow`}
    >
      {/* Quote Icon */}
      <div className="flex justify-center mb-6">
        <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center">
          <Quote className="h-6 w-6 text-white" />
        </div>
      </div>

      {/* Testimonial Content */}
      <blockquote className="text-center mb-6">
        <p className="text-lg text-foreground leading-relaxed italic">
          "{testimonial.content}"
        </p>
      </blockquote>

      {/* Rating */}
      <div className="flex justify-center mb-6">
        <StarRating rating={testimonial.rating} />
      </div>

      {/* Client Info */}
      <div className="flex items-center justify-center space-x-4">
        <div className="w-12 h-12 bg-gradient-to-r from-muted to-muted-foreground/20 rounded-full flex items-center justify-center">
          <User className="h-6 w-6 text-muted-foreground" />
        </div>
        <div className="text-center">
          <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
          <p className="text-sm text-muted-foreground">
            {testimonial.role} at {testimonial.company}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);

  // Function to start/restart the auto-play timer
  const startAutoPlay = () => {
    // Clear existing interval if any
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    // Start new interval
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === TESTIMONIALS.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
  };

  // Auto-play functionality
  useEffect(() => {
    startAutoPlay();

    // Cleanup on unmount
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? TESTIMONIALS.length - 1 : currentIndex - 1);
    startAutoPlay(); // Reset timer
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === TESTIMONIALS.length - 1 ? 0 : currentIndex + 1);
    startAutoPlay(); // Reset timer
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
    startAutoPlay(); // Reset timer
  };

  return (
    <section id="testimonials" className="py-20 bg-background">
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
            What Our <span className="text-gradient">Clients Say</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            Don't just take our word for it. Here's what our clients have to say about
            working with SATI Consulting.
          </motion.p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-4xl mx-auto">
          {/* Main Testimonial Display */}
          <div className="relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="w-full"
              >
                <TestimonialCard
                  testimonial={TESTIMONIALS[currentIndex]}
                  isActive={true}
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center items-center space-x-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={goToPrevious}
              className="rounded-full"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>

            {/* Dots Indicator */}
            <div className="flex space-x-2">
              {TESTIMONIALS.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${index === currentIndex
                    ? 'bg-primary'
                    : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                    }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={goToNext}
              className="rounded-full"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>


        </div>

        {/* All Testimonials Grid (Hidden on mobile, shown on larger screens) */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="hidden lg:grid grid-cols-2 gap-8 mt-20"
        >
          {TESTIMONIALS.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              variants={staggerItem}
              className="bg-muted/50 rounded-xl p-6"
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <User className="h-6 w-6 text-muted-foreground" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <StarRating rating={testimonial.rating} />
                  </div>
                  <p className="text-sm text-muted-foreground mb-3 italic">
                    "{testimonial.content}"
                  </p>
                  <div>
                    <p className="font-medium text-foreground text-sm">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {testimonial.role} at {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
