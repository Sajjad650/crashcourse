// App.js

import React, { useState } from "react";
import MainHeader from "./components/MainHeader";
import PostsList from "./components/PostsList";

function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false); // Set initial state to false

  function hideModalHandler() {
    setModalIsVisible(false);
  }

  function showModalHandler() {
    setModalIsVisible(true);
  }

  return (
    <>
      <MainHeader onCreatePost={showModalHandler} /> {/* Correct prop name */}
      {modalIsVisible && ( // Only render PostsList when modal is visible
        <main>
          <PostsList
            isPosting={modalIsVisible}
            onStopPosting={hideModalHandler}
          />
        </main>
      )}
    </>
  );
}

export default App;
