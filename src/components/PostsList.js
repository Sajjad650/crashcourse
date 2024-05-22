import React, { useState } from "react";
import Post from "./Post";
import classes from "./PostsList.module.css";
import NewPost from "./NewPost";
import Modal from "./Modal";

export default function PostsList({ isPosting, onStopPosting }) {
  const [posts, setPosts] = useState([]);
  const [enteredBody, setEnteredBody] = useState("");
  const [enteredAuthor, setEnteredAuthor] = useState("");

  function bodyChangeHandler(event) {
    setEnteredBody(event.target.value);
  }

  function authorChangeHandler(event) {
    setEnteredAuthor(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const newPost = {
      author: enteredAuthor,
      body: enteredBody,
    };
    setPosts((prevPosts) => [...prevPosts, newPost]);
    setEnteredAuthor("");
    setEnteredBody("");
    onStopPosting();
  }

  function handleCancel() {
    onStopPosting();
  }

  return (
    <>
      {isPosting && (
        <Modal onClose={handleCancel}>
          <NewPost
            onBodyChange={bodyChangeHandler}
            onAuthorChange={authorChangeHandler}
            onSubmit={handleSubmit}
            onCancel={handleCancel}
          />
        </Modal>
      )}

      {posts.length === 0 ? (
        <div style={{ textAlign: "center", color: "white" }}>
          <h2>There are no posts yet</h2>
          <p>Start adding some!</p>
        </div>
      ) : (
        <ul className={classes.posts}>
          {posts.map((post) => (
            <Post key={post.id} author={post.author} body={post.body} />
          ))}
        </ul>
      )}
    </>
  );
}
