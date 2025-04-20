import React from 'react';
import { ArrowRight } from 'lucide-react';

const CTA: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-cyan-950/50 to-black relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-600/20 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-violet-600/20 rounded-full blur-[100px]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Let's build the future together
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto mb-10">
            Join us in creating the next generation of decentralized technology.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a 
              href="mailto:work@vyrelabs.xyz"
              className="px-8 py-3 bg-cyan-600 hover:bg-cyan-500 text-white font-medium rounded-full flex items-center justify-center space-x-2 transition-colors w-full sm:w-auto"
            >
              <span>Contact Us</span>
              <ArrowRight className="h-4 w-4" />
            </a>
            <p className="text-white/60">work@vyrelabs.xyz</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;