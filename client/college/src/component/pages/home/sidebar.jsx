import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaBars, FaTimes, FaHome, FaInfoCircle, FaUniversity, FaBook } from "react-icons/fa";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  // Function to handle redirection to another website (same tab)
  const redirectToWebsite = (url) => {
    window.location.href = url;  // Use window.location to redirect in the same tab
  };

  return (
    <div>
      {/* Sidebar Container */}
      <motion.div
        className={`fixed top-0 left-0 ${isOpen ? "w-96" : "w-16"} h-screen bg-white text-gray-800 shadow-xl border-r-2 border-gray-300 transition-all duration-300 z-40`}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between px-4 py-4 border-b border-gray-300">
          {/* Toggle Button inside Sidebar on the Left */}
          <button
            onClick={toggleSidebar}
            className="text-gray-900 focus:outline-none bg-white rounded-full p-2 hover:bg-gray-100"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
          {/* Menu Title, Only visible when sidebar is open */}
          <h2
            className={`text-xl font-semibold transition-opacity duration-300 ${
              isOpen ? "opacity-100" : "opacity-0"
            } text-gray-900`}
          >
            Menu
          </h2>
        </div>

        {/* Navigation Links */}
        <nav className="p-4 space-y-4">
          <button
            onClick={() => window.location.href = "/"} // Redirect to the homepage in the same tab
            className="flex items-center w-full py-2 px-4 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-md shadow-sm transition duration-200 ease-in-out"
          >
            <FaHome size={20} />
            {isOpen && <span className="ml-3">Home</span>}
          </button>
          <button
            onClick={() => window.location.href = "/clustor"} // Redirect to Know About Clustor
            className="flex items-center w-full py-2 px-4 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-md shadow-sm transition duration-200 ease-in-out"
          >
            <FaUniversity size={20} />
            {isOpen && <span className="ml-3">Know About Clustor</span>}
          </button>
          <button
            onClick={() => redirectToWebsite("https://kcet-seat-matrix.streamlit.app")} // External link
            className="flex items-center w-full py-2 px-4 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-md shadow-sm transition duration-200 ease-in-out"
          >
            <FaBook size={20} />
            {isOpen && <span className="ml-3">Seat Matrix</span>}
          </button>
          <button
            onClick={() => redirectToWebsite("https://efficient-college-and-branch-comparison-tool.streamlit.app/")} // External link
            className="flex items-center w-full py-2 px-4 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-md shadow-sm transition duration-200 ease-in-out"
          >
            <FaInfoCircle size={20} />
            {isOpen && <span className="ml-3">Advance Sort</span>}
          </button>

          {/* New Button: Know the Best (External link) */}
          <button
            onClick={() => redirectToWebsite("https://best-college-branch-for-kcet.streamlit.app/")} // External link
            className="flex items-center w-full py-2 px-4 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-md shadow-sm transition duration-200 ease-in-out"
          >
            <FaInfoCircle size={20} />
            {isOpen && <span className="ml-3">Know the Best</span>}
          </button>
        </nav>

        {/* Disclaimer Section - Only visible when sidebar is open */}
        {isOpen && (
          <div className="px-4 py-6 text-sm text-gray-600 bg-gray-100 rounded-tl-lg rounded-tr-lg mt-auto">
            {/* Disclaimer Heading */}
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Disclaimer</h3>
            
            <p className="mb-2">
              The results shown in this app are based on the previous year's cutoff data and are{" "}
              <strong>indicative only</strong>.
            </p>
            <p className="mb-2">
              The actual college selections depend on your real-time preferences and seat availability.
            </p>
            <p className="mb-2">
              Use this app as a <strong>reference tool</strong> to make informed decisions.
            </p>
            <p className="mb-2">
              Developers are not responsible for decisions made based on this app.
            </p>
          </div>
        )}

        {/* Footer or Extra Content (optional) */}
        <div className="absolute bottom-4 left-0 w-full px-4 text-center">
          <span className="text-sm text-gray-600">© 2025 Your Company</span>
        </div>
      </motion.div>
    </div>
  );
};

export default Sidebar;
