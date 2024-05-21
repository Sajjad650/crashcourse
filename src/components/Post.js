import React from 'react';
import  classes from "./Post.module.css";

//const name = ["Maximilain", "Malian"];
export default function Post(props) {
    //const chosenName= Math.random()>0.5? name[0] :name[1];

  return (
    <ui className= {classes.post}>
      
      <p className={classes.author} >{props.author}</p>
      <p  className={classes.text}>{props.body}</p>
      
    </ui>
  )
}
