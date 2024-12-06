import React from "react";

function Subject() {
  return (
    <div className="w-full ">
      <section className=" bg-[ #FFFFFF] min-h-screen flex items-center justify-center px-4 md:px-8 py-8">
        <div className="w-full flex flex-col lg:flex-row justify-center items-center container sm:space-x-10 sm:justify-between gap-10">
          <div className="image-container w-full flex  items-center justify-center sm:justify-end sm:w-1/2 mt-12  px-8 py-8">
            <img
              src="/assets/student4.png"
              alt="student-image"
              className="w-full h-full"
            />
          </div>
          <div className="subject w-full md:mt-12 mt-4 sm:w-1/2 flex flex-col   py-8 items-start justify-start sm:ml-10 px-4  sm:justify-end">
            <h1 className="text-2xl font-bold text-[#333333]">Subjects</h1>
            <p className="text-[#333333] mt-4">
              This is done at the end of year 8
            </p>

            <h2 className="font-bold text-black capitalize mt-4 text-xl">
              The Compulsory Subjects includes
            </h2>
            <ol className="list-decimal ml-4">
              <li className="text-[#333333] mt-4">English</li>
              <li className="text-[#333333] mt-4">Mathematics</li>
              <li className="text-[#333333] mt-4">ICT / Computing</li>
              <li className="text-[#333333] mt-4">
                Religious and Moral Education (Islam / Christian)
              </li>
            </ol>

            <h2 className="font-bold text-black capitalize mt-4 text-xl">
              Elective Subjects includes
            </h2>
            <ol className="list-decimal  ml-4">
              <li className="text-[#333333] mt-4">Biology / Economics</li>
              <li className="text-[#333333] mt-4">Physics / Commerce</li>
              <li className="text-[#333333] mt-4">Chemistry / Accounting</li>
              <li className="text-[#333333] mt-4">
                Business / Literature / Fine art
              </li>
              <li className="text-[#333333] mt-4">Geography / History</li>
              <li className="text-[#333333] mt-4">Swahili / French / Arabic</li>
            </ol>
            <div></div>
          </div>
        </div>
      </section>
      <section className="regular mt-4 flex items-center justify-center">
        <div className="bg-white text-center p-6 mb-8 max-w-[1200px] shadow-2xl rounded-[65px]">
          <h1 className="text-black text-2xl capitalize font-bold  p-4">
            Regular and Weekend classes
          </h1>
          <p className="text-base font-normal p-4 leading-loose">
            At Treshaw International School, we have developed a very strong
            relationship with all our educational stakeholders. We do
            collaborate with the parents, guardians, communities, and societies
            to educate families and students who have different learning
            abilities, medical challenges, behavioral differences, different age
            groups, different religious beliefs and practices, different
            geographical locations, and students of different social
            backgrounds. We conduct efficient and effective learning classes in
            our school for all our regular students during the day, evening and
            weekends. We charge Ksh. 10,000 per month for the personalized one
            on one remedial classes which are conducted at the school between
            4.30 pm and 6.00 pm. Our terms of contract does not allow any of our
            teachers to tutor any of our students outside the school premises
            (our teachers are not allowed to tutor any of Treshaw International
            School learners at their respective homes). Candidate classes have
            Compulsory Saturday classes which run between 9.00 am and 1.00 pm.
            This includes Year 6, Year 11, Year 12 and Year 13.
          </p>
        </div>
      </section>
      <section className="cards flex items-center justify-center mt-4 mb-4 px-4  py-8">
        <div className="container mx-auto flex flex-col lg:flex-row items-center space-y-6 lg:space-y-0 lg:space-x-8">
          <div className="card w-full lg:w-1/3 h-[340px] flex flex-col items-start cursor-pointer justify-evenly bg-[#1C3C6C] p-8 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25),0px_2px_4px_0px_rgba(171,190,209,0.2)] ">
            <h1 className="text-2xl font-bold text-[#fff]">
              1. Regular Classes
            </h1>
            <p className="text-[#fff] mt-4">
              The students in our regular classes are required to attend the
              physical classes at school daily during the weekdays between 7.30
              am and 3.40 pm from Year 1 to Year 13.
            </p>
          </div>
          <div className="card w-full lg:w-1/3 h-[340px] flex flex-col cursor-pointer items-start justify-evenly bg-[#1C3C6C] p-8 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25),0px_2px_4px_0px_rgba(171,190,209,0.2)] ">
            <h1 className="text-2xl font-bold text-[#fff]">
              2. E-learning Classes
            </h1>
            <p className="text-[#fff] mt-4">
              The e-learning classes were only available during the covid-19
              period via our school web-based live classes. We no longer conduct
              Online classes.
            </p>
          </div>
          <div className="card w-full lg:w-1/3 flex h-[340px] cursor-pointer flex-col items-start justify-evenly bg-[#1C3C6C] p-8 rounded-2xl shadow-2xl transform transition duration-300 hover:scale-105 hover:shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25),0px_2px_4px_0px_rgba(171,190,209,0.2)] ">
            <h1 className="text-2xl font-bold text-[#fff]">
              3. Evening And Weekend
            </h1>
            <p className="text-[#fff] mt-4">
              Our evening and weekend classes are best suited for the newly
              admitted students or students who have transitted from the 8.4.4
              or CBC curriculum. Evening classes are conducted as from 4.30 pm
              to 6.00 pm on Monday to Friday at a fee of Ksh.10,000; but we do
              not charge for the Saturday classes for the candidates.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Subject;
