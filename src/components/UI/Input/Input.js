import React from "react";

import styles from "./Input.module.css";

const Input = (props) => {
  return (
    <div className={styles.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input
        {...props.input} /* Use spread operator to pass all other key/value pairs of configs/props into input element */
      />
    </div>
  );
};

export default Input;
