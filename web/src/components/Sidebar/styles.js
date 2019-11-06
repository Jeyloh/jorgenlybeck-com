import styled from 'styled-components'
import {APP_COLOR} from '../Common/styles'
import {Link} from 'gatsby'
import {animatedBackground} from '../../components/IndexComponent/styles'

export const StyledSidebar = styled.header`
  ${animatedBackground};
  width: 100%;
  color: ${APP_COLOR.light};
  padding: 1em;
  height: 2em;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`
export const Title = styled.h1`
  font-family: 'Audiowide', cursive;
  user-select: none;
  color: white;
  font-size: 1.2em;
  text-align: right;

  a {
    color: ${APP_COLOR.light};
  }
`

export const SidebarNavWrapper = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

export const MainNavLink = styled(Link)`
  font-family: 'Open Sans';
  color: ${APP_COLOR.light};
  text-align: right;
  padding: .3em;
  transition: 200ms all;
  font-size: 1.2em;

  &.active {
    background: ${APP_COLOR.light};
    color: ${APP_COLOR.dark};
  }

  :hover {
    color: ${APP_COLOR.dark};
  }
`
