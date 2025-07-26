import React from 'react';
import type { Call } from '../../types';

interface IncomingCallPanelProps {
  calls: Call[];
  activeCall: Call | null;
  onSelectCall: (call: Call) => void;
}

const IncomingCallPanel: React.FC<IncomingCallPanelProps> = ({ calls, activeCall, onSelectCall }) => {
  return (
    <div className="h-full flex flex-col">
      <div className="p-4 border-b border-gray-200">
        <h2 className="text-lg font-bold text-gray-800">Incoming Calls</h2>
        <p className="text-sm text-gray-500">Select a call to view details.</p>
      </div>
      <div className="flex-grow overflow-y-auto">
        {calls.length > 0 ? (
          <ul>
            {calls.map((call) => (
              <li key={call.id}>
                <button
                  onClick={() => onSelectCall(call)}
                  className={`w-full text-left p-4 border-b border-gray-100 transition-colors duration-200 ${
                    activeCall?.id === call.id
                      ? 'bg-moi-maroon/10 border-l-4 border-moi-maroon'
                      : 'hover:bg-gray-50'
                  }`}
                >
                  <div className="flex justify-between items-center mb-1">
                    <p className={`font-bold ${activeCall?.id === call.id ? 'text-moi-maroon' : 'text-gray-900'}`}>{call.type}</p>
                    <span className="text-xs text-gray-500">{call.timestamp}</span>
                  </div>
                  <p className="text-sm text-gray-600">{call.location}</p>
                   <div className="mt-2">
                     <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                       call.priority === 'High' ? 'bg-red-100 text-red-800' :
                       call.priority === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                       'bg-blue-100 text-blue-800'
                     }`}>
                       {call.priority} Priority
                     </span>
                   </div>
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <div className="p-4 text-center text-gray-500">
            <p>No incoming calls.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default IncomingCallPanel;