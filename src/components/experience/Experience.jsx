import React from 'react'
import './experience.css'
import {FaHandPointRight} from 'react-icons/fa'
function Experience() {
  return (
    <section id='experience'>
      <h5>The Skill I Have</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="experience__fontend">
          <h3>Backend</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <FaHandPointRight className='experience__details-icon' />
              <div>
                <h4>Python</h4>
              <small className='text-light' >Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <FaHandPointRight className='experience__details-icon' />
              <div>
                <h4>SQLite</h4>
              <small className='text-light' >Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <FaHandPointRight className='experience__details-icon' />
              <div>
                <h4>DSA</h4>
              <small className='text-light' >Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <FaHandPointRight className='experience__details-icon' />
              <div>
                <h4>Django</h4>
              <small className='text-light' >Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <FaHandPointRight className='experience__details-icon' />
              <div>
                <h4>MongoDB</h4>
              <small className='text-light' >Besic</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience__backend">
          <h3>Fontend Developer</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <FaHandPointRight className='experience__details-icon' />
              <div>
                <h4>HTML</h4>
              <small className='text-light' >Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <FaHandPointRight className='experience__details-icon' />
              <div>
                <h4>CSS</h4>
              <small className='text-light' >Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <FaHandPointRight className='experience__details-icon' />
              <div>
                <h4>JavaScript</h4>
              <small className='text-light' >Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <FaHandPointRight className='experience__details-icon' />
              <div>
                <h4>React</h4>
              <small className='text-light' >Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <FaHandPointRight className='experience__details-icon' />
              <div>
                <h4>Tailwind</h4>
              <small className='text-light' >Intermediat</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience