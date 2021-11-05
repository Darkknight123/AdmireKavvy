import React from 'react'
import Categories from '../Components/Categories'
import Navbar from '../Components/Navbar'
import Slider from '../Components/Slider'


export default function Home() {
    return (
        <div>
           <Navbar/>
           <Slider/>
           <Categories/>
        </div>
    )
}
