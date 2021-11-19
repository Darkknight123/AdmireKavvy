import React from 'react'
import Navbar from "../Components/Navbar"
import "./ProductList.css"
import Products from "../Components/Products"
import Footer from "../Components/Footer"

function ProductList() {
    return (
        <div className="productCon">
            <Navbar/>
            <h3 className="product-name"> Necklaces </h3>
            <div className="FilterContainer">
                <div className="filter"><span className="filterText">Filter Products:</span>
                <select className="selected">
                <option value="Size" className="optioned">Size</option>
                <option value="Size" className="optioned">16</option>
                <option value="Size" className="optioned">15</option>
                <option value="Size" className="optioned">8</option>
                <option value="Size" className="optioned">1</option>
                </select>
                <select className="selected">
                <option value="Size" className="optioned">Color</option>
                <option value="Size" className="optioned">Black</option>
                <option value="Size" className="optioned">Silver</option>
                <option value="Size" className="optioned">Gold</option>
                <option value="Size" className="optioned">Others...</option>
                </select>
                
                
                </div>
                <div className="filter"><span className="filterText">Sort Products:
                <select className="selected">
                <option value="Size" className="optioned">Newest</option>
                <option value="Size" className="optioned">price(asc)</option>
                <option value="Size" className="optioned">price(desc)</option>
                </select></span></div>
            </div>
            <Products/>
            <Footer/>
        </div>
    )
}

export default ProductList
