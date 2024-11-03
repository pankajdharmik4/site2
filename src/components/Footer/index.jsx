
import { Heading, Input, Img } from "./..";
import React from "react";

export default function Footer({ ...props }) {
  return (
    <footer {...props} className={`${props.className} flex items-end mt-[150px] bg-gray-200`}>
      <div className="mt-[52px] flex w-full flex-col items-center gap-[46px]">
        <div className="container-xs lg:px-5 md:px-5">
          <div className="flex items-center justify-between gap-5 md:flex-col">
            <div className="flex w-[20%] flex-col items-start gap-3.5 self-end md:w-full md:self-auto">
              <Img
                src="images/img_footer_logo.png"
                alt="Footer Logo"
                className="h-[100px] w-[194px] rounded-[10px] object-contain"
              />
              <Heading as="p" className="self-end text-[20px] font-medium leading-10 text-gray-900 lg:text-[17px]">
                <>
4321 Invasign St, CA 12345
  < br />
  +1 123 456 789
    < br />
    info@company.com
</>
</Heading >
</div >
  <div className="flex w-[56%] items-center justify-between gap-5 md:w-full md:flex-col">
    <div className="flex w-[30%] flex-col items-start gap-2 md:w-full">
      <Heading size="headingmd" as="h4" className="text-[25px] font-semibold text-black-900 lg:text-[21px]">
        Quick Links
      </Heading>
      <ul className="!ml-6 flex flex-col items-start gap-2.5 self-stretch md:ml-0">
        <li>
          <a href="Home" target="_blank" rel="noreferrer" className="lg:text-[17px]">
            <Heading as="p" className="text-[20px] font-medium text-gray-900">
              Home
            </Heading>
          </a>
        </li>
        <li>
          <a href="#" className="lg:text-[17px]">
            <Heading as="p" className="text-[20px] font-medium text-gray-900">
              Why Invisalign?
            </Heading>
          </a>
        </li>
        <li>
          <a href="#" className="lg:text-[17px]">
            <Heading as="p" className="text-[20px] font-medium text-gray-900">
              How Invisalign Works?
            </Heading>
          </a>
        </li>
        <li>
          <a href="Gallery" target="_blank" rel="noreferrer" className="lg:text-[17px]">
            <Heading as="p" className="text-[20px] font-medium text-gray-900">
              Gallery
            </Heading>
          </a>
        </li>
        <li>
          <a href="FAQ" target="_blank" rel="noreferrer" className="lg:text-[17px]">
            <Heading as="p" className="text-[20px] font-medium text-gray-900">
              FAQ
            </Heading>
          </a>
        </li>
        <li>
          <a href="Testimonial" target="_blank" rel="noreferrer" className="lg:text-[17px]">
            <Heading as="p" className="text-[20px] font-medium text-gray-900">
              Testimonial
            </Heading>
          </a>
        </li>
        <li>
          <a href="#" className="lg:text-[17px]">
            <Heading as="p" className="text-[20px] font-medium text-gray-900">
              Contact Us
            </Heading>
          </a>
        </li>
      </ul>
    </div>
    <div className="flex w-[48%] flex-col items-start md:w-full">
      <div className="flex w-[68%] flex-col items-start gap-1.5 lg:w-full md:w-full">
        <Heading size="headingmd" as="h4" className="text-[25px] font-semibold text-black-900 lg:text-[21px]">
          Opening Hours
        </Heading>
        <Heading as="p" className="text-[20px] font-medium leading-[35px] text-gray-900 lg:text-[17px]">
          <>
            Monday - Friday: 9am - 8pm
            <br />
            Saturday: 10am - 6pm
            <br />
            Sunday: Closed
          </>
        </Heading>
      </div>
      <Heading
        size="headingmd"
        as="h4"
        className="mt-[26px] text-[25px] font-semibold text-black-900 lg:text-[21px]"
      >
        Subscribe to our Newsletter
      </Heading>
      <Input
        size="xs"
        shape="round"
        name="Email Input"
        placeholder={`Email`}
        className="mt-3 self-stretch rounded-[10px] px-8 sm:px-4"
      />
    </div>
  </div>
</div >
</div >
  <ul className="flex justify-center self-stretch bg-gray-900 py-3.5">
    <li>
      <div className="container-xs flex flex-wrap justify-end gap-[90px] px-1 lg:gap-5 lg:px-5 md:gap-5 md:px-5">
        <a href="#" className="lg:text-[17px]">
          <Heading as="p" className="text-[20px] font-medium text-white-a700">
            Privacy Policy
          </Heading>
        </a>
        <a href="#" className="lg:text-[17px]">
          <Heading as="p" className="text-[20px] font-medium text-white-a700">
            Terms and Condition
          </Heading>
        </a>
      </div>
    </li>
  </ul>
</div >
</footer >
);
}

