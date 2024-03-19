import { useRef } from "react";
import "./portfolio.scss";
import {motion,useScroll,useSpring, useTransform} from "framer-motion";

const items=[
    {
        id:"Projects",
        title:"AI Voice assistant",
        img:"https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=600",
        desc:"Content"
    },
    {
        id:2,
        title:"AR/VR Planets App",
        img:"https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=600",
        desc:"Content"
    },
    {
        id:3,
        title:"Spam Mail Detection",
        img:"https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=600",
        desc:"Content"
    },
    {
        id:4,
        title:"Recommendation System",
        img:"https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=600",
        desc:"Content"
    },
];

const Single=({item})=>{

    const ref=useRef();

    const {scrollYProgress}=useScroll({target:ref,});

    const y=useTransform(scrollYProgress,[0,1],[-600,600]);

    return(
        <section>
            <div className="container">
                <div className="wrapper">
                    <div className="imageContainer" ref={ref}>
                        <img src={item.img} alt="/"/>
                    </div>
                    <motion.div className="textContainer" style={{y}}>
                        <h2 >{item.title}</h2>
                        <p>{item.desc}</p>
                        <button>Take a look</button>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

const Portfolio = () => {

    const ref=useRef();

    const {scrollYProgress}=useScroll({target:ref,offset:["end end","start start"]});

    const scaleX=useSpring(scrollYProgress, {
        stiffness:100,
        damping:20,
    })

    return (
        <div className="portfolio" ref={ref}>
            <div className="progress">
                <h1>
                    Projects
                </h1>
                <motion.div style={{scaleX}} className="progressBar"></motion.div>
            </div>
        {items.map(item=>(
            <Single item={item} key={item.id}/>
        ))}
        </div>
    )
}

export default Portfolio
