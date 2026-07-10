import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import { ToastContainer, toast } from "react-toastify";
axios.defaults.withCredentials = true;

const Login = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });
  const { email, password } = inputValue;
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleError = (err) =>
    toast.error(err, {
      position: "bottom-left",
    });
  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-left",
    });

 const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const { data } = await axios.post(
      "http://localhost:3002/auth/login",   // ✅ FIXED
      { ...inputValue },
      { withCredentials: true }             // ✅ correct
    );

    console.log(data);

    const { success, message } = data;

    if (success) {
      handleSuccess(message);

      setTimeout(() => {
        window.location.href = "http://localhost:3001"; // ✅ FIXED
      }, 1000);

    } else {
      handleError(message);
    }

  } catch (error) {
    console.log(error);
  }

  setInputValue({
    email: "",
    password: "",
  });
};

  return (
    <div className="container text-center mt-5 mb-5">
      <h2 className="mb-4">Login Account</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label className="text-muted mx-3 mt-3" htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={email}
            placeholder="Enter your email"
            onChange={handleOnChange}
          />
        </div>
        <div>
          <label className="text-muted mx-3 mt-3" htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={password}
            placeholder="Enter your password"
            onChange={handleOnChange}
          />
        </div>
        <button className=" btn btn-primary fs-6 mb-3 mt-3 " type="submit">Submit</button>
        <br></br>
        <span>
          No registered account? <Link to={"/signup"}>Signup</Link>
        </span>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Login;