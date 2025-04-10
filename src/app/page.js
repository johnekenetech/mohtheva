'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { FaTasks, FaHeadset, FaProjectDiagram, FaHashtag, FaDatabase, FaUserTie } from 'react-icons/fa';
import Link from 'next/link';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [showImage, setShowImage] = useState(false);
  const [showText, setShowText] = useState(false);
  const [expandedCase, setExpandedCase] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      setShowImage(true);
      setTimeout(() => {
        setShowText(true);
      }, 500);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const caseStudies = [
    {
      id: 1,
      title: "Streamlining E-commerce Operations",
      brief: "Helped a growing e-commerce business reduce order processing time by 40% through efficient data management and automation.",
      full: "Working with a mid-sized e-commerce business, I implemented a comprehensive data management system that automated order processing and inventory tracking. By creating custom Excel macros and integrating them with their existing systems, we reduced manual data entry errors by 95% and cut processing time by 40%. The business was able to handle 50% more orders with the same staff, leading to significant cost savings and improved customer satisfaction.",
    },
    {
      id: 2,
      title: "Social Media Growth Strategy",
      brief: "Developed and executed a social media strategy that increased engagement by 200% for a startup in 3 months.",
      full: "For a tech startup looking to establish its online presence, I created a detailed social media strategy focusing on content creation, scheduling, and community engagement. By analyzing their target audience and creating tailored content, we achieved a 200% increase in engagement and a 150% growth in followers within three months. The strategy included daily content creation, community management, and performance tracking, which helped the startup establish a strong online presence and attract potential investors.",
    },
    {
      id: 3,
      title: "Project Management Success",
      brief: "Coordinated a complex project involving multiple stakeholders, delivering all milestones on time and under budget.",
      full: "In a challenging project involving multiple stakeholders across different time zones, I implemented an efficient project management system using tools like Trello and Slack. By establishing clear communication channels and regular progress updates, we maintained transparency and accountability throughout the project. Despite initial delays, we successfully delivered all project milestones on time and 15% under budget, earning praise from all stakeholders for our organization and efficiency.",
    },
  ];

  const toggleCaseStudy = (id) => {
    setExpandedCase(expandedCase === id ? null : id);
  };

  if (isLoading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
        <div className="text-4xl font-bold animate-pulse">
          <span>Mohthe</span>
          <span className="text-purple-600">VA</span>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="flex flex-col-reverse md:flex-row items-center justify-center p-8 gap-8 md:mt-10 md:mx-10 relative z-10 lg:mx-18">
        <div className={`md:w-1/2 text-center md:text-left transition-opacity duration-500 ${showText ? 'opacity-100' : 'opacity-0'}`}>
          <h1 className="text-3xl md:text-6xl lg:text-8xl">
            Hi, I'm <span className="text-purple-600">Motunde Opeyemi.</span>
          </h1>
          <p className="mt-1 md:mt-5 lg:text-[20px]">
            virtual assistant and data entry specialist
          </p>
        </div>
        <div className={`w-full md:w-1/2 flex justify-center transition-opacity duration-500 ${showImage ? 'opacity-100' : 'opacity-0'}`}>
          <div className="relative w-94 h-94 md:w-70 md:h-70 lg:w-[400px] lg:h-[400px] rounded-full overflow-hidden">
            <Image
              src="/moh.jpeg"
              alt="Mohthe VA"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 px-8 bg-gray-50">
        <h2 className="text-3xl md:text-4xl text-purple-600 text-center mb-12">Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Administrative Support */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="text-purple-600 text-4xl mb-4">
              <FaTasks />
            </div>
            <h3 className="text-xl font-semibold mb-3">Administrative Support</h3>
            <p className="text-gray-600">
              Streamline your business operations with comprehensive administrative support including email management, scheduling, document preparation, and more.
            </p>
          </div>

          {/* Customer Support */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="text-purple-600 text-4xl mb-4">
              <FaHeadset />
            </div>
            <h3 className="text-xl font-semibold mb-3">Customer Support</h3>
            <p className="text-gray-600">
              Enhance your customer service with professional support handling inquiries, managing tickets, and providing exceptional customer care.
            </p>
          </div>

          {/* Project Management */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="text-purple-600 text-4xl mb-4">
              <FaProjectDiagram />
            </div>
            <h3 className="text-xl font-semibold mb-3">Project Management</h3>
            <p className="text-gray-600">
              Keep your projects on track with efficient task management, progress tracking, and team coordination services.
            </p>
          </div>

          {/* Social Media Management */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="text-purple-600 text-4xl mb-4">
              <FaHashtag />
            </div>
            <h3 className="text-xl font-semibold mb-3">Social Media Management</h3>
            <p className="text-gray-600">
              Boost your online presence with strategic social media management, content creation, and engagement strategies.
            </p>
          </div>

          {/* Data & Research */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="text-purple-600 text-4xl mb-4">
              <FaDatabase />
            </div>
            <h3 className="text-xl font-semibold mb-3">Data & Research</h3>
            <p className="text-gray-600">
              Get accurate and insightful data analysis, market research, and information gathering to support your business decisions.
            </p>
          </div>

          {/* Personal Assistant */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="text-purple-600 text-4xl mb-4">
              <FaUserTie />
            </div>
            <h3 className="text-xl font-semibold mb-3">Personal Assistant</h3>
            <p className="text-gray-600">
              Enjoy personalized assistance with daily tasks, appointment scheduling, travel arrangements, and more.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-16 px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl text-purple-600 text-center mb-12">Case Studies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((caseStudy) => (
              <div key={caseStudy.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl  mb-4">{caseStudy.title}</h3>
                <p className="text-gray-600 mb-4">{caseStudy.brief}</p>
                {expandedCase === caseStudy.id ? (
                  <div className="space-y-4">
                    <p className="text-gray-600">{caseStudy.full}</p>
                    <button
                      onClick={() => toggleCaseStudy(caseStudy.id)}
                      className=" hover:text-purple-700"
                    >
                      Show Less
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => toggleCaseStudy(caseStudy.id)}
                    className=" hover:text-purple-700"
                  >
                    Read More
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-16 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl text-purple-600 mb-6">Ready to Get Started?</h2>
          <p className="text-lg mb-8">
            Let's work together to streamline your business operations and boost productivity.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-purple-600 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors border duration-300"
          >
            Contact Me
          </Link>
        </div>
      </section>
    </div>
  );
}
