/* eslint-disable no-restricted-globals */
import React, { useState, useEffect, useContext } from "react";

import CartContext from "../../store/cart-context";
import CartIcon from "../Cart/CartIcon";
import Button from "../UI/Button/Button";
import SVG from "../UI/SVG/SVG";

import styles from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);

  const { items } = cartCtx; // pulling out items from cartCtx obj using obj destructuring assignment

  const numberOfCartItems = items.reduce((currentTotal, item) => {
    return currentTotal + item.amount;
  }, 0);

  const [isMobile, setIsMobile] = useState(window.innerWidth < 500);

  // Conditional cart button animation logic
  const [badgeBumped, setBadgeBumped] = useState(false);
  const btnClasses = `${styles.badge} ${badgeBumped ? styles.bump : ""}`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }

    setBadgeBumped(true); // Adding a watcher to watch if items's value changes, then conditionally set value to true
    const timer = setTimeout(() => setBadgeBumped(false), 300);

    // Garbage collection for the timer above as useEffect is a side ffect prone React hook, its best practice to do garbage collection to avoid any side effects
    return () => {
      // return the garbage collection inside anonymous function which React understands as cleanup fn & to conclude the useEffect(), best practice to avoid side effects
      clearTimeout(timer); // clearTimeout() is a native JS method to clear any timer variables and it takes timer variable as its args
    };
  }, [items]); // Injecting items obj as dependency to trigger useEffect in event the dependency changes value

  //choose the screen size
  const handleResize = () => {
    if (window.innerWidth < 720) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  // create an event listener
  useEffect(() => {
    window.addEventListener("resize", handleResize);
  }, [isMobile]);

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
        <span className={styles.cartBtnText}>Source Code</span>
      </Button>
      <Button className={styles.button} onClick={props.onClick}>
        <span className={styles.icon}>
          <CartIcon />
        </span>
        <span className={styles.cartBtnText}>Cart</span>
        {items.length > 0 && (
          <span className={btnClasses}>{numberOfCartItems}</span>
        )}
      </Button>
    </div>
  );
};

export default HeaderCartButton;
