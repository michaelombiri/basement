import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry! We will get back to you soon.');
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone Numbers',
      details: ['+254 722 118 336', '+254 737 340 174'],
      action: 'tel:+254722118336'
    },
    {
      icon: Mail,
      title: 'Address',
      details: ['info@basementcontractors.co.ke', 'P.O BOX 6, Mbita', 'P.O BOX 39, Awasi'],
      action: 'mailto:info@basementcontractors.co.ke'
    },
    {
      icon: MapPin,
      title: 'Office Locations',
      details: ['Vipingo, Kilifi County', 'Mbita, Homabay County', 'Awasi, Kisumu County'
],
      action: null
    },
    {
      icon: Clock,
      title: 'Working Hours',
      details: ['Mon - Fri: 8:00 AM - 6:00 PM', 'Sat: Closed', 'Sun: 8:00 AM - 4:00 PM'],
      action: null
    }
  ];

  const serviceAreas = [
    'Nairobi', 'Coast', 'Rift Valley', 'Eastern', 
    'Central', 'Western', 'North Eastern', 'Nyanza'
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-10 bg-gradient-to-br from-gray-900 to-amber-900 text-white">
        <div className="absolute inset-0 bg-black/40"></div>
        <div 
          className="relative bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1600")'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
              <p className="text-xl text-gray-200">
                Ready to start your construction project? Get in touch with us today for a free consultation and quote.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're here to help with your construction needs. Reach out to us through any of the channels below.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg text-center">
                <div className="flex justify-center mb-6">
                  <div className="bg-amber-100 p-4 rounded-full">
                    <info.icon className="h-8 w-8 text-amber-600" />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-4">{info.title}</h3>
                <div className="space-y-2">
                  {info.details.map((detail, detailIndex) => (
                    <div key={detailIndex}>
                      {info.action ? (
                        <a
                          href={info.action}
                          className="text-gray-600 hover:text-amber-600 transition-colors duration-200 block"
                        >
                          {detail}
                        </a>
                      ) : (
                        <p className="text-gray-600">{detail}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Send Us a Message</h3>
              <p className="text-lg text-gray-600 mb-8">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200"
                      placeholder="+254 xxx xxx xxx"
                    />
                  </div>
                  <div>
                    <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mb-2">
                      Project Type
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200"
                    >
                      <option value="">Select project type</option>
                      <option value="residential">Residential Construction</option>
                      <option value="commercial">Commercial Building</option>
                      <option value="infrastructure">Infrastructure Project</option>
                      <option value="renovation">Renovation/Extension</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200"
                    placeholder="Please describe your project requirements, timeline, budget range, and any other relevant details..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-amber-600 hover:bg-amber-700 text-white py-4 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center group"
                >
                  Send Message
                  <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
            
            {/* Service Areas */}
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Service Areas</h3>
              <p className="text-lg text-gray-600 mb-8">
                We provide construction services across all regions of Kenya. 
                No matter where your project is located, we have the expertise and resources to deliver exceptional results.
              </p>
              
              <div className="bg-gray-50 p-8 rounded-xl mb-8">
                <h4 className="text-xl font-bold text-gray-900 mb-6">Coverage Areas</h4>
                <div className="grid grid-cols-2 gap-4">
                  {serviceAreas.map((area, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-3 h-3 bg-amber-600 rounded-full mr-3"></div>
                      <span className="text-gray-700 font-medium">{area}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-amber-50 border border-amber-200 p-6 rounded-xl">
                <h4 className="text-lg font-bold text-amber-800 mb-3">Why Choose Us?</h4>
                <ul className="space-y-2 text-amber-700">
                  <li>• 20+ years of construction experience</li>
                  <li>• Licensed and certified professionals</li>
                  <li>• Quality materials and workmanship</li>
                  <li>• On-time and within-budget delivery</li>
                  <li>• Comprehensive project management</li>
                  <li>• Full insurance coverage</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-16 bg-amber-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Need Immediate Assistance?</h3>
          <p className="text-amber-100 mb-6">
            For urgent construction matters or emergency repairs, call us directly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+254722118336"
              className="bg-white text-amber-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-all duration-300"
            >
              Call: +254 722 118 336
            </a>
            <a
              href="tel:+254737340174"
              className="border-2 border-white text-white hover:bg-white hover:text-amber-600 px-6 py-3 rounded-lg font-semibold transition-all duration-300"
            >
              Alt: +254 737 340 174
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
