import {
  Facebook,
  Instagram,
  MusicNote,
  Twitter,
  WhatsApp,
} from "@material-ui/icons";
import React from "react";
import "./Footer.css";
// import logo from "../images/bfcouples/logo.jpg"
import { Link } from "@reach/router";

function Footer() {
  return (
    <div className="Footercontainer">
      <div className="leftFooter">
        {/* <img src={logo} alt="logo" className="logoimg"/> */}
        <div className="noo">
          <h2 className="contactus">Contact Us</h2>
          <span className="Phone">Mobile No: +254717785109</span>
          <span className="Phone">Paybill: 5093526</span>
          <div className="socialContainer">
            <div className="socialIcons">
              <Facebook style={{ color: "#3b5998" }} />
            </div>
            <div className="socialIcons">
              <Instagram style={{ color: "#E4405F" }} />
            </div>
            <div className="socialIcons">
              <Twitter style={{ color: "00acee" }} />
            </div>
            <div className="socialIcons">
              <WhatsApp style={{ color: "#075e54" }} />
            </div>
            <div className="socialIcons">
              <MusicNote style={{ color: "#ff0050" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="centerFooter">
        <h2 className="title">Useful Links</h2>
        <ul className="useful">
          <Link to="/" color="black">
            <ul>Home</ul>
          </Link>
          <Link to="cart" color="black">
            <ul>Cart</ul>
          </Link>
          <ul>My Account</ul>
          <ul>Wishlist</ul>
          <ul>Terms and Conditions</ul>
        </ul>
      </div>
      <div className="rightFooter">
        <h2 className="abt"> About Us</h2>
        <article>
          We an upcoming jewellery shop offering our esteemed customers
          reliable, affordable and high quality products.Feel free to browse
          around and contact us if you need any help
        </article>
      </div>
    </div>
  );
}

export default Footer;
