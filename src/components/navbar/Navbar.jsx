import React from 'react'
import './navbar.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import { BiMessageSquareDetail} from 'react-icons/bi'
import{MdOutlineWorkHistory} from 'react-icons/md'
import { useState } from 'react'

 
const Navbar = () => {
    const [activeNav, setActiveNav] = useState('#')
    return (
        <nav>
            <a href='#header' title="Header" onClick={()=>setActiveNav('#')} className={activeNav==='#'? 'active' : ''}><AiOutlineHome/></a>
            <a href='#about' title="About me" onClick={()=>setActiveNav('#about')} className={activeNav==='#about'? 'active' : ''} ><AiOutlineUser/></a>
            <a href='#Academy' title="Academic achievements" onClick={()=>setActiveNav('#Academy')} className={activeNav==='#experience'? 'active' : ''}><BiBook/></a>
            <a href='#Skills' title="Skills" onClick={()=>setActiveNav('#Skills')} className={activeNav==='#skills'? 'active' : ''}><RiServiceLine/></a>
            <a href='#portfolio' title="portfolio" onClick={()=>setActiveNav('#portfolio')} className={activeNav==='#portfolio'? 'active' : ''}><MdOutlineWorkHistory/></a>
            <a href='#contact' title="Contact" onClick={()=>setActiveNav('#contact')} className={activeNav==='#contact'? 'active' : ''}><BiMessageSquareDetail/></a>
        </nav>
    )
}

export default Navbar
