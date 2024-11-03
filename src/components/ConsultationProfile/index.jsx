import { Heading, Img } from "./..";
import React from "react";

export default function ConsultationProfile({
  consultationImage = "images/img_layer_1.svg",
  consultationTitle = "Consultation",
  consultationDescription = "Book a consultation to discuss your dental goals and create a personalized treatment plan.",
  ...props
}) {
  return (
    <div {...props} className={`${props.className} flex flex-col items-center w-[24%] md:w-full gap-1`}>
      <div className="flex flex-col items-start gap-[22px] self-stretch">
        <div className="flex flex-col items-center justify-center rounded-[40px] bg-white-a700 p-3.5 shadow-xs">
          <Img src={consultationImage} alt="Consultation Image" className="h-[48px] w-[48px]" />
        </div>
        <Heading size="headings" as="h4" className="text-[24px] font-semibold text-white-a700">
          {consultationTitle}
        </Heading>
      </div>
      <Heading size="textxs" as="p" className="w-full text-[16px] font-medium leading-[19px] text-white-a700">
        {consultationDescription}
      </Heading>
    </div>
  );
}

