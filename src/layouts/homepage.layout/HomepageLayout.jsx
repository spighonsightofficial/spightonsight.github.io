import React from 'react';
import Navbar from '../../components/Navbar';
import Hero from './sections/Hero';
import Gallery from './sections/Gallery';
import Contact from './sections/Contact';
import Footer from '../../components/Footer';

const HomepageLayout = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Gallery />
      <Contact />
      <Footer />
    </>
  );
}

export default HomepageLayout;