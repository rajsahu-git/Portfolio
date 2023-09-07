import React from 'react'
import './portfolio.css'
import Netflix_clone from '../../assets/netflix_clone.png'
import CRM from '../../assets/CRM.png'
import password from '../../assets/password.png'
import pokemon from '../../assets/pokemon.png'
import crypto from '../../assets/crypto.png'

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
      live_demo: "http://crm12.pythonanywhere.com/",
      image:CRM,
    },
    {
      id:3,
      title: "Pokemon App",
      github: "https://github.com/rajsahu24/ReactProject-pokemon_app-",
      live_demo: "https://react-project-pokemon-app.vercel.app/",
      image:pokemon,
    },
    {
      id:4,
      title: "Password Generator",
      github: "https://github.com/rajsahu24/ReactProject-password_generator-",
      live_demo: "https://react-project-password-generator.vercel.app/",
      image:password,
    },
    {
      id:5,
      title: "Crypto App",
      github: "https://github.com/rajsahu24/ReactProject-crypto-app-",
      live_demo: "https://react-project-crypto-app.vercel.app/",
      image:crypto,
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
            <img src={item.image} alt={item.title} />
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
