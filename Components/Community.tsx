import React from "react";

function Community() {
  return (
    <div className="bg-[#ffffff] py-16 px-6">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800">
          Why you should start your career path at <br /> Treshaw International
          School?
        </h2>
        <p className="text-gray-600 mt-2">Why it is suitable for you</p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Affordability Card */}
        <div className="bg-[#EDEEF5] p-8 rounded-lg shadow-md transform transition duration-300 hover:scale-105 hover:shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25),0px_2px_4px_0px_rgba(171,190,209,0.2)] text-center">
          <div className="flex justify-center mb-4">
            <img
              src="/assets/Icon.png"
              alt="Affordability Icon"
              className="w-12 h-12"
            />
          </div>
          <h3 className="text-xl font-semibold text-gray-800">Affordability</h3>
          <p className="text-gray-600 mt-2">
            TIS is a prestigious International School with pocket-friendly
            tuition fee rates.
          </p>
        </div>

        {/* Accessibility Card */}
        <div className="bg-[#EDEEF5] p-8 rounded-lg shadow-md transform transition duration-300 hover:scale-105 hover:shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25),0px_2px_4px_0px_rgba(171,190,209,0.2)] text-center">
          <div className="flex justify-center mb-4">
            <img
              src="/assets/Icon (1).png"
              alt="Accessibility Icon"
              className="w-12 h-12"
            />
          </div>
          <h3 className="text-xl font-semibold text-gray-800">Accessibility</h3>
          <p className="text-gray-600 mt-2">
            TIS is strategically located and easily accessible from any part of
            Nairobi County.
          </p>
        </div>

        {/* Credibility Card */}
        <div className="bg-[#EDEEF5] p-8 rounded-lg shadow-md transform transition duration-300 hover:scale-105 hover:shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25),0px_2px_4px_0px_rgba(171,190,209,0.2)] text-center">
          <div className="flex justify-center mb-4">
            <img
              src="/assets/Icon (2).png"
              alt="Credibility Icon"
              className="w-12 h-12"
            />
          </div>
          <h3 className="text-xl font-semibold text-gray-800">Credibility</h3>
          <p className="text-gray-600 mt-2">
            Enroll with us to get credible grades. Our admissions are done on
            merit, and we have very strict examination policies to safeguard the
            examination results credibility.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Community;
