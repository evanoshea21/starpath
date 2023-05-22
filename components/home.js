import React from 'react'
import classes from '../styles/Home.module.css';
import $ from 'jquery'

const Home = () => {
  let font = [1,2,3,4,5,6,7];
  const [i, setI] = React.useState(6);

  // React.useEffect(() => {
  //   console.log('i', i)
  // },[i]);

  return (
    <>
    <div id='titles' className={classes.titles}
    onClick={() => setI(p => (p + 1) % 7)}
    >
    <h1 style={{
      fontFamily: `var(--font${font[i]})`
    }} className={classes.title} >Making Life<br/><span className={classes.gradientText} >Multi-Planetary</span><span style={{fontSize: '.8rem'}}>font:{i}</span> </h1>
    <h2 className={classes.subtitle} >Producing starship-scale propellant in space to enable civilizations on the Moon, Mars, and beyond.</h2>
    </div>
    {/* <div className={classes.gradient2}>
      Hello
    </div> */}

  <div className={classes.moon}>
    <div className={classes.shade}></div>
    <img id='moonImg' className={classes.moonImg} src='/moon.png' draggable="false"></img>
  </div>
    </>
  )
}

export default Home