import "./myStyles.css"
import React from "react"




class Box extends React.Component{
    constructor(){
        super()
    }

    

    render(){

        let value = this.props.value

        if (value == null){
            value = "-"
        }


        const divStyle = {
            color: this.props.color,
            display: 'flex',
            justifyContent: 'center',
            top: '0%',
            fontSize: '40'

          };

          const titleStyle = {
            fontSize: '13'
          };


        return(
            <React.Fragment> 
                <ul className="paramsVis">
                    <ul className="ParamsVisIn">
                        <h1 style={titleStyle}>{this.props.name}</h1>
                    </ul>
                    <h1 style={divStyle}>{value}</h1>
                    
                </ul>
            </React.Fragment>
        )
    }
}



class ParametersVis extends React.Component{
    constructor(){
        super()
    }




    render(){

        //console.log('props data: ',this.props.data)

        const visData = this.props.data
        const graphData = this.props.chartDataOut

        const colorProvided = "1BB674"
        const colorRequired = "00CFFF"

        return(
            <React.Fragment> 
            <ul className="paramsOut">
            <Box name="provided security lane n" value={visData.prov_sec_units} color = {colorProvided}/>
            <Box name="provided security PHP" value={visData.prov_thr_php} color = {colorProvided}/>
            <Box name="provided capacity PHP" value={visData.prov_cap_php} color = {colorProvided}/>
            <Box name={ "provided " + graphData.name }  value={graphData.provided} color = {colorProvided}/>
            </ul>
            <ul className="paramsOut">
            <Box name="security lane n" value={visData.req_sec_units} color = {colorRequired}/>
            <Box name="throughput PHP" value={visData.req_thr_php} color = {colorRequired}/>
            <Box name="capacity PHP" value={visData.req_cap_php} color = {colorRequired}/>
            <Box name={ "required " + graphData.name } value={graphData.required} color = {colorRequired}/>
            </ul>
            </React.Fragment>
        )




    }
}

export default ParametersVis