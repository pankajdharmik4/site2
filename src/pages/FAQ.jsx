import React, { useState } from 'react';

const faqs = [
  {
    question: "What are dental implants, and how do they work?",
    answer: "Dental implants are artificial tooth roots made of titanium, surgically placed into the jawbone to support replacement teeth. They provide a stable foundation for crowns, bridges, or dentures."
  },
  {
    question: "Am I a suitable candidate for dental implants?",
    answer: "Most people with good oral and general health are candidates for dental implants. Your dentist will assess your specific case to determine eligibility."
  },
  {
    question: "Is the dental implant placement procedure painful?",
    answer: "The procedure is typically performed under local anaesthesia or sedation, so you should not feel significant pain during the surgery. Discomfort afterwards can usually be managed with over-the-counter pain medications."
  },
  {
    question: "How long does the entire dental implant process take?",
    answer: "The complete dental implant process, including healing and final restoration, can take several months. It may vary depending on individual factors and the need for additional procedures."
  },
  {
    question:"What is the success rate of dental implants?",
    answer:"Dental implants have a high success rate, often exceeding 95%. Success depends on factors such as oral hygiene, bone quality, and proper post-operative care."
  },
  {
    question:"Can I eat normally after getting dental implants?",
    answer:"Once the implants have integrated with the bone and the final restoration is in place, you can typically eat a normal diet without restrictions."
  },
  {
    question:"How do I care for and clean my dental implants?",
    answer:"Dental implants require regular oral hygiene practices, including brushing, flossing, and routine dental check-ups, just like natural teeth."
  },
  {
    question:"Are there any potential complications or risks associated with dental implants?",
    answer:"While complications are rare, they can include infection, implant failure, or complications during surgery. Discuss potential risks with your dentist before the procedure."
  },
  {
    question:"How long can I expect dental implants to last?",
    answer:"Dental implants can last a lifetime with proper care and maintenance. According to research around 95% of dental implants for single teeth survive at least 10 years making them a durable and long-term solution for missing teeth."
  }
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
