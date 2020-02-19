import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import { StyledSidebar, MobileMenuButton, SidebarNavWrapper, FullscreenMenu, Title, MainNavLink } from "./styles";
import { useLargerThanSizes, useWindowSize } from "../../hooks";
import { AnimatePresence } from "framer-motion";
import TextAnimation from "../../assets/TextAnimation";

const mobileMenuVariant = {
    open: {
      x: 0,
      transition: {
        ease: "easeInOut"
      }
    },
    closed: {
      x: "100%",
      transition: {
        ease: "easeInOut"
      }
    }
}
const Sidebar = ({ siteTitle }) => {

  const { tablet } = useLargerThanSizes();

  const [ menuOpen, setMenuOpen ] = React.useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  }

  const { width } = useWindowSize();

  return (
    <StyledSidebar>
      <Title>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`
          }}
        >
          <TextAnimation id="jlh-logo" text={ width > 1000 ? "Jørgen Lybeck Hansen" : "JLH" }/>
        </Link>
      </Title>
      { tablet ? 
      <SidebarNavWrapper>
        
      <MenuButtons/>
    </SidebarNavWrapper>
    :
    <>
      <MobileMenuButton onClick={toggleMenu}>{ menuOpen ? "Close" : "Menu" } </MobileMenuButton>
      <AnimatePresence>
        { menuOpen && 
        
        <FullscreenMenu key="mob-menu" variants={mobileMenuVariant} animate={menuOpen ? "open" : "closed"} initial="closed" exit="closed">
            <MenuButtons/>
        </FullscreenMenu>
        }
      </AnimatePresence>
      </>
    }
    </StyledSidebar>
  );
};

Sidebar.propTypes = {
  siteTitle: PropTypes.string
};

Sidebar.defaultProps = {
  siteTitle: ``
};

export default Sidebar;

const MenuButtons = () => {

  return (
    <>
      <MainNavLink activeClassName="active" to="/about/">
        About
      </MainNavLink>
      <MainNavLink activeClassName="active" to="/projects/">
        Projects
      </MainNavLink>
      <MainNavLink activeClassName="active" to="/experience/">
        Experience
      </MainNavLink>
      <MainNavLink activeClassName="active" to="/code-snippets/">
        Code Snippets
      </MainNavLink>
      <MainNavLink activeClassName="active" to="/blog/">
        Blog
      </MainNavLink>
      <MainNavLink activeClassName="active" to="/hobbies/">
        Hobbies
      </MainNavLink>
    </>
  )
}