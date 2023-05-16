import classes from '../styles/Home.module.css';
import React from 'react';
import $ from 'jquery'
import Home from '../components/home.js';
import ContactForm from '../components/contact.js';
import Particles from '../components/particles.js';

export default function HomePage() {
  const [showContact, setShowContact] = React.useState(false);

  function reduceOpacity() {
    $('#titles').css('opacity','0');
    // $('#img').css('opacity','0');
    $('#moonImg').css('opacity','0');

    // $('#contact').css('opacity','0');

  }


  return (
    <>
<Particles/>
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

      {/* <img className={classes.bgImage}  id='img' src='/stars2.jpg' draggable="false"></img> */}

      </div>

    {/* <ContactForm /> */}
    </>

  )
}
