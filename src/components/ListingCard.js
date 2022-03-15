import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, Grid, Box, IconButton , CardActionArea, CardActions } from '@mui/material';
import * as styles from './ListingCard.styles'

export default function ListingCard(props) {
    const classes = styles.listingCardStyles()

  return (
    <Card className={classes.cardArea} sx={{ maxWidth: 345, height:300 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={props.data["Image"].split('|')[0]}
          alt={props.data['Uniq Id']}
        />
        <CardContent className={classes.cardArea}>
          <Typography gutterBottom variant="body2" component="div" style={{height:'2.5rem', overflow:'hidden', textOverflow:'ellipsis'}}>
            {props.data['Product Name']}
          </Typography>
          <Typography variant="body2" color="text.secondary">
              <Grid container justifyContent='center' align='center'> 
              <div>
                    <Box className={`${classes.headerText} ${classes.likes}`}>
                        Likes
                    </Box>
                    <Box className={`${classes.weightBox} ${classes.likes}`}>
                        {props.data.likes.$numberInt}
                    </Box>

              </div>


              <div>
                    <Box className={`${classes.headerText} ${classes.inventory}`}>
                        Inventory
                    </Box>
                    <Box className={`${classes.weightBox} ${classes.inventory}`}>
                        {props.data.quantity.$numberInt}
                    </Box>

              </div>
              <div>
                    <Box className={` ${classes.headerText}  ${classes.boost}`}>
                        Boost
                    </Box>
                    <Box className={`${classes.weightBox} ${classes.boost}`}>
                        {props.data.quantity.$numberInt}
                    </Box>

              </div>



              </Grid>

                
          </Typography>
        </CardContent>
        </CardActionArea>
    </Card>
  );
}