import React from "react";

function Reporting() {
  return (
    <div className="bg-white py-16 px-4">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
          Reporting time & Departure time
        </h2>

        <p className="text-green-600 text-sm md:text-base font-semibold mb-4">
          MONDAY TO FRIDAY
        </p>

        <div className="text-gray-700 space-y-2 mb-6">
          <p className="text-md md:text-lg">
            Reporting time for students is{" "}
            <span className="font-medium">7:30 am</span>
          </p>
          <p className="text-md md:text-lg">
            Departure time for students is{" "}
            <span className="font-medium">15:50 pm</span>
          </p>
        </div>

        <p className="text-gray-600 text-sm md:text-base">
          Weekend classes are scheduled for Saturdays only for Year 6, Year 11,
          Year 12 and Year 13 from 9 am to 1 pm
        </p>
      </div>
    </div>
  );
}

export default Reporting;
