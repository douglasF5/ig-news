import * as React from "react";
import { SVGProps } from "react";

const SvgX = (props: SVGProps<SVGSVGElement>) => (
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
      d="M18.354 6.354a.5.5 0 0 0-.708-.708L12 11.293 6.354 5.646a.5.5 0 1 0-.708.708L11.293 12l-5.647 5.646a.5.5 0 0 0 .708.708L12 12.707l5.646 5.647a.5.5 0 0 0 .708-.708L12.707 12l5.647-5.646Z"
      fill={props.color}
    />
  </svg>
);

export default SvgX;
