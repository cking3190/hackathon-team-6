
import {
    makeStyles
  } from "@mui/styles";

export const autocompleteStyles = makeStyles((theme) => ({
    textField: {
        width:'95%',
        marginLeft:theme.spacing(.5),
        backgroundColor: `${theme.palette.background.form}`,
        height:'1rem',

        "& .MuiSelect-root": {
            color: `${theme.palette.text.primary}`,
            marginTop:'0rem',
        },

        "& .MuiFilledInput-input": {
          backgroundColor: `${theme.palette.background.form}`,
            color: `${theme.palette.text.primary}`,
        },
        "& .MuiSelect-icon": {
            color: `${theme.palette.text.primary}`,
            marginRight: '.5rem',
            position:'absolute'

        },
        '& .MuiInputBase-root': {
            color: 'white',
        },
    },
    inputRoot: {
        textTransform:'capitalize',
        marginTop:'1px',
        fontSize:'.9rem',
        marginLeft:'.1rem',
        "& ::placeholder" : {
          color: `${theme.palette.text.secondary}`,
          opacity: 1,
          fontSize:'.8rem',
        }
    },
    textField: {
      color: 'black',
      width:'30vw',
      textTransform:'capitalize',
      fontSize:'12px'
    },
    resultTextBox: {
      width: '30vw',
      textTransform:'capitalize',
      fontSize:'12px'
    },
    icon : {
      color: '#FFFFFF',
      fontSize:'13px',
      marginRight:'10px'
    },
    option: {
      fontSize: 45,
      '& > span': {
        marginRight: 10,
        fontSize: 18,
      },
    }
}));