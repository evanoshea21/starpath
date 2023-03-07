import React from 'react'
import {ContextProvider} from '../globals/context.js';
import styles from '../styles/navbar.module.css';

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
      <div style={styles.navbar}>
        <p>Paragraph</p>
        <div>
          <p>Second Para</p>
          <p>Third Para</p>
        </div>
      </div>
      {/* do whatever layout here, like HEADER-FOOTER */}
      {children}
      <div style={styles.footer}>
        This is a footer
      </div>
    </ContextContainer>
  )
};

export default Layout