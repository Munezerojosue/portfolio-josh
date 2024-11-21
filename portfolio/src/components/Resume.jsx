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
           
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left Column */}
          <div>
            {/* Summary Section */}
            <h2 className="text-2xl font-bold mb-4">PROFILE</h2>
            <div className="border-l-4 border-blue-500 pl-4 mb-8">
              <h3 className="font-bold">Munezero josue</h3>
              <p className="mt-2 text-gray-600">
              Enthusiastic frontend engineer with a
strong passion for creating engaging
and efficient web applications. Skilled
in HTML, CSS, JavaScript, and React,
with a proven track record of
enhancing user experiences and
optimizing performance. Committed to
delivering impactful solutions that
blend design and functionality, while
staying updated on the latest UI/UX
principles. Eager to contribute to a
mission-driven organization focused
on innovation and user satisfaction.

              </p>
              <ul className="mt-4 text-gray-600">
                <li>📍 kigali, Rwanda</li>
                <li>📞 +250785739053</li>
                <li>✉️ josuemunezero2.com</li>
              </ul>
            </div>

            {/* Education Section */}
            <h2 className="text-2xl font-bold mb-4">Education</h2>
            <div className="border-l-4 border-blue-500 pl-4 mb-8">
              <h3 className="font-bold">High school</h3>
              <p className="text-gray-600">01/2012 - 01/2015
              </p>
              <p className="text-gray-500 italic">
              Acej/karama
              </p>
              <p className="mt-2 text-gray-600">
      
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-bold">KEY ACHIEVEMENTS</h3>
              <p className="text-gray-600">2022 - present</p>
              <p className="text-gray-500 italic">
              Kigali, Rwanda,Kabuga
              </p>
            <p className="mt-2 text-gray-600">
              Website Performance Boost=
Optimized website performance, boosting speed by 30% with code and asset
improvements
              </p>
              <p className="mt-2 text-gray-600">SEO Traffic Gro=
Enhanced SEO practices, achieving 20% increase in organic traffic for client's
website</p>
            <p className="mt-2 text-gray-600">Backend Integration Success=
Integrated APIs with front-end, improving data flow across applications using
Node.js and Express</p>
<p className="mt-2 text-gray-600">UI Development Efficie=
Implemented dynamic UI with React Hooks, reducing development time by 15%</p>
            </div>
          </div>

          {/* Right Column */}
          <div>
            {/* Professional Experience Section */}
            <h2 className="text-2xl font-bold mb-4">Professional Experience</h2>
            <div className="border-l-4 border-blue-500 pl-4 mb-8">
              <h3 className="font-bold">Frontend developer</h3>
              <p className=" ">at TeckVilla</p>
              <p className="text-gray-600">01/2022 - Present</p>
              <p className="text-gray-500 italic">Kigali, Rwanda,Kabuga</p>
              
              <ul className="mt-4 text-gray-600 list-disc ml-5">
                <li>Improved user engagement by 30% resulting from a redesign of the company's main
product interface</li>
                <li>Reduced page load time by 40%, enhancing user experience and increasing site
                traffic by creating reusable components.</li>
                <li>Developed interfaces for 15+ projects with an average team size of 7 developers
                ensuring effective collaboration.</li>
                <li>Managed front-end efforts for a platform handling 10,000+ users daily, coordinatin
                with cross-functional teams</li>
                <li>Utilized Git for version control and collaborated on codebases with team members to
                streamline the development workflow</li>
                <li>Enhanced customer satisfaction score by 25% by incorporating user feedback into
                iterative design cycles</li>
                <li>Enhanced website SEO, resulting in a 20% increase in organic traffic by optimizing
                metadata, URLs, and implementing the best SEO practices</li>
                <li>Boosted application performance by 50% by optimizing React.js components and
                streamlining frontend workflows</li>
              </ul>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-bold">SKILLS</h3>
              <p className="text-gray-600"></p>
              <p className="text-gray-500 italic"></p>
              <ul className="mt-4 text-gray-600 list-disc ml-5">
                <li>Html css javascript.</li>
                <li>MYSQL typescript.git github</li>
                <li>mongo mongodb python</li>
                <li>responsive design framework/libraries</li>
                <li>Figma bootstrap Node.js ES6</li>
                <li>Adobe photoshop usability testing.</li>
                <li>React.js.UI/UX design,Wireframing.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
