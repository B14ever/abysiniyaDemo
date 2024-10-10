import React from 'react';

const HeroSection = () => {
  return (
    <section className=" overflow-hidden flex flex-col-reverse md:grid md:grid-cols-2 h-[calc(100vh-16)] justify-end px-4 md:px-6 py-16">
      <div className='h-full py-16 text-center md:text-left md:py-36'>
        <h1 className="text-3xl md:text-4xl text-balance font-bold text-gray-800 mb-4">
          Welcome to Daily Products and Blogs
        </h1>
        <p className="text-lg text-balance text-gray-600 mb-6">
          Where you can get all the latest products and updates on our blogs. You can also ask questions to our team.
        </p>
        <button 
          className="bg-primaryBG text-white hover:bg-hoverBG hover:text-[#443472] py-2 px-4 rounded hover:bg-primary-dark transition duration-300" 
          aria-label="Explore our products and blogs"
        >
          Explore Product
        </button>
       
      </div>
      <div className='md:py-28 lg:py-0'>
        <img 
          src={'./hero.jpg'} 
          alt="A collection of daily products" 
          className='object-contain'
        />
      </div>
    </section>
  );
};

export default HeroSection;
