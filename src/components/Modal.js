import React, { useEffect } from "react";
import classes from "./Model.module.css";

export default function Modal({ children, onClose }) {
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (event.target.classList.contains(classes.backdrop)) {
        onClose(); // Close the modal if clicked outside of it
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [onClose]);

  return (
    <>
      <div className={classes.backdrop} onClick={onClose}></div>
      <dialog open className={classes.modal}>
        {children}
      </dialog>
    </>
  );
}
