// "use client";
// import React, { useEffect, useState } from "react";
// //eslint-disable
// // eslint-disable-next-line
// // @ts-ignore
// import AOS from "aos";
// import "aos/dist/aos.css";

// function CulturalActivities() {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     AOS.init({
//       duration: 1000,
//     });

//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//     }, 3000); // Slide every 3 seconds

//     return () => clearInterval(interval);
//   }, []);

//   const images = [
//     "/assets/Frame 1000001762.png",
//     "/assets/Frame 1000001763.png",
//     "/assets/Frame 1000001764.png",
//     "/assets/g1.png",
//     "/assets/g2.png",
//     "/assets/g3.png",
//   ];

//   const handleDotClick = (index: number) => {
//     setCurrentIndex(index);
//   };

//   return (
//     <div data-aos="zoom-in-up" className="bg-[#1C3C6C] py-16 px-4">
//       <div className="max-w-5xl mx-auto text-center">
//         <h2 className="text-white text-3xl font-bold mb-8">Gallery</h2>

//         <div className="relative overflow-hidden">
//           <div
//             className="flex transition-transform duration-500 ease-in-out"
//             style={{
//               transform: `translateX(-${currentIndex * (100 + 2)}%)`,
//               gap: "0.5rem",
//             }}
//           >
//             {images.concat(images).map((image, index) => (
//               <div
//                 key={index}
//                 className="flex-shrink-0 w-full max-w-[33.33%] bg-white rounded-lg overflow-hidden shadow-lg mx-2"
//               >
//                 <img
//                   src={image}
//                   alt={`Cultural Activity ${index + 1}`}
//                   className="w-full h-full object-cover rounded-md"
//                 />
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className="flex justify-center mt-4">
//           {images.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => handleDotClick(index)}
//               className={`w-3 h-3 rounded-full mx-1 focus:outline-none ${
//                 currentIndex === index ? "bg-white" : "bg-gray-500"
//               }`}
//             ></button>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default CulturalActivities;

//eslint-disable
// eslint-disable-next-line
// @ts-ignore
"use client";
import React, { useEffect, useState } from "react";
//eslint-disable
// eslint-disable-next-line
// @ts-ignore
// import AOS from "aos";
// import "aos/dist/aos.css";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

function CulturalActivities() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(3); // Default: 3 images per slide
  const [isPaused, setIsPaused] = useState(false);

  const images = [
    "/assets/Frame 1000001762.png",
    "/assets/Frame 1000001763.png",
    "/assets/Frame 1000001764.png",
    "/assets/g1.png",
    "/assets/g2.png",
    "/assets/g3.png",
  ];

  useEffect(() => {
    // AOS.init({ duration: 800 });

    const updateItemsPerSlide = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth < 640) setItemsPerSlide(1); // Mobile
      else if (screenWidth < 768) setItemsPerSlide(2); // Tablet
      else setItemsPerSlide(3); // Large screens
    };

    updateItemsPerSlide();
    window.addEventListener("resize", updateItemsPerSlide);

    return () => window.removeEventListener("resize", updateItemsPerSlide);
  }, []);

  useEffect(() => {
    let autoScrollTimeout: NodeJS.Timeout;

    if (!isPaused && itemsPerSlide === 3) {
      autoScrollTimeout = setInterval(() => {
        handleNext();
      }, 3000);
    }

    return () => clearInterval(autoScrollTimeout);
  }, [currentIndex, isPaused, itemsPerSlide]);

  useEffect(() => {
    if (isPaused) {
      const resumeTimeout = setTimeout(() => {
        setIsPaused(false);
      }, 5000); // Resume auto-scroll after 5 seconds of inactivity
      return () => clearTimeout(resumeTimeout);
    }
  }, [isPaused]);

  const totalSlides = Math.ceil(images.length / itemsPerSlide);

  const handleDotClick = (index: number) => {
    setIsPaused(true);
    setCurrentIndex(index);
  };

  const handlePrev = () => {
    setIsPaused(true);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
  };

  const handleNext = () => {
    setIsPaused(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };

  const groupedImages = [];
  for (let i = 0; i < images.length; i += itemsPerSlide) {
    groupedImages.push(images.slice(i, i + itemsPerSlide));
  }

  return (
    <div
      data-aos="zoom-in-up"
      data-aos-duration="1200"
      className="bg-[#1C3C6C] py-16 px-4 md:px-8 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-white text-3xl md:text-4xl font-bold mb-8">
          Gallery
        </h2>

        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              width: `${totalSlides * 100}%`,
              transform: `translateX(-${(currentIndex / totalSlides) * 100}%)`,
            }}
          >
            {groupedImages.map((group, groupIndex) => (
              <div
                key={groupIndex}
                className={`flex w-full ${
                  itemsPerSlide === 1
                    ? "justify-center"
                    : itemsPerSlide === 2
                    ? "justify-evenly"
                    : "justify-between"
                }`}
              >
                {group.map((image, index) => (
                  <div
                    key={index}
                    className="w-[100%] sm:w-[48%] md:w-[30%] bg-white rounded-lg overflow-hidden shadow-lg"
                  >
                    <img
                      src={image}
                      alt={`Cultural Activity ${index + 1}`}
                      className="w-full h-full object-cover rounded-md"
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={handlePrev}
            className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-gray-700 transition-transform"
            aria-label="Previous"
          >
            <FiChevronLeft size={20} />
          </button>
          <button
            onClick={handleNext}
            className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-gray-700 transition-transform"
            aria-label="Next"
          >
            <FiChevronRight size={20} />
          </button>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center mt-6">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-3 h-3 rounded-full mx-1 transition-all duration-300 ${
                currentIndex === index
                  ? "bg-white scale-110"
                  : "bg-gray-500 hover:bg-gray-400"
              }`}
              aria-label={`Dot ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CulturalActivities;
