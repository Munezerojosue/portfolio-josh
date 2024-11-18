import React from 'react';

const Resume = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10">
      {/* Container */}
      <div className="mx-auto w-full max-w-6xl bg-white p-10 shadow-lg">
        {/* Title */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold">Resume</h1>
          <p className="mt-2 text-gray-500">
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left Column */}
          <div>
            {/* Summary Section */}
            <h2 className="text-2xl font-bold mb-4">Summary</h2>
            <div className="border-l-4 border-blue-500 pl-4 mb-8">
              <h3 className="font-bold">BRANDON JOHNSON</h3>
              <p className="italic">
                Innovative and deadline-driven Graphic Designer with 3+ years of experience
                designing and developing user-centered digital/print marketing material.
              </p>
              <ul className="mt-4 text-gray-600">
                <li>📍 Portland per 127, Orlando, FL</li>
                <li>📞 (123) 456-7891</li>
                <li>✉️ alice.barkley@example.com</li>
              </ul>
            </div>

            {/* Education Section */}
            <h2 className="text-2xl font-bold mb-4">Education</h2>
            <div className="border-l-4 border-blue-500 pl-4 mb-8">
              <h3 className="font-bold">MASTER OF FINE ARTS & GRAPHIC DESIGN</h3>
              <p className="text-gray-600">2015 - 2016</p>
              <p className="text-gray-500 italic">
                Rochester Institute of Technology, Rochester, NY
              </p>
              <p className="mt-2 text-gray-600">
                Qui deserunt veniam. Et sed aliquam labore tempore sed quisquam iusto autem sit.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-bold">BACHELOR OF FINE ARTS & GRAPHIC DESIGN</h3>
              <p className="text-gray-600">2010 - 2014</p>
              <p className="text-gray-500 italic">
                Rochester Institute of Technology, Rochester, NY
              </p>
              <p className="mt-2 text-gray-600">
                Quia nobis sequi est occaecati aut. Repudiandae et justo quae reiciendis et quis.
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div>
            {/* Professional Experience Section */}
            <h2 className="text-2xl font-bold mb-4">Professional Experience</h2>
            <div className="border-l-4 border-blue-500 pl-4 mb-8">
              <h3 className="font-bold">SENIOR GRAPHIC DESIGN SPECIALIST</h3>
              <p className="text-gray-600">2019 - Present</p>
              <p className="text-gray-500 italic">Experion, New York, NY</p>
              <ul className="mt-4 text-gray-600 list-disc ml-5">
                <li>Lead in the design, development, and implementation of marketing materials.</li>
                <li>Delegate tasks to team members and provide counsel on projects.</li>
                <li>Supervise the assessment of all graphic materials for quality and accuracy.</li>
                <li>Oversee the efficient use of production budgets ranging from $2,000 - $25,000.</li>
              </ul>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-bold">GRAPHIC DESIGN SPECIALIST</h3>
              <p className="text-gray-600">2017 - 2018</p>
              <p className="text-gray-500 italic">Stepping Stone Advertising, New York, NY</p>
              <ul className="mt-4 text-gray-600 list-disc ml-5">
                <li>Developed numerous marketing programs including brochures and infographics.</li>
                <li>Managed up to 5 projects or tasks simultaneously under pressure.</li>
                <li>Consulted with clients on graphic design strategies.</li>
                <li>Created 4+ design presentations and proposals for account managers.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
