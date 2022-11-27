import React from 'react'
import './header.css'
// import ME from '../../assets/me.png'
import CTA from './CTA'
import HeaderSocial from './HeaderSocial'
function Header() {
  return (
    <header id="home">
      <div className="container header__container">
        <h5>Hello I'm</h5>
      <h1>Raj Sahu</h1>
      <h5 className="text-light">Fullstack Developer</h5>
      <HeaderSocial />
        <CTA />
        {/* <div className="me">
          <img src={ME} alt="Raj"  />
        </div> */}
        <a href="#scroll down" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header