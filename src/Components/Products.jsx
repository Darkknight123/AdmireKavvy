import React from 'react'
import {PopularProducts} from "../data"
import Product from './Product'
import "./Products.css"

function Products() {
    return (
        <div className="productContainer">
            {PopularProducts.map(item =>(
                <Product item = {item} key={item.id} />
            ))}
        </div>
    )
}

export default Products
