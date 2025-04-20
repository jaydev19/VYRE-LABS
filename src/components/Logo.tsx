import React from 'react';
import { Hexagon } from 'lucide-react';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center space-x-2">
      <Hexagon className="h-6 w-6 text-cyan-400" />
      <span className="font-bold text-xl text-white tracking-tight">Vyre Labs</span>
    </div>
  );
};

export default Logo;