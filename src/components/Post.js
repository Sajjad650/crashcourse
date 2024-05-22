import React from "react";
import classes from "./Post.module.css";

//const name = ["Maximilain", "Malian"];
export default function Post({ author, body }) {
  //const chosenName= Math.random()>0.5? name[0] :name[1];

  return (
    <ui className={classes.post}>
      <p className={classes.author}>{author}</p>
      <p className={classes.text}>{body}</p>
    </ui>
  );
}
