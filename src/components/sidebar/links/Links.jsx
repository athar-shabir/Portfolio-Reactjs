import { motion } from "framer-motion";

const variants = {
  open:{
    transition:{
      staggerChildren:0.2,
    },
  },
  closed:{
    transition:{
      staggerChildren:0.05,
      staggerDirection: -1,
    },
  },
};

const itemVariants = {
  open:{
    y:0,
    opacity:1,
  },
  closed:{
    y:50,
    opacity:0,
  },
};


const Links = () => {
const items = [
  "Homepage",
  "Services",
  "Portfolio",
  "Contact", 
]
  return (
    <motion.div variants={variants} className="links">
      {items.map((item) => (
        <motion.a
          href={`#${item}`}
          key={item}
          variants={itemVariants}
          whileHover={{ scale: 1.1, color: "black" }}
          whileTap={{scale: 0.95}}
          style={{ display: "block", margin: "10px 0", textDecoration: "none", color: "black" }} 
        >
          {item}
        </motion.a>
      ))}
    </motion.div>
  );
};


export default Links