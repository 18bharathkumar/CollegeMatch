// src/App.jsx
import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './component/header/navbar';
import Home from './component/pages/home';
import Footer from './component/footer/footer';
import { RecoilRoot } from 'recoil';

const CollegesTable = React.lazy(()=>import('./component/display'))
const Admin = React.lazy(() => import('./component/pages/Admin'));
const About = React.lazy(() => import('./component/pages/About'));
const ClusterComponent = React.lazy(() => import('./clustor/clustor'));
const Contributor = React.lazy(() => import('./component/pages/contributor/contributor'));

function App() {
  return (
    <RecoilRoot>
    <Router>
      <Suspense fallback={<div className="text-center mt-20 text-lg">Loading...</div>}>
      </Suspense>
      <Navbar />
      <div className="flex flex-col min-h-screen bg-gray-100">
        <div className="flex-grow">
          <Suspense fallback={<div className="text-center mt-20 text-lg">Loading...</div>}>
            <Routes>

              <Route path="/" element={<Home />} />
              <Route path="/clustor" element={<ClusterComponent />} />
              <Route path="/about" element={<About />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/contributor/*" element={<Contributor />} />
              <Route path="/collegedisplay" element={<CollegesTable />} />
              
            </Routes>
          </Suspense>
        </div>
      </div>
      <Footer />
    </Router>
    </RecoilRoot>
  );
}

export default App;
