import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Github, User } from 'lucide-react';
import { TEAM_MEMBERS } from '../../utils/constants';
import { fadeInUp, staggerContainer, staggerItem, cardHover } from '../../utils/animation-variants';

const TeamMemberCard = ({ member, index }) => {
  return (
    <motion.div
      variants={staggerItem}
      whileHover={cardHover}
      className="bg-card border border-border rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow group"
    >
      {/* Profile Image */}
      <div className="relative aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
        <div className="w-24 h-24 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center">
          <User className="h-12 w-12 text-white" />
        </div>
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
        <p className="absolute bottom-4 left-4 text-xs text-muted-foreground bg-background/80 px-2 py-1 rounded">
          Profile Image Placeholder
        </p>
      </div>

      {/* Member Info */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-foreground mb-1">{member.name}</h3>
        <p className="text-primary font-medium mb-3">{member.role}</p>
        <p className="text-muted-foreground text-sm leading-relaxed mb-4">
          {member.bio}
        </p>

        {/* Social Links */}
        <div className="flex space-x-3">
          <motion.a
            href={member.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="w-8 h-8 bg-muted rounded-full flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
            aria-label={`${member.name} LinkedIn`}
          >
            <Linkedin className="h-4 w-4" />
          </motion.a>
          <motion.a
            href={member.social.github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="w-8 h-8 bg-muted rounded-full flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
            aria-label={`${member.name} GitHub`}
          >
            <Github className="h-4 w-4" />
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

const Team = () => {
  return (
    <section id="team" className="py-20 bg-muted/30">
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
            Meet Our <span className="text-gradient">Expert Team</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            Our diverse team of talented professionals brings together years of experience
            in web development, mobile apps, design, and technology consulting.
          </motion.p>
        </motion.div>

        {/* Team Grid */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {TEAM_MEMBERS.map((member, index) => (
            <TeamMemberCard key={member.name} member={member} index={index} />
          ))}
        </motion.div>

        {/* Team Values */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="mt-20"
        >
          <motion.div
            variants={fadeInUp}
            className="bg-card border border-border rounded-2xl p-8 md:p-12 text-center"
          >
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Why Our Team Makes the Difference
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div variants={staggerItem} className="space-y-3">
                <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-lg mx-auto flex items-center justify-center">
                  <span className="text-white font-bold">E</span>
                </div>
                <h4 className="font-semibold text-foreground">Expertise</h4>
                <p className="text-muted-foreground text-sm">
                  Deep technical knowledge across modern web and mobile technologies
                </p>
              </motion.div>

              <motion.div variants={staggerItem} className="space-y-3">
                <div className="w-12 h-12 bg-gradient-to-r from-secondary to-accent rounded-lg mx-auto flex items-center justify-center">
                  <span className="text-white font-bold">C</span>
                </div>
                <h4 className="font-semibold text-foreground">Collaboration</h4>
                <p className="text-muted-foreground text-sm">
                  Seamless teamwork and communication throughout every project
                </p>
              </motion.div>

              <motion.div variants={staggerItem} className="space-y-3">
                <div className="w-12 h-12 bg-gradient-to-r from-accent to-primary rounded-lg mx-auto flex items-center justify-center">
                  <span className="text-white font-bold">I</span>
                </div>
                <h4 className="font-semibold text-foreground">Innovation</h4>
                <p className="text-muted-foreground text-sm">
                  Constantly exploring new technologies and best practices
                </p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Team;
