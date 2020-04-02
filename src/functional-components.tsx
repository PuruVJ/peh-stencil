import { h } from "@stencil/core";

export const MDIIcon = ({ size = 24, path, color = "black" }) => (
  <svg
    viewBox={`0 0 ${size} ${size}`}
    height={size}
    width={size}
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d={path}></path>
  </svg>
);
