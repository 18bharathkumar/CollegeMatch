import React from 'react';

const AttendanceInfo = ({percent,procedure,tips}) => {
  return (
    <div className="max-w-4xl mx-auto p-4 bg-white rounded-lg shadow-md mt-5">
      {/* Attendance Header */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-semibold text-gray-800 mb-2">Attendance Information</h2>
        <p className="text-gray-600">Stay informed about the minimum requirements and tips for maintaining attendance.</p>
      </div>

      {/* Attendance Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Minimum Attendance Percentage */}
        <div className="p-4 bg-gray-100 rounded-md shadow-sm">
          <h3 className="text-xl font-medium text-blue-600 mb-2">Minimum Attendance Percentage</h3>
          <p className="text-gray-700">You need to maintain at least <span className="font-bold">{percent}</span> attendance to meet the required criteria.</p>
        </div>

        {/* Procedure for Low Attendance */}
        <div className="p-4 bg-gray-100 rounded-md shadow-sm">
          <h3 className="text-xl font-medium text-red-600 mb-2">Procedure for Low Attendance</h3>
          <p className="text-gray-700">
           {procedure}
          </p>
        </div>

        {/* Tips to Maintain Attendance */}
        <div className="col-span-1 md:col-span-2 p-4 bg-gray-100 rounded-md shadow-sm">
          <h3 className="text-xl font-medium text-green-600 mb-2">Tips to Maintain Attendance</h3>
          <p className='text-gray-700 font-medium'>{tips}</p>
        </div>
      </div>
    </div>
  );
};

export default AttendanceInfo;
