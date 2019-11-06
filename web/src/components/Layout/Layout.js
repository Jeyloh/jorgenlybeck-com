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

export const query = graphql`
  query LayoutQuery {
    sanitySiteSettings(_id: {in: "siteSettings"}) {
      _id
      title
      subtitle
      description
    }
  }
`

const Layout = ({data, children}) => {
  return (
    <StyledMainLayout>
      <Sidebar siteTitle={'data.title'} />
      <Content>{children}</Content>
    </StyledMainLayout>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
