import React from 'react';
import { Carousel } from 'react-responsive-carousel'; // Install this library first
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Carousel styles

const AboutUs = () => {
  const images = [
    "images/d2-0.jpg",
    "images/d2-1.png",
    "images/d2-2.jpeg",
    "images/d2-3.png",
    // "images/brand-logo4.jpg",
    // "images/brand-logo5.jpg",
  ];

  return (
    <div id="about" className="relative  py-16 bg-[#00102d]">

      <div className=" py-16">
        <div className="container mx-auto px-6 md:px-[5%]">
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
              <p className="text-white font-montserrat font-normal mb-2 text-xs md:text-sm">
                <b>Over 40 Years of Expertise:</b> Trusted by generations in Staines, our award-winning team combines experience with excellence to deliver outstanding care.
              </p>
              <p className="text-white font-montserrat font-normal mb-2 text-xs md:text-sm">
               <b> The Latest 3D Technology:</b> We use the latest technology and techniques to ensure precision, safety, and exceptional results. The devil is in the detail with implant dentistry and we use 3D imaging, digital planning and 3D printed surgical guides to ensure optimal outcomes.
              </p>
              <p className="text-white font-montserrat font-normal mb-2 text-xs md:text-sm">
               <b> Aware Winning Team:</b> Our experienced clinicians, including the UK’s Best Young Dentist and previous President of the British Academy of Cosmetic Dentistry (BACD), focus on providing dental implants which really look like your natural teeth. 
              </p>
              <p className="text-white font-montserrat font-normal text-xs md:text-sm">
               <b> Personalised 5 Star Care:</b> We know having a dental implant can be worrying for our patients - so we strive to ensure every implant journey is tailored to your unique needs, ensuring a smooth, stress-free process from consultation to completion.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Section - Below Bar with Images */}
      <div className="mx-auto px-6 md:px-[10%] pt-10 ">
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
            showIndicators={false}
          >
            {images.map((src, index) => (
              <div
                key={index}
                className="flex justify-center items-center h-24"
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
