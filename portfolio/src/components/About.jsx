'use client'

import { ArrowUp } from 'lucide-react'
import josh2 from '../assets/Image/josh2.png'

export default function About() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const skills = [
    { name: 'HTML', percentage: 100 },
    { name: 'CSS', percentage: 90 },
    { name: 'JAVASCRIPT', percentage: 75 },
    { name: 'TYPESCRIPT', percentage: 70 },
    { name: 'NEXT JS', percentage: 80 },
  ]

  return (
    <div className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left Column */}
          <div className="space-y-8">
            <img
              src={josh2}
              alt="Profile"
              className="w-full max-w-md rounded-lg shadow-lg"
            />
            
            <div className="space-y-4">
              <div>
                <span className="font-semibold">Name: </span>
                <span className="text-gray-600">Munezero Josue</span>
              </div>
              <div>
                <span className="font-semibold">Profile: </span>
                <span className="text-gray-600">frontend developer</span>
              </div>
              <div>
                <span className="font-semibold">Email: </span>
                <span className="text-gray-600">josuemunezero2@gmail.com</span>
              </div>
              <div>
                <span className="font-semibold">Phone: </span>
                <span className="text-gray-600">+250785739053</span>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Skills</h3>
              {skills.map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between">
                    <span>{skill.name}</span>
                    <span>{skill.percentage}%</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-gray-200">
                    <div
                      className="h-2 rounded-full bg-blue-500"
                      style={{ width: `${skill.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold">
              About me
              <div className="mt-2 h-1 w-20 bg-blue-500" />
            </h2>
            
            <div className="space-y-6 text-gray-600">
              
              
              
              <p>
              "I am a dedicated and passionate Frontend Developer with a strong focus
               on crafting responsive, intuitive, and visually captivating user interfaces. 
              With expertise in modern frameworks like React,typescript and a deep understanding of
               HTML, CSS, and JavaScript, 

              </p>
              <p>
              I build dynamic web applications that combine performance with aesthetic appeal. 
              My approach emphasizes writing clean, maintainable, and efficient code while ensuring 
              seamless user experiences across devices. 
              </p>
        
                <p>
                By collaborating closely with designers and backend teams, I excel at bridging the gap
               between design and functionality, turning creative concepts into fully functional and 
               engaging digital solutions.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 rounded-full bg-blue-500 p-3 text-white shadow-lg transition-colors hover:bg-blue-600"
      >
        <ArrowUp className="h-6 w-6" />
      </button>
    </div>
  )
}