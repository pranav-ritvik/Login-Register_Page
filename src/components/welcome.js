// src/components/Welcome.js
import React from "react";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <div className="welcome">
      <h1>Welcome to Our Site</h1>
      <Link to="/register">
        <button>Register</button>
      </Link>
      <Link to="/login">
        <button>Login</button>
      </Link>
    </div>
  );
};

export default Welcome;
