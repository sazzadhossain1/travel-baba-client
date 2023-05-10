import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="navbar ">
      <div className="navbar-start ">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <Link to="destination">Destination</Link>
            <Link to="blog">Blog</Link>
            <Link to="contact">Contact</Link>
            <Link className="btn" to="login">
              Login
            </Link>
          </ul>
        </div>
        <Link className="btn btn-ghost normal-case text-3xl text-white mx-auto">
          Travel Baba
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex mx-auto">
        <ul className="menu menu-horizontal px-1  text-white">
          <li>
            <Link to="news">News</Link>
          </li>

          <li className="">
            <Link to="destination">Destination</Link>
            <Link to="blog">Blog</Link>
            <Link to="contact">Contact</Link>
            <Link className="btn" to="login">
              Login
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
