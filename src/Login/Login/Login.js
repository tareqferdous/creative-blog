import React, { useState } from "react";
import { Link } from "react-router-dom";
import './Login.css'

const Login = () => {
    const [loginData, setLoginData] = useState({})

    const handleOnChange = (e) => {
        const field = e.target.name;
        const value =  e.target.value;
        const newLoginData = {...loginData};
        newLoginData[field] = value;
        setLoginData(loginData);
    }
    
    const handleLoginSubmit = (e) => {

        e.preventDefault();
    }

  return (
    <div className="body">
      <div class="center">
        <h1>Login</h1>
        <form onSubmit={handleLoginSubmit} method="post">
          <div class="txt_field">
            <input onSubmit={handleOnChange} name="email" type="email" required />
            <span></span>
            <label>Email</label>
          </div>
          <div class="txt_field">
            <input onSubmit={handleOnChange} name="password" type="password" required />
            <span></span>
            <label>Password</label>
          </div>
          <input type="submit" value="Login" />
          <div class="signup_link">
            Not a member? <Link to="/register">Signup</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
