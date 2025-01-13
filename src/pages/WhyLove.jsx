import { data } from '../data/data'

export default function InvisalignBenefitsSection() {
  const ProcessCard = ({ title, description }) => {
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
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-6 mx-[5%]">
            {data.whyWeLove.map((d) => {
              return <ProcessCard title={d.title} description={d.description} />
            })}
          </div>
        </div>
      </div>
    </>
  );
}
