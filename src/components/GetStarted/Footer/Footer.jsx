import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
   <section className="f-wrapper">
    <div className="paddings innerWidth flexCenter f-container">
        {/* left */}
        <div className="flexColStart f-left">
            <img src='./logo-color.png' alt="" width={150} height={110}/>

            <span className="orangeText">
            "Turning Keys, Opening Doors, Building Dreams" <br/ >
            "Bringing You Home, Where Dreams Take Flight."
               
            </span>
        </div>
    {/* right */}

    <div className="flexColStart f-right">
        <span className='primaryText'>Information</span>
        <span className='secondaryText'>Sector 62, In front of I-thum tower Noida, INDIA</span>

        <div className="flexCenter f-menu">
            <span>Property</span>
            <span>Services</span>
            <span>Product</span>
            <span>About Us</span>
        </div>
     </div>
    </div>
   </section>
  )
}

export default Footer
