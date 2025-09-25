import { FaPhone, FaGlobe, FaClock, FaMapMarkerAlt, FaEnvelope, FaPaperPlane } from 'react-icons/fa';
import Button from '@/components/Button';

export default function ContactPage() {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-green-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl max-w-2xl mx-auto">
            We would love to speak with you. Feel free to reach out using the below details.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Get In Touch</h2>
            <p className="text-gray-600 mb-8">Fill out the form below and we will contact you as soon as possible!</p>
            
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent placeholder-gray-500"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Your email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent placeholder-gray-500"
                  placeholder="john@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                <input 
                  type="tel" 
                  id="phone" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent placeholder-gray-500"
                  placeholder="+234 812 345 6789"
                />
              </div>
              
              <div>
                <label htmlFor="service" className="block text-sm font-semibold text-gray-800 mb-2">Service Type</label>
                <div className="relative">
                  <select
                    id="service"
                    className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200 appearance-none cursor-pointer hover:border-gray-300 text-gray-900"
                    style={{ color: '#111827' }}
                  >
                    <option value="">Select a service</option>
                    <option value="cooperative">Join a Cooperative</option>
                    <option value="supplier">Farm Input Supplier</option>
                    <option value="produce">Buy Farm Produce</option>
                    <option value="private">Private session with Heabron</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea 
                  id="message" 
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent placeholder-gray-500"
                  placeholder="Your message..."
                ></textarea>
              </div>
              
              <Button type="submit" className="w-full py-3 flex items-center justify-center space-x-2">
                <FaPaperPlane />
                <span>Send Message</span>
              </Button>
            </form>
          </div>
          
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    <FaPhone className="text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Phone</h4>
                    <a href="tel:+2348123726444" className="text-gray-600 hover:text-green-600 cursor-pointer">+234 812 372 6444</a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    <FaGlobe className="text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Website</h4>
                    <a href="https://heabron.com" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:underline cursor-pointer">
                      https://heabron.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    <FaClock className="text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Hours</h4>
                    <p className="text-gray-600">Mon-Fri 9:00AM - 5:00PM</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Visit Us</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    <FaMapMarkerAlt className="text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Head Office</h4>
                    <p className="text-gray-600">14, Adenjuga Street, Kongi Layout,<br />Old Bodija Ibadan,<br />Oyo State, Nigeria</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    <FaMapMarkerAlt className="text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Branch Office</h4>
                    <p className="text-gray-600">2, Adefeyisan Street,<br />Olowaye Estate, Olowoira,<br />Lagos State, Nigeria</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Join Our Newsletter</h3>
              <p className="text-gray-600 mb-4">Subscribe to receive our latest updates in your inbox!</p>
              
              <form className="flex space-x-2">
                <input 
                  type="email" 
                  placeholder="Email" 
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent placeholder-gray-500"
                  required
                />
                <Button type="submit" className="whitespace-nowrap">
                  Sign Up
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
