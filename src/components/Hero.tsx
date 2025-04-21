import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { LampDemo } from '../components/acentric-ui';
import { WavyBackground } from '../components/wavy';

const Hero: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <div className="relative w-full overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center bg-black">
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-20 z-0" />

        {/* Lamp Demo */}
        <LampDemo />

        {/* Main Hero Content */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 text-center z-10"
        >
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-7xl font-bold text-white mb-8 leading-tight"
          >
            <div className="vyre-wrapper">
              <div className="vyre-top">VYRE</div>
              <div className="vyre-bottom">VYRE</div>
            </div>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="max-w-2xl mx-auto text-xl md:text-2xl text-white/70 mb-12"
          >
            Vyre Labs is a frontier technology lab building visionary products
            in AI, Web3, and decentralized infrastructure.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4"
          >
            <button className="px-8 py-4 bg-cyan-600 hover:bg-cyan-500 text-white font-medium rounded-full flex items-center space-x-2 transition-colors">
              <span>Explore Our Vision</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </motion.div>
        </motion.div>
      </section>

      {/* Spacer */}
      <div className="h-16 sm:h-32 bg-black"></div>

      {/* Wavy Background */}
      <div className="w-full absolute bottom-0 left-0">
        <WavyBackground
          waveOpacity={0.3}
          blur={20}
          speed="fast"
          className="pointer-events-none"
        />
      </div>
    </div>
  );
};

export default Hero;
