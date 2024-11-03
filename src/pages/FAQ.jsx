import React, { useState } from 'react';

const faqs = [
  {
    question: "What is the process of getting a dental implant?",
    answer: "The dental implant process typically involves a consultation, placing a titanium post into the jawbone, allowing time for healing and bone integration, and finally attaching a custom-made crown. This process can take several months, but it results in a secure, natural-looking tooth replacement."
  },
  {
    question: "Who are dental implants for?",
    answer: "Dental implants are ideal for adults who are missing one or more teeth, have healthy gums, and enough jawbone to support an implant. They are a great solution for those seeking a permanent, natural-feeling replacement for missing teeth."
  },
  {
    question: "How long do dental implants last?",
    answer: "With proper care, dental implants can last 15-25 years or even a lifetime. Regular dental check-ups and good oral hygiene are essential to prolonging the life of your implant."
  },
  {
    question: "How painful is getting a dental implant?",
    answer: "Dental implant surgery is typically done under local anesthesia, so most patients feel little to no pain during the procedure. Some mild soreness or discomfort may occur afterward, which can be managed with over-the-counter pain relief."
  },
];

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
        <div className="max-w-5xl mx-auto">
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
