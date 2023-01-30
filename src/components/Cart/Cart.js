import React from "react";

import Button from "../UI/Button/Button";

import styles from "./Cart.module.css";

const Cart = (props) => {
  const cartItems = [
    {
      id: "b1",
      name: "Banana Leaf Meal",
      amount: 3,
      price: 39.0,
    },
  ].map((meal) => <li>{meal.name}</li>);

  return (
    <div>
      <ul className={styles["cart-items"]}>{cartItems}</ul>
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>50.62</span>
      </div>
      <div className={styles.actions}>
        <Button className={styles["button--alt"]}>Close</Button>
        <Button className={styles.button}>Order</Button>
      </div>
    </div>
  );
};

export default Cart;
