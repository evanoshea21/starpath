import { Html, Head, Main, NextScript } from 'next/document'
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#f2f2f2',
    },
    secondary: {
      main: '#fff',
    },
  },
  overrides: {
    MuiInputBase: {
      input: {
        background: "#fff",
      },
    },
  },
});

export default function Document() {

  return (
    <Html lang="en">
      <Head />
      <ThemeProvider theme={theme}>
      <body>
        <Main />
        <NextScript />
      </body>
      </ThemeProvider>
    </Html>
  )
}



