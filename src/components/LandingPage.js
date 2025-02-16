import Navbarfront from '../components/Navbarfront.js';
import Hero from '../components/Hero.js';
import Features from '../components/Features.js';
import Testimonial from '../components/Testimonial.js';
import CallToAction from '../components/CallToAction.js';
import Footer from '../components/Footer.js';

function LandingPage() {
  return (
    <>
      <Navbarfront />
      <Hero />
      <Features />
      <Testimonial />
      <CallToAction />
      <Footer />
    </>
  );
}

export default LandingPage;