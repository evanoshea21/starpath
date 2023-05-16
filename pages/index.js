import classes from '../styles/Home.module.css';
import React from 'react';
import $ from 'jquery'
import Home from '../components/home.js';
import ContactForm from '../components/contact.js';
import Particles from '../components/particles.js';

export default function HomePage() {
  const [showContact, setShowContact] = React.useState(false);

  const [windowSize, setWindowSize] = React.useState([]);

  React.useEffect(() => { //window resize
    if(window) {
      const handleWindowResize = () => {
        setWindowSize([window.innerWidth, window.innerHeight]);
      };
      handleWindowResize();
      window.addEventListener('resize', handleWindowResize);

      return () => {
        window.removeEventListener('resize', handleWindowResize);
      };
    }
  }, []);


  return (
    <>
    {windowSize[0] > 500 && (
      <Particles/>
    )}
    <div className={classes.main}>

      <div className={classes.nav}>
        <h1 id='logo' className={classes.logo}>Starpath<br/>Robotics</h1>

        <div id='btn' className={classes.btnBox}>

          <button className={classes.contactBtn} onClick={() => {reduceOpacity();
          setTimeout(() => {
            setShowContact((p) => !p)
          }, 0);
            }} >{showContact ? 'Back' : 'Contact'}</button>
        </div>
      </div>

      {showContact ? (
        <ContactForm />
      ) : (
        <Home />
      )}

    {windowSize[0] <= 600 && (
      <img className={classes.bgImage}  id='img' src='/stars2.jpg' draggable="false"></img>
    )}

      </div>

    {/* <ContactForm /> */}
    </>

  )
}
