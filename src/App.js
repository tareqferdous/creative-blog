import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DisplaySingleUser from "./DisplaySingleUser/DisplaySingleUser";
import NewPost from "./NewPost/NewPost";
import Home from "./Users/Home/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="newPost" element={<NewPost />} />
          <Route path="/users/:id" element={<DisplaySingleUser />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
