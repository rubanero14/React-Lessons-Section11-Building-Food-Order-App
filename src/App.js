import React, { useState } from "react";

import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";

function App() {
  const [openCartModal, setOpenCartModal] = useState(false);

  const toggleCartModalHandler = (e) => {
    e.stopPropagation();
    openCartModal ? setOpenCartModal(false) : setOpenCartModal(true);
  };

  return (
    <React.Fragment>
      {openCartModal && <Cart onClose={toggleCartModalHandler} />}
      <Header toggleCartModalHandler={toggleCartModalHandler} />
      <main>
        <Meals />
      </main>
    </React.Fragment>
  );
}

export default App;
