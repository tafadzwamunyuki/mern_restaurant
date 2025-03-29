import React from 'react'
import { Link } from 'react-router-dom'
import { HiOutlineArrowNarrowRight } from "react-icons/hi"

const About = () => {
  return (
    <section className='about' id='about'>
      <div className='container'>
        <div className='banner'>
            <div className='top'>
                <h1 className='heading'>About Us</h1>
                <p>Where Every Bite Tells a Tale of Passion, Flavor, and Tradition</p>
            </div>
            <p className='mid'>
            Where Culinary Craftsmanship Meets Unforgettable Experiences
            At <b>Tha Don Restaurant</b>, we believe that every meal tells a story. Our journey began with a simple vision—to create a place where friends and family can gather, savor exceptional flavors, and make lasting memories.
            With a passion for fresh, locally-sourced ingredients and a commitment to culinary excellence, our chefs craft each dish with care and creativity. From our signature specialties to timeless classics, every bite is a celebration of taste and tradition.
            Step into our warm and inviting space, where the aroma of handcrafted dishes fills the air, and every guest is treated like family. Whether you're here for a romantic evening, a lively celebration, or a casual bite, we’re dedicated to making every moment special.

            <b>Come hungry. Leave happy. Always welcome.</b>
            </p>
            <Link to={"/"}>Explore Menu 
            <span>
               <HiOutlineArrowNarrowRight />     
            </span>
            </Link>
        </div>
        <div className='banner'>
            <img src='/about.png' alt='' />
        </div>
      </div>
    </section>
  )
}

export default About
