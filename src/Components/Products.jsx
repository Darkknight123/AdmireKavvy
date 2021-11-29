import React from 'react'
import {PopularProducts} from "../data"
import Product from './Product'
import "./Products.css"

function Products() {
    return (
        <div className="productContainer">
            {PopularProducts.map((item,i) =>(
                <Product item = {item} key={i} />
            ))}
        </div>
    )
}

export default Products
