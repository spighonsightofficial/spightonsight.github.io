import React from 'react';
import HomeSEO from './HomeSEO';
import Navbar from '../../components/Navbar';
import Hero from './sections/Hero';
import Gallery from './sections/Gallery';
import Services from './sections/Services';
import Pricing from './sections/Pricing';
import Contact from './sections/Contact';
import FAQ from './sections/FAQ';
import Policy from './sections/Policy';
import Footer from '../../components/Footer';

// export const Head = () => (<HomeSEO />)
export const HomepageLayout = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Gallery />
      <Services />
      <Pricing />
      <Contact />
      <FAQ />
      <Policy />
      <Footer />
    </>
  );
}

