import * as React from "react";
import Svg, { Defs, Path, G } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: marker */

function SvgComponent(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" width={640} height={640} {...props}>
      <Defs></Defs>
      <Path
        transform="translate(137.354 16.857) matrix(2 0 0 2 -177 -198) matrix(2.00597 0 0 2.67241 -171.579 -362.452)"
        d="M253 230a78 30 0 11-155.994-.38"
        fill="none"
        fillOpacity={1}
        fillRule="nonzero"
        stroke="#000"
        strokeWidth={0.86380678}
        strokeLinecap="round"
        strokeLinejoin="miter"
        strokeMiterlimit={4}
        strokeDasharray="none"
        strokeDashoffset={0}
        strokeOpacity={1}
      />
      <Path
        transform="translate(137.354 16.857) matrix(2 0 0 2 -177 -198) matrix(2.00597 0 0 -2.67397 -171.579 866.056)"
        d="M253 230a78 30 0 11-155.853-1.842"
        fill="none"
        fillOpacity={1}
        fillRule="nonzero"
        stroke="#000"
        strokeWidth={0.8635543}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit={2.5999999}
        strokeDasharray="1.72710849,.86355426"
        strokeDashoffset={0}
        strokeOpacity={1}
      />
      <Path
        d="M185.438 242.313c-51.215 32.96-76.822 49.447-89.625 57.687l-11.22 7.219-1.406.906c-.1.064-.13.078-.156.094-.012.008-.028.029-.031.031l.531.844.531.844s.009-.016 102.438-65.938l-1.063-1.688z"
        transform="translate(137.354 16.857) matrix(2 0 0 2 -177 -198) matrix(1.01411 0 0 .98542 .848 7.526)"
        fill="#000"
        fillOpacity={1}
        fillRule="evenodd"
        stroke="none"
        strokeWidth={2}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit={4}
        strokeDasharray="none"
        strokeOpacity={1}
      />
      <Path
        d="M179.237 247.493l-1.198 5.529 9.607-10.94-13.937 4.213 5.528 1.198zM90.263 304.757l1.198-5.529-9.607 10.94 13.937-4.213-5.528-1.198z"
        transform="translate(137.354 16.857) matrix(2 0 0 2 -177 -198) matrix(1.01411 0 0 .98542 .848 7.526)"
        fillRule="evenodd"
        stroke="#000"
        strokeWidth=".40013471pt"
        markerStart="none"
      />
      <Path
        transform="translate(137.354 16.857) matrix(2 0 0 2 -177 -198) matrix(.50037 0 0 .5 4.754 33.875)"
        d="M661.852 433.934a312.541 312.541 0 11-625.082 0 312.541 312.541 0 11625.082 0z"
        opacity={1}
        fill="none"
        fillOpacity={1}
        fillRule="nonzero"
        stroke="#000"
        strokeWidth={3.99851203}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit={4}
        strokeDasharray="none"
        strokeDashoffset={0}
        strokeOpacity={1}
      />
      <G>
        <G
          fontStyle="normal"
          fontVariant="normal"
          fontWeight={400}
          fontStretch="normal"
          letterSpacing="normal"
          wordSpacing="normal"
          textAnchor="start"
          fill="none"
          fillOpacity={1}
          stroke="#000"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit={10.43299961}
          strokeDasharray="none"
          strokeDashoffset={0}
          strokeOpacity={1}
        >
          <Path
            d="M460.38 408.94l-.01-.07-.02-.08-.01-.07-.02-.08-.03-.16-.04-.16-.04-.16-.03-.16-.04-.16-.04-.16-.01-.08-.02-.07-.02-.07-.01-.07-.02-.07-.01-.07-.01-.06-.02-.06-.01-.05-.01-.06-.01-.05v-.04l-.01-.04v-.04l-.01-.03v-.02c0-.9.7-1.35 1.45-1.35.6 0 1.5.4 1.84 1.4.1.2 1.8 6.97 1.99 7.87.4 1.64 1.3 5.13 1.6 6.47.2.65 1.59 2.99 2.79 4.09.4.34 1.84 1.64 3.99 1.64 1.29 0 2.03-.6 2.09-.6-1.5-.25-2.59-1.44-2.59-2.73 0-.8.54-1.75 1.89-1.75 1.34 0 2.74 1.14 2.74 2.94 0 1.74-1.6 3.24-4.13 3.24-3.24 0-5.43-2.44-6.38-3.84-.4 2.24-2.19 3.84-4.53 3.84-2.3 0-3.24-1.95-3.69-2.84-.9-1.7-1.54-4.68-1.54-4.83 0-.5.49-.5.59-.5.5 0 .55.05.85 1.14.84 3.54 1.84 5.93 3.64 5.93.84 0 1.54-.4 1.54-2.29 0-1.04-.15-1.59-.8-4.18l-2.89-11.51z"
            transform="translate(137.354 16.857) matrix(2 0 0 2 -177 -198) translate(-95.58 104.823) matrix(.77143 0 0 -.77143 -135 480)"
            xmlSpace="preserve"
            fill="#000"
            strokeWidth={0}
          />
        </G>
      </G>
    </Svg>
  );
}

export default SvgComponent;
