import React from 'react';
import Navbar from '../../components/Navbar';
import Hero from './sections/Hero';
import Gallery from './sections/Gallery';
import Services from './sections/Services';
import Pricing from './sections/Pricing';
import Contact from './sections/Contact';
import Footer from '../../components/Footer';

const HomepageLayout = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Gallery />
      <Services />
      <Pricing />
      <Contact />
      <Footer />
    </>
  );
}

export default HomepageLayout;