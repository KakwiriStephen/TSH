// "use client";
// import React, { useState, useEffect } from "react";

// export default function AboutComponent() {
//   // Image array for the carousel
//   const images = [
//     "/assets/g3.png",
//     "/assets/t1.png",
//     "/assets/g3.png",
//     "/assets/g3.png",
//     "/assets/g3.png",
//     "/assets/g3.png",
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);

//   // Function to advance the carousel
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 2) % images.length);
//     }, 3000); // Adjust the timing as needed
//     return () => clearInterval(interval);
//   }, [images.length]);

//   // Function to get the current visible images
//   const getVisibleImages = () => {
//     return [images[currentIndex], images[(currentIndex + 1) % images.length]];
//   };

//   return (
//     <div className="bg-white min-h-screen py-10 px-6 md:px-16 lg:px-32">
//       <div className="relative bg-[#1C3C6C] text-white rounded-xl p-10">
//         <div className="absolute inset-x-0 -top-10 transform translate-y-10">
//           <div className="w-12 h-12 bg-orange-400 rounded-full" />
//         </div>
//         <div className="absolute inset-y-0 right-10 transform translate-x-10">
//           <div className="w-16 h-16 border-4 border-green-400 rounded-full" />
//         </div>
//         <div className="text-center mb-10">
//           <h1 className="text-2xl font-bold">Small Team, Big Hearts</h1>
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
//           <div>
//             <p className="text-lg">
//               Themesberg is an experienced and passionate group of designers,
//               developers, project managers, writers, and artists. Every client
//               we work with becomes a part of the team. Together we face the
//               challenges and celebrate the victories.
//             </p>
//             <p className="text-lg mt-4">
//               With a culture of collaboration, a roster of talent, and several
//               office pooches, the Themesberg team is active in the creative
//               community, endlessly interested in whats next, and generally
//               pleasant to be around.
//             </p>
//             <div className="mt-6">
//               <span className="font-signature text-lg block">
//                 [Insert Signature]
//               </span>
//             </div>
//           </div>
//           {/* Carousel Section */}
//           <div className="relative overflow-hidden">
//             <div className="flex transition-transform duration-1000 ease-in-out">
//               {getVisibleImages().map((src, index) => (
//                 <img
//                   key={index}
//                   src={src}
//                   alt={`Slide ${index + 1}`}
//                   className="rounded-lg w-1/2 object-cover"
//                   style={{ flex: "0 0 50%" }} // Ensures two images take up full width
//                 />
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
//         <div className="text-center">
//           <h2 className="text-2xl font-bold text-blue-800">500</h2>
//           <p className="text-gray-600">Team Members</p>
//         </div>
//         <div className="text-center">
//           <h2 className="text-2xl font-bold text-blue-800">2400</h2>
//           <p className="text-gray-600">Projects Published</p>
//         </div>
//         <div className="text-center">
//           <h2 className="text-2xl font-bold text-blue-800">80</h2>
//           <p className="text-gray-600">Countries</p>
//         </div>
//       </div>
//     </div>
//   );
// }

// "use client";
// import React, { useState, useEffect } from "react";
// import { FaUsers, FaProjectDiagram, FaGlobe } from "react-icons/fa";

// export default function AboutComponent() {
//   // Image array for the carousel
//   const images = [
//     "/assets/g3.png",
//     "/assets/t1.png",
//     "/assets/g3.png",
//     "/assets/g3.png",
//     "/assets/g3.png",
//     "/assets/g3.png",
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);

//   // Function to advance the carousel
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 2) % images.length);
//     }, 3000); // Adjust the timing as needed
//     return () => clearInterval(interval);
//   }, [images.length]);

//   // Function to get the current visible images
//   const getVisibleImages = () => {
//     return [images[currentIndex], images[(currentIndex + 1) % images.length]];
//   };

