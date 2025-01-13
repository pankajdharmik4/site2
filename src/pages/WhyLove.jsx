export default function InvisalignBenefitsSection() {
  const ProcessCard = ({  title, description }) => {
    return (
      <div className="bg-white shadow-lg rounded-lg p-4 md:p-6 w-full md:w-72 h-full flex flex-col text-center md:text-left md:min-h-[250px]">
        <h3 className="text-lg md:text-xl font-semibold text-[#00102d] mb-2">{title}</h3>
        <p className="text-sm md:text-base text-gray-800 flex-grow">
          {description}
        </p>
      </div>
    );
  };

  return (
    <>
      {/* Invisalign benefits section */}
      <div className="py-16  bg-[#00102d]">
        <div className="container mx-auto px-6">
          {/* Section Heading and Side Text */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-10 md:mx-[10%]">
            <h2 className="font-lato text-4xl font-bold text-white mb-4 md:mb-0 ">
            Why We Love Dental Implants?
            </h2>
            {/* <p className="text-sm md:text-lg text-gray-600 md:pr-20 text-center md:text-left font-montserrat font-normal">
              Our Invisalign treatment can address a wide <br /> range of cosmetic dental issues such as:
            </p> */}
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-6 mx-[5%]">
          <ProcessCard 
              title="Natural-Looking Results"
              description="Dental implants look, feel, and function just like real teeth."
            />
            <ProcessCard 
              title="Long-Lasting Solution"
              description="Designed to last for years, when well looked after implants provide a durable and reliable option for replacing missing teeth."
            />
            <ProcessCard 
              title="Get your bite back!"
              description="Implants help maintain a stable bite, prevent shifting and overloading of surrounding teeth which enhances overall oral function and your ability to eat with comfort."
            />
            </div>
        </div>
      </div>
    </>
  );
}
