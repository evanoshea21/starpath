import React from 'react'
import {ContextProvider} from '../globals/context.js';
import classes from '../styles/navbar.module.css';

const ContextContainer = ({children}) => {
  return (
    <ContextProvider>
      {children}
    </ContextProvider>
  )
};
const Layout = ({children}) => {
  return (
    <ContextContainer>
      {/* HEADER */}
      <div className={classes.navbar}>
        <p>WEB LOGO</p>
        <div className={classes.navItems}>
          <p>ABOUT</p>
          <p>CONTACT</p>
        </div>
      </div>

      {/* PAGE CONTENT */}
      {children}

      {/* FOOTER */}
      <div className={classes.footer}>
        This is a footer
      </div>
    </ContextContainer>
  )
};

export default Layout