import * as React from "react";
import { SVGProps } from "react";

const SvgBookmark = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7 3.5A1.5 1.5 0 0 0 5.5 5v15.028l6.21-4.435a.5.5 0 0 1 .58 0l6.21 4.435V5A1.5 1.5 0 0 0 17 3.5H7Zm-1.768-.268A2.5 2.5 0 0 1 7 2.5h10A2.5 2.5 0 0 1 19.5 5v16a.5.5 0 0 1-.79.407L12 16.614l-6.71 4.793A.5.5 0 0 1 4.5 21V5a2.5 2.5 0 0 1 .732-1.768Z"
    />
  </svg>
);

export default SvgBookmark;
