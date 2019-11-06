import styled from 'styled-components'
import {APP_COLOR} from '../Common/styles'
import {Link} from 'gatsby'

export const StyledSidebar = styled.header`
  width: 200px;
  min-height: inherit;
  background: ${APP_COLOR.dailyColor3};
  color: ${APP_COLOR.light};

  display: flex;
  flex-direction: column;
  align-items: center;
`
export const Title = styled.h1`
  font-family: 'Audiowide', cursive;
  user-select: none;
  padding: 1.45rem 0;
  color: white;
  font-size: 1.2em;
  text-align: right;

  a {
    color: ${APP_COLOR.light};
  }
`

export const SidebarNavWrapper = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`

export const MainNavLink = styled(Link)`
  font-family: 'Open Sans';
  color: ${APP_COLOR.light};
  text-align: right;
  width: 100%;
  margin-bottom: 0.45rem;
  transition: 200ms all;
  padding: 0.2em 2.15em 0.2em 0;
  font-size: 1.2em;

  &.active {
    background: ${APP_COLOR.light};
    color: ${APP_COLOR.dark};
  }

  :hover {
    background: ${APP_COLOR.light};
    color: ${APP_COLOR.dark};
  }
`
