import classes from '../styles/Home.module.css';
import React from 'react';
import $ from 'jquery'

export default function Home() {

  React.useEffect(() => {
    $('#titles').css('opacity','1');
    $('#img').css('opacity','.3');
    $('#logo, #btn').css('opacity','1');


  },[]);




  return (
    <>
    <div className={classes.main}>

      <div className={classes.nav}>
        <h1 id='logo' className={classes.logo}>Starship<br/>Robotics</h1>

        <div id='btn' className={classes.btnBox}>
          <button className={classes.contactBtn} >Contact</button>
        </div>
      </div>

      <div id='titles' className={classes.titles}>
        <h1 className={classes.title} >Making Life Multi-Planetary</h1>
        <h2 className={classes.subtitle} >We are a company that... fill this section in with your own subheader if you want to; filling up words here.</h2>
      </div>

      <img id='img' src='/stars2.jpg' draggable="false"></img>
    </div>
    </>

  )
}
