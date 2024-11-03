import { Heading, Img } from "./..";
import React from "react";

export default function UserProfile({
  userImage = "images/img_image_8.png",
  userDescription = "Customised and comfortable fit with gumline trimming.",
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} flex sm:flex-col justify-center items-center w-full gap-[26px] p-[46px] md:p-5 sm:p-4 bg-white-a700 shadow-sm rounded-[46px]`}
    >
      <div className="w-[12%] rounded-[40px] bg-gray-900 p-1">
        <Img src={userImage} alt="Product Image" className="h-[70px] w-[70px] object-cover" />
      </div>
      <Heading
        size="text2xl"
        as="p"
        className="w-[72%] self-end text-[29.33px] font-medium leading-[37px] text-black-900 sm:w-[72%] sm:self-auto sm:text-[24px]"
      >
        {userDescription}
      </Heading>
    </div>
  );
}

