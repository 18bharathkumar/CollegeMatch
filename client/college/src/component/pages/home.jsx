import React, { useState } from "react";
import Select from "react-select";
import { ClustorOptions, places, category } from "../../data/data";
import HeaderCont from "../header/headercontent";
import { homeContent } from "../header/content";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useRecoilState, useSetRecoilState } from "recoil";
import { collegelist, formDataAtom } from "../../atom/store";

const MAX_PREFERENCES = 5;

const Home = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useRecoilState(formDataAtom);
  const setCollegelist = useSetRecoilState(collegelist);

  const [clusterPreferenceCount, setClusterPreferenceCount] = useState(1);
  const [placePreferenceCount, setPlacePreferenceCount] = useState(1);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (type, index, selectedOption) => {
    setFormData((prev) => ({
      ...prev,
      [type]: [
        ...prev[type].slice(0, index),
        selectedOption,
        ...prev[type].slice(index + 1),
      ],
    }));
  };

  const handleCategoryChange = (selectedOption) => {
    setFormData((prev) => ({ ...prev, category: selectedOption }));
  };

  const addPreference = (type, currentCount, setCount) => {
    if (currentCount < MAX_PREFERENCES) {
      setCount(currentCount + 1);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { kcetRank, clusterPreferences, placePreferences, category } = formData;

    if (!kcetRank || !category) {
      alert("Please fill in all required fields.");
      return;
    }

    const postData = {
      rank: kcetRank,
      clusters: clusterPreferences.map((pref) => pref?.value || ""),
      places: placePreferences.map((pref) => pref?.value || ""),
      category: category.value,
    };

    try {
      const response = await axios.post("http://localhost:3000/fetchData", postData);
      setCollegelist(response.data.data);
      navigate("/collegedisplay");
    } catch (error) {
      console.error("Error in POST request:", error);
    }
  };

  return (
    <>
      <HeaderCont content={homeContent} />
      <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full max-w-5xl">
          {/* Form Section */}
          <div className="lg:col-span-2 bg-white p-8 rounded-lg shadow-md space-y-6">
            <h2 className="text-2xl font-bold text-center text-gray-800">
              KCET College Predictor 2024
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* KCET Rank */}
              <div>
                <label htmlFor="kcetRank" className="block text-sm font-medium text-gray-600 mb-1">
                  KCET Rank
                </label>
                <input
                  type="number"
                  name="kcetRank"
                  id="kcetRank"
                  required
                  value={formData.kcetRank}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your KCET rank"
                  min="1"
                />
              </div>

              {/* Category Selection */}
              <div>
                <label className="block text-md font-medium text-gray-600 mb-2">Select Category</label>
                <Select
                  id="category"
                  options={category}
                  value={formData.category}
                  onChange={handleCategoryChange}
                  placeholder="Select Category"
                  isSearchable
                  classNamePrefix="react-select"
                />
              </div>

              {/* Cluster Preferences */}
              <div>
                <label className="block text-md font-medium text-gray-600 mb-2">
                  Cluster Preferences
                </label>
                {Array.from({ length: clusterPreferenceCount }).map((_, index) => (
                  <Select
                    key={index}
                    options={ClustorOptions}
                    value={formData.clusterPreferences[index] || null}
                    onChange={(selectedOption) =>
                      handleSelectChange("clusterPreferences", index, selectedOption)
                    }
                    placeholder={`Select Cluster Preference ${index + 1}`}
                  />
                ))}
                {clusterPreferenceCount < MAX_PREFERENCES && (
                  <button
                    type="button"
                    onClick={() =>
                      addPreference("clusterPreferences", clusterPreferenceCount, setClusterPreferenceCount)
                    }
                    className="text-blue-500 text-sm"
                  >
                    + Add Another Cluster Preference
                  </button>
                )}
              </div>

              {/* Place Preferences */}
              <div>
                <label className="block text-md font-medium text-gray-600 mb-2">
                  Place Preferences
                </label>
                {Array.from({ length: placePreferenceCount }).map((_, index) => (
                  <Select
                    key={index}
                    options={places}
                    value={formData.placePreferences[index] || null}
                    onChange={(selectedOption) =>
                      handleSelectChange("placePreferences", index, selectedOption)
                    }
                    placeholder={`Select Place Preference ${index + 1}`}
                  />
                ))}
                {placePreferenceCount < MAX_PREFERENCES && (
                  <button
                    type="button"
                    onClick={() =>
                      addPreference("placePreferences", placePreferenceCount, setPlacePreferenceCount)
                    }
                    className="text-blue-500 text-sm"
                  >
                    + Add Another Place Preference
                  </button>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3 px-6 bg-blue-500 text-white font-medium text-lg rounded-md hover:bg-blue-600 transition duration-300"
              >
                Predict College
              </button>
            </form>
          </div>

          {/* Right Column */}
          <div className="p-8 rounded-lg lg:flex lg:items-center lg:justify-center">
            <button
              type="button"
              onClick={() => navigate("/clustor")}
              className="w-full py-3 px-6 bg-blue-500 text-white font-medium text-lg rounded-md hover:bg-blue-600 transition duration-300"
            >
              Know About Clustor
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
