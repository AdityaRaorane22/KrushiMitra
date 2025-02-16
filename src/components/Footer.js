import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='bg-slate-700'>
      {/* Flex Container */}
      <div className='container flex flex-col-reverse justify-between px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0'>
        {/* Logo and social links container */}
        <div className='flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-start'>
          <div className='mx-auto my-6 text-center text-white md:hidden'>
            Copyright © 2024, All Rights Reserved
          </div>
          {/* Logo */}
        <div>
          <h1 className='text-green-800 text-4xl font-bold font-serif'>KrushiMitra</h1>
        </div>          
        </div>
        {/* List Container */}
        <div className='flex justify-around space-x-32'>
          <div className='flex flex-col space-y-3 text-white'>
            <Link to='#' className='hover:text-green-700'>
              Home
            </Link>
            <Link to='#' className='hover:text-green-700'>
              Marketplace
            </Link>
            <Link to='#' className='hover:text-green-700'>
              Products
            </Link>
            <Link to='#' className='hover:text-green-700'>
              About
            </Link>
          </div>
          <div className='flex flex-col space-y-3 text-white'>
            <Link to='#' className='hover:text-green-700'>
              Contact
            </Link>
            <Link to='#' className='hover:text-green-700'>
              Privacy Policy
            </Link>
          </div>
        </div>

        {/* Input Container */}
        <div className='flex flex-col justify-between'>
          <div className='hidden text-white md:block'>
            Copyright © 2024, All Rights Reserved
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;