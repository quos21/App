import Sidebar from "../sidebar/sidebar";
import "./navbar.scss";
import {motion} from "framer-motion"

const NavBar = () => {
  return (
    <div className="navbar">
      <Sidebar/>
      <div className="wrapper">
        <motion.span initial={{opacity:0,scale:0.5}} 
        animate={{opacity:1,scale:1}} 
        transition={{duration:0.5}}>
          Hey there!</motion.span>
        <motion.div className="social">
            <motion.a href="#" whileHover={{scale:1.3}} whileTap={{scale:0.8}}><img src="/instagram.png" alt="Resume" /></motion.a>
            <motion.a href="https://www.linkedin.com/in/aakarsh-pattanaik-921bb81b4/" whileHover={{scale:1.3,}} whileTap={{scale:0.8}}>
              <img src="/linkedin2.png" alt="LinkedIn" /></motion.a>
            <motion.a href="https://github.com/quos21" whileHover={{scale:1.3,}} whileTap={{scale:0.8}}>
              <img src="/github.png" alt="Github" /></motion.a>
        </motion.div>
      </div>
    </div>
  )
}

export default NavBar

