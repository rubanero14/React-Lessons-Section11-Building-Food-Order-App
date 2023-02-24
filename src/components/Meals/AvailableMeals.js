import React from "react";

import Card from "../UI/Card/Card";
import MealItem from "./MealItem/MealItem";

import styles from "./AvailableMeals.module.css";

const DUMMY_MEALS = [
  {
    id: "a1",
    name: "Banana Leaf Meal",
    description:
      "A full spread of Banana Leaf Meal from southern parts of India",
    price: 15.0,
  },
  {
    id: "b1",
    name: "Cow Milk Filtered Coffee",
    description: "Finest filtered coffee from southern parts of India",
    price: 4.5,
  },
  {
    id: "c1",
    name: "Cow Milk Chai",
    description: "Finest chai from northern parts of India",
    price: 16.5,
  },
  {
    id: "d1",
    name: "Chicken 65",
    description:
      "Tasty and scruptuous fried chicken with selected choices of Indian spices",
    price: 15.5,
  },
  {
    id: "e1",
    name: "Palak Paneer",
    description:
      "Indian cottage cheese tossed into aromatic and spiced blend of spinaches",
    price: 17.99,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem meal={meal} key={meal.id} id={meal.id} />
  ));
  return (
    <section className={styles.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
