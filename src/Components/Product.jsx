import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@material-ui/icons'
import React from 'react'
import {bfrainbow} from "../images/bfcouples/bfrainbow.jpg"


const Product = ({item}) => {
    return (
        <div className="container">
            <div className="shape"/>
            <img src={item.img} className="imagecontainer" alt=""/>
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
