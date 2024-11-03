import { Button, Heading, Img } from "./..";
import React from "react";

export default function Header({ ...props }) {
  return (
    <header
      {...props}
      className={`${props.className} flex sm:flex-col justify-between items-center w-[1706px] top-[4%] right-0 left-0 gap-5 mx-[106px] my-auto lg:mx-0 md:mx-0 flex-1 absolute sm:relative`}
    >
      <Img src="images/img_image_2.png" alt="Secondary Image" className="h-[108px] w-[14%] object-contain md:w-full" />
      <ul className="flex flex-wrap gap-14 lg:gap-5 md:gap-5">
        <li>
          <a href="#" className="lg:text-[17px]">
            <Heading size="textmd" as="p" className="text-[21.33px] font-medium text-white-a700">
              Why Invisalign
            </Heading>
          </a>
        </li>
        <li>
          <a href="#" className="lg:text-[17px]">
            <Heading size="textmd" as="p" className="text-[21.33px] font-medium text-white-a700">
              About Us
            </Heading>
          </a>
        </li>
        <li>
          <a href="#" className="lg:text-[17px]">
            <Heading size="textmd" as="p" className="text-[21.33px] font-medium text-white-a700">
              FAQ
            </Heading>
          </a>
        </li>
        <li>
          <a href="#" className="lg:text-[17px]">
            <Heading size="textmd" as="p" className="text-[21.33px] font-medium text-white-a700">
              Gallery
            </Heading>
          </a>
        </li>
        <li>
          <a href="#" className="lg:text-[17px]">
            <Heading size="textmd" as="p" className="text-[21.33px] font-medium text-white-a700">
              Testimonial
            </Heading>
          </a>
        </li>
      </ul>
      <Button
        size="xs"
        variant="fill"
        className="mr-[140px] min-w-[200px] rounded-[12px] border-[1.335px] border-solid border-white-a700 px-[34px] font-medium md:mr-0 sm:px-4"
      >
        Book Now
      </Button>
    </header>
  );
}

