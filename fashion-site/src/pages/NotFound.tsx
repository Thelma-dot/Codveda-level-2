import React from 'react';
import PageTransition from '../components/UI/PageTransition';
import Container from '../components/UI/Container';
import Button from '../components/UI/Button';
import { Home } from 'lucide-react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
  return (
    <PageTransition>
      <section className="min-h-[calc(100vh-16rem)] flex items-center justify-center bg-white dark:bg-gray-900 transition-colors duration-300 py-16">
        <Container>
          <div className="text-center">
            <h1 className="text-9xl font-bold text-primary-600 dark:text-primary-400">404</h1>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-4 mb-6">Page Not Found</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-lg mx-auto">
              The page you're looking for doesn't exist or has been moved.
            </p>
            <Link to="/">
              <Button variant="primary" icon={<Home size={18} />}>
                Back to Home
              </Button>
            </Link>
          </div>
        </Container>
      </section>
    </PageTransition>
  );
};

export default NotFound;