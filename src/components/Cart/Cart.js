import React from "react";

import Button from "../UI/Button/Button";
import Modal from "../UI/Modal/Modal";

import styles from "./Cart.module.css";

const Cart = (props) => {
  const cartItems = [
    {
      id: "b1",
      name: "Banana Leaf Meal",
      amount: 3,
      price: 39.0,
    },
  ].map((meal) => <li key={meal.id}>{meal.name}</li>);

  return (
    <Modal>
      <ul className={styles["cart-items"]}>{cartItems}</ul>
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>50.62</span>
      </div>
      <div className={styles.actions}>
        <Button className={styles["button--alt"]} onClick={props.onClose}>
          Close
        </Button>
        <Button className={styles.button}>Order</Button>
      </div>
    </Modal>
  );
};

export default Cart;
