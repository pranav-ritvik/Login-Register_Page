// src/components/Home.js
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to the Home Page</h1>
      <Link to="/welcome">
        <button>Go to Welcome Page</button>
      </Link>
    </div>
  );
};

export default Home;
