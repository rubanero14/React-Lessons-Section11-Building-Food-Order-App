import React from "react";

import Input from "../../UI/Input/Input";
import Button from "../../UI/Button/Button";

import styles from "./MealItemForm.module.css";

const MealItemForm = (props) => {
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
      <Button>+ Add</Button>
    </form>
  );
};

export default MealItemForm;
