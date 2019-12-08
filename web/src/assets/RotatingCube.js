import React, { useState } from "react";
import styled from "styled-components";
import { rotateAnimation } from "./keyframes";
import Particles from "react-particles-js";
import { getParticles } from "../particles-setup";
import { animatedBackground } from "../components/IndexComponent/styles";
import { motion, useAnimation, useCycle } from "framer-motion";
import CodeSnippetsComponent from "../components/CodeSnippetsComponent";
import { navigate } from "gatsby";

// https://codepen.io/magnus16/pen/rbEju

const cubeVariants = {
    initRotation: {
      rotateX: 360,
      rotateY: 360,
      transition: {
        loop: Infinity,
        ease: "linear",
        duration: 100
      }
    },
    quickRotation: {
      rotateX: 360,
      rotateY: 360,
      transition: {
          rotateX: {
            loop: Infinity,
            ease: "easeIn",
            duration: 18,
          },
          rotateY: {
            loop: Infinity,
            ease: "easeIn",
            duration: 18,
          },
      }
    },
  };
  const containerVariant = {
      quickRotation: {
        scale: 0,
        transition: {
          scale: {
            duration: 12,
            delay: 6,
            ease: "easeIn",
          }
        }
      },
    };


function RotatingCube({ size, colors, callback }) {
  const [clicked, toggleClicked] = useState(false);
  const [particles, setParticles] = useState(getParticles(50));



  const handleRoute = (route) => {
    // alert(route)
    if (clicked) return null;
    toggleClicked(true);

    setTimeout(() => {
      navigate(route);
    }, 18000);
  };


  return (
    <CubeContainer
      variants={containerVariant}
      animate={clicked ? "quickRotation" : ""}
      size={100}
    >
      <Cube
        variants={cubeVariants}
        animate={clicked ? "quickRotation" : "initRotation"}
        whileHover={!clicked && { scale: 1.2 }}
        size={size}
      >
        <Side size={size} id="s1" color={colors[0]} onClick={() => handleRoute("/about")}>
          <Particles style={{ position: "absolute", top: 0, left: 0 }} params={particles} />
              Jørgen <br /> Lybeck <br /> Hansen
        </Side>
          <>
            <Side size={size} id="s2" color={colors[1]} onClick={() => handleRoute("/hobbies")}>
              <Particles style={{ position: "absolute", top: 0, left: 0 }} params={particles} />
              Hobbies
            </Side>
            <Side size={size} id="s3" color={colors[0]} onClick={() => handleRoute("/portfolio")}>
              <Particles style={{ position: "absolute", top: 0, left: 0 }} params={particles} />
              Portfolio
            </Side>
            <Side
              size={size}
              id="s4"
              color={colors[1]}
              onClick={() => handleRoute("/code-snippets")}
            >
              <Particles style={{ position: "absolute", top: 0, left: 0 }} params={particles} />
              Code Snippets
            </Side>
            <Side size={size} id="s5" color={colors[2]} onClick={() => handleRoute("/blog")}>
              <Particles style={{ position: "absolute", top: 0, left: 0 }} params={particles} />
              Blog/
              <br />
              Articles
            </Side>
            <Side
              size={size}
              id="s6"
              color={colors[2]}
              onClick={() => handleRoute("/experience")}
            >
              <Particles style={{ position: "absolute", top: 0, left: 0 }} params={particles} />
              Experience
            </Side>
          </>
      </Cube>
    </CubeContainer>
  );
}

RotatingCube.defaultProps = {
  size: 100,
  colors: ["#41C3AC", "#f9a000", "#fb00ba"]
};

export default RotatingCube;

const CubeContainer = styled(motion.div)`
  position: absolute;
  top: calc(50% - 50px);
  left: calc(50% - 50px);
  height: ${props => props.size + "px"};
  width: ${props => props.size + "px"};
  transform: translateX(-50%) translateY(-50%);
  perspective: 400px;
  ${props =>
    props.noAnimation &&
    `
      transform: unset;
      left: 0;
      width: unset;
      height: unset;
   `};
`;

const Cube = styled(motion.div)`
  height: ${props => props.size + "px"};
  width: ${props => props.size + "px"};
  transform-origin: 100% 100%;
  transform-style: preserve-3d;

  > div {
    ${props =>
      props.noAnimation &&
      `
        transform: unset;
        height: 50vh;
        width: 60vw;
        margin: 0 auto;
      `};
  }
`;

const Side = styled.div`
  position: absolute;
  display: block;
  height: ${props => props.size * 2 + "px"};
  width: ${props => props.size * 2 + "px"};
  ${animatedBackground}
  transition: 2000ms all;

  overflow: hidden;
  display: flex;
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
  border: 3px solid white;

  ${props =>
    props.id === "s1" &&
    `
    transform: translateZ(${props.size}px);

  `};

  transform: ${props => {
    switch (props.id) {
      case "s2":
        return `rotateY(90deg) translateZ(${props.size}px)`;
      case "s3":
        return `rotateY(180deg) translateZ(${props.size}px)`;
      case "s4":
        return `rotateY(-90deg) translateZ(${props.size}px)`;
      case "s5":
        return `rotateX(90deg) translateZ(${props.size}px)`;
      case "s6":
        return `rotateX(-90deg) translateZ(${props.size}px)`;
    }
  }};
`;
