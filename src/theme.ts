import { createTheme } from "@mui/material";

export const theme = createTheme({
    typography: {
      fontFamily: `'Quicksand', sans-serif`,
    },
    components: {
      MuiButtonBase: {
        defaultProps: {
          draggable: false
        }
      }
    },
    palette: {
      background: {
        paper: 'rgb(255 233 211)',
      },
      primary: {
        main: 'rgb(255 181 93)  '
      },
      secondary: {
        main: 'rgb(204 147 9)'
      }
    }
  })