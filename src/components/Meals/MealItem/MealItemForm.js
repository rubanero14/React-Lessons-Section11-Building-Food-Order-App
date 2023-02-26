import React, { useState, useEffect, useRef } from "react";

import Input from "../../UI/Input/Input";
import Button from "../../UI/Button/Button";
import CartIcon from "../../Cart/CartIcon";

import styles from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  // Watch and update changes in input value below and store it in a variable using useRef() hook
  const amountInputRef = useRef();

  const addVal = () => {
    if (+amountInputRef.current.value === 5) {
      return (amountInputRef.current.value = 5);
    } else {
      return (amountInputRef.current.value = +amountInputRef.current.value + 1);
    }
  };

  const reduceVal = () => {
    if (+amountInputRef.current.value === 1) {
      return (amountInputRef.current.value = 1);
    } else {
      return (amountInputRef.current.value = +amountInputRef.current.value - 1);
    }
  };

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
      <div className={styles.addToCartForm}>
        <Input
          ref={amountInputRef} // Forwarding ref value into child component
          input={{
            id: "amount-" + props.id,
            type: "number",
            min: "1",
            max: "5",
            step: "1",
            defaultValue: 1,
          }}
        />
        <Button type="submit">
          <CartIcon className={styles.icon} />
        </Button>
      </div>
      <div className={styles.actions}>
        <Button onClick={addVal} type="button">
          +
        </Button>
        <Button onClick={reduceVal} type="button">
          −
        </Button>
      </div>
      {error && <p>Please ensure choose a valid value in betwen 1 to 5</p>}
    </form>
  );
};

export default MealItemForm;
