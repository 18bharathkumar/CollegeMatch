import React, { useState } from 'react';

const PlacementResponsibility = ({ handlestudent}) => {
  const [studentPercentage, setStudentPercentage] = useState(50);

  const handleStudentChange = (e) => {
    const value = Number(e.target.value);
    setStudentPercentage(value);
    handlestudent(value);
    console.log(value);
    
  };

  return (
    <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md mb-6">
      <h3 className="block text-sm font-medium mb-2">
        In securing placements, how would you distribute the responsibility between the college and the student?
      </h3>

      <div className="mb-8">
        <label className="block text-gray-600 text-sm font-semibold mb-2">
          Student Responsibility: <span className="text-blue-500">{studentPercentage}%</span>
        </label>
        <input
          type="range"
          min="0"
          max="100"
          value={studentPercentage}
          onChange={handleStudentChange}
          className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer"
        />
      </div>

      <div className="mb-6">
        <label className="block text-gray-600 text-sm mb-2 font-semibold">
          College Responsibility: <span className="text-green-500">{100 - studentPercentage}%</span>
        </label>
        <input
          type="range"
          min="0"
          max="100"
          value={100 - studentPercentage}
          readOnly
          className="w-full h-2 bg-green-200 rounded-lg appearance-none cursor-not-allowed"
        />
      </div>
    </div>
  );
};

export default PlacementResponsibility;
