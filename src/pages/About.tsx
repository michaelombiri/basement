import React from 'react';
import { CheckCircle, Users, Award, Target, Eye } from 'lucide-react';
import logo from './residential.JPG';
import woodWork from '../components/woodWork.png';

const About = () => {
  const team = [
    {
      name: 'Eng. Walter Odhiambo',
      position: 'Director & Founder',
      description: 'Established the company in 2005 with a vision to create a highly skilled construction firm.',
    },
  ];

  const certifications = [
    'National Construction Authority (NCA) Registration',
    'Tax Compliance Certificate',
    'Attorney General Registration',
    'Professional Training Certificates',
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-gray-900 to-amber-900 text-white">
        <div className="absolute inset-0 bg-black/40"></div>
        <div 
          className="relative bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=1600")'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-5xl font-bold mb-6">Basement Contractors Limited</h1>
              <p className="text-xl text-gray-200">
                Building strong relationships by understanding and meeting clients’ needs on time and within budget while maintaining high quality standards, conducting business honestly, maintaining clear communication, and honoring commitments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company History */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-9 text-lg text-gray-600">
                <p>
                  Basement Contractors Ltd is a trusted name in the Kenyan Construction Industry, delivering high-quality, reliable, 
                  and cost-effective building solutions. The company is Kenyan-based and was established in 2005 with its head Office in 
                  Kilifi County, Vipingo. It also has a network of offices in Mbita, Homabay County and Awasi, Kisumu County. 
                  We specialize in Residential, Commercial, and Industrial Construction projects, offering a full range of services
                  including design-build, project management, general contracting, and renovation that exceed expectations in quality,
                  safety, and sustainability.
                </p>
                <p>
                  Our dedicated team of professionals is passionate about building strong foundations — not just in concrete,
                  but in trust and long-lasting relationships with our clients.  We are committed to excellence, safety, and innovation,
                  ensuring each project is completed on time, within budget, and to the highest standards of quality. We pride ourselves
                  on building strong relationships with clients, suppliers, and stakeholders through transparency, integrity, and dedication. 
                  From initial design to project completion, we prioritize clear communication, timely delivery, and meticulous attention
                  to detail.
                </p>
                <p>
                  Whether you’re planning a new build, renovation, or expansion, Basement Contractors is your reliable partner
                  for turning ideas 
                  into solid realities. Explore our services, see our portfolio, and discover how we can build your future today
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src={woodWork} //"https://images.pexels.com/photos/3992949/pexels-photo-3992949.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Construction excellence"
                className="rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-6">
                <div className="bg-amber-100 p-3 rounded-full mr-4">
                  <Eye className="h-8 w-8 text-amber-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
              </div>
              <p className="text-lg text-gray-600">
               Basement Contractors aspires to be recognized as the leading construction company known for innovation, excellence,
                and sustainability—building lasting structures that shape the future and improve the communities, we serve.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-6">
                <div className="bg-amber-100 p-3 rounded-full mr-4">
                  <Target className="h-8 w-8 text-amber-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
              </div>
              <p className="text-lg text-gray-600">
                To deliver high-quality, innovative, and sustainable construction solutions that exceed client expectations.
                We are committed to safety, integrity, and efficiency in every project,
                fostering strong partnerships and contributing to the growth and development of the communities we serve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values & Principles */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Guiding Principles and </h2>
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Core Values</h3>
            <p className="text-4xl text-gray-600 max-w-3xl mx-auto">
             Building strong relationships by understanding and meeting clients’ needs on time and within 
              budget while maintaining high quality standards, conducting business honestly, maintaining clear 
              communication, and honoring commitments.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Quality",
              "Professionalism ",
              "Transparency & Integrity",
              "Safety",
              "Sustainability",
              "Customer Focus"
            ].map((value, index) => (
              <div key={index} className="flex items-start">
                <CheckCircle className="h-6 w-6 text-amber-600 mr-3 mt-1 flex-shrink-0" />
                <p className="text-gray-700">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Leadership</h2>
            <p className="text-xl text-gray-600">
              Basement Contractors consists of the Director Eng. Walter Odhiambo, field clerks, quality surveyor and qualified architectural draftsmen.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 text-center">
                <div className="w-24 h-24 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="h-12 w-12 text-amber-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-amber-600 font-semibold mb-4">{member.position}</p>
                <p className="text-gray-600">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Certifications & Registrations</h2>
            <p className="text-xl text-gray-600">
              Basement Contractors is fully registered and compliant with all regulatory requirements.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl text-center">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-amber-600" />
                </div>
                <p className="font-semibold text-gray-900">{cert}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Objectives */}
      <section className="py-20 bg-amber-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Objectives</h2>
            <p className="text-xl text-amber-100">
              Our commitment to excellence drives everything we do.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "To deliver our clients the standard of quality specified in the contract within the budget",
              "To meet all legal requirements",
              "To create and maintain culture of quality within the company",
              "To provide documentary evidence at all quality control measures",
              "To seek feedback from our clients"
            ].map((objective, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-amber-200 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-white">{objective}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
