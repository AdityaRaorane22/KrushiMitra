import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [showGetStarted, setShowGetStarted] = useState(true); // State to handle Get Started button visibility
  const navigate = useNavigate(); // Hook for navigation

  const handleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const handleGetStarted = () => {
    setShowGetStarted(false); // Hide the Get Started button
    navigate('/login'); // Redirect to the login route
  };

  return (
    <nav className='relative container mx-auto p-6'>
      {/* Flex Container */}
      <div className='flex items-center justify-between'>
        {/* Logo */}
        <div className='pt-2'>
          <h1 className='text-green-800 text-2xl font-bold font-serif'>KrushiMitra</h1>
        </div>
        {/* Menu Items */}
        <div className='hidden space-x-6 md:flex'>
          <Link to='/about-us' className='hover:text-green-700'>
            About Us
          </Link>
          <Link to='/contact-us' className='hover:text-green-700'>
            Contact Us
          </Link>
        </div>
        {/* Button with Dropdown */}
        {showGetStarted && (
          <div className='relative'>
            <button
              onClick={handleGetStarted}
              className='hidden p-3 px-6 pt-2 text-white bg-green-500 rounded-full baseline hover:bg-green-700 md:block'
            >
              Get Started
            </button>
            {dropdownVisible && (
              <div className='absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg'>
                <Link
                  to='/contractor'
                  className='block px-4 py-2 text-gray-800 hover:bg-green-100'
                  onClick={handleGetStarted}
                >
                  Contractor  &rarr;
                </Link>
                <Link
                  to='/farmer'
                  className='block px-4 py-2 text-gray-800 hover:bg-green-100'
                  onClick={handleGetStarted}
                >
                  Farmer  &rarr;
                </Link>
              </div>
            )}
          </div>
        )}

        {/* Hamburger Icon */}
        <button
          className={
            toggleMenu
              ? 'open block hamburger md:hidden focus:outline-none'
              : 'block hamburger md:hidden focus:outline-none'
          }
          onClick={() => setToggleMenu(!toggleMenu)}
        >
          <span className='hamburger-top'></span>
          <span className='hamburger-middle'></span>
          <span className='hamburger-bottom'></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className='md:hidden'>
        <div
          className={
            toggleMenu
              ? 'absolute flex flex-col items-center self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md'
              : 'absolute flex-col items-center hidden self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md'
          }
        >
          <Link to='#'>Marketplace</Link>
          <Link to='#'>About Us</Link>
          <Link to='#'>Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
