import * as React from "react";
import { SVGProps } from "react";

const SvgFileText = (props: SVGProps<SVGSVGElement>) => (
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
      d="M6 1.5A2.5 2.5 0 0 0 3.5 4v16A2.5 2.5 0 0 0 6 22.5h12a2.5 2.5 0 0 0 2.5-2.5V3.98c0-.506 0-1.187-.646-1.834-.647-.646-1.328-.646-1.834-.646h-.025a229.212 229.212 0 0 1-3.614.002l-.377-.002H6ZM20.5 20H20h.5Zm-.5 0h-.5.5Zm-.5 0a1.5 1.5 0 0 1-1.5 1.5H6A1.5 1.5 0 0 1 4.5 20V4A1.5 1.5 0 0 1 6 2.5h8.003l.373.002a230.478 230.478 0 0 0 3.627-.002c.49 0 .8.01 1.143.354.345.344.354.653.354 1.146v16ZM8 12.5a.5.5 0 0 0 0 1h8a.5.5 0 0 0 0-1H8ZM7.5 17a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1H8a.5.5 0 0 1-.5-.5ZM8 8.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1H8Z"
    />
  </svg>
);

export default SvgFileText;
