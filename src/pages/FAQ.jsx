import React, { useState } from 'react';
import {data} from '../data/data'
const faqs = data.faqs;

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div id="faq" className="bg-gray-100 py-16">
      <div className="container mx-auto px-6">
        <h2 className="font-lato font-bold text-3xl text-gray-800 text-center mb-10">
          Frequently Asked Questions
        </h2>
        <div className="max-w-5xl mx-auto md:w-full">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex justify-between items-center bg-white text-left p-4 rounded-lg shadow-md focus:outline-none"
              >
                <span className="font-montserrat font-semibold">{faq.question}</span>
                <span>{openIndex === index ? '-' : '+'}</span>
              </button>
              {openIndex === index && (
                <div className="mt-2 p-4 bg-gray-200 rounded-lg font-montserrat font-semibold">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
