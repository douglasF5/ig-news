import * as React from "react";
import { SVGProps } from "react";

const SvgMoon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.646 2.755a.5.5 0 0 1-.034.542 6.5 6.5 0 0 0 9.09 9.09l.298.403.498.046A9.5 9.5 0 1 1 11.164 2.502a.5.5 0 0 1 .482.253Zm8.692 11.04A7.5 7.5 0 0 1 10.205 3.662a8.5 8.5 0 1 0 10.133 10.133Z"
    />
  </svg>
);

export default SvgMoon;
