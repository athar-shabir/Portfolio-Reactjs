import "./portfolio.scss";
import {motion, useScroll, useSpring, useTransform} from "framer-motion";
import { useRef } from "react";

const items = [
    {
        id:1,
        title:"React Commerce",
        img:"https://images.pexels.com/photos/18073372/pexels-photo-18073372/free-photo-of-a-young-man-sitting-in-a-car-on-a-night-street.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti sit asperiores doloribus pariatur mollitia soluta, deleniti tempore blanditiis, omnis voluptate cum consequuntur delectus aut dolores saepe numquam possimus voluptatibus animi!",
    },
    {
        id:2,
        title:"Next.js Blog",
        img:"https://images.pexels.com/photos/18023772/pexels-photo-18023772.jpeg?",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti sit asperiores doloribus pariatur mollitia soluta, deleniti tempore blanditiis, omnis voluptate cum consequuntur delectus aut dolores saepe numquam possimus voluptatibus animi!",
    },
    {
        id:3,
        title:"Vanilla JS App",
        img:"https://images.pexels.com/photos/6894528/pexels-photo-6894528.jpeg?",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti sit asperiores doloribus pariatur mollitia soluta, deleniti tempore blanditiis, omnis voluptate cum consequuntur delectus aut dolores saepe numquam possimus voluptatibus animi!",
    },
    {
        id:4,
        title:"Music App",
        img:"https://images.pexels.com/photos/18540208/pexels-photo-18540208.jpeg?",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti sit asperiores doloribus pariatur mollitia soluta, deleniti tempore blanditiis, omnis voluptate cum consequuntur delectus aut dolores saepe numquam possimus voluptatibus animi!",
    },
];


const Single = ({ item }) => {
    const ref = useRef();

    const { scrollYProgress } = useScroll({ target: ref });

    const y = useTransform(scrollYProgress, [0, 1], [-300, 300])
    

    return (
        <section ref={ref}>
            <div className="container">
                <div className="wrapper"> 
                <img src={item.img} alt="" />
                <motion.div className="textContainer" style={{y}}>
                    <h2>{item.title}</h2>
                    <p>{item.desc}</p>
                    <button>See Demo</button>
                </motion.div>
                </div>
            </div>
        </section>
    )
}


const Portfolio = () => {

    const ref = useRef()

    const {scrollYProgress} = useScroll({target:ref, offset:["end end", "start start"]});

    const scaleX = useSpring (scrollYProgress,{
        stiffness: 100,
        damping: 30,
    })

  return (
    <div className="portfolio" ref={ref}>
        <div className="progress">
            <h1>Featured Works</h1>
            <motion.div style={{scaleX}} className="progressbar"></motion.div>
        </div>
        {items.map(item=>(
            <Single item={item} key={item.id}/>
        ))}
    </div>
  )
}

export default Portfolio