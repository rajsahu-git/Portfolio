import React from 'react'
import './about.css'
import ME from '../../assets/about-me.png'
import { FaAward } from "react-icons/fa"
import {BsCodeSlash} from "react-icons/bs"
import {AiOutlineProject} from 'react-icons/ai'
function About() {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="raj" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experince</h5>
              <small> 3 months internship </small>
            </article>
            <article className='about__card'>
              <BsCodeSlash className='about__icon'/>
              <h5>Programing Language</h5>
              <small> Python java react </small>
            </article>
            <article className='about__card'>
              <AiOutlineProject className='about__icon'/>
              <h5>Project</h5>
              <small> Ecommerce</small>
            </article>
          </div>
          <p>
            Hello, I am Raj Sahu, a web developer with experience in Python/django, Javascript and React. Currently I'm learning Next.js and excited to explore the possibilities of this new technology. My passion for coding has driven me to learn more about web development every day; from creating efficient back-end systems using frameworks like Django to developing interactive user interfaces with React - my skillset is constantly evolving as I strive towards becoming an expert full stack developer.
          </p>
          <a href="#contect" className='btn btn-primary'>Let's talk</a>
        </div>
      </div>
    </section>
  )
}

export default About