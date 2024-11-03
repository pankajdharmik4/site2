import PropTypes from "prop-types";

import React from "react";

const shapes = {
  round: "rounded-bl-[26px] rounded-br-[26px]",
};
const variants = {
  fill: {
    white_A700: "bg-white-a700 text-gray-900",
    gray_900: "bg-gray-900 text-white-a700",
  },
  gradient: {
    black_900_00_gray_900: "bg-gradient text-white-a700",
  },
};
const sizes = {
  sm: "h-[60px] px-[34px] text-[28px]",
  xs: "h-[52px] px-[34px] text-[21px]",
  md: "h-[66px] px-[34px] text-[24px]",
  lg: "h-[114px] px-[34px] text-[29px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant = "gradient",
  size = "lg",
  color = "gray_900",
  ...restProps
}) => {
  return (
    <button
      className={`${className} bg-[#13192d]  flex flex-row items-center justify-center text-center cursor-pointer whitespace-nowrap ${shape && shapes[shape]} ${size && sizes[size]} ${variant && variants[variant]?.[color]}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["sm", "xs", "md", "lg"]),
  variant: PropTypes.oneOf(["fill", "gradient"]),
  color: PropTypes.oneOf(["white_A700", "gray_900", "black_900_00_gray_900"]),
};

export { Button };

