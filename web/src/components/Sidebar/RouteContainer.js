import React from "react";
import styled from "styled-components";
import { motion, useAnimation, useCycle } from "framer-motion";
import * as Styled from "../IndexComponent/styles";
import arrIcon from "../../images/white-down-arrow.png";
import Particles from "react-particles-js";
import { getParticles } from "../../particles-setup";
import CodeSnippetsComponent from "../../components/CodeSnippetsComponent";

const animatedWrapperVariants = {
  scaleIn: {
    scale: 1,
    transition: {
      ease: "easeInOut",
      duration: 2
    }
  },
  scaleOut: {
    scale: 0,
    transition: {
      duration: 2
    }
  }
};
const contentVariants = {
  visible: {
    opacity: 1,
    y: "-100%",
    transition: {
      ease: "easeInOut",
      type: "keyframes",
      duration: 0.2
    }
  },
  hidden: {
    opacity: 0,
    y: 0,
    transition: {
      ease: "easeInOut",
      type: "keyframes",
      duration: 0.2
    }
  }
};
const _particles = getParticles(50, true);

const CubeRoutingContainer = ({ component }) => {
  const renderComponent = () => {
    console.log(component);
    switch (component) {
      case "Hobbies":
        return <h1>Hobbies</h1>;
      case "About":
        return <h1>About</h1>;
      case "Blog":
        return <h1>Blog</h1>;
      case "Code Snippets":
        return <CodeSnippetsComponent />;
      case "Portfolio":
        return <h1>Portfolio</h1>;
      default:
        return <h1>miss...</h1>;
    }
  };

  return (
    <AnimatedWrapper initial="scaleOut" animate="scaleIn" variants={animatedWrapperVariants}>
      <Particles style={{ zIndex: 1, position: "absolute", top: 0, left: 0 }} params={_particles} />
      <ContentContainer>
        {renderComponent()}
        <Styled.SplashScreenArrow src={arrIcon} alt="Logo" onClick={() => scrollDown()} />
      </ContentContainer>
    </AnimatedWrapper>
  );
};

export default CubeRoutingContainer;

const ContentContainer = styled(motion.div)`
  background: rgb(255, 255, 255, 0.7);
  width: 80vw;
  height: calc(100% - 2em);
  margin: 0 auto;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3em 2em;
  overflow-y: auto;
  margin-top: 2em;
`;

const AnimatedWrapper = styled(motion.div)`
  ${Styled.animatedBackground};
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  canvas {
    z-index: 40;
    touch-action: none;
  }
`;
