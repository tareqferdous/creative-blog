import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DisplaySingleUser from "./DisplaySingleUser/DisplaySingleUser";
import NewPost from "./NewPost/NewPost";
import { UserProvider } from "./UserContext";
import Home from "./Users/Home/Home";

function App() {
  const [posts, setPosts] = useState([]);
  const [postData, setPostData] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const toggleModal = () => setOpenModal(openModal => !openModal);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts`)
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, [postData]);

  return (
    <UserProvider 
    value={{post:[posts, setPosts], 
    toggle:[postData, setPostData],
    modal: [openModal, toggleModal]
    }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="newPost" element={<NewPost />} />
          <Route path="/users/:id" element={<DisplaySingleUser />} />
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
