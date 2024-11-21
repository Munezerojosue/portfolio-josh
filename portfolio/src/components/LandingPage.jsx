'use client';

import { useState, useEffect } from 'react';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import josh from '../assets/Image/josh.png';

export default function Component() {
  const texts = ["Frontend Developer", "UI/UX", "Ios app developer"];
  const [currentText, setCurrentText] = useState(0); // State to track which text to show
  const [fade, setFade] = useState(true); // State to control fade effect

  useEffect(() => {
    const timer = setInterval(() => {
      setFade(false); // Start fading out
      setTimeout(() => {
        setCurrentText((prev) => (prev + 1) % texts.length); // Update the text index
        setFade(true); // Start fading in
      }, 2000); // Delay for fade out duration
    }, 6000);

    return () => clearInterval(timer); // Cleanup the interval on unmount
  }, [texts.length]);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="relative flex min-h-screen items-center justify-center">
        {/* Background Image */}
        <img
          src={josh}
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/70"></div>

        {/* Content */}
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-center space-y-4">
          <h1 className="mb-2 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            I am MUNEZERO Josue
          </h1>

          {/* Text with easing effect */}
          <p
            className={`text-xl font-light md:text-2xl lg:text-3xl transition-opacity duration-500 ${
              fade ? "opacity-100" : "opacity-0"
            }`}
          >
            {texts[currentText]}
          </p>

          {/* Social Media Icons */}
          <div className="flex justify-center items-center space-x-6 mt-6">
            <FaFacebook size={24} className="hover:text-gray-200 cursor-pointer" />
            <FaInstagram size={24} className="hover:text-gray-200 cursor-pointer" />
            <a
              href="https://github.com/Munezerojosue"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={24} className="hover:text-gray-200 cursor-pointer" />
            </a>
            <a
              href="https://www.linkedin.com/in/munezero-josue-03a8a628a/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={24} className="hover:text-gray-200 cursor-pointer" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
