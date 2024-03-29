import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [loginData, setLoginData] = useState({});

  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    console.log(field, value)
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(loginData);
  };

  const handleLoginSubmit = (e) => {
    if (loginData.password !== loginData.password2) {
      alert("Password did not matched");
      return;
    }
    e.preventDefault();
  };

  return (
    <div className="body">
      <div class="center">
        <h1>Registration</h1>
        <form onSubmit={handleLoginSubmit} method="post">
          <div class="txt_field">
            <input
              onChange={handleOnChange}
              name="email"
              type="email"
              placeholder="Email"
              required
            />
          </div>
          <div class="txt_field">
            <input
              onChange={handleOnChange}
              name="password"
              type="password"
              placeholder="Password"
              required
            />
          </div>
          <div class="txt_field">
            <input
              onChange={handleOnChange}
              name="password2"
              type="password"
              placeholder="Confirm Password"
              required
            />
          </div>
          <input type="submit" value="Register" />
          <div class="signup_link">
            Already Have Account? <Link to="/login">Login</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
