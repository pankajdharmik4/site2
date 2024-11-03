export default function InvisalignBenefitsSection() {
  return (
    <>
      {/* Invisalign benefits section */}
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-6">
          {/* Section Heading and Side Text */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-10 md:mx-[10%]">
            <h2 className="font-lato text-3xl font-bold text-gray-800 mb-4 md:mb-0 ">
              Why We Love Invisalign?
            </h2>
            <p className="text-sm md:text-lg text-gray-600 md:pr-20 text-center md:text-left font-montserrat font-normal">
              Our Invisalign treatment can address a wide <br /> range of cosmetic dental issues such as:
            </p>
          </div>

          {/* Cards Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:mx-[10%]">
            {/* Card 1 */}
            <div className="bg-white border border-gray-200 rounded-3xl p-4 flex items-center">
              <div className="bg-[#13192d] rounded-full h-16 w-16 flex items-center justify-center mr-4">
                <img 
                  src="/images/img_image_8.png" 
                  alt="Avatar" 
                  className="h-14 w-14 object-cover rounded-full" 
                />
              </div>
              <div>
                <h3 className="text-sm md:text-lg font-montserrat font-medium">
                Invisalign aligners are tailored  <br />to fit your teeth perfectly.
                </h3>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white border border-gray-200 rounded-3xl p-4 flex items-center">
              <div className="bg-[#13192d] rounded-full h-16 w-16 flex items-center justify-center mr-4">
                <img 
                  src="/images/img_image_8.png" 
                  alt="Avatar" 
                  className="h-14 w-14 object-cover rounded-full" 
                />
              </div>
              <div>
                <h3 className="text-sm md:text-lg font-montserrat font-medium">
                Clear aligners are barely visible,<br />letting you smile confidently.
                </h3>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white border border-gray-200 rounded-3xl p-4 flex items-center">
              <div className="bg-[#13192d] rounded-full h-16 w-16 flex items-center justify-center mr-4">
                <img 
                  src="/images/img_image_8.png" 
                  alt="Avatar" 
                  className="h-14 w-14 object-cover rounded-full" 
                />
              </div>
              <div>
                <h3 className="text-sm md:text-lg font-montserrat font-medium">
                No metal brackets or wires,<br />  just smooth, comfortable aligners.
                </h3>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-white border border-gray-200 rounded-3xl p-4 flex items-center">
              <div className="bg-[#13192d] rounded-full h-16 w-16 flex items-center justify-center mr-4">
                <img 
                  src="/images/img_image_8.png" 
                  alt="Avatar" 
                  className="h-14 w-14 object-cover rounded-full" 
                />
              </div>
              <div>
                <h3 className="text-sm md:text-lg font-montserrat font-medium">
                You can take them out to eat,<br /> drink, and brush, making life easier.
                </h3>
              </div>
            </div>

            {/* Card 5 */}
            <div className="bg-white border border-gray-200 rounded-3xl p-4 flex items-center">
              <div className="bg-[#13192d] rounded-full h-16 w-16 flex items-center justify-center mr-4">
                <img 
                  src="/images/img_image_8.png" 
                  alt="Avatar" 
                  className="h-14 w-14 object-cover rounded-full" 
                />
              </div>
              <div>
                <h3 className="text-sm md:text-lg font-montserrat font-medium">
                Invisalign offers a clear plan  <br /> with predictable results.
                </h3>
              </div>
            </div>

            {/* Card 6 */}
            <div className="bg-white border border-gray-200 rounded-3xl p-4 flex items-center">
              <div className="bg-[#13192d] rounded-full h-16 w-16 flex items-center justify-center mr-4">
                <img 
                  src="/images/img_image_8.png" 
                  alt="Avatar" 
                  className="h-14 w-14 object-cover rounded-full" 
                />
              </div>
              <div>
                <h3 className="text-sm md:text-lg font-montserrat font-medium">
                Improves oral health and boosts <br /> 
                confidence with a straighter smile.
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
