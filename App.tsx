import React, { useState } from 'react';
import { Role } from './types';
import RoleSelection from './components/RoleSelection';
import CallTakerDashboard from './components/call-taker/CallTakerDashboard';

const App: React.FC = () => {
  const [selectedRole, setSelectedRole] = useState<Role | null>(null);

  const handleGoBack = () => setSelectedRole(null);

  if (selectedRole) {
    if (selectedRole === Role.CallTaker) {
      return <CallTakerDashboard onBack={handleGoBack} />;
    }
    // Placeholder for other roles
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-white p-4 text-center antialiased">
        <img src="https://pbs.twimg.com/media/GOLY_e3XEAAOGl2.jpg" alt="Ministry of Interior Logo" className="h-40 w-auto mb-8" />
        <h1 className="text-4xl font-bold text-moi-maroon mb-2">Welcome, {selectedRole}!</h1>
        <p className="text-lg text-gray-600 mb-8">Your personalized dashboard is being prepared.</p>
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-moi-maroon mb-8"></div>
        <button
          onClick={handleGoBack}
          className="px-6 py-2 bg-moi-maroon hover:bg-moi-maroon-dark rounded-md font-semibold text-white shadow-lg shadow-moi-maroon/20 transition-all duration-300"
        >
          Select Different Role
        </button>
      </div>
    );
  }

  return <RoleSelection onSelectRole={setSelectedRole} />;
};

export default App;