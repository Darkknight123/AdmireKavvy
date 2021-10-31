import { IconButton } from "@material-ui/core";
import { Search } from "@material-ui/icons";
import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="wrapper">
        <div className="left">
          <div className="language">En</div>
          <div className="search-container">
            <div className="input"></div>

            <Search />
          </div>
        </div>
        <div className="Center">
          <div className=" logo">
            <h1>AdmireKavvy</h1>
          </div>
        </div>
        <div className="Right">
          <div className=" menu-item">Register</div>
          <div className=" menu-item">Login</div>
          <div className=" menu-item">
            <IconButton ariel-label="cart">
              <StyledBadge badgeContent={0} color="pimary">
              <ShoppingCartIcon />
              </StyledBadge>
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
