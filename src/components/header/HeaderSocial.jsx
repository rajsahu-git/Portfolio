import React from 'react'
import { ImLinkedin } from 'react-icons/im'
import { AiFillGithub } from 'react-icons/ai'
import {AiFillTwitterCircle} from 'react-icons/ai'
function HeaderSocial() {
  return (
      <div className='header_social'>
          <a href="https://www.linkedin.com/in/rajsahu24/" target="_blank" rel="noopener noreferrer"><ImLinkedin /></a>
          <a href="https://github.com/rajsahu-git" target="_blank" rel="noopener noreferrer" ><AiFillGithub /></a>
          <a href="https://twitter.com/rajsahu_twt" target="_blank" rel="noopener noreferrer"><AiFillTwitterCircle /></a>
          
    </div>
  )
}

export default HeaderSocial
