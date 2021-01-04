import React from 'react';
import { useState, useRef, useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import ListItemText from '@material-ui/core/ListItemText'
import { data } from './Data.js';

const useStyles = makeStyles((theme) => ({
  button: {
    display: 'block',
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

export default function ControlledOpenSelect(props) {
  const classes = useStyles();
  const [chartName, setChartName] = useState('');
  const [open, setOpen] = useState(false);
  
  const handleChange = (event) => {
    setChartName(event.target.value);    
    props.onSelectionChange(event.target.value);    
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <Button className={classes.button} onClick={handleOpen}>
        Open the chart
      </Button>
      <FormControl className={classes.formControl}>
        <InputLabel id="open-select-label">Chart</InputLabel>
        <Select
          labelId="open-select-label"
          id="controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={chartName}
          onChange={handleChange}>
             {data.map((name) => (
            <MenuItem key={name.title} value={name.title}>
                <ListItemText primary={name.title} />
            </MenuItem>
          ))}          
        </Select>
      </FormControl>
    </div>
  );
}
