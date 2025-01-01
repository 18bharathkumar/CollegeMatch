import React from 'react';
import { FaMapMarkerAlt, FaLink } from 'react-icons/fa'; // Import icons

const LocationDisplay = ({location,city}) => {
  return (
    <div className='grid place-items-center w-full mt-5'>
      <h1 className='text-2xl font-bold mb-5'>Location</h1>
    <div className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-lg  ">
      {/* City Name with Location Icon */}
      <div className="flex items-center text-gray-700">
        <FaMapMarkerAlt className="text-red-500 mr-2" /> {/* Location pin icon */}
        <span className="text-lg font-semibold">{city}</span>
      </div>

      {/* Location Link with Link Icon */}
      <a
        href={location}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center text-blue-500 hover:underline"
      >
        <FaLink className="mr-2" /> {/* Link icon */}
        <span>View Location</span>
      </a>
    </div>
    </div>
  );
};

export default LocationDisplay;
