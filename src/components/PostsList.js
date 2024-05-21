import React, { useState } from "react";
import Post from "./Post";
import classes from "./PostsList.module.css";
import NewPost from "./NewPost";
import Modal from "./Modal";

export default function PostsList({ isPosting, onStopPosting }) {
  const [posts, setPosts] = useState([]); // State to hold posts
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
      id: Date.now(),
      author: enteredAuthor,
      body: enteredBody,
    };
    setPosts((prevPosts) => [...prevPosts, newPost]); // Add new post to posts array
    setEnteredAuthor(""); // Clear input fields after submission
    setEnteredBody("");
    onStopPosting(); // Close modal after submission
  }

  return (
    <>
      {isPosting && (
        <Modal onClose={onStopPosting}>
          <NewPost
            onBodyChange={bodyChangeHandler}
            onAuthorChange={authorChangeHandler}
            onSubmit={handleSubmit}
          />
        </Modal>
      )}

      <ul className={classes.posts}>
        {posts.map((post) => (
          <Post key={post.id} author={post.author} body={post.body} />
        ))}
      </ul>
    </>
  );
}
