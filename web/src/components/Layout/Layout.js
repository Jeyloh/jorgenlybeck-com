/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */
import React from "react";
import "../layout.css";
import Sidebar from "../Sidebar/Sidebar";
import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";
import { animatedBackground } from "../IndexComponent/styles";
import { navigate } from "gatsby";


const duration = 0.5;

const variants = {
  initial: {
    x: "-100%",
  },
  enter: {
    x: 0,
    transition: {
      ease: "easeInOut",
      when: "beforeChildren",
      duration: .6,
    }
  },
  exit: {
    x: "100%",
    transition: { duration: duration }
  }
};

const StyledMainLayoutWrapper = styled.main`
  padding: 10vh 20% 5vh 20%;
  margin: 0;
  background: black;
  color: white;
  min-height: 100vh;
  min-width: 100vh;

  #go-back {
    position: fixed;
    left: 2em;
    top: 2em;
    background: black;
    border: none;
    color: white;
  }

  * {
    color: white;
  }
  h1 {
    margin-bottom: 1.5em;
  }
`;
const AnimatedContent = styled(motion.main)`
  padding: 0 15%;
  margin-top: 10%;
  ${props => props.pathname.includes("/hobbies") && `padding: 8vh 0 0`};
  
  overflow: hidden;
  min-height: 100vh;
  width: 100%;
  color: #fff;

  h1 {
    margin-bottom: 1.5em;
  }

  @media only screen and (max-width: 1024px) {
    padding: 8vh 3em 0;
    ${props => props.pathname.includes("/hobbies") && `padding: 8vh 0 0`};

  }

`;

const Layout = ({ children, location }) => {
  return (
    <StyledMainLayoutWrapper>
      <button id="go-back" onClick={() => navigate("/")}>Back</button>
      {children}
    </StyledMainLayoutWrapper>
  );
};

export default Layout;
