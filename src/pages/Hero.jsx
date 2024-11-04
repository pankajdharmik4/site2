import React from 'react';
import { Button } from '../components'; // Adjust the import path based on your folder structure
import Modal from './BookingModal'; // Adjust the import path based on your folder structure
import Navbar from './Navbar';

const Hero = ({ openModal }) => {
  return (
    <>
    <div className="relative w-full md:h-screen  md:mb-2 bg-cover bg-center z-20" style={{ backgroundImage: "url('/images/bg-img.png')" }}>
      {/* Mobile View */}
      <div className="px-8 md:hidden relative w-full h-full flex flex-col items-center justify-center text-center bg-[#13192D] p-4">
        <img
          src="/images/mobile-bg.png" // Replace with the actual image path
          alt="About Us"
          className="w-64 h-64 rounded-lg object-cover mb-4 bg-white" // Adjust size as needed
        />
        <h1 className="text-2xl font-lato font-bold text-white mb-2">
          Restore Your Smile with Expert Dental Implants in Staines
        </h1>
        <p className="text-xs font-montserrat font-normal text-white">
        As Taylor once said - “You've got a smile that could light up this whole town!” Let us get that back for you with dental implants! If you're looking for a long-lasting solution to missing teeth, We offer dental implants, a secure and natural-looking option.
        </p>
        <p className="text-xs font-montserrat font-normal text-white">
        At Rothley Lodge Dental Practice, we boast over 40 years of experience and have earned our reputation as an award-winning practice. Our skilled team is led by esteemed dentist Simon Shard, recognised as Dentistry Person of the Year in 2022.
        </p>
        <p className="text-xs font-montserrat font-normal text-white">
        Dental implants are designed to look and function like natural teeth, providing a stable foundation for crowns or bridges. Unlike dentures, they do not shift or slip, allowing you to eat, speak, and smile with confidence.
        </p>
        <p className="text-xs font-montserrat font-normal text-white">
        At Rothley Lodge Dental Practice, your journey to a renewed smile begins with us!
        </p>
        <button
          onClick={openModal}
          className="bg-white text-xs md:text-sm lg:text-xl text-[#13192D] font-bold py-2 md:py-3 px-4 md:px-6 rounded-lg font-lato text-left lg:self-start mx-[7%] md:mb-0 mt-[5%]"
        >
          Get Free Implant Consultation
        </button>
      </div>

      {/* Desktop View */}
      <div className="hidden md:flex relative w-full h-full md:h-[500px] lg:h-[600px] flex-col-reverse md:flex-row-reverse">
        {/* Section: Text on the Right */}
        <div className="flex flex-col items-center justify-center w-full lg:w-[60%] md:p-4 p-2 mt-[10%] text-white">
          <h1 className="text-xs md:text-3xl lg:text-4xl md:mb-4 text-center lg:text-left mx-[7%] font-lato font-bold">
            Restore Your Smile with Expert Dental Implants in Staines
          </h1>
          <p className="text-xs md:text-sm md:mb-4 lg:mb-8 text-center lg:text-left mx-[7%] font-montserrat font-normal">
            As Taylor once said - “You've got a smile that could light up this whole town!” Let us get that back for you with dental implants! If you're looking for a long-lasting solution to missing teeth, We offer dental implants, a secure and natural-looking option.
          </p>
          <p className="text-xs md:text-sm md:mb-4 lg:mb-8 text-center lg:text-left mx-[7%] font-montserrat font-normal">
            At Rothley Lodge Dental Practice, we boast over 40 years of experience and have earned our reputation as an award-winning practice. 
          </p>
          <p className="text-xs hidden md:block md:text-sm md:mb-4 lg:mb-8 text-center lg:text-left mx-[7%] font-montserrat font-normal">
              Our skilled team is led by esteemed dentist Simon Shard, recognised as Dentistry Person of the Year in 2022.
          </p>
          <p className="text-xs hidden md:block md:text-sm md:mb-4 lg:mb-8 text-center lg:text-left mx-[7%] font-montserrat font-normal">
            Dental implants are designed to look and function like natural teeth, providing a stable foundation for crowns or bridges. Unlike dentures, they do not shift or slip, allowing you to eat, speak, and smile with confidence.         At Rothley Lodge Dental Practice, your journey to a renewed smile begins with us!

          </p>
          {/* <p className="text-xs md:text-sm mb-8 text-center lg:text-left mx-[7%] font-montserrat font-normal">
            At Rothley Lodge Dental Practice, your journey to a renewed smile begins with us!
          </p> */}
          <button
            onClick={openModal}
            className="bg-white text-xs md:text-sm lg:text-xl text-[#13192D] font-bold py-2 md:py-3 px-4 md:px-6 rounded-lg font-lato text-left lg:self-start mx-[7%] md:mb-0 mb-[10%]"
          >
            Get Free Implant Consultation
          </button>
        </div>
      </div>

      {/* Logos */}
      {/* <div className="absolute invisible md:visible bottom-[-5%] right-0 w-[100%] md:w-[60%] lg:w-[40%] flex justify-around items-center border border-white bg-white rounded-lg shadow-lg p-2 md:p-4 ml-4 lg:mr-[10%]">
        <img src="images/img_image_4.png" alt="Logo 2" className="h-6 md:h-8" />
        <img src="images/img_image_5.png" alt="Logo 3" className="h-6 md:h-8" />
        <img src="images/img_image_6.png" alt="Logo 4" className="h-6 md:h-8" />
        <img src="images/img_image_7.png" alt="Logo 5" className="h-6 md:h-8" />
      </div> */}
    </div>
    </>
  );
};

export default Hero;
