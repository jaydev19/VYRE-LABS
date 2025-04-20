import React from 'react';
import { Code2, Brain, Blocks, Users2, Database, Lock } from 'lucide-react';
import FeatureCard from './FeatureCard';

const Features: React.FC = () => {
  const features = [
    {
      icon: <Code2 className="h-6 w-6 text-cyan-400" />,
      title: 'Smart Protocol Design',
      description: 'Building robust, scalable protocols that power the next generation of decentralized applications.'
    },
    {
      icon: <Brain className="h-6 w-6 text-cyan-400" />,
      title: 'AI + Blockchain Integration',
      description: 'Seamlessly combining artificial intelligence with blockchain technology for innovative solutions.'
    },
    {
      icon: <Blocks className="h-6 w-6 text-cyan-400" />,
      title: 'Web3 Product Development',
      description: 'Creating intuitive, powerful Web3 products that drive adoption and innovation.'
    },
    {
      icon: <Users2 className="h-6 w-6 text-cyan-400" />,
      title: 'DAO Tooling',
      description: 'Custom solutions for DAOs and digital nations, enabling effective decentralized governance.'
    },
    {
      icon: <Database className="h-6 w-6 text-cyan-400" />,
      title: 'Decentralized Infrastructure',
      description: 'Building the foundation for a more open, accessible, and decentralized internet.'
    },
    {
      icon: <Lock className="h-6 w-6 text-cyan-400" />,
      title: 'Security First',
      description: 'Implementing robust security measures and best practices in all our solutions.'
    },
  ];

  return (
    <section id="features" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">What We Do</h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Custom solutions for the next generation of digital builders.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
        
        <div className="mt-20 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-cyan-900/20 to-black rounded-xl"></div>
          <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden">
            <div className="grid md:grid-cols-2 gap-8 p-8">
              <div className="flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-white mb-6">Who We Are</h3>
                <p className="text-white/70 mb-6">
                  At Vyre Labs, we're explorers of the unknown — designing digital ecosystems, tools, and frameworks that unlock the full potential of decentralization.
                </p>
                <ul className="space-y-3">
                  {['Open Systems', 'Digital Sovereignty', 'Innovation', 'Trustless Architecture'].map((item, i) => (
                    <li key={i} className="flex items-center text-white/70">
                      <span className="h-2 w-2 bg-cyan-400 rounded-full mr-3"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative h-[300px] md:h-auto">
                <img 
                  src="https://images.pexels.com/photos/8386422/pexels-photo-8386422.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Future of Web3" 
                  className="absolute inset-0 w-full h-full object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-black/70 to-transparent rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;