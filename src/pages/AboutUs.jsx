import React from 'react';
import { Carousel } from 'react-responsive-carousel'; // Install this library first
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Carousel styles

const AboutUs = () => {
  const images = [
    "images/Denplan-Holder-Logo.png",
    "images/brand-logo1.jpg",
    "images/brand-logo2.jpg",
    "images/brand-logo3.jpg",
    "images/brand-logo4.jpg",
    // "images/brand-logo5.jpg",
  ];

  return (
    <div id="about" className="relative  py-16">
      
      <div className="bg-[#13192d] py-16">
      <div className="container mx-auto px-6 md:px-[10%]">
        <div className="flex flex-col md:flex-row items-center relative">
          {/* Section 1 - Main Image */}
          <div className="w-full md:w-[40%] mb-8 md:mb-0 z-40">
            <img
              src="images/b2-img.jpg" // Replace with actual image path
              alt="About Us"
              className="w-full h-full rounded-lg object-contain"
            />
          </div>

          {/* Section 2 - Title and Description */}
          <div className="w-full md:w-[60%] md:pl-12 text-center md:text-left px-4">
            <h2 className="text-3xl md:text-4xl text-white mb-6 font-lato font-bold">
              Why Choose Rothley Lodge for Your Dental Implant Needs?
            </h2>
            <p className="text-white font-montserrat font-normal mb-4">
              With a legacy as the oldest dental practice in Staines, Rothley Lodge Dental Surgery has cared for generations with exceptional dental expertise and a commitment to quality. Our skilled team, led by award-winning dentists, combines decades of experience with the latest implant technology to provide seamless, effective, and lasting dental implant solutions.
            </p>
            <p className="text-white font-montserrat font-normal">
              We understand that each patient’s journey is unique, which is why we prioritize personalised care in a friendly, professional environment. At Rothley Lodge, we ensure your dental health and comfort are always in expert hands.
            </p>
          </div>
        </div>
      </div>
    </div>
      {/* Section - Below Bar with Images */}
      <div className="mx-auto px-6 md:px-[10%] mt-12 ">
        {/* Desktop View */}
        <div className="hidden md:flex justify-between items-center gap-12">
          {images.map((src, index) => (
            <div
              key={index}
              className="flex justify-center items-center w-[18%] h-24"
            >
              <img
                src={src}
                alt={`Image ${index + 1}`}
                className="h-full max-w-full object-contain "
              />
            </div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <Carousel
            showThumbs={false}
            infiniteLoop
            showStatus={false}
            autoPlay
            interval={3000}
            showArrows={false}
          >
            {images.map((src, index) => (
              <div
                key={index}
                className="flex justify-center items-center h-40"
              >
                <img
                  src={src}
                  alt={`Image ${index + 1}`}
                  className="h-full max-w-full object-contain"
                />
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
