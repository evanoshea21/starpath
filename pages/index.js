import classes from '../styles/Home.module.css';
import React from 'react';
import $ from 'jquery'
import Home from '../components/home.js';
import ContactForm from '../components/contact.js';

export default function HomePage() {
  const [showContact, setShowContact] = React.useState(false);


  return (
    <>
    <div className={classes.main}>

      <div className={classes.nav}>
        <h1 id='logo' className={classes.logo}>Starpath<br/>Robotics</h1>

        <div id='btn' className={classes.btnBox}>
          <button className={classes.contactBtn} onClick={() => setShowContact((p) => !p)} >Contact</button>
        </div>
      </div>

      {showContact ? (
        <ContactForm />
      ) : (
        <Home />
      )}


      <img className={classes.bgImage}  id='img' src='/stars2.jpg' draggable="false"></img>

      </div>

    {/* <ContactForm /> */}
    </>

  )
}
