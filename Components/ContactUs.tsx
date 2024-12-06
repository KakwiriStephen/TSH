import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

function ContactUs() {
  return (
    <div className="flex flex-col items-center w-full min-h-screen bg-gray-50 py-8 px-4 md:px-12 lg:px-24 ">
      {/* Header */}
      <h1 className="text-3xl font-bold text-center mt-16">Contact Us</h1>
      <p className="text-center text-gray-600 mt-2 mb-8">
        Any question or remarks? Just write us a message!
      </p>

      {/* Contact Form and Info Container */}
      <div className="flex flex-col md:flex-row w-full max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden border  ">
        {/* Contact Information Section */}

        <div className="bg-blue-900 text-white w-full md:w-2/5 p-6 m-3 md:m-3 mx-0 p-4 md:p-6 relative rounded-md text-center">
          <h2 className="text-xl font-bold mb-4 text-center md:text-left">
            Contact Information
          </h2>
          <p className="text-gray-200 mb-8 z-1 text-center md:text-left">
            Say something to start a live chat!
          </p>

          <div className="space-y-1 text-center md:text-left z-1">
            <p className="flex flex-col md:flex-row items-center justify-center md:justify-start space-y-2 md:space-y-0 md:space-x-2 z-1">
              <FaPhone
                className="text-white"
              />
              <span>+254-714006148</span>
            </p>
            <br />
            <p className="flex flex-col md:flex-row items-center justify-center md:justify-start space-y-2 md:space-y-0 md:space-x-2 z-1">
              <FaPhone
                className="text-white"
              />
              <span>+254-717661283</span>
            </p>
            <br />
            <p className="flex flex-col md:flex-row items-center justify-center md:justify-start space-y-2 md:space-y-0 md:space-x-2 z-1">
              <FaEnvelope className="text-white mb-2 md:mb-0" />
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=info@treshawinternationalschool.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
              >
                info@treshawinternationalschool.com
              </a>
            </p>
            <br />
            <p className="flex flex-col md:flex-row items-center justify-center md:justify-start space-y-2 md:space-y-0 md:space-x-2 z-1">
              <FaMapMarkerAlt className="text-red-500 mb-2 md:mb-0" />
              <span>Muhuti Close, South C, Nairobi, Kenya</span>
            </p>
            <br />
          </div>

          {/* Decorative Circles */}
          <div className="absolute bottom-0 right-0 z-0">
            <div className="w-24 h-24 bg-blue-200 opacity-40 rounded-full absolute bottom-10 right-10"></div>
            <div className="w-32 h-32 bg-blue-300 opacity-30 rounded-tl-full absolute bottom-0 right-0 overflow-hidden"></div>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="w-full md:w-3/5 p-8">
          <form className="space-y-4">
            <div className="flex flex-wrap md:flex-nowrap md:space-x-4">
              <div className="w-full md:w-1/2 mb-4 md:mb-0">
                <label className="text-gray-700 text-xs mb-1 block">
                  First Name
                </label>
                <input
                  type="text"
                  placeholder="John"
                  className="w-full px-4 py-2 border-b border-gray-300 focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="w-full md:w-1/2">
                <label className="text-gray-700 text-xs mb-1 block">
                  Last Name
                </label>
                <input
                  type="text"
                  placeholder="Doe"
                  className="w-full px-4 py-2 border-b border-gray-300 focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>

            <br />

            <div className="flex flex-wrap md:flex-nowrap md:space-x-4">
              <div className="w-full md:w-1/2 mb-4 md:mb-0">
                <label className="text-gray-700 text-xs mb-1 block">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="example@gmail.com"
                  className="w-full px-4 py-2 border-b border-gray-300 focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="w-full md:w-1/2">
                <label className="text-gray-700 text-xs mb-1 block">
                  Phone Number
                </label>
                <input
                  type="text"
                  placeholder="+254 717661283"
                  className="w-full px-4 py-2 border-b border-gray-300 focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>
            <br />

            {/* Subject Radio Buttons */}
            <div className="mt-4">
              <p className="text-gray-700 mb-2 text-xs">Select Subject?</p>
              <div className="flex flex-wrap gap-4 md:justify-start">
                <label className="flex items-center space-x-2 text-xs w-full md:w-auto">
                  <input
                    type="radio"
                    name="subject"
                    value="General Inquiry"
                    className="accent-black"
                  />
                  <span>General Inquiry</span>
                </label>
                <label className="flex items-center space-x-2 text-xs w-full md:w-auto">
                  <input
                    type="radio"
                    name="subject"
                    value="Admissions Inquiry"
                    className="accent-black"
                  />
                  <span>Admissions Inquiry</span>
                </label>
                <label className="flex items-center space-x-2 text-xs w-full md:w-auto">
                  <input
                    type="radio"
                    name="subject"
                    value="Support Inquiry"
                    className="accent-black"
                  />
                  <span>Support Inquiry</span>
                </label>
                <label className="flex items-center space-x-2 text-xs w-full md:w-auto">
                  <input
                    type="radio"
                    name="subject"
                    value="Other"
                    className="accent-black"
                  />
                  <span>Other</span>
                </label>
              </div>
            </div>

            <br></br>

            {/* Message Field */}
            <label className="text-gray-700 text-xs mb-1 block">message</label>
            <textarea
              placeholder="Write Your Message.."
              className="w-full px-4 py-2 border-b border-gray-300 focus:outline-none focus:border-blue-500 resize-none no-scrollbar"
            ></textarea>

            {/* Submit Button */}
            <div className="flex justify-end">
              <button
                type="submit"
                className="px-6 py-2 bg-green-500 text-white rounded-full hover:bg-green-600"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* New Image Container Below */}
      <div className="mt-8 flex justify-center">
        <img src="\assets\let.png" alt="" className="w-full " />
      </div>
    </div>
  );
}

export default ContactUs;
