import React from "react"
import Slider from '@material-ui/core/Slider';
import { Typography } from "@material-ui/core";
import Grid from '@material-ui/core/Grid';



class MySlider extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            value: props.value ,
            name: props.name,
            default: props.default,
            min:props.min,
            max:props.max,
            step:props.step

        }

    }

 

    onChange = (e,val) => { 
        this.props.onChange(val)
        console.log("debug")
        console.log(e)
        console.log(val)


        this.setState(prevState => {
        return {
            value: val,
            name: this.state.name
        }
    })
}
        

    

    componentDidUpdate() {
        //this.props.onChange(this.state)
        //console.log("isupdating")
    }



    render(){

        return(
        <div>
        <Grid container spacing={2}>
        <Grid item xs>
            <Typography variant= "subtitle3">{this.state.name}</Typography>
        </Grid>
        <Grid item>
            <Typography>{this.state.value}</Typography>
        </Grid>
        </Grid>
            
        <Slider valueLabelDisplay='auto' 
                min={this.state.min} 
                max={this.state.max}
                step={this.state.step}
                defaultValue={this.state.default} 
                onChange={this.onChange} 
                />
        <h1></h1>

        </div>
        )
    }
}

export default MySlider

//        <Slider valueLabelDisplay='auto' min={this.state.min} defaultValue={this.state.default} onChange={this.getValue} />


