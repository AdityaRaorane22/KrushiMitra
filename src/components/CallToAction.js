import { useState } from 'react';
import { Link } from 'react-router-dom';

const CallToAction = () => {

  const [dropdownVisible, setDropdownVisible] = useState(false);

  const handleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <section id='cta' className='bg-green-400'>
      {/* Flex Container */}
      <div className='container flex flex-col items-center justify-between px-6 py-24 mx-auto space-y-12 md:py-12 md:flex-row md:space-y-0'>
        {/* Heading */}
        <h2 className='text-5xl font-bold leading-tight text-center text-white md:text-4xl md:max-w-xl md:text-left'>
          Simplify the process of getting fresh produce
        </h2>
        {/* Button */}
        <div>
          <button
            onClick={handleDropdown}
            className='hidden p-3 px-6 pt-2 text-white bg-green-500 rounded-full baseline hover:bg-green-700 md:block'
          >
            Get Started
          </button>
          {dropdownVisible && (
            <div className='absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg'>
              <Link
                to='/contractor'
                className='block px-4 py-2 text-gray-800 hover:bg-green-100'
                onClick={() => setDropdownVisible(false)}
              >
                Contractor  &rarr;
              </Link>
              <Link
                to='/farmer'
                className='block px-4 py-2 text-gray-800 hover:bg-green-100'
                onClick={() => setDropdownVisible(false)}
              >
                Farmer  &rarr;
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CallToAction;