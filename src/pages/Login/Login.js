import React, { useContext, useState } from "react";
import { useLocation } from "react-router";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { addToDb } from "../../shared/LocalStorage/LocalStorage";
import UserContext from "../../UserContext";
import "./Login.css";

const Login = () => {
  const { login } = useContext(UserContext);
  const [loginData, setLoginData] = login;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();
  const location = useLocation();

  let {from} = location.state || { from: {pathname: "/"}};

  const handleLoginSubmit = (e) => {
    e.preventDefault();

    const newLoginData = { email: email, password: password };
    setLoginData({...loginData, newLoginData});
    addToDb('user-info', newLoginData?.email);
    history.replace(from);
    console.log(loginData);
  };

  return (
    <div className="body">
      <div class="center">
        <h1>Login</h1>
        <form onSubmit={handleLoginSubmit} method="post">
          <div class="txt_field">
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              autocomplete="off"
              name="email"
              type="email"
              placeholder="Email"
              required
            />
          </div>
          <div class="txt_field">
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              autocomplete="off"
              name="password"
              type="password"
              placeholder="Password"
              required
            />
          </div>
          <input type="submit" value="Login" />
          <div class="signup_link">
            Not a member? <Link to="/register">Signup</Link>
           
          </div>
        </form>
        
      </div>
      <div>
        <p>{loginData?.newLoginData?.email}</p>
      </div>
    </div>
  );
};

export default Login;
