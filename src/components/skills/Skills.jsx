import React from 'react'
import './Skills.css'
import {BsFillDatabaseFill} from 'react-icons/bs'
import {MdOutlineCodeOff} from 'react-icons/md'
import {FaFigma} from 'react-icons/fa'

const Skills= () => {
    return(
        <section  id='Skills'>
            <h5>What I do</h5>
            <h2>Skills</h2>
            <div className='Academi'>
                <article className='in'>
                    <MdOutlineCodeOff size={30} color="rgb(9, 66, 33)"/>          
                    <h4 className="hh">Front-end web development</h4>
                    <h5 className="ll"><em>I am a beginner in front-end web development. I am proficient in some basic front-end technologies, including HTML, CSS, and JavaScript. I am also introducing into react framework. I am passionate about creating beautiful and functional web applications</em></h5>
                                  
                </article>
                <article className='in'>
                    <FaFigma size={30} color="rgb(9, 66, 33)"/>
                    <h4 className="hh">UI Design</h4>
                    <h5 className="ll"><em>I am a UI designer. I have an understanding of user-centered design principles and I am proficient in a variety of design software programs. I am passionate about creating user-friendly and aesthetically pleasing interfaces.</em> </h5>
                    
                </article>
                <article className='in'>
                    <BsFillDatabaseFill size={30} color="rgb(9, 66, 33)"/>                 
                    <h4 className='hh'>Database Management</h4>
                    <h5 className="ll"><em>I have acquired skills in database management. I have an understanding of database theory and I am proficient in MySQL DBMS. I am passionate about designing and managing databases that are efficient, scalable, and secure.</em></h5>
                                   
                </article>
    

            </div> 
            
        </section>
    )
}
export default Skills