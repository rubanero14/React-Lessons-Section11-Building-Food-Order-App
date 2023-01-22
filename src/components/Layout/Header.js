// Fragment is React.Fragment, when we import Fragment in destructured manner, we can directly use as Fragment instead of React.Fragment
import { Fragment } from "react";
import HeaderImage from "../../assets/meals.jpg";
import styles from "./Header.module.css";

const Header = (props) => {
  return (
    <Fragment>
      <header className={styles.header}>
        <h1>Food Order App</h1>
        <button>Cart</button>
      </header>
      <div className={styles["main-image"]}>
        <img
          src={HeaderImage}
          alt="Buffet of delicious meals spread on a table"
        />
      </div>
    </Fragment>
  );
};

export default Header;
