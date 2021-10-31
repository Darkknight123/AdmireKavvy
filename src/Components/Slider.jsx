import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons'
import React from 'react'
import './Slider.css'

function Slider() {
    return (
        <div className='slider-container'>
            <div className='arrow' direction="left">
                <div className='arrow-left'>
                    <ArrowLeftOutlined/>
                </div>
            </div>
            <div className='arrow' direction="right">
                <div className='arrow-right'>
                    <ArrowRightOutlined/>
                </div>
            </div>
            
        </div>
    )
}

export default Slider
