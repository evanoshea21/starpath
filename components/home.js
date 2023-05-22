import React from 'react'
import classes from '../styles/Home.module.css';
import $ from 'jquery'

const Home = () => {
  let font = [1,2,3,4,5,6,7];
  const [i, setI] = React.useState(6);
  const [o, setO] = React.useState('0');
  const [o1, setO1] = React.useState(['0', 'translateY(20px)']);
  const [o2, setO2] = React.useState('0');
  const [o3, setO3] = React.useState('0');
  const [o4, setO4] = React.useState('0');

  React.useEffect(() => {
    setO('1');

    setTimeout(() => {
      setO1(['1', 'translateY(0px)'].slice());
    }, 500);
    setTimeout(() => {
      setO2('1');
    }, 1600);
    setTimeout(() => {
      setO3('1');
    }, 2800);
    setTimeout(() => {
      setO4('1');
    }, 3800);
  },[]);



  return (
    <div style={{
      opacity: o,
      transition: 'opacity 1.2s ease'
    }}>
    <div id='titles' className={classes.titles}
    onClick={() => setI(p => (p + 1) % 7)}
    >
    <h1 style={{
      fontFamily: `var(--font${font[i]})`
    }} className={classes.title} >Making Life<br/><span className={classes.gradientText} >Multi-Planetary</span><span style={{fontSize: '.8rem'}}>font:{i}</span> </h1>
    <h2 className={classes.subtitle} >
      <span style={{
        display: 'inline-block',
        opacity: o1[0],
        transform: o1[1],
        transition: 'all 2s ease'
      }}>
      Producing starship-scale propellant in space&nbsp;
      </span>
      <span style={{
        opacity: o2,
        transition: 'opacity 2s ease'
      }}>
      to enable civilizations on the Moon&nbsp;
      </span>
      <span style={{
        opacity: o3,
        transition: 'opacity 2s ease'
      }}>
      , Mars,&nbsp;
      </span>
      <span style={{
        opacity: o4,
        transition: 'opacity 2s ease'
      }}>
      and beyond.
      </span>


      </h2>
    </div>
    {/* <div className={classes.gradient2}>
      Hello
    </div> */}

  <div className={classes.moon}>
    <div className={classes.shade}></div>
    <img id='moonImg' className={classes.moonImg} src='/moon.png' draggable="false"></img>
  </div>
    </div>
  )
}

export default Home