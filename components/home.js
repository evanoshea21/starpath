import React from 'react'
import classes from '../styles/Home.module.css';
import $ from 'jquery'

const Home = () => {

  React.useEffect(() => {
    $('#titles').css('opacity','1');
    $('#img').css('opacity','.3');
    $('#logo, #btn, #moonImg').css('opacity','1');
  },[]);


  return (
    <>
    <div id='titles' className={classes.titles}>
    <h1 className={classes.title} >Making Life Multi-Planetary</h1>
    <h2 className={classes.subtitle} >We are a company that... fill this section in with your own subheader if you want to; filling up words here.</h2>
  </div>

  <div className={classes.moon}>
    <div className={classes.shade}></div>
    <img className={classes.moonImg}  id='moon' src='/moon.png' draggable="false"></img>
  </div>
    </>
  )
}

export default Home