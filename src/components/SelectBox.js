import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';




function ControlledOpenSelect(props) {
  
  const [value, setAge] = React.useState(props.value);
  const [open, setOpen] = React.useState(false);

  const name = props.name

  const handleChange = (event) => {
    setAge(event.target.value);
    props.onChange(event.target.value);
    
    //console.log(props.name)
    //console.log(event.target.value)
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  

  return (
    <div>  
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={value}
          onChange={handleChange}
        >
          <MenuItem value={true}>true</MenuItem>
          <MenuItem value={false}>false</MenuItem>
        </Select>
    </div>
  );
}

class SelectBox extends React.Component {
    constructor(){
        super()
        this.state = {
        }
    }

    onChange = (val) => { 
        this.props.onChange(val)
        
        //console.log("debugs", val)
        this.setState(prevState => {
        return {
            value: val,
        }
    })
}
    

    render(){

        return (
            <div>
            <ControlledOpenSelect value={this.props.value} onChange={(value) => this.onChange(value)}/>
            <h1></h1>
            </div>

        )
    }

}

export default SelectBox





