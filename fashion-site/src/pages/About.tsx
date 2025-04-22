import React from 'react';
import PageTransition from '../components/UI/PageTransition';
import Container from '../components/UI/Container';
import { Heart, Leaf, Globe } from 'lucide-react';

const About: React.FC = () => {
  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              The <span className="text-primary-600 dark:text-primary-400">Velva</span> Story
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Crafting timeless elegance through sustainable fashion and innovative design since 2020.
            </p>
          </div>
        </Container>
      </section>

      {/* Brand Story Section */}
      <section className="py-16 bg-white dark:bg-gray-900 transition-colors duration-300">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Our Vision</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                Born from a passion for sustainable luxury, Velva represents a new era in fashion where style meets responsibility. Our journey began with a simple vision: to create timeless pieces that celebrate individuality while respecting our planet.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Each Velva piece is thoughtfully designed and ethically crafted, combining contemporary aesthetics with sustainable practices. We believe that true luxury lies in knowing your choices make a positive impact.
              </p>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-8 shadow-inner">
              <div className="flex items-center mb-6">
                <Heart className="text-primary-500 mr-4" size={36} />
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Artisanal Craftsmanship</h3>
                  <p className="text-gray-600 dark:text-gray-300">Every piece is crafted with precision and care</p>
                </div>
              </div>
              <div className="flex items-center mb-6">
                <Leaf className="text-accent-500 mr-4" size={36} />
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Sustainable Materials</h3>
                  <p className="text-gray-600 dark:text-gray-300">Eco-friendly fabrics and responsible sourcing</p>
                </div>
              </div>
              <div className="flex items-center">
                <Globe className="text-secondary-500 mr-4" size={36} />
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Global Impact</h3>
                  <p className="text-gray-600 dark:text-gray-300">Supporting ethical fashion worldwide</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Collection Process */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Our Process</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              From concept to creation, every step is thoughtfully considered
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: '01', title: 'Design', description: 'Sketches come to life through innovative design thinking' },
              { step: '02', title: 'Sourcing', description: 'Carefully selected sustainable materials from trusted partners' },
              { step: '03', title: 'Crafting', description: 'Expert artisans bring designs to life with precision' }
            ].map((process, index) => (
              <div 
                key={index} 
                className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="text-5xl font-bold text-primary-200 dark:text-primary-800 mb-4">{process.step}</div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{process.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{process.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white dark:bg-gray-900 transition-colors duration-300">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Creative Minds</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Meet the visionaries behind our collections
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: 'Sofia Chen', role: 'Creative Director', image: 'https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
              { name: 'Marcus Rivera', role: 'Head of Design', image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
              { name: 'Emma Laurent', role: 'Sustainability Lead', image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
            ].map((member, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-64 object-cover object-center"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{member.name}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </PageTransition>
  );
};

export default About;