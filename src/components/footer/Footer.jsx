import React from 'react'
import { BsLinkedin } from 'react-icons/bs';
import {FaGithub} from 'react-icons/fa'
import {FaFacebookF} from 'react-icons/fa'
import {BsWhatsapp} from 'react-icons/bs'

import './footer.css'
const Footer = () => {
    return (
      <div className="footer__container">
        <a href="#header" className="footer__logo">
          Paterson Nguepi
        </a>

        <ul className="permalinks">
          <li>
            <a href="#header">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#Academy">Studies</a>
          </li>
          <li>
            <a href="#Skills">Skills</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>

        <div className="footer__media">
          <a href="https://linkedin.com/in/paterson-nguepi-6a8750267" target="blank">
            <BsLinkedin />
          </a>
          <a href="https://github.com/Ngpaterson" target="blank">
            <FaGithub />
          </a>
          <a href="https://facebook.com/paterson.ng.9" target="blank">
            <FaFacebookF />
          </a>
          <a href="https://wa.me/+237691206438" target="blank">
            <BsWhatsapp />
          </a>
        </div>

        <div className="copyRight">
            <h3>@copyright PN 2023</h3>
        </div>
      </div>
    );
}

export default Footer
