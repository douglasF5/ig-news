import * as React from "react";
import { SVGProps } from "react";

const SvgHome = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12.307 1.605a.5.5 0 0 0-.614 0l-9 7A.5.5 0 0 0 2.5 9v11A2.5 2.5 0 0 0 5 22.5h14a2.5 2.5 0 0 0 2.5-2.5V9a.5.5 0 0 0-.193-.395l-9-7ZM15.5 21.5H19a1.5 1.5 0 0 0 1.5-1.5V9.245L12 2.633 3.5 9.245V20A1.5 1.5 0 0 0 5 21.5h3.5V12a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 .5.5v9.5Zm-6 0v-9h5v9h-5Z"
    />
  </svg>
);

export default SvgHome;
