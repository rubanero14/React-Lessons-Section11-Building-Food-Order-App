import { Fragment } from "react";

const Button = (props) => {
  return (
    <Fragment>
      {props.type !== "link" && (
        <button
          className={props.className}
          type={props.type && props.type !== "link" ? props.type : "button"}
          disabled={props.disabled}
        >
          {props.children}
        </button>
      )}
      {props.type === "link" && (
        <a
          className={props.className}
          href={props.href}
          target="_blank"
          rel="noreferrer"
        >
          {props.children}
        </a>
      )}
    </Fragment>
  );
};

export default Button;
