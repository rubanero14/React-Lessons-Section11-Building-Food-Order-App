import React from "react";

import styles from "./Input.module.css";

// Wrapping input component below using React's forwardRef() method to ensure the parent component can forward refs value directly into this component
const Input = React.forwardRef((props, ref) => {
  return (
    <div className={styles.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input
        ref={ref} // forwarded ref from parent component is accessed using ref from args and passing its value into ref key in the input element
        {...props.input} /* Use spread operator to pass all other key/value pairs of configs/props into input element */
      />
    </div>
  );
});

export default Input;
