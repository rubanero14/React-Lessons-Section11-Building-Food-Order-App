import React from "react";

import styles from "./MealsSummary.module.css";

const MealsSummary = () => {
  return (
    <section className={styles.summary}>
      <h2>Scrumptious meals delivered to you at your doorstep.</h2>
      <p>
        Choose your favorite takeouts from our broad selection of available
        meals and enjoy a scrumptious at home round the clock.
      </p>
      <p>
        All our meals are cooked with high-quality ingredients, just-in-time and
        by experienced Michelin starred chefs!
      </p>
    </section>
  );
};

export default MealsSummary;
