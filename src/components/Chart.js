import React, { useState } from "react";
import '../../node_modules/react-vis/dist/style.css';
import {FlexibleXYPlot,  LineSeries, XAxis, YAxis, Crosshair, DiscreteColorLegend } from 'react-vis';
import ControlledOpenSelect from "./SelectChart"


const axisStyle = {                            
    title:{fontWeight:600, fontSize: '12px'},
    text:{fontWeight:600 }
};


export default function DrawChart(props) {    
    const [chartName, setChartName] = useState('');
    const [yAxisLegend, setYAxisLegend] = useState('');
    const [crosshairValues, setCrosshairValues] = useState([]);
    const [series, setSeries] = useState([{
        title: 'Provided',
        disabled: false,
        data: null
    },
    {
        title: 'Required',
        disabled: false,
        data: null
    }]);

    const handleChartChange = (value) => {
        setChartName(value);        
        setYAxisLegend(getChartYAxisLegend(value));
        setSeries(
            [
                { title: 'Provided', disabled: false, data: getDataProvided(value) },
                { title: 'Required', disabled: false, data: getDataRequired(value) },
            ]
        );
        props.handleUpdateChart(value);          
    }

     /**
     * A callback to format the crosshair items.
     * @param {Object} values Array of values.
     * @returns {Array<Object>} Array of objects with titles and values.
     * @private
     */
    const _formatCrosshairItems = values => {        
        return values.map((v, i) => {
            return {
                title: series[i].title,
                value: v.y
            };
        });
    };

    /**
     * Format the title line of the crosshair.
     * @param {Array} values Array of values.
     * @returns {Object} The caption and the value of the title.
     * @private
     */
    const _formatCrosshairTitle = values => {
        return {
            title: 'Minute',
            value: values[0].x
        };
    };


    /**
     * Event handler for onMouseLeave.
     * @private
     */
    const _mouseLeaveHandler = () => {
        setCrosshairValues([]);
    };

    /**
     * Event handler for onNearestX.
     * @param {Object} value Selected value.
     * @param {number} index Index of the series.
     * @private
     */
    const _nearestXHandler = (value, { index }) => {          
        setCrosshairValues(
            series.map(s => s.data[index])
        );        
    };

    const getDataProvided = function (chartName) {
        const result = props.chartDataIn.filter(obj => {
          return obj.title === chartName
        }) 
        const firstCharXdata = result[0].x_provided;
        const firstCharYdata = result[0].y_provided;
        const zipped = firstCharXdata.map((xVal, i) => {
      
          return { x: xVal, y: firstCharYdata[i] };
        });
        return zipped;
      }
      
      const getDataRequired = function (chartName) {
        const result = props.chartDataIn.filter(obj => {
          return obj.title === chartName
        })
        const firstCharXdata = result[0].x_required;
        const firstCharYdata = result[0].y_required;
        const zipped = firstCharXdata.map((xVal, i) => {
      
          return { x: xVal, y: firstCharYdata[i] };
        });    
        return zipped;
      }
      
      const getChartYAxisLegend = function(chartName){
        const result =props.chartDataIn.filter(obj => {
          return obj.title === chartName
        })  
        return result[0].y_title;
      }      

    return (
        <>
            <ControlledOpenSelect onSelectionChange={handleChartChange}/>            
            <FlexibleXYPlot className="rv-xy-plot__series"
                onMouseLeave={_mouseLeaveHandler}>
                <DiscreteColorLegend style={
                    { position: 'absolute', right: '10px', top: '10px' }}
                    orientation="vertical"
                    items={
                        [{
                            title: 'Provided',
                            color: '#12939A'
                        },
                        {
                            title: 'Required',
                            color: '#79C7E3'
                        }
                        ]
                    }
                />
                <XAxis title='time-minutes' style={axisStyle}/>
                <YAxis title={yAxisLegend} style={axisStyle}/>
                <LineSeries className="ProvidedData"
                    color='#12939A'
                    style={
                        {
                            strokeWidth: 2
                        }
                    }
                    onNearestX={_nearestXHandler}                    
                    data={series[0].data}
                />
                <LineSeries className="RequiredData"
                    color='#79C7E3'
                    style={
                        {
                            strokeWidth: 2
                        }
                    }
                    data={series[1].data}
                />
                <Crosshair itemsFormat={_formatCrosshairItems}
                    titleFormat={_formatCrosshairTitle}
                    values={crosshairValues}
                    className={'test-class-name'}
                />
            </FlexibleXYPlot>
        </>
    );
}


