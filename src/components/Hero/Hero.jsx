import React from 'react'
import "./Hero.css"
import {HiLocationMarker} from 'react-icons/hi'
import CountUp from 'react-countup';
import {motion} from 'framer-motion'

const Hero = () => {
  return (
    <section className="hero-wrapper">
        <div className="paddings innerWidth flexCenter hero-container">

            {/* leftside */}
            <div className=' flexColStart hero-left'>
                <div className="hero-title">
                    <div className="orange-circle"/>
                    <motion.h1
                    initial={{y:"2rem", opacity:0}}
                    animate={{y:0, opacity:1}}
                    transition={{
                        duration:2,
                        type:"spring"
                    }}
                    >
                        A roof over <br />
                        One's Head
                    </motion.h1>
                </div>
                <div className=" flexColStart hero-des">
                    <span className='secondaryText'>Find a variety of properties you need</span>
                        <span className='secondaryText'>Be positive and find your best</span>
                </div>
                <div className=" flexCenter search-bar">
                    <HiLocationMarker color="var(--blue)" size={25}/>
                    <input type="text" />
                    <button className="button">Search</button>
                </div>
                <div className="flexCenter stats">
                    <div className="flexColCenter stat">
                        <span>
                            <CountUp start={0} end={100} duration={5}/>
                            <span>+</span>
                            </span>
                            <span className='secondaryText'>Premimum Products</span>
                    </div>

                    <div className="flexColCenter stat">
                        <span>
                            <CountUp start={0} end={200} duration={5}/>
                            <span>+</span>
                            </span>
                            <span className='secondaryText'>Happy Customers</span>
                    </div>

                    <div className="flexColCenter stat">
                        <span>
                            <CountUp  end={10}/>
                            <span>+</span>
                            </span>
                            <span className='secondaryText'>Award Winning</span>
                    </div>
                </div>
            </div>
            {/* rightside */}
            <div className=' flexCenter hero-right'>
                <motion.div
                initial={{x: "7rem", opacity:0}}
                animate={{x: 0, opacity:1}}
                transition={{
                    duration:2,
                    type:"spring"
                }}
                 className='image-container'>
                    <img src="./hero-image.png" alt="" />
                    </motion.div>
                </div>
            </div>
    </section>
  )
}

export default Hero
