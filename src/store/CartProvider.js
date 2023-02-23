/*
    Provider Component acts as middle person between Cart Context and Components which needs Cart data, it manages and passes state or data to relevant components.
    Similar to managing states and data in Mutations and Actions in VueX.
*/
import { useReducer } from "react";

import CartContext from "./cart-context";

// Snapshot of default cart state object and returned in cartReducer below
const defaultCartState = {
  items: [],
  totalAmount: 0,
};

// Store for managing cart data
const cartReducer = (state, action) => {
  // Initializing variables
  let updatedItem;
  let updatedItems;
  let existingCartItemIndex;
  let updatedTotalAmount;
  let existingCartItem;

  switch (action.type) {
    case "ADD":
      // new total amount is updated as below
      updatedTotalAmount =
        state.totalAmount + action.item.price * action.item.amount;

      // Find if item added into cart already exist in the cart already, if matches, returns its index
      existingCartItemIndex = state.items.findIndex(
        (item) => item.id === action.item.id
      );

      // Access the cart for existing cart item if exist, else returns value null
      existingCartItem = state.items[existingCartItemIndex];

      if (existingCartItem) {
        // assigning cart item object and new amount value into updatedItem object
        updatedItem = {
          ...existingCartItem, // deep copy of existing cart item if exist
          amount: existingCartItem.amount + action.item.amount, // adding existing cart total amount with new item entry amount
        };

        updatedItems = [...state.items]; // Copying the existing items snapshot into updatedItems array
        updatedItems[existingCartItemIndex] = updatedItem; // replacing the existing meal with new amount and count value if its exist
      } else {
        // If no existing item found in the cart or first time adding item into the cart
        updatedItem = { ...action.item }; // Deep copy current dispatched item into updated item object

        // adding and updating array with new data and returning a new array using .concat method, similar to .push(), it pushes data into an array, but not the existing one
        // but a new one, .concat takes action.item as arguement dispatched from component below
        updatedItems = state.items.concat(updatedItem);
      }

      // returning a new state snapshot with updated values to default store snapshot
      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount,
      };

    case "REMOVE":
      existingCartItemIndex = state.items.findIndex(
        (item) => item.id === action.id
      );

      existingCartItem = state.items[existingCartItemIndex];

      updatedTotalAmount = state.totalAmount - existingCartItem.price;

      if (existingCartItem.amount === 1) {
        updatedItems = state.items.filter((item) => item.id !== action.id); // Filtering out existing cart item if its amount is less than 1
      } else {
        updatedItem = {
          ...existingCartItem,
          amount: existingCartItem.amount - 1, // Reducing amount of cart item by 1 for every function call
        };

        updatedItems = [...state.items];

        updatedItems[existingCartItemIndex] = updatedItem; // Overriding existing value with new updated item object
      }

      // returning a new state snapshot with updated values to default store snapshot
      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount,
      };

    default:
      return defaultCartState;
  }
};

const CartProvider = (props) => {
  // Created a cart state manager using useReducer where it takes 2 args, 1st is cart reducer fn and 2nd is default cart state object snapshot
  // assigned to constant variable where its uses array destructuring method to assign 2 values, which is current cart state and a dispatch action fn
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  // Add item to cart function algo
  const addItemToCartHandler = (item) => {
    // We will dispatch the new state into the store state manager outside this component with unique identifier/type with the action so the store manager understands
    // What type of actions we are dispatching and right state values are updated accordingly, in this scenario we will send ADD (with all caps) as an identifier
    // the dispatch action function takes 2 args, 1st is and object which includes identifier/type and item value
    dispatchCartAction({ type: "ADD", item: item });
  };

  // Remove item from cart function algo
  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };

  // creating a Helper function to manage cart data, similar to data() in VueX
  const cartContext = {
    items: cartState.items, // assigned dynamic values from reducer state manager to respective keys
    totalAmount: cartState.totalAmount, // assigned dynamic values from reducer state manager to respective keys
    addItems: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
