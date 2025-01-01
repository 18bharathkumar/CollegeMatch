// src/components/header/Content.jsx

import React from 'react';

const HeaderCont = ({content}) => {
  return (
    <div className="bg-gray-700 text-white py-5 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-6">{content.title}</h1>
        <p className="mb-4">
          {content.discription[0]}
        </p>
        <p className="mb-4">
        {content.discription[1]}
        </p>
        <p className="mb-6">
        {content.discription[2]}
        </p>
        
      </div>
    </div>
  );
};

export default HeaderCont;
