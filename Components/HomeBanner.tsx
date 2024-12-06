import Image from "next/image"; // If using Next.js for image optimization
import React from "react";
import yourImage from "../public/assets/hero.jpeg"; // Update the path as needed

export default function HeroSection() {
  return (
    <section className="bg-[#EDEEF5] min-h-screen flex items-center justify-center px-4 md:px-8 py-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
        {/* Image Section */}
        <div className="md:w-1/2 flex justify-center md:order-2">
          <Image
            src={yourImage} // The image path uploaded
            alt="School Event"
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Text Section */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-bold text-black">
            Welcome to{" "}
            <span className="text-[#3A3B7B]">
              Treshaw <br />
              International School
            </span>
          </h1>
          <p className="text-gray-700 mt-4">
            We empower students to become the world’s trailblazers. <br /> We
            prepare each child for life, not just for tests.
          </p>

          <a href="/about">
            <button className="mt-6 px-6 py-3 bg-[#2CB34C] text-white rounded-lg shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] hover:shadow-lg transition duration-300">
              Learn More{" "}
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
