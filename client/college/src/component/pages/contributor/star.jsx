import React, { useState } from 'react';

const StarRating = ({ totalStars = 5 }) => {
  const [rating, setRating] = useState(0);

  // Function to handle star click
  const handleRating = (index) => {
    setRating(index + 1);
  };

  return (
    <div className="flex items-center space-x-1">
      {Array.from({ length: totalStars }, (_, index) => (
        <Star
          key={index}
          filled={index < rating}
          onClick={() => handleRating(index)}
        />
      ))}
    </div>
  );
};

// Star component
const Star = ({ filled, onClick }) => {
  return (
    <svg
      onClick={onClick}
      xmlns="http://www.w3.org/2000/svg"
      fill={filled ? 'yellow' : 'none'}
      viewBox="0 0 24 24"
      stroke="currentColor"
      className={`w-8 h-8 cursor-pointer transition-colors duration-200 ${filled ? 'text-yellow-400' : 'text-gray-300'}`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l2.036 6.304a1 1 0 00.95.69h6.615c.969 0 1.371 1.24.588 1.81l-5.356 3.892a1 1 0 00-.364 1.118l2.036 6.304c.3.921-.755 1.688-1.539 1.118l-5.356-3.892a1 1 0 00-1.176 0l-5.356 3.892c-.784.57-1.839-.197-1.539-1.118l2.036-6.304a1 1 0 00-.364-1.118L2.86 11.731c-.783-.57-.381-1.81.588-1.81h6.615a1 1 0 00.95-.69l2.036-6.304z"
      />
    </svg>
  );
};

export default StarRating;
