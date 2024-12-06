import React from "react";

function JuniorSchool() {
  return (
    <div className="w-full p-4 sm:p-8 lg:p-12 bg-gray-100 min-h-screen">
      <div className="w-full bg-gray-100"><br></br><br></br>
        {/* Header */}
        <div className="text-center">
          <h1 className="text-2xl font-bold">
            Key Stage1 / Key Stage2: iPrimary{" "}
          </h1>
          <p className="text-gray-700 mt-4">
            In this section, we have iPrimary: KS1 (Year 1 & Year 2), KS2 (Year
            3 to Year 6). In each class we only conduct Regular Classes which
            run from 7.20 am to 3.40 pm Monday to Friday. Year 6 students have
            Saturday classes which run between 9.00 am and 1.00 pm. We don’t
            conduct Sunday classes.
          </p>
        </div>

        {/* Subject Cards */}
        <div className="subjects mt-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4 text-center">
            Range of Teaching Subjects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-3 bg-white rounded-lg shadow-lg border border-gray-200 min-h-[200px] mx-auto w-[60%] transform transition duration-300 hover:scale-105 hover:shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25),0px_2px_4px_0px_rgba(171,190,209,0.2)]">
              <h2 className=" font-bold text-md">Key stage 1 (Reception to Year 2) </h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Mathematics</li>
                <li>English</li>
                <li>Science</li>
                <li>Swahili</li>
                <li>Religion (Islamic/Christian) </li>
                <li>Arabic</li>
              </ul>
            </div>
            <div className="p-3 bg-white rounded-lg shadow-lg border border-gray-200 min-h-[200px] mx-auto w-[60%] transform transition duration-300 hover:scale-105 hover:shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25),0px_2px_4px_0px_rgba(171,190,209,0.2)]">
              <h2 className="font-bold text-md">Key stage 2 (Year 3 to Year 6) </h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Mathematics</li>
                <li>English</li>
                <li>ICT</li>
                <li>Science</li>
                <li>Swahili</li>
                <li>Religion (Islamic/Christian) </li>
                <li>Arabic</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-8 text-center p-4">
          <p className="text-gray-700 mt-4">
            Religious (Quran & Bible study) take place every morning between
            7.20 am and 7.50 am every Monday to Thursday. Intake for Year 6 are
            done between 1st and 30th of September annually. Intake for the
            other classes (Year 1 to Year 5) is done within the first month of
            every term.
          </p>
          <p className="text-gray-700 mt-4">
            Sports Days for Junior School are Tuesdays and Thursdays between
            1.20 and 3.30 pm. Sports activities include: Swimming, Soccer,
            Basketball, and Indoor games. Chess club time is every Tuesday 10.00
            am to 11.00 am.
          </p>
        </div>
      </div>
    </div>
  );
}

export default JuniorSchool;
