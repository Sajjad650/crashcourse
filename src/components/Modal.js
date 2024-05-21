import React from 'react';
import classes from './Model.module.css';
export default function Modal({children}) {
  return (
    <>
    <div className={classes.backdrop}>
      
    </div>
    <dialog open className={classes.modal}>{children}</dialog>
    </>
  )
}
