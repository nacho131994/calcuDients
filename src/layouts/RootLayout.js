import React from "react";
import { NavLink, Outlet, Link } from "react-router-dom";

const RootLayout = () => {
  return (
    <>
      <div className="root-layout">
        <header>
          <nav>
            <h1 Link to="/">
              CalcuDients
            </h1>
            <NavLink to="/">HOME</NavLink>
            <NavLink to="pesto">PESTO</NavLink>
            <NavLink to="hummus">HUMMUS</NavLink>
          </nav>
        </header>
      </div>
      <Outlet />
    </>
  );
};

export default RootLayout;
