"use client";
import React, { useEffect } from "react";
//eslint-disable
// eslint-disable-next-line
// @ts-ignore
// import AOS from "aos";
// import "aos/dist/aos.css";

const teachersData = [
  {
    id: 1,
    image: "/assets/t1.png", // Replace with actual image paths
    firstName: "John",
    lastName: "Doe",
    role: "Head of Department",
  },
  {
    id: 2,
    image: "/assets/t2.png",
    firstName: "Jane",
    lastName: "Smith",
    role: "Head of Department",
  },
  {
    id: 3,
    image: "/assets/t3.png",
    firstName: "Robert",
    lastName: "Brown",
    role: "Head of Department",
  },
  {
    id: 4,
    image: "/assets/t4.png",
    firstName: "Alice",
    lastName: "Johnson",
    role: "Head of Department",
  },
  {
    id: 5,
    image: "/assets/t5.png",
    firstName: "Michael",
    lastName: "Williams",
    role: "Head of Department",
  },
  {
    id: 6,
    image: "/assets/t6.png",
    firstName: "Emily",
    lastName: "Davis",
    role: "Head of Department",
  },
];

const Teachers = () => {
  useEffect(() => {
    // AOS.init({ duration: 800 });
  }, []);
  return (
    <div
      data-aos="zoom-in-up"
      data-aos-duration="1200"
      className="bg-white p-4 max-w-900px"
    >
      <h2 className="text-center text-2xl font-bold text-gray-800 mb-8">
        Meet Our Teachers
      </h2>
      <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-4">
        {teachersData.map((teacher) => (
          <div
            key={teacher.id}
            className="flex flex-col items-center bg-[#1C3C6C] border-[6px] border-[#1C3C6C] rounded-lg overflow-hidden min-w-[180px] min-h-[auto] w-full sm:w-[calc(50%-16px)] lg:w-[calc(25.333%-16px)] transition-transform transform hover:scale-105 hover:shadow-lg"
          >
            <div className="w-auto h-auto">
              {" "}
              {/* Increased height for images */}
              <img
                src={teacher.image}
                alt={`${teacher.firstName} ${teacher.lastName}`}
                className="bg-[#1C3C6C] w-full h-full object-fit"
              />
            </div>
            <div className="bg-[#1C3C6C] text-white w-full text-center py-4">
              <p className="text-lg font-semibold">{`${teacher.firstName} ${teacher.lastName}`}</p>
              <p className="text-sm">{teacher.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Teachers;
