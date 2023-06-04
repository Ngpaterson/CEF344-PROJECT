import React from "react";
import "./portfolio.css";
import img1 from "../../assets/port.PNG";

export const Portfolio = () => {
  const portfolioContent = [
    {
      image : img1,
      github: 'https://github.com/Ngpaterson/CEF344-PROJECT.git',
      demo: 'https://dribbble.com/shots/20177733-Apres-Brand-Identity-Design',
      id: 1,
      title:'Portfolio'
    },

  ]
  return (
    <section id="portfolio">
      <h5>My recent work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
      {
        portfolioContent.map((content, id) =>{
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item__image">
                <img src={content.image} alt=" one" className="portImage" />
              </div>
              <h3> {content.title} </h3>
              <div className="portfolio__item__cta">
                <a
                  href={content.github}
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
                <a
                  href={content.demo}
                  className="btn btn-primary"
                  target="blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        }
        
        )
      }
      </div>
    </section>
  );
};
export default Portfolio;
