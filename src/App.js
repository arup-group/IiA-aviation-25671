import React from "react";
import Stylesheets from "./components/Stylesheet";
import "./components/myStyles.css"
import ContinuousSlider from "./components/ContinuousSlider";
import { Button, Input } from "@material-ui/core";
import Slider from "@material-ui/core/Slider";
import InputBase from "@material-ui/core/InputBase";
import MySlider from "./components/MySlider";
import inputs1 from "./files/InputParams" 
import inputs2 from "./files/InputParams2" 
import ControlledOpenSelect from "./components/SelectElement"

class App extends React.Component {
  constructor() {
    super();
    this.state = {
        inputParams: {},
    };

    

    this.handleChange = this.handleChange.bind(this);
    this.ONCLICK = this.ONCLICK.bind(this);
  }


  componentDidMount() { // Define the default input values in state
      console.log("MOUNTED")
      const inputParams = {}
      inputs1.forEach((item) => {inputParams[item.name] = item.value})
      inputs2.forEach((item) => {inputParams[item.name] = item.value})

      this.setState({inputParams})

  }


  handleSubmit = () => {
    const params = this.state.inputParams;
    // api call here
  };

  handleChange = (key, value) => {
    const inputParams = { ...this.state.inputParams }; // deep copy an object
    inputParams[key] = value;
    this.setState({
        inputParams, // same as params: params
    });
    console.log(this.state.inputParams)
  };

  inputArray(json) {

    const myArray = json.map(item => item.type ==="slider" ? 
    <MySlider 
        value={item.value} 
        default={item.value} 
        name={item.name} 
        min={item.min} 
        max={item.max}
        step={item.step}
        onChange={(value) => this.handleChange(item.name, value)}
        /> 
    :  <h1>Button</h1> )

    return(myArray)

  }

  

  ONCLICK() {
    console.log(this.state.inputParams);
  }

  render() {

    const uiInputs1 = this.inputArray(inputs1)
    const uiInputs2 = this.inputArray(inputs2)

    return (
      
        <div className="main">
            <ul className="params1">
                {uiInputs1}
            </ul>
            <ul className="params1">
                {uiInputs2}
            </ul>
            <ul className="graphs">
                <ul className="graphsSmall">
                    <ControlledOpenSelect 
                    name="Security Lanes Order "
                    value="false" 
                    onChange = {(event) => console.log("something")}
                    />  
                </ul>
                <h1 className="graphsMedium">medium</h1>
                <h1 className="graphsSmall">small</h1>
                <h1 className="graphsMedium">medium</h1>
            </ul>
            <ul className="paramsOut">Graphs</ul>
            <ul className="paramsOut">Graphs</ul>
        </div>
     

  
      
    );
  }
}

export default App;
