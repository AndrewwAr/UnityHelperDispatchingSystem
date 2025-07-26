import React, { useState, useEffect } from 'react';
import type { Call } from '../../types';
import { IncidentType } from '../../types';

interface DataInputFormProps {
  activeCall: Call | null;
  onUpdateCall: (call: Call) => void;
}

const DataInputForm: React.FC<DataInputFormProps> = ({ activeCall, onUpdateCall }) => {
  const [formData, setFormData] = useState<Partial<Call>>({});

  useEffect(() => {
    setFormData(activeCall || {});
  }, [activeCall]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.id) {
        onUpdateCall(formData as Call);
    }
  };

  if (!activeCall) {
    return (
        <div className="h-full flex items-center justify-center p-4">
            <div className="text-center text-gray-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto h-10 w-10 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
                <p className="mt-2 font-semibold">No Call Selected</p>
                <p className="text-sm">Please select an incoming call to view its details.</p>
            </div>
        </div>
    );
  }

  return (
    <div className="h-full flex flex-col">
       <div className="p-4 border-b border-gray-200">
        <h2 className="text-lg font-bold text-gray-800">Incident Report</h2>
        <p className="text-sm text-gray-500">ID: {formData.id}</p>
      </div>
      <form onSubmit={handleSubmit} className="flex-grow p-4 space-y-4 overflow-y-auto">
        <div>
            <label htmlFor="callerName" className="block text-sm font-medium text-gray-700">Caller Name</label>
            <input type="text" name="callerName" id="callerName" value={formData.callerName || ''} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-moi-maroon focus:border-moi-maroon sm:text-sm"/>
        </div>
         <div>
            <label htmlFor="callerNumber" className="block text-sm font-medium text-gray-700">Caller Number</label>
            <input type="text" name="callerNumber" id="callerNumber" value={formData.callerNumber || ''} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-moi-maroon focus:border-moi-maroon sm:text-sm"/>
        </div>
        <div>
            <label htmlFor="type" className="block text-sm font-medium text-gray-700">Incident Type</label>
            <select id="type" name="type" value={formData.type || ''} onChange={handleChange} className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-moi-maroon focus:border-moi-maroon sm:text-sm rounded-md">
                 {Object.values(IncidentType).map(type => <option key={type} value={type}>{type}</option>)}
            </select>
        </div>
        <div>
            <label htmlFor="location" className="block text-sm font-medium text-gray-700">Location</label>
            <textarea id="location" name="location" rows={3} value={formData.location || ''} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-moi-maroon focus:border-moi-maroon sm:text-sm"/>
        </div>
        <div>
            <label htmlFor="priority" className="block text-sm font-medium text-gray-700">Priority</label>
             <select id="priority" name="priority" value={formData.priority || ''} onChange={handleChange} className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-moi-maroon focus:border-moi-maroon sm:text-sm rounded-md">
                 <option>High</option>
                 <option>Medium</option>
                 <option>Low</option>
            </select>
        </div>
         <div>
            <label htmlFor="notes" className="block text-sm font-medium text-gray-700">Notes</label>
            <textarea id="notes" name="notes" rows={4} value={formData.notes || ''} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-moi-maroon focus:border-moi-maroon sm:text-sm" placeholder="Add any relevant details..."/>
        </div>
         <div className="pt-2">
            <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-moi-maroon hover:bg-moi-maroon-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-moi-maroon">
                Create Report
            </button>
        </div>
      </form>
    </div>
  );
};

export default DataInputForm;