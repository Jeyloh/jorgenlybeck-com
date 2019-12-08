/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */
import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import "../layout.css";
import Sidebar from "../Sidebar/Sidebar";
import Content from "../Content/Content";
import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";
import { animatedBackground } from "../IndexComponent/styles";


const duration = 0.5;

const variants = {
  initial: {
    scale: 0
  },
  enter: {
    scale: 1,
    transition: {
      duration: duration * 3,
      ease: "easeInOut",
      delay: duration,
      when: "beforeChildren"
    }
  },
  exit: {
    scale: 0,
    transition: { duration: duration }
  }
};

// export const query = graphql`
//   query LayoutQuery {
//     sanitySiteSettings(_id: {in: "siteSettings"}) {
//       _id
//       title
//       subtitle
//       description
//     }
//   }
// `


const StyledMainLayoutWrapper = styled(motion.div)`
  ${animatedBackground}
  min-height: 100vh;
  width: 100vw;
  overflow:hidden;
`;
const AnimatedContent = styled(motion.main)`
  padding: 8vh 10vw 0;
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
    <div>
      <Sidebar siteTitle={"data.title"} />
      <StyledMainLayoutWrapper>
        <AnimatePresence>
          <AnimatedContent
            pathname={location.pathname}
            key={location.pathname}
            variants={variants}
            initial="initial"
            animate="enter"
            exit="exit"
          >
            {children}
          </AnimatedContent>
        </AnimatePresence>
      </StyledMainLayoutWrapper>
    </div>
  );
};

export default Layout;
