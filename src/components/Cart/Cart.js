import React, { useContext } from "react";

import Button from "../UI/Button/Button";
import Modal from "../UI/Modal/Modal";
import CartItem from "./CartItem";

import CartContext from "../../store/cart-context";

import styles from "./Cart.module.css";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;

  const hasItems = cartCtx.items.length > 0;

  // remove item functionality to be passed down to cart item component
  const cartItemRemoveHandler = (id) => {};

  // add item functionality to be passed down to cart item component
  const cartItemAddHandler = (item) => {};

  // Assigning unique key and id based on items index as the unique identifier for rendering the list of items
  const cartItems = cartCtx.items.map((meal) => (
    <CartItem
      key={meal.id + cartCtx.items.indexOf(meal)}
      id={meal.id + cartCtx.items.indexOf(meal)}
      name={meal.name}
      amount={meal.amount}
      price={meal.price}
      onAdd={cartItemAddHandler.bind(null, meal)}
      onRemove={cartItemRemoveHandler.bind(null, meal.id)}
    />
  ));

  return (
    <Modal>
      <ul className={styles["cart-items"]}>{cartItems}</ul>
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={styles.actions}>
        <Button className={styles["button--alt"]} onClick={props.onClose}>
          Close
        </Button>
        {hasItems && <Button className={styles.button}>Order</Button>}
      </div>
    </Modal>
  );
};

export default Cart;
