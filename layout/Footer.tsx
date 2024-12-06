import React from "react";
import Link from "next/link";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { BsChevronRight } from "react-icons/bs";

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-[#1C3C6C] text-white py-12 overflow-hidden">
      {/* Geometric Background Watermark */}
      <div
        className="absolute inset-0 opacity-10 bg-no-repeat bg-center bg-contain"
        style={{ backgroundImage: "url(/assets/let.png)" }}
      ></div>

      <div className="relative container mx-auto px-6 md:px-12 lg:px-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Section - School Information */}
        <div className="flex flex-col items-center md:items-start space-y-4 text-center md:text-left">
          <img
            src="/assets/logo-1.png" // Replace with actual logo path
            alt="Treshaw International School Logo"
            className="h-16 w-17"
          />
          <h3 className="text-2xl font-semibold">
            Treshaw International School
          </h3>
          <p className="text-sm leading-relaxed max-w-xs">
            British International Curriculum
            <br />
            Offering Pearson Edexcel International Curriculum
          </p>
        </div>

        {/* Middle Section - Quick Links with Custom Bullet Points */}
        <div className="flex flex-col items-center md:items-start space-y-4">
          <h4 className="text-lg font-semibold">Quick Links</h4>
          <ul className="space-y-2 text-center md:text-left">
            {[
              { href: "/", label: "Home" },
              { href: "/about", label: "About Us" },
              { href: "/offer", label: "What We Offer" },
              { href: "/subject-classes", label: "Subjects & Classes" },
              { href: "/contactUs", label: "Contact" },
            ].map((link, index) => (
              <li key={index} className="flex items-center space-x-2">
                <BsChevronRight className="text-blue-400" />{" "}
                {/* Custom bullet icon */}
                <Link
                  href={link.href}
                  className="hover:text-blue-400 transition duration-200"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            {/* Add the Fee Structure link */}
            <li className="flex items-center space-x-2">
              <BsChevronRight className="text-blue-400" />
              <a
                href="/assets/fee.pdf" // Path to your PDF
                target="_blank"
                download="FeeStructure.pdf" // Optional: Set the download name
                className="hover:text-blue-400 transition duration-200"
              >
                Fee Structure
              </a>
            </li>
            <li className="flex items-center space-x-2">
              <BsChevronRight className="text-blue-400" />
              <a
                href="/assets/calendar.pdf" // Path to your PDF
                target="_blank"
                download="Calendar.pdf" // Optional: Set the download name
                className="hover:text-blue-400 transition duration-200"
              >
                Calendar
              </a>
            </li>
          </ul>
        </div>

        {/* Right Section - Contact Information with Icons */}
        <div className="flex flex-col items-center md:items-start space-y-4">
          <h4 className="text-lg font-semibold">Contact Us</h4>
          <div className="space-y-1 text-center md:text-left">
            <p className="flex items-center justify-center md:justify-start space-x-2">
              <FaPhone className="text-white" aria-label="Phone" role="img" />
              <span>+254-714006148</span>
            </p>
            <p className="flex items-center justify-center md:justify-start space-x-2">
              <FaPhone className="text-white" />
              <span>+254-717661283</span>
            </p>
            <p className="flex items-center justify-center md:justify-start space-x-2">
              <FaEnvelope className="text-white" />{" "}
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=info@treshawinternationalschool.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
              >
                info@treshawinternationalschool.com
              </a>
            </p>
            <p className="flex items-center justify-center md:justify-start space-x-2">
              <FaMapMarkerAlt className="text-red-500" />{" "}
              <span>Muhuti Close, South C, Nairobi, Kenya</span>
            </p>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 border-t border-gray-500 pt-6 text-center text-xs lg:text-sm relative z-10">
        &copy; 2024 Treshaw International School | Powered by Bold-Code.
      </div>
    </footer>
  );
};

export default Footer;
