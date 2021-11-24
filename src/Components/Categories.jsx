import React from "react";
import "./Categories.css";
import bestfriends from "../images/bestfriends.jpg";
import necklaces from "../images/necklaces.jpg";
import rings from "../images/rings.jpg";

function Categories() {
  return (
    <div className="container">
      <h1 className="categorytle">CATEGORIES</h1>
      <div className="cards">
        <div className="categories">
          <img src={bestfriends} alt="bf" className="ctgimg"/>
          <div className="info">
              <h2 className="ctgtext">Couples/Bestfriend Jewelery</h2>
              <button className="categoriesbtn">Shop Now</button>
        
          </div>
          
          
        </div>
        <div className="categories">
          <img src={necklaces} alt="necklaces" className="ctgimg"/>
          <div className="info">
              <h2 className="ctgtext">Necklaces</h2>
              <button className="categoriesbtn"> Shop Now</button>
            
          </div>
          
          
        </div>
        <div className="categories">
          <img src={rings} alt="ring" className="ctgimg"/>
          <div className="info">
              <h2 className="ctgtext">Rings And Bracelets</h2>
              <button className="categoriesbtn"> Shop Now</button>
          </div>
          
          
        </div>
      </div>
    </div>
  );
}

export default Categories;
