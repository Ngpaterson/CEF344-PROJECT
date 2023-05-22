import React from 'react'
import './about.css'
import moi from '../../assets/pppp.jpg'
import {FaAward} from 'react-icons/fa'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
    return (
      <section id="about">
        <h2>About me</h2>
        <div className="container about__container">
          <div className="about__me">
            <div className="about__me__image">
              <img src={moi} alt="Paterson" />
            </div>
          </div>
          <div className="about__me__content">
            <div className="about__cards">
              <article className="about__card">
                <FaAward className="about__icon" />
                <h5>Experience</h5>
                <small>0 Years</small>
              </article>
              <article className="about__card">
                <VscFolderLibrary className="about__icon" />
                <h5>Projects</h5>
                <small>1 In Progress</small>
              </article>
            </div>
            <p>
              I am actually pursuing my second year of Bachelor of Engineering in Computer Engineering at the Faculty of Engineering and Technology of the University of Buea. I have skills in C, C++ and Java programming and basic skills in Front End web development. I am looking forward to my first work experience to put in practice all learned so far. I fluently speak and write both English and French languages.
            </p>
            <a href="#contact" className="btn">
              Direct Message
            </a>
          </div>
        </div>
      </section>
    );
}

export default About
