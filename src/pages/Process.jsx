import React from 'react';
import { ArrowRightIcon } from '@heroicons/react/solid';

const ProcessSection = () => {
  return (
    <section id='process' className="py-12 px-4 bg-gray-100">
      {/* Title and Description */}
      <div className="text-center mb-10 mx-[5%] md:mx-[20%]">
        <h2 className="text-2xl md:text-5xl font-bold text-[#13192D] mb-4">The Process of Getting Dental Implants</h2>
        <p className="text-xs md:text-lg text-gray-600">
          Firstly we must plan perfectly, so we will use our world-class in-house Cone Beam CT scan and intra-oral digital scanner, where we will digitally plan implant treatment to micromillimeters. This means we are able to place it with precision to avoid complications.
        </p>
      </div>

      {/* Process Steps */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 mx-[5%]">
        {/* Card 1 */}
        <div className="bg-white shadow-lg rounded-lg p-6 w-full md:w-[20%]">
          <span className=" font-bold text-xl mb-2">Step 1</span>
          <h3 className="text-xl font-semibold text-[#13192D] mb-2">Create titanium dental implant.</h3>
          <p className="text-gray-600">
          A dental implant in the UK is made of titanium and placed into the jawbone where the tooth root would originally have been. This is a painless procedure, and much faster (with far less healing!) than most people think.
          </p>
        </div>

        {/* Arrow */}
        <ArrowRightIcon className="w-6 h-6 text-[#13192D] hidden md:block" />

        {/* Card 2 */}
        <div className="bg-white shadow-lg rounded-lg p-6 w-full md:w-[20%]">
          <span className="font-bold text-xl  mb-2">Step 2</span>
          <h3 className="text-xl font-semibold text-[#13192D] mb-2">Attach titanium dental implant.</h3>
          <p className="text-gray-600">
          The dental implant then fuses into the jawbone. This can take time but ultimately provides a very solid platform to support further restoration such as crowns and bridges or to hold dentures in place.
          </p>
        </div>

        {/* Arrow */}
        <ArrowRightIcon className="w-6 h-6 text-[#13192D] hidden md:block" />

        {/* Card 3 */}
        <div className="bg-white shadow-lg rounded-lg p-6 w-full md:w-[20%]">
          <span className="font-bold text-xl  mb-2">Step 3</span>
          <h3 className="text-xl font-semibold text-[#13192D] mb-2">Design the crown.</h3>
          <p className="text-gray-600">
          The replacement crown that sits on top of the dental implant can be designed to match the neighboring teeth and the other teeth require no treatment. The titanium dental implant is fixed into your jawbone and so feels like a normal tooth once the treatment is complete.
          </p>
        </div>

        {/* Arrow */}
        <ArrowRightIcon className="w-6 h-6 text-[#13192D] hidden md:block" />

        {/* Card 4 */}
        <div className="bg-white shadow-lg rounded-lg p-6 w-full md:w-[20%]">
          <span className=" font-bold text-xl  mb-2">Step 4</span>
          <h3 className="text-xl font-semibold text-[#13192D] mb-2">Dental implant aftercare.</h3>
          <p className="text-gray-600">
          No specialist care will be required following the procedure, however, there are a few simple rules that will need to be followed to ensure the healing period is as comfortable and quick as possible.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
