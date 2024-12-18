import React from 'react';
import { Atom } from 'lucide-react';

const Logo = () => {
  return (
    <div className="flex items-center space-x-2">
      <Atom size={40} className="text-purple-500" />
      <span className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
        TikTalent
      </span>
    </div>
  );
};

export default Logo;