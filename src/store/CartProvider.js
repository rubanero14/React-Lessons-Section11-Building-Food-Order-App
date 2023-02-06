/*
    Provider Component acts as middle person between Cart Context and Components which needs Cart data, it manages and passes state or data to relevant components.
    Similar to managing states and data in Mutations and Actions in VueX.
*/
import CartContext from "./cart-context";

const CartProvider = (props) => {
  const addItemToCartHandler = (item) => {};
  const removeItemFromCartHandler = (id) => {};

  // creating a Helper function to manage cart data, similar to data() in VueX
  const cartContext = {
    items: [],
    totalAmount: 0,
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
