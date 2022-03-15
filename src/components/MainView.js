import {useState} from 'react'
import {
      Grid,
      Container,
      Typography,
      Button
      } from '@mui/material';
      import axios from 'axios'
import SearchBar from "./AutocompleteSearchBar"
import ListingCard from "./ListingCard"
import mdbimg from "../assets/mongoleaf.png"

export default function MainView() {
  const [ searchTerm, setSearchTerm ] = useState('')
  const [ results, setResults ] = useState({})

    
  const handleSearch = (e) => {

    setSearchTerm(e.val)
    if (e.src === 'select'){
        handleQueryResults()

    }
}

  const handleQueryResults = () => {
    axios.get(`https://us-east-1.aws.data.mongodb-api.com/app/application-0-asolr/endpoint/search?searchStr=${searchTerm}`)
    .then((res) => {
        const data = res.data;
        setResults(data)
    })
  }

  return (
    <Container style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
        <div style={{marginTop:'20px'}}> 
         <img
            src={mdbimg}
            height='30px'
         > 
         
         </img>
         <Typography style={{marginTop:'3px'}}>
         Mongomart 
         </Typography>
        
           
        
        </div>
        <div > 
            
            <Grid container style={{width:'60vw', justify:'center', alignItems:'center', justify:'center', marginTop:'10px', align:'center',justifyContent:'center'}}>
                <Grid item xs={5}>
                    <SearchBar onChange={handleSearch} />
                </Grid>
                <Grid item xs={2} style={{ position:'relative', left:'50px'}}>
                    <Button variant="contained" color='primary' onClick={handleQueryResults}> Search</Button>
                </Grid>
            </Grid>
        </div>

        <Grid container spacing={4} style={{position:'relative', marginTop:'40px',  backgroundColor:'white', width:'80vw', alignItems:'center', justifyContent:'center'}}> 
        {
                      results.length > 0
                      ? ( results.map((listing) => (
                            <Grid item key={listing} xs={3} style={{ margin: '10px' }}>
                              <ListingCard data={listing}> </ListingCard>
                            </Grid>
)))
                       : (<div/>)

                    }
                    </Grid>

        <div>


        </div>
    </Container>
  )
};