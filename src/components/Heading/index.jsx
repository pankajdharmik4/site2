import React from "react";

const sizes = {
  textxs: "text-[16px] font-medium lg:text-[13px]",
  texts: "text-[20px] font-medium lg:text-[17px]",
  textmd: "text-[21px] font-medium lg:text-[17px]",
  textlg: "text-[22px] font-medium italic lg:text-[18px]",
  text2xl: "text-[29px] font-medium lg:text-[24px] md:text-[27px] sm:text-[25px]",
  headingxs: "text-[20px] font-bold lg:text-[17px]",
  headings: "text-[24px] font-semibold lg:text-[20px] md:text-[22px]",
  headingmd: "text-[25px] font-semibold lg:text-[21px] md:text-[23px] sm:text-[21px]",
  headinglg: "text-[26px] font-semibold lg:text-[22px] md:text-[24px] sm:text-[22px]",
  headingxl: "text-[34px] font-bold lg:text-[28px] md:text-[32px] sm:text-[30px]",
  heading2xl: "text-[66px] font-bold lg:text-[66px] md:text-[48px]",
  heading3xl: "text-[80px] font-bold lg:text-[80px] md:text-[48px]",
};

const Heading = ({ children, className = "", size = "texts", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-gray-900 font-montserrat ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };

