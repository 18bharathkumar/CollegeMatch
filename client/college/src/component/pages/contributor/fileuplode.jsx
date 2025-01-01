import React, { useState } from "react";
import { AiFillDelete } from "react-icons/ai"; // React Icon for delete

const ImageUpload = ({ images, setImages }) => {
  // Handle image selection
  const handleImageSelect = (e) => {
    const selectedFiles = e.target.files;
    const imageArray = Array.from(selectedFiles).map((file) =>
      URL.createObjectURL(file)
    );

    // Combine the new and previous images
    const newImages = [...images, ...imageArray];

    // Update images state
    setImages(newImages);
  };

  // Handle delete
  const handleDelete = (image) => {
    setImages((prevImages) => prevImages.filter((img) => img !== image));
  };

  return (
    <div className="container mx-auto p-4">
      {/* File Input */}
      <label className="cursor-pointer block text-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200 mb-5">
        Choose images for Input
        <input
          type="file"
          accept="image/*"
          multiple
          onChange={handleImageSelect}
          className="sr-only"
        />
      </label>

      {/* Image Previews */}
      <div className="flex flex-wrap gap-4 mb-4">
        {images.length > 0 &&
          images.map((image, index) => (
            <div key={index} className="relative flex flex-col items-center">
              <img
                src={image}
                alt={`preview-${index}`}
                className="w-32 h-32 object-cover rounded-lg"
              />
              <button
                onClick={() => handleDelete(image)}
                className="absolute top-0 right-0 bg-red-500 text-white rounded-full p-1 hover:bg-red-700"
              >
                <AiFillDelete size={20} />
              </button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ImageUpload;
