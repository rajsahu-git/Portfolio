import React from 'react'
import './portfolio.css'
import Netflix_clone from '../../assets/netflix_clone.png'
import CRM from '../../assets/CRM.png'

function Portfolio() {
  const data = [
    {
      id:1,
      title: "Netflix clone",
      github: "https://github.com/rajsahu24/Netflix_clone",
      live_demo: "http://netflixclone1.pythonanywhere.com/",
      image:Netflix_clone,
    },
    {
      id:2,
      title: "Customer relationship management",
      github: "https://github.com/rajsahu24/CRM",
      live_demo: "http://crm2.pythonanywhere.com/",
      image:CRM,
    },
  ]
  return (
    <section id="portfolio">
      <h5>My work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map((item)=>{
            return (
            <article key={item.id} className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={item.image} alt="Netfli clone" />
          </div>
            <h3>
              {item.title}
          </h3>
          <div className="portfolio__item-cta">
          <a href={item.github} className='btn'>Gitub</a>
          <a href={item.live_demo} target="_blank" rel="noopener noreferrer" className='btn btn-primary'>Live demo</a>
          </div>
        </article>
            )    
          })
        }
        
        
      </div>  
    </section>
  )
}

export default Portfolio