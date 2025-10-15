import React from 'react';
import { Home, Building, Wrench, Droplets, Loader as Road, Shield } from 'lucide-react';
import residential from './residential.JPG';
import eldoretMansionatte from '../components/eldoretMansionatte.png';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      icon: Home,
      title: 'Residential Construction',
      description: 'Complete home construction from foundation to finishing, including modern mansions, bungalows, and apartment buildings.',
      features: ['Foundation work', 'Masonry construction', 'Roofing systems', 'Interior finishing', 'Plumbing & electrical']
    },
    {
      icon: Building,
      title: 'Commercial Buildings',
      description: 'Office buildings, shopping centers, warehouses, and other commercial structures built to the highest standards.',
      features: ['Office complexes', 'Retail spaces', 'Industrial buildings', 'Educational facilities', 'Healthcare facilities']
    },
    {
      icon: Road,
      title: 'Infrastructure Development',
      description: 'Roads, bridges, drainage systems, and other civil engineering projects that build communities.',
      features: ['Road construction', 'Bridge building', 'Drainage systems', 'Stone pitching', 'Gabion works']
    },
    {
      icon: Droplets,
      title: 'Water & Dam Construction',
      description: 'Water infrastructure including dams, reservoirs, and water treatment facilities.',
      features: ['Dam construction', 'Water reservoirs', 'Irrigation systems', 'Water treatment plants', 'Pipework installation']
    },
    {
      icon: Wrench,
      title: 'Renovation & Extension',
      description: 'Building renovations, extensions, and modernization of existing structures.',
      features: ['Home extensions', 'Office renovations', 'Building modernization', 'Structural repairs', 'Interior remodeling']
    },
    {
      icon: Shield,
      title: 'Project Management',
      description: 'Comprehensive project management services ensuring timely and budget-conscious delivery.',
      features: ['Project planning', 'Quality control', 'Safety management', 'Budget management', 'Timeline coordination']
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Consultation',
      description: 'Initial meeting to understand your project requirements and vision.'
    },
    {
      step: '02',
      title: 'Planning & Design',
      description: 'Detailed planning, architectural design, and project specifications.'
    },
    {
      step: '03',
      title: 'Approval & Permits',
      description: 'Obtaining necessary permits and regulatory approvals.'
    },
    {
      step: '04',
      title: 'Construction',
      description: 'Professional execution with quality materials and skilled craftsmen.'
    },
    {
      step: '05',
      title: 'Quality Assurance',
      description: 'Rigorous quality checks and client satisfaction verification.'
    },
    {
      step: '06',
      title: 'Project Handover',
      description: 'Final inspection, documentation, and project delivery.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-10 bg-gradient-to-br from-gray-900 to-amber-900 text-white">
        <div className="absolute inset-0 bg-black/40"></div>
        <div 
          className="relative bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("https://images.pexels.com/photos/1117452/pexels-photo-1117452.jpeg?auto=compress&cs=tinysrgb&w=1600")'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-5xl font-bold mb-6">Our Services</h1>
              <p className="text-xl text-gray-200">
                Basement Contractors is majorly dealing in construction of houses, dams, roads (stone pitching, gabions and drainages) and supplies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What We Do</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From residential homes to large infrastructure projects, we deliver exceptional construction services across Kenya.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="bg-amber-100 p-3 rounded-full mr-4">
                      <service.icon className="h-8 w-8 text-amber-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-amber-600 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a systematic approach to ensure every project is delivered on time, within budget, and to the highest quality standards.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((item, index) => (
              <div key={index} className="relative bg-white p-8 rounded-xl shadow-lg">
                <div className="text-4xl font-bold text-amber-600 mb-4">{item.step}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
                
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <div className="w-8 h-0.5 bg-amber-600"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage Area */}
      <section className="py-5 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Nationwide Coverage</h2>
              <p className="text-lg text-gray-600 mb-8">
                Although the company is based in Nyanza, we operate across all regions of Kenya. 
                We are always available with necessary skills to meet any requirement in the field of general construction.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                {['Nairobi', 'Coast', 'Rift Valley', 'Eastern', 'Central', 'Western', 'North Eastern', 'Nyanza'].map((region, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-3 h-3 bg-amber-600 rounded-full mr-3"></div>
                    <span className="text-gray-700 font-medium">{region}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <img
                src={eldoretMansionatte}//"https://images.pexels.com/photos/273209/pexels-photo-273209.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Kenya construction projects"
                className="rounded-xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-amber-600 text-white p-6 rounded-xl shadow-xl">
                <div className="text-2xl font-bold">All 8</div>
                <div className="text-amber-100">Regions Covered</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-amber-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Start Your Construction Project?
          </h2>
          <p className="text-xl text-amber-100 mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and detailed quote for your construction needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-amber-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300"
            >
              Get a Quote
            </Link>
            <a
              href="tel:+254722118336"
              className="border-2 border-white text-white hover:bg-white hover:text-amber-600 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300"
            >
              Call: +254 722 118 336
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;