import "./navbar.scss"
import {motion} from "framer-motion"
import Sidebar from "../sidebar/Sidebar"


const Navbar = () => {
  return (
    <div className="navbar">
        <Sidebar/>
        
        <div className="wrapper">
            <motion.span initial={{opacity:0, scale:0.5}} animate={{opacity:1, scale:1}} transition={{duration:0.5}}>Athar Shabir</motion.span>
            <div className="Social">
                <a href="https://www.facebook.com/athar.shabir/" target="_blank"><img src="facebook.png" alt="" /></a>
                <a href="https://www.instagram.com/athar.shabir/" target="_blank"><img src="/instagram.png" alt="" /></a>
                <a href="https://github.com/athar-shabir" target="_blank"><img src="github.png" alt="" /></a>
                <a href="https://www.linkedin.com/in/athar-shabir-28ab54215/" target="_blank"><img src="linkedin.png" alt="" /></a>
            </div>
        </div>
    </div>
  )
}

export default Navbar