import { Button, Img } from "./..";
import React from "react";

export default function UserProfile1({
  userImage = "images/img_image_252x360.png",
  beforeButton = "Before",
  ...props
}) {
  return (
    <div {...props} className={`${props.className} h-[252px] w-full relative`}>
      <Img
        src={userImage}
        alt="Featured Image"
        className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[252px] w-full flex-1 rounded-[26px] object-cover"
      />
      <Button
        shape="round"
        color="black_900_00_gray_900"
        className="absolute bottom-[-0.67px] left-0 right-0 m-auto flex-1 !rounded-bl-[26px] !rounded-br-[26px] px-[34px] font-lato font-medium sm:px-5"
      >
        {beforeButton}
      </Button>
    </div>
  );
}

