import React, { useState, useEffect } from 'react'
import classes from '../styles/Contact.module.css';
import $ from 'jquery'
import { useTheme } from '@mui/material/styles';


import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const theme = useTheme();


  useEffect(() => {
    // console.log('name: ', name);
    // console.log('email: ', email);

  }, [name, email])



  return (
  <div className={classes.main}>
    <h1>Contact Form</h1>

    {/* <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1,
          // width: '25ch'
        },
      }}
      // width='100%'
      noValidate
      autoComplete="off"
    > */}
    <div className={classes.form}>

      <TextField onChange={(e) => setName(e.target.value)}
      sx={{
        '& > :not(style)': {width: '25ch',
      // color: theme.palette.primary.main
    },
      }}
      color='primary'
      autoFocus
      // FormHelperTextProps={{
      //   style: {
      //     color: 'white',
      //     borderColor: 'white !important'
      //   }
      // }}
      // InputProps={{
      //   style: {
      //     color: 'white',
      //     borderColor: 'white !important'
      //   }
      // }}
      // InputLabelProps={{
      //   style: {
      //     color: 'white',
      //     borderColor: 'white !important'
      //   }
      // }}

      id="standard-basic" label="Name" variant="standard" />
      <TextField onChange={(e) => setEmail(e.target.value)}
      sx={{
        '& > :not(style)': {width: '25ch' },
      }}
      id="standard-basic" label="Email" variant="standard" />
      <TextField onChange={(e) => setMessage(e.target.value)}
      id="standard-basic" label="Message"
      multiline
      rows={4}
      // sx={{
      //   '& > :not(style)': {width: '200%' },
      // }}
      className={classes.textarea}
      variant="standard" />

      <div className={classes.btn}>
        <Button
        sx={{width: '40%'}}
        variant="outlined">Send</Button>
      </div>

    </div>
    {/* </Box> */}
  </div>
  )
}

export default Contact