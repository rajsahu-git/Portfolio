import React from 'react'
import './header.css'
import CTA from './CTA'
import HeaderSocial from './HeaderSocial'
function Header() {
  return (
    <div>
      <h5>Hello I'm</h5>
      <h1>Raj Sahu</h1>
      <h5>Fullstack Developer</h5>
      <HeaderSocial />
      <CTA />
    </div>
  )
}

export default Header