import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Nav = () => {
  const { book } = useSelector((state) => state);

  return (
    <div className="nav">
      <div className="container">
        <Link to="/">
          <div className="logo">Logo</div>
        </Link>
        <div className="r-nav">
          <div className="shopping-cart">
            <Link to="/Cart">
              <i class="fas fa-shopping-cart"></i>
            </Link>
            <span>{book.length}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
