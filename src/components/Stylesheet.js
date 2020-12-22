import React from "react"
import "./myStyles.css"
import ContinuousSlider from "./ContinuousSlider"
import MySlider from "./MySlider"



function Stylesheets() {
    return(
        <div className="main">
            <ul className="params1">
            <ContinuousSlider maxvalue={200} minvalue={0} namevalue={"Something"}/>
            <ContinuousSlider maxvalue={200} minvalue={0} namevalue={"Something more"}/>
            <ContinuousSlider maxvalue={200} minvalue={0} namevalue={"Something less"}/>

            </ul>
            <ul className="params2">Inputs 2</ul>
            <ul className="graphs">
                <h1 className="graphsSmall">small</h1>
                <h1 className="graphsMedium">medium</h1>
                <h1 className="graphsSmall">small</h1>
                <h1 className="graphsMedium">medium</h1>
            </ul>
            <ul className="paramsOut">Graphs</ul>
            <ul className="paramsOut">Graphs</ul>
        </div>
    )
    
}

export default Stylesheets