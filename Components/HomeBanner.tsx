// import Image from "next/image"; // If using Next.js for image optimization
// import React from "react";
// import yourImage from "../public/assets/hero.jpeg"; // Update the path as needed

// export default function HeroSection() {
//   return (
//     <section className="bg-[#EDEEF5] min-h-screen flex items-center justify-center px-4 md:px-8 py-8">
//       <div className="container mx-auto flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
//         {/* Image Section */}
//         <div className="md:w-1/2 flex justify-center md:order-2">
//           <Image
//             src={yourImage} // The image path uploaded
//             alt="School Event"
//             className="rounded-lg shadow-lg"
//           />
//         </div>

//         {/* Text Section */}
//         <div className="md:w-1/2 text-center md:text-left">
//           <h1 className="text-3xl md:text-4xl font-bold text-black">
//             Welcome to{" "}
//             <span className="text-[#3A3B7B]">
//               Treshaw <br />
//               International School
//             </span>
//           </h1>
//           <p className="text-gray-700 mt-4">
//             We empower students to become the worlds trailblazers. <br /> We
//             prepare each child for life, not just for tests.
//           </p>

//           <a href="/about">
//             <button className="mt-6 px-6 py-3 bg-[#2CB34C] text-white rounded-lg shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] hover:shadow-lg transition duration-300">
//               Learn More{" "}
//             </button>
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// }
"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import yourImage1 from "../public/assets/about.jpeg"; // Update paths as needed
import yourImage2 from "../public/assets/b5.jpeg";
import yourImage3 from "../public/assets/b3.jpeg";
import yourImage4 from "../public/assets/b4.jpeg";

const images = [yourImage1, yourImage2, yourImage3, yourImage4];

export default function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-[#EDEEF5] min-h-screen flex items-center justify-center px-4 md:px-8 py-8 relative overflow-hidden">
      {/* Image Slider Section */}
      <div className="w-full h-full absolute inset-0">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={image}
              alt={`Slide ${index + 1}`}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        ))}
      </div>

      {/* Text Content Section */}
      <div className="container mx-auto relative z-10 flex flex-col items-center text-center md:text-left space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-md">
          Welcome to <br />
          <span className="text-[#FFD700]">Treshaw International School</span>
        </h1>
        <p className="text-white text-lg md:text-xl mt-4 max-w-2xl">
          Empowering students to become the worlds trailblazers. <br />
          Preparing each child for life, not just for tests.
        </p>
        <a href="/about">
          <button className="mt-6 px-8 py-3 bg-[#2CB34C] text-white text-lg rounded-lg shadow-lg hover:bg-[#249C3F] transition duration-300">
            Learn More
          </button>
        </a>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/20"></div>
    </section>
  );
}
