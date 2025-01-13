import React from 'react';
import { Button } from '../components'; // Adjust the import path based on your folder structure
import Modal from './BookingModal'; // Adjust the import path based on your folder structure
import Navbar from './Navbar';
import { data } from '../data/data'

const Hero = ({ openModal }) => {
  return (
    <>
      <div className="relative w-full md:h-screen  md:mb-2 bg-cover bg-center z-20" style={{ backgroundImage: "url('/images/bg-img3.png')" }}>
        <Navbar />
        {/* Mobile View */}
        <div className="px-8 md:hidden relative w-full h-full flex flex-col items-center justify-center text-center bg-[#00102d] p-4">
          <img
            src="/images/mobile-bg1.png" // Replace with the actual image path
            alt="About Us"
            className="w-64 h-64 rounded-lg object-cover mb-4 bg-white" // Adjust size as needed
          />
          <h1 className="text-2xl font-lato font-bold text-white mb-2">
            {data.heroSection.heading}
          </h1>
          <p className="text-xs font-montserrat font-normal text-white">
            {/* As Taylor Swift once said - “You've got a smile that could light up this whole town!”  */}
            {data.heroSection.para}</p>
          <button
            onClick={openModal}
            className="bg-white text-xs md:text-sm lg:text-xl text-[#00102d] font-bold py-2 md:py-3 px-4 md:px-6 rounded-lg font-lato text-left lg:self-start mx-[7%] md:mb-0 mt-[5%]"
          >
            Get a Free Consultation
          </button>
        </div>

        {/* Desktop View */}
        <div className="hidden md:flex relative w-full h-full md:h-[500px] lg:h-[600px] flex-col-reverse md:flex-row-reverse">
          {/* Section: Text on the Right */}
          <div className="flex flex-col items-center justify-center w-full lg:w-[60%] md:p-4 p-2 mt-[4%] text-white">
            <h1 className="text-xs md:text-3xl lg:text-4xl md:mb-4 text-center lg:text-left mx-[7%] font-lato font-bold">
              {data.heroSection.heading}
            </h1>
            <p className="text-xs md:text-xl md:mb-4 lg:mb-8 text-center lg:text-left mx-[7%] font-montserrat font-normal">
              {data.heroSection.para}</p>
            <button
              onClick={openModal}
              className="bg-white text-xs md:text-sm lg:text-xl text-[#00102d] font-bold py-2 md:py-3 px-4 md:px-6 rounded-lg font-lato text-left lg:self-start mx-[7%] md:mb-0 mb-[10%]"
            >
              Get a Free Consultation
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
