import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';


const useStyles = makeStyles({
  root: {
    width: 200,
  },
});



export default function ContinuousSlider(props) {


  const classes = useStyles();
  const [value, setValue] = React.useState(50);

  let maxvalue = props.maxvalue;
  let minvalue = props.minvalue;
  let namevalue = props.namevalue;

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>

      <Grid container spacing={2}>
        <Grid item xs>
        <Typography id="continuous-slider" gutterBottom>
        {namevalue}
      </Typography>
        </Grid>
        <Grid item>
            <Typography id="continuous-slider" gutterBottom>
            {value.toString()}
            </Typography>
            
        </Grid>
      </Grid>
      <Slider value={value} max={maxvalue} min={minvalue} step={0.1} color={"primary"} 
      scale = {(x) => x ** 10}
      onChange={handleChange} aria-labelledby="continuous-slider" />
    </div>
  );
}