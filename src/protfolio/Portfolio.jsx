import React from 'react'
import './portfolio.css'
import IMG1 from '../../src/assets/kinh.jpg'
import IMG2 from '../../src/assets/portfolio2.png'
import IMG3 from '../../src/assets/gym.png'
import IMG4 from '../../src/assets/textutils.png'
import IMG5 from '../../src/assets/redstore.png'
import IMG6 from '../../src/assets/barber.png'
import IMG7 from '../../src/assets/micl.jpg'
import IMG8 from '../../src/assets/dsl.jpg'
import IMG9 from '../../src/assets/n18.jpg'



function Portfolio() {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-img">
            <img src={IMG7} alt="portfolio7" />
          </div>
          <h3>Meb Industrial Complex Limited</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/Udayan285/micl-full-stack" className="btn" target="_blank">Github</a>
          <a href="https://miclbd.com/" className="btn btn-primary" target="_blank">Live demo</a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-img">
            <img src={IMG8} alt="portfolio8" />
          </div>
          <h3>E-commerce DigitalSmokeLab</h3>
          <div className="portfolio__item-cta">
          <a href="https://digitalsmokelab.com/" className="btn" target="_blank">Github</a>
          <a href="https://digitalsmokelab.com/" className="btn btn-primary" target="_blank">Live demo</a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-img">
            <img src={IMG9} alt="portfolio9" />
          </div>
          <h3>N18 Blog</h3>
          <div className="portfolio__item-cta">
          <a href="https://n18.vn/" className="btn" target="_blank">Github</a>
          <a href="https://n18.vn/" className="btn btn-primary" target="_blank">Live demo</a>
          </div>
        </article>
        {/* new portfolio added top three */}
        <article className="portfolio__item">
          <div className="portfolio__item-img">
            <img src={IMG1} alt="portfolio1" />
          </div>
          <h3>Kinhdoanhdautu Course</h3>
          <div className="portfolio__item-cta">
          <a href="https://kinhdoanhdautu.com.vn/" className="btn" target="_blank">Github</a>
          <a href="https://kinhdoanhdautu.com.vn/" className="btn btn-primary" target="_blank">Live demo</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-img">
            <img src={IMG2} alt="portfolio1" />
          </div>
          <h3>MohoFood Project</h3>
          <div className="portfolio__item-cta">
          <a href="https://udayan285.github.io/mohoFood/" className="btn" target="_blank">Github</a>
          <a href="https://dribble.com/Alien_pixels" className="btn btn-primary" target="_blank">Live demo</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-img">
            <img src={IMG3} alt="portfolio1" />
          </div>
          <h3>Gym Project</h3>
          <div className="portfolio__item-cta">
          <a href="https://udayan285.github.io/gym/" className="btn" target="_blank">Github</a>
          <a href="https://dribble.com/Alien_pixels" className="btn btn-primary" target="_blank">Live demo</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-img">
            <img src={IMG4} alt="portfolio1" />
          </div>
          <h3>
            TextUtils - Word counter, Character counter, Remove extra spaces
          </h3>
          <div className="portfolio__item-cta">
          <a href="https://udayan285.github.io/textutils/" className="btn" target="_blank">Github</a>
          <a href="https://dribble.com/Alien_pixels" className="btn btn-primary" target="_blank">Live demo</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-img">
            <img src={IMG5} alt="portfolio1" />
          </div>
          <h3>RedStore E-commerce Project</h3>
          <div className="portfolio__item-cta">
          <a href="https://udayan285.github.io/EcommerceProject.github.io/" className="btn" target="_blank">Github</a>
          <a href="https://dribble.com/Alien_pixels" className="btn btn-primary" target="_blank">Live demo</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-img">
            <img src={IMG6} alt="portfolio1" />
          </div>
          <h3>Barber Shop Project</h3>
          <div className="portfolio__item-cta">
          <a href="https://udayan285.github.io/barber-shop.github.io/" className="btn" target="_blank">Github</a>
          <a href="https://dribble.com/Alien_pixels" className="btn btn-primary" target="_blank">Live demo</a>
          </div>
        </article>
  
  
     
      
      </div>
    </section>
  )
}

export default Portfolio