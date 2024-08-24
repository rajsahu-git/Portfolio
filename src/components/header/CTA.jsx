import React from 'react'
import Raj from '../../assets/RajKumar-.pdf'
const CTA = () => {
  return (
      <div className='cta'>
          <a href={Raj} download className='btn'>Download CV,  </a>
            <a href="#contect" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA
