import React, { useState, useEffect } from 'react'
import classes from '../styles/Contact.module.css';
import $ from 'jquery'
// import { useTheme } from '@mui/material/styles';
import { styled } from '@mui/material/styles';


import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const TextFieldS = styled(TextField)({
  // label when focused
  // '& label.Mui-focused': {
  //   color: 'grey',
  // },
  // label NOT focused
  '& label.MuiInputLabel-root': {
    color: 'grey',
  },
  // underline, before/after focus
  '&:hover': {
    '& .MuiInput-underline:before': {
      borderBottomColor: 'white',
    }
  },
  '& .MuiInput-underline:before': {
    borderBottomColor: 'white',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: 'white',
  },
  '& .MuiInput-underline:hover': {
      borderBottomColor: 'yellow',
    },
    '& .MuiInput-root': {
      color: 'white'
    },
});

const ButtonS = styled(Button)({
  '&:hover': {
    '& .MuiButton-outlined': {
      color: 'white',
      borderColor: 'white',
      backgroundColor: 'green',
    }
  },
  color: 'white',
  borderColor: 'white',
  padding: 8,
  borderRadius: 4,
});

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  // const theme = useTheme();


  useEffect(() => {
    // console.log('name: ', name);
    // console.log('email: ', email);

  }, [name, email])



  return (
  <div className={classes.main}>
    <h1>Contact Us</h1>
    {/* <CssTextField
    // focused={true}
    // label="Custom CSS" id="custom-css-outlined-input"
    id="standard-basic" label="Name" variant="standard"
    /> */}

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

      <TextFieldS onChange={(e) => setName(e.target.value)}

      sx={{width: '25ch',
      color: '#fff'
          // backgroundColor: '#fff',
          // border: '1px solid #fff',
      // color: theme.palette.primary.main
      }}

      InputProps={{
        sx: {
          color: '#fff',
          textTransform: 'capitalize',
        },
      }}
      id="standard-basic" label="Name" variant="standard" />

      <TextFieldS onChange={(e) => setEmail(e.target.value)}
      sx={{width: '25ch'
      }}
      id="standard-basic" label="Email" variant="standard" />
      <TextFieldS onChange={(e) => setMessage(e.target.value)}
      id="standard-basic" label="Message"
      multiline
      rows={4}
      // sx={{
      //   '& > :not(style)': {width: '200%' },
      // }}
      className={classes.textarea}
      variant="standard" />

      <div className={classes.btn}>
        <ButtonS
        sx={{width: '40%'}}
        variant="outlined">Send</ButtonS>
      </div>

    </div>
    {/* </Box> */}
  </div>
  )
}

export default Contact