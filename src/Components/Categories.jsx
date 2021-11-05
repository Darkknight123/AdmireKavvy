import React from "react";
import "./Categories.css";
import bestfriends from "../images/bestfriends.jpg";
import necklaces from "../images/necklaces.jpg";
import rings from "../images/rings.jpg";

function Categories() {
  return (
    <div className="container">
      <h1>CATEGORIES</h1>
      <div className="cards">
        <div className="categories">
          <img src={bestfriends} />
          <div className="info">
              <h2>Couples/Bestfriend Jewelery</h2>
        
          </div>
          
          
        </div>
        <div className="categories">
          <img src={necklaces} />
          <div className="info">
              <h2>Necklaces</h2>
            
          </div>
          
          
        </div>
        <div className="categories">
          <img src={rings} />
          <div className="info">
              <h2>Rings And Bracelets</h2>
              
          </div>
          
          
        </div>
       
      </div>
    </div>
  );
}

export default Categories;
