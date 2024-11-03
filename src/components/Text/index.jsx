import React from "react";

const sizes = {
  textxl: "text-[26px] font-normal not-italic lg:text-[22px] md:text-[24px] sm:text-[22px]",
};

const Text = ({ children, className = "", as, size = "textxl", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text-gray-900 font-montserrat ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };

