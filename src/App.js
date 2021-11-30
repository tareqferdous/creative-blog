import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import DisplaySingleUser from "./DisplaySingleUser/DisplaySingleUser";
import contextValue from "./GlobalComp/GlobalComp";
import Login from "./Login/Login/Login";
import Register from "./Login/Register/Register";
import NewPost from "./NewPost/NewPost";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import { UserProvider } from "./UserContext";
import Home from "./Users/Home/Home";

function App() {
  const [posts, setPosts] = useState([]);
  const [postData, setPostData] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [loginData, setLoginData] = useState({});

  const toggleModal = () => setOpenModal((openModal) => !openModal);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts`)
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, [postData]);

  return (
    <UserProvider
      value={{
        post: [posts, setPosts],
        toggle: [postData, setPostData],
        modal: [openModal, toggleModal],
        login: [loginData, setLoginData],
        sidebar: contextValue,
      }}
    >
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/post">
            <NewPost />
          </Route>
          <PrivateRoute path="/users/:id">
            <DisplaySingleUser />
          </PrivateRoute>
        </Switch>
      </Router>
    </UserProvider>
  );
}

export default App;
