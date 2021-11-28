import React from 'react'
import './Slider.css'


function Slider() {
    return (
        <div className="lander">
            <img src="https://images.pexels.com/photos/6431177/pexels-photo-6431177.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" className="image" alt="">
            </img>
            <div className="info-container">
                <h2 className='Title'>Hello there,</h2>
                <p className='description'>WELCOME TO OUR STORE WHERE YOU CAN GET THE MOST RELIABLE, AFFORDABLE AND QUALITY PRODUCTS  </p>
                <button className="landingbtn" onClick={()=>window.location.href="/products"}>view products</button>
            </div>
            
        </div>
    )
}

export default Slider
