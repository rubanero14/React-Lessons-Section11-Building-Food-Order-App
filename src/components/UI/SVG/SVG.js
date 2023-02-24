import React, { Fragment } from "react";

const SVG = (props) => {
  return (
    <Fragment>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox={props.viewBox}
        fill="currentColor"
        className={props.className}
      >
        <path d={props.d} />
      </svg>
    </Fragment>
  );
};

export default SVG;
