import React, { useEffect, useState } from 'react';
import { Button } from '../components'; // Adjust the import path based on your folder structure
import BookingModal from './BookingModal'; // Adjust the import path as needed
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesomeIcon
import { faPhone } from '@fortawesome/free-solid-svg-icons'; // Import the phone icon

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const openModal = () => {
    setIsModalOpen(true);
    closeMenu(); // Close the mobile menu if it's open
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    openModal();
  }, []);

  return (
    <>
      <nav className="w-full bg-[#13192d] px-4 lg:px-16 z-50">
        <div className="container mx-auto flex items-center justify-between px-4">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img src="/images/logo.png" alt="Logo" className="h-16 md:h-16 lg:h-24 w-auto" />
          </div>

          {/* Desktop Nav Links */}
          {/* <div className="hidden space-x-4 md:space-x-8 lg:flex">
            <a href="#about" className="text-white font-montserrat font-medium text-sm lg:text-lg">About Us</a>
            <a href="#process" className="text-white font-montserrat font-medium text-sm lg:text-lg">The Process</a>
            <a href="#faq" className="text-white font-montserrat font-medium text-sm lg:text-lg">FAQ</a>
            <a href="#testimonial" className="text-white font-montserrat font-medium text-sm lg:text-lg">Testimonial</a>
          </div> */}

          {/* Book Now Button and Contact for Desktop */}
          <div className="hidden lg:flex flex-col items-center p-4">
            <Button
              size="xs"
              variant="fill"
              onClick={openModal}
              className="text-white min-w-[120px] lg:min-w-[200px] rounded-lg lg:rounded-[12px] border border-white px-4 lg:px-[34px] p-4 lg:py-[14px] font-montserrat font-medium"
            >
              Book Now
            </Button>

            {/* Contact Number for Desktop */}
            <a href="tel:01784453448" className="text-white hover:text-gray-300 flex items-center text-xl mt-2">
              <FontAwesomeIcon icon={faPhone} className="mr-2" />
              01784 453448
            </a>
          </div>

          {/* Mobile Menu Button */}
          {/* <div className="lg:hidden ml-4 ">
            <button onClick={toggleMenu} className="text-white focus:outline-none">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div> */}
        </div>

        {/* Mobile Navbar Links */}
        {isMenuOpen && (
          <div className="lg:hidden z-40 bg-white absolute top-16 left-0 right-0 shadow-lg p-4">
            <a href="#about" onClick={closeMenu} className="block font-montserrat font-medium text-black p-2">About Us</a>
            <a href="#process" onClick={closeMenu} className="block font-montserrat font-medium text-black p-2">The Process</a>
            <a href="#faq" onClick={closeMenu} className="block font-montserrat font-medium text-black p-2">FAQ</a>
            <a href="#testimonial" onClick={closeMenu} className="block font-montserrat font-medium text-black p-2">Testimonial</a>

            <Button
              size="xs"
              variant="fill"
              onClick={openModal}
              className="bg-[#13192D] text-white mt-4 w-full py-2 rounded-lg font-montserrat font-medium"
            >
              Book Now
            </Button>

            {/* Contact Number for Mobile */}
            <a href="tel:01784453448" className="text-black hover:text-[#13192d] flex items-center text-xl mt-4">
              <FontAwesomeIcon icon={faPhone} className="mr-2" />
              01784 453448
            </a>
          </div>
        )}
      </nav>

      {/* Booking Modal */}
      <BookingModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
};

export default Navbar;
