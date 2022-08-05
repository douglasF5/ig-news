import * as React from "react";
import { SVGProps } from "react";

const SvgSun = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 .5a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0V1a.5.5 0 0 1 .5-.5Zm0 7a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9ZM6.5 12a5.5 5.5 0 1 1 11 0 5.5 5.5 0 0 1-11 0Zm6 9a.5.5 0 0 0-1 0v2a.5.5 0 0 0 1 0v-2ZM3.866 3.867a.5.5 0 0 1 .708 0l1.42 1.42a.5.5 0 1 1-.708.707l-1.42-1.42a.5.5 0 0 1 0-.707Zm14.848 14.14a.5.5 0 1 0-.708.706l1.42 1.42a.5.5 0 1 0 .708-.707l-1.42-1.42ZM.5 12a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1H1a.5.5 0 0 1-.5-.5Zm20.5-.5a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2ZM5.994 18.006a.5.5 0 0 1 0 .707l-1.42 1.42a.5.5 0 1 1-.708-.707l1.42-1.42a.5.5 0 0 1 .708 0Zm14.14-13.432a.5.5 0 1 0-.708-.707l-1.42 1.42a.5.5 0 0 0 .707.707l1.42-1.42Z"
    />
  </svg>
);

export default SvgSun;
