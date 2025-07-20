import React, { useContext } from 'react'
import {Context} from "../../main"
import {Link} from "react-router-dom"
import { FaGithub , FaLinkedin} from "react-icons/fa"
import { SiLeetcode } from "react-icons/si";
import { RiInstagramFill} from "react-icons/ri"
function Footer() {
  const {isAuthorized}  = useContext(Context)
  return (
    <footer className= {isAuthorized ? "footerShow" : "footerHide"}>
<div>&copy; All Rights Reserved by Gayatri Bhamre.</div>
<div>
  <Link to={'https://github.com/GayatriBhamre'} target='github'><FaGithub></FaGithub></Link>
  
  <Link to={'https://www.linkedin.com/in/gayatri-bhamre-731829249'} target='linkedin'><FaLinkedin></FaLinkedin></Link>
  <Link to={'https://www.instagram.com/gayatri._.bhamre?igsh=MXBtcWZzenNrcHk2NQ=='} target='instagram'><RiInstagramFill></RiInstagramFill></Link>
</div>
      
    </footer>
  )
}

export default Footer