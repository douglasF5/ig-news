import * as React from "react";
import { SVGProps } from "react";

const SvgFilter = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2.5 7a.5.5 0 0 1 .5-.5h18a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5Zm3 5a.5.5 0 0 1 .5-.5h12a.5.5 0 0 1 0 1H6a.5.5 0 0 1-.5-.5ZM8 16.5a.5.5 0 0 0 0 1h8a.5.5 0 0 0 0-1H8Z"
      fill={props.color}
    />
  </svg>
);

export default SvgFilter;
