import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, Grid, Box, IconButton , CardActionArea, CardActions } from '@mui/material';
import * as styles from './ListingCard.styles'
import axios from 'axios'

export default function ListingCard(props) {
    const classes = styles.listingCardStyles()

    const setBoost = (id, boost_score) => {
      axios.get(`https://us-east-1.aws.data.mongodb-api.com/app/application-0-asolr/endpoint/setBoost?asin=${id}&boost=${boost_score}`)
      .then((res) => {
          const data = res.data;
      })

    }

  return (
    <Card className={classes.cardArea} sx={{ maxWidth: 345, height:500 }}>
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



              </Grid>
              <Grid container  spacking={2} rowSpacing={{ xs: 1, sm: 2, md: 3 }}  gutterBottom style={{marginTop:'20px'}} justifyContent='center' align='center'> 

              <Grid item xs={6}>
                    <Button variant='contained' onClick={() => setBoost(props.data['Uniq Id'], 0)}>
                        Hide
                    </Button>

              </Grid>

              <Grid item xs={6}>
                    <Button variant='contained' onClick={() =>setBoost(props.data['Uniq Id'], .5)}>
                        Bury
                    </Button>

              </Grid>

              <Grid item xs={6}>
                    <Button variant='contained' onClick={() => setBoost(props.data['Uniq Id'], 1.25)}>
                        Boost
                    </Button>

              </Grid>

              <Grid xs={6} item onClick={()=>setBoost(props.data['Uniq Id'], 10000)}>
                    <Button variant='contained'>
                        Pin
                    </Button>

              </Grid>


              </Grid>


        </CardContent>
        </CardActionArea>
    </Card>
  );
}