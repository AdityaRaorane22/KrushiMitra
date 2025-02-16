import { Link } from 'react-router-dom';

import farm from '../assets/images/farm.png'

const Testimonial = () => {
  return (
    <section id='project-description'>
  <div className='max-w-6xl px-5 mx-auto mt-32 flex flex-col md:flex-row items-center mb-10'>
    {/* Image Container */}
    <div className='md:w-1/2 flex justify-center md:justify-start'>
      <img src={farm} alt='KrushiMitra' className='w-full max-w-sm rounded-lg shadow-lg' />
    </div>

    {/* Text Content */}
    <div className='md:w-1/2 mt-10 md:mt-0 md:ml-10'>
      <h2 className='text-4xl font-bold mb-4'>
        KrushiMitra: A Marketplace for Modern Contract-Based Farming
      </h2>
      <p className='text-lg text-darkGrayishBlue'>
        KrushiMitra provides farmers and contractors with a one-stop solution
        to their needs. Secure transparent contracts, negotiate the best
        prices, and ensure trust in every transaction.
      </p>
    </div>
  </div>
</section>


  );
};

export default Testimonial;