import React from 'react';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';



function MySwitch(props) {
  
    const [checked, setChecked] = React.useState(props.value);

    const toggleChecked = () => {
      setChecked((prev) => !prev);
      props.onChange(!checked);
    };

  


  return (
    <div>
      <FormControlLabel
      control={
      <Switch 
            size="small" 
            checked={checked} 
            onChange={toggleChecked} 
            color = "primary"
            edge = "start"
            />}

            label={props.name}
            labelPlacement="end"
            
    />
    <h1></h1>
    </div>
  );
}





export default MySwitch