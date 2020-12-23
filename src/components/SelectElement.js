import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Grid from '@material-ui/core/Button';



function ControlledOpenSelect(props) {
  
  const [age, setAge] = React.useState(props.value);
  const [open, setOpen] = React.useState(false);

  const name = props.name

  const handleChange = (event) => {
    setAge(event.target.value);
    props.onChange(event.target.value);
    
    console.log(props.name)
    console.log(event.target.value)
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  
//const onChange = (k,value) => {}



  return (
    <div>
        <div>{name}</div>
        <Select
          //labelId="demo-controlled-open-select-label"
          //id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={age}
          onChange={handleChange}
        >
          <MenuItem value={true}>true</MenuItem>
          <MenuItem value={false}>false</MenuItem>
        </Select>
    </div>
  );
}





export default ControlledOpenSelect