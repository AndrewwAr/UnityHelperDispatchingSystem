import React from 'react';
import type { RoleInfo } from '../constants';

interface RoleCardProps {
  role: RoleInfo;
  onSelect: () => void;
}

const RoleCard: React.FC<RoleCardProps> = ({ role, onSelect }) => {
  return (
    <div
      onClick={onSelect}
      className="group bg-gray-50 hover:bg-white border border-gray-200 rounded-xl p-6 flex flex-col items-center text-center cursor-pointer transform hover:-translate-y-1 hover:border-moi-maroon hover:shadow-xl transition-all duration-300 ease-in-out"
    >
      <div className="w-16 h-16 mb-5 text-moi-maroon group-hover:text-moi-gold transition-colors duration-300">
        {role.icon}
      </div>
      <h3 className="text-xl font-bold text-moi-maroon mb-2">{role.name}</h3>
      <p className="text-sm text-gray-600 flex-grow">{role.description}</p>
    </div>
  );
};

export default RoleCard;