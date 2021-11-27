import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@material-ui/icons'
import React from 'react'
import {Link} from "@reach/router"

const Product = ({item}) => {
    return (
        <div className="container">
            <div className="shape"/>
            <Link to="/view"><img src={item.img} className="imagecontainer"/></Link>
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
