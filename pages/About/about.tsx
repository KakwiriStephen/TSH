import Community from "@/Components/Community";
import React from "react";

const About: React.FC = () => {
  return (
    <div>
      <section className="bg-[#1C3C6C]  flex items-center justify-center px-4 pt-28 pb-36 relative">
        <div className="flex relative items-center justify-center p-8 max-w-[1200px] mx-0 mt-10 z-10">
          {/* Main Glassmorphic Card */}
          <div className=" mt-10 flex flex-col items-center justify-center max-w-[640px] h-[420px] px-4 py-8 bg-[#FFFFFF1A] border border-gray-400 rounded-[66px] backdrop-blur-lg shadow-xl z-10">
            {/* Content */}
            <div className="text-center text-white px-6">
              <h2 className="text-2xl md:text-4xl font-bold mb-4">About Us</h2>
              <h3 className="text-lg md:text-2xl font-semibold mb-4">
                Quality Education at TIS
              </h3>
              <p className="text-sm md:text-base">
                At Treshaw International School, we focus on the whole child –
                the social, emotional, mental, physical, and cognitive
                development of each student regardless of gender, race,
                ethnicity, socioeconomic status, or geographical location. We
                prepare each child for life, not just for testing.
              </p>
            </div>
          </div>
          {/* Top Left Image */}
          <div className="absolute top-[-50px]  left-[-160px]  md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-gray-400 hidden sm:block z-0 ">
            <img
              src="/assets/Ellipse 798.png"
              alt="Event"
              className="object-cover w-full h-full  "
              //   style={{ filter: "blur(8px)" }}
            />
          </div>
          {/* Bottom Right Image */}
          <div className="absolute bottom-[-50px] right-[-160px]  md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-gray-400 hidden sm:block z-0">
            <img
              src="/assets/Ellipse 799.png"
              alt="Event Stage"
              className="object-cover w-full h-full"
              //   style={{ filter: "blur(8px)" }}
            />
          </div>
          {/* Bottom left Image */}
          <div className="absolute top-[30px]  right-[-220px]  md:w-48 md:h-48 rounded-full overflow-hidden border-2 border-gray-400 hidden sm:block z-0">
            <img
              src="/assets/Ellipse 800.png"
              alt="Event Stage"
              className="object-cover w-full h-full"
              //   style={{ filter: "blur(8px)" }}
            />
          </div>
          {/* Top Right Image */}
          <div className="absolute bottom-[-70px] right-[700px]  md:w-36 md:h-36 rounded-full overflow-hidden border-2 border-gray-400 hidden sm:block z-0">
            <img
              src="/assets/Ellipse 801.png"
              alt="Event Stage"
              className="object-cover w-full h-full"
              //   style={{ filter: "blur(8px)" }}
            />
          </div>
        </div>
      </section>
      {/* <AboutComponent /> */}
      <Community />
      <section className="statement bg-[#FBFBFB] p-4">
        <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-8">
          <h2 className="text-xl md:text-3xl font-bold text-left mb-4">
            Mission Statement
          </h2>
          <p className="text-base md:text-lg text-left">
            Our mission is to provide a quality education that prepares all
            students for a successful future.
          </p>
        </div>
        <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-8">
          <h2 className="text-xl md:text-3xl font-bold text-left mb-4">
            Vision Statement
          </h2>
          <p className="text-base md:text-lg text-left">
            Our vision is to create a community of lifelong learners who
            demonstrate respect, responsibility, and integrity.
          </p>
        </div>
      </section>

      <section className="activities bg-[#fff]">
        <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-8">
          <h2 className="text-xl md:text-3xl font-bold text-center mb-4">
            Our extracurricular activities
          </h2>
          <p className="text-base md:text-lg text-left">
            At Treshaw International School, we believe that extracurricular
            activities are an essential part of a student's education. We offer
            a variety of activities to help students develop their talents and
            interests. Some of the activities we offer include:
          </p>
        </div>
        <div className="sports">
          <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-8">
            <h2 className="text-xl md:text-3xl font-bold text-left mb-4">
              Sports
            </h2>
            <p className="text-base md:text-lg text-left">
              We offer a variety of sports programs to help students stay active
              and healthy. Our sports teams compete in local and regional
              competitions, and we have a strong tradition of success in many
              sports.
            </p>
            <div className="sports-images flex flex-wrap items-center justify-center mt-5 pt-6 pb-6 ">
              <div className="sport-image w-full md:w-1/2 h-auto relative mb-4">
                <img
                  src="/assets/soccer.png"
                  alt="Soccer"
                  className="object-cover w-full  md:max-w-[600px] h-full  flex items-center justify-center md:justify-start"
                />
              </div>
              <div className="sport-image w-full md:w-1/2 h-auto relative mb-4">
                <img
                  src="/assets/trophy.png"
                  alt="Basketball"
                  className="object-cover w-full md:max-w-[600px] h-full flex items-center justify-center md:justify-end"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="trips">
          <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-8">
            <h2 className="text-xl md:text-3xl font-bold text-left mb-4">
              Field Trips
            </h2>
            <p className="text-base md:text-lg text-left">
              We believe that learning should be fun, so we offer a variety of
              field trips to help students explore the world around them. Our
              field trips are designed to be educational and engaging, and they
              help students develop a love of learning that will last a
              lifetime.
            </p>
            <div className="trips-images flex flex-wrap items-center justify-center mt-5 pt-6 pb-6 ">
              <div className="trip-image w-full md:w-1/2 h-auto relative mb-4">
                <img
                  src="/assets/trip1.png"
                  alt="Field Trip"
                  className="object-cover w-full md:max-w-[600px] h-full flex items-center justify-center md:justify-start"
                />
              </div>
              <div className="trip-image w-full md:w-1/2 h-auto relative mb-4">
                <img
                  src="/assets/trip2.png"
                  alt="Field Trip"
                  className="object-cover w-full md:max-w-[600px] h-full flex items-center justify-center md:justify-end"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="clubs">
          <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-8">
            <h2 className="text-xl md:text-3xl font-bold text-left mb-4">
              Clubs
            </h2>
            <p className="text-base md:text-lg text-left">
              We offer a variety of clubs to help students explore their
              interests and develop new skills. Our clubs cover a wide range of
              topics, from art and music to science and technology.
            </p>
            <div className="clubs-images flex flex-wrap items-center justify-center mt-5 pt-6 pb-6 ">
              <div className="club-image w-full md:w-1/2 h-auto relative mb-4">
                <img
                  src="/assets/club1.png"
                  alt="Club"
                  className="object-cover w-full md:max-w-[600px] h-full flex items-center justify-center md:justify-start"
                />
              </div>
              <div className="club-image w-full md:w-1/2 h-auto relative mb-4 ">
                <img
                  src="/assets/club2.png"
                  alt="Club"
                  className="object-cover w-full md:max-w-[600px] h-full flex items-center justify-center md:justify-end"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
