import { MapPinIcon } from '@heroicons/react/24/solid'; // You can use this for the location icon

const TransportationInfo = ({ bus, metro }) => {
  return (
    <div className="p-6 max-w-3xl mx-auto bg-white rounded-lg shadow-md mt-4">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Transportation Facilities</h2>
      
      {/* Transportation details */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        
        {/* Bus Stop Information */}
        <div className="flex items-center space-x-2">
          <MapPinIcon className="h-6 w-6 text-blue-500" />
          <div>
            <h3 className="text-lg font-medium text-gray-700">Bus Stop</h3>
            <p className="text-gray-600">{bus} meters away</p>
          </div>
        </div>
        
        {/* Metro Station Information */}
        <div className="flex items-center space-x-2">
          <MapPinIcon className="h-6 w-6 text-blue-500" />
          <div>
            <h3 className="text-lg font-medium text-gray-700">Metro Station</h3>
            <p className="text-gray-600">{metro} meters away</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default TransportationInfo;
