import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div className="main-page">
      <div className="buttons">
        <NavLink to="pesto">PESTO</NavLink>
        <NavLink to="hummus">HUMMUS</NavLink>
      </div>
    </div>
  );
};

export default Home;
