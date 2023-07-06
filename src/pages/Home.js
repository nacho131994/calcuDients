import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div className="main-page">
      <h1 className="main-page-subitle">
        Elige la receta que quieras calcular:
      </h1>
      <div className="buttons">
        <NavLink to="pesto">PESTO</NavLink>

        <NavLink to="hummus">HUMMUS</NavLink>
      </div>
    </div>
  );
};

export default Home;
