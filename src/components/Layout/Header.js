// Fragment is React.Fragment, when we import Fragment in destructured manner, we can directly use as Fragment instead of React.Fragment
import { Fragment } from "react";

import HeaderCartButton from "./HeaderCartButton";

import styles from "./Header.module.css";

const Header = (props) => {
  return (
    <Fragment>
      <header className={styles.header}>
        <h1>Banana Leaf Meals</h1>
        <HeaderCartButton
          className={styles.button}
          onClick={props.toggleCartModalHandler}
        />
      </header>
      <div className={styles["main-image"]}>
        <img
          src="https://raw.githubusercontent.com/rubanero14/Banana-Leaf-Meal-Order-App-React-Side-Project/main/meals.7c9b8f27f7f1469609e2.jpg"
          alt="Buffet of delicious meals spread on a table"
        />
      </div>
    </Fragment>
  );
};

export default Header;
