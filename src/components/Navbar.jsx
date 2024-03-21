import React from "react";
import "./navbar.css";
import { navLinks } from "./utils";

function Navbar() {
  return (
    <div className="nav-bar">
      <a href="#">LOGO</a>
      <ul>
        {navLinks.map((link, i) => {
          return (
            <li key={i}>
              <a href="#">{link}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Navbar;

export const array = [1, 2, 3, 4, 5];
export const object = { name: "John" };

