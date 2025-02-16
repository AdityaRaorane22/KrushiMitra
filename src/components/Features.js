import React from 'react';

const Features = () => {
  return (
    <section id='features'>
      {/* Flex Container */}
      <div className='container flex flex-col px-4 mx-auto mt-10 space-y-12 md:space-y-0 md:flex-row'>
        {/* What's Different */}
        <div className='flex flex-col space-y-12 md:w-1/2'>
          <h2 className='max-w-md text-4xl font-bold text-center md:text-left'>
            What's different about KrushiMitra?
          </h2>
          <p className='max-w-sm text-center text-darkGrayishBlue md:text-left'>
          KrushiMitra provides farmers and contractors with a one-stop solution 
          to all their needs. It is a marketplace designed to cater to the requirements
          of modern-age contract-based marketing.
          </p>
        </div>

        {/* Numbered List */}
        <div className='flex flex-col space-y-8 md:w-1/2'>
          {/* List Item 1 */}
          <div className='flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row'>
            {/* Heading */}
            <div className='rounded-l-full bg-brightRedSupLight md:bg-transparent'>
              <div className='flex items-center space-x-2'>
                <div className='px-4 py-2 text-white rounded-full md:py-1 bg-green-500'>
                  01
                </div>
                <h3 className='text-base font-bold md:mb-4 md:hidden'>
                Check for the products listed by Trusted Sellers
                </h3>
              </div>
            </div>

            <div>
              <h3 className='hidden mb-4 text-lg font-bold md:block'>
              Check for the products listed by Trusted Sellers
              </h3>
              <p className='text-darkGrayishBlue'>
                Browse products listed by Trusted Sellers, compare the prices they offer,
                and select the best option for your needs. 
                Explore a range of sellers to find the perfect deal for you.
              </p>
            </div>
          </div>

          {/* List Item 2 */}
          <div className='flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row'>
            {/* Heading */}
            <div className='rounded-l-full bg-brightRedSupLight md:bg-transparent'>
              <div className='flex items-center space-x-2'>
                <div className='px-4 py-2 text-white rounded-full md:py-1 bg-green-500'>
                  02
                </div>
                <h3 className='text-base font-bold md:mb-4 md:hidden'>
                  Negogiate to get Best Price!
                </h3>
              </div>
            </div>

            {/* List Item 3 */}
            <div>
              <h3 className='hidden mb-4 text-lg font-bold md:block'>
              Negotiate to get Best Price!
              </h3>
              <p className='text-darkGrayishBlue'>
              Engage in negotiations to achieve optimal pricing for both sellers 
              and buyers. Clearly outline your requirements and finalize the agreement
              through our integrated chat feature.
              </p>
            </div>
          </div>

          <div className='flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row'>
            {/* Heading */}
            <div className='rounded-l-full bg-brightRedSupLight md:bg-transparent'>
              <div className='flex items-center space-x-2'>
                <div className='px-4 py-2 text-white rounded-full md:py-1 bg-green-500'>
                  03
                </div>
                <h3 className='text-base font-bold md:mb-4 md:hidden'>
                  Compare prices with the current market trends
                </h3>
              </div>
            </div>

            <div>
              <h3 className='hidden mb-4 text-lg font-bold md:block'>
              Compare prices with the current market trends
              </h3>
              <p className='text-darkGrayishBlue'>
              Engage in negotiations to achieve optimal pricing for both sellers 
              and buyers. Clearly outline your requirements and finalize the agreement
              through our integrated chat feature.
              </p>
            </div>
          </div>

          {/* List Item 4 */}
          <div className='flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row'>
            {/* Heading */}
            <div className='rounded-l-full bg-brightRedSupLight md:bg-transparent'>
              <div className='flex items-center space-x-2'>
                <div className='px-4 py-2 text-white rounded-full md:py-1 bg-green-500'>
                  04
                </div>
                <h3 className='text-base font-bold md:mb-4 md:hidden'>
                  Get Assured Buyers and Products with Smart Contracts
                </h3>
              </div>
            </div>

            <div>
              <h3 className='hidden mb-4 text-lg font-bold md:block'>
                Get Assured Buyers and Products with Smart Contracts
              </h3>
              <p className='text-darkGrayishBlue'>
              Verify buyer and product assurance with contracts based on 
              negotiated terms. Use secure payment services for 
              transparency and trust.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;