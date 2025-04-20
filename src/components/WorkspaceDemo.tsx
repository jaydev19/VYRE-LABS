import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';

const WorkspaceDemo: React.FC = () => {
  const [activeTab, setActiveTab] = useState('docs');
  
  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Build your team's source of truth</h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Cosmos adapts to your team's workflow, not the other way around.
          </p>
        </div>
        
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden">
          <div className="border-b border-white/10">
            <nav className="flex space-x-8 px-8">
              {[
                { id: 'docs', label: 'Documentation' },
                { id: 'wiki', label: 'Knowledge Base' },
                { id: 'projects', label: 'Projects' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  className={`py-4 font-medium relative ${
                    activeTab === tab.id 
                      ? 'text-white' 
                      : 'text-white/60 hover:text-white/80'
                  }`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.label}
                  {activeTab === tab.id && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-500"></div>
                  )}
                </button>
              ))}
            </nav>
          </div>
          
          <div className="p-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div className="lg:col-span-3 border-r border-white/10 pr-6">
                <div className="mb-6">
                  <div className="bg-white/10 rounded-md px-3 py-2 text-white mb-1">Engineering</div>
                  {['Architecture', 'Backend', 'Frontend', 'Mobile'].map((item, i) => (
                    <div 
                      key={i} 
                      className={`px-3 py-2 rounded-md text-white/70 hover:bg-white/5 flex items-center justify-between ${
                        i === 0 ? 'bg-white/5' : ''
                      }`}
                    >
                      {item}
                      {i === 0 && <ChevronRight className="h-4 w-4" />}
                    </div>
                  ))}
                </div>
                
                <div>
                  <div className="bg-white/10 rounded-md px-3 py-2 text-white mb-1">Product</div>
                  {['Roadmap', 'Design', 'Analytics', 'Feedback'].map((item, i) => (
                    <div 
                      key={i} 
                      className="px-3 py-2 rounded-md text-white/70 hover:bg-white/5"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="lg:col-span-9">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">Architecture Overview</h3>
                  <div className="flex items-center text-white/50 text-sm mb-8">
                    <span>Updated 2 days ago by Alex Kim</span>
                    <span className="mx-2">•</span>
                    <span>5 contributors</span>
                  </div>
                </div>
                
                <div className="prose prose-invert max-w-none opacity-90">
                  <p>
                    Our system architecture follows a microservices pattern, with services communicating 
                    via a combination of synchronous REST APIs and asynchronous message queues.
                  </p>
                  
                  <h4>Core Services</h4>
                  <ul>
                    <li>
                      <strong>User Service</strong> - Handles authentication, user profiles, and permissions
                    </li>
                    <li>
                      <strong>Content Service</strong> - Manages document storage, versioning, and metadata
                    </li>
                    <li>
                      <strong>Search Service</strong> - Indexes and retrieves content across the platform
                    </li>
                  </ul>
                  
                  <h4>Infrastructure</h4>
                  <p>
                    We run our services on Kubernetes clusters in AWS, with separate environments for 
                    development, staging, and production. All environments are created and managed using 
                    infrastructure as code with Terraform.
                  </p>
                
                  <div className="bg-white/5 rounded-lg p-4 mt-6 text-sm">
                    <div className="flex justify-between items-center mb-2">
                      <p className="font-medium">System Diagram</p>
                      <button className="text-indigo-400 hover:text-indigo-300 text-sm">View full size</button>
                    </div>
                    <div className="border border-white/10 rounded-md h-60 flex items-center justify-center bg-black/50">
                      <p className="text-white/50">System architecture diagram</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkspaceDemo;