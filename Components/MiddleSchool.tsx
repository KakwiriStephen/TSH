import React from 'react';

function MiddleSchool() {
  return (
    <div className="w-full p-4 sm:p-8 lg:p-12 bg-gray-100 min-h-screen">
      <div className="w-full bg-gray-100">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-2xl font-bold">KS3: iLower Secondary</h1>
          <p className="text-gray-700 mt-4">
            In this section, we offer Pearson Edexcel British International Curriculum at iLower Secondary school (Year 7 to Year 9).
          </p>
        </div>

        {/* Subject Cards */}
        <div className="subjects mt-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4 text-center">
            Range of Teaching Subjects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-white rounded-lg shadow-lg border border-gray-200 min-h-[200px] mx-auto w-[80%] transform transition duration-300 hover:scale-105 hover:shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25),0px_2px_4px_0px_rgba(171,190,209,0.2)]">
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Mathematics</li>
                <li>English</li>
                <li>Chemistry</li>
                <li>Biology</li>
              </ul>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg border border-gray-200 min-h-[200px] mx-auto w-[80%] transform transition duration-300 hover:scale-105 hover:shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25),0px_2px_4px_0px_rgba(171,190,209,0.2)]">
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Geography</li>
                <li>Business</li>
                <li>ICT</li>
                <li>Religion (Islamic/Christian)</li>
                <li>Commerce</li>
              </ul>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg border border-gray-200 min-h-[200px] mx-auto w-[80%] transform transition duration-300 hover:scale-105 hover:shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25),0px_2px_4px_0px_rgba(171,190,209,0.2)]">
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Economic</li>
                <li>Accounting</li>
                <li>French</li>
                <li>Arabic</li>
                <li>Swahili</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-8 text-center p-4">
          <p className="text-gray-700 mt-4">
            We have Regular Classes which run from 7.30 am to 3.40 pm Monday to Friday. Religious (Quran & Bible study) takes place every morning between 7.20 am and 7.50 am every Monday to Thursday.
            Intake for the other classes (Year 7 to Year 9) is done within the first month of every term.
          </p>
          <p className="text-gray-700 mt-4">
            Students transitioning from 8.4.4 standard 8 with KCPE score of 300 marks and above are expected to join our bridging course program for iLower Secondary School, which runs between 10th January and 30th July annually.
            Successful students are usually admitted into Year 9 Pearson Edexcel in September of the same (yearly) calendar, upon attaining the required minimum pass-mark in the iLower Secondary internal examinations.
          </p>
        </div>
      </div>
    </div>
  );
}

export default MiddleSchool;
