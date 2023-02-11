import React, { useState, useEffect, useRef } from "react";

import Input from "../../UI/Input/Input";
import Button from "../../UI/Button/Button";

import styles from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  // Watch and update changes in input value below and store it in a variable using useRef() hook
  const amountInputRef = useRef();

  const [isMobile, setIsMobile] = useState(window.innerWidth < 500);

  const [error, setError] = useState(false);

  //choose the screen size
  const handleResize = () => {
    if (window.innerWidth < 500) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  // create an event listener
  useEffect(() => {
    window.addEventListener("resize", handleResize);
  }, [isMobile]);

  const buttonText = (text) => (!isMobile ? text : "+");

  const submitHandler = (e) => {
    e.preventDefault();

    // for accessing useRef() values, always need to access using .current.value chain, and returns value as a string, even the input is a type of number
    const enteredAmount = +amountInputRef.current.value;

    // Gatekeeping and error handling logic
    if (
      amountInputRef.current.value.trim().length === 0 ||
      enteredAmount < 1 ||
      enteredAmount > 5
    ) {
      return setError(true);
    }

    // Passing latest value from input to Cart Context store state manager using function passed down using props
    props.onAddToCart(enteredAmount);
    setError(false);
  };

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef} // Forwarding ref value into child component
        label="Amount"
        input={{
          id: "amount-" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <Button type="submit">{buttonText("+ Add")}</Button>
      {error && <p>Please ensure choose a valid value in betwen 1 to 5</p>}
    </form>
  );
};

export default MealItemForm;
