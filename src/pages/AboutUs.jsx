import React from 'react';

const AboutUs = () => {
  return (
    <div id="about" className="relative bg-[#13192d] py-16">
      <div className="container mx-auto px-6 md:px-[10%]">
        <div className="flex flex-col md:flex-row items-center relative">
          {/* Section 1 - Main Image */}
          <div className="w-full md:w-[40%] mb-8 md:mb-0  z-40">
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
            <p className="text-white font-montserrat font-normal mb-4 ">
              With a legacy as the oldest dental practice in Staines, Rothley Lodge Dental Surgery has cared for generations with exceptional dental expertise and a commitment to quality. Our skilled team, led by award-winning dentists, combines decades of experience with the latest implant technology to provide seamless, effective, and lasting dental implant solutions.
            </p>
            <p className="text-white font-montserrat font-normal ">
              We understand that each patient’s journey is unique, which is why we prioritize personalized care in a friendly, professional environment. At Rothley Lodge, we ensure your dental health and comfort are always in expert hands.
            </p>
          </div>
        </div>

        {/* Section - Bottom Left Image */}
        <div className="absolute bottom-0 left-0 transform translate-y-1/2 -translate-x-1/4">
          <img
            src="images/aboutbg.png" // Replace with actual image path
            alt="Decorative Image"
            className="w-3/4 md:w-full h-auto object-contain opacity-80 overflow-hidden"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
