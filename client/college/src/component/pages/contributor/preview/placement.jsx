import React from 'react';

const Placement = ({student}) => {
  return (
    <div className='w-full grid place-items-center '>
    <div className="flex flex-col items-center justify-center p-4 sm:w-3/5">
      {/* Progress bar title */}
      <h1 className="text-xl font-semibold mb-4">Placement Responsibility Distribution</h1>
      
      {/* Student Responsibility Label */}
      <div className="w-full text-left mb-2">
        <span className="text-sm font-medium">Student Responsibility {student}</span>
      </div>

      {/* Progress bar container */}
      <div className="w-full bg-gray-300 rounded-full h-6 mb-4">
        {/* Student Responsibility Progress */}
        <div className="bg-blue-500 h-6 rounded-l-full" style={{ width: `${student}%` }}></div>
      </div>

      {/* College Responsibility Label */}
      <div className="w-full text-left mb-2">
        <span className="text-sm font-medium">College Responsibility {100-student}%</span>
      </div>

      {/* Progress bar container */}
      <div className="w-full bg-gray-300 rounded-full h-6 ">
        {/* College Responsibility Progress */}
        <div className="bg-green-500 h-6 rounded-r-full" style={{ width: `${100-student}%` }}></div>
      </div>
    </div>
    </div>
  );
};

export default Placement;
