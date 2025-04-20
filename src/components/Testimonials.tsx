import React from 'react';

const testimonials = [
  {
    quote: "Vyre Labs is at the forefront of Web3 innovation. Their protocol design and implementation are second to none.",
    author: "Alex Chen",
    title: "CTO at BlockMatrix",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    quote: "The team's deep understanding of both AI and blockchain technology has been invaluable for our project.",
    author: "Sarah Williams",
    title: "Founder of DeFi Protocol",
    image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    quote: "Their innovative approach to DAO tooling has transformed how we manage our decentralized organization.",
    author: "Michael Kumar",
    title: "Lead Developer at MetaDAO",
    image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=600"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-black to-cyan-950/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Trusted by Industry Leaders</h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            See what our partners say about working with Vyre Labs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:bg-white/10 transition-all duration-300"
            >
              <div className="flex flex-col h-full">
                <blockquote className="flex-1">
                  <p className="text-white/80 text-lg mb-6">"{testimonial.quote}"</p>
                </blockquote>
                <div className="flex items-center">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.author} 
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <p className="font-medium text-white">{testimonial.author}</p>
                    <p className="text-white/60 text-sm">{testimonial.title}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;