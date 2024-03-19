import "./hero.scss"
import {motion} from "framer-motion"

const textVariants={
    initial:{
        x:-500,
        opacity:0,
    },
    animate:{
        x:0,
        opacity:1,
        transition:{
            duration:1,
            staggerChildren:0.1,
        },
    },

    scroll:{
        opacity:0,
        y:10,
        transition:{
            duration:3,
            repeat:Infinity
        },
    },
};

const sliderVariants={
    initial:{
        x: 0,
    },
    animate:{
        x: "-220%",
        transition:{
            duration:20,
            repeat: Infinity,
            repeatType: "mirror",
        },
    },
};

const Hero = () => {
  return (
    <div className="hero">
        <div className="wrapper">
            <motion.div className="textContainer" variants={textVariants} initial="initial" animate="animate">
                <motion.h2 variants={textVariants}>AAKARSH PATTANAIK</motion.h2>
                <motion.h1 variants={textVariants}>ML Engineer and Web Developer</motion.h1>
                <motion.div variants={textVariants} className="buttons">
                    <motion.button variants={textVariants}>Contact me</motion.button>   
                </motion.div>
                <motion.img variants={textVariants} animate="scroll" src="/scroll.png" alt="/"></motion.img>
            </motion.div>
        </div>
        <motion.div className="slidingTextContainer" variants={sliderVariants} initial="initial" animate="animate">
            LLM's React Unity ML
        </motion.div>
        <div className="imageContainer">
            <img src="Me3.png"></img>
        </div>
    </div>
  )
}

export default Hero
