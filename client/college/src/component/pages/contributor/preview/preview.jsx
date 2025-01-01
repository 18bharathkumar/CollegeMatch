import React from "react";
import ClgPhoto from "./clgphoto";
import LocationDisplay from "./location";
import TransportationInfo from "./transport";
import StarRating from "./star";
import AttendanceInfo from "./attedenceinfo";
import Placement from "./placement";

const Previews = ({ formData, state }) => {
  return (
    <div className="bg-[#FFFAFA] sm:w-[90%] md:w-[70%] mx-auto  rounded-lg shadow-md mt-28 grid place-items-center sm:mt-16">
      {/* Header */}
      <header className="bg-gray-300 p-4 w-full mb-8">
        <div className="container grid grid-cols-2 sm:grid-cols-12">
          {/* Logo or Photo */}
          <img
            src={formData.clglogo}
            alt="College Logo"
            className="w-24 h-16 sm:w-36 sm:h-20 object-contain sm:col-span-4" 
          />
          {/* College Name */}
          <h1 className="text-2xl sm:text-5xl font-bold text-center text-gray-800 pt-3 sm:col-span-8">
            {formData.collegeName}
          </h1>
        </div>
      </header>

      {/* College Photo */}
      <section className="w-full mb-8">
        <h2 className="text-xl sm:text-3xl font-semibold text-gray-800 mb-4 text-center">College Photos</h2>
        <ClgPhoto photo={formData.collegephoto} />
      </section>

      {/* Location and Transport */}
      <section className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="grid place-items-center mb-5">
          <LocationDisplay location={formData.location} city={formData.city} />
        </div>
        <div className="grid place-items-center">
          <TransportationInfo bus={formData.transportBus} metro={formData.transportMetro} />
        </div>
      </section>

      {/* Extra Fee */}
      <section className="w-full mb-8">
        <h2 className="text-xl sm:text-3xl font-semibold text-gray-800 mb-4 text-center">Extra Admission Fee</h2>
        <p className="text-lg sm:text-2xl font-medium text-center text-gray-600">
          <span className="font-bold">{formData.extraFee}</span>
        </p>
      </section>

      {/* Campus Environment Rating */}
      <section className="w-full grid place-items-center mb-8">
        <h2 className="text-xl sm:text-3xl font-semibold text-gray-800 mb-4 text-center">Campus Environment Rating</h2>
        <StarRating rating={formData.campusRating} />
      </section>

      {/* Attendance Information */}
      <section className="w-full mb-8">
        <AttendanceInfo
          percent={formData.attendancePercent}
          procedure={formData.attendanceProcedure}
          tips={formData.attendanceTips}
        />
      </section>

      {/* Class Timings and Photos */}
      <section className="w-full mb-8">
        <h2 className="text-xl sm:text-3xl font-semibold text-gray-800 mb-4 text-center">Class Timings</h2>
        <p className="text-lg sm:text-2xl font-normal text-center text-gray-600">{formData.classTimings}</p>
        <h3 className="text-xl sm:text-3xl font-semibold text-center mt-6 mb-4">Classroom Photos</h3>
        <div className="w-full max-w-full mb-8">
          <ClgPhoto photo={formData.classphoto} />
        </div>
      </section>

      {/* Teaching Rating */}
      <section className="w-full grid place-items-center mb-8">
        <h2 className="text-xl sm:text-3xl font-semibold text-gray-800 mb-4 text-center">Teaching Rating</h2>
        <StarRating rating={formData.teachingRating} />
      </section>

      {/* Placement Section */}
      <section className="w-full mb-8">
        <div className="w-full grid place-items-center mb-6">
          <h2 className="text-xl sm:text-3xl font-bold text-gray-800 mb-2 text-center">About Placement</h2>
          <Placement student={formData.studentPlacementPercent} />
        </div>
        <div className="w-full grid place-items-center mt-6">
          <h3 className="text-lg sm:text-2xl font-semibold mb-2 text-center">Placement Review</h3>
          <p className="w-4/5 sm:w-2/3 text-center text-gray-600 mt-2">{formData.placementReview}</p>
        </div>
        <ClgPhoto photo={formData.placement} />
        <div className="w-full grid place-items-center mt-6">
          <h3 className="text-lg sm:text-2xl font-semibold mb-2 text-center">Placement Rating</h3>
          <StarRating rating={formData.placementrating} />
        </div>
      </section>

      {/* Final Rating */}
      <section className="grid place-items-center my-8">
        <h3 className="text-lg sm:text-2xl font-semibold mb-2 text-center">Final Rating</h3>
        <StarRating rating={formData.finalrating} />
      </section>

      {/* Official Website Link */}
      <section className="grid place-items-center mt-10 mb-8">
        <a
          href={formData.website}
          className="text-blue-600 font-semibold underline hover:text-blue-800 text-lg"
        >
          Official Website Link
        </a>
      </section>

      <div className="flex justify-around w-full m-5">
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg mt-8 text-lg "
        >
          Submit
        </button>
        <button
          type="button"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg mt-8 text-lg "
          onClick={() => state(false)}
        >
          Edit
        </button>
      </div>
    </div>
  );
};

export default Previews;
