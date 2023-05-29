import React from 'react'
import OL from '.././../assets/OL1.pdf'
import AL from '.././../assets/AL.pdf'
import Transcript from '.././../assets/TRANSCRIPT.pdf'
import './academic_achievements.css'
import {FaGraduationCap} from 'react-icons/fa'
import {GiSchoolBag} from 'react-icons/gi'
import {FaSchool} from 'react-icons/fa'
import OLL from '../../assets/class1.jpg'
import ALL from '../../assets/class5.jpg'
import UN from '../../assets/class6.jpg'
const Academy= () => {
    return(
        <section  id='Academy'>
            <h2>Academic Achievements</h2>
            <div className='Academics'>
                <article className='ind'>
                    <GiSchoolBag size={70} color="rgb(9, 66, 33)"/>
                    <img src={OLL} alt="OL" className="classes"/>
                    <h4>GCE O.LEVEL</h4>
                    <h5>DUVAAL INTERNATIONAL SCHOOL DOUALA</h5>
                    <h6>2018-2019</h6>
                    <a href={OL} download><p className='dw'> <em> <strong>Download Certificate</strong> </em> </p></a>
                </article>
                <article className='ind'>
                    <FaSchool size={70} color="rgb(9, 66, 33)"/>
                    <img src={ALL} alt="AL" className="classes"/>
                    <h4>GCE A.LEVEL</h4>
                    <h5>DUVAAL INTERNATIONAL SCHOOL DOUALA</h5>
                    <h6>2020-2021</h6>
                    <a href={AL} download><p className='dw'> <em> <strong>Download Certificate</strong> </em> </p></a>
                </article>
                <article className='ind'>
                    <FaGraduationCap size={70} color="rgb(9, 66, 33)"/>
                    <img src={UN} alt="UN" className="classes"/>
                    <h4>B.ENG COMPUTER ENGINEERING</h4>
                    <h5>UNIVERSITY OF BUEA</h5>
                    <h6>2021-Present</h6>
                    <a href={Transcript} download><p className='dw'> <em> <strong>Download Transcripts</strong> </em> </p></a>
                </article>

            </div> 
            
        </section>
    )
}
export default Academy