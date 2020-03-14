import React from "react"; 
import { AnimatePresence, motion} from "framer-motion";
import styled from "styled-components"; 


const variants = {
    enter: index => ({
        scale: [2, 1],
        opacity: 1,

        transition: {
          delay: index * .2,
          ease: "easeInOut",
          duration: 1

        },
      }),
    initial: (index) => ({
        scale: 0,
        opacity: 0,
      }),
}
const TextAnimation = ({text}) =>{

    const splitText = React.useMemo( () => text.split(""), [text])


    return  (
        <div>

            {splitText.map( (letter, index) => {
                return <motion.span
                key={index}
                variants={variants}
                custom={index}
                initial={"initial"}
                animate={"enter"}
                >{letter}</motion.span>
            })}
            
        </div>
    )

}

export default TextAnimation;
