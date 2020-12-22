import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Typography } from "@material-ui/core";
import MenuItem from '@material-ui/core/MenuItem';

//<TextField id="outlined-basic" label="Outlined" variant="outlined" />

class MyTextField extends React.Component {
    constructor(){
        super()
        this.state  = {}
    }

    render(){

        const inputProps = {
            type: "number",
            step: 0.300
          };

        const currencies = [
            {
              value: 'USD',
              label: '$',
            },
            {
              value: 'EUR',
              label: '€',
            },
            {
              value: 'BTC',
              label: '฿',
            },
            {
              value: 'JPY',
              label: '¥',
            },
          ];  

        
        const [currency, setCurrency] = currencies[0].label;

        const handleChange = (event) => {
            setCurrency(event.target.value);
          };

        
          console.log(currencies[0].value)

        return(

        

        <form>
       <TextField
          id="standard-select-currency"
          select
          label="Select"
          value={currency}
          onChange={handleChange}
          helperText="Please select your currency"
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

        </form>
        



        )



    }
}


export default MyTextField