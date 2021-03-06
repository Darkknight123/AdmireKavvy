import React from 'react'
import Categories from '../Components/Categories'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import Products from '../Components/Products'
import Slider from '../Components/Slider'


export default function Home() {
    return (
        <div>
           <Navbar/>
           <Slider/>
           <Categories/>
           <Products/>
           <Footer/>
        </div>
    )
}
