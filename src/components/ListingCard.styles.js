
import {
    makeStyles
  } from "@mui/styles";

export const listingCardStyles = makeStyles((theme) => ({
    weightBox:{
        height:'50px', width:'50px', margin:'5px', borderRadius:'5px',
                            borderWidth:'2px',
                            borderStyle:'solid',
                            justify:'center',
                            alignItems:'center',
                            justifyContent:'center',
                            display:'flex',
                            fontSize:'1.2rem',
                           
    },
    likes:{
        color:'black',
        fontWeight:'bold',
       borderColor:'blue'
    },
    headerText:{
        color:'black',
        fontSize:'.8rem',
    },
    inventory:{
        color:'black',
        fontWeight:'bold',
        borderColor:'green'
     },
     boost:{
        color:'black',

        fontWeight:'bold',
        borderColor:'red'
     },
     cardArea:{
        backgroundColor: '#F8F8F8'
     },
}));