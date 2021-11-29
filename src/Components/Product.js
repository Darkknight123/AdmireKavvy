import React from 'react'
import './Product.css'



const Product = (props) => {
    return (
        <div className="prodcontainer">
            <div className="shape"/>
            
            <img src={`bfcouples/${props.item.img}`} className="imagecontainer" alt="avator"/>
            
            
        </div>
    )
}

export default Product
