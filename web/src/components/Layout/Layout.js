/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */
import React from 'react'
import PropTypes from 'prop-types'
import {graphql} from 'gatsby'
import '../layout.css'
import Sidebar from '../Sidebar/Sidebar'
import Content from '../Content/Content'
import {StyledMainLayout} from './styles'
import { motion, AnimatePresence } from 'framer-motion'
import styled from "styled-components";
import { animatedBackground } from '../IndexComponent/styles'

const duration = 0.5


const variants = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
    transition: {
      duration: duration,
      delay: duration,
      when: 'beforeChildren',
    },
  },
  exit: {
    opacity: 0,
    transition: { duration: duration },
  },
}

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

const StyledMainLayoutWrapper = styled(motion.main)`
   height: calc(100vh);
   ${animatedBackground}
   padding-top: 10vh;
   overflow-y: scroll;
   color: white;
`;


const Layout = ({children}) => {
  return (
    <StyledMainLayout>
      <Sidebar siteTitle={'data.title'} />
      <Content>{children}</Content>
      <AnimatePresence>
        <StyledMainLayoutWrapper
          key={`location.pathname`}
          variants={variants}
          initial="initial"
          animate="enter"
          exit="exit"
        >
          {children}
        </StyledMainLayoutWrapper>
      </AnimatePresence>
    </StyledMainLayout>
  )
}

export default Layout
