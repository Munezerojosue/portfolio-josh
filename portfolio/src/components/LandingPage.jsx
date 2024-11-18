'use client'

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin,  } from 'react-icons/fa';
import josh from '../assets/Image/josh.png';

export default function Component() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 px-4 py-4">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <a href="#" className="text-2xl font-bold">
            Josh
          </a>
          
          <div className="hidden items-center gap-8 md:flex">
            <a href="#" className="border-b-2 border-white pb-1">
              Home
            </a>
            <a href="#" className="hover:text-gray-300">
              About
            </a>
            <a href="#" className="hover:text-gray-300">
              Services
            </a>
            <a href="#" className="hover:text-gray-300">
              Portfolio
            </a>
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center gap-1 hover:text-gray-300"
              >
                Dropdown
                <ChevronDown className="h-4 w-4" />
              </button>
              {isDropdownOpen && (
                <div className="absolute top-full mt-2 w-48 rounded-md bg-white py-2 text-black shadow-lg">
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                    Option 1
                  </a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                    Option 2
                  </a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                    Option 3
                  </a>
                </div>
              )}
            </div>
            <a href="#" className="hover:text-gray-300">
              Contact
            </a>
          </div>
        </div>
      </nav>

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
  <p className="text-xl font-light md:text-2xl lg:text-3xl">
    Frontend Developer
  </p>
  {/* Social Media Icons */}
  <div className="flex justify-center items-center space-x-6 mt-6">
  <FaFacebook size={24} className="hover:text-gray-200 cursor-pointer" />
  <FaInstagram size={24} className="hover:text-gray-200 cursor-pointer" />
  
  <a href="https://github.com/Munezerojosue" target="_blank" rel="noopener noreferrer">
  <FaGithub size={24} className="hover:text-gray-200 cursor-pointer" />
  </a>
  
  <a href="https://www.linkedin.com/in/munezero-josue-03a8a628a/" target="_blank" rel="noopener noreferrer">
    <FaLinkedin size={24} className="hover:text-gray-200 cursor-pointer" />
  </a>
</div>

</div>

</div>

    </div>
  )
}