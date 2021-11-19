import React from 'react'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import './Cart.css'

function Cart() {
    return (
        <div className="cartcontainer">
            <Navbar/>
            <div className="wrappercart">
                <h1 className="wh1">YOUR BAG</h1>
                <div className="Top">
                    <button className="topbutton">Continue Shopping</button>
                    <div className="toptexts">
                        <span className="toptext">Shopping Bag 2</span>
                        <span className="toptext">My wishlist</span>
                    </div>
                    <button className="topbutton1" type="filled">Checkout Now</button>
                </div>
                <div className="Bottom">
                    <div className="infosumm">
                        <div className="summary"></div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Cart
