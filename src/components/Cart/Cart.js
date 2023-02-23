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
  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id); // calling remove item fn in the cart context store and passing the id of the items to be removeds
  };

  // add item functionality to be passed down to cart item component
  const cartItemAddHandler = (item) => {
    cartCtx.addItems({ ...item, amount: 1 }); // calling add item logic in the cart context store and passing an object consists of items to be added and increase by 1
  };

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
