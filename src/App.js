import React from "react";
import "./components/myStyles.css"
import MySlider from "./components/MySlider";
import inputs1 from "./files/InputParams" 
import inputs2 from "./files/InputParams2" 
import MySwitch from "./components/MySwitch"
import ParametersVis from "./components/ParametersVis"
import dummyResponse from "./files/dummyResponse.json" 
import Visualization from "./components/Visualization"


class App extends React.Component {
  constructor() {
    super();
    let outParams = dummyResponse
    this.state = {
        inputParams: {},
        outParams
    };

    

    this.handleChange = this.handleChange.bind(this);
    this.ONCLICK = this.ONCLICK.bind(this);
  }


  componentDidMount() { // Define the default input values in state
      console.log("MOUNTED")
      const inputParams = {}
      inputs1.forEach((item) => {inputParams[item.key] = item.value})
      inputs2.forEach((item) => {inputParams[item.key] = item.value})

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
    console.log(this.state)
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
        onChange={(value) => this.handleChange(item.key, value)}
        /> 
    :  
    <MySwitch 
    name={item.name}
    value={item.value}
    onChange={(value) => this.handleChange(item.key, value)}
    />
     )

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
                <h4>Input layer 1</h4>
                {uiInputs1}
            </ul>
            <ul className="params1">
                <h4>Input layer 2</h4>
                {uiInputs2}
            </ul>
            <ul className="graphs">
                <ul className="graphsSmall">
                  Small
                </ul>
                <ul className="graphsMedium" id='visContainer'>
                                    
                  </ul>
                <ul className="graphsSmall">small</ul>
                <ul className="graphsMedium">medium</ul>
            </ul>
                <ParametersVis data={this.state.outParams.params} graphData={'graph data'}/>
        </div>
     

  
      
    );
  }
}

export default App;
