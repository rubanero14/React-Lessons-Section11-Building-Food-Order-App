import React from "react";

// using ReactDOM for Modal portals/teleport to body element or any targetted element in HTML for modal rendering
import ReactDOM from "react-dom";

import styles from "./Modal.module.css";

const Modal = (props) => {
  // targetted element for Modal to be teleported or portalled on Real DOM in index.html in public folder
  const modalElement = document.querySelector("#modal");

  const modal = (
    <div className={styles.backdrop}>
      <div className={styles.modal}>
        <div className={styles.content}>{props.children}</div>
      </div>
    </div>
  );
  return (
    <React.Fragment>
      {ReactDOM.createPortal(modal, modalElement)};
    </React.Fragment>
  );
};

export default Modal;
