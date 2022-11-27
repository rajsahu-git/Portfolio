import React from 'react'
import './nav.css'
import {AiOutlineHome}from 'react-icons/ai'
import {AiOutlineUser}from 'react-icons/ai'
import {BiBook}from 'react-icons/bi'
import { FaLaptopCode } from 'react-icons/fa'
import { GiTalk } from 'react-icons/gi'

function Nav() {
  return (
    <nav>
      <h1>nav</h1>
      <AiOutlineHome />
      <AiOutlineUser />
      <BiBook />
      <FaLaptopCode />
      <GiTalk />
    </nav>
  )
}

export default Nav