import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DisplaySingleUser from "./DisplaySingleUser/DisplaySingleUser";
import NewPost from "./NewPost/NewPost";
import { UserProvider } from "./UserContext";
import Home from "./Users/Home/Home";

function App() {
  const [posts, setPosts] = useState([]);

  return (
    <UserProvider value={[posts, setPosts]}>
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
