import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import "./ProductView.css";
import { Add, LocalMallOutlined, Remove } from "@material-ui/icons";

function ProductView() {
  return (
    <div className="viewcontainer">
      <Navbar />
      <div className="wrapped">
        <div className="imagecontained">
          <img
            src="https://www.pexels.com/photo/healing-crystal-necklace-906056/"
            alt=""
            className="wrappingimg"
          />
        </div>
        <div className="descriptioninfo">
          <h3 className="producttle">Bestfriend forever Necklaces</h3>
          <div className="moreInfo">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo,
            assumenda distinctio, ipsum illum sit odit, error minus dolor eius
            suscipit incidunt. Et quasi atque voluptatum illo recusandae,
            asperiores aperiam officia.
          </div>
          <div className="prices">Ksh.500</div>
          <div className="filtered">
              <span className="choosecolor">Color:</span>
            <select className="colored">
              <option value="color">Color</option>
              <option value="color">Gold</option>
              <option value="color">Silver</option>
              <option value="color">Black</option>
              <option value="color">other</option>
            </select>
          </div>
          <div className="addcontainer">
              <div className="amountcontainer">
                  <Remove/>
                  <span className="amount">1</span>
                  <Add/>
              </div>
              <LocalMallOutlined className="addto"/>

          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ProductView;
