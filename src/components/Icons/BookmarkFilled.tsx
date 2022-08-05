import * as React from "react";
import { SVGProps } from "react";

const SvgBookmarkFilled = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7 2.5A2.5 2.5 0 0 0 4.5 5v16a.5.5 0 0 0 .79.407L12 16.614l6.71 4.793A.5.5 0 0 0 19.5 21V5A2.5 2.5 0 0 0 17 2.5H7Z"
    />
  </svg>
);

export default SvgBookmarkFilled;
