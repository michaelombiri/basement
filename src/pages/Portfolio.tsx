import React, { useState } from 'react';
import { ExternalLink, Calendar, MapPin, DollarSign } from 'lucide-react';
import logo from './residential.JPG';

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Modern Residential Villa',
      category: 'residential',
      location: 'Eldoret, Uasin Gishu County',
      year: '2022',
      image: '../rsidential.png', //'https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Complete modern mansion with swimming pool and landscaping.'
    },
    {
      id: 2,
      title: 'SUTECO Office Building',
      category: 'commercial',
      location: 'Mbita, Homa Bay County',
      year: '2015-2016',
      image: 'https://images.pexels.com/photos/273209/pexels-photo-273209.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Modern office building for SUTECO cooperative society.'
    },
    {
      id: 3,
      title: 'Nyatambe Secondary School Classrooms',
      category: 'educational',
      location: 'Homa Bay County',
      year: '2016-2017',
      image: 'https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Two modern classrooms with modern facilities.'
    },
    {
      id: 4,
      title: 'Holiday Inn Rusinga',
      category: 'commercial',
      location: 'Rusinga Island',
      year: '2007-2008',
      image: 'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Complete hotel construction with modern amenities.'
    },
    {
      id: 5,
      title: 'Amazon Guest House',
      category: 'commercial',
      location: 'Mbita',
      year: '2008-2010',
      image: 'https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Modern guest house with full hospitality facilities.'
    },
    {
      id: 6,
      title: 'Hope School Dormitory',
      category: 'educational',
      location: 'Mbita Sub County',
      year: '2017',
      image: 'https://images.pexels.com/photos/1462630/pexels-photo-1462630.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Modern dormitory facilities for students.'
    },
    {
      id: 7,
      title: 'Kosome Bridge Construction',
      category: 'infrastructure',
      location: 'Buoye Kolwa East',
      year: '2020',
      image: 'https://images.pexels.com/photos/1117452/pexels-photo-1117452.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Bridge construction project improving community connectivity.'
    },
    {
      id: 8,
      title: 'Three Storey Commercial Building',
      category: 'commercial',
      location: 'Awasi, Kisumu County',
      year: '2013-Present',
      image: 'https://images.pexels.com/photos/3992949/pexels-photo-3992949.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Multi-story commercial complex ongoing construction.'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'residential', name: 'Residential' },
    { id: 'commercial', name: 'Commercial' },
    { id: 'educational', name: 'Educational' },
    { id: 'infrastructure', name: 'Infrastructure' }
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-gray-900 to-amber-900 text-white">
        <div className="absolute inset-0 bg-black/40"></div>
        <div 
          className="relative bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("https://images.pexels.com/photos/3992949/pexels-photo-3992949.jpeg?auto=compress&cs=tinysrgb&w=1600")'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-5xl font-bold mb-6">Our Portfolio</h1>
              <p className="text-xl text-gray-200">
                Explore our completed projects across Kenya, showcasing our expertise in residential, commercial, educational, and infrastructure construction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-amber-600 mb-2">200+</div>
              <div className="text-gray-600 font-medium">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-amber-600 mb-2">20+</div>
              <div className="text-gray-600 font-medium">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-amber-600 mb-2">8</div>
              <div className="text-gray-600 font-medium">Regions Covered</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-amber-600 mb-2">100%</div>
              <div className="text-gray-600 font-medium">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Filter & Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              From residential homes to large commercial and infrastructure projects, our portfolio demonstrates our commitment to excellence.
            </p>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 {
                    selectedCategory === category.id
                      ? 'bg-amber-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-amber-100 hover:text-amber-700'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div key={project.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <MapPin className="h-4 w-4 mr-2 text-amber-600" />
                      {project.location}
                    </div>
                    
                    <div className="flex items-center text-sm text-gray-600">
                      <Calendar className="h-4 w-4 mr-2 text-amber-600" />
                      {project.year}
                    </div>
                  </div>
                  
                  <button className="w-full bg-amber-600 hover:bg-amber-700 text-white py-2 px-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center group">
                    View Details
                    <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Types */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Project Expertise</h2>
            <p className="text-xl text-gray-600">
              Our diverse portfolio spans multiple construction sectors.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Residential Buildings', count: '80+', description: 'Homes, mansions, and residential complexes' },
              { title: 'Commercial Projects', count: '45+', description: 'Offices, hotels, and retail spaces' },
              { title: 'Educational Facilities', count: '30+', description: 'Schools, classrooms, and dormitories' },
              { title: 'Infrastructure Works', count: '25+', description: 'Roads, bridges, and civil engineering' }
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="text-3xl font-bold text-amber-600 mb-2">{item.count}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-amber-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Start Your Next Project With Us
          </h2>
          <p className="text-xl text-amber-100 mb-8 max-w-2xl mx-auto">
            Ready to add your project to our growing portfolio? Contact us today for a consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-amber-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300"
            >
              Start Your Project
            </a>
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

export default Portfolio;
