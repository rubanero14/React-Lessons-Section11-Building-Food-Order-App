import React from "react";

import CartIcon from "../Cart/CartIcon";
import Button from "../UI/Button/Button";

import styles from "./HeaderCartButton.module.css";

const HeaderCartButton = () => {
  return (
    <Button className={styles.button}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>3</span>
    </Button>
  );
};

export default HeaderCartButton;
