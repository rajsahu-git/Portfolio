import React from 'react'
import { ImLinkedin } from 'react-icons/im'
import { AiFillGithub } from 'react-icons/ai'
import {AiFillTwitterCircle} from 'react-icons/ai'
function HeaderSocial() {
  return (
      <div className='header_social'>
          <a href="https://www.linkedin.com/in/rajkumarsahu24/" ><ImLinkedin /></a>
          <a href="https://github.com/rajsahu24" ><AiFillGithub /></a>
          <a href="https://twitter.com/rajsahu824" ><AiFillTwitterCircle /></a>
          
    </div>
  )
}

export default HeaderSocial