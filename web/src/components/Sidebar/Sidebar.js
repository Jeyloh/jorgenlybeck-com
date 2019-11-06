import {Link} from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import {StyledSidebar, SidebarNavWrapper, Title, MainNavLink} from './styles'

const Sidebar = ({siteTitle}) => {
  return (
    <StyledSidebar>
      <Title>
        <Link
          to='/'
          style={{
            color: `white`,
            textDecoration: `none`
          }}
        >
          <div>
            Jørgen Lybeck Hansen
          </div>
        </Link>
      </Title>
      <SidebarNavWrapper>
        <MainNavLink activeClassName='active' to='/projects/'>
          Projects
        </MainNavLink>
        <MainNavLink activeClassName='active' to='/experience/'>
          Experience
        </MainNavLink>
        <MainNavLink activeClassName='active' to='/philosophy/'>
          Philosophy
        </MainNavLink>
        <MainNavLink activeClassName='active' to='/code-snippets/'>
          Code Snippets
        </MainNavLink>
        <MainNavLink activeClassName='active' to='/blog/'>
          Blog
        </MainNavLink>
        <MainNavLink activeClassName='active' to='/uses/'>
          Uses
        </MainNavLink>
      </SidebarNavWrapper>
    </StyledSidebar>
  )
}
Sidebar.propTypes = {
  siteTitle: PropTypes.string
}

Sidebar.defaultProps = {
  siteTitle: ``
}

export default Sidebar
