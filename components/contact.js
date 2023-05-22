import React, { useState, useEffect } from 'react'
import classes from '../styles/Contact.module.css';
import $ from 'jquery'
// import { useTheme } from '@mui/material/styles';
import { styled } from '@mui/material/styles';
import emailjs from '@emailjs/browser';

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
      borderBottomColor: 'grey',
    }
  },
  '& .MuiInput-underline:before': {
    borderBottomColor: 'white',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: 'white',
  },
  '& .MuiInput-underline:hover': {
      borderBottomColor: 'blue',
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

  const [sending, setSending] = React.useState(false);
  const [mailsent, setMailSent] = React.useState(false);
  const [o, setO] = React.useState('0');

  React.useEffect(() => {
    setO('1')
  },[]);
  // const theme = useTheme();
  //saruav email -> service_fhgycm9
  //test email -> service_b6rp3d8

  function sendEmail() {
    setSending(true);
    emailjs.send('service_b6rp3d8', 'template_yxwjyfd', {from_name: name, from_email: email, message}, '2QqDv6CjLhgif101m')
      .then((result) => {
          console.log(result.text);
          setSending(false);
          setMailSent(true);
      }, (error) => {
          console.log(error.text);
      });
  }

  // React.useEffect(() => {
  //   console.log('name:', name, '\nmessage:', message, '\nemail:', email);
  // },[name, message, email]);


  return (
  <div id='contact' className={classes.main}
  style={{
    opacity: o,
    transition: 'opacity 1.2s ease'
  }}>
    <h1>Contact Us</h1>
    {!mailsent ? (
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
      type='email'

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
        onClick={sendEmail}
        sx={{width: '40%'}}
        variant="outlined">{sending ? 'Sending..' : 'Send'}</ButtonS>
      </div>

    </div>

    ) : (
      <div className={classes.thanks}>
        <p>
        Thanks for Reaching out. We will attempt to respond prompty.
        </p>
        </div>
    )}
    {/* </Box> */}
  </div>
  )
}

export default Contact