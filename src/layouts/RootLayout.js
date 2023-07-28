import React from "react";
import { NavLink, Outlet, Link } from "react-router-dom";

const RootLayout = () => {
  return (
    <>
      <div className="root-layout">
        <header>
          <nav>
            <h1>IngredientsCalculator</h1>
            {/* <img src="images\branding.jpg" /> */}

            <NavLink to="/">
              <p className="navButtons">HOME</p>
            </NavLink>
            <NavLink to="pesto">
              {" "}
              <p className="navButtons">PESTO</p>
            </NavLink>
            <NavLink to="hummus">
              {" "}
              <p className="navButtons">HUMMUS</p>
            </NavLink>
          </nav>
        </header>
      </div>

      <Outlet />
    </>
  );
};

export default RootLayout;
