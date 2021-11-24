import React, { useState } from "react";
import { Link } from "react-router-dom";
import NewPost from "../NewPost/NewPost";
import UserContext from "../UserContext";
import "./Sidebar.css";
import { IconContext } from "react-icons";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";

const Sidebar = () => {
  const [newPost, setNewPost] = useState(false);
  const {modal} = React.useContext(UserContext);
  const [openModal, toggleModal] = modal;

  const createNewPost = () => {
      setNewPost(true);
    };

  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="navbar hello">
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
          <Link style={{textDecoration: "none"}} to="/login">
          <p style={{color: "#fff", marginRight: '80px', fontSize: '18px',backgroundColor: "#e63946", padding: "7px 12px", borderRadius: "3px"}}>Login</p>
          </Link>
          
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>

            <li>
              <Link
                style={{ textDecoration: "none" }}
                to="#"
                className="menu-bars"
              >
                <span className="nav-text">
                  <AiIcons.AiFillHome style={{ marginRight: "10px"}} /> Home
                </span>
              </Link>
            </li>

            <li>
              <Link
                style={{ textDecoration: "none" }}
                to="#"
                className="menu-bars"
              >
                <span onClick={createNewPost} className="nav-text">
                  <AiIcons.AiFillHome style={{ marginRight: "10px"}} /> Create Post
                </span>
              </Link>
            </li>

            <li>
              <Link
                style={{ textDecoration: "none" }}
                to="#"
                className="menu-bars"
              >
                <span onClick={toggleModal} className="nav-text">
                  <AiIcons.AiFillHome style={{ marginRight: "10px"}} /> Modal
                </span>
              </Link>
            </li>
          </ul>
        </nav>
        {<NewPost newPost={newPost} setNewPost={setNewPost} />}
      </IconContext.Provider>
    </>
  );
};

export default Sidebar;
