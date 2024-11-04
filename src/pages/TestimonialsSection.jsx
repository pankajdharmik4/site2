import React, { useRef } from 'react';

const testimonials = [
  {
    image: 'images/img_image_11.png',
    name: 'George Haymarket',
    comment: 'Rothley Lodge made my implant procedure easy and stress-free – I love my new smile!',
    rating: 5,
  },
  {
    image: 'images/img_image_11.png',
    name: 'Percival Beer',
    comment: 'Professional, caring, and attentive. The team took the time to explain every step.',
    rating: 5,
  },
  {
    image: 'images/img_image_11.png',
    name: 'Norman Crippens',
    comment: 'Top-notch service with a personal touch. My dental implants look and feel natural!',
    rating: 5,
  },
  {
    image: 'images/img_image_11.png',
    name: 'Edward Elric',
    comment: 'Making an appointment is very easy because it can be done online so it can save a lot of things and be done more clearly.',
    rating: 5,
  },
  {
    image: 'images/img_image_11.png',
    name: 'Edward Elric',
    comment: 'Making an appointment is very easy because it can be done online so it can save a lot of things and be done more clearly.',
    rating: 5,
  },
  {
    image: 'images/img_image_11.png',
    name: 'Edward Elric',
    comment: 'Making an appointment is very easy because it can be done online so it can save a lot of things and be done more clearly.',
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const scrollRef = useRef();

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  };

  return (
    <div id='testimonial' className="py-16 relative bg-gray-100">
      <div className="container mx-auto px-6 lg:px-[10%]">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <h2 className="text-3xl md:text-4xl text-gray-800 mb-4 md:mb-0 font-lato font-bold text-center">Our Reviews</h2>
          {/* <div className='px-4 md:px-16'>
            <h5 className='text-sm text-center md:text-lg font-montserrat font-normal'>Opinions from our patients who have experienced dental services at our clinic.</h5>
            <div className='invisible md:visible h-[2px] bg-black rounded mb-2'></div>
          </div> */}
        </div>

        {/* Testimonials Cards */}
        <div className="flex items-center mx-auto p-4">
          <div ref={scrollRef} className="flex overflow-x-auto space-x-4 scrollbar-hide">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white shadow-lg rounded-lg p-4 w-[80%] md:w-[40%] flex-none">
                <div className="flex items-center mb-2">
                  {/* <img src={testimonial.image} alt={testimonial.name} className="w-16 h-16 rounded-full" /> */}
                  <div className="ml-4 flex flex-col justify-center">
                    <h3 className="text-lg font-montserrat font-semibold">{testimonial.name}</h3>
                    <div className="flex">
                      {Array.from({ length: testimonial.rating }, (_, i) => (
                        <svg key={i} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M10 15l-5.878 3.09 1.121-6.53L0 6.52l6.586-1.017L10 0l2.414 5.503L20 6.52l-5.243 4.04 1.121 6.53z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 font-montserrat font-medium	italic">{testimonial.comment}</p>
              </div>
            ))}
          </div>

          {/* Scroll Buttons */}
          <div className="flex flex-row absolute pl-[10%] right-20 bottom-5">
            {/* Left Button with Black Arrow and Border */}
            <button
              onClick={scrollLeft}
              className="flex items-center justify-center w-10 h-10 rounded-full text-black border-2 border-black hover:bg-gray-300 transition duration-300 mx-2"
            >
              {/* Left Arrow (with tail) */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Right Button with White Arrow */}
            <button
              onClick={scrollRight}
              className="flex items-center justify-center w-10 h-10 rounded-full bg-[#13192d] text-white hover:bg-blue-600 transition duration-300 mx-2"
            >
              {/* Right Arrow (with tail) */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
