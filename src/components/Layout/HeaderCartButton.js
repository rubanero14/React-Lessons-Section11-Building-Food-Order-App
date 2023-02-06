import React from "react";

import CartIcon from "../Cart/CartIcon";
import Button from "../UI/Button/Button";
import SVG from "../UI/SVG/SVG";

import styles from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  return (
    <div className={styles.wrapper}>
      <Button
        className={styles.button}
        type="link"
        href="https://github.com/rubanero14/React-Lessons-Section11-Building-Food-Order-App"
      >
        <span className={styles.icon}>
          <SVG
            d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z"
            viewBox="0 0 640 512"
          />
        </span>
        Source Code
      </Button>
      <Button className={styles.button} onClick={props.onClick}>
        <span className={styles.icon}>
          <CartIcon />
        </span>
        <span class={styles.cartBtnText}>Your Cart</span>
        <span className={styles.badge}>3</span>
      </Button>
    </div>
  );
};

export default HeaderCartButton;
