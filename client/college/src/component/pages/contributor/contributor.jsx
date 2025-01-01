// App.jsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ContributorForm from './contributorform';
import HeaderCont from '../../header/headercontent';
import { contriContent } from '../../header/content.js';
import {Hello} from "./next-page.jsx"
const Contributor = () => {
  return (
    <>
    
      <Routes>
      <Route path="/" element={<HeaderCont content={contriContent}/> } />
        <Route path="/next-page" element={<Hello/>} />
        {/* Add more routes as needed */}
      </Routes>
      <div className='mt-100'>
      <Routes>
      <Route path="/" element={<ContributorForm />} />
      </Routes>
      </div>
      
      </>
  
  );
};

export default Contributor;
