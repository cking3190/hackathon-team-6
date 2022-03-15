import logo from './logo.svg';
import './App.css';
import MainView from './components/MainView'

import {createTheme, ThemeProvider} from '@mui/material/styles';

export const THEME = createTheme({

  palette: {
    "common": {
      "black": "#000",
      "white": "#fff"
    },
    "background": {
      "paper": "#fff",
      "main": "#040320",
      "default": "rgba(4, 3, 32, 1)",
      "form": "#484462"
    },
    "primary": {
      "light": "rgba(188, 248, 236, 1)",
      "main": "#aae6ba",
      "dark": "rgba(74, 184, 154, 1)",
      "contrastText": "rgba(4, 3, 32, 1)"
    },
    "secondary": {
      "light": "rgba(255, 190, 205, 1)",
      "main": "rgba(254, 107, 139, 1)",
      "dark": "rgba(231, 49, 88, 1)",
      "contrastText": "#fff"
    },
    "error": {
      "light": "#e57373",
      "main": "#f44336",
      "dark": "#d32f2f",
      "contrastText": "#fff"
    },
    "text": {
      "primary": "#3F3E42",
      "secondary": "#C1BEBC",
      "disabled": "rgba(0, 0, 0, 0.38)",
      "hint": "rgba(0, 0, 0, 0.38)",
      "contrast": 'white'
    }
  },
  typography: {
     "fontFamily": `Proxima`,
     "fontSize": 14,
     "fontWeightLight": 300,
     "fontWeightRegular": 400,
     "fontWeightMedium": 500
   },
  overrides: {
    MuiMenuItem: {
      root: {
        background: "#040320",
        color: "#D8D8D8",
        '&:focus': {
          backgroundColor: "#040320",
          '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
            color: "white"
          }
        }
      }
    },
    MuiInputBase: {
      input: {
        color: "#D8D8D8",
        textAlign: 'left',
        fontSize: 'auto',
        padding: '0 0 .4rem 0',
        marginTop: '-.4rem',
      }
    },
    MuiInputLabel: {
      root: {
        color: "#D8D8D8",
        textAlign: 'center',
        padding: '0 0 .4rem 0',
        marginTop: '-.4rem',
      }
    },
    MuiAvatarGroup: {
      avatar: {
        border: '0px'
      }
    },
    MuiPaper: {
      root: {
        backgroundColor:"#484462",
        border: '1px',
        outline: 'none'

      }
    }

  }
});

function App() {
  return (
    <div className="App">
    <ThemeProvider theme={THEME}>
          <MainView/>

    </ThemeProvider>



    </div>
  );
}

export default App;
