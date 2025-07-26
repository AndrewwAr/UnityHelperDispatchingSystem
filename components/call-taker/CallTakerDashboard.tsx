import React, { useState } from 'react';
import type { Call } from '../../types';
import MapView from './MapView';
import IncomingCallPanel from './IncomingCallPanel';
import DataInputForm from './DataInputForm';
import { initialCalls } from './mockData';

interface CallTakerDashboardProps {
  onBack: () => void;
}

const CallTakerDashboard: React.FC<CallTakerDashboardProps> = ({ onBack }) => {
  const [calls, setCalls] = useState<Call[]>(initialCalls);
  const [activeCall, setActiveCall] = useState<Call | null>(calls[0] || null);

  const handleCreateReport = (updatedCall: Call) => {
    // In a real app, this would submit to a backend.
    // For now, we'll just update the local state.
    setCalls(calls.map(c => c.id === updatedCall.id ? updatedCall : c));
    console.log('Report Created:', updatedCall);
  };
  
  return (
    <div className="flex flex-col h-screen bg-gray-50 font-sans">
      <header className="bg-white shadow-md z-10">
        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
               <img src="https://pbs.twimg.com/media/GOLY_e3XEAAOGl2.jpg" alt="Ministry of Interior Logo" className="h-10 w-auto mr-4" />
              <h1 className="text-2xl font-bold text-moi-maroon">Call Taker Dashboard</h1>
            </div>
            <button
              onClick={onBack}
              className="px-4 py-2 bg-moi-maroon hover:bg-moi-maroon-dark rounded-md font-semibold text-white shadow-sm transition-all duration-300"
            >
              &larr; Back to Role Selection
            </button>
          </div>
        </div>
      </header>
      <main className="flex-grow flex overflow-hidden">
        <div className="flex-grow flex flex-col xl:flex-row">
            {/* Map View */}
            <div className="xl:w-1/2 flex-shrink-0">
                <MapView />
            </div>

            {/* Side Panels */}
            <div className="flex-grow flex flex-col xl:flex-row xl:w-1/2">
                {/* Incoming Calls */}
                <div className="w-full xl:w-1/2 border-l border-r border-gray-200 bg-white flex flex-col">
                    <IncomingCallPanel calls={calls} activeCall={activeCall} onSelectCall={setActiveCall} />
                </div>

                {/* Data Input Form */}
                <div className="w-full xl:w-1/2 bg-gray-50 flex flex-col">
                    <DataInputForm activeCall={activeCall} onUpdateCall={handleCreateReport} />
                </div>
            </div>
        </div>
      </main>
    </div>
  );
};

export default CallTakerDashboard;