//   return (
//     <div className="bg-white min-h-screen py-10 px-6 md:px-16 lg:px-32">
//       <div className="relative bg-[#1C3C6C] text-white rounded-xl p-10 shadow-lg">
//         <div className="absolute inset-x-0 -top-10 transform translate-y-10">
//           <div className="w-12 h-12 bg-orange-400 rounded-full" />
//         </div>
//         <div className="absolute inset-y-0 right-10 transform translate-x-10">
//           <div className="w-16 h-16 border-4 border-green-400 rounded-full" />
//         </div>
//         <div className="text-center mb-10">
//           <h1 className="text-2xl font-bold">Small Team, Big Hearts</h1>
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
//           <div>
//             <p className="text-lg">
//               Themesberg is an experienced and passionate group of designers,
//               developers, project managers, writers, and artists. Every client
//               we work with becomes a part of the team. Together we face the
//               challenges and celebrate the victories.
//             </p>
//             <p className="text-lg mt-4">
//               With a culture of collaboration, a roster of talent, and several
//               office pooches, the Themesberg team is active in the creative
//               community, endlessly interested in whats next, and generally
//               pleasant to be around.
//             </p>
//             <div className="mt-6">
//               <span className="font-signature text-lg block">
//                 [Insert Signature]
//               </span>
//             </div>
//           </div>
//           {/* Carousel Section */}
//           <div className="relative overflow-hidden">
//             <div className="flex gap-4 transition-transform duration-1000 ease-in-out">
//               {getVisibleImages().map((src, index) => (
//                 <img
//                   key={index}
//                   src={src}
//                   alt={`Slide ${index + 1}`}
//                   className="rounded-lg w-[180px] h-[270px] object-fit"
//                   style={{ flex: "0 0 50%" }}
//                 />
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="flex flex-wrap justify-center gap-10">
//         <div className="w-full sm:w-64 bg-white p-6 rounded-lg shadow-lg text-center">
//           <FaUsers className="text-4xl text-blue-500 mb-4" />
//           <h3 className="text-xl font-semibold text-gray-800 mb-2">Our Team</h3>
//           <p className="text-gray-600">
//             We have a dedicated team of professionals working towards
//             excellence.
//           </p>
//         </div>
//         <div className="w-full sm:w-64 bg-white p-6 rounded-lg shadow-lg text-center">
//           <FaProjectDiagram className="text-4xl text-green-500 mb-4" />
//           <h3 className="text-xl font-semibold text-gray-800 mb-2">Projects</h3>
//           <p className="text-gray-600">
//             We have successfully completed numerous impactful projects.
//           </p>
//         </div>
//         <div className="w-full sm:w-64 bg-white p-6 rounded-lg shadow-lg text-center">
//           <FaGlobe className="text-4xl text-yellow-500 mb-4" />
//           <h3 className="text-xl font-semibold text-gray-800 mb-2">
//             Global Reach
//           </h3>
//           <p className="text-gray-600">
//             Our services span across the globe, connecting clients worldwide.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";
import React, { useState, useEffect } from "react";
import { FaUsers, FaProjectDiagram, FaGlobe } from "react-icons/fa";

export default function AboutComponent() {
  const images = [
    "/assets/g3.png",
    "/assets/t1.png",
    "/assets/g3.png",
    "/assets/g3.png",
    "/assets/g3.png",
    "/assets/g3.png",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 2) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  const getVisibleImages = () => {
    return [images[currentIndex], images[(currentIndex + 1) % images.length]];
  };

  return (
    <div className="bg-gray-100 min-h-screen py-10 px-6 md:px-16 lg:px-32">
      {/* Main Section */}
      <div className="relative bg-[#0A223D] text-white rounded-xl p-10 shadow-lg overflow-hidden">
        <div className="absolute top-0 left-10 w-16 h-16 bg-orange-400 rounded-full blur-xl opacity-30"></div>
        <div className="absolute bottom-0 right-10 w-24 h-24 border-4 border-green-400 rounded-full blur-md opacity-30"></div>
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold md:text-4xl">
            About Treshaw, Big Hearts
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-lg leading-relaxed">
              Themesberg is an experienced and passionate group of designers,
              developers, project managers, writers, and artists. Every client
              we work with becomes a part of the team. Together, we face
              challenges and celebrate victories.
            </p>
            <p className="text-lg mt-4 leading-relaxed">
              With a culture of collaboration, a roster of talent, and several
              office pooches, the Themesberg team is active in the creative
              community, endlessly interested in whats next, and generally
              pleasant to be around.
            </p>
            <div className="mt-6">
              <span className="font-signature text-lg block italic">
                — Themesberg Team
              </span>
            </div>
          </div>
          {/* Carousel Section */}
          <div className="relative overflow-hidden rounded-lg shadow-lg">
            <div className="flex gap-4 transition-transform duration-1000 ease-in-out transform">
              {getVisibleImages().map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt={`Slide ${index + 1}`}
                  className="rounded-lg w-full h-72 object-cover"
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Cards Section */}
      <div className="flex flex-wrap justify-center gap-10 mt-12">
        <div className="w-full sm:w-64 bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-2xl transition-shadow duration-300">
          <FaUsers className="text-5xl text-blue-500 mb-4" />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Our Team</h3>
          <p className="text-gray-600 leading-relaxed">
            A dedicated team of professionals working towards excellence.
          </p>
        </div>
        <div className="w-full sm:w-64 bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-2xl transition-shadow duration-300">
          <FaProjectDiagram className="text-5xl text-green-500 mb-4" />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Projects</h3>
          <p className="text-gray-600 leading-relaxed">
            Successfully completed impactful and innovative projects.
          </p>
        </div>
        <div className="w-full sm:w-64 bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-2xl transition-shadow duration-300">
          <FaGlobe className="text-5xl text-green-500 mb-4" />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Global Reach
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Connecting clients across the globe with our diverse services.
          </p>
        </div>
      </div>
    </div>
  );
}
