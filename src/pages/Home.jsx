import React from 'react'
import Navbar from '../Components/Navbar'
import styled from 'styled-components'

const Container = styled.div`
height:60px;
background-color:black;
`

export default function Home() {
    return (
        <div>
           <Navbar/>
        </div>
    )
}
