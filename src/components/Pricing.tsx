import React from 'react';
import { Check } from 'lucide-react';

const pricingPlans = [
  {
    name: "Starter",
    price: 0,
    description: "For individuals and small teams getting started.",
    features: [
      "Up to 5 team members",
      "5 GB storage",
      "Basic search",
      "Standard docs & wiki",
      "3 workspaces",
      "Community support"
    ],
    cta: "Get started",
    highlighted: false
  },
  {
    name: "Pro",
    price: 12,
    description: "For growing teams that need more power and flexibility.",
    features: [
      "Up to 50 team members",
      "50 GB storage",
      "Advanced search",
      "All document types",
      "Unlimited workspaces",
      "Version history",
      "Priority support"
    ],
    cta: "Start free trial",
    highlighted: true
  },
  {
    name: "Enterprise",
    price: null,
    description: "For organizations with advanced needs.",
    features: [
      "Unlimited team members",
      "Unlimited storage",
      "AI-powered search",
      "Advanced permissions",
      "Custom branding",
      "SSO & SAML",
      "Dedicated support",
      "Training & onboarding"
    ],
    cta: "Contact sales",
    highlighted: false
  }
];

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-20 bg-indigo-950/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Simple, transparent pricing</h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Choose the plan that's right for your team, with no hidden fees.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-xl overflow-hidden ${
                plan.highlighted
                  ? 'ring-2 ring-indigo-500 bg-indigo-900/30'
                  : 'bg-white/5 backdrop-blur-sm'
              }`}
            >
              {plan.highlighted && (
                <div className="bg-indigo-500 text-white text-center py-2 text-sm font-medium">
                  Most Popular
                </div>
              )}
              <div className="p-8">
                <h3 className="text-xl font-semibold text-white mb-2">{plan.name}</h3>
                <div className="mb-5">
                  {plan.price !== null ? (
                    <div className="flex items-baseline">
                      <span className="text-4xl font-bold text-white">${plan.price}</span>
                      <span className="ml-2 text-white/70">/user/month</span>
                    </div>
                  ) : (
                    <div className="text-4xl font-bold text-white">Custom</div>
                  )}
                </div>
                <p className="text-white/70 mb-6">{plan.description}</p>
                
                <button
                  className={`w-full py-3 px-4 rounded-lg font-medium transition-colors ${
                    plan.highlighted
                      ? 'bg-indigo-500 hover:bg-indigo-600 text-white'
                      : 'bg-white/10 hover:bg-white/20 text-white'
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
              
              <div className="px-8 pb-8 pt-4">
                <p className="text-sm text-white/80 font-medium mb-4">What's included:</p>
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="h-5 w-5 text-indigo-400 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-white/70">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-white/50 max-w-3xl mx-auto">
            All plans include a 14-day free trial. No credit card required. 
            Cancel anytime. Need something specific? 
            <a href="#" className="text-indigo-400 hover:text-indigo-300 ml-1">
              Contact our sales team.
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;