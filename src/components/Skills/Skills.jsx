import { useRef } from "react"
import "./skills.scss"
import {motion,useInView} from "framer-motion"

const variants={
  initial:{
    x:-500,
    y:100,
    opacity:0,
  },
  animate:{
    x:0,
    opacity:1,
    y:0,
    transition:{
      duration:1.4,
      staggerChildren:0.1,
    }
  }
}

const Skills = () => {

  const ref=useRef()
  
  const isInView=useInView(ref,{margin:"-20px"})

  return (
    <motion.div className="skills" variants={variants} initial="initial" ref={ref} animate={isInView && "animate"}>
      <motion.div className="textContainer" variants={variants}>
        <p>
          I aim to work and build all while<br/> learning continuously throughout.
        </p>
        <hr/>
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
            <h1>
              <motion.b whileHover={{color:"yellow"}}>Skills</motion.b> I possess currently.
            </h1>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div className="box" whileHover={{background:"linear-gradient(180deg,#111132,#505064)",color:"black",scale:1.1}}>
            <img src="/React.png"/>
            <h2>ReactJS</h2>
        </motion.div>
        <motion.div className="box" whileHover={{background:"linear-gradient(180deg,#111132,#505064)",color:"black",scale:1.1}}>
              <img src="/SQL.png"/>
              <h2>SQL</h2>
        </motion.div>
        <motion.div className="box" whileHover={{background:"linear-gradient(180deg,#111132,#505064)",color:"black",scale:1.1}}>
            <img src="/Unity.png"/>
            <h2>Unity Engine</h2>
        </motion.div>
        </motion.div>
        <motion.div className="listContainer2" variants={variants}>
        <motion.div className="box" whileHover={{background:"linear-gradient(180deg,#111132,#505064)",color:"black",scale:1.1}}>
            <img src="/python.jpeg"/>
            <h2>Python</h2>
        </motion.div>
        <motion.div className="box" whileHover={{background:"linear-gradient(180deg,#111132,#505064)",color:"black",scale:1.1}}>
              <img src="/HCSS.png"/>
              <h2>HTML/CSS</h2>
        </motion.div>
        <motion.div className="box" whileHover={{background:"linear-gradient(180deg,#111132,#505064)",color:"black",scale:1.1}}>
              <img src="/Framer.png"/>
              <h2>Framer Motion</h2>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default Skills
