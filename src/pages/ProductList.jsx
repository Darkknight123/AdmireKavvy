import React from 'react'
import Navbar from "../Components/Navbar"
import "./ProductList.css"

function ProductList() {
    return (
        <div className="productCon">
            <Navbar/>
            <h3 className="product-name"> Necklaces </h3>
            <div className="FilterContainer">
                <div className="filter">Filter</div>
                <div className="filter">Filter2</div>
            </div>
        </div>
    )
}

export default ProductList
