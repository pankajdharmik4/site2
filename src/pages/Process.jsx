import React from 'react';
import { ArrowRightIcon, ArrowDownIcon } from '@heroicons/react/solid';

const ProcessCard = ({ step, title, description }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 md:p-6 w-full md:w-72 h-full flex flex-col text-center md:text-left min-h-[300px]">
      <span className="font-bold text-lg md:text-xl mb-2 block">Step {step}</span>
      <h3 className="text-lg md:text-xl font-semibold text-[#13192D] mb-2">{title}</h3>
      <p className="text-sm md:text-base text-gray-600 flex-grow">
        {description}
      </p>
    </div>
  );
};

const ProcessSection = () => {
  const processSteps = [
    {
      step: 1,
      title: "Create titanium dental implant.",
      description: "A dental implant in the UK is made of titanium and placed into the jawbone where the tooth root would originally have been. This is a painless procedure, and much faster (with far less healing!) than most people think."
    },
    {
      step: 2,
      title: "Attach titanium dental implant.",
      description: "The dental implant then fuses into the jawbone. This can take time but ultimately provides a very solid platform to support further restoration such as crowns and bridges or to hold dentures in place."
    },
    {
      step: 3,
      title: "Design the crown.",
      description: "The replacement crown that sits on top of the dental implant can be designed to match the neighboring teeth and the other teeth require no treatment. The titanium dental implant is fixed into your jawbone and so feels like a normal tooth once the treatment is complete."
    },
    {
      step: 4,
      title: "Dental implant aftercare.",
      description: "No specialist care will be required following the procedure, however, there are a few simple rules that will need to be followed to ensure the healing period is as comfortable and quick as possible."
    }
  ];

  return (
    <section id="process" className="py-12 px-4 bg-gray-100">
      {/* Title and Description */}
      <div className="text-center mb-10 mx-[5%] md:mx-[20%]">
        <h2 className="text-2xl md:text-5xl font-bold text-[#13192D] mb-4">The Process of Getting Dental Implants</h2>
        <p className="text-xs md:text-lg text-gray-600">
          Firstly we must plan perfectly, so we will use our world-class in-house Cone Beam CT scan and intra-oral digital scanner, where we will digitally plan implant treatment to micromillimeters. This means we are able to place it with precision to avoid complications.
        </p>
      </div>

      {/* Process Steps */}
      <div className="flex flex-col md:h-[400px] md:flex-row items-center justify-center gap-6 md:gap-10 mx-[5%]">
        {processSteps.map((step, index) => (
          <React.Fragment key={step.step}>
            <ProcessCard 
              step={step.step} 
              title={step.title} 
              description={step.description} 
            />
            {index < processSteps.length - 1 && (
              <>
                <ArrowDownIcon className="w-6 h-6 text-[#13192D] block md:hidden my-4" />
                <ArrowRightIcon className="w-6 h-6 text-[#13192D] hidden md:block" />
              </>
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default ProcessSection;
