import { createTheme } from '@mui/material'

const theme = createTheme({
  palette: {
    background: {
      paper: '#16131E',
    },
    text: {
      primary: '#ffffff',
      secondary: '#ffffff',
    },
    primary: {
      main: '#1C1624',
    },
  },
  typography: {
    fontFamily: `'M PLUS 2', sans-serif`,
  },
})

export default theme
