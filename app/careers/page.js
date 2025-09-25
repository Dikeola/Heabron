'use client';

import Link from 'next/link';
import { FaArrowRight, FaLightbulb, FaHandsHelping, FaUsers, FaChartLine, FaBalanceScale, FaSearch, FaFilter, FaMapMarkerAlt, FaClock, FaBriefcase, FaMicrophone, FaEye } from 'react-icons/fa';
import { useState } from 'react';

export default function CareersPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Job Category');
  const [selectedType, setSelectedType] = useState('All Job Type');
  const [selectedLocation, setSelectedLocation] = useState('All Job Location');

  const jobs = [
    {
      id: 1,
      title: 'Social Media Manager',
      category: 'Social Media Manager',
      type: 'Full Time',
      location: 'Ibadan',
      description: 'Manage social media presence and digital marketing strategies'
    },
    {
      id: 2,
      title: 'Field Operations Manager',
      category: 'Commercialization Manager',
      type: 'Full Time',
      location: 'Ibadan',
      description: 'Oversee field operations and farmer engagement programs'
    },
    {
      id: 3,
      title: 'Commercialization Manager',
      category: 'Commercialization Manager',
      type: 'Full Time',
      location: 'Ibadan',
      description: 'Drive product commercialization and market expansion'
    },
    {
      id: 4,
      title: 'Product Manager',
      category: 'Product Manager',
      type: 'Full Time',
      location: 'Ibadan',
      description: 'Lead product development and strategy initiatives'
    },
    {
      id: 5,
      title: 'Data Scientist',
      category: 'Data Scientist',
      type: 'Full Time',
      location: 'Ibadan',
      description: 'Analyze agricultural data and build predictive models'
    },
    {
      id: 6,
      title: 'Software Engineer',
      category: 'Software Engineer',
      type: 'Full Time',
      location: 'Ibadan',
      description: 'Develop and maintain agritech software solutions'
    }
  ];

  const filteredJobs = jobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All Job Category' || job.category === selectedCategory;
    const matchesType = selectedType === 'All Job Type' || job.type === selectedType;
    const matchesLocation = selectedLocation === 'All Job Location' || job.location === selectedLocation;

    return matchesSearch && matchesCategory && matchesType && matchesLocation;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-800 via-green-700 to-green-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Join Our Team and Transform Agriculture
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
            Be part of a dynamic team revolutionizing agritech and empowering farmers across Africa
          </p>
          <Link
            href="#jobs"
            className="bg-white text-green-800 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl inline-flex items-center"
          >
            View Open Positions
            <FaArrowRight className="ml-2" />
          </Link>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Company Overview</h2>
            <div className="bg-gray-50 p-8 rounded-lg">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                At Heabron, we are revolutionizing the agritech industry by empowering farmers with advanced technology and innovative solutions. Our mission is to create a sustainable, efficient, and equitable agricultural ecosystem. If you are passionate about making a difference and want to be part of a dynamic, forward-thinking team, Heabron is the place for you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Work at Heabron */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Work at Heabron?</h2>
              <p className="text-xl text-gray-600">
                Discover what makes Heabron a great place to work
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FaLightbulb className="text-green-600 text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Innovative Environment</h3>
                <p className="text-gray-600 text-center">
                  At Heabron, innovation is at the core of what we do. We leverage cutting-edge technologies to solve real-world problems in agriculture.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FaHandsHelping className="text-blue-600 text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Impactful Work</h3>
                <p className="text-gray-600 text-center">
                  Your work at Heabron will directly contribute to improving the lives of farmers and transforming the agricultural landscape.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FaUsers className="text-purple-600 text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Collaborative Culture</h3>
                <p className="text-gray-600 text-center">
                  We believe that the best ideas come from collaboration. Our team-oriented culture fosters open communication and mutual respect.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FaChartLine className="text-yellow-600 text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Professional Growth</h3>
                <p className="text-gray-600 text-center">
                  Heabron is committed to the continuous development of our employees. We offer various opportunities for professional growth.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FaBalanceScale className="text-indigo-600 text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Work-Life Balance</h3>
                <p className="text-gray-600 text-center">
                  We understand the importance of work-life balance and strive to create a flexible and supportive work environment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recruitment Process */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Recruitment Process</h2>
              <p className="text-xl text-gray-600">
                You can join Heabron in 4 easy steps:
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-green-600 font-bold text-xl">1</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Apply</h3>
                <p className="text-gray-600 text-sm">Apply for any of our open positions or simply send us your CV for review.</p>
              </div>

              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-600 font-bold text-xl">2</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Undergo Assessment</h3>
                <p className="text-gray-600 text-sm">Once your application is received, we will send you a unique link to take our online test.</p>
              </div>

              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-purple-600 font-bold text-xl">3</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Get Interviewed</h3>
                <p className="text-gray-600 text-sm">You will be invited for a chat with a Board member of our leadership team, to get to know you better.</p>
              </div>

              <div className="text-center">
                <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-yellow-600 font-bold text-xl">4</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Get an Offer Letter</h3>
                <p className="text-gray-600 text-sm">We will reach out with an offer if you are selected!</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section id="jobs" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">

            {/* Search and Filters */}
            <div className="bg-white p-6 rounded-lg shadow-md mb-8">
              <div className="grid md:grid-cols-4 gap-4">
                <div className="relative">
                  <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search"
                    className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>

                <div className="relative">
                  <select
                    className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200 appearance-none cursor-pointer hover:border-gray-300 text-gray-900"
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                  >
                    <option value="All Job Category">All Job Category</option>
                    <option value="Commercialization Manager">Commercialization Manager</option>
                    <option value="Data Scientist">Data Scientist</option>
                    <option value="Product Manager">Product Manager</option>
                    <option value="Social Media Manager">Social Media Manager</option>
                    <option value="Software Engineer">Software Engineer</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>

                <div className="relative">
                  <select
                    className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200 appearance-none cursor-pointer hover:border-gray-300 text-gray-900"
                    value={selectedType}
                    onChange={(e) => setSelectedType(e.target.value)}
                  >
                    <option value="All Job Type">All Job Type</option>
                    <option value="Full Time">Full Time</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>

                <div className="relative">
                  <select
                    className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200 appearance-none cursor-pointer hover:border-gray-300 text-gray-900"
                    value={selectedLocation}
                    onChange={(e) => setSelectedLocation(e.target.value)}
                  >
                    <option value="All Job Location">All Job Location</option>
                    <option value="Ibadan">Ibadan</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Job Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredJobs.map((job) => (
                <div key={job.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{job.title}</h3>
                      <p className="text-gray-600 mb-2">{job.category}</p>
                    </div>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                      {job.type}
                    </span>
                  </div>

                  <div className="flex items-center text-gray-500 mb-4">
                    <FaMapMarkerAlt className="mr-2" />
                    <span>{job.location}</span>
                  </div>

                  <p className="text-gray-600 mb-4">{job.description}</p>

                  <Link
                    href={`/careers/${job.id}`}
                    className="inline-flex items-center text-green-600 hover:text-green-700 font-semibold"
                  >
                    More Details
                    <FaArrowRight className="ml-2" />
                  </Link>
                </div>
              ))}
            </div>

            {filteredJobs.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-600 text-lg">No jobs found matching your criteria.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* How to Apply */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">How to Apply</h2>
            <div className="bg-gray-50 p-8 rounded-lg">
              <p className="text-lg text-gray-700 mb-6">
                If you are interested in joining our team, please send your resume and a cover letter to{' '}
                <a href="mailto:careers@heabron.com" className="text-green-600 hover:underline font-semibold">
                  careers@heabron.com
                </a>
                . In your cover letter, please explain why you are passionate about working at Heabron and how your skills and experience align with our mission.
              </p>
              <p className="text-lg text-gray-700">
                We look forward to hearing from you and exploring the possibility of working together to drive the future of agriculture.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Equal Opportunity Statement */}
      <section className="py-20 bg-green-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Equal Opportunity Employer</h2>
            <p className="text-lg opacity-90 mb-4">
              Heabron is an equal opportunity employer. We celebrate diversity and are committed to creating an inclusive environment for all employees.
            </p>
            <p className="text-lg opacity-90">
              All qualified applicants will receive consideration for employment without regard to race, color, religion, gender, gender identity or expression, sexual orientation, national origin, genetics, disability, age, or veteran status.
            </p>
            <div className="mt-8">
              <p className="text-2xl font-bold">Join us at Heabron</p>
              <p className="text-lg opacity-90">
                and be part of a team that is making a significant impact on the world. Together, we can create a brighter, more sustainable future for agriculture.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
