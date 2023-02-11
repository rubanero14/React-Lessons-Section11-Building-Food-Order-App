import { Fragment } from "react";

import styles from "./Button.module.css";

const Button = (props) => {
  return (
    <Fragment>
      {props.type !== "link" && (
        <button
          className={styles.button + " " + props.className}
          type={props.type && props.type !== "link" ? props.type : "button"}
          disabled={props.disabled}
          onClick={props.onClick}
        >
          {props.children}
        </button>
      )}
      {props.type === "link" && (
        <a
          className={styles.button + " " + props.className}
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
