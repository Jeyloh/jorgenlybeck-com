import styled from 'styled-components'
import {APP_COLOR} from '../Common/styles'
import {Link} from 'gatsby'
import {animatedBackground} from '../../components/IndexComponent/styles'

export const StyledSidebar = styled.header`
  width: 100%;
  color: ${APP_COLOR.light};
  height: 2em;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  z-index: 100;
  padding: 0 10vw;

  @media only screen and (max-width: 1200px) {
    padding: 1em;
  }

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
  padding: 0.3em;
  transition: 200ms all;
  font-size: .6em;
  margin-top: auto;
  line-height: 1em;

  &.active {
    background: rgba(255,255,255,0.7);
    color: ${APP_COLOR.dark};
  }

  :hover {
    color: ${APP_COLOR.light};
    text-decoration: underline;
  }
`
