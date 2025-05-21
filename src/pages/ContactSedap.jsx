import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

export default function ContactSedap () {
  return (
    <div className="bg-white text-gray-700 px-4 py-12">
      {/* Header Section */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-poppins-extrabold text-gray-800">Contact</h2>
        <p className="text-gray-500 mt-2">Home / Contact</p>
      </div>
      {/* Contact Info Cards */}
      <div className="max-w-7xl mx-auto mt-12 flex flex-col md:flex-row justify-center gap-6 px-4">
        <div className="flex-1 bg-white border rounded-lg p-6 shadow-sm flex items-start gap-4">
          <div className="bg-gradient-to-br from-orange-400 to-orange-300 text-white p-3 rounded-lg">
            <FaPhoneAlt size={24} />
          </div>
          <div>
            <h4 className="font-semibold text-gray-800">Phone</h4>
            <p className="text-sm text-gray-600">+1-202-555-0135</p>
          </div>
        </div>
        <div className="flex-1 bg-white border rounded-lg p-6 shadow-sm flex items-start gap-4">
          <div className="bg-gradient-to-br from-orange-400 to-orange-300 text-white p-3 rounded-lg">
            <FaEnvelope size={24} />
          </div>
          <div>
            <h4 className="font-semibold text-gray-800">E-Mail</h4>
            <p className="text-sm text-gray-600">hello@example.com</p>
          </div>
        </div>
        <div className="flex-1 bg-white border rounded-lg p-6 shadow-sm flex items-start gap-4">
          <div className="bg-gradient-to-br from-orange-400 to-orange-300 text-white p-3 rounded-lg">
            <FaMapMarkerAlt size={24} />
          </div>
          <div>
            <h4 className="font-semibold text-gray-800">Location</h4>
            <p className="text-sm text-gray-600">California, USA</p>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="max-w-7xl mx-auto mt-16 px-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Send Message</h2>
        <div className="w-16 h-1 bg-gradient-to-r from-orange-400 to-orange-300 rounded-full mb-8"></div>

        <form className="space-y-6">
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="Your name"
              className="w-full rounded-full border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-300"
            />
            <input
              type="email"
              placeholder="Email address"
              className="w-full rounded-full border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-300"
            />
          </div>
          <input
            type="text"
            placeholder="Subject"
            className="w-full rounded-full border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-300"
          />
          <textarea
            rows="5"
            placeholder="Your message here..."
            className="w-full rounded-2xl border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-300"
          />
          <button
            type="submit"
            className="bg-gradient-to-r from-pink-400 to-orange-300 text-white px-6 py-3 rounded-full font-semibold shadow hover:opacity-90 transition"
          >
            Submit Message
          </button>
        </form>
      </div>
    </div>
  );
};

