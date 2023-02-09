import React, { useState, useEffect } from "react";

import Input from "../../UI/Input/Input";
import Button from "../../UI/Button/Button";

import styles from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 500);

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
  return (
    <form className={styles.form}>
      <Input
        label="Amount"
        input={{
          id: "amount-  " + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <Button>{buttonText("+ Add")}</Button>
    </form>
  );
};

export default MealItemForm;
