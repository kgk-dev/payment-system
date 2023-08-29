import { ThemeOptions, createTheme } from '@mui/material/styles';

export const themeOptions: ThemeOptions = {
  palette: {
    mode: 'light',
    primary: {
      main: '#453e3c',
      light: '#25252d',
      dark: '#453e3c',
    },
  },
}

const theme = createTheme(themeOptions)

export default theme