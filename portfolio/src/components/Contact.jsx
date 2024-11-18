import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-16">
      {/* Contact Section */}
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold">Contact</h2>
          <p className="text-gray-600 mt-2">
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit
          </p>
        </div>

        {/* Contact Information Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Address Card */}
          <div className="bg-white rounded-lg shadow-md p-8 text-center hover:shadow-lg transition duration-300">
            <FaMapMarkerAlt size={40} className="text-blue-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold">Address</h3>
            <p className="text-gray-600">masaka street, kigali,Rwanda</p>
          </div>

          {/* Call Us Card */}
          <div className="bg-white rounded-lg shadow-md p-8 text-center hover:shadow-lg transition duration-300">
            <FaPhoneAlt size={40} className="text-blue-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold">Call Us</h3>
            <p className="text-gray-600">+250785739053</p>
          </div>

          {/* Email Us Card */}
          <div className="bg-white rounded-lg shadow-md p-8 text-center hover:shadow-lg transition duration-300">
            <FaEnvelope size={40} className="text-blue-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold">Email Us</h3>
            <p className="text-gray-600">josuemunezero2@gmail.com</p>
          </div>
        </div>

        {/* Contact Form */}
        <form className="bg-white rounded-lg shadow-md p-8 mb-16 max-w-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <input
              type="text"
              placeholder="Your Name"
              className="border border-gray-300 rounded-lg p-4 focus:outline-none focus:border-blue-500"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="border border-gray-300 rounded-lg p-4 focus:outline-none focus:border-blue-500"
            />
          </div>
          <input
            type="text"
            placeholder="Subject"
            className="border border-gray-300 rounded-lg p-4 w-full mb-6 focus:outline-none focus:border-blue-500"
          />
          <textarea
            rows="6"
            placeholder="Message"
            className="border border-gray-300 rounded-lg p-4 w-full focus:outline-none focus:border-blue-500"
          ></textarea>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg mt-6 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Footer */}
      <footer className="bg-blue-500 text-white py-8">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <div className="flex space-x-4 mb-4">
            <FaFacebook size={24} className="hover:text-gray-200 cursor-pointer" />
            <FaTwitter size={24} className="hover:text-gray-200 cursor-pointer" />
            <FaInstagram size={24} className="hover:text-gray-200 cursor-pointer" />
            <FaLinkedin size={24} className="hover:text-gray-200 cursor-pointer" />
          </div>
          <p className="text-center">© Copyright Munezerojosue. All Rights Reserved</p>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
