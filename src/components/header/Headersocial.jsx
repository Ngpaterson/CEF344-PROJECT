import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FaFacebookF} from 'react-icons/fa' 
import {CgTwitter} from 'react-icons/cg'
const HeaderSocial = () => {
return (
<div className='header__social'>
<a href='https://linkedin.com/in/paterson-nguepi-6a8750267' target='blank'><BsLinkedin/> </a>
<a href='https://github.com/Ngpaterson' target='blank'><FaGithub/> </a>
<a href='https://facebook.com/paterson.ng.9' target='blank'><FaFacebookF/> </a>
<a href='https://twitter.com' target='blank'><CgTwitter/> </a>
</div>
)
}
export default HeaderSocial