import React, { useState } from "react";
import styled from "styled-components";
import Particles from "react-particles-js";
import { getParticles } from "../particles-setup";
import { animatedBackground } from "../components/IndexComponent/styles";
import { motion, useAnimation, useCycle } from "framer-motion";
import { navigate } from "gatsby";


const flipVariants = {
  flipped: {
    rotateY: 900,
    transition: {
      duration: 3
    }
  },
  unflipped: {
    rotateY: 0,
  },
};


function FlipComponent({ size, id, direction, text, route, onClick }) {
  const [flipped, setFlipped] = useState(false);
  const [ready, setReady] = useState(false);
  const [particles, setParticles] = useState(getParticles(50));

  const handleClick = () => {
    if (onClick) onClick();
    else if (route) navigate(route);
  };

  const toggleFlip = () => {
    if (!flipped) {
      setFlipped(true);
      setTimeout(() => {
        if (!flipped) {
          setReady(true);
        }
      }, 3000)
    }
  }

  return (
    <Flip
      id={id}
      pointer={(route || onClick) && ready}
      onMouseOver={toggleFlip}
      size={size}
    >
      <motion.div
        variants={flipVariants}
        animate={flipped ? "flipped" : "unflipped"}
        initial="unflipped"
      >
        <Side
          font={text}
          onClick={handleClick}
          pointer={(route || onClick) && ready}
          size={size} id="front" color={"white"} >
          {text}
        </Side>
        <Side
          pointer={(route || onClick) && ready}
          onClick={toggleFlip}
          size={size} id="back" color={"black"}>
          <Particles style={{ position: "absolute", top: 0, left: 0 }} params={particles} />
        </Side>
      </motion.div>
    </Flip>
  );
}

FlipComponent.defaultProps = {
  size: 100,
};

export default FlipComponent;

const Flip = styled.div`
  height: ${props => props.size + "%"};
  width: ${props => props.size + "%"};
  perspective: 1000px;
  ${ props => props.pointer && `
    cursor: pointer;

    :hover {
      background: blue;
    }
  
  `};


  > div {
    height: 100%;
    width: 100%;
    transform-style: preserve-3d;
    position: relative;

  }

`;

const Side = styled.div`
  display: block;
  height: 100%;
  width: 100%;
  transition: 2000ms all;
  display: flex;
  position: absolute;
  backface-visibility: hidden;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
  font-size: 130%;
  line-height: 110%;
  padding: 10%;
  user-select: none;
  font-family: "Audiowide", cursive;
  line-break: all;
  border: .1px solid white;

  ${props => props.font && `
    font-size: ${props.size / props.font.length}px;
  `};

  ${ props => props.pointer && `

    :hover {
      background: blue;
    }
  
  `};

  ${ props => props.color === "white" ? `
    background: white;
    color: black;
    transform: rotateY(180deg);

  ` : `
    background: black;
    color: white;
  `}


 
`;
