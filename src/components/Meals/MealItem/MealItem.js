import React, { useContext } from "react";

import MealItemForm from "./MealItemForm";
import CartContext from "../../../store/cart-context";

import styles from "./MealItem.module.css";

const MealItem = (props) => {
  // Establishing a connection between Cart Context and this component using useContext() hook
  const cartCtx = useContext(CartContext);

  const addToCartHandler = (amount) => {
    // When this handler is executed, we pass the relevant and latest data to Cart Context using addItems() method created in the cart-context file and pass it in as an object
    cartCtx.addItems({
      id: props.meal.id,
      name: props.meal.name,
      price: props.meal.price,
      amount: amount,
    });
  };

  return (
    <li className={styles.meal} key={props.meal.id}>
      <div>
        <h3>{props.meal.name}</h3>
        <div className={styles.description}>{props.meal.description}</div>
        <div className={styles.price}>${props.meal.price.toFixed(2)}</div>
      </div>
      <div>
        <MealItemForm id={props.meal.id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
