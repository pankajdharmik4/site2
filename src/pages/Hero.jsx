import React from 'react';
import { Button } from '../components'; // Adjust the import path based on your folder structure
import Modal from './BookingModal'; // Adjust the import path based on your folder structure

const Hero = ({ openModal }) => {
  return (
    <div className="relative w-full h-screen md:mb-2 bg-cover bg-center" style={{ backgroundImage: "url('/images/bg-img.png')" }}>
      {/* Mobile View */}
      <div className="block md:hidden relative w-full h-full flex flex-col items-center justify-center text-center bg-[#13192D] p-4">
        <img
          src="/images/mobile-bg.png" // Replace with the actual image path
          alt="About Us"
          className="w-64 h-64 rounded-lg object-cover mb-4 bg-white" // Adjust size as needed
        />
        <h1 className="text-2xl font-lato font-bold text-white mb-2">
          Restore Your Smile with Expert Dental Implants in Staines
        </h1>
        <p className="text-sm font-montserrat font-normal text-white">
          At Rothley Lodge Dental Surgery, we offer advanced dental implant solutions tailored to restore both your smile and confidence. Our experienced team uses the latest technology to provide safe, comfortable, and long-lasting implant procedures that feel and look natural.
        </p>
        <button
            onClick={openModal}
            className="bg-white text-xs md:text-sm lg:text-xl text-[#13192D] font-bold py-2 md:py-3 px-4 md:px-6 rounded-lg font-lato text-left lg:self-start mx-[7%] md:mb-0 mt-[5%]"
          >
            Get Free Invisalign Consultation
          </button>
      </div>

      {/* Desktop View */}
      <div className="hidden md:flex relative w-full h-full md:h-[500px] lg:h-[600px] flex-col-reverse md:flex-row-reverse">
        {/* Section: Text on the Right */}
        <div className="flex flex-col items-center justify-center w-full lg:w-[60%] md:p-4 p-2 mt-[17%] text-white">
          <h1 className="text-sx md:text-4xl lg:text-6xl md:mb-4 text-center lg:text-left mx-[7%] font-lato font-bold">
            Restore Your Smile with Expert Dental Implants in Staines
          </h1>
          <p className="text-xs md:text-xl mb-8 text-center lg:text-left mx-[7%] font-montserrat font-normal">
            At Rothley Lodge Dental Surgery, we offer advanced dental implant solutions tailored to restore both your smile and confidence. Our experienced team uses the latest technology to provide safe, comfortable, and long-lasting implant procedures that feel and look natural.
          </p>
          <button
            onClick={openModal}
            className="bg-white text-xs md:text-sm lg:text-xl text-[#13192D] font-bold py-2 md:py-3 px-4 md:px-6 rounded-lg font-lato text-left lg:self-start mx-[7%] md:mb-0 mb-[10%]"
          >
            Get Free Invisalign Consultation
          </button>
        </div>
      </div>

      {/* Logos */}
      <div className="absolute invisible md:visible bottom-[-5%] right-0 w-[100%] md:w-[60%] lg:w-[40%] flex justify-around items-center border border-white bg-white rounded-lg shadow-lg p-2 md:p-4 ml-4 lg:mr-[10%]">
        <img src="images/img_image_4.png" alt="Logo 2" className="h-6 md:h-8" />
        <img src="images/img_image_5.png" alt="Logo 3" className="h-6 md:h-8" />
        <img src="images/img_image_6.png" alt="Logo 4" className="h-6 md:h-8" />
        <img src="images/img_image_7.png" alt="Logo 5" className="h-6 md:h-8" />
      </div>
    </div>
  );
};

export default Hero;
