import React from 'react';
import { ArrowRightIcon, ArrowDownIcon } from '@heroicons/react/solid';
import { data } from '../data/data'
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
  const processSteps = data.processSteps

  return (
    <section id="process" className="py-12 px-4 bg-gray-100">
      {/* Title and Description */}
      <div className="text-center mb-10 mx-[5%] md:mx-[20%]">
        <h2 className="text-2xl md:text-5xl font-bold text-[#00102d] mb-4">{data.process.title}</h2>
        <p className="text-xs md:text-lg text-gray-600">
          {data.process.para}
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
