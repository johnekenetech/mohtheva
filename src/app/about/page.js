'use client';
import Image from 'next/image';

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 px-8 bg-purple-50">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl text-center mb-8">
            <span className="text-purple-600">About</span>
          </h1>
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2">
              <div className="relative w-full h-[400px] rounded-lg overflow-hidden">
                <Image
                  src="/moh.jpeg"
                  alt="Motunde Opeyemi"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-2xl text-purple-600 mb-4">Professional Virtual Assistant</h2>
              <p className="text-gray-600 mb-4">
                With over 5 years of experience in virtual assistance and data management, I have helped numerous businesses streamline their operations and achieve their goals. My expertise spans across various industries, from e-commerce to tech startups.
              </p>
              <p className="text-gray-600 mb-4">
                I specialize in providing comprehensive administrative support, customer service, and project management solutions tailored to each clients unique needs.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h3 className="font-semibold text-purple-600">5+ Years</h3>
                  <p className="text-gray-600">Experience</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h3 className="font-semibold text-purple-600">50+</h3>
                  <p className="text-gray-600">Projects Completed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl text-purple-600 text-center mb-12">Skills & Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl text-purple-600 mb-3">Administrative Support</h3>
              <ul className="list-disc list-inside text-gray-600">
                <li>Email Management</li>
                <li>Calendar Management</li>
                <li>Document Preparation</li>
                <li>Data Entry</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl text-purple-600 mb-3">Project Management</h3>
              <ul className="list-disc list-inside text-gray-600">
                <li>Task Coordination</li>
                <li>Team Collaboration</li>
                <li>Progress Tracking</li>
                <li>Resource Management</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl text-purple-600 mb-3">Digital Tools</h3>
              <ul className="list-disc list-inside text-gray-600">
                <li>Microsoft Office Suite</li>
                <li>Google Workspace</li>
                <li>Project Management Tools</li>
                <li>Social Media Platforms</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl text-purple-600 text-center mb-12">My Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl text-purple-600 mb-4">✓</div>
              <h3 className="text-xl text-purple-600 mb-2">Professionalism</h3>
              <p className="text-gray-600">Maintaining the highest standards of work ethic and integrity in all projects.</p>
            </div>
            <div className="text-center">
              <div className="text-4xl text-purple-600 mb-4">⚡</div>
              <h3 className="text-xl text-purple-600 mb-2">Efficiency</h3>
              <p className="text-gray-600">Delivering high-quality results in a timely and organized manner.</p>
            </div>
            <div className="text-center">
              <div className="text-4xl text-purple-600 mb-4">❤️</div>
              <h3 className="text-xl text-purple-600 mb-2">Client Focus</h3>
              <p className="text-gray-600">Prioritizing client needs and building long-term relationships.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 