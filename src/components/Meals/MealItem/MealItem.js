import React from "react";

import MealItemForm from "./MealItemForm";

import styles from "./MealItem.module.css";

const MealItem = (props) => {
  return (
    <li className={styles.meal} key={props.meal.id}>
      <div>
        <h3>{props.meal.name}</h3>
        <div className={styles.description}>{props.meal.description}</div>
        <div className={styles.price}>${props.meal.price.toFixed(2)}</div>
      </div>
      <div>
        <MealItemForm id={props.meal.id} />
      </div>
    </li>
  );
};

export default MealItem;
