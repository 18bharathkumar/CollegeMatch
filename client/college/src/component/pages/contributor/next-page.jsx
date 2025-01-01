import React, { useState } from "react";
import ImageUpload from "./fileuplode"; // Make sure this component exists
import PlacementResponsibility from "./placement"; // Make sure this component exists
import Rating from "react-rating";
import Previews from "./preview/preview";

const Hello = () => {
    const [formData, setFormData] = useState({
        collegeName: "",
        clglogo:"",
        collegephoto: [],
        city: "",
        location: "",
        transportBus: "",
        transportMetro: "",
        extraFee: "",
        campusRating: 0,
        attendancePercent: 0,
        attendanceProcedure: "",
        attendanceTips: "",
        classTimings: "",
        classphoto: [],
        placementReview: "",
        studentPlacementPercent: 0,
        teachingRating: 0,
        placement: [],
        placementrating:0,
        finalrating: 0,
        website:""
    });

  const [collegephoto, setcollegephoto] = useState([]);
  const [classphoto, setclassphoto] = useState([]);
  const [placement, setplacementphoto] = useState([]);
  const [isformready,setisformready] = useState(false);
  const [clglogo,setclglogo] = useState("");

  const [studentResponsibility, setStudentResponsibility] = useState(50);

  const handlecollege = (img) => {
    setcollegephoto(img);
    setFormData((prev) => ({ ...prev, collegephoto: img }));
    console.log(img);
  };
  const handleclass = (img) => {
    setclassphoto(img);
    setFormData((prev) => ({ ...prev, classphoto: img }));
    console.log(img);
  };
  const handelplacement = (img) => {
    setplacementphoto(img);
    setFormData((prev) => ({ ...prev, placement: img }));
    console.log(img);
  };

  const handlelogo =(img)=>{
    setclglogo(img);
    setFormData((prev) => ({ ...prev, clglogo: img }));
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlestudent = (value) => {
    setStudentResponsibility(value);
    setFormData((prev) => ({ ...prev, studentPlacementPercent: value }));
    console.log(studentResponsibility);
  };

  const handlesubmit = () => {
    // Check if any value in formData is missing or invalid
    for (const [key, value] of Object.entries(formData)) {
      if (typeof value === "string" && value.trim() === "") {
        alert(`${key} is required but missing.`)
        console.error(`${key} is required but missing.`);
        return; // Prevent submission
      }
      if (Array.isArray(value) && value.length === 0) {
        alert(`${key} is required but missing.`)
        console.error(`${key} is required but missing.`);
        return; // Prevent submission
      }
      if (typeof value === "number" && value <= 0 && value>=100) {
        alert(`${key} is required but has an invalid value.`)
        console.error(`${key} is required but has an invalid value.`);
        return; // Prevent submission
      }
    }
  
    // If all fields are valid, proceed with submission
    setisformready(true);
    console.log(formData);
  };
  
if(!isformready){
  return (
    
    <div className="bg-gray-100 py-8 px-4 sm:px-6 lg:px-8 mt-20">
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Contribute College Details
        </h1>

        {/* College Name */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">College Name</label>
          <input
            type="text"
            name="collegeName"
            value={formData.collegeName}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg"
            placeholder="Enter college name"
          />
        </div>

       {/* College logo */}
       <div className="mb-4">
          <label className="block text-sm font-medium mb-2">
            College Logo
          </label>
          <ImageUpload
            images={clglogo}
            setImages={handlelogo}
          />
        </div>

        {/* College Photos */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">
            College Photos (5-6)
          </label>
          <ImageUpload
            images={collegephoto}
            setImages={handlecollege}
          />
        </div>

        {/* City */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">City</label>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg"
            placeholder="Enter city name"
          />
        </div>

        {/* Google Map Location */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">
            Google Map Location
          </label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg"
            placeholder="Paste Google Map URL"
          />
        </div>

        {/* Mode of Transportation */}
        {/* Bus transport */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">
            Distance from Bus Stop
          </label>
          <input
            type="text"
            name="transportBus"
            value={formData.transportBus}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg"
            placeholder="Enter distance in km"
          />
        </div>
        {/* metro transport */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">
            Distance from Metro Station
          </label>
          <input
            type="text"
            name="transportMetro"
            value={formData.transportMetro}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg"
            placeholder="Enter distance in km or 'No Metro Facility'"
          />
        </div>

        {/* Extra Fees at Admission */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">
            Extra Fees at Admission
          </label>
          <input
            type="text"
            name="extraFee"
            value={formData.extraFee}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg"
            placeholder="Enter extra fee amount"
          />
        </div>

        {/* Campus Environment - Star Rating */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">
            Campus Environment Rating
          </label>
          <Rating
            initialRating={formData.campusRating}
            onChange={(value) =>
              setFormData({ ...formData, campusRating: value })
            }
            emptySymbol={
              <svg
                className="w-6 h-6 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="2"
              >
                <path
                  d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                  stroke="currentColor"
                />
              </svg>
            }
            fullSymbol={
              <svg
                className="w-6 h-6 text-yellow-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                stroke="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
              >
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
            }
          />
        </div>

        {/* Attendance Details */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">
            Minimum Attendance (%)
          </label>
          <input
            type="number"
            name="attendancePercent"
            value={formData.attendancePercent}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg"
            placeholder="Enter mandatory attendance percentage"
            max="100"
          />
        </div>
        {/* low attedence procedure */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">
            Procedure for Low Attendance
          </label>
          <textarea
            name="attendanceProcedure"
            value={formData.attendanceProcedure}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg"
            placeholder="Explain the procedure for low attendance"
          ></textarea>
        </div>
        {/* tips to maintain attedence */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">
            Tips to Maintain Attendance
          </label>
          <textarea
            name="attendanceTips"
            value={formData.attendanceTips}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg"
            placeholder="Provide key tips to maintain attendance"
          ></textarea>
        </div>

        {/* Class Timings */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">
            General Class Timings
          </label>
          <input
            type="text"
            name="classTimings"
            value={formData.classTimings}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg"
            placeholder="Enter typical class timings"
          />
        </div>
        {/* class room photo */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">
            Class Room Photo (4-5) include seminarhall photo also
          </label>
          <ImageUpload
            images={classphoto}
            setImages={handleclass}
          />
        </div>

        {/* teaching rating */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">
            Teaching Rating
          </label>
          <Rating
            initialRating={formData.teachingRating}
            onChange={(value) =>
              setFormData({ ...formData, teachingRating: value })
            }
            emptySymbol={
              <svg
                className="w-6 h-6 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="2"
              >
                <path
                  d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                  stroke="currentColor"
                />
              </svg>
            }
            fullSymbol={
              <svg
                className="w-6 h-6 text-yellow-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                stroke="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
              >
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
            }
          />
        </div>

        {/* Placement Review */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">
            Placement Review
          </label>
          <textarea
            name="placementReview"
            value={formData.placementReview}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg"
            placeholder="Provide details about placements"
          ></textarea>
        </div>

        <PlacementResponsibility handlestudent={handlestudent} />


        {/* College Placement Photos */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">
            College Placement Photos (4-5)
          </label>
          <ImageUpload
            images={placement}
            setImages={handelplacement}
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">
            Placement Rating
          </label>
          <Rating
            initialRating={formData.placementrating}
            onChange={(value) =>
              setFormData({ ...formData, placementrating: value })
            }
            emptySymbol={
              <svg
                className="w-6 h-6 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="2"
              >
                <path
                  d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                  stroke="currentColor"
                />
              </svg>
            }
            fullSymbol={
              <svg
                className="w-6 h-6 text-yellow-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                stroke="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
              >
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
            }
          />
        </div>

        {/* Final Rating */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Final Rating</label>
          <Rating
            initialRating={formData.finalrating}
            onChange={(value) =>
              setFormData({ ...formData, finalrating: value })
            }
            emptySymbol={
              <svg
                className="w-6 h-6 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="2"
              >
                <path
                  d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                  stroke="currentColor"
                />
              </svg>
            }
            fullSymbol={
              <svg
                className="w-6 h-6 text-yellow-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                stroke="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
              >
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
            }
          />
        </div>

        <label className="block text-sm font-medium mb-2">
            Offical website link
          </label>
          <input
            type="text"
            name="website"
            value={formData.website}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg mb-4"
            placeholder="Offical website link"
           
          />

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="button"
            onClick={handlesubmit}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Preview
          </button>
        </div>
      </div>
    </div>
  );
}
else{
    return(
        <>
        <Previews formData={formData} state={setisformready}/>
        </>
    )
}
};

export {Hello};
