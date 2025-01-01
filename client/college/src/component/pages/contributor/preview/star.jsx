import { StarIcon as StarFilled } from '@heroicons/react/24/solid'; // Filled star icon
import { StarIcon as StarOutline } from '@heroicons/react/24/outline'; // Outline star icon

const StarRating = ({ rating }) => {
  // Create an array with 5 elements to represent the star rating
  const totalStars = 5;
  return (
    <div className="flex space-x-1">
      {Array.from({ length: totalStars }, (_, index) => (
        index < rating ? (
          <StarFilled key={index} className="h-6 w-6 text-yellow-400" />
        ) : (
          <StarOutline key={index} className="h-6 w-6 text-gray-300" />
        )
      ))}
    </div>
  );
};

export default StarRating;
