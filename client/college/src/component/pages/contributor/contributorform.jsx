// ContributorForm.jsx

import React, { useState } from 'react';
import Select from 'react-select';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

// Sample data for College Names and Branches
const collegeOptions = [
  { value: 'college1', label: 'College One' },
  { value: 'college2', label: 'College Two' },
  { value: 'college3', label: 'College Three' },
  // Add more colleges as needed
];

const branchOptions = [
  { value: 'branch1', label: 'Computer Science' },
  { value: 'branch2', label: 'Mechanical Engineering' },
  { value: 'branch3', label: 'Electrical Engineering' },
  // Add more branches as needed
];

const semesterOptions = [
  { value: '1', label: '1' },
  { value: '2', label: '2' },
  { value: '3', label: '3' },
  { value: '4', label: '4' },
  { value: '5', label: '5' },
  { value: '6', label: '6' },
  { value: '7', label: '7' },
  { value: '8', label: '8' },
  // Add more semesters as needed
];

const ContributorForm = () => {
  const navigate = useNavigate();

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    college: null,
    semester: null,
    branch: null,
    password: '',
  });

  // Error state
  const [errors, setErrors] = useState({});

  // Handle input changes
  const handleChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));

    // Remove error when user starts typing
    setErrors((prev) => ({
      ...prev,
      [field]: '',
    }));
  };

  // Validate form fields
  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required.';
    if (!formData.college) newErrors.college = 'College is required.';
    if (!formData.semester) newErrors.semester = 'Semester is required.';
    if (!formData.branch) newErrors.branch = 'Branch is required.';
    if (!formData.password) newErrors.password = 'Password is required.';

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;
    navigate("next-page");

    // try {
    //   // Make an API call to verify password and register contributor
    //   // Replace the URL with your actual API endpoint
    //   const response = await axios.post('http://localhost:5000/verify-password', {
    //     password: formData.password,
    //   });

    //   if (response.data.success) {
    //     // Navigate to the next page
    //     navigate('/next-page'); // Replace with your actual route 
    //   } else {
    //     // Handle incorrect password or other errors
    //     setErrors({ password: 'Incorrect password. Please try again.' });
    //   }
    // } catch (error) {
    //   console.error('Error submitting form:', error);
    //   setErrors({ submit: 'An error occurred. Please try again later.' });
    // }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 ">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-6 text-center">Contributor Registration</h2>
        <form onSubmit={handleSubmit}>
          {/* Contributor Name */}
          <div className="mb-4">
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              className={`w-full mt-1 p-2 border ${
                errors.name ? 'border-red-500' : 'border-gray-300'
              } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
              value={formData.name}
              onChange={(e) => handleChange('name', e.target.value)}
              placeholder="Enter your name"
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>

          {/* College Name */}
          <div className="mb-4">
            <label className="block text-gray-700">College Name</label>
            <Select
              options={collegeOptions}
              value={formData.college}
              onChange={(selectedOption) => handleChange('college', selectedOption)}
              classNamePrefix="react-select"
              placeholder="Select your college"
              isSearchable
            />
            {errors.college && <p className="text-red-500 text-sm mt-1">{errors.college}</p>}
          </div>

          {/* Semester */}
          <div className="mb-4">
            <label className="block text-gray-700">Semester</label>
            <Select
              options={semesterOptions}
              value={formData.semester}
              onChange={(selectedOption) => handleChange('semester', selectedOption)}
              classNamePrefix="react-select"
              placeholder="Select your semester"
              isSearchable
            />
            {errors.semester && <p className="text-red-500 text-sm mt-1">{errors.semester}</p>}
          </div>

          {/* Branch */}
          <div className="mb-4">
            <label className="block text-gray-700">Branch</label>
            <Select
              options={branchOptions}
              value={formData.branch}
              onChange={(selectedOption) => handleChange('branch', selectedOption)}
              classNamePrefix="react-select"
              placeholder="Select your branch"
              isSearchable
            />
            {errors.branch && <p className="text-red-500 text-sm mt-1">{errors.branch}</p>}
          </div>

          {/* Password */}
          <div className="mb-6">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              className={`w-full mt-1 p-2 border ${
                errors.password ? 'border-red-500' : 'border-gray-300'
              } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
              value={formData.password}
              onChange={(e) => handleChange('password', e.target.value)}
              placeholder="Enter your password"
            />
            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition-colors"
          >
            Submit
          </button>

          {/* Submission Error */}
          {errors.submit && <p className="text-red-500 text-sm mt-4 text-center">{errors.submit}</p>}
        </form>
      </div>
    </div>
  );
};

export default ContributorForm;
