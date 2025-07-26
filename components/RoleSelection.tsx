import React from 'react';
import { Role } from '../types';
import { ROLES } from '../constants';
import RoleCard from './RoleCard';

interface RoleSelectionProps {
  onSelectRole: (role: Role) => void;
}

const RoleSelection: React.FC<RoleSelectionProps> = ({ onSelectRole }) => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8 antialiased">
      <div className="text-center mb-12">
        <img src="https://pbs.twimg.com/media/GOLY_e3XEAAOGl2.jpg" alt="Ministry of Interior Logo" className="h-40 w-auto mx-auto mb-8" />
        <h1 className="text-4xl sm:text-5xl font-extrabold text-moi-maroon tracking-tight">
          VR Dispatching System Training
        </h1>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Select your operational role to begin your VR training simulation.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 w-full max-w-7xl">
        {ROLES.map((roleInfo) => (
          <RoleCard
            key={roleInfo.name}
            role={roleInfo}
            onSelect={() => onSelectRole(roleInfo.name)}
          />
        ))}
      </div>
       <footer className="text-center mt-12 text-gray-500 text-sm">
        <p>&copy; {new Date().getFullYear()} State of Qatar - Ministry of Interior. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default RoleSelection;