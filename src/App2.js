import React from "react";
import "./components/myStyles.css"
import Visualization from "./components/Visualization"


class App extends React.Component {
  constructor() {
    super();
    };

    render(){
        return(
            <div>
                <Visualization></Visualization>
            </div>
        )
    }
  }

  export default App