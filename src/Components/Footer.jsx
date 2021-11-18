import { Facebook, Instagram, MusicNote, Twitter, WhatsApp } from '@material-ui/icons'
import React from 'react'

function Footer() {
    return (
      <div className="container">
        <div className="left">
          <div className="Logo"></div>
          <div className="description"></div>
          <div className="socialContainer">
            <div className="socialIcons">
              <Facebook />
            </div>
            <div className="socialIcons">
              <Instagram />
            </div>
            <div className="socialIcons">
              <Twitter />
            </div>
            <div className="socialIcons">
              <WhatsApp />
            </div>
            <div className="socialIcons">
              <MusicNote/>
            </div>
          </div>
        </div>
        <div className="Right">
            <h2> About AdmireKavvy</h2>
            <aside>
            <article>
                We an upcoming jewellery shop offering our esteemed customers
                reliable, affordable and high quality products.Feel free to 
                browse around and contact us if you need any help

            </article>

            </aside>
        
        </div>

        <div className="center"></div>
        <div className="Right"></div>
      </div>
    );
}

export default Footer
