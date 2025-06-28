
import { useState, useEffect } from 'react';
import { HeroSection } from '@/components/ui/hero-section';
import FeatureSection from '@/components/FeatureSection';
import Footer from '@/components/Footer';

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className={`min-h-screen transition-opacity duration-1000 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-black dark:via-gray-900/20 dark:to-black ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <HeroSection />
      <FeatureSection />
      <Footer />
    </div>
  );
};

export default Index;
