import { Html, Head, Main, NextScript } from 'next/document'
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: '#fff',
    },
    secondary: {
      // This is green.A700 as hex.
      main: '#fff',
    },
  },
});


export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
      <ThemeProvider theme={theme}>
        <Main />
        <NextScript />
      </ThemeProvider>
      </body>
    </Html>
  )
}



