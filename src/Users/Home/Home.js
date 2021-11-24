import React, { useContext } from "react";
import Sidebar from "../../Sidebar/Sidebar";
import Users from "../Users";
import "./Home.css";
import "../../Sidebar/Sidebar.css"
import UserContext from "../../UserContext";

const Home = () => {
  const {sidebar} = useContext(UserContext);
  const contextValue = sidebar;
  
  return (
    <div>     
        <contextValue.Sidebar />     
        <Users></Users>  
    </div>
  );
};

export default Home;