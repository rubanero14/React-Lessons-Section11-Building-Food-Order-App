import React, { useState } from "react";

import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
  const [openCartModal, setOpenCartModal] = useState(false);

  const toggleCartModalHandler = (e) => {
    e.stopPropagation();
    openCartModal ? setOpenCartModal(false) : setOpenCartModal(true);
  };

  return (
    <CartProvider>
      {openCartModal && <Cart onClose={toggleCartModalHandler} />}
      <Header toggleCartModalHandler={toggleCartModalHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
