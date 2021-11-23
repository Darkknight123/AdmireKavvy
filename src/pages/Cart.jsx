import { Add, Remove } from '@material-ui/icons'
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
                        <div className="productss">
                            <div className="productdetails">
                                <img src="https://www.pexels.com/photo/adult-affection-beads-blur-371285/" className="cartimg" alt="cartimage"/>
                                <div className="detailed">
                                    <span className="productname"><b>Product:</b> friendship bracelets</span>
                                    <span className="productid"><b>ID:</b> e3648f9362</span>
                                    <span className="productsize"><b>Size:</b> 16</span>
                                </div>
                            </div>
                            <div className="pricedetails">
                                <div className="amountcontainer">
                                    <Add/>
                                    <div className="productamount">1</div>
                                    <Remove/>
                                </div>
                                <div className="Productprice">Ksh.500</div>
                            </div>
                        </div>  
                        <hr/>
                        <div className="productss">
                            <div className="productdetails">
                                <img src="https://www.pexels.com/photo/adult-affection-beads-blur-371285/" className="cartimg" alt="cartimage"/>
                                <div className="detailed">
                                    <span className="productname"><b>Product:</b> friendship bracelets</span>
                                    <span className="productid"><b>ID:</b> e3648f9362</span>
                                    <span className="productsize"><b>Size:</b> 16</span>
                                </div>
                            </div>
                            <div className="pricedetails">
                                <div className="amountcontainer">
                                    <Add/>
                                    <div className="productamount">1</div>
                                    <Remove/>
                                </div>
                                <div className="Productprice">Ksh.500</div>
                            </div>
                        </div>  
                    </div>
                    <div className="summary">
                        <h2 className="summarytitle">
                            Order Summary
                        </h2>
                        <div className="summaryItem">
                            <span className="itemtext">Subtotal</span>
                            <span className="itemprice">Ksh.1000</span>
                        </div>
                        <div className="summaryItem">
                            <span className="itemtext">Delivery Fee</span>
                            <span className="itemprice">Ksh.100</span>
                        </div>
                        <div className="summaryItem">
                            <span className="itemtotal" type="total">Total</span>
                            <span className="totalprice">Ksh.1100</span>
                        </div>
                        <button className="summarybutton">Checkout Now</button>

                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Cart
