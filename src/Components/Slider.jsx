import React from 'react'
import './Slider.css'
import Background from '../images/pexels-felipe.jpg'


function Slider() {
    return (
        <div className="lander">
            <img src="https://images.pexels.com/photos/6431177/pexels-photo-6431177.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" className="image">
            </img>
            <div className="info-container">
                <h1 className='Title'>WELCOME</h1>
                <p className='description'>WELCOME TO OUR STORE WHERE YOU CAN GET THE MOST RELIABLE, AFFORDABLE AND QUALITY PRODUCTS  </p>
                <button>view products</button>
            </div>
            
        </div>
    )
}

export default Slider
