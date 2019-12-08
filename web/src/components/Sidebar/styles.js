import styled from "styled-components";
import { APP_COLOR } from "../Common/styles";
import { Link } from "gatsby";
import { animatedBackground } from "../../components/IndexComponent/styles";
import { motion } from "framer-motion";

export const StyledSidebar = styled.header`
  width: 100%;
  color: ${APP_COLOR.light};
  height: 5vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  z-index: 100;
  padding: 0 10vw;

  #jlh-logo:after {
      content: "Jørgen Lybeck Hansen"
    }

  @media only screen and (max-width: 1024px) {
    padding: 0 3em;

    #jlh-logo:after {
      content: "JLH"
    }
  }
`;
export const Title = styled.h1`
  font-family: "Audiowide", cursive;
  user-select: none;
  color: white;
  font-size: 1.2em;
  text-align: right;

  a {
    color: ${APP_COLOR.light};
  }
`;

export const SidebarNavWrapper = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

`;

export const MobileMenuButton = styled.button`
  position: absolute;
  top: 1em;
  right: 1em;
  border: none;
  background: none;
  color: white;
  z-index: 1000;
  user-select: none;
`;

export const FullscreenMenu = styled(motion.nav)`
  ${animatedBackground};
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 10vh 0;
  align-items: center;
  top:0;left:0;right:0;bottom:0;
  height: 100vh;
  position: absolute;

  * {
    color: white;
  }
`;

export const MainNavLink = styled(Link)`
  font-family: "Open Sans";
  color: ${APP_COLOR.light};
  text-align: right;
  padding: 0.3em;
  transition: 200ms all;
  font-size: .8em;
  margin-top: auto;
  line-height: 1em;
  user-select: none;


  &.active {
    border-bottom: 3px solid white;
    color: ${APP_COLOR.light};
  }

  :hover {
    color: ${APP_COLOR.light};
    text-decoration: underline;
  }

  @media only screen and (max-width: 1024px) {
    font-size: 2em;
    padding: 0em;
  margin-top: unset;

  }
`;
