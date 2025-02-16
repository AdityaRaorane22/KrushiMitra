import { Link } from 'react-router-dom'; 
import introheropic from '../assets/images/introheropic.png';
import { useState } from 'react';

const Hero = () => {

  const [dropdownVisible, setDropdownVisible] = useState(false);

  const handleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <section id='hero'>
      {/* Flex Container */}
      <div className='container flex flex-col-reverse items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0 md:flex-row'>
        {/* Left Item */}
        <div className='flex flex-col mb-32 space-y-12 md:w-1/2'>
          <h1 className='max-w-md text-4xl font-bold text-center md:text-5xl md:text-left'>
            Create Assured Contracts and Explore Marketplace
          </h1>
          <p className='max-w-sm text-center text-darkGrayishBlue md:text-left'>
            KrushiMitra eases farmers by providing guaranteed buyers for their produce
            while helping the contractors to get assured products.
          </p>
          <div className='flex justify-center md:justify-start'>
          <div className='relative'>
          <button
            onClick={handleDropdown}
            className='hidden p-3 px-6 pt-2 text-white bg-green-500 rounded-full baseline hover:bg-green-700 md:block'
          >
            Get Started
          </button>
          {dropdownVisible && (
            <div className='absolute mt-2 w-48 bg-white border rounded-lg shadow-lg'>
              <Link
                to='/contractor'
                className='block px-4 py-2 text-gray-800 hover:bg-green-100'
                onClick={() => setDropdownVisible(false)}
              >
                Contractor &rarr; 
              </Link>
              <Link
                to='/farmer'
                className='block px-4 py-2 text-gray-800 hover:bg-green-100'
                onClick={() => setDropdownVisible(false)}
              >
                Farmer &rarr; 
              </Link>
            </div>
          )}
        </div>

          </div>
        </div>
        {/* Image */}
        <div className='md:w-1/2'>
          <img src={introheropic} alt='' />
        </div>
      </div>
    </section>
  );
};

export default Hero;