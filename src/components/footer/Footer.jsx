import React from 'react'
import './footer.css'
import {SiDiscord} from 'react-icons/si'
import {BsTwitter} from 'react-icons/bs'
function Footer() {
  return (
    <footer id="footer">
      <a href="#logo" className='footer__logo'>Raj</a>

      <ul className='links'>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#expeirience">Expeirience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer__socials">
        <a href="https://discord.com/rajsahu#2730"><SiDiscord></SiDiscord></a>
        <a href="https://twitter.com/rajsahu_twt"><BsTwitter/></a>
        {/* <a href="https://discord.com/rajsahu#2730">Discord</a> */}
      </div>
      {/* <div>
        <small>&copy; Rajkumar sahu. All rights reserved</small>
      </div> */}
    </footer>
  )
}

export default Footer
