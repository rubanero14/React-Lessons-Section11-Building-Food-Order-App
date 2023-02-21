import React from "react";

import styles from "./MealsSummary.module.css";

const MealsSummary = () => {
  return (
    <section className={styles.summary}>
      <h2>Scrumptious banana leaf meals delivered to you at your doorstep.</h2>
      <p>
        Choose your favorite takeouts from our broad selection of menu and enjoy
        a scrumptious meal at home round the clock.
      </p>
      <p>
        All our meals are cooked with high-quality ingredients, just-in-time and
        by experienced Chettinad chefs!
      </p>
    </section>
  );
};

export default MealsSummary;
