import React, {useState} from 'react'
import "./Autocomplete.styles.css"
import * as styles from './AutocompleteStyles.styles'
import axios from 'axios'

import {
    Typography,
    TextField,
    Grid,
    Autocomplete,

} from '@mui/material';

export default function SearchBox(props){
  const classes = styles.autocompleteStyles()

  const [ options, setOptions ] = useState([]);
  const [inputValue, setInputValue] = React.useState('');
  const [value, setValue] = React.useState('');

    React.useEffect(() => {
      if (inputValue === "") {
        setOptions([])
        return
      }
      props.onChange({val: inputValue, src: 'text_box'})
      axios.get(`https://us-east-1.aws.data.mongodb-api.com/app/application-0-asolr/endpoint/autocomplete?searchStr=${inputValue}`)
        .then((res) => {
            const data = res.data;
            setOptions(data)
        })
    }, [value, inputValue]);

    return (
      <Autocomplete
          classes={{inputRoot: classes.inputRoot, input: classes.inputRoot}}
          options={options.map((option) => option.key)}
          style={{width:'200px', color:'black'}}
          getOptionLabel={(option) => (
          typeof option === 'string'
          ? option
          : option['Product Name'])}
          filterOptions={(x) => x}
          options={options} autoComplete="autoComplete"
          includeInputInList="includeInputInList"
          filterSelectedOptions="filterSelectedOptions"
          closeIcon=""
          popupIcon=""
          value={inputValue}
          onChange={(event, newValue) => {
          setOptions(
            newValue
            ? [
              newValue, ...options
            ]
            : options);
          setValue(newValue);
          props.onChange(newValue)}}
          onInputChange={(event, newInputValue) => {setInputValue(newInputValue);}}
          renderInput={(params) => (
              <TextField
                className={classes.textField}
                placeholder='Search for a Product'
                {...params}
                InputLabelProps={{shrink: false, 'aria-label': 'Without label'}}
                InputProps={{...params.InputProps, disableUnderline: true }}
                defaultValue={props.defaultValue}/>)}
        />






    )
}