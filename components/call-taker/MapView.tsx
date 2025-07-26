import React from 'react';

const MapView: React.FC = () => {
  return (
    <div className="relative h-full w-full bg-gray-800">
      <img 
        src="https://www.epsmaps.com/wp-content/uploads/2015/03/Doha-map.jpg" 
        alt="Map of Doha, Qatar" 
        className="h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/20 pointer-events-none"></div>
      <div className="absolute top-4 left-4">
        <div className="p-3 rounded-lg bg-white/80 backdrop-blur-sm shadow-lg">
            <h3 className="text-lg font-bold text-moi-maroon">Live Map View</h3>
            <p className="mt-1 text-sm text-gray-700">Doha Capital Region</p>
        </div>
      </div>
    </div>
  );
};

export default MapView;