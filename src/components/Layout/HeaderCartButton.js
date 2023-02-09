/* eslint-disable no-restricted-globals */
import React, { useState, useEffect } from "react";

import CartIcon from "../Cart/CartIcon";
import Button from "../UI/Button/Button";
import SVG from "../UI/SVG/SVG";

import styles from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 500);

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

  const buttonText = (text) => (!isMobile ? text : "");
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
        <span>{buttonText("Source Code")}</span>
      </Button>
      <Button className={styles.button} onClick={props.onClick}>
        <span className={styles.icon}>
          <CartIcon />
        </span>
        <span className={!isMobile ? styles.cartBtnText : ""}>
          {buttonText("Cart")}
        </span>
        <span className={styles.badge}>3</span>
      </Button>
    </div>
  );
};

export default HeaderCartButton;
