import React from 'react';

const steps = [
  {
    id: 1,
    img: 'path/to/circular-image1.png',
    title: 'Step 1: Consultation',
    desc: 'During your initial consultation, we will assess your dental needs and create a treatment plan tailored just for you.',
  },
  {
    id: 2,
    img: 'path/to/circular-image2.png',
    title: 'Step 2: Custom Aligners',
    desc: 'We will create custom aligners that will gradually move your teeth into the desired position.',
  },
  {
    id: 3,
    img: 'path/to/circular-image3.png',
    title: 'Step 3: Regular Check-ups',
    desc: 'You’ll have regular check-ups to monitor your progress and receive new aligners as needed.',
  },
  {
    id: 4,
    img: 'path/to/circular-image4.png',
    title: 'Step 4: Smile Transformation',
    desc: 'Finally, enjoy your new smile and the confidence it brings as you complete your treatment.',
  },
];

const HowInvisalignWorks = () => {
  return (
    <div className="py-16 bg-[#13192d] ">
      <div className="container mx-auto px-6 ">
        {/* Section Title */}
        <h2 className="text-3xl font-bold text-white text-center mb-10">How Invisalign Works</h2>

        {/* Main Image */}

        {/* Steps List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mx-[10%]">
          {steps.map((step) => (
            <div key={step.id} className="p-4 flex flex-col items-start">
            <div className="bg-gray-300 rounded-full h-16 w-16 flex items-center justify-center mb-4">
              <img src={step.img} alt={`Step ${step.id}`} className="h-14 w-14 rounded-full" />
            </div>
            <h3 className="text-lg font-semibold text-white text-left">{step.title}</h3>
            <p className="text-left text-white">{step.desc}</p>
          </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowInvisalignWorks;
