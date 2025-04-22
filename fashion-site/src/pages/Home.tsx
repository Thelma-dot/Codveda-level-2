import React from 'react';
import PageTransition from '../components/UI/PageTransition';
import Container from '../components/UI/Container';
import Button from '../components/UI/Button';
import { ArrowRight, Star, Heart, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="py-24 sm:py-32 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              Welcome to <span className="text-accent-600 dark:text-accent-400">Velva</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Discover timeless elegance and contemporary fashion. Where style meets sophistication.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/about">
                <Button size="lg" variant="primary" icon={<ArrowRight size={20} />} iconPosition="right">
                  About Us
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline">
                  Book Styling
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Featured Collection */}
      <section className="py-16 bg-white dark:bg-gray-900 transition-colors duration-300">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Latest Collection
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Curated pieces that define modern luxury
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                image: 'https://images.pexels.com/photos/2043590/pexels-photo-2043590.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
                title: 'Summer Elegance',
                description: 'Light and breezy pieces for the perfect summer look'
              },
              {
                image: 'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
                title: 'Urban Classic',
                description: 'Timeless pieces for the modern urbanite'
              },
              {
                image: 'https://images.pexels.com/photos/2229490/pexels-photo-2229490.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
                title: 'Evening Glamour',
                description: 'Statement pieces for special occasions'
              }
            ].map((collection, index) => (
              <div key={index} className="group relative overflow-hidden rounded-lg">
                <img 
                  src={collection.image} 
                  alt={collection.title}
                  className="w-full h-96 object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{collection.title}</h3>
                    <p className="text-gray-200">{collection.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-300 mb-6 mx-auto">
                <Star size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 text-center">Premium Quality</h3>
              <p className="text-gray-600 dark:text-gray-300 text-center">
                Carefully selected materials and expert craftsmanship in every piece
              </p>
            </div>

            <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-secondary-100 dark:bg-secondary-900 text-secondary-600 dark:text-secondary-300 mb-6 mx-auto">
                <Heart size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 text-center">Sustainable Fashion</h3>
              <p className="text-gray-600 dark:text-gray-300 text-center">
                Eco-friendly practices and responsible sourcing
              </p>
            </div>

            <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-accent-100 dark:bg-accent-900 text-accent-600 dark:text-accent-300 mb-6 mx-auto">
                <Sparkles size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 text-center">Personal Styling</h3>
              <p className="text-gray-600 dark:text-gray-300 text-center">
                Expert fashion advice tailored to your personal style
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-accent-500 to-primary-500 text-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">
              Experience Luxury Fashion
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Join our exclusive community and be the first to know about new collections and special offers.
            </p>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Join Now
              </Button>
            </Link>
          </div>
        </Container>
      </section>
    </PageTransition>
  );
};

export default Home;