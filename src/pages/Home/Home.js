import React, { useContext } from "react";
import Users from "../../component/Users/Users";
import "./Home.css";
import "../../shared/Sidebar/Sidebar.css"
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