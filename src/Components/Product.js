import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@material-ui/icons'
import React from 'react'
import './Product.css'



const Product = (props) => {
    return (
        <div className="prodcontainer">
            <div className="shape"/>
            
            <img src={`bfcouples/${props.item.img}`} className="imagecontainer" alt="avator"/>
            <div className="infocontainer">
                <div classname="icons">
                    <ShoppingCartOutlined/>
                </div>
                <div classname="icons">
                    <SearchOutlined/>
                </div>
                <div classname="icons">
                    <FavoriteBorderOutlined/>
                </div>
            </div>
            
        </div>
    )
}

export default Product
