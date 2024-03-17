import React from "react";
import "./NavBar.css";
import { FaRegHeart, FaRegUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../components/images/logo.png";

const Nav = ({ handleInputChange, query }) => {
  return (
    <nav>
       <div className="logo">
          <img src={logo} alt="" />
        </div>
      <div className="nav-container">
        <input
          className="search-input"
          type="text"
          onChange={handleInputChange}
          value={query}
          placeholder="Enter your search."
        />
      </div>
      <div className="profile-container">
        <Link to="/favourite">
          <FaRegHeart className="nav-icons" />
        </Link>

        <a href="">
          <FaRegUserCircle className="nav-icons" />
        </a>
      </div>
    </nav>
  );
};
export default Nav;
