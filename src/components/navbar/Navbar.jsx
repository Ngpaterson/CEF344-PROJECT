import React from 'react'
import './navbar.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import { BiMessageSquareDetail} from 'react-icons/bi'
import { useState } from 'react'

 
const Navbar = () => {
    const [activeNav, setActiveNav] = useState('#')
    return (
        <nav>
            <a href='#' title="Header" onClick={()=>setActiveNav('#')} className={activeNav==='#'? 'active' : ''}><AiOutlineHome/></a>
            <a href='#about' title="About me" onClick={()=>setActiveNav('#about')} className={activeNav==='#about'? 'active' : ''} ><AiOutlineUser/></a>
            <a href='#Academy' title="Academic achievements" onClick={()=>setActiveNav('#Academy')} className={activeNav==='#experience'? 'active' : ''}><BiBook/></a>
            <a href='#Skills' title="Skills" onClick={()=>setActiveNav('#Skills')} className={activeNav==='#skills'? 'active' : ''}><RiServiceLine/></a>
            <a href='#contact' title="Contact" onClick={()=>setActiveNav('#contact')} className={activeNav==='#contact'? 'active' : ''}><BiMessageSquareDetail/></a>
        </nav>
    )
}

export default Navbar
