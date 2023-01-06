import React from 'react';
import Navbar from '../../components/bars/navbar/navbar.component';
import Hero from './sections/hero/hero.component';
import Gallery from './sections/gallery/gallery.component';
import Services from './sections/services/services.component';
import Pricing from './sections/pricing/pricing.component';
import Contact from './sections/contact/contact.component';
import Policy from './sections/policy/policy.component';
import FAQ from './sections/faq/faq.component';
import Footer from '../../components/footer/footer.component';

// TODO: Policy, Pricing (Cards in column), Contact (Form), Gallery (albums - vertical swiper w/ "Play Component"), Navbar (Fix logo & menu spacing), Footer
export const HomepageLayout = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Gallery />
      <Services />
      <Pricing />
      <Contact />
      <Policy />
      <FAQ />
      <Footer />
    </>
  );
}