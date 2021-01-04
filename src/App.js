import React from "react";
import "./components/myStyles.css"
import MySlider from "./components/MySlider";
import inputs1 from "./files/InputParams" 
import inputs2 from "./files/InputParams2" 
import MySwitch from "./components/MySwitch"
import ParametersVis from "./components/ParametersVis"
import dummyResponse from "./files/dummyResponse.json" 
import DrawChart from "./components/Chart"

class App extends React.Component {
  constructor() {
    super();


    let outParams = dummyResponse // this is the dummy data that should come from Rhino COMPUTE



    this.state = {
        inputParams: {},
        outParams,
        graphData : {provided: null, required: null, name: null}
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleUpdateChart = this.handleUpdateChart.bind(this);

  }


  componentDidMount() { // Define the default input values in state
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
  };

  handleUpdateChart = (value) => {    
    const chartSelected = this.getChartValues(value)
    this.setState({graphData: { provided : chartSelected.prov, required: chartSelected.req, name: chartSelected.name}})    
  };

  getChartValues  = (chartName) =>{
    const result = this.state.outParams.graphs.filter(obj => {
      return obj.title === chartName
    })  
    return {req: result[0].value_required, prov: result[0].value_provided, name: result[0].value_name };
  }


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


  render() {

    const uiInputs1 = this.inputArray(inputs1)
    const uiInputs2 = this.inputArray(inputs2)

    const chartDataIn = this.state.outParams.graphs
    const chartDataOut = this.state.graphData

    const paramsData = this.state.outParams.params


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
                <DrawChart chartDataIn={chartDataIn} chartDataOut={chartDataOut} handleUpdateChart = {this.handleUpdateChart}/>                
            </ul>
                <ParametersVis data={paramsData} chartDataOut={chartDataOut}/>
        </div>
    );
  }
}

export default App;
