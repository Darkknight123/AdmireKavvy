import { Badge } from "@material-ui/core";
import { LocalMallOutlined, Search} from "@material-ui/icons";
import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="wrapper">
        <div className="left">
        <div className=" logo">
            <h2 className="logoname">AdmireKavvy</h2>
          </div>
        </div>
        <div className="Center">
        <div className="language">En</div>
          <div className="search-container">
            <div className="input"></div>

            <Search  style={{color:"gray",fontSize:"15px"}}/>
          </div>
        </div>
        <div className="Right">
          <div className=" menu-item">Register</div>
          <div className=" menu-item">Login</div>
          <div className=" menu-item">
            <Badge badgeContent={1} color="primary">
              <LocalMallOutlined color="black" />
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
