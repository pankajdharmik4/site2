import React from 'react';
import { ArrowRightIcon, ArrowDownIcon } from '@heroicons/react/solid';

const ProcessCard = ({ step, title, description }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 md:p-6 w-full md:w-72 h-full flex flex-col text-center md:text-left md:min-h-[300px]">
      <span className="font-bold text-lg md:text-xl mb-2 block">Step {step}</span>
      <h3 className="text-lg md:text-xl font-semibold text-[#00102d] mb-2">{title}</h3>
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
      title: "Consultation and 3D Planning",
      description: "During the initial visit, your dentist evaluates your oral and systemic health, reviews X-rays and 3D scans, and develops a tailored treatment plan. This stage identifies the optimal placement site and ensures your bone and gum tissue are ready for implants. Using this 3D imaging the dentist will then plan the surgery digitally and create a 3D printed template for use during the surgery."
    },
    {
      step: 2,
      title: "Implant Placement Surgery",
      description: "Under local anesthesia (and sedation if required), the dentist, guided by the surgical template safely inserts a titanium implant post into the jawbone. This post acts as an artificial tooth root, providing a stable foundation for the replacement tooth. This process is painless after the local anaesthetic takes effect and post operative healing is usually more comfortable than patients were expecting."
    },
    {
      step: 3,
      title: "Osseointegration",
      description: "Over the next 3–6 months, the jawbone naturally fuses with the implant in a process called osseointegration. This step ensures the implant becomes securely anchored, similar to a natural tooth root."
    },
    {
      step: 4,
      title: "Restoration and Finalization",
      description: "Once the implant is fully integrated into the bone, a custom-made crown or bridge is attached to the implant via an abutment. The result is a seamless, functional, and aesthetically pleasing smile tailored to your needs."
    }
  ];

  return (
    <section id="process" className="py-12 px-4 bg-gray-100">
      {/* Title and Description */}
      <div className="text-center mb-10 mx-[5%] md:mx-[20%]">
        <h2 className="text-2xl md:text-5xl font-bold text-[#00102d] mb-4">The Process of Getting Dental Implants</h2>
        <p className="text-xs md:text-lg text-gray-600">
        Dental implants are a transformative solution for restoring smiles and confidence, offering a durable and natural-looking replacement for missing or failing teeth as well as a replacement for loose dentures. The process requires the use of advanced technology and precision to ensure comfort, safety, and long-term success. Here's how the placement process unfolds:
        </p>
      </div>

      {/* Process Steps */}
      <div className="flex flex-col md:h-[500px] md:flex-row items-center justify-center gap-2 md:gap-6 mx-[5%]">
        {processSteps.map((step, index) => (
          <React.Fragment key={step.step}>
            <ProcessCard 
              step={step.step} 
              title={step.title} 
              description={step.description} 
            />
            {index < processSteps.length - 1 && (
              <>
                <ArrowDownIcon className="w-6 h-6 text-[#00102d] block md:hidden my-4" />
                <ArrowRightIcon className="w-6 h-6 text-[#00102d] hidden md:block" />
              </>
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default ProcessSection;
