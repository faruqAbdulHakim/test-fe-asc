import Brands from '@/components/Brands/Brands';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import { Box, Spacer } from '@chakra-ui/react';
import IntroductionSection from '@/components/IntroductionSection';
import StatsSection from '@/components/StatsSection';
import PropertySection from '@/components/PropertySection';
import Footer from '@/components/Footer';
import ReviewSection from '@/components/ReviewSection';
import VideoSection from '@/components/VideoSection';

const Home = () => {
  return (
    <>
      <Header />
      <Box as="main">
        <Hero />
        <Brands />
        <IntroductionSection />
        <StatsSection />
        <VideoSection />
        <Spacer h="120px" />
        <PropertySection />
        <Spacer h="80px" />
        <ReviewSection />
      </Box>
      <Footer />
    </>
  );
};

export default Home;
