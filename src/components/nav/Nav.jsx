import React from 'react'
import './nav.css'
import {AiOutlineHome}from 'react-icons/ai'
import {AiOutlineUser}from 'react-icons/ai'
import {BiBook}from 'react-icons/bi'
import { FaLaptopCode } from 'react-icons/fa'
import { GiTalk } from 'react-icons/gi'
import { useState } from 'react'

function Nav() {
  const [activeNav, setActiveNav] = useState('#')

  return (
    <nav>
      <a className={activeNav === '#' ? 'active':''} onClick={()=>setActiveNav('#')} href="#home">

      <AiOutlineHome />
      </a>
      <a href="#about" onClick={()=>setActiveNav('#about')} className={activeNav === '#about' ? 'active':''}>
      <AiOutlineUser />
      </a>
      <a href="#experience" onClick={()=>setActiveNav('#experience')} className={activeNav === '#experience' ? 'active':''}>
      <BiBook />
      </a>
      <a href="#portfolio" onClick={()=>setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active':''}>
      <FaLaptopCode />
      </a>
      <a href="#contact" onClick={()=>setActiveNav('#contact')} className={activeNav === '#contact' ? 'active':''}>
      <GiTalk />
      </a>
    </nav>
  )
}

export default Nav