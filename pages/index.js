import classes from '../styles/Home.module.css';
import React from 'react';
import $ from 'jquery'
import Home from '../components/home.js';
import ContactForm from '../components/contact.js';
import Particles from '../components/particles.js';

export default function HomePage() {
  const [showContact, setShowContact] = React.useState(false);
  const [firstLogo, setFirstLogo] = React.useState(true);

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
          {/* <h1 id='logo' className={classes.logo}>Starpath<br/>Robotics</h1> */}
          <div style={{
            width: firstLogo ? '200px' : '170px'
          }} onClick={() => setFirstLogo(p => !p)}  className={classes.logoBox}>
            <img className={classes.logoImg}  src={`/${firstLogo ? 'logo' : 'logo2'}.svg`}></img>
          </div>

          <div id='btn' className={classes.btnBox}>

            <button className={classes.contactBtn} onClick={() => {
              setShowContact((p) => !p);
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